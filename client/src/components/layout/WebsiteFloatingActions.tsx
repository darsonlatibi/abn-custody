import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import AIChatButton from "./AIChatButton";
import SupportButton from "./SupportButton";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTopButton from "./ScrollToTopButton";

import "./WebsiteFloatingActions.css";

/* =========================================================
   ABN CORPORATE WEBSITE
   FLOATING ACTION MENU
   ========================================================= */

function WebsiteFloatingActions() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  return (
    <div
      className={`website-floating-actions ${open ? "is-open" : "is-closed"}`}
    >
      {/* ===================================================
          ACTIONS
          =================================================== */}

      <div className="website-floating-items">
        <div className="website-floating-item">
          <AIChatButton />
        </div>

        <div className="website-floating-item">
          <SupportButton />
        </div>

        <div className="website-floating-item">
          <WhatsAppButton />
        </div>

        <div className="website-floating-item">
          <ScrollToTopButton />
        </div>
      </div>

      {/* ===================================================
          TOGGLE
          =================================================== */}

      <button
        type="button"
        className="website-floating-toggle"
        onClick={toggleMenu}
        aria-label={open ? "Close floating actions" : "Open floating actions"}
        aria-expanded={open}
      >
        {open ? (
          <Minus size={20} strokeWidth={2.2} />
        ) : (
          <Plus size={20} strokeWidth={2.2} />
        )}
      </button>
    </div>
  );
}

export default WebsiteFloatingActions;
