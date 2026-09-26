import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import api from "../../api/axios";

/* =========================================================
   TYPES
   ========================================================= */

export type CustomSolutionRequestStatus =
  | "NEW"
  | "REVIEWING"
  | "CONTACTED"
  | "PROPOSAL"
  | "CLOSED";

export type CustomSolutionAttachment = {
  originalName: string;
  filename: string;
  path?: string;
  mimeType?: string;
  size?: number;
};

export type CustomSolutionRequest = {
  id: number;

  companyName: string;
  industry?: string | null;

  contactName: string;
  position?: string | null;

  email: string;
  phone?: string | null;
  website?: string | null;

  solutionName: string;
  businessProblem: string;
  objectives: string;

  users?: string | null;
  departments?: string | null;

  dataSources: string[];
  integrations: string[];

  realtime?: string | null;
  aiRequired?: string | null;

  deployment?: string | null;
  infrastructure?: string | null;
  security?: string | null;

  timeline?: string | null;
  budget?: string | null;

  additionalNotes?: string | null;

  attachments: CustomSolutionAttachment[];

  status: CustomSolutionRequestStatus;

  emailSent: boolean;
  emailSentAt?: string | null;

  createdAt: string;
  updatedAt: string;
};

export type CustomSolutionFormPayload = {
  companyName: string;
  industry: string;

  contactName: string;
  position: string;

  email: string;
  phone: string;
  website: string;

  solutionName: string;
  businessProblem: string;
  objectives: string;

  users: string;
  departments: string;

  dataSources: string[];
  integrations: string[];

  realtime: string;
  aiRequired: string;

  deployment: string;
  infrastructure: string;
  security: string;

  timeline: string;
  budget: string;

  additionalNotes: string;
};

export type CreateCustomSolutionResponse = {
  ok: boolean;
  message: string;
  requestId?: number;
  emailSent?: boolean;
  request?: CustomSolutionRequest;
};

export type GetCustomSolutionRequestsResponse = {
  ok: boolean;
  count: number;
  requests: CustomSolutionRequest[];
};

export type GetCustomSolutionRequestResponse = {
  ok: boolean;
  request: CustomSolutionRequest;
};

/* =========================================================
   STATE
   ========================================================= */

export type CustomSolutionRequestsState = {
  requests: CustomSolutionRequest[];

  selectedRequest: CustomSolutionRequest | null;

  loading: boolean;
  submitting: boolean;
  detailLoading: boolean;

  error: string | null;
  submitError: string | null;
  detailError: string | null;

  successMessage: string | null;

  total: number;
};

/* =========================================================
   INITIAL STATE
   ========================================================= */

const initialState: CustomSolutionRequestsState = {
  requests: [],

  selectedRequest: null,

  loading: false,
  submitting: false,
  detailLoading: false,

  error: null,
  submitError: null,
  detailError: null,

  successMessage: null,

  total: 0,
};

/* =========================================================
   ERROR HELPER
   ========================================================= */

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null && "response" in error) {
    const response = (
      error as {
        response?: {
          data?: {
            message?: string;
          };
        };
      }
    ).response;

    if (response?.data?.message) {
      return response.data.message;
    }
  }

  return "An unexpected error occurred.";
};

/* =========================================================
   FORM DATA BUILDER
   ========================================================= */

const buildFormData = (
  form: CustomSolutionFormPayload,
  files: File[] = [],
): FormData => {
  const formData = new FormData();

  /* -------------------------------------------------------
     COMPANY
     ------------------------------------------------------- */

  formData.append("companyName", form.companyName.trim());
  formData.append("industry", form.industry.trim());

  formData.append("contactName", form.contactName.trim());
  formData.append("position", form.position.trim());

  formData.append("email", form.email.trim());
  formData.append("phone", form.phone.trim());
  formData.append("website", form.website.trim());

  /* -------------------------------------------------------
     BUSINESS
     ------------------------------------------------------- */

  formData.append("solutionName", form.solutionName.trim());

  formData.append("businessProblem", form.businessProblem.trim());

  formData.append("objectives", form.objectives.trim());

  formData.append("users", form.users.trim());
  formData.append("departments", form.departments.trim());

  /* -------------------------------------------------------
     DATA SOURCES
     ------------------------------------------------------- */

  form.dataSources.forEach((item) => {
    formData.append("dataSources", item);
  });

  /* -------------------------------------------------------
     INTEGRATIONS
     ------------------------------------------------------- */

  form.integrations.forEach((item) => {
    formData.append("integrations", item);
  });

  /* -------------------------------------------------------
     TECHNOLOGY
     ------------------------------------------------------- */

  formData.append("realtime", form.realtime);
  formData.append("aiRequired", form.aiRequired);
  formData.append("deployment", form.deployment);

  formData.append("infrastructure", form.infrastructure.trim());

  formData.append("security", form.security.trim());

  /* -------------------------------------------------------
     PROJECT
     ------------------------------------------------------- */

  formData.append("timeline", form.timeline);
  formData.append("budget", form.budget);

  formData.append("additionalNotes", form.additionalNotes.trim());

  /* -------------------------------------------------------
     FILES
     ------------------------------------------------------- */

  files.forEach((file) => {
    formData.append("attachments", file);
  });

  return formData;
};

/* =========================================================
   THUNKS
   ========================================================= */

/**
 * PUBLIC
 *
 * Submit Custom Solution Request
 *
 * POST:
 * /api/custom-solution-requests
 */
export const submitCustomSolutionRequest = createAsyncThunk<
  CreateCustomSolutionResponse,
  {
    form: CustomSolutionFormPayload;
    files?: File[];
  },
  {
    rejectValue: string;
  }
>(
  "customSolutionRequests/submitCustomSolutionRequest",

  async ({ form, files = [] }, { rejectWithValue }) => {
    try {
      const formData = buildFormData(form, files);

      const response = await api.post<CreateCustomSolutionResponse>(
        "/custom-solution-requests",
        formData,
      );

      if (!response.data?.ok) {
        return rejectWithValue(
          response.data?.message || "Failed to submit custom solution request.",
        );
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/**
 * ADMIN / INTERNAL
 *
 * GET:
 * /api/custom-solution-requests
 */
export const fetchCustomSolutionRequests = createAsyncThunk<
  CustomSolutionRequest[],
  void,
  {
    rejectValue: string;
  }
>(
  "customSolutionRequests/fetchCustomSolutionRequests",

  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<GetCustomSolutionRequestsResponse>(
        "/custom-solution-requests",
      );

      if (!response.data?.ok) {
        return rejectWithValue("Failed to load custom solution requests.");
      }

      return response.data.requests || [];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/**
 * ADMIN / INTERNAL
 *
 * GET:
 * /api/custom-solution-requests/:id
 */
export const fetchCustomSolutionRequestById = createAsyncThunk<
  CustomSolutionRequest,
  number | string,
  {
    rejectValue: string;
  }
>(
  "customSolutionRequests/fetchCustomSolutionRequestById",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get<GetCustomSolutionRequestResponse>(
        `/custom-solution-requests/${id}`,
      );

      if (!response.data?.ok || !response.data.request) {
        return rejectWithValue("Custom solution request not found.");
      }

      return response.data.request;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   SLICE
   ========================================================= */

const customSolutionRequestsSlice = createSlice({
  name: "customSolutionRequests",

  initialState,

  reducers: {
    clearCustomSolutionError: (state) => {
      state.error = null;
    },

    clearCustomSolutionSubmitError: (state) => {
      state.submitError = null;
    },

    clearCustomSolutionDetailError: (state) => {
      state.detailError = null;
    },

    clearCustomSolutionSuccess: (state) => {
      state.successMessage = null;
    },

    clearSelectedCustomSolutionRequest: (state) => {
      state.selectedRequest = null;
    },

    setSelectedCustomSolutionRequest: (
      state,
      action: PayloadAction<CustomSolutionRequest | null>,
    ) => {
      state.selectedRequest = action.payload;
    },

    resetCustomSolutionRequestsState: () => {
      return initialState;
    },
  },

  /* =====================================================
       EXTRA REDUCERS
       ===================================================== */

  extraReducers: (builder) => {
    /* ---------------------------------------------------
         SUBMIT
         --------------------------------------------------- */

    builder
      .addCase(submitCustomSolutionRequest.pending, (state) => {
        state.submitting = true;

        state.submitError = null;
        state.successMessage = null;
      })

      .addCase(submitCustomSolutionRequest.fulfilled, (state, action) => {
        state.submitting = false;

        state.submitError = null;

        state.successMessage =
          action.payload.message ||
          "Custom solution request submitted successfully.";

        /*
         * Backend may return the
         * created request.
         */

        if (action.payload.request) {
          state.requests.unshift(action.payload.request);

          state.total = state.requests.length;
        }
      })

      .addCase(submitCustomSolutionRequest.rejected, (state, action) => {
        state.submitting = false;

        state.submitError =
          action.payload ||
          action.error.message ||
          "Failed to submit custom solution request.";
      });

    /* ---------------------------------------------------
         FETCH ALL
         --------------------------------------------------- */

    builder
      .addCase(fetchCustomSolutionRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCustomSolutionRequests.fulfilled, (state, action) => {
        state.loading = false;

        state.requests = action.payload;

        state.total = action.payload.length;

        state.error = null;
      })

      .addCase(fetchCustomSolutionRequests.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          action.error.message ||
          "Failed to load custom solution requests.";
      });

    /* ---------------------------------------------------
         FETCH DETAIL
         --------------------------------------------------- */

    builder
      .addCase(fetchCustomSolutionRequestById.pending, (state) => {
        state.detailLoading = true;
        state.detailError = null;
      })

      .addCase(fetchCustomSolutionRequestById.fulfilled, (state, action) => {
        state.detailLoading = false;

        state.selectedRequest = action.payload;

        state.detailError = null;
      })

      .addCase(fetchCustomSolutionRequestById.rejected, (state, action) => {
        state.detailLoading = false;

        state.detailError =
          action.payload ||
          action.error.message ||
          "Failed to load custom solution request.";
      });
  },
});

/* =========================================================
   ACTIONS
   ========================================================= */

export const {
  clearCustomSolutionError,
  clearCustomSolutionSubmitError,
  clearCustomSolutionDetailError,
  clearCustomSolutionSuccess,
  clearSelectedCustomSolutionRequest,
  setSelectedCustomSolutionRequest,
  resetCustomSolutionRequestsState,
} = customSolutionRequestsSlice.actions;

/* =========================================================
   SELECTORS
   ========================================================= */

export const selectCustomSolutionRequestsState = (
  state: any,
): CustomSolutionRequestsState => state.customSolutionRequests;

export const selectCustomSolutionRequests = (
  state: any,
): CustomSolutionRequest[] => state.customSolutionRequests.requests;

export const selectSelectedCustomSolutionRequest = (
  state: any,
): CustomSolutionRequest | null => state.customSolutionRequests.selectedRequest;

export const selectCustomSolutionLoading = (state: any): boolean =>
  state.customSolutionRequests.loading;

export const selectCustomSolutionSubmitting = (state: any): boolean =>
  state.customSolutionRequests.submitting;

export const selectCustomSolutionDetailLoading = (state: any): boolean =>
  state.customSolutionRequests.detailLoading;

export const selectCustomSolutionError = (state: any): string | null =>
  state.customSolutionRequests.error;

export const selectCustomSolutionSubmitError = (state: any): string | null =>
  state.customSolutionRequests.submitError;

export const selectCustomSolutionDetailError = (state: any): string | null =>
  state.customSolutionRequests.detailError;

export const selectCustomSolutionSuccessMessage = (state: any): string | null =>
  state.customSolutionRequests.successMessage;

export const selectCustomSolutionTotal = (state: any): number =>
  state.customSolutionRequests.total;

/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

export default customSolutionRequestsSlice.reducer;
