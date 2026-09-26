import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  //Cloud,
  Cpu,
  Database,
  Factory,
  //Gauge,
  Layers3,
  MonitorCog,
  Network,
  ServerCog,
  //Settings2,
  ShieldCheck,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./PortFolio.css";

type PortfolioProject = {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
};

const PortFolio: React.FC = () => {
  const navigate = useNavigate();

  const projects: PortfolioProject[] = [
    {
      icon: Factory,
      category: "INDUSTRIAL DIGITALIZATION",
      title: "ABN EMS",
      description:
        "Industrial monitoring ecosystem untuk menghubungkan equipment, data operasional, alarm, KPI, dan management dashboard dalam satu platform.",
      technologies: ["React", "Node.js", "WebSocket", "IoT", "SCADA"],
      status: "ACTIVE DEVELOPMENT",
    },
    {
      icon: Truck,
      category: "FLEET MANAGEMENT",
      title: "ABN Fleet",
      description:
        "Platform monitoring armada untuk tracking kendaraan, lokasi, status operasional, perjalanan, dan data fleet secara realtime.",
      technologies: ["GPS", "React", "Node.js", "Realtime", "Maps"],
      status: "ACTIVE DEVELOPMENT",
    },
    {
      icon: MonitorCog,
      category: "INDUSTRIAL MONITORING",
      title: "SCADA Integration",
      description:
        "Solusi integrasi untuk menghubungkan sistem SCADA dengan database, API, dashboard, dan platform digital ABN.",
      technologies: ["SCADA", "PLC", "OPC", "API", "Dashboard"],
      status: "SYSTEM DESIGN",
    },
    {
      icon: Cpu,
      category: "IOT & EDGE",
      title: "ABN IoT Platform",
      description:
        "Arsitektur IoT untuk menghubungkan sensor dan perangkat lapangan dengan edge gateway, server, database, dan cloud platform.",
      technologies: ["ESP32", "ESP8266", "MQTT", "Edge", "Cloud"],
      status: "ACTIVE DEVELOPMENT",
    },
    {
      icon: BarChart3,
      category: "DATA & ANALYTICS",
      title: "Industrial Dashboard",
      description:
        "Dashboard visual untuk menampilkan KPI, realtime data, trend, alarm, production information, dan operational analytics.",
      technologies: ["React", "Charts", "REST API", "WebSocket", "MySQL"],
      status: "ACTIVE DEVELOPMENT",
    },
    {
      icon: Network,
      category: "SYSTEM INTEGRATION",
      title: "Digital Integration Hub",
      description:
        "Layer integrasi untuk menghubungkan aplikasi, database, industrial systems, external API, dan berbagai sumber data.",
      technologies: ["Node.js", "REST API", "WebSocket", "MQTT", "Database"],
      status: "ARCHITECTURE",
    },
  ];

  const capabilities = [
    {
      icon: Activity,
      title: "Realtime Monitoring",
      description:
        "Monitoring kondisi sistem dan equipment menggunakan data realtime.",
    },
    {
      icon: Database,
      title: "Data Platform",
      description:
        "Pengumpulan, penyimpanan, processing, dan visualisasi data operasional.",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description:
        "Menghubungkan sistem industri dengan aplikasi dan platform digital.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Architecture",
      description:
        "Menerapkan authentication, authorization, dan architecture yang terkontrol.",
    },
  ];

  const technologyStack = [
    "React",
    "TypeScript",
    "Node.js",
    "REST API",
    "WebSocket",
    "MQTT",
    "MySQL",
    "IoT",
    "SCADA",
    "PLC",
    "OPC",
    "Cloud",
  ];

  return (
    <main className="portfolio-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-grid" />

        <div className="portfolio-container portfolio-hero-content">
          <div className="portfolio-hero-copy">
            <div className="portfolio-eyebrow">
              <span className="portfolio-eyebrow-dot" />
              ABN DIGITAL PORTFOLIO
            </div>

            <h1>
              Technology
              <span> Built for Industry.</span>
            </h1>

            <p>
              Kumpulan solusi, platform, dan teknologi yang dikembangkan ABN
              untuk membantu perusahaan membangun ekosistem digital industri
              yang terhubung dan realtime.
            </p>

            <div className="portfolio-hero-actions">
              <button
                className="portfolio-btn portfolio-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </button>

              <button
                className="portfolio-btn portfolio-btn-secondary"
                onClick={() => navigate("/about")}
              >
                About ABN
              </button>
            </div>

            <div className="portfolio-hero-points">
              <div>
                <CheckCircle2 size={17} />
                Industrial Technology
              </div>

              <div>
                <CheckCircle2 size={17} />
                Realtime Platform
              </div>

              <div>
                <CheckCircle2 size={17} />
                System Integration
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="portfolio-hero-visual">
            <div className="portfolio-command-card">
              <div className="portfolio-command-header">
                <div>
                  <span>ABN PROJECT PORTFOLIO</span>
                  <strong>Digital Industrial Platform</strong>
                </div>

                <div className="portfolio-online">
                  <span />
                  ONLINE
                </div>
              </div>

              <div className="portfolio-command-line" />

              <div className="portfolio-architecture">
                <div className="portfolio-architecture-node">
                  <Factory size={19} />
                  <span>FIELD</span>
                </div>

                <div className="portfolio-connector">
                  <span />
                  <ArrowRight size={15} />
                </div>

                <div className="portfolio-architecture-node">
                  <Cpu size={19} />
                  <span>EDGE</span>
                </div>

                <div className="portfolio-connector">
                  <span />
                  <ArrowRight size={15} />
                </div>

                <div className="portfolio-architecture-node">
                  <ServerCog size={19} />
                  <span>SERVER</span>
                </div>
              </div>

              <div className="portfolio-core">
                <div className="portfolio-core-ring">
                  <div className="portfolio-core-center">
                    <Layers3 size={27} />
                    <strong>ABN</strong>
                    <span>PLATFORM</span>
                  </div>
                </div>
              </div>

              <div className="portfolio-mini-stats">
                <div>
                  <span>PROJECTS</span>
                  <strong>06+</strong>
                </div>

                <div>
                  <span>SYSTEM</span>
                  <strong>ONLINE</strong>
                </div>

                <div>
                  <span>DATA</span>
                  <strong>REALTIME</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="portfolio-intro">
        <div className="portfolio-container">
          <div className="portfolio-section-heading">
            <span className="portfolio-section-eyebrow">WHAT WE BUILD</span>

            <h2>
              From field data
              <span> to digital intelligence.</span>
            </h2>

            <p>
              Portfolio ABN mencakup berbagai layer teknologi, mulai dari
              perangkat lapangan, IoT, edge computing, backend services,
              database, hingga user interface dan analytics.
            </p>
          </div>

          <div className="portfolio-capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div className="portfolio-capability-card" key={item.title}>
                  <div className="portfolio-capability-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="portfolio-capability-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section className="portfolio-projects">
        <div className="portfolio-container">
          <div className="portfolio-projects-heading">
            <div>
              <span className="portfolio-section-eyebrow">
                SELECTED PROJECTS
              </span>

              <h2>
                Solutions designed for
                <span> real operations.</span>
              </h2>
            </div>

            <p>
              Beberapa area solusi yang menjadi bagian dari ecosystem ABN
              Industry 4.0.
            </p>
          </div>

          <div className="portfolio-project-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="portfolio-project-card" key={project.title}>
                  <div className="portfolio-project-top">
                    <div className="portfolio-project-icon">
                      <Icon size={24} />
                    </div>

                    <span className="portfolio-project-status">
                      {project.status}
                    </span>
                  </div>

                  <span className="portfolio-project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="portfolio-project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="portfolio-project-footer">
                    <span>ABN INDUSTRY 4.0</span>

                    <div>
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}
      <section className="portfolio-architecture-section">
        <div className="portfolio-architecture-background" />

        <div className="portfolio-container portfolio-architecture-content">
          <div className="portfolio-architecture-copy">
            <span className="portfolio-section-eyebrow">
              SYSTEM ARCHITECTURE
            </span>

            <h2>
              One architecture.
              <span> Multiple possibilities.</span>
            </h2>

            <p>
              ABN membangun platform dengan pendekatan modular sehingga setiap
              layer dapat dikembangkan sesuai kebutuhan project dan
              infrastruktur existing.
            </p>

            <div className="portfolio-architecture-checks">
              <div>
                <CheckCircle2 size={17} />
                Modular Architecture
              </div>

              <div>
                <CheckCircle2 size={17} />
                API First
              </div>

              <div>
                <CheckCircle2 size={17} />
                Realtime Communication
              </div>

              <div>
                <CheckCircle2 size={17} />
                Scalable Infrastructure
              </div>
            </div>
          </div>

          <div className="portfolio-stack">
            <div className="portfolio-stack-layer portfolio-layer-field">
              <div>
                <Factory size={20} />
                <strong>FIELD & EQUIPMENT</strong>
              </div>

              <span>PLC · Sensor · Machine · GPS · IoT</span>
            </div>

            <div className="portfolio-stack-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="portfolio-stack-layer portfolio-layer-edge">
              <div>
                <Cpu size={20} />
                <strong>EDGE & CONNECTIVITY</strong>
              </div>

              <span>Gateway · MQTT · OPC · Protocol</span>
            </div>

            <div className="portfolio-stack-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="portfolio-stack-layer portfolio-layer-platform">
              <div>
                <ServerCog size={20} />
                <strong>ABN PLATFORM</strong>
              </div>

              <span>API · Database · WebSocket · Services</span>
            </div>

            <div className="portfolio-stack-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="portfolio-stack-layer portfolio-layer-intelligence">
              <div>
                <BarChart3 size={20} />
                <strong>INTELLIGENCE</strong>
              </div>

              <span>Dashboard · KPI · Analytics · Decision</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}
      <section className="portfolio-technology">
        <div className="portfolio-container">
          <div className="portfolio-section-heading portfolio-heading-center">
            <span className="portfolio-section-eyebrow">TECHNOLOGY STACK</span>

            <h2>
              Built with modern
              <span> technology.</span>
            </h2>

            <p>
              Teknologi dipilih berdasarkan kebutuhan sistem, reliability,
              scalability, maintainability, dan kebutuhan integrasi.
            </p>
          </div>

          <div className="portfolio-tech-grid">
            {technologyStack.map((technology, index) => (
              <div className="portfolio-tech-card" key={technology}>
                <span className="portfolio-tech-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="portfolio-tech-dot" />

                <strong>{technology}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="portfolio-cta">
        <div className="portfolio-container">
          <div className="portfolio-cta-card">
            <div className="portfolio-cta-glow" />

            <div className="portfolio-cta-icon">
              <Zap size={29} />
            </div>

            <div className="portfolio-cta-content">
              <span>HAVE AN INDUSTRIAL PROJECT?</span>

              <h2>
                Let's build your
                <strong> digital ecosystem.</strong>
              </h2>

              <p>
                Diskusikan kebutuhan digitalisasi, monitoring, IoT, fleet,
                system integration, atau platform software bersama ABN.
              </p>
            </div>

            <button
              className="portfolio-btn portfolio-btn-light"
              onClick={() => navigate("/contact")}
            >
              Start a Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="portfolio-footer">
        <div className="portfolio-container portfolio-footer-content">
          <div>
            <strong>ABN INDUSTRY 4.0</strong>
            <span>Industrial Digital Technology</span>
          </div>

          <div className="portfolio-footer-designed">Designed by ABN</div>
        </div>
      </footer>
    </main>
  );
};

export default PortFolio;
