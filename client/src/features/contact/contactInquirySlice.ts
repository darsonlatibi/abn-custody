import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../../api/axios";

// =========================================================
// TYPES
// =========================================================

export interface ContactInquiry {
  id: string | number;
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  project_type?: string;
  projectType?: string;
  message: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateContactInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  project_type?: string;
  message: string;
}

interface CreateContactInquiryResponse {
  success: boolean;
  message?: string;
  inquiry?: ContactInquiry;
  data?: ContactInquiry;
}

// =========================================================
// STATE
// =========================================================

interface ContactInquiryState {
  creating: boolean;
  error: string | null;
  submittedInquiry: ContactInquiry | null;
}

const initialState: ContactInquiryState = {
  creating: false,
  error: null,
  submittedInquiry: null,
};

// =========================================================
// CREATE CONTACT INQUIRY
// =========================================================

export const createContactInquiry = createAsyncThunk<
  ContactInquiry,
  CreateContactInquiryPayload,
  { rejectValue: string }
>("contactInquiry/create", async (data, thunkAPI) => {
  try {
    const response = await api.post<CreateContactInquiryResponse>(
      "/contact-inquiry",
      data,
    );

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Gagal mengirim pesan.",
      );
    }

    const inquiry = response.data.inquiry ?? response.data.data;

    if (!inquiry) {
      return thunkAPI.rejectWithValue("Response contact inquiry tidak valid.");
    }

    return inquiry;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Gagal mengirim pesan.";

    return thunkAPI.rejectWithValue(message);
  }
});

// =========================================================
// SLICE
// =========================================================

const contactInquirySlice = createSlice({
  name: "contactInquiry",

  initialState,

  reducers: {
    clearContactInquiryError: (state) => {
      state.error = null;
    },

    resetContactInquiry: () => initialState,

    setSubmittedInquiry: (
      state,
      action: PayloadAction<ContactInquiry | null>,
    ) => {
      state.submittedInquiry = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // -----------------------------------------------------
      // CREATE
      // -----------------------------------------------------

      .addCase(createContactInquiry.pending, (state) => {
        state.creating = true;
        state.error = null;
      })

      .addCase(createContactInquiry.fulfilled, (state, action) => {
        state.creating = false;
        state.submittedInquiry = action.payload;
        state.error = null;
      })

      .addCase(createContactInquiry.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload || "Gagal mengirim pesan.";
      });
  },
});

// =========================================================
// ACTIONS
// =========================================================

export const {
  clearContactInquiryError,
  resetContactInquiry,
  setSubmittedInquiry,
} = contactInquirySlice.actions;

// =========================================================
// SELECTORS
// =========================================================

export const selectContactInquiryCreating = (state: {
  contactInquiry: ContactInquiryState;
}) => state.contactInquiry.creating;

export const selectContactInquiryError = (state: {
  contactInquiry: ContactInquiryState;
}) => state.contactInquiry.error;

export const selectSubmittedContactInquiry = (state: {
  contactInquiry: ContactInquiryState;
}) => state.contactInquiry.submittedInquiry;

// =========================================================
// REDUCER
// =========================================================

export default contactInquirySlice.reducer;
