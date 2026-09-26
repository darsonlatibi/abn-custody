/*
=========================================================
ABN INDUSTRY 4.0
SYSTEM INTEGRATION
=========================================================
*/

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitMerge,
  Layers3,
  MonitorCog,
  Network,
  Radio,
  ServerCog,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./SystemIntegration.css";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Network,
    title: "Industrial System Integration",
    description:
      "Menghubungkan berbagai sistem industri agar dapat bertukar data secara konsisten, aman, dan realtime.",
    features: [
      "DCS & PLC Integration",
      "SCADA Integration",
      "Industrial Gateway",
      "Protocol Conversion",
    ],
  },
  {
    icon: Workflow,
    title: "OT & IT Integration",
    description:
      "Menghubungkan operational technology dengan enterprise application untuk membangun aliran data end-to-end.",
    features: [
      "OT / IT Connectivity",
      "ERP Integration",
      "MES Integration",
      "Enterprise API",
    ],
  },
  {
    icon: Radio,
    title: "Industrial Protocol Integration",
    description:
      "Integrasi perangkat dan sistem menggunakan protokol industri yang sesuai dengan arsitektur existing.",
    features: ["OPC UA / OPC DA", "Modbus TCP / RTU", "MQTT", "REST API"],
  },
  {
    icon: Database,
    title: "Industrial Data Integration",
    description:
      "Mengumpulkan dan menyatukan data dari berbagai sumber menjadi centralized industrial data platform.",
    features: [
      "Data Collection",
      "Data Normalization",
      "Historical Data",
      "Realtime Data Stream",
    ],
  },
  {
    icon: ServerCog,
    title: "Integration Middleware",
    description:
      "Membangun middleware sebagai lapisan penghubung antara equipment, control system, database dan aplikasi.",
    features: [
      "API Gateway",
      "Message Broker",
      "Data Routing",
      "Service Integration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Integration",
    description:
      "Menerapkan mekanisme keamanan komunikasi dan akses untuk menjaga integritas sistem industri.",
    features: [
      "Network Segmentation",
      "Authentication",
      "Access Control",
      "Secure Gateway",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: MonitorCog,
    title: "Control System Integration",
    description:
      "Integrasi DCS, PLC, SCADA dan perangkat kontrol ke platform monitoring dan data.",
  },
  {
    icon: GitMerge,
    title: "Enterprise Integration",
    description:
      "Menghubungkan sistem industri dengan ERP, MES, CRM, warehouse dan business application.",
  },
  {
    icon: Gauge,
    title: "Realtime Monitoring",
    description:
      "Menyediakan aliran data realtime dari equipment dan control system menuju dashboard.",
  },
  {
    icon: Cloud,
    title: "Cloud & Data Platform",
    description:
      "Menghubungkan industrial data dengan cloud infrastructure dan centralized analytics platform.",
  },
];

const technologies = [
  "OPC UA",
  "OPC DA",
  "Modbus TCP",
  "Modbus RTU",
  "MQTT",
  "REST API",
  "WebSocket",
  "Node.js",
  "Python",
  "MySQL",
  "PostgreSQL",
  "Docker",
];

const SystemIntegration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="integration-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="integration-hero">
        <div className="integration-hero-grid" />

        <div className="integration-container integration-hero-content">
          <div className="integration-hero-copy">
            <div className="integration-eyebrow">
              <Network size={14} />
              SYSTEM INTEGRATION
            </div>

            <h1>
              Connect Every System.
              <br />
              <span>One Industrial Ecosystem.</span>
            </h1>

            <p>
              ABN Industry 4.0 mengintegrasikan control system, industrial
              equipment, enterprise application, database dan cloud platform
              menjadi satu ekosistem data yang terhubung dan realtime.
            </p>

            <div className="integration-hero-actions">
              <button
                type="button"
                className="integration-btn integration-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your System
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="integration-btn integration-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="integration-hero-points">
              <div>
                <CheckCircle2 size={15} />
                OT / IT Integration
              </div>

              <div>
                <CheckCircle2 size={15} />
                Realtime Data
              </div>

              <div>
                <CheckCircle2 size={15} />
                Secure Architecture
              </div>
            </div>
          </div>

          {/* =====================================================
              SYSTEM VISUAL
          ===================================================== */}

          <div className="integration-hero-visual">
            <div className="integration-system-card">
              <div className="integration-system-header">
                <div>
                  <span className="integration-status-dot" />
                  INTEGRATION ENGINE
                </div>

                <span>ABN-I4.0</span>
              </div>

              <div className="integration-system-main">
                <div className="integration-code-panel">
                  <div className="integration-code-line">
                    <span className="code-muted">01</span>{" "}
                    <span className="code-blue">SYSTEM</span>{" "}
                    <span className="code-white">Integration</span>
                  </div>

                  <div className="integration-code-line">
                    <span className="code-muted">02</span>{" "}
                    <span className="code-blue">SOURCE</span>{" "}
                    <span className="code-green">DCS / PLC / SCADA</span>
                  </div>

                  <div className="integration-code-line">
                    <span className="code-muted">03</span>{" "}
                    <span className="code-blue">PROTOCOL</span>{" "}
                    <span className="code-orange">OPC-UA / MQTT / API</span>
                  </div>

                  <div className="integration-code-line">
                    <span className="code-muted">04</span>{" "}
                    <span className="code-blue">DATA</span>{" "}
                    <span className="code-white">Normalized & Realtime</span>
                  </div>

                  <div className="integration-code-line">
                    <span className="code-muted">05</span>{" "}
                    <span className="code-blue">TARGET</span>{" "}
                    <span className="code-green">MES / ERP / Cloud</span>
                  </div>
                </div>

                <div className="integration-system-flow">
                  <div className="integration-flow-node">
                    <Settings2 size={22} />
                    <span>OT SYSTEM</span>
                  </div>

                  <div className="integration-flow-line" />

                  <div className="integration-flow-node integration-flow-active">
                    <GitMerge size={22} />
                    <span>INTEGRATION</span>
                  </div>

                  <div className="integration-flow-line" />

                  <div className="integration-flow-node">
                    <Database size={22} />
                    <span>DATA PLATFORM</span>
                  </div>
                </div>
              </div>

              <div className="integration-system-footer">
                <div>
                  <span>PROTOCOL</span>
                  <strong>OPC / MQTT</strong>
                </div>

                <div>
                  <span>DATA FLOW</span>
                  <strong>REALTIME</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>CONNECTED</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / CAPABILITY
      ===================================================== */}

      <section className="integration-section integration-intro">
        <div className="integration-container">
          <div className="integration-section-heading">
            <div className="integration-eyebrow">
              <Layers3 size={14} />
              OUR CAPABILITY
            </div>

            <h2>
              Connecting <span>Industrial Systems</span> Into One Data Flow
            </h2>

            <p>
              Setiap plant memiliki kombinasi control system, equipment,
              database dan aplikasi yang berbeda. ABN membangun integration
              layer yang memungkinkan sistem existing tetap berjalan sambil
              membuka akses data untuk kebutuhan monitoring, analytics dan
              digital transformation.
            </p>
          </div>

          <div className="integration-capability-grid">
            <div className="integration-capability-card">
              <div className="integration-capability-icon">
                <Network size={21} />
              </div>

              <strong>Connect</strong>

              <span>
                Menghubungkan berbagai equipment, control system dan
                application.
              </span>
            </div>

            <div className="integration-capability-card">
              <div className="integration-capability-icon">
                <Workflow size={21} />
              </div>

              <strong>Translate</strong>

              <span>
                Mengubah dan menerjemahkan protokol serta format data antar
                sistem.
              </span>
            </div>

            <div className="integration-capability-card">
              <div className="integration-capability-icon">
                <Database size={21} />
              </div>

              <strong>Normalize</strong>

              <span>
                Menyatukan struktur data agar dapat digunakan oleh berbagai
                aplikasi.
              </span>
            </div>

            <div className="integration-capability-card">
              <div className="integration-capability-icon">
                <Zap size={21} />
              </div>

              <strong>Synchronize</strong>

              <span>
                Menjaga pertukaran data antar sistem tetap realtime dan
                konsisten.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="integration-section">
        <div className="integration-container">
          <div className="integration-section-heading centered">
            <div className="integration-eyebrow">
              <Code2 size={14} />
              INTEGRATION SERVICES
            </div>

            <h2>
              Integration From <span>Field To Enterprise</span>
            </h2>

            <p>
              Membangun konektivitas antar layer OT, IT dan enterprise
              menggunakan arsitektur yang sesuai dengan kebutuhan operasional
              dan kondisi existing system.
            </p>
          </div>

          <div className="integration-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="integration-service-card"
                >
                  <div className="integration-service-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="integration-card-link"
                    onClick={() => navigate("/contact")}
                  >
                    Discuss Integration
                    <ArrowRight size={14} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS SOLUTIONS
      ===================================================== */}

      <section className="integration-section integration-solutions">
        <div className="integration-container integration-solution-layout">
          <div className="integration-solution-copy">
            <div className="integration-eyebrow">
              <MonitorCog size={14} />
              INDUSTRIAL SOLUTIONS
            </div>

            <h2>
              Integration Designed For <span>Real Industrial Operations</span>
            </h2>

            <p>
              Bukan sekadar menghubungkan sistem. Integration architecture harus
              mampu mendukung operasi plant, availability, monitoring, reporting
              dan kebutuhan bisnis secara berkelanjutan.
            </p>

            <button
              type="button"
              className="integration-btn integration-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Build Your Integration
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="integration-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="integration-solution-card"
                >
                  <Icon size={24} />

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="integration-section">
        <div className="integration-container integration-tech-layout">
          <div>
            <div className="integration-eyebrow">
              <ServerCog size={14} />
              INTEGRATION TECHNOLOGY
            </div>

            <h2>
              Open <span>Protocols.</span>
              <br />
              Flexible Architecture.
            </h2>

            <p>
              Kami menggunakan protokol dan teknologi integrasi yang dapat
              menyesuaikan dengan existing infrastructure, mulai dari industrial
              protocol hingga modern API dan cloud platform.
            </p>
          </div>

          <div className="integration-tech-list">
            {technologies.map((technology) => (
              <div key={technology} className="integration-tech-item">
                <CheckCircle2 size={15} />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="integration-cta">
        <div className="integration-container integration-cta-inner">
          <div>
            <div className="integration-eyebrow">
              <Network size={14} />
              START INTEGRATION
            </div>

            <h2>
              Connect Your <span>Industrial Ecosystem.</span>
            </h2>

            <p>
              Punya DCS, PLC, SCADA, ERP, MES atau database existing yang perlu
              diintegrasikan? Mari kita desain architecture yang sesuai dengan
              kondisi sistem Anda.
            </p>
          </div>

          <button
            type="button"
            className="integration-btn integration-btn-light"
            onClick={() => navigate("/contact")}
          >
            Contact ABN
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default SystemIntegration;
