import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import "./ScrollToTopButton.css";

/* =========================================================
   ABN CORPORATE WEBSITE
   SCROLL TO TOP BUTTON
   ========================================================= */

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  /* =======================================================
     SCROLL STATE
     ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     SCROLL TO TOP
     ======================================================= */

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <button
      type="button"
      className={`scroll-to-top-button ${visible ? "visible" : ""}`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} strokeWidth={2} />
    </button>
  );
}

export default ScrollToTopButton;
