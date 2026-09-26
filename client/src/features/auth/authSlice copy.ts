import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import api from "../../api/axios";

/* =========================================================
   ABN TRADE
   AUTH SLICE
   ========================================================= */

/* =========================================================
   TYPES
   ========================================================= */

export interface AuthUser {
  id: string | number;
  email: string;
  username?: string;
  full_name?: string;
  role?: string;
  status?: string;
}

/* =========================================================
   LOGIN RESPONSE
   Backend:
   {
     success: true,
     message: "...",
     data: {
       user,
       accessToken,
       refreshToken,
       expiresIn
     }
   }
   ========================================================= */

interface LoginResponse {
  success: boolean;
  message?: string;

  data?: {
    accessToken: string;
    refreshToken?: string;
    expiresIn?: string;
    user: AuthUser;
  };
}

/* =========================================================
   LOGIN RESULT
   ========================================================= */

interface LoginResult {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: string;
  user: AuthUser;
}

/* =========================================================
   LOGOUT RESPONSE
   ========================================================= */

interface LogoutResponse {
  success: boolean;
  message?: string;
}

/* =========================================================
   REGISTER RESPONSE
   ========================================================= */

interface RegisterResponse {
  success: boolean;
  message?: string;
  user?: AuthUser;
}

/* =========================================================
   FORGOT PASSWORD RESPONSE
   ========================================================= */

interface ForgotPasswordResponse {
  success: boolean;
  message?: string;
}
interface ChangePasswordResponse {
  success: boolean;
  message?: string;
}
/* =========================================================
   CURRENT USER RESPONSE
   Backend utama:
   {
     success: true,
     user: {...}
   }

   Optional compatibility:
   {
     success: true,
     data: {
       user: {...}
     }
   }
   ========================================================= */

interface MeResponse {
  success: boolean;
  message?: string;

  user?: AuthUser;

  data?: {
    user?: AuthUser;
  };
}

/* =========================================================
   AUTH STATE
   ========================================================= */

export interface AuthState {
  user: AuthUser | null;

  /*
   * Access token hanya disimpan di memory Redux.
   *
   * Refresh token tetap berada di HttpOnly Cookie.
   */
  accessToken: string | null;

  authenticated: boolean;

  loading: boolean;

  initialized: boolean;

  /*
   * Dipertahankan untuk kompatibilitas UI.
   * Refresh aktual dikelola oleh axios.ts.
   */
  refreshing: boolean;

  error: string | null;
}

/* =========================================================
   INITIAL STATE
   ========================================================= */

const initialState: AuthState = {
  user: null,
  accessToken: null,
  authenticated: false,
  loading: false,
  initialized: false,
  refreshing: false,
  error: null,
};

/* =========================================================
   LOGIN
   POST /api/auth/login
   ========================================================= */

export const login = createAsyncThunk<
  LoginResult,
  {
    email: string;
    password: string;
  },
  {
    rejectValue: string;
  }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await api.post<LoginResponse>("/auth/login", credentials, {
      withCredentials: true,
    });

    const data = response.data?.data;

    if (!response.data?.success || !data?.accessToken || !data?.user) {
      return thunkAPI.rejectWithValue(response.data?.message || "Login gagal.");
    }

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
      user: data.user,
    };
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Email atau password salah.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   LOGOUT
   POST /api/auth/logout
   ========================================================= */

export const logout = createAsyncThunk<
  LogoutResponse,
  void,
  {
    rejectValue: string;
  }
>("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await api.post<LogoutResponse>(
      "/auth/logout",
      {},
      {
        withCredentials: true,
      },
    );

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Logout gagal.",
      );
    }

    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Logout gagal. Silakan coba lagi.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   REGISTER
   POST /api/auth/register
   ========================================================= */

export const register = createAsyncThunk<
  RegisterResponse,
  {
    email: string;
    password: string;
    full_name: string;
  },
  {
    rejectValue: string;
  }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const response = await api.post<RegisterResponse>(
      "/auth/register",
      credentials,
      {
        withCredentials: true,
      },
    );

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Registrasi gagal.",
      );
    }

    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Registrasi gagal. Silakan coba lagi.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   FORGOT PASSWORD
   POST /api/auth/forgot-password
   ========================================================= */

export const forgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  string,
  {
    rejectValue: string;
  }
>("auth/forgotPassword", async (email, thunkAPI) => {
  try {
    const normalizedEmail = String(email).trim().toLowerCase();

    if (!normalizedEmail) {
      return thunkAPI.rejectWithValue("Email wajib diisi.");
    }

    const response = await api.post<ForgotPasswordResponse>(
      "/auth/forgot-password",
      {
        email: normalizedEmail,
      },
      {
        withCredentials: true,
      },
    );

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Gagal memproses permintaan reset password.",
      );
    }

    return response.data;
  } catch (error: any) {
    console.error(
      "ABN AUTH: forgotPassword failed:",
      error?.response?.data || error?.message,
    );

    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Gagal memproses permintaan reset password.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   CHANGE PASSWORD
   POST /api/auth/change-password
   ========================================================= */
export const changePassword = createAsyncThunk<
  ChangePasswordResponse,
  {
    email: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  },
  {
    rejectValue: string;
  }
>("auth/changePassword", async (credentials, thunkAPI) => {
  try {
    const email = String(credentials.email ?? "")
      .trim()
      .toLowerCase();

    const currentPassword = String(credentials.currentPassword ?? "");

    const newPassword = String(credentials.newPassword ?? "");

    const confirmPassword = String(credentials.confirmPassword ?? "");

    /* =====================================================
       VALIDATION
       ===================================================== */

    if (!email) {
      return thunkAPI.rejectWithValue("Email wajib diisi.");
    }

    if (!currentPassword) {
      return thunkAPI.rejectWithValue("Password saat ini wajib diisi.");
    }

    if (!newPassword) {
      return thunkAPI.rejectWithValue("Password baru wajib diisi.");
    }

    if (newPassword.length < 6) {
      return thunkAPI.rejectWithValue("Password baru minimal 6 karakter.");
    }

    if (newPassword.length > 100) {
      return thunkAPI.rejectWithValue("Password baru maksimal 100 karakter.");
    }

    if (!confirmPassword) {
      return thunkAPI.rejectWithValue("Konfirmasi password wajib diisi.");
    }

    if (newPassword !== confirmPassword) {
      return thunkAPI.rejectWithValue("Konfirmasi password tidak sama.");
    }

    if (currentPassword === newPassword) {
      return thunkAPI.rejectWithValue(
        "Password baru harus berbeda dari password saat ini.",
      );
    }

    /* =====================================================
       API REQUEST
       ===================================================== */

    const response = await api.post<ChangePasswordResponse>(
      "/auth/change-password",
      {
        email,
        currentPassword,
        newPassword,
        confirmPassword,
      },
      {
        withCredentials: true,
      },
    );

    console.log("ABN AUTH: changePassword response:", response.data);

    /* =====================================================
       API RESPONSE VALIDATION
       ===================================================== */

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Gagal mengubah password.",
      );
    }

    return response.data;
  } catch (error: any) {
    console.error(
      "ABN AUTH: changePassword failed:",
      error?.response?.data || error?.message,
    );

    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Gagal mengubah password.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   CURRENT USER
   GET /api/auth/me
   ========================================================= */

export const getCurrentUser = createAsyncThunk<
  AuthUser,
  void,
  {
    state: {
      auth: AuthState;
    };
    rejectValue: string;
  }
>("auth/getCurrentUser", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const accessToken = state.auth.accessToken;

    if (!accessToken) {
      return thunkAPI.rejectWithValue("Access token tidak tersedia.");
    }

    /*
     * Cache-buster:
     *
     * /auth/me?_=${Date.now()}
     *
     * Tujuannya agar browser / proxy tidak menggunakan
     * cached response / 304 saat bootstrap session.
     */
    const response = await api.get<MeResponse>(`/auth/me?_=${Date.now()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },

      withCredentials: true,
    });

    console.log("ABN AUTH: /auth/me response:", {
      status: response.status,
      success: response.data?.success,
      hasUser: Boolean(response.data?.user),
      hasDataUser: Boolean(response.data?.data?.user),
    });

    /*
     * Support dua kemungkinan response backend:
     *
     * 1.
     * {
     *   success: true,
     *   user: {...}
     * }
     *
     * 2.
     * {
     *   success: true,
     *   data: {
     *     user: {...}
     *   }
     * }
     */
    const user = response.data?.user ?? response.data?.data?.user ?? null;

    if (!response.data?.success || !user) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "User tidak ditemukan.",
      );
    }

    return user;
  } catch (error: any) {
    console.error(
      "ABN AUTH: getCurrentUser failed:",
      error?.response?.data || error?.message,
    );

    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      "Session tidak valid.";

    return thunkAPI.rejectWithValue(message);
  }
});

/* =========================================================
   SLICE
   ========================================================= */

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    /* =====================================================
       SET ACCESS TOKEN
       ===================================================== */

    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;

      /*
       * Token valid berarti session dianggap authenticated.
       */
      state.authenticated = true;

      state.error = null;
    },

    /* =====================================================
       SET USER
       ===================================================== */

    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.authenticated = true;
      state.error = null;
    },

    /* =====================================================
       CLEAR AUTH
       ===================================================== */

    clearAuth: (state) => {
      state.user = null;
      state.accessToken = null;

      state.authenticated = false;

      state.loading = false;
      state.refreshing = false;

      /*
       * Logout/session clear adalah state final.
       */
      state.initialized = true;

      state.error = null;
    },

    /* =====================================================
       CLEAR ERROR
       ===================================================== */

    clearAuthError: (state) => {
      state.error = null;
    },

    /* =====================================================
       SET INITIALIZED
       ===================================================== */

    setAuthInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },

    /* =====================================================
       SET REFRESHING
       ===================================================== */

    setAuthRefreshing: (state, action: PayloadAction<boolean>) => {
      state.refreshing = action.payload;
    },
  },

  /* =======================================================
     EXTRA REDUCERS
     ======================================================= */

  extraReducers: (builder) => {
    builder

      /* ===================================================
         LOGIN
         =================================================== */

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;

        state.initialized = true;
        state.authenticated = true;

        state.accessToken = action.payload.accessToken;

        state.user = action.payload.user;

        state.refreshing = false;
        state.error = null;
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = false;

        state.initialized = true;
        state.authenticated = false;

        state.accessToken = null;
        state.user = null;

        state.refreshing = false;

        state.error = action.payload || "Login gagal.";
      })

      /* ===================================================
         LOGOUT
         =================================================== */

      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;

        state.authenticated = false;

        state.loading = false;
        state.refreshing = false;

        state.initialized = true;
        state.error = null;
      })

      .addCase(logout.rejected, (state, action) => {
        /*
         * Walaupun request logout gagal,
         * frontend tetap dianggap logout.
         */

        state.user = null;
        state.accessToken = null;

        state.authenticated = false;

        state.loading = false;
        state.refreshing = false;

        state.initialized = true;

        state.error = action.payload || "Logout gagal.";
      })

      /* ===================================================
         REGISTER
         =================================================== */

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.error = null;

        /*
         * Register tidak otomatis login.
         */
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || "Registrasi gagal.";
      })

      /* ===================================================
         FORGOT PASSWORD
         =================================================== */

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })

      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload || "Gagal memproses permintaan reset password.";
      })

      /* =================================================== 
      CHANGE PASSWORD =================================================== 
      */

      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Gagal mengubah password.";
      })

      /* ===================================================
         CURRENT USER
         =================================================== */

      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;

        /*
         * Jangan ubah authenticated menjadi false
         * saat request /auth/me baru dimulai.
         *
         * Access token sudah diperoleh dari refreshAccessToken().
         */
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;

        state.initialized = true;
        state.authenticated = true;

        state.user = action.payload;

        /*
         * accessToken TIDAK diubah di sini.
         * accessToken sudah dipasang oleh axios.ts
         * melalui refreshAccessToken().
         */

        state.refreshing = false;
        state.error = null;
      })

      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;

        state.initialized = true;
        state.authenticated = false;

        state.user = null;
        state.accessToken = null;

        state.refreshing = false;

        state.error = action.payload || "Session tidak valid.";
      });
  },
});

/* =========================================================
   ACTIONS
   ========================================================= */

export const {
  setAccessToken,
  setUser,
  clearAuth,
  clearAuthError,
  setAuthInitialized,
  setAuthRefreshing,
} = authSlice.actions;

/* =========================================================
   SELECTORS
   ========================================================= */

export const selectAuthUser = (state: { auth: AuthState }) => state.auth.user;

export const selectAccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;

export const selectAuthenticated = (state: { auth: AuthState }) =>
  state.auth.authenticated;

export const selectAuthLoading = (state: { auth: AuthState }) =>
  state.auth.loading;

export const selectAuthRefreshing = (state: { auth: AuthState }) =>
  state.auth.refreshing;

export const selectAuthInitialized = (state: { auth: AuthState }) =>
  state.auth.initialized;

export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;

/* =========================================================
   REDUCER
   ========================================================= */

export default authSlice.reducer;
