import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../../stores/store";

function ProtectedRoute() {
  const location = useLocation();

  const { authenticated, initialized, loading } = useSelector(
    (state: RootState) => state.auth,
  );

  console.log("ABN AUTH:", {
    authenticated,
    initialized,
    loading,
    path: location.pathname,
  });

  /*
   * Tunggu sampai proses pemulihan session selesai.
   *
   * Saat full page refresh:
   * - Redux masih kosong
   * - AuthInitializer melakukan /auth/refresh
   * - kemudian /auth/me
   *
   * Selama initialized=false, JANGAN redirect ke /login.
   */
  if (!initialized) {
    return <div className="auth-loading">Restoring ABN Trade session...</div>;
  }

  /*
   * Tunggu proses auth loading selesai.
   */
  if (loading) {
    return <div className="auth-loading">Loading ABN Trade...</div>;
  }

  /*
   * Session benar-benar tidak aktif.
   * Baru sekarang redirect ke login.
   */
  if (!authenticated) {
    console.warn("ABN AUTH: ProtectedRoute -> LOGIN", {
      initialized,
      loading,
      authenticated,
      path: location.pathname,
    });

    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  /*
   * Session valid.
   */
  return <Outlet />;
}

export default ProtectedRoute;
