import {
  ArrowRight,
  BrainCircuit,
  Factory,
  //Gauge,
  Network,
  ShieldCheck,
  Truck,
  Wifi,
  Zap,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "./Solutions.css";

/* =========================================================
   ABN CORPORATE WEBSITE
   SOLUTIONS
   ========================================================= */

const solutions = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI Intelligence",
    description:
      "AI-powered intelligence that transforms business and operational data into insights, recommendations and better decisions.",
    features: [
      "AI Decision Support",
      "Predictive Analytics",
      "Intelligent Recommendations",
      "Executive AI",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Enterprise Intelligence",
    description:
      "Connect enterprise data and business systems into a unified intelligence layer for performance, KPI and executive visibility.",
    features: [
      "Executive Intelligence",
      "KPI Monitoring",
      "Business Analytics",
      "Enterprise Integration",
    ],
  },
  {
    number: "03",
    icon: Factory,
    title: "Industrial Intelligence",
    description:
      "Turn industrial operational data into real-time intelligence across production, assets, maintenance and plant operations.",
    features: [
      "Production Intelligence",
      "Asset Monitoring",
      "Maintenance Intelligence",
      "Industrial Analytics",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "GPS & Fleet Intelligence",
    description:
      "Real-time fleet visibility combined with operational analytics, utilization monitoring, safety and intelligent fleet management.",
    features: [
      "GPS Tracking",
      "Fleet Monitoring",
      "Vehicle Utilization",
      "Fleet Analytics",
    ],
  },
  {
    number: "05",
    icon: Wifi,
    title: "IoT & Automation",
    description:
      "Connect sensors, machines and industrial devices into reliable real-time data and automation ecosystems.",
    features: [
      "Industrial IoT",
      "Telemetry",
      "Remote Monitoring",
      "Automation",
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Digital Transformation",
    description:
      "Modernize existing digital environments through integration, analytics, automation and intelligent applications.",
    features: [
      "System Integration",
      "Digital Platforms",
      "Process Automation",
      "Data Transformation",
    ],
  },
];

/* =========================================================
   SOLUTIONS
   ========================================================= */

function Solutions() {
  return (
    <main className="solutions-page">
      {/* ===================================================
          HERO
          =================================================== */}

      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <span className="solutions-eyebrow">
            ABN DIGITAL & INDUSTRIAL TECHNOLOGY
          </span>

          <h1>
            Intelligence
            <br />
            <span>Built Around Your Business.</span>
          </h1>

          <p>
            ABN builds intelligent digital solutions that connect enterprise
            systems, industrial operations, IoT, data and AI into one connected
            ecosystem.
          </p>

          <div className="solutions-hero-actions">
            <NavLink to="/contact" className="solutions-button primary">
              Talk to ABN
              <ArrowRight size={16} />
            </NavLink>

            <NavLink to="/technology" className="solutions-button secondary">
              Explore Technology
            </NavLink>
          </div>
        </div>

        {/* =================================================
            HERO VISUAL
            ================================================= */}

        <div className="solutions-hero-visual">
          <div className="solutions-system">
            <div className="system-line line-one" />
            <div className="system-line line-two" />
            <div className="system-line line-three" />
            <div className="system-line line-four" />

            <div className="system-core">
              <BrainCircuit size={32} />

              <strong>ABN</strong>

              <span>INTELLIGENCE</span>
            </div>

            <div className="system-node node-ai">
              <BrainCircuit size={17} />
              <span>AI</span>
            </div>

            <div className="system-node node-enterprise">
              <Network size={17} />
              <span>ERP</span>
            </div>

            <div className="system-node node-industrial">
              <Factory size={17} />
              <span>OT</span>
            </div>

            <div className="system-node node-iot">
              <Wifi size={17} />
              <span>IoT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRO
          =================================================== */}

      <section className="solutions-intro">
        <div className="solutions-section-heading">
          <span className="solutions-section-eyebrow">WHAT WE DO</span>

          <h2>From Data to Intelligence.</h2>
        </div>

        <div className="solutions-intro-content">
          <p>
            Modern organizations already have large amounts of data across
            enterprise systems, industrial equipment, fleet operations and
            digital applications.
          </p>

          <p>
            ABN connects those environments and adds an intelligence layer that
            helps organizations understand performance, detect opportunities and
            make better decisions.
          </p>
        </div>
      </section>

      {/* ===================================================
          SOLUTION GRID
          =================================================== */}

      <section className="solutions-list-section">
        <div className="solutions-section-heading centered">
          <span className="solutions-section-eyebrow">OUR SOLUTIONS</span>

          <h2>Intelligence Across Every Layer</h2>

          <p>
            A connected portfolio of digital, industrial and AI solutions
            designed for real-world operations.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article key={solution.number} className="solution-card">
                {/* CARD TOP */}

                <div className="solution-card-top">
                  <div className="solution-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="solution-number">{solution.number}</span>
                </div>

                {/* CONTENT */}

                <div className="solution-card-content">
                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>
                </div>

                {/* FEATURES */}

                <div className="solution-features">
                  {solution.features.map((feature) => (
                    <span key={feature}>
                      <span className="feature-dot" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* LINK */}

                <NavLink to="/contact" className="solution-card-link">
                  Discuss this solution
                  <ArrowRight size={15} />
                </NavLink>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===================================================
          INTELLIGENCE LAYER
          =================================================== */}

      <section className="solutions-intelligence">
        <div className="solutions-intelligence-content">
          <span className="solutions-section-eyebrow">
            ABN INTELLIGENCE LAYER
          </span>

          <h2>
            We Don't Replace Your Systems.
            <br />
            We Make Them More Intelligent.
          </h2>

          <p>
            ABN is designed to work alongside your existing ERP, operational
            systems, industrial control systems, IoT infrastructure and digital
            platforms.
          </p>

          <NavLink to="/technology" className="solutions-button primary">
            Discover Our Architecture
            <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* =================================================
            FLOW
            ================================================= */}

        <div className="solutions-flow">
          <div className="flow-box">
            <span>01</span>
            <strong>EXISTING SYSTEMS</strong>
            <small>ERP • MES • SCADA • IoT • GPS</small>
          </div>

          <div className="flow-connector">
            <ArrowRight size={17} />
          </div>

          <div className="flow-box active">
            <span>02</span>
            <strong>ABN INTELLIGENCE</strong>
            <small>AI • Analytics • Integration</small>
          </div>

          <div className="flow-connector">
            <ArrowRight size={17} />
          </div>

          <div className="flow-box">
            <span>03</span>
            <strong>BETTER DECISIONS</strong>
            <small>Insight • Action • Performance</small>
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
          =================================================== */}

      <section className="solutions-cta">
        <div className="solutions-cta-icon">
          <Zap size={22} />
        </div>

        <span className="solutions-section-eyebrow">START WITH ABN</span>

        <h2>Let's build intelligence around your business.</h2>

        <p>
          Tell us about your systems, operations and business challenges. We
          will explore where intelligence can create the greatest impact.
        </p>

        <NavLink to="/contact" className="solutions-button primary">
          Contact ABN
          <ArrowRight size={16} />
        </NavLink>
      </section>
    </main>
  );
}

export default Solutions;
