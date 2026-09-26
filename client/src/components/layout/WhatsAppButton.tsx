import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

import "./WhatsAppButton.css";

const WHATSAPP_CONTACTS = [
  {
    label: "Sales",
    description: "Informasi produk & penawaran",
    number: "62811447622",
    message:
      "Halo ABN, saya ingin mendapatkan informasi mengenai ABN Fleet System.",
  },
  {
    label: "Customer Support",
    description: "Bantuan dan layanan pelanggan",
    number: "62811447622",
    message: "Halo ABN Customer Support, saya membutuhkan bantuan.",
  },
  {
    label: "Technical Support",
    description: "Bantuan teknis sistem",
    number: "62811447622",
    message: "Halo ABN Technical Support, saya membutuhkan bantuan teknis.",
  },
];

function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const handleWhatsApp = (number: string, message: string) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setOpen(false);
  };

  return (
    <div className="whatsapp-widget">
      {/* =====================================================
          WHATSAPP MENU
          ===================================================== */}
      <div
        className={`whatsapp-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="ABN WhatsApp contacts"
        aria-hidden={!open}
      >
        <div className="whatsapp-menu-header">
          <div>
            <strong>Chat with ABN</strong>
            <span>Choose a department</span>
          </div>

          <button
            type="button"
            className="whatsapp-close"
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp menu"
            tabIndex={open ? 0 : -1}
          >
            <X size={18} />
          </button>
        </div>

        <div className="whatsapp-contacts">
          {WHATSAPP_CONTACTS.map((contact) => (
            <button
              type="button"
              className="whatsapp-contact"
              key={contact.label}
              onClick={() => handleWhatsApp(contact.number, contact.message)}
              tabIndex={open ? 0 : -1}
            >
              <span className="whatsapp-contact-icon">
                <MessageCircle size={20} />
              </span>

              <span className="whatsapp-contact-info">
                <strong>{contact.label}</strong>
                <small>{contact.description}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          MAIN BUTTON
          ===================================================== */}
      <button
        type="button"
        className={`whatsapp-button ${open ? "active" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={
          open ? "Close ABN WhatsApp contacts" : "Open ABN WhatsApp contacts"
        }
        aria-expanded={open}
        title="Contact ABN on WhatsApp"
      >
        <span className="whatsapp-button-icon">
          {open ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <MessageCircle size={24} strokeWidth={2.2} />
          )}
        </span>

        {!open && (
          <span className="whatsapp-tooltip">Contact ABN on WhatsApp</span>
        )}
      </button>
    </div>
  );
}

export default WhatsAppButton;
