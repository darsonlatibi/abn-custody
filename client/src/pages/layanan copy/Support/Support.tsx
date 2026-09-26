import { useState } from "react";
import { ArrowRight, Coffee, ShieldCheck } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../../../stores/hooks";

import {
  createSupportPayment,
  selectSupportPaymentLoading,
  selectSupportPaymentError,
} from "../../../features/gateway/supportPaymentSlice";

import "./Support.css";

const coffeeAmounts = [10000, 20000, 30000, 50000, 100000];

interface SupportPaymentData {
  amount: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
}

const Support = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectSupportPaymentLoading);
  const error = useAppSelector(selectSupportPaymentError);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);

  const handlePayment = async (data: SupportPaymentData) => {
    if (loading || !data.amount) {
      return;
    }

    const result = await dispatch(
      createSupportPayment({
        amount: data.amount,
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        customer_phone: data.customer_phone,
      }),
    );

    if (createSupportPayment.fulfilled.match(result)) {
      const paymentUrl = result.payload?.paymentUrl;

      if (!paymentUrl) {
        alert("Payment URL Midtrans tidak tersedia.");
        return;
      }

      window.location.href = paymentUrl;
    }
  };

  return (
    <div className="support-page">
      <div className="support-payment-card">
        <div className="support-payment-header">
          <Coffee size={28} />

          <div>
            <span>ABN SUPPORT</span>
            <h1>Support ABN</h1>
            <p>Dukung pengembangan dan operasional teknologi ABN.</p>
          </div>
        </div>

        {/* AMOUNT */}
        <div className="support-form-group">
          <label>Support Amount</label>

          <div className="support-amount-list">
            {coffeeAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={
                  selectedAmount === amount
                    ? "support-amount active"
                    : "support-amount"
                }
                onClick={() => setSelectedAmount(amount)}
                disabled={loading}
              >
                Rp{amount.toLocaleString("id-ID")}
              </button>
            ))}
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!selectedAmount) {
              alert("Silakan pilih nominal support.");
              return;
            }

            const formData = new FormData(e.currentTarget);

            handlePayment({
              amount: selectedAmount,

              customer_name: String(formData.get("customer_name") || "").trim(),

              customer_email: String(
                formData.get("customer_email") || "",
              ).trim(),

              customer_phone: String(
                formData.get("customer_phone") || "",
              ).trim(),
            });
          }}
        >
          <div className="support-form-group">
            <label htmlFor="customer_name">Name</label>

            <input
              id="customer_name"
              name="customer_name"
              type="text"
              placeholder="Nama lengkap"
              required
              disabled={loading}
            />
          </div>

          <div className="support-form-group">
            <label htmlFor="customer_email">Email</label>

            <input
              id="customer_email"
              name="customer_email"
              type="email"
              placeholder="email@example.com"
              required
              disabled={loading}
            />
          </div>

          <div className="support-form-group">
            <label htmlFor="customer_phone">Phone</label>

            <input
              id="customer_phone"
              name="customer_phone"
              type="tel"
              placeholder="08xxxxxxxxxx"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="support-payment-error">
              {typeof error === "string"
                ? error
                : "Pembayaran gagal. Silakan coba lagi."}
            </div>
          )}

          <button
            type="submit"
            className="support-payment-btn"
            disabled={loading || !selectedAmount}
          >
            <Coffee size={18} />

            {loading
              ? "Processing..."
              : `Pay Rp${selectedAmount?.toLocaleString("id-ID")}`}

            {!loading && <ArrowRight size={17} />}
          </button>
        </form>

        <div className="support-secure">
          <ShieldCheck size={15} />
          <span>Secure payment processed by Midtrans</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
