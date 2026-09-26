import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import api from "../../api/axios";

// =========================================================
// TYPES
// =========================================================

export interface CreateMidtransPayload {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
}

export interface MidtransPaymentData {
  paymentId?: number;
  paymentNumber?: string;

  orderNumber?: string;
  order_id?: string;

  amount?: number | string;

  status?: string;

  snapToken?: string | null;
  token?: string | null;

  paymentUrl?: string | null;
  redirectUrl?: string | null;
  redirect_url?: string | null;

  transaction_id?: string;
  transaction_status?: string;
  fraud_status?: string;
  payment_type?: string;

  gross_amount?: string | number;

  [key: string]: unknown;
}

export interface MidtransResponse<T = unknown> {
  success?: boolean;
  message?: string;
  data?: T;
}

export interface MidtransState {
  loading: boolean;

  snapToken: string | null;

  paymentUrl: string | null;

  redirectUrl: string | null;

  currentOrderId: string | null;

  currentTransaction: MidtransPaymentData | null;

  transactions: MidtransPaymentData[];

  paymentStatus: string;

  error: string | null;
}

// =========================================================
// ERROR HELPER
// =========================================================

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (typeof error === "object" && error !== null && "response" in error) {
    const axiosError = error as {
      response?: {
        data?: {
          message?: string;
        };
      };
      message?: string;
    };

    return axiosError.response?.data?.message || axiosError.message || fallback;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    const errorWithMessage = error as {
      message?: string;
    };

    return errorWithMessage.message || fallback;
  }

  return fallback;
};

// =========================================================
// CREATE PAYMENT
//
// POST /api/payments/create
//
// Backend menentukan:
// - grand_total
// - payment amount
// - Midtrans order
// =========================================================

export const createMidtransTransaction = createAsyncThunk<
  MidtransResponse<MidtransPaymentData>,
  CreateMidtransPayload,
  {
    rejectValue: string;
  }
>(
  "midtrans/createPayment",

  async (payload, thunkAPI) => {
    try {
      if (!payload.orderNumber) {
        return thunkAPI.rejectWithValue("Order number is required.");
      }

      if (!payload.customerName) {
        return thunkAPI.rejectWithValue("Customer name is required.");
      }

      if (!payload.customerEmail) {
        return thunkAPI.rejectWithValue("Customer email is required.");
      }

      const response = await api.post<MidtransResponse<MidtransPaymentData>>(
        "/payments/create",
        {
          order_number: payload.orderNumber,
          customer_name: payload.customerName,
          customer_email: payload.customerEmail,
          customer_phone: payload.customerPhone || undefined,
        },
      );

      return response.data;
    } catch (error: unknown) {
      console.error("MIDTRANS CREATE PAYMENT THUNK:", error);

      return thunkAPI.rejectWithValue(
        getErrorMessage(error, "Failed to create payment."),
      );
    }
  },
);

// =========================================================
// GET PAYMENT STATUS
//
// GET /api/payments/:orderNumber/status
// =========================================================

export const getMidtransTransactionStatus = createAsyncThunk<
  MidtransResponse<MidtransPaymentData>,
  string,
  {
    rejectValue: string;
  }
>(
  "midtrans/getPaymentStatus",

  async (orderNumber, thunkAPI) => {
    try {
      if (!orderNumber) {
        return thunkAPI.rejectWithValue("Order number is required.");
      }

      const response = await api.get<MidtransResponse<MidtransPaymentData>>(
        `/payments/${encodeURIComponent(orderNumber)}/status`,
      );

      return response.data;
    } catch (error: unknown) {
      console.error("MIDTRANS PAYMENT STATUS THUNK:", error);

      return thunkAPI.rejectWithValue(
        getErrorMessage(error, "Failed to retrieve payment status."),
      );
    }
  },
);

// =========================================================
// FETCH TRANSACTIONS
//
// Optional endpoint.
// Keep this thunk for future admin/payment history.
// =========================================================

export const fetchTransactions = createAsyncThunk<
  MidtransResponse<MidtransPaymentData[]>,
  void,
  {
    rejectValue: string;
  }
>(
  "midtrans/fetchTransactions",

  async (_, thunkAPI) => {
    try {
      const response = await api.get<MidtransResponse<MidtransPaymentData[]>>(
        "/payments/transactions",
      );

      return response.data;
    } catch (error: unknown) {
      console.error("MIDTRANS TRANSACTIONS THUNK:", error);

      return thunkAPI.rejectWithValue(
        getErrorMessage(error, "Failed to fetch transactions."),
      );
    }
  },
);

// =========================================================
// INITIAL STATE
// =========================================================

const initialState: MidtransState = {
  loading: false,

  snapToken: null,

  paymentUrl: null,

  redirectUrl: null,

  currentOrderId: null,

  currentTransaction: null,

  transactions: [],

  paymentStatus: "idle",

  error: null,
};

// =========================================================
// SLICE
// =========================================================

const midtransSlice = createSlice({
  name: "midtrans",

  initialState,

  reducers: {
    // =====================================================
    // RESET
    // =====================================================

    resetMidtransState: (state) => {
      state.loading = false;

      state.snapToken = null;

      state.paymentUrl = null;

      state.redirectUrl = null;

      state.currentOrderId = null;

      state.currentTransaction = null;

      state.paymentStatus = "idle";

      state.error = null;

      state.transactions = [];
    },

    // =====================================================
    // CLEAR CURRENT PAYMENT
    // =====================================================

    clearMidtransPayment: (state) => {
      state.snapToken = null;

      state.paymentUrl = null;

      state.redirectUrl = null;

      state.currentOrderId = null;

      state.currentTransaction = null;

      state.paymentStatus = "idle";

      state.error = null;
    },

    // =====================================================
    // REALTIME PAYMENT UPDATE
    // =====================================================

    paymentUpdatedRealtime: (
      state,
      action: PayloadAction<Partial<MidtransPaymentData>>,
    ) => {
      const { order_id, orderNumber, status, transaction_status } =
        action.payload;

      const targetOrder = orderNumber || order_id;

      const newStatus = transaction_status || status;

      state.transactions = state.transactions.map((trx) => {
        const trxOrder = trx.orderNumber || trx.order_id;

        if (trxOrder !== targetOrder) {
          return trx;
        }

        return {
          ...trx,
          ...action.payload,
          status: newStatus || trx.status,
          transaction_status: transaction_status || trx.transaction_status,
        };
      });

      const currentOrder = state.currentOrderId;

      if (currentOrder === targetOrder && state.currentTransaction) {
        state.currentTransaction = {
          ...state.currentTransaction,

          ...action.payload,

          status: newStatus || state.currentTransaction.status,

          transaction_status:
            transaction_status || state.currentTransaction.transaction_status,
        };
      }
    },
  },

  // =======================================================
  // EXTRA REDUCERS
  // =======================================================

  extraReducers: (builder) => {
    builder

      // ===================================================
      // CREATE PAYMENT
      // ===================================================

      .addCase(createMidtransTransaction.pending, (state) => {
        state.loading = true;

        state.paymentStatus = "processing";

        state.error = null;
      })

      .addCase(createMidtransTransaction.fulfilled, (state, action) => {
        state.loading = false;

        const response = action.payload || {};

        const data = response.data || {};

        state.snapToken = data.snapToken || data.token || null;

        state.paymentUrl =
          data.paymentUrl || data.redirectUrl || data.redirect_url || null;

        state.redirectUrl =
          data.redirectUrl || data.redirect_url || data.paymentUrl || null;

        state.currentOrderId = data.orderNumber || data.order_id || null;

        state.currentTransaction = data;

        state.paymentStatus = data.status || "ready";

        state.error = null;
      })

      .addCase(createMidtransTransaction.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Failed to create payment.";

        state.paymentStatus = "failed";
      })

      // ===================================================
      // GET PAYMENT STATUS
      // ===================================================

      .addCase(getMidtransTransactionStatus.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(getMidtransTransactionStatus.fulfilled, (state, action) => {
        state.loading = false;

        const response = action.payload || {};

        const data = response.data || {};

        state.currentTransaction = data;

        state.currentOrderId =
          data.orderNumber || data.order_id || state.currentOrderId;

        state.paymentStatus =
          data.status || data.transaction_status || "unknown";

        state.error = null;
      })

      .addCase(getMidtransTransactionStatus.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Failed to retrieve payment status.";
      })

      // ===================================================
      // FETCH TRANSACTIONS
      // ===================================================

      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;

        const response = action.payload || {};

        const data = response.data || [];

        state.transactions = Array.isArray(data) ? data : [];

        state.error = null;
      })

      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Failed to fetch transactions.";
      });
  },
});

// =========================================================
// ACTIONS
// =========================================================

export const {
  resetMidtransState,
  clearMidtransPayment,
  paymentUpdatedRealtime,
} = midtransSlice.actions;

// =========================================================
// REDUCER
// =========================================================

export default midtransSlice.reducer;
