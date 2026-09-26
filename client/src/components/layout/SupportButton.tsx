import { Headphones, MessageCircle, X } from "lucide-react";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./SupportButton.css";

/* =========================================================
   ABN SUPPORT BUTTON
   WEBSITE FLOATING SUPPORT
   ========================================================= */

function SupportButton() {
  const [open, setOpen] = useState(false);

  const toggleSupport = () => {
    setOpen((current) => !current);
  };

  const closeSupport = () => {
    setOpen(false);
  };

  return (
    <div className={`support-widget ${open ? "open" : ""}`}>
      {/* ===================================================
          SUPPORT PANEL
          =================================================== */}

      {open && (
        <div className="support-panel">
          {/* HEADER */}

          <div className="support-panel-header">
            <div className="support-panel-title">
              <div className="support-panel-icon">
                <Headphones size={18} strokeWidth={2} />
              </div>

              <div>
                <strong>ABN Support</strong>

                <span>Support & Assistance</span>
              </div>
            </div>

            <button
              type="button"
              className="support-panel-close"
              onClick={closeSupport}
              aria-label="Close support"
            >
              <X size={17} strokeWidth={2} />
            </button>
          </div>

          {/* BODY */}

          <div className="support-panel-body">
            <p>
              Need help with ABN Fleet, GPS tracker, system access, integration,
              or technical issues?
            </p>

            <div className="support-options">
              {/* FLEET SUPPORT */}

              <NavLink
                to="/support"
                className="support-option"
                onClick={closeSupport}
              >
                <div className="support-option-icon">
                  <Headphones size={16} strokeWidth={2} />
                </div>

                <div>
                  <strong>ABN Support</strong>

                  <span>System & technical assistance</span>
                </div>
              </NavLink>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/620000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="support-option"
              >
                <div className="support-option-icon whatsapp">
                  <MessageCircle size={16} strokeWidth={2} />
                </div>

                <div>
                  <strong>WhatsApp Support</strong>

                  <span>Contact operational support</span>
                </div>
              </a>
            </div>
          </div>

          {/* FOOTER */}

          <div className="support-panel-footer">
            <span>ABN Digital & Industrial Technology</span>
          </div>
        </div>
      )}

      {/* ===================================================
          FLOATING BUTTON
          =================================================== */}

      <button
        type="button"
        className="support-floating-button"
        onClick={toggleSupport}
        aria-label={open ? "Close support" : "Open support"}
        aria-expanded={open}
      >
        {open ? (
          <X size={21} strokeWidth={2} />
        ) : (
          <Headphones size={21} strokeWidth={2} />
        )}

        <span className="support-floating-label">Support</span>

        {!open && <span className="support-status-dot" />}
      </button>
    </div>
  );
}

export default SupportButton;
