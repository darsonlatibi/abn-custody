import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch } from "../../stores/store";

import {
  clearContactInquiryError,
  createContactInquiry,
  selectContactInquiryCreating,
  selectContactInquiryError,
} from "../../features/contact/contactInquirySlice";

import "./Contact.css";

/* =========================================================
   TYPES
   ========================================================= */

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/* =========================================================
   COMPONENT
   ========================================================= */

const Contact: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const creating = useSelector(selectContactInquiryCreating);
  const error = useSelector(selectContactInquiryError);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  /* =======================================================
     HANDLE INPUT
     ======================================================= */

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      dispatch(clearContactInquiryError());
    }

    if (success) {
      setSuccess(false);
    }
  };

  /* =======================================================
     HANDLE SUBMIT
     ======================================================= */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setSuccess(false);

    try {
      await dispatch(
        createContactInquiry({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: "",
          projectType: "General Inquiry",
          message: form.message.trim(),
        }),
      ).unwrap();

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSuccess(false);
    }
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="contact-page">
      {/* ===================================================
          HEADER
          =================================================== */}

      <div className="contact-header">
        <div className="contact-header-content">
          <span className="contact-eyebrow">
            <MessageSquare size={16} />
            CONTACT CENTER
          </span>

          <h1>Tinggalkan Pesan</h1>

          <p>
            Hubungi ABN Digital & Industrial Technology untuk informasi produk,
            layanan, integrasi sistem, maupun kebutuhan industri Anda.
          </p>
        </div>
      </div>

      {/* ===================================================
          MAIN LAYOUT
          =================================================== */}

      <div className="contact-layout">
        {/* =================================================
            CONTACT INFORMATION
            ================================================= */}

        <section className="contact-info">
          {/* EMAIL 1 */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>Email</span>
              <strong>darsonptst@gmail.com</strong>
            </div>
          </div>

          {/* EMAIL 2 */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>Email Business</span>
              <strong>agroberkahn@gmail.com</strong>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <Phone size={22} />
            </div>

            <div>
              <span>No. Telp</span>
              <strong>+62 811 447 622</strong>
            </div>
          </div>

          {/* RESPONSE */}
          <div className="contact-info-card">
            <div className="contact-icon">
              <MessageSquare size={22} />
            </div>

            <div>
              <span>Response</span>
              <strong>Business Support</strong>
            </div>
          </div>
        </section>

        {/* =================================================
            CONTACT FORM
            ================================================= */}

        <section className="contact-form-card">
          <div className="contact-form-title">
            <h2>Kirim Pesan</h2>

            <p>
              Silakan lengkapi data berikut dan tim kami akan menghubungi Anda.
            </p>
          </div>

          {/* =================================================
              SUCCESS
              ================================================= */}

          {success && (
            <div className="contact-success">
              <CheckCircle2 size={17} />

              <div>
                <strong>Pesan berhasil dikirim</strong>

                <span>
                  Terima kasih. Tim ABN akan menghubungi Anda melalui informasi
                  yang diberikan.
                </span>
              </div>
            </div>
          )}

          {/* =================================================
              ERROR
              ================================================= */}

          {error && (
            <div className="contact-error">
              <AlertCircle size={17} />

              <div>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* =================================================
              FORM
              ================================================= */}

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              {/* NAME */}
              <div className="contact-field">
                <label htmlFor="name">Nama</label>

                <div className="contact-input">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    autoComplete="name"
                    disabled={creating}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="contact-field">
                <label htmlFor="email">Email</label>

                <div className="contact-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    autoComplete="email"
                    disabled={creating}
                    required
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="contact-field">
                <label htmlFor="phone">No. Telp</label>

                <div className="contact-input">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 811 xxxx xxxx"
                    autoComplete="tel"
                    disabled={creating}
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="contact-field contact-field-full">
                <label htmlFor="message">Pesan</label>

                <div className="contact-textarea">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan atau kebutuhan Anda..."
                    rows={7}
                    disabled={creating}
                    required
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                SUBMIT
                ================================================= */}

            <div className="contact-actions">
              <button
                type="submit"
                className="contact-submit"
                disabled={creating}
              >
                {creating ? (
                  <>
                    <span className="contact-spinner" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Kirim Pesan
                  </>
                )}
              </button>

              {/* =================================================
                  REAL EMAIL
                  ================================================= */}

              <a
                href={`mailto:darsonptst@gmail.com,agroberkahn@gmail.com?subject=${encodeURIComponent(
                  `Kontak ABN - ${form.name || "Pengunjung"}`,
                )}&body=${encodeURIComponent(
                  `Nama: ${form.name || ""}\n` +
                    `Email: ${form.email || ""}\n` +
                    `No. Telp: ${form.phone || ""}\n\n` +
                    `Pesan:\n${form.message || ""}`,
                )}`}
                className="contact-email-button"
              >
                <Mail size={14} />
                Email Langsung
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
