import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../stores/store";

/**
 * =========================================================
 * PUBLIC API CONFIGURATION
 * =========================================================
 *
 * Support / Donation:
 *
 * - Tidak membutuhkan login
 * - Tidak membutuhkan access token
 * - Tidak membutuhkan refresh token
 * - Tidak menggunakan auth interceptor
 *
 * Backend endpoint:
 *
 * POST /api/support/pay
 *
 * =========================================================
 */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5006/api";

/**
 * =========================================================
 * PUBLIC AXIOS INSTANCE
 * =========================================================
 */

const publicApi = axios.create({
  baseURL: API_BASE_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  timeout: 15000,
});

/**
 * =========================================================
 * TYPES
 * =========================================================
 */

export interface SupportPaymentRequest {
  amount: number;
  customer_name: string;
  customer_email?: string;
  customer_phone?: string;
}

export interface SupportPaymentData {
  id: number;
  supportNumber: string;
  amount: number;
  currency: string;
  status: string;
  provider: string;
  midtransOrderId: string;
  snapToken: string | null;
  paymentUrl: string | null;
}

interface SupportPaymentState {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: SupportPaymentData | null;
}

/**
 * =========================================================
 * INITIAL STATE
 * =========================================================
 */

const initialState: SupportPaymentState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

/**
 * =========================================================
 * CREATE SUPPORT PAYMENT
 * =========================================================
 *
 * PUBLIC PAYMENT
 *
 * POST /api/support/pay
 *
 * Tidak membutuhkan login.
 *
 * =========================================================
 */

export const createSupportPayment = createAsyncThunk<
  SupportPaymentData,
  SupportPaymentRequest,
  {
    rejectValue: string;
  }
>(
  "supportPayment/createSupportPayment",

  async (payload, { rejectWithValue }) => {
    console.log("ABN SUPPORT: Payment payload =>", payload);

    try {
      console.log("ABN SUPPORT: Creating public payment...");

      const response = await publicApi.post("/support/pay", payload);

      const data = response.data?.data as SupportPaymentData | undefined;

      if (!data) {
        console.error(
          "ABN SUPPORT: Response tidak memiliki data.",
          response.data,
        );

        return rejectWithValue("Response pembayaran Support ABN tidak valid.");
      }

      console.log("ABN SUPPORT: Payment berhasil dibuat.", data);

      return data;
    } catch (error: unknown) {
      console.error("ABN SUPPORT: CREATE PAYMENT ERROR:", error);

      if (axios.isAxiosError(error)) {
        const serverMessage = error.response?.data?.message;

        if (typeof serverMessage === "string") {
          return rejectWithValue(serverMessage);
        }

        if (error.message) {
          return rejectWithValue(error.message);
        }
      }

      return rejectWithValue("Gagal membuat pembayaran Support ABN.");
    }
  },
);

/**
 * =========================================================
 * SLICE
 * =========================================================
 */

const supportPaymentSlice = createSlice({
  name: "supportPayment",

  initialState,

  reducers: {
    /**
     * -----------------------------------------------------
     * CLEAR PAYMENT
     * -----------------------------------------------------
     */

    clearSupportPayment(state) {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },

    /**
     * -----------------------------------------------------
     * CLEAR ERROR
     * -----------------------------------------------------
     */

    clearSupportPaymentError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /**
       * -----------------------------------------------------
       * PENDING
       * -----------------------------------------------------
       */

      .addCase(createSupportPayment.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.data = null;
      })

      /**
       * -----------------------------------------------------
       * FULFILLED
       * -----------------------------------------------------
       */

      .addCase(
        createSupportPayment.fulfilled,
        (state, action: PayloadAction<SupportPaymentData>) => {
          state.loading = false;
          state.success = true;
          state.error = null;
          state.data = action.payload;
        },
      )

      /**
       * -----------------------------------------------------
       * REJECTED
       * -----------------------------------------------------
       */

      .addCase(createSupportPayment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.data = null;

        state.error = action.payload || "Gagal membuat pembayaran Support ABN.";
      });
  },
});

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */

export const { clearSupportPayment, clearSupportPaymentError } =
  supportPaymentSlice.actions;

/**
 * =========================================================
 * SELECTORS
 * =========================================================
 */

export const selectSupportPaymentLoading = (state: RootState) =>
  state.supportPayment.loading;

export const selectSupportPaymentSuccess = (state: RootState) =>
  state.supportPayment.success;

export const selectSupportPaymentError = (state: RootState) =>
  state.supportPayment.error;

export const selectSupportPaymentData = (state: RootState) =>
  state.supportPayment.data;

/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export default supportPaymentSlice.reducer;
