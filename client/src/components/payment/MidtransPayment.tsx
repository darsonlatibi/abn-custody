import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../stores/hooks";

import {
  createMidtransTransaction,
  getMidtransTransactionStatus,
} from "../../features/gateway/midtransSlice";

interface MidtransPaymentProps {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
}

const MidtransPayment = ({
  orderNumber,
  customerName,
  customerEmail,
  customerPhone,
}: MidtransPaymentProps) => {
  const dispatch = useAppDispatch();

  const { loading, snapToken, paymentStatus, error } = useAppSelector(
    (state) => state.midtrans,
  );

  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    setMessage("");

    if (!orderNumber) {
      setMessage("Nomor order tidak tersedia.");
      return;
    }

    try {
      const result = await dispatch(
        createMidtransTransaction({
          orderNumber,
          customerName,
          customerEmail,
          customerPhone,
        }),
      ).unwrap();

      const data = result.data;

      const token = data?.snapToken || data?.token;

      if (!token) {
        throw new Error("Snap token tidak tersedia.");
      }

      if (!window.snap) {
        throw new Error("Midtrans Snap.js belum tersedia.");
      }

      window.snap.pay(token, {
        onSuccess: async () => {
          setMessage("Pembayaran berhasil. Memverifikasi...");

          try {
            await dispatch(getMidtransTransactionStatus(orderNumber)).unwrap();

            setMessage("Pembayaran berhasil.");
          } catch {
            setMessage(
              "Pembayaran berhasil, tetapi verifikasi status sedang diproses.",
            );
          }
        },

        onPending: async () => {
          setMessage("Pembayaran masih menunggu.");

          try {
            await dispatch(getMidtransTransactionStatus(orderNumber)).unwrap();
          } catch {
            // Status dapat diverifikasi kembali
            // melalui endpoint status.
          }
        },

        onError: async () => {
          setMessage("Pembayaran gagal.");

          try {
            await dispatch(getMidtransTransactionStatus(orderNumber)).unwrap();
          } catch {
            // Ignore status lookup error here.
          }
        },

        onClose: () => {
          setMessage(
            "Halaman pembayaran ditutup. Status pembayaran tetap dapat dicek.",
          );
        },
      });
    } catch (err) {
      console.error("MIDTRANS PAYMENT ERROR:", err);

      setMessage(
        err instanceof Error ? err.message : "Gagal memulai pembayaran.",
      );
    }
  };

  const isPaid = String(paymentStatus).toUpperCase() === "PAID";

  return (
    <div className="midtrans-payment">
      <button
        type="button"
        onClick={handlePayment}
        disabled={loading || isPaid}
      >
        {loading ? "Memproses..." : isPaid ? "Sudah Dibayar" : "Bayar Sekarang"}
      </button>

      {message && <div style={{ marginTop: 10 }}>{message}</div>}

      {error && (
        <div
          style={{
            marginTop: 10,
            color: "red",
          }}
        >
          {error}
        </div>
      )}

      {snapToken && <div style={{ marginTop: 10 }}>Snap siap digunakan.</div>}
    </div>
  );
};

export default MidtransPayment;
