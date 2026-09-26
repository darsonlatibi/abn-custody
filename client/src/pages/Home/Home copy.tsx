import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Database,
  Factory,
  Gauge,
  Globe2,
  Layers3,
  MonitorCog,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

type Capability = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

const capabilities: Capability[] = [
  {
    icon: MonitorCog,
    title: "Industrial Dashboard",
    description:
      "Dashboard digital untuk monitoring produksi, mesin, energi, fleet, KPI, dan aktivitas operasional.",
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Menghubungkan aplikasi, database, IoT, PLC, SCADA, API, dan sistem enterprise.",
  },
  {
    icon: ServerCog,
    title: "Server & Network",
    description:
      "Infrastruktur server dan network yang stabil, aman, scalable, dan dapat dimonitor.",
  },
  {
    icon: Activity,
    title: "Realtime Monitoring",
    description:
      "Data realtime untuk membantu tim melihat kondisi sistem dan operasional secara cepat.",
  },
];

const solutions: Solution[] = [
  {
    icon: Factory,
    title: "Industry 4.0 Platform",
    description:
      "Platform digital untuk menghubungkan proses industri, manusia, mesin, data, dan sistem perusahaan.",
    features: [
      "Industrial monitoring",
      "Production dashboard",
      "KPI & analytics",
      "System integration",
    ],
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Monitoring armada dan kendaraan untuk meningkatkan visibility terhadap lokasi dan aktivitas operasional.",
    features: [
      "GPS tracking",
      "Fleet monitoring",
      "Trip history",
      "Operational analytics",
    ],
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    description:
      "Monitoring energi dan utilitas untuk membantu perusahaan memahami konsumsi dan performa operasional.",
    features: [
      "Energy monitoring",
      "Realtime data",
      "Historical trends",
      "KPI dashboard",
    ],
  },
  {
    icon: Database,
    title: "Data Platform",
    description:
      "Mengumpulkan data dari berbagai sumber menjadi satu platform yang dapat digunakan untuk analytics.",
    features: [
      "Centralized data",
      "API integration",
      "Data visualization",
      "Reporting",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Application",
    description:
      "Aplikasi dan service cloud untuk menyediakan akses digital yang fleksibel dan scalable.",
    features: [
      "Cloud deployment",
      "Backend services",
      "Database",
      "Monitoring",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Enterprise System",
    description:
      "Sistem enterprise dengan authentication, authorization, audit, dan keamanan API.",
    features: [
      "Role based access",
      "Secure API",
      "Audit trail",
      "System security",
    ],
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "REST API",
  "WebSocket",
  "MQTT",
  "Docker",
  "Cloud",
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">
        <div className="home-hero-grid" />

        <div className="home-container home-hero-content">
          <div className="home-hero-copy">
            <div className="home-eyebrow">
              <Globe2 size={16} />
              <span>ABN INDUSTRY 4.0</span>
            </div>

            <h1>
              Connecting Industry with <span>Digital Intelligence.</span>
            </h1>

            <p>
              ABN membangun ekosistem digital yang menghubungkan manusia, mesin,
              data, aplikasi, network, dan proses operasional menjadi satu
              platform Industry 4.0 yang terintegrasi.
            </p>

            <div className="home-hero-actions">
              <button
                type="button"
                className="home-btn home-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Konsultasi Project
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="home-btn home-btn-secondary"
                onClick={() => navigate("/software-development")}
              >
                Explore Solutions
              </button>
            </div>

            <div className="home-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Industrial Ready</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Data</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Integrated Platform</span>
              </div>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="home-hero-visual">
            <div className="home-platform-card">
              <div className="home-platform-header">
                <div>
                  <span className="home-status-dot" />
                  ABN DIGITAL PLATFORM
                </div>

                <Activity size={18} />
              </div>

              <div className="home-platform-main">
                <div className="home-platform-title">
                  <div className="home-platform-title-icon">
                    <Layers3 size={22} />
                  </div>

                  <div>
                    <strong>INDUSTRY 4.0</strong>
                    <span>CONNECTED ECOSYSTEM</span>
                  </div>
                </div>

                <div className="home-platform-flow">
                  <div className="home-platform-node">
                    <Factory size={20} />

                    <span>INDUSTRY</span>
                  </div>

                  <div className="home-platform-line" />

                  <div className="home-platform-node home-platform-node-active">
                    <Network size={20} />

                    <span>ABN PLATFORM</span>
                  </div>

                  <div className="home-platform-line" />

                  <div className="home-platform-node">
                    <BarChart3 size={20} />

                    <span>DATA</span>
                  </div>
                </div>

                <div className="home-platform-metrics">
                  <div>
                    <span>SYSTEM</span>
                    <strong>ONLINE</strong>
                  </div>

                  <div>
                    <span>DATA</span>
                    <strong>REALTIME</strong>
                  </div>

                  <div>
                    <span>SECURITY</span>
                    <strong>ACTIVE</strong>
                  </div>
                </div>
              </div>

              <div className="home-platform-footer">
                <div>
                  <Gauge size={15} />
                  <span>MONITORING</span>
                  <b>ACTIVE</b>
                </div>

                <div>
                  <Database size={15} />
                  <span>DATABASE</span>
                  <b>CONNECTED</b>
                </div>

                <div>
                  <Cloud size={15} />
                  <span>CLOUD</span>
                  <b>READY</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="home-section home-intro">
        <div className="home-container">
          <div className="home-section-heading">
            <div className="home-eyebrow">
              <Layers3 size={16} />
              <span>DIGITAL INDUSTRY PLATFORM</span>
            </div>

            <h2>
              Dari data dan perangkat <br />
              <span>menjadi intelligence.</span>
            </h2>

            <p>
              ABN membantu perusahaan membangun fondasi digital untuk
              menghubungkan operational technology dan information technology
              sehingga data dapat digunakan untuk monitoring, analytics,
              integrasi, dan pengambilan keputusan.
            </p>
          </div>

          <div className="home-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="home-capability-card"
                  key={capability.title}
                >
                  <div className="home-capability-icon">
                    <Icon />
                  </div>

                  <strong>{capability.title}</strong>

                  <span>{capability.description}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM
      ===================================================== */}

      <section className="home-section home-platform-section">
        <div className="home-container">
          <div className="home-section-heading centered">
            <div className="home-eyebrow">
              <Workflow size={16} />
              <span>ABN DIGITAL ECOSYSTEM</span>
            </div>

            <h2>
              Satu platform untuk <span>berbagai kebutuhan industri.</span>
            </h2>

            <p>
              ABN mengembangkan solusi digital yang dapat digunakan secara
              modular sesuai kebutuhan perusahaan.
            </p>
          </div>

          <div className="home-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article className="home-solution-card" key={solution.title}>
                  <div className="home-solution-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <ul>
                    {solution.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={15} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="home-card-link"
                    onClick={() => navigate("/contact")}
                  >
                    Discuss Project
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIAL ARCHITECTURE
      ===================================================== */}

      <section className="home-section home-architecture">
        <div className="home-container">
          <div className="home-architecture-layout">
            <div className="home-architecture-copy">
              <div className="home-eyebrow">
                <Network size={16} />
                <span>CONNECTED INDUSTRIAL ARCHITECTURE</span>
              </div>

              <h2>
                Menghubungkan <span>OT, IT & Data.</span>
              </h2>

              <p>
                Infrastruktur digital ABN dirancang untuk menjadi penghubung
                antara perangkat lapangan, sistem industri, aplikasi enterprise,
                database, dan dashboard management.
              </p>

              <button
                type="button"
                className="home-btn home-btn-primary"
                onClick={() => navigate("/server-network")}
              >
                Explore Infrastructure
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="home-architecture-visual">
              <div className="home-architecture-layer">
                <div className="home-layer-label">
                  <Factory size={18} />
                  <span>OPERATIONAL TECHNOLOGY</span>
                </div>

                <div className="home-layer-items">
                  <span>PLC</span>
                  <span>SCADA</span>
                  <span>IoT</span>
                  <span>SENSORS</span>
                </div>
              </div>

              <div className="home-architecture-connector">
                <ArrowRight size={18} />
              </div>

              <div className="home-architecture-layer home-layer-active">
                <div className="home-layer-label">
                  <Network size={18} />
                  <span>ABN DIGITAL PLATFORM</span>
                </div>

                <div className="home-layer-items">
                  <span>API</span>
                  <span>MQTT</span>
                  <span>WEBSOCKET</span>
                  <span>DATA</span>
                </div>
              </div>

              <div className="home-architecture-connector">
                <ArrowRight size={18} />
              </div>

              <div className="home-architecture-layer">
                <div className="home-layer-label">
                  <MonitorCog size={18} />
                  <span>ENTERPRISE APPLICATION</span>
                </div>

                <div className="home-layer-items">
                  <span>DASHBOARD</span>
                  <span>ANALYTICS</span>
                  <span>REPORT</span>
                  <span>MOBILE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="home-section home-technology">
        <div className="home-container">
          <div className="home-tech-layout">
            <div>
              <div className="home-eyebrow">
                <ServerCog size={16} />
                <span>TECHNOLOGY STACK</span>
              </div>

              <h2>
                Dibangun dengan <span>teknologi modern.</span>
              </h2>

              <p>
                Teknologi dipilih berdasarkan kebutuhan project, reliability,
                security, scalability, integration, dan long-term
                maintainability.
              </p>
            </div>

            <div className="home-tech-list">
              {technologies.map((technology) => (
                <div className="home-tech-item" key={technology}>
                  <CheckCircle2 size={16} />
                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KPI / VALUE
      ===================================================== */}

      <section className="home-section home-value">
        <div className="home-container">
          <div className="home-value-header">
            <div>
              <div className="home-eyebrow">
                <BarChart3 size={16} />
                <span>DIGITAL VALUE</span>
              </div>

              <h2>
                Data yang terhubung <span>menciptakan visibility.</span>
              </h2>
            </div>

            <p>
              Dengan data yang terintegrasi, perusahaan dapat memiliki
              visibility yang lebih baik terhadap kondisi operasional, performa
              sistem, dan aktivitas bisnis.
            </p>
          </div>

          <div className="home-value-grid">
            <div className="home-value-card">
              <Activity size={22} />

              <strong>Realtime</strong>

              <span>Monitoring kondisi operasional secara realtime.</span>
            </div>

            <div className="home-value-card">
              <BarChart3 size={22} />

              <strong>Analytics</strong>

              <span>
                Data menjadi KPI dan informasi yang lebih mudah dipahami.
              </span>
            </div>

            <div className="home-value-card">
              <Workflow size={22} />

              <strong>Integrated</strong>

              <span>Sistem dan aplikasi terhubung melalui satu ecosystem.</span>
            </div>

            <div className="home-value-card">
              <Rocket size={22} />

              <strong>Scalable</strong>

              <span>
                Infrastruktur dapat berkembang mengikuti kebutuhan bisnis.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">
        <div className="home-container">
          <div className="home-cta-inner">
            <div>
              <div className="home-eyebrow">
                <Smartphone size={16} />
                <span>START YOUR DIGITAL TRANSFORMATION</span>
              </div>

              <h2>
                Mari membangun <span>digital ecosystem Anda.</span>
              </h2>

              <p>
                Diskusikan kebutuhan software, server, network, IoT, fleet
                management, monitoring, system integration, atau platform
                Industry 4.0 bersama tim ABN.
              </p>
            </div>

            <button
              type="button"
              className="home-btn home-btn-light"
              onClick={() => navigate("/contact")}
            >
              Hubungi ABN
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
