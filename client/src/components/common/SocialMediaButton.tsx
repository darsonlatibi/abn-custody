import { useState, type ReactNode } from "react";
import { XIcon, X } from "lucide-react";

import "./SocialMediaButton.css";

interface SocialLink {
  id: string;
  label: string;
  description: string;
  url: string;
  icon: ReactNode;
}

/* =========================================================
   SOCIAL MEDIA ICONS
   SVG INLINE
   Tidak bergantung pada lucide-react
   ========================================================= */

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5.2V12H6v4h3v6h4v-6h3.2l.8-4H13V9.5c0-.9.3-1.5 1-1.5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.5 8.2H3V21h3.5V8.2ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.65c0-3.85-2.05-5.65-4.8-5.65-2.2 0-3.2 1.2-3.75 2.05V8.2H9V21h3.45v-6.33c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.92 2.07 3.4V21H21v-7.35Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.7 3c.3 1.8 1.3 3.2 3.3 3.8v3.2c-1.6-.1-3-.6-4.2-1.5v7.1c0 4.3-3.1 6.9-6.8 6.9A6.8 6.8 0 0 1 2 15.7c0-3.8 3.1-6.7 7-6.7.4 0 .8 0 1.2.1v3.5a4 4 0 0 0-1.2-.2 3.2 3.2 0 1 0 3.2 3.2V3h4.5Z" />
  </svg>
);

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    description: "Follow Darson La Tibi on Instagram",
    url: "https://www.instagram.com/darsonlatibi/",
    icon: <InstagramIcon />,
  },
  {
    id: "facebook",
    label: "Facebook",
    description: "Connect with Darson La Tibi on Facebook",
    url: "https://web.facebook.com/darson.la.tibi.2025",
    icon: <FacebookIcon />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Connect with Darson La Tibi professionally",
    url: "https://www.linkedin.com/in/darson-la-tibi-689242235/",
    icon: <LinkedinIcon />,
  },
  {
    id: "youtube",
    label: "YouTube",
    description: "Watch Darson La Tibi on YouTube",
    url: "https://www.youtube.com/@darsonlatibi5979",
    icon: <YoutubeIcon />,
  },
  {
    id: "tiktok",
    label: "TikTok",
    description: "Follow Darson La Tibi on TikTok",
    url: "https://www.tiktok.com/@darson.la.tibi5",
    icon: <TikTokIcon />,
  },
  {
    id: "x",
    label: "X",
    description: "Follow Darson La Tibi on X",
    url: "https://x.com/darsonlatibi",
    icon: <XIcon />,
  },
  {
    id: "telegram",
    label: "Telegram",
    description: "Connect with Darson La Tibi on Telegram",
    url: "https://t.me/darsonlatibi",
    icon: <X />,
  },
];
/* =========================================================
   COMPONENT
   ========================================================= */

function SocialMediaButton() {
  const [open, setOpen] = useState(false);

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="social-media-widget">
      {/* =====================================================
          SOCIAL MEDIA MENU
          ===================================================== */}

      <div
        className={`social-media-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="ABN social media"
        aria-hidden={!open}
      >
        <div className="social-media-menu-header">
          <div>
            <strong>Follow ABN</strong>
            <span>Connect with us on social media</span>
          </div>

          <button
            type="button"
            className="social-media-close"
            onClick={() => setOpen(false)}
            aria-label="Close social media menu"
            tabIndex={open ? 0 : -1}
          >
            <X size={18} />
          </button>
        </div>

        <div className="social-media-links">
          {SOCIAL_LINKS.map((social) => (
            <button
              type="button"
              className={`social-media-link social-${social.id}`}
              key={social.id}
              onClick={() => handleSocialClick(social.url)}
              tabIndex={open ? 0 : -1}
            >
              <span className="social-media-icon">{social.icon}</span>

              <span className="social-media-info">
                <strong>{social.label}</strong>
                <small>{social.description}</small>
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
        className={`social-media-button ${open ? "active" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close ABN social media" : "Open ABN social media"}
        aria-expanded={open}
        title="Follow ABN on social media"
      >
        <span className="social-media-button-icon">
          {open ? <X size={23} strokeWidth={2.2} /> : <InstagramIcon />}
        </span>
      </button>
    </div>
  );
}

export default SocialMediaButton;
