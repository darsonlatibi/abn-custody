/* =========================================================
   ABN FLEET SYSTEM
   EMAIL SLICE
   ========================================================= */

import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import api from "../../api/axios";

/* =========================================================
   TYPES
   ========================================================= */

export type MailFolder = "INBOX" | "SENT" | "DRAFT" | "ARCHIVE" | "TRASH";

export type EmailStatus = "DRAFT" | "QUEUED" | "SENDING" | "SENT" | "FAILED";

export type RecipientType = "TO" | "CC" | "BCC";

export type RecipientStatus = "PENDING" | "SENT" | "DELIVERED" | "FAILED";

/* =========================================================
   RECIPIENT
   ========================================================= */

export interface EmailRecipient {
  id: number;

  emailId: number;

  email: string;

  name?: string | null;

  type: RecipientType;

  status: RecipientStatus;
}

/* =========================================================
   EMAIL
   ========================================================= */

export interface EmailMessage {
  id: number;

  fromEmail: string;

  fromName?: string | null;

  subject: string;

  body: string;

  preview?: string | null;

  folder: MailFolder;

  status: EmailStatus;

  unread: boolean;

  starred: boolean;

  parentId?: number | null;

  threadId?: number | null;

  messageId?: string | null;

  sentAt?: string | null;

  receivedAt?: string | null;

  hasAttachment?: boolean;

  createdAt: string;

  updatedAt: string;

  recipients?: EmailRecipient[];
}

/* =========================================================
   API RESPONSE
   ========================================================= */

interface EmailListResponse {
  success: boolean;

  data: EmailMessage[];

  total?: number;

  page?: number;

  limit?: number;

  pages?: number;
}

interface EmailDetailResponse {
  success: boolean;

  data: EmailMessage;
}

interface EmailMutationResponse {
  success: boolean;

  message?: string;

  data: EmailMessage;
}

interface EmailDeleteResponse {
  success: boolean;

  message?: string;

  data?: {
    id: number;
  };
}

/* =========================================================
   CREATE EMAIL PAYLOAD
   ========================================================= */

export interface CreateEmailPayload {
  to: string[];

  cc?: string[];

  bcc?: string[];

  subject: string;

  body: string;

  parentId?: number | null;

  threadId?: number | null;
}

/* =========================================================
   FETCH EMAIL PARAMS
   ========================================================= */

export interface FetchEmailsParams {
  folder?: MailFolder;

  search?: string;

  page?: number;

  limit?: number;
}

/* =========================================================
   STATE
   ========================================================= */

interface EmailState {
  emails: EmailMessage[];

  selectedEmail: EmailMessage | null;

  folder: MailFolder;

  loading: boolean;

  sending: boolean;

  error: string | null;

  total: number;

  page: number;

  limit: number;

  pages: number;
}

/* =========================================================
   INITIAL STATE
   ========================================================= */

const initialState: EmailState = {
  emails: [],

  selectedEmail: null,

  folder: "INBOX",

  loading: false,

  sending: false,

  error: null,

  total: 0,

  page: 1,

  limit: 25,

  pages: 1,
};

/* =========================================================
   ERROR HELPER
   ========================================================= */

const getErrorMessage = (error: any): string => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    "Terjadi kesalahan pada email service."
  );
};

/* =========================================================
   GET EMAILS
   GET /api/email
   ========================================================= */

export const fetchEmails = createAsyncThunk<
  EmailListResponse,
  FetchEmailsParams | void,
  {
    rejectValue: string;
  }
>(
  "email/fetchEmails",

  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get<EmailListResponse>("/email", {
        params: {
          folder: params?.folder || "INBOX",

          search: params?.search || undefined,

          page: params?.page || 1,

          limit: params?.limit || 25,
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   GET EMAIL DETAIL
   GET /api/email/:id
   ========================================================= */

export const fetchEmailById = createAsyncThunk<
  EmailDetailResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/fetchEmailById",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get<EmailDetailResponse>(`/email/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   CREATE / SEND EMAIL
   POST /api/email
   ========================================================= */

export const sendEmail = createAsyncThunk<
  EmailMutationResponse,
  CreateEmailPayload,
  {
    rejectValue: string;
  }
>(
  "email/sendEmail",

  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post<EmailMutationResponse>("/email", payload);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   MARK READ
   PATCH /api/email/:id/read
   ========================================================= */

export const markEmailAsRead = createAsyncThunk<
  EmailMutationResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/markEmailAsRead",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch<EmailMutationResponse>(
        `/email/${id}/read`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   MARK UNREAD
   PATCH /api/email/:id/unread
   ========================================================= */

export const markEmailAsUnread = createAsyncThunk<
  EmailMutationResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/markEmailAsUnread",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch<EmailMutationResponse>(
        `/email/${id}/unread`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   TOGGLE STAR
   PATCH /api/email/:id/star
   ========================================================= */

export const toggleEmailStar = createAsyncThunk<
  EmailMutationResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/toggleEmailStar",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch<EmailMutationResponse>(
        `/email/${id}/star`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   ARCHIVE
   PATCH /api/email/:id/archive
   ========================================================= */

export const archiveEmail = createAsyncThunk<
  EmailMutationResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/archiveEmail",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.patch<EmailMutationResponse>(
        `/email/${id}/archive`,
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   DELETE
   DELETE /api/email/:id
   ========================================================= */

export const deleteEmail = createAsyncThunk<
  EmailDeleteResponse,
  number,
  {
    rejectValue: string;
  }
>(
  "email/deleteEmail",

  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete<EmailDeleteResponse>(`/email/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

/* =========================================================
   SLICE
   ========================================================= */

const emailSlice = createSlice({
  name: "email",

  initialState,

  reducers: {
    /* =====================================================
       SET FOLDER
       ===================================================== */

    setEmailFolder: (state, action: PayloadAction<MailFolder>) => {
      state.folder = action.payload;

      state.selectedEmail = null;

      state.page = 1;

      state.error = null;
    },

    /* =====================================================
       SELECT EMAIL
       ===================================================== */

    setSelectedEmail: (state, action: PayloadAction<EmailMessage | null>) => {
      state.selectedEmail = action.payload;
    },

    /* =====================================================
       CLEAR ERROR
       ===================================================== */

    clearEmailError: (state) => {
      state.error = null;
    },

    /* =====================================================
       CLEAR EMAILS
       ===================================================== */

    clearEmails: (state) => {
      state.emails = [];

      state.selectedEmail = null;

      state.total = 0;

      state.page = 1;

      state.pages = 1;
    },

    /* =====================================================
       SET PAGE
       ===================================================== */

    setEmailPage: (state, action: PayloadAction<number>) => {
      state.page = Math.max(1, action.payload);
    },

    /* =====================================================
       SET LIMIT
       ===================================================== */

    setEmailLimit: (state, action: PayloadAction<number>) => {
      state.limit = Math.max(1, action.payload);

      state.page = 1;
    },
  },

  extraReducers: (builder) => {
    /* =====================================================
       FETCH EMAILS
       ===================================================== */

    builder
      .addCase(fetchEmails.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(fetchEmails.fulfilled, (state, action) => {
        state.loading = false;

        state.emails = action.payload.data || [];

        state.total = action.payload.total ?? action.payload.data?.length ?? 0;

        state.page = action.payload.page ?? state.page;

        state.limit = action.payload.limit ?? state.limit;

        state.pages =
          action.payload.pages ??
          Math.max(1, Math.ceil(state.total / state.limit));
      })

      .addCase(fetchEmails.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Gagal mengambil email.";
      });

    /* =====================================================
       FETCH DETAIL
       ===================================================== */

    builder
      .addCase(fetchEmailById.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(fetchEmailById.fulfilled, (state, action) => {
        state.loading = false;

        const email = action.payload.data;

        state.selectedEmail = email;

        const index = state.emails.findIndex((item) => item.id === email.id);

        if (index !== -1) {
          state.emails[index] = email;
        }
      })

      .addCase(fetchEmailById.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Gagal mengambil detail email.";
      });

    /* =====================================================
       SEND EMAIL
       ===================================================== */

    builder
      .addCase(sendEmail.pending, (state) => {
        state.sending = true;

        state.error = null;
      })

      .addCase(sendEmail.fulfilled, (state, action) => {
        state.sending = false;

        const email = action.payload.data;

        if (email) {
          /*
           * SENT email masuk ke list jika
           * current folder memang SENT.
           */
          if (state.folder === "SENT") {
            state.emails.unshift(email);

            state.total += 1;
          }
        }
      })

      .addCase(sendEmail.rejected, (state, action) => {
        state.sending = false;

        state.error = action.payload || "Gagal mengirim email.";
      });

    /* =====================================================
       MARK READ
       ===================================================== */

    builder.addCase(markEmailAsRead.fulfilled, (state, action) => {
      const updated = action.payload.data;

      const index = state.emails.findIndex((email) => email.id === updated.id);

      if (index !== -1) {
        state.emails[index] = updated;
      }

      if (state.selectedEmail?.id === updated.id) {
        state.selectedEmail = updated;
      }
    });

    /* =====================================================
       MARK UNREAD
       ===================================================== */

    builder.addCase(markEmailAsUnread.fulfilled, (state, action) => {
      const updated = action.payload.data;

      const index = state.emails.findIndex((email) => email.id === updated.id);

      if (index !== -1) {
        state.emails[index] = updated;
      }

      if (state.selectedEmail?.id === updated.id) {
        state.selectedEmail = updated;
      }
    });

    /* =====================================================
       STAR
       ===================================================== */

    builder.addCase(toggleEmailStar.fulfilled, (state, action) => {
      const updated = action.payload.data;

      const index = state.emails.findIndex((email) => email.id === updated.id);

      if (index !== -1) {
        state.emails[index] = updated;
      }

      if (state.selectedEmail?.id === updated.id) {
        state.selectedEmail = updated;
      }
    });

    /* =====================================================
       ARCHIVE
       ===================================================== */

    builder.addCase(archiveEmail.fulfilled, (state, action) => {
      const updated = action.payload.data;

      state.emails = state.emails.filter((email) => email.id !== updated.id);

      state.total = Math.max(0, state.total - 1);

      if (state.selectedEmail?.id === updated.id) {
        state.selectedEmail = null;
      }
    });

    /* =====================================================
       DELETE
       ===================================================== */

    builder.addCase(deleteEmail.fulfilled, (state, action) => {
      const deletedId = action.payload.data?.id;

      if (deletedId) {
        state.emails = state.emails.filter((email) => email.id !== deletedId);

        state.total = Math.max(0, state.total - 1);
      }

      if (state.selectedEmail?.id === deletedId) {
        state.selectedEmail = null;
      }
    });
  },
});

/* =========================================================
   ACTIONS
   ========================================================= */

export const {
  setEmailFolder,
  setSelectedEmail,
  clearEmailError,
  clearEmails,
  setEmailPage,
  setEmailLimit,
} = emailSlice.actions;

/* =========================================================
   SELECTORS
   ========================================================= */

export const selectEmails = (state: { email: EmailState }) =>
  state.email.emails;

export const selectSelectedEmail = (state: { email: EmailState }) =>
  state.email.selectedEmail;

export const selectEmailFolder = (state: { email: EmailState }) =>
  state.email.folder;

export const selectEmailLoading = (state: { email: EmailState }) =>
  state.email.loading;

export const selectEmailSending = (state: { email: EmailState }) =>
  state.email.sending;

export const selectEmailError = (state: { email: EmailState }) =>
  state.email.error;

export const selectEmailTotal = (state: { email: EmailState }) =>
  state.email.total;

export const selectEmailPage = (state: { email: EmailState }) =>
  state.email.page;

export const selectEmailLimit = (state: { email: EmailState }) =>
  state.email.limit;

export const selectEmailPages = (state: { email: EmailState }) =>
  state.email.pages;

/* =========================================================
   EXPORT
   ========================================================= */

export default emailSlice.reducer;
