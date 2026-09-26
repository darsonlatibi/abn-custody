import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../stores/store";

import {
  getCurrentUser,
  setAuthInitialized,
} from "../../features/auth/authSlice";

import { refreshAccessToken } from "../../api/axios";

function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  const initialized = useSelector((state: RootState) => state.auth.initialized);

  useEffect(() => {
    if (initialized) {
      return;
    }

    let cancelled = false;

    const initializeAuth = async () => {
      console.log("ABN AUTH: Initializing session...");

      try {
        /*
         * Full page refresh:
         * accessToken Redux kosong.
         *
         * Ambil access token baru melalui
         * HttpOnly refresh cookie.
         */
        const accessToken = await refreshAccessToken();

        console.log("ABN AUTH: refresh result:", {
          hasAccessToken: Boolean(accessToken),
        });

        if (cancelled) {
          return;
        }

        /*
         * Tidak ada refresh session.
         * Biarkan ProtectedRoute mengarahkan
         * ke login setelah initialized=true.
         */
        if (!accessToken) {
          console.log("ABN AUTH: No active session.");
          dispatch(setAuthInitialized(true));
          return;
        }

        /*
         * Access token sudah berhasil dibuat.
         * Sekarang ambil user.
         */
        const result = await dispatch(getCurrentUser());

        if (cancelled) {
          return;
        }

        if (getCurrentUser.fulfilled.match(result)) {
          console.log("ABN AUTH: Session restored successfully.");
        } else {
          console.warn(
            "ABN AUTH: Failed to restore user session.",
            result.payload,
          );
        }
      } catch (error) {
        if (!cancelled) {
          console.error("ABN AUTH: Session initialization error:", error);
        }
      } finally {
        if (!cancelled) {
          dispatch(setAuthInitialized(true));
        }
      }
    };

    initializeAuth();

    return () => {
      cancelled = true;
    };
  }, [dispatch, initialized]);

  return null;
}

export default AuthInitializer;
