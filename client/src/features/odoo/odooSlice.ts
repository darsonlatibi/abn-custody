import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";
export interface OdooUser {
  id: number;
  name: string;
  login: string;
  active: boolean;
  email: string;
}

export interface OdooEmployee {
  id: number;
  name: string;
  work_email: string | false;
  work_phone: string | false;
  mobile_phone: string | false;
  job_title: string | false;
  department_id: [number, string] | false;
  company_id: [number, string] | false;
  user_id: [number, string] | false;
  active: boolean;
}

interface OdooUsersResponse {
  success: boolean;
  message: string;
  count: number;
  data: OdooUser[];
}

interface OdooEmployeesResponse {
  success: boolean;
  message: string;
  count: number;
  data: OdooEmployee[];
}

interface OdooState {
  users: OdooUser[];
  employees: OdooEmployee[];

  usersCount: number;
  employeesCount: number;

  usersLoading: boolean;
  employeesLoading: boolean;

  usersError: string | null;
  employeesError: string | null;
}

const initialState: OdooState = {
  users: [],
  employees: [],

  usersCount: 0,
  employeesCount: 0,

  usersLoading: false,
  employeesLoading: false,

  usersError: null,
  employeesError: null,
};

/* =========================================================
   GET ODOO USERS
   ========================================================= */

export const getOdooUsers = createAsyncThunk<
  OdooUsersResponse,
  void,
  { rejectValue: string }
>("odoo/getUsers", async (_, thunkAPI) => {
  try {
    const response = await api.get<OdooUsersResponse>("/odoo/users", {
      withCredentials: true,
    });

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Failed to retrieve Odoo users.",
      );
    }

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to retrieve Odoo users.",
    );
  }
});

/* =========================================================
   GET ODOO EMPLOYEES
   ========================================================= */

export const getOdooEmployees = createAsyncThunk<
  OdooEmployeesResponse,
  void,
  { rejectValue: string }
>("odoo/getEmployees", async (_, thunkAPI) => {
  try {
    const response = await api.get<OdooEmployeesResponse>("/odoo/employees", {
      withCredentials: true,
    });

    if (!response.data?.success) {
      return thunkAPI.rejectWithValue(
        response.data?.message || "Failed to retrieve Odoo employees.",
      );
    }

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to retrieve Odoo employees.",
    );
  }
});

/* =========================================================
   SLICE
   ========================================================= */

const odooSlice = createSlice({
  name: "odoo",
  initialState,
  reducers: {
    clearOdooErrors: (state) => {
      state.usersError = null;
      state.employeesError = null;
    },

    clearOdooData: (state) => {
      state.users = [];
      state.employees = [];
      state.usersCount = 0;
      state.employeesCount = 0;
    },
  },

  extraReducers: (builder) => {
    /* =====================================================
       USERS
       ===================================================== */

    builder
      .addCase(getOdooUsers.pending, (state) => {
        state.usersLoading = true;
        state.usersError = null;
      })

      .addCase(getOdooUsers.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users = action.payload.data;
        state.usersCount = action.payload.count;
      })

      .addCase(getOdooUsers.rejected, (state, action) => {
        state.usersLoading = false;
        state.usersError = action.payload || "Failed to retrieve Odoo users.";
      });

    /* =====================================================
       EMPLOYEES
       ===================================================== */

    builder
      .addCase(getOdooEmployees.pending, (state) => {
        state.employeesLoading = true;
        state.employeesError = null;
      })

      .addCase(getOdooEmployees.fulfilled, (state, action) => {
        state.employeesLoading = false;
        state.employees = action.payload.data;
        state.employeesCount = action.payload.count;
      })

      .addCase(getOdooEmployees.rejected, (state, action) => {
        state.employeesLoading = false;
        state.employeesError =
          action.payload || "Failed to retrieve Odoo employees.";
      });
  },
});

export const { clearOdooErrors, clearOdooData } = odooSlice.actions;

export default odooSlice.reducer;
