import { useEffect, useRef, useState } from "react";

import { X, ShieldCheck, CreditCard, User, Mail, Phone } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../../stores/hooks";

import {
  createSupportPayment,
  clearSupportPayment,
  clearSupportPaymentError,
  selectSupportPaymentData,
  selectSupportPaymentError,
  selectSupportPaymentLoading,
} from "../../features/gateway/supportPaymentSlice";

import "./SupportModal.css";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount: number;
}

const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

const SupportModal = ({
  isOpen,
  onClose,
  initialAmount,
}: SupportModalProps) => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectSupportPaymentLoading);
  const error = useAppSelector(selectSupportPaymentError);
  const paymentData = useAppSelector(selectSupportPaymentData);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  /**
   * =======================================================
   * PREVENT SNAP FROM OPENING TWICE
   * =======================================================
   */
  const snapOpenedTokenRef = useRef<string | null>(null);

  /**
   * =======================================================
   * OPEN MIDTRANS SNAP
   * =======================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const snapToken = paymentData?.snapToken;

    if (!snapToken) {
      return;
    }

    if (!window.snap) {
      console.error("MIDTRANS: Snap.js belum tersedia.");
      return;
    }

    console.log("MIDTRANS: Opening Snap...", snapToken);

    window.snap.pay(snapToken, {
      onSuccess: (result) => {
        console.log("MIDTRANS: Payment success", result);

        dispatch(clearSupportPayment());
        dispatch(clearSupportPaymentError());

        onClose();
      },

      onPending: (result) => {
        console.log("MIDTRANS: Payment pending", result);

        dispatch(clearSupportPayment());
        dispatch(clearSupportPaymentError());

        onClose();
      },

      onError: (result) => {
        console.error("MIDTRANS: Payment error", result);
      },

      onClose: () => {
        console.log("MIDTRANS: Snap ditutup user.");
      },
    });
  }, [isOpen, paymentData?.snapToken, dispatch, onClose]);

  /**
   * =======================================================
   * VALIDATE FORM
   * =======================================================
   */
  const validateForm = () => {
    const name = customerName.trim();
    const email = customerEmail.trim();
    const phone = customerPhone.trim();

    if (!name) {
      setValidationError("Nama wajib diisi.");
      return false;
    }

    if (initialAmount < 1000) {
      setValidationError("Minimal Support adalah Rp1.000.");
      return false;
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setValidationError("Format email tidak valid.");
        return false;
      }
    }

    if (phone) {
      const phoneRegex = /^[0-9+\-\s()]{8,20}$/;

      if (!phoneRegex.test(phone)) {
        setValidationError("Format nomor telepon tidak valid.");
        return false;
      }
    }

    setValidationError(null);

    return true;
  };

  /**
   * =======================================================
   * CREATE PAYMENT
   * =======================================================
   */
  const handleCreatePayment = async () => {
    if (loading) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    dispatch(clearSupportPaymentError());

    const payload = {
      amount: initialAmount,
      customer_name: customerName.trim(),

      ...(customerEmail.trim()
        ? {
            customer_email: customerEmail.trim(),
          }
        : {}),

      ...(customerPhone.trim()
        ? {
            customer_phone: customerPhone.trim(),
          }
        : {}),
    };

    console.log("ABN SUPPORT: Creating payment...", payload);

    await dispatch(createSupportPayment(payload));
  };

  /**
   * =======================================================
   * RESET FORM
   * =======================================================
   */
  const resetForm = () => {
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setValidationError(null);
  };

  /**
   * =======================================================
   * CLOSE MODAL
   * =======================================================
   */
  const handleClose = () => {
    if (loading) {
      return;
    }

    if (window.snap?.hide) {
      window.snap.hide();
    }

    snapOpenedTokenRef.current = null;

    dispatch(clearSupportPayment());
    dispatch(clearSupportPaymentError());

    resetForm();

    onClose();
  };

  /**
   * =======================================================
   * RENDER
   * =======================================================
   */
  if (!isOpen) {
    return null;
  }

  return (
    <div className="support-modal-overlay" onMouseDown={handleClose}>
      <div
        className="support-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* =================================================
            CLOSE
            ================================================= */}
        <button
          type="button"
          className="support-modal-close"
          onClick={handleClose}
          disabled={loading}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* =================================================
            HEADER
            ================================================= */}
        <div className="support-modal-header">
          <div className="support-modal-icon">
            <CreditCard size={24} />
          </div>

          <h2>Support ABN</h2>

          <p>Pembayaran aman melalui Midtrans.</p>
        </div>

        {/* =================================================
            AMOUNT
            ================================================= */}
        <div className="support-modal-amount">
          <span>Total Support</span>

          <strong>{formatRupiah(initialAmount)}</strong>
        </div>

        {/* =================================================
            FORM
            ================================================= */}
        <div className="support-modal-form">
          {/* NAME */}
          <div className="support-modal-field">
            <label htmlFor="support-customer-name">
              Nama
              <span className="support-modal-required">*</span>
            </label>

            <div className="support-modal-input-wrapper">
              <User size={17} />

              <input
                id="support-customer-name"
                type="text"
                value={customerName}
                onChange={(event) => {
                  setCustomerName(event.target.value);

                  if (validationError) {
                    setValidationError(null);
                  }
                }}
                placeholder="Nama Anda"
                autoComplete="name"
                disabled={loading}
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="support-modal-field">
            <label htmlFor="support-customer-email">
              Email
              <span className="support-modal-optional">Optional</span>
            </label>

            <div className="support-modal-input-wrapper">
              <Mail size={17} />

              <input
                id="support-customer-email"
                type="email"
                value={customerEmail}
                onChange={(event) => {
                  setCustomerEmail(event.target.value);

                  if (validationError) {
                    setValidationError(null);
                  }
                }}
                placeholder="email@example.com"
                autoComplete="email"
                disabled={loading}
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="support-modal-field">
            <label htmlFor="support-customer-phone">
              Nomor Telepon
              <span className="support-modal-optional">Optional</span>
            </label>

            <div className="support-modal-input-wrapper">
              <Phone size={17} />

              <input
                id="support-customer-phone"
                type="tel"
                value={customerPhone}
                onChange={(event) => {
                  setCustomerPhone(event.target.value);

                  if (validationError) {
                    setValidationError(null);
                  }
                }}
                placeholder="08xxxxxxxxxx"
                autoComplete="tel"
                disabled={loading}
              />
            </div>
          </div>
        </div>

        {/* =================================================
            VALIDATION ERROR
            ================================================= */}
        {validationError && (
          <div className="support-modal-error">{validationError}</div>
        )}

        {/* =================================================
            SERVER ERROR
            ================================================= */}
        {error && <div className="support-modal-error">{error}</div>}

        {/* =================================================
            LOADING
            ================================================= */}
        {loading && (
          <div className="support-modal-loading">
            <div className="support-modal-spinner" />

            <span>Menghubungkan ke Midtrans...</span>
          </div>
        )}

        {/* =================================================
            ACTION
            ================================================= */}
        {!loading && !paymentData?.snapToken && (
          <div className="support-modal-actions">
            <button
              type="button"
              className="support-modal-button-secondary"
              onClick={handleClose}
            >
              Batal
            </button>

            <button
              type="button"
              className="support-modal-button-primary"
              onClick={handleCreatePayment}
              disabled={!customerName.trim() || initialAmount < 1000}
            >
              <CreditCard size={17} />
              Lanjutkan Pembayaran
            </button>
          </div>
        )}

        {/* =================================================
            SECURITY
            ================================================= */}
        <div className="support-modal-security">
          <ShieldCheck size={17} />

          <span>
            Transaksi diproses secara aman melalui Midtrans. Email dan nomor
            telepon bersifat opsional.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
