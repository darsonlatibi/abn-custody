import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import api from "../../api/axios";

import {
  clearAuthState,
  setAccessToken as setBridgeAccessToken,
} from "./authBridge";

/* =========================================================
   ABN ENTERPRISE MANAGEMENT SYSTEM
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
  created_at?: string;
  updated_at?: string;
}

/* =========================================================
   LOGIN RESPONSE
   =========================================================

   Backend:

   {
     success: true,
     message: "Login successful.",
     data: {
       accessToken,
       expiresIn,
       user
     }
   }

   IMPORTANT:
   Access token hanya disimpan di authBridge memory.
   Refresh token disimpan browser sebagai HttpOnly cookie.
   ========================================================= */

interface LoginResponse {
  success: boolean;
  message?: string;
  data?: {
    accessToken: string;
    expiresIn: number;
    user: AuthUser;
  };
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

export interface ForgotPasswordResponse {
  success: boolean;
  message?: string;
}

/* =========================================================
   CHANGE PASSWORD RESPONSE
   ========================================================= */

export interface ChangePasswordResponse {
  success: boolean;
  message?: string;
  user?: AuthUser;
}

/* =========================================================
   CURRENT USER RESPONSE
   =========================================================

   Backend:

   {
     success: true,
     user: {...}
   }

   ========================================================= */

interface MeResponse {
  success: boolean;
  message?: string;
  user?: AuthUser;
}

/* =========================================================
   AUTH STATE
   =========================================================

   Access token:
   - TIDAK disimpan di Redux
   - TIDAK disimpan localStorage
   - TIDAK disimpan sessionStorage
   - disimpan sementara di authBridge memory

   Refresh token:
   - HttpOnly cookie
   - browser yang menyimpan
   - Axios menggunakannya untuk /auth/token
   ========================================================= */

export interface AuthState {
  user: AuthUser | null;

  accessToken: null;

  authenticated: boolean;
  loading: boolean;
  initialized: boolean;
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
  NonNullable<LoginResponse["data"]>,
  {
    email: string;
    password: string;
  },
  {
    rejectValue: string;
  }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const normalizedEmail = String(email ?? "")
      .trim()
      .toLowerCase();

    const normalizedPassword = String(password ?? "");

    /* =====================================================
       VALIDATION
       ===================================================== */

    if (!normalizedEmail) {
      return thunkAPI.rejectWithValue("Email wajib diisi.");
    }

    if (!normalizedPassword) {
      return thunkAPI.rejectWithValue("Password wajib diisi.");
    }

    /* =====================================================
       LOGIN REQUEST
       ===================================================== */

    const response = await api.post<LoginResponse>(
      "/auth/login",
      {
        login: normalizedEmail,
        password: normalizedPassword,
      },
      {
        withCredentials: true,
      },
    );

    console.log("========================================");
    console.log("ABN LOGIN RESPONSE");
    console.log(response.data);
    console.log("========================================");

    /* =====================================================
       RESPONSE VALIDATION
       ===================================================== */

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(response.data?.message || "Login gagal.");
    }

    if (!response.data?.data) {
      return thunkAPI.rejectWithValue(
        "Login berhasil tetapi data login tidak ditemukan.",
      );
    }

    const data = response.data.data;

    if (!data.accessToken) {
      return thunkAPI.rejectWithValue(
        "Login berhasil tetapi access token tidak ditemukan.",
      );
    }

    if (!data.user) {
      return thunkAPI.rejectWithValue(
        "Login berhasil tetapi data user tidak ditemukan.",
      );
    }

    /* =====================================================
       STORE ACCESS TOKEN IN MEMORY
       =====================================================

       Jangan simpan token ke:
       - Redux
       - localStorage
       - sessionStorage

       authBridge menjadi satu-satunya tempat memory token.
       ===================================================== */

    setBridgeAccessToken(data.accessToken);

    console.log("========================================");
    console.log("ABN LOGIN SUCCESS");
    console.log("USER:", data.user);
    console.log("ACCESS TOKEN STORED IN AUTH BRIDGE");
    console.log("EXPIRES IN:", data.expiresIn);
    console.log("========================================");

    return data;
  } catch (error: any) {
    console.error(
      "========================================",
      "\nABN LOGIN ERROR:",
      error?.response?.data || error?.message || error,
      "\n========================================",
    );

    return thunkAPI.rejectWithValue(
      error?.response?.data?.message ||
        error?.response?.data?.msg ||
        error?.message ||
        "Login gagal.",
    );
  }
});

/* =========================================================
   LOGOUT
   POST /api/auth/logout
   =========================================================

   Logout:
   1. Request backend
   2. Backend hapus refresh cookie
   3. clearAuthState()
   4. Redux menjadi unauthenticated

   Kalau backend gagal sekalipun, token memory tetap dibersihkan.
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

    /* Clear access token dari memory */
    clearAuthState();

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Logout gagal.",
      );
    }

    return response.data;
  } catch (error: any) {
    /* Tetap clear local auth state */
    clearAuthState();

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

/* =========================================================
   REGISTER
   POST /api/auth/register
   Compatible with ABN TRADE
   ========================================================= */

export const register = createAsyncThunk<
  RegisterResponse,
  {
    username: string;
    email: string;
    password: string;
    full_name: string;
  },
  {
    rejectValue: string;
  }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const username = String(credentials.username ?? "").trim();

    const email = String(credentials.email ?? "")
      .trim()
      .toLowerCase();

    const password = String(credentials.password ?? "");

    const full_name = String(credentials.full_name ?? "").trim();

    /* =====================================================
       VALIDATION
       ===================================================== */

    if (!username) {
      return thunkAPI.rejectWithValue("Username wajib diisi.");
    }

    if (!full_name) {
      return thunkAPI.rejectWithValue("Nama lengkap wajib diisi.");
    }

    if (!email) {
      return thunkAPI.rejectWithValue("Email wajib diisi.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return thunkAPI.rejectWithValue("Format email tidak valid.");
    }

    if (!password) {
      return thunkAPI.rejectWithValue("Password wajib diisi.");
    }

    if (password.length < 6) {
      return thunkAPI.rejectWithValue("Password minimal 6 karakter.");
    }

    if (password.length > 100) {
      return thunkAPI.rejectWithValue("Password maksimal 100 karakter.");
    }

    /* =====================================================
       REGISTER REQUEST
       ===================================================== */

    const response = await api.post<RegisterResponse>(
      "/auth/register",
      {
        username,
        email,
        password,
        full_name,
      },
      {
        withCredentials: true,
      },
    );

    console.log("ABN REGISTER RESPONSE:", response.data);

    /* =====================================================
       RESPONSE VALIDATION
       ===================================================== */

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Registrasi gagal.",
      );
    }

    return response.data;
  } catch (error: any) {
    console.error(
      "ABN REGISTER ERROR:",
      error?.response?.data || error?.message,
    );

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
    const normalizedEmail = String(email ?? "")
      .trim()
      .toLowerCase();

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
    email?: string;
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

    const payload: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
      email?: string;
    } = {
      currentPassword,
      newPassword,
      confirmPassword,
    };

    /*
     * Email hanya dikirim jika memang tersedia.
     * Authenticated backend tetap dapat menggunakan
     * user dari JWT.
     */
    if (email) {
      payload.email = email;
    }

    const response = await api.post<ChangePasswordResponse>(
      "/auth/change-password",
      payload,
      {
        withCredentials: true,
      },
    );

    console.log("ABN AUTH: changePassword response:", response.data);

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
   =========================================================

   IMPORTANT:

   getCurrentUser TIDAK melakukan redirect.

   Jika access token memory hilang karena:
   - F5
   - browser refresh
   - tab reload

   Axios interceptor akan mencoba:

       POST /auth/token

   menggunakan refresh token HttpOnly cookie.

   Jika refresh berhasil:
       access token baru → authBridge
       request /auth/me diulang
       user tetap authenticated

   Hanya jika refresh juga gagal:
       /auth/me gagal
       state authenticated = false

   Redirect ke /login menjadi tanggung jawab AuthGuard/router.
   ========================================================= */

export const getCurrentUser = createAsyncThunk<
  MeResponse,
  void,
  {
    rejectValue: string;
  }
>("auth/getCurrentUser", async (_, thunkAPI) => {
  try {
    const response = await api.get<MeResponse>("/auth/me", {
      withCredentials: true,
    });

    console.log("ABN AUTH: /auth/me response:", response.data);

    const { success, user, message } = response.data;

    if (!success || !user) {
      return thunkAPI.rejectWithValue(message || "Session tidak valid.");
    }

    return response.data;
  } catch (error: any) {
    console.error(
      "ABN AUTH: getCurrentUser failed:",
      error?.response?.data || error?.message,
    );

    return thunkAPI.rejectWithValue(
      error?.response?.data?.message ||
        error?.response?.data?.msg ||
        "Session tidak ditemukan atau sudah expired.",
    );
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
       =====================================================

       Compatibility action only.

       Token sebenarnya tetap berada di authBridge.
       ===================================================== */

    setAccessToken: (state, _action: PayloadAction<string>) => {
      state.accessToken = null;
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
      /*
       * Clear bridge juga dilakukan di sini supaya
       * reducer action dapat digunakan langsung.
       */
      clearAuthState();

      state.user = null;
      state.accessToken = null;
      state.authenticated = false;
      state.loading = false;
      state.refreshing = false;
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
       AUTH INITIALIZED
       ===================================================== */

    setAuthInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },

    /* =====================================================
       AUTH REFRESHING
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

        /*
         * action.payload adalah:

         {
           accessToken,
           expiresIn,
           user
         }
         */

        state.authenticated = true;
        state.user = action.payload.user;

        /*
         * Token TIDAK masuk Redux.
         */
        state.accessToken = null;

        state.refreshing = false;
        state.error = null;
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.initialized = true;

        state.authenticated = false;
        state.user = null;
        state.accessToken = null;

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
         * Client tetap dianggap logout.
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
        state.error = action.payload || "Gagal memproses reset password.";
      })

      /* ===================================================
         CHANGE PASSWORD
         =================================================== */

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
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.initialized = true;

        /*
         * Backend:
         *
         * {
         *   success: true,
         *   user: {...}
         * }
         */

        state.user = action.payload.user || null;

        state.authenticated = true;

        /*
         * Token tetap berada di authBridge.
         */
        state.accessToken = null;

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
