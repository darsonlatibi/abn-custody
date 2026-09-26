import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

import "./Technology.css";

type TechnologyStatus = "CORE" | "CONNECTED" | "INTELLIGENT" | "READY";

type TechnologyItem = {
  icon: typeof BrainCircuit;
  title: string;
  description: string;
  status: TechnologyStatus;
  tags: string[];
};

const technologies: TechnologyItem[] = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    description:
      "AI transforms operational, industrial, and enterprise data into insights, predictions, recommendations, optimization, and better decisions.",
    status: "INTELLIGENT",
    tags: ["AI", "Analytics", "Prediction", "Decision Intelligence"],
  },
  {
    icon: Cpu,
    title: "Industrial & IoT",
    description:
      "Connect machines, sensors, controllers, vehicles, and field devices to capture real-time operational data from physical environments.",
    status: "CONNECTED",
    tags: ["IoT", "Sensors", "Telemetry", "Edge"],
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Integrate ERP, SAP, SCADA, IoT, GPS, databases, APIs, and existing enterprise applications into one connected technology ecosystem.",
    status: "CONNECTED",
    tags: ["REST API", "ERP", "SAP", "SCADA"],
  },
  {
    icon: Database,
    title: "Data Platform",
    description:
      "Build reliable data foundations that collect, structure, process, store, and contextualize operational information for analytics and AI.",
    status: "CORE",
    tags: ["MySQL", "Redis", "ETL", "Data Pipeline"],
  },
  {
    icon: Server,
    title: "Application Platform",
    description:
      "Modern enterprise and industrial application architecture built with React, TypeScript, Node.js, and Express, supported by secure APIs and realtime services.",
    status: "CORE",
    tags: ["React", "TypeScript", "Node.js", "Express"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Secure and scalable infrastructure connecting applications, APIs, networks, and users through modern cloud, edge, and network architecture.",
    status: "READY",
    tags: ["Cloudflare", "CDN", "Docker", "Linux"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Reliability",
    description:
      "Security architecture covering HttpOnly authentication, authorization, secure communication, API protection, access control, monitoring, and operational reliability.",
    status: "READY",
    tags: ["HttpOnly", "Auth", "WAF", "SSL/TLS"],
  },
  {
    icon: Zap,
    title: "Automation & Edge",
    description:
      "Convert intelligence into action through automated workflows, alerts, edge processing, control systems, and operational responses.",
    status: "INTELLIGENT",
    tags: ["Automation", "Edge", "Workflow", "Control"],
  },
];

const technologyStack = [
  {
    icon: Radio,
    title: "DATA SOURCES",
    description: "Machines • Sensors • IoT • ERP • SAP • GPS • SCADA • APIs",
  },
  {
    icon: Wifi,
    title: "CONNECTIVITY",
    description:
      "IoT • MQTT • Modbus • RS485 • WebSocket • REST APIs • Networks",
  },
  {
    icon: Server,
    title: "ABN APPLICATION PLATFORM",
    description:
      "React • TypeScript • Node.js • Express • REST APIs • WebSocket • Services",
  },
  {
    icon: Database,
    title: "DATA PLATFORM",
    description: "MySQL • Redis • ETL • Data Pipeline • Storage • Processing",
  },
  {
    icon: BrainCircuit,
    title: "INTELLIGENCE",
    description:
      "AI • Analytics • Prediction • Optimization • Decision Intelligence",
  },
  {
    icon: Gauge,
    title: "DECISION & ACTION",
    description:
      "Dashboard • Alerts • Automation • Control • Operational Action",
  },
];

const technologyFoundation = [
  {
    icon: Cloud,
    title: "CLOUD & INFRASTRUCTURE",
    description: "Cloudflare • CDN • DNS • WAF • Linux • Docker • SSL/TLS",
  },
  {
    icon: ShieldCheck,
    title: "SECURITY & IDENTITY",
    description:
      "HttpOnly Cookies • Authentication • Authorization • API Security • Access Control",
  },
  {
    icon: Cpu,
    title: "INDUSTRIAL EDGE",
    description: "Sensors • Controllers • Edge Computing • Industrial Devices",
  },
  {
    icon: Network,
    title: "SYSTEM INTEGRATION",
    description:
      "ERP • SAP • SCADA • IoT • GPS • REST APIs • Enterprise Systems",
  },
];

const capabilities = [
  {
    icon: Activity,
    number: "01",
    label: "REAL-TIME",
    title: "Operational Visibility",
    description:
      "Capture and monitor live operational data across industrial assets, systems, and business processes.",
  },
  {
    icon: Network,
    number: "02",
    label: "CONNECTED",
    title: "Unified Data",
    description:
      "Connect fragmented systems and transform isolated data sources into one connected information ecosystem.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    label: "INTELLIGENT",
    title: "AI-Powered Insight",
    description:
      "Apply analytics and AI to identify patterns, predict conditions, discover opportunities, and support decisions.",
  },
  {
    icon: Zap,
    number: "04",
    label: "ACTIONABLE",
    title: "Automation & Action",
    description:
      "Turn intelligence into alerts, workflows, recommendations, and operational actions.",
  },
];

export default function Technology() {
  return (
    <main className="technology-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="technology-hero">
        <div className="technology-hero-content">
          <span className="technology-eyebrow">
            ABN DIGITAL & INDUSTRIAL TECHNOLOGY
          </span>

          <h1>
            Technology That
            <br />
            Creates Intelligence.
          </h1>

          <p>
            ABN combines industrial technology, data platforms, AI, system
            integration, cloud infrastructure, cybersecurity, and automation to
            transform complex operational data into actionable intelligence.
          </p>

          <div className="technology-hero-meta">
            <span>ABN TECHNOLOGY</span>
            <span>Industrial</span>
            <span>Connected</span>
            <span>Intelligent</span>
          </div>
        </div>

        <div className="technology-hero-visual">
          <div className="technology-orbit technology-orbit-one" />
          <div className="technology-orbit technology-orbit-two" />

          <div className="technology-core">
            <BrainCircuit size={48} strokeWidth={1.4} />

            <span>ABN</span>

            <strong>INTELLIGENCE</strong>
          </div>

          <div className="technology-node technology-node-one">
            <Database size={17} />
          </div>

          <div className="technology-node technology-node-two">
            <Cpu size={17} />
          </div>

          <div className="technology-node technology-node-three">
            <Cloud size={17} />
          </div>

          <div className="technology-node technology-node-four">
            <Network size={17} />
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY CAPABILITIES
      ========================================================= */}
      <section className="technology-capabilities">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">ABN TECHNOLOGY CAPABILITIES</span>

            <h2>
              Beyond Software.
              <br />
              Built for Intelligence.
            </h2>
          </div>

          <p>
            ABN combines industrial systems, enterprise applications, data
            infrastructure, AI, cloud technology, cybersecurity, and automation
            into one connected intelligence ecosystem.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <article className="technology-card" key={item.title}>
                <div className="technology-card-top">
                  <div className="technology-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span
                    className={`technology-status ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="technology-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section className="technology-architecture">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              ABN INTELLIGENCE ARCHITECTURE
            </span>

            <h2>
              From Data
              <br />
              to Decision.
            </h2>
          </div>

          <p>
            ABN acts as an intelligence layer across existing industrial and
            enterprise environments. Existing systems remain valuable while
            their data becomes connected, contextualized, analyzed, and
            transformed into operational decisions.
          </p>
        </div>

        <div className="technology-flow">
          {technologyStack.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="technology-flow-item" key={item.title}>
                <div className="technology-flow-card">
                  <div className="technology-flow-icon">
                    <Icon size={22} />
                  </div>

                  <span>{item.title}</span>

                  <strong>{item.description}</strong>
                </div>

                {index < technologyStack.length - 1 && (
                  <div className="technology-flow-arrow">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="technology-architecture-points">
          <div>
            <span>01</span>
            <p>Connect industrial and enterprise systems</p>
          </div>

          <div>
            <span>02</span>
            <p>Collect and process operational data</p>
          </div>

          <div>
            <span>03</span>
            <p>Apply AI and advanced analytics</p>
          </div>

          <div>
            <span>04</span>
            <p>Deliver actionable intelligence</p>
          </div>

          <div>
            <span>05</span>
            <p>Automate operational responses</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY FOUNDATION
      ========================================================= */}
      <section className="technology-foundation">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">ABN TECHNOLOGY FOUNDATION</span>

            <h2>
              Built on Modern
              <br />
              Technology.
            </h2>
          </div>

          <p>
            Our architecture combines proven enterprise technologies with modern
            cloud, industrial, security, application, and intelligence
            capabilities.
          </p>
        </div>

        <div className="technology-foundation-grid">
          {technologyFoundation.map((item) => {
            const Icon = item.icon;

            return (
              <article className="foundation-card" key={item.title}>
                <div className="foundation-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <span>{item.title}</span>

                  <strong>{item.description}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          INTELLIGENCE CAPABILITIES
      ========================================================= */}
      <section className="technology-intelligence">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              ABN INTELLIGENCE CAPABILITIES
            </span>

            <h2>
              Technology
              <br />
              With Purpose.
            </h2>
          </div>

          <p>
            Technology becomes valuable when it improves visibility, connects
            information, strengthens decisions, and creates measurable
            operational impact.
          </p>
        </div>

        <div className="technology-capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article className="technology-capability-card" key={item.number}>
                <div className="capability-number">{item.number}</div>

                <div className="capability-icon">
                  <Icon size={22} />
                </div>

                <span>{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="technology-cta">
        <div className="technology-cta-content">
          <span className="section-eyebrow">BUILD THE INTELLIGENCE LAYER</span>

          <h2>
            Connect Your Technology.
            <br />
            Create Intelligence.
          </h2>

          <p>
            Connect your systems, industrial assets, business data, and
            operational technology with ABN's intelligence architecture.
          </p>

          <div className="technology-cta-actions">
            <a href="/contact" className="technology-link">
              <span>Talk to ABN</span>
              <ArrowRight size={15} />
            </a>

            <a href="/solutions" className="technology-link secondary">
              <span>Explore Solutions</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="technology-cta-visual">
          <div className="cta-line cta-line-one" />
          <div className="cta-line cta-line-two" />
          <div className="cta-line cta-line-three" />

          <div className="cta-core">
            <BrainCircuit size={34} />
          </div>
        </div>
      </section>
    </main>
  );
}
