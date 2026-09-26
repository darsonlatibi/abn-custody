import { useMemo, useState } from "react";
import {
  Banknote,
  CheckCircle2,
  Coffee,
  Copy,
  CreditCard,
  Heart,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import SupportModal from "./SupportModal";

import "./Support.css";

type SupportMethod = "coffee" | "donation" | "bank";

const COFFEE_AMOUNTS = [10000, 20000, 30000, 50000, 100000];

const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

const Support = () => {
  const [activeMethod, setActiveMethod] = useState<SupportMethod>("coffee");

  const [selectedAmount, setSelectedAmount] = useState<number>(
    COFFEE_AMOUNTS[0],
  );

  const [customAmount, setCustomAmount] = useState<string>("");

  const [copied, setCopied] = useState(false);

  /**
   * =======================================================
   * SUPPORT MODAL
   * =======================================================
   */

  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  /**
   * =======================================================
   * FINAL AMOUNT
   * =======================================================
   */

  const finalAmount = useMemo(() => {
    const custom = Number(customAmount.replace(/\D/g, ""));

    if (custom > 0) {
      return custom;
    }

    return selectedAmount;
  }, [customAmount, selectedAmount]);

  /**
   * =======================================================
   * SELECT AMOUNT
   * =======================================================
   */

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  /**
   * =======================================================
   * CUSTOM AMOUNT
   * =======================================================
   */

  const handleCustomAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");

    setCustomAmount(value);
  };

  /**
   * =======================================================
   * OPEN SUPPORT MODAL
   * =======================================================
   */

  const handleOpenSupportModal = () => {
    if (finalAmount < 1000) {
      return;
    }

    setIsSupportModalOpen(true);
  };

  /**
   * =======================================================
   * CLOSE SUPPORT MODAL
   * =======================================================
   */

  const handleCloseSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  /**
   * =======================================================
   * BANK COPY
   * =======================================================
   */

  const handleCopyBank = async () => {
    const accountNumber = "ACCOUNT_NUMBER";

    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div className="support-page">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <header className="support-header">
          <div className="support-header-main">
            <div className="support-header-icon">
              <Heart size={20} />
            </div>

            <div>
              <h1>Support ABN</h1>

              <p>
                Dukung pengembangan ABN Digital &amp; Industrial Technology.
              </p>
            </div>
          </div>

          <div className="support-header-status">
            <CheckCircle2 size={16} />

            <span>Secure Support</span>
          </div>
        </header>

        {/* =========================================================
            LAYOUT
        ========================================================= */}

        <div className="support-layout">
          {/* =======================================================
              SIDEBAR
          ======================================================= */}

          <aside className="support-sidebar">
            <div className="support-sidebar-section">
              <div className="support-sidebar-title">SUPPORT</div>

              <button
                type="button"
                className={`support-nav-item ${
                  activeMethod === "coffee" ? "active" : ""
                }`}
                onClick={() => setActiveMethod("coffee")}
              >
                <Coffee size={18} />

                <span>Buy Me a Coffee</span>
              </button>

              <button
                type="button"
                className={`support-nav-item ${
                  activeMethod === "donation" ? "active" : ""
                }`}
                onClick={() => setActiveMethod("donation")}
              >
                <Heart size={18} />

                <span>Donation</span>
              </button>

              <button
                type="button"
                className={`support-nav-item ${
                  activeMethod === "bank" ? "active" : ""
                }`}
                onClick={() => setActiveMethod("bank")}
              >
                <Banknote size={18} />

                <span>Bank Transfer</span>
              </button>
            </div>

            <div className="support-sidebar-note">
              <ShieldCheck size={18} />

              <div>
                <strong>Secure Payment</strong>

                <p>Pembayaran online diproses melalui Midtrans.</p>
              </div>
            </div>
          </aside>

          {/* =======================================================
              MAIN
          ======================================================= */}

          <main className="support-main">
            {/* =====================================================
                BUY ME A COFFEE
            ===================================================== */}

            {activeMethod === "coffee" && (
              <section className="support-card">
                <div className="support-card-header">
                  <div className="support-card-title">
                    <div className="support-card-icon coffee">
                      <Coffee size={22} />
                    </div>

                    <div>
                      <h2>Buy Me a Coffee</h2>

                      <p>Traktir kopi untuk mendukung pengembangan ABN.</p>
                    </div>
                  </div>
                </div>

                <div className="support-card-body">
                  <div className="support-info-box">
                    <Coffee size={20} />

                    <div>
                      <strong>Setiap dukungan sangat berarti</strong>

                      <p>
                        Support Anda membantu membiayai server, domain, cloud
                        infrastructure, testing, research, dan pengembangan
                        produk ABN.
                      </p>
                    </div>
                  </div>

                  <div className="support-section">
                    <div className="support-section-label">Pilih nominal</div>

                    <div className="support-amount-grid">
                      {COFFEE_AMOUNTS.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`support-amount-button ${
                            selectedAmount === amount && customAmount === ""
                              ? "active"
                              : ""
                          }`}
                          onClick={() => handleSelectAmount(amount)}
                        >
                          {formatRupiah(amount)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="support-section">
                    <div className="support-section-label">Nominal lainnya</div>

                    <div className="support-input-wrapper">
                      <span>Rp</span>

                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Masukkan nominal"
                        value={customAmount}
                        onChange={handleCustomAmount}
                      />
                    </div>

                    <small>Minimum pembayaran Rp1.000.</small>
                  </div>

                  <div className="support-total">
                    <span>Total Support</span>

                    <strong>{formatRupiah(finalAmount)}</strong>
                  </div>

                  <button
                    type="button"
                    className="support-payment-button"
                    onClick={handleOpenSupportModal}
                    disabled={finalAmount < 1000}
                  >
                    <CreditCard size={19} />

                    {`Bayar ${formatRupiah(finalAmount)}`}
                  </button>

                  <div className="support-payment-note">
                    <ShieldCheck size={16} />

                    <span>Pembayaran aman diproses melalui Midtrans.</span>
                  </div>
                </div>
              </section>
            )}

            {/* =====================================================
                DONATION
            ===================================================== */}

            {activeMethod === "donation" && (
              <section className="support-card">
                <div className="support-card-header">
                  <div className="support-card-title">
                    <div className="support-card-icon donation">
                      <Heart size={22} />
                    </div>

                    <div>
                      <h2>Donation</h2>

                      <p>Berikan dukungan untuk pengembangan ekosistem ABN.</p>
                    </div>
                  </div>
                </div>

                <div className="support-card-body">
                  <div className="support-donation-content">
                    <div className="support-donation-icon">
                      <Heart size={32} />
                    </div>

                    <h3>Support ABN Development</h3>

                    <p>
                      Donasi Anda digunakan untuk mendukung pengembangan
                      software, cloud infrastructure, industrial IoT,
                      automation, digital products, dan riset teknologi ABN.
                    </p>

                    <button
                      type="button"
                      className="support-payment-button"
                      onClick={() => {
                        setActiveMethod("coffee");
                        handleOpenSupportModal();
                      }}
                    >
                      <CreditCard size={19} />
                      Donasi melalui Midtrans
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* =====================================================
                BANK TRANSFER
            ===================================================== */}

            {activeMethod === "bank" && (
              <section className="support-card">
                <div className="support-card-header">
                  <div className="support-card-title">
                    <div className="support-card-icon bank">
                      <Banknote size={22} />
                    </div>

                    <div>
                      <h2>Bank Transfer</h2>

                      <p>Support melalui transfer bank secara langsung.</p>
                    </div>
                  </div>
                </div>

                <div className="support-card-body">
                  <div className="support-bank-card">
                    <div className="support-bank-logo">
                      <Banknote size={22} />
                    </div>

                    <div className="support-bank-info">
                      <span>Bank</span>

                      <strong>BANK NAME</strong>
                    </div>
                  </div>

                  <div className="support-bank-account">
                    <div>
                      <span>Nomor Rekening</span>

                      <strong>ACCOUNT_NUMBER</strong>
                    </div>

                    <button
                      type="button"
                      className="support-copy-button"
                      onClick={handleCopyBank}
                      title="Copy nomor rekening"
                    >
                      {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}

                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  <div className="support-bank-holder">
                    <span>Atas Nama</span>

                    <strong>ACCOUNT_HOLDER</strong>
                  </div>

                  <div className="support-bank-note">
                    <Smartphone size={18} />

                    <p>
                      Setelah melakukan transfer, simpan bukti pembayaran untuk
                      keperluan konfirmasi.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* =====================================================
                FOOTER INFO
            ===================================================== */}

            <section className="support-footer-card">
              <div className="support-footer-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Terima kasih telah mendukung ABN.</strong>

                <p>
                  Dukungan Anda membantu ABN terus membangun solusi digital dan
                  industrial technology.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* =========================================================
          SUPPORT MODAL
      ========================================================= */}

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={handleCloseSupportModal}
        initialAmount={finalAmount}
      />
    </>
  );
};

export default Support;
