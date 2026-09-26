import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Network,
  Ship,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Industries.css";

/* =========================================================
   ABN WEBSITE
   INDUSTRIES
   ========================================================= */

function Industries() {
  return (
    <main className="industries-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="industries-header">
        <div className="industries-header-content">
          <span className="industries-eyebrow">
            ABN DIGITAL & INDUSTRIAL TECHNOLOGY
          </span>

          <h1>
            Technology for
            <br />
            <span>Real-World Industries.</span>
          </h1>

          <p>
            ABN builds intelligent digital solutions for industrial, enterprise,
            transportation and operational environments — connecting data,
            technology and people into one intelligent ecosystem.
          </p>
        </div>

        <div className="industries-header-badge">
          <div className="industries-badge-icon">
            <Network size={22} />
          </div>

          <div>
            <strong>INDUSTRIAL INTELLIGENCE</strong>
            <small>Connected • Intelligent • Actionable</small>
          </div>
        </div>
      </header>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="industries-section">
        <div className="industries-section-heading">
          <span className="industries-section-eyebrow">
            INDUSTRIES WE SERVE
          </span>

          <h2>Built Around Your Operational Reality</h2>

          <p>
            Every industry has different challenges. ABN combines digital
            platforms, IoT, AI, analytics and automation to create solutions
            aligned with how your business actually operates.
          </p>
        </div>

        <div className="industries-grid">
          <article className="industry-card featured">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Factory size={24} />
              </div>

              <span className="industry-number">01</span>
            </div>

            <div className="industry-card-content">
              <h3>Mining & Industrial</h3>

              <p>
                Intelligent monitoring and digital solutions for mining,
                manufacturing, production, maintenance and industrial assets.
              </p>

              <div className="industry-tags">
                <span>Production</span>
                <span>Assets</span>
                <span>Maintenance</span>
                <span>IoT</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Industrial Solutions
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Truck size={24} />
              </div>

              <span className="industry-number">02</span>
            </div>

            <div className="industry-card-content">
              <h3>Transportation & Fleet</h3>

              <p>
                Real-time fleet visibility, GPS tracking, vehicle intelligence,
                safety monitoring and operational optimization.
              </p>

              <div className="industry-tags">
                <span>GPS</span>
                <span>Fleet</span>
                <span>Safety</span>
                <span>Logistics</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Fleet Intelligence
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Ship size={24} />
              </div>

              <span className="industry-number">03</span>
            </div>

            <div className="industry-card-content">
              <h3>Marine & Maritime</h3>

              <p>
                Connected maritime operations using telemetry, monitoring,
                location intelligence and real-time operational data.
              </p>

              <div className="industry-tags">
                <span>Marine IoT</span>
                <span>Telemetry</span>
                <span>Tracking</span>
                <span>Monitoring</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Marine Intelligence
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Building2 size={24} />
              </div>

              <span className="industry-number">04</span>
            </div>

            <div className="industry-card-content">
              <h3>Enterprise</h3>

              <p>
                Executive intelligence, KPI monitoring, business analytics and
                AI-powered decision support for enterprise organizations.
              </p>

              <div className="industry-tags">
                <span>ERP</span>
                <span>KPI</span>
                <span>Analytics</span>
                <span>AI</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Enterprise Intelligence
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <HardHat size={24} />
              </div>

              <span className="industry-number">05</span>
            </div>

            <div className="industry-card-content">
              <h3>Construction & Infrastructure</h3>

              <p>
                Digital monitoring for projects, equipment, field operations,
                workforce, assets and infrastructure performance.
              </p>

              <div className="industry-tags">
                <span>Projects</span>
                <span>Equipment</span>
                <span>Field Ops</span>
                <span>Assets</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Digital Solutions
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Warehouse size={24} />
              </div>

              <span className="industry-number">06</span>
            </div>

            <div className="industry-card-content">
              <h3>Logistics & Supply Chain</h3>

              <p>
                Connect vehicles, warehouses, logistics processes and
                operational data for greater visibility and efficiency.
              </p>

              <div className="industry-tags">
                <span>Supply Chain</span>
                <span>Warehouse</span>
                <span>Tracking</span>
                <span>Analytics</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Logistics Solutions
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Zap size={24} />
              </div>

              <span className="industry-number">07</span>
            </div>

            <div className="industry-card-content">
              <h3>Energy & Utilities</h3>

              <p>
                Intelligent monitoring and automation for energy assets,
                utilities, field equipment and distributed operations.
              </p>

              <div className="industry-tags">
                <span>Energy</span>
                <span>SCADA</span>
                <span>IoT</span>
                <span>Automation</span>
              </div>
            </div>

            <Link to="/solutions" className="industry-link">
              Explore Energy Solutions
              <ArrowRight size={15} />
            </Link>
          </article>

          <article className="industry-card ecosystem">
            <div className="industry-card-top">
              <div className="industry-icon">
                <Network size={24} />
              </div>

              <span className="industry-number">08</span>
            </div>

            <div className="industry-card-content">
              <h3>Digital Ecosystems</h3>

              <p>
                Integrate existing systems, databases, applications, devices and
                data sources into one intelligent digital ecosystem.
              </p>

              <div className="industry-tags">
                <span>Integration</span>
                <span>Data</span>
                <span>AI</span>
                <span>API</span>
              </div>
            </div>

            <Link to="/technology" className="industry-link">
              Discover ABN Technology
              <ArrowRight size={15} />
            </Link>
          </article>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE LAYER
      ===================================================== */}

      <section className="industries-intelligence">
        <div className="industries-intelligence-copy">
          <span className="industries-section-eyebrow">
            ABN INTELLIGENCE LAYER
          </span>

          <h2>
            One Intelligence Layer.
            <br />
            Multiple Industries.
          </h2>

          <p>
            ABN does not require organizations to replace their existing
            systems. We connect existing data sources, applications and
            operational technology into a unified intelligence layer.
          </p>

          <Link to="/technology" className="industries-button">
            Explore Technology
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="intelligence-stack">
          <div className="stack-item">
            <span>01</span>
            <strong>EXISTING SYSTEMS</strong>
            <small>ERP • Database • Applications</small>
          </div>

          <div className="stack-connector" />

          <div className="stack-item active">
            <span>02</span>
            <strong>ABN INTELLIGENCE</strong>
            <small>AI • Analytics • IoT • Integration</small>
          </div>

          <div className="stack-connector" />

          <div className="stack-item">
            <span>03</span>
            <strong>BUSINESS DECISION</strong>
            <small>Insight • Alert • Action</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industries-cta">
        <span className="industries-section-eyebrow">BUILD WITH ABN</span>

        <h2>Let's build intelligence around your industry.</h2>

        <p>
          Tell us about your operation, systems and challenges. We can design
          the digital intelligence layer around your business.
        </p>

        <Link to="/contact" className="industries-button">
          Talk to ABN
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

export default Industries;
