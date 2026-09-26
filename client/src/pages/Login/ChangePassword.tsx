import { useState } from "react";

import type { FormEvent } from "react";

import {
  ArrowLeft,
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  Mail,
  Save,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../stores/store";

import { Link, useNavigate } from "react-router-dom";

import { changePassword } from "../../features/auth/authSlice";

import "./ChangePassword.css";

import logo from "../../assets/logo.png";

/* =========================================================
   ABN TRADE SYSTEM
   CHANGE PASSWORD PAGE
   ========================================================= */

function ChangePassword() {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  /* =======================================================
     FORM STATE
     ======================================================= */

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const user = useSelector((state: RootState) => state.auth.user);
  const userEmail = user?.email || "";

  /* =======================================================
     SUBMIT
     ======================================================= */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    /* =====================================================
     CLIENT VALIDATION
     ===================================================== */

    if (!userEmail) {
      setError("Email akun tidak tersedia.");
      setLoading(false);
      return;
    }

    if (!currentPassword) {
      setError("Password saat ini wajib diisi.");
      setLoading(false);
      return;
    }

    if (!newPassword) {
      setError("Password baru wajib diisi.");
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError("Password baru minimal 6 karakter.");
      setLoading(false);
      return;
    }

    if (newPassword.length > 100) {
      setError("Password baru maksimal 100 karakter.");
      setLoading(false);
      return;
    }

    if (!confirmPassword) {
      setError("Konfirmasi password wajib diisi.");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      setLoading(false);
      return;
    }

    if (currentPassword === newPassword) {
      setError("Password baru harus berbeda dari password saat ini.");
      setLoading(false);
      return;
    }

    /* =====================================================
     CHANGE PASSWORD VIA REDUX THUNK
     ===================================================== */

    try {
      const result = await dispatch(
        changePassword({
          email: userEmail,
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      ).unwrap();

      console.log("ABN CHANGE PASSWORD SUCCESS:", result);

      setSuccess(result?.message || "Password berhasil diubah.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      window.setTimeout(() => {
        navigate("/trading/markets/binance", {
          replace: true,
        });
      }, 1800);
    } catch (err) {
      console.error("ABN CHANGE PASSWORD ERROR:", err);

      setError(typeof err === "string" ? err : "Gagal mengubah password.");
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="change-password-page">
      <section className="change-password-card">
        {/* =================================================
            HEADER
            ================================================= */}

        <div className="change-password-header">
          <div className="change-password-brand">
            <img
              src={logo}
              alt="ABN Trade System"
              className="change-password-logo"
            />
          </div>

          <h1>PT Agro Berkah Nusantara</h1>

          <p>Change Password Account</p>
        </div>

        {/* =================================================
            ALERT
            ================================================= */}

        {(error || success) && (
          <div className="change-password-alert">
            {error && (
              <div className="change-password-error" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="change-password-success" role="status">
                <CheckCircle2 size={17} aria-hidden="true" />

                <span>{success}</span>
              </div>
            )}
          </div>
        )}

        {/* =================================================
            FORM
            ================================================= */}

        <form
          className="change-password-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* =================================================
              CURRENT PASSWORD
              ================================================= */}

          <div className="form-group">
            <label htmlFor="currentPassword">Password Saat Ini</label>

            <div className="change-input-wrapper">
              <LockKeyhole size={18} aria-hidden="true" />

              <input
                id="currentPassword"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(event) => {
                  setCurrentPassword(event.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Masukkan password saat ini"
                autoComplete="current-password"
                maxLength={100}
                disabled={loading || !!success}
                required
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowCurrentPassword((value) => !value)}
                aria-label={
                  showCurrentPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
                disabled={loading || !!success}
              >
                {showCurrentPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* =================================================
              NEW PASSWORD
              ================================================= */}

          <div className="form-group">
            <label htmlFor="newPassword">Password Baru</label>

            <div className="change-input-wrapper">
              <KeyRound size={18} aria-hidden="true" />

              <input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Masukkan password baru"
                autoComplete="new-password"
                minLength={6}
                maxLength={100}
                disabled={loading || !!success}
                required
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowNewPassword((value) => !value)}
                aria-label={
                  showNewPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
                disabled={loading || !!success}
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* =================================================
              CONFIRM PASSWORD
              ================================================= */}

          <div className="form-group">
            <label htmlFor="confirmPassword">Konfirmasi Password Baru</label>

            <div className="change-input-wrapper">
              <LockKeyhole size={18} aria-hidden="true" />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Ulangi password baru"
                autoComplete="new-password"
                minLength={6}
                maxLength={100}
                disabled={loading || !!success}
                required
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowConfirmPassword((value) => !value)}
                aria-label={
                  showConfirmPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
                disabled={loading || !!success}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* =================================================
              PASSWORD INFO
              ================================================= */}

          <div className="change-password-info">
            <KeyRound size={17} aria-hidden="true" />

            <span>
              Password baru minimal 6 karakter dan harus berbeda dari password
              sebelumnya.
            </span>
          </div>

          <div className="change-input-wrapper">
            <Mail size={18} aria-hidden="true" />

            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={userEmail}
              readOnly
              autoComplete="username"
              aria-readonly="true"
            />
          </div>

          {/* =================================================
              SUBMIT
              ================================================= */}

          <button
            type="submit"
            className="change-password-button"
            disabled={loading || !!success}
          >
            <Save size={18} aria-hidden="true" />

            {loading ? "MENYIMPAN..." : "UBAH PASSWORD"}
          </button>
        </form>

        {/* =================================================
            BACK
            ================================================= */}

        {!success && (
          <Link to="/login" className="back-login-button">
            <ArrowLeft size={17} aria-hidden="true" />
            KEMBALI
          </Link>
        )}

        {/* =================================================
            FOOTER
            ================================================= */}

        <div className="change-password-footer">
          <span>ABN Trade System</span>
          <span>V1.0</span>
        </div>
      </section>
    </main>
  );
}

export default ChangePassword;
