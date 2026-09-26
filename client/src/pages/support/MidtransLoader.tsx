import { useEffect } from "react";
import type { ReactNode } from "react";

interface MidtransLoaderProps {
  children: ReactNode;
}

const MIDTRANS_SCRIPT_ID = "abn-midtrans-snap";
const MIDTRANS_SANDBOX_URL = "https://app.sandbox.midtrans.com/snap/snap.js";
const MIDTRANS_PRODUCTION_URL = "https://app.midtrans.com/snap/snap.js";

const MidtransLoader = ({ children }: MidtransLoaderProps) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    /**
     * =======================================================
     * SNAP.JS SUDAH TERSEDIA
     * =======================================================
     */
    if (window.snap) {
      console.log("MIDTRANS: Snap.js sudah tersedia.");

      return;
    }

    /**
     * =======================================================
     * CLIENT KEY
     * =======================================================
     */
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

    if (!clientKey) {
      console.error("MIDTRANS: VITE_MIDTRANS_CLIENT_KEY belum dikonfigurasi.");

      return;
    }

    /**
     * =======================================================
     * ENVIRONMENT
     * =======================================================
     *
     * VITE_MIDTRANS_IS_PRODUCTION=false
     * → Sandbox
     *
     * VITE_MIDTRANS_IS_PRODUCTION=true
     * → Production
     */
    const isProduction = import.meta.env.VITE_MIDTRANS_IS_PRODUCTION === "true";

    const scriptUrl = isProduction
      ? MIDTRANS_PRODUCTION_URL
      : MIDTRANS_SANDBOX_URL;

    /**
     * =======================================================
     * CEK SCRIPT EXISTING
     * =======================================================
     */
    const existingScript = document.getElementById(MIDTRANS_SCRIPT_ID);

    if (existingScript) {
      console.log("MIDTRANS: Script Snap.js sudah ada.");

      return;
    }

    /**
     * =======================================================
     * CREATE SCRIPT
     * =======================================================
     */
    const script = document.createElement("script");

    script.id = MIDTRANS_SCRIPT_ID;
    script.type = "text/javascript";
    script.src = scriptUrl;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    /**
     * =======================================================
     * LOAD EVENT
     * =======================================================
     */
    script.onload = () => {
      console.log("MIDTRANS: Snap.js berhasil dimuat.");

      if (window.snap) {
        console.log("MIDTRANS: window.snap tersedia.");
      } else {
        console.error(
          "MIDTRANS: Script berhasil dimuat tetapi window.snap tidak tersedia.",
        );
      }
    };

    /**
     * =======================================================
     * ERROR EVENT
     * =======================================================
     */
    script.onerror = () => {
      console.error("MIDTRANS: Gagal memuat Snap.js.");
    };

    /**
     * =======================================================
     * APPEND
     * =======================================================
     */
    document.head.appendChild(script);

    /**
     * =======================================================
     * NO CLEANUP
     * =======================================================
     *
     * Snap.js sengaja tidak dihapus ketika component
     * unmount agar seluruh aplikasi tetap dapat
     * menggunakan window.snap.
     */
  }, []);

  return <>{children}</>;
};

export default MidtransLoader;
