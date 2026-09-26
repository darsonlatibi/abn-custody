import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

/* =========================================================
   ABN CORPORATE WEBSITE
   WEBSITE FOOTER
   ========================================================= */

/* =========================================================
   OFFICE LOCATION
   ========================================================= */

const officeLocation = {
  name: "PT. Agro Berkah Nusantara",

  address:
    "Jl. Barata Jaya VII No.18, Baratajaya, Kec. Gubeng, Surabaya, Jawa Timur 60284",

  mapsUrl: "https://share.google/TJUajzLpebs42hWes",
};

const companyLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const solutionLinks = [
  { label: "AI Intelligence", path: "/solutions" },
  { label: "Enterprise Intelligence", path: "/solutions" },
  { label: "Industrial Intelligence", path: "/solutions" },
  { label: "Fleet Intelligence", path: "/solutions" },
  { label: "IoT & Automation", path: "/solutions" },
];

const technologyLinks = [
  { label: "Technology", path: "/technology" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
];

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="website-footer">
      {/* ===================================================
          MAIN FOOTER
          =================================================== */}

      <div className="website-footer-main">
        <div className="website-footer-inner">
          {/* =================================================
              COMPANY
              ================================================= */}

          <div className="website-footer-company">
            <Link to="/" className="website-footer-brand" aria-label="ABN Home">
              <div className="website-footer-brand-mark">
                <img
                  src={logo}
                  alt="PT. Agro Berkah Nusantara"
                  className="website-footer-brand-logo"
                />
              </div>

              <div className="website-footer-brand-text">
                <strong>PT. AGRO BERKAH NUSANTARA</strong>

                <span>ABN EMS & INDUSTRIAL INTELLIGENCE</span>
              </div>
            </Link>

            <p className="website-footer-description">
              Building intelligent digital solutions for enterprise, industrial
              and operational environments through data, technology, IoT,
              automation and AI.
            </p>

            <div className="website-footer-contact-list">
              {/* =================================================
                  EMAIL
                  ================================================= */}

              <a
                href="mailto:sales@abn.web.id"
                className="website-footer-contact"
              >
                <Mail size={15} strokeWidth={1.8} />

                <span>sales@abn.web.id</span>
              </a>

              {/* =================================================
                  PHONE
                  ================================================= */}

              <a href="tel:+620000000000" className="website-footer-contact">
                <Phone size={15} strokeWidth={1.8} />

                <span>Contact Office</span>
              </a>

              {/* =================================================
                  OFFICE ADDRESS
                  ================================================= */}

              <a
                href={officeLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="website-footer-contact website-footer-location"
                aria-label="Open ABN office location in Google Maps"
              >
                <MapPin size={15} strokeWidth={1.8} />

                <span>{officeLocation.address}</span>
              </a>
            </div>

            {/* =================================================
                OFFICE LOCATION CARD
                ================================================= */}

            {/* <a
              href={officeLocation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="website-footer-map-card"
              aria-label="Open ABN office location in Google Maps"
            >
              <div className="website-footer-map-overlay">
                <MapPin size={30} strokeWidth={1.5} />

                <strong>{officeLocation.name}</strong>

                <span>
                  Jl. Barata Jaya VII No.18
                  <br />
                  Baratajaya, Kec. Gubeng
                  <br />
                  Surabaya, Jawa Timur 60284
                </span>

                <small>
                  Open in Google Maps
                  <ArrowRight size={13} strokeWidth={1.8} />
                </small>
              </div>
            </a> */}
          </div>

          {/* =================================================
              COMPANY LINKS
              ================================================= */}

          <div className="website-footer-column">
            <h3>Company</h3>

            <nav aria-label="Company">
              {companyLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              SOLUTIONS
              ================================================= */}

          <div className="website-footer-column">
            <h3>Solutions</h3>

            <nav aria-label="Solutions">
              {solutionLinks.map((item, index) => (
                <Link key={`${item.label}-${index}`} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              TECHNOLOGY
              ================================================= */}

          <div className="website-footer-column">
            <h3>Technology</h3>

            <nav aria-label="Technology">
              {technologyLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              CTA
              ================================================= */}

          <div className="website-footer-cta">
            <span className="website-footer-kicker">BUILD WITH ABN</span>

            <h3>
              Turn your data
              <br />
              into intelligence.
            </h3>

            <p>
              Let's explore how ABN technology can support your business and
              operational environment.
            </p>

            <Link to="/contact" className="website-footer-cta-button">
              Contact ABN
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      {/* ===================================================
          BOTTOM BAR
          =================================================== */}

      <div className="website-footer-bottom">
        <div className="website-footer-bottom-inner">
          <div className="website-footer-copyright">
            <Building2 size={14} strokeWidth={1.8} />

            <span>
              © {new Date().getFullYear()} PT. Agro Berkah Nusantara. All rights
              reserved.
            </span>
          </div>

          <div className="website-footer-legal">
            <Link to="/privacy">Privacy</Link>

            <span>•</span>

            <Link to="/terms">Terms</Link>

            <span>•</span>

            <span>ABN Digital & Industrial Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
