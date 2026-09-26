import React from "react";
import {
  Activity,
  ArrowRight,
  Box,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  Globe2,
  HardDrive,
  Layers,
  LockKeyhole,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Terminal,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CloudInfrastructure.css";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

type Solution = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const CloudInfrastructure: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: <Cloud size={24} />,
      title: "Cloud Infrastructure",
      description:
        "Design scalable cloud infrastructure for industrial applications, enterprise systems, IoT platforms, and digital services.",
      features: [
        "Cloud Architecture",
        "Compute Infrastructure",
        "Cloud Storage",
        "Network Design",
      ],
    },
    {
      icon: <Server size={24} />,
      title: "Server & Compute",
      description:
        "Deploy reliable compute environments for backend services, APIs, realtime systems, analytics, and industrial platforms.",
      features: [
        "Linux Server",
        "Application Server",
        "API Server",
        "Realtime Server",
      ],
    },
    {
      icon: <Box size={24} />,
      title: "Container & Deployment",
      description:
        "Containerize applications and standardize deployment environments for faster and more reliable software delivery.",
      features: [
        "Docker",
        "Container Deployment",
        "Environment Isolation",
        "Application Scaling",
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Database",
      description:
        "Build reliable database infrastructure for realtime industrial data, business applications, IoT telemetry, and analytics.",
      features: ["MySQL", "PostgreSQL", "Time Series Data", "Database Backup"],
    },
    {
      icon: <Network size={24} />,
      title: "Cloud Networking",
      description:
        "Connect applications, industrial gateways, users, and enterprise systems through secure and structured cloud networking.",
      features: [
        "Private Network",
        "VPN Connectivity",
        "API Gateway",
        "Secure Routing",
      ],
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cloud Security & Reliability",
      description:
        "Protect cloud workloads and maintain service availability through layered security, monitoring, backup, and recovery.",
      features: [
        "TLS / HTTPS",
        "Access Control",
        "Monitoring",
        "Backup & Recovery",
      ],
    },
  ];

  const solutions: Solution[] = [
    {
      icon: <CloudCog size={24} />,
      title: "Industrial IoT Cloud",
      description:
        "Cloud infrastructure for connecting industrial devices, gateways, telemetry, MQTT, realtime data, and IoT dashboards.",
    },
    {
      icon: <ServerCog size={24} />,
      title: "Application Platform",
      description:
        "Reliable application infrastructure for ABN Industry 4.0 platforms, APIs, dashboards, enterprise applications, and digital services.",
    },
    {
      icon: <Database size={24} />,
      title: "Data & Analytics Platform",
      description:
        "Centralized infrastructure for operational data, databases, analytics, reporting, KPI monitoring, and historical information.",
    },
    {
      icon: <Workflow size={24} />,
      title: "Hybrid Industrial Cloud",
      description:
        "Connect plant systems, edge devices, local servers, and cloud services into one secure hybrid architecture.",
    },
  ];

  const technologies = [
    "Docker",
    "Linux",
    "Node.js",
    "Python",
    "Nginx",
    "REST API",
    "WebSocket",
    "MQTT",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Object Storage",
    "CI/CD",
    "Git",
    "VPN",
    "TLS / HTTPS",
    "Monitoring",
  ];

  const capabilities = [
    {
      icon: <Layers size={22} />,
      title: "Scale",
      description:
        "Build infrastructure that can grow with applications, users, devices, and industrial data.",
    },
    {
      icon: <LockKeyhole size={22} />,
      title: "Secure",
      description:
        "Apply secure connectivity, authentication, encryption, access control, and network segmentation.",
    },
    {
      icon: <Activity size={22} />,
      title: "Monitor",
      description:
        "Monitor server health, applications, APIs, databases, connectivity, and infrastructure performance.",
    },
    {
      icon: <Zap size={22} />,
      title: "Operate",
      description:
        "Support reliable 24/7 digital operations through automation, backup, deployment, and recovery.",
    },
  ];

  return (
    <main className="cloud-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="cloud-hero">
        <div className="cloud-hero-grid" />

        <div className="cloud-container cloud-hero-inner">
          <div className="cloud-hero-content">
            <div className="cloud-eyebrow">
              <Cloud size={15} />
              CLOUD INFRASTRUCTURE
            </div>

            <h1>
              Build Infrastructure
              <span> For Your Digital Operation.</span>
            </h1>

            <p>
              ABN Industry 4.0 designs cloud and hybrid infrastructure for
              industrial IoT, applications, databases, APIs, analytics, and
              enterprise systems.
            </p>

            <div className="cloud-hero-actions">
              <button
                className="cloud-btn cloud-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Infrastructure
                <ArrowRight size={17} />
              </button>

              <button
                className="cloud-btn cloud-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="cloud-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Scalable Infrastructure</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Secure Connectivity</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>24/7 Operations</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="cloud-hero-visual">
            <div className="cloud-core-card">
              <div className="cloud-core-header">
                <div>
                  <span className="cloud-status-dot" />
                  ABN CLOUD CORE
                </div>

                <Cloud size={20} />
              </div>

              <div className="cloud-core-body">
                <div className="cloud-core-title">DIGITAL INFRASTRUCTURE</div>

                <div className="cloud-core-flow">
                  <div className="cloud-flow-node">
                    <Globe2 size={20} />
                    <span>EDGE</span>
                  </div>

                  <div className="cloud-flow-line" />

                  <div className="cloud-flow-node cloud-flow-main">
                    <Cloud size={24} />
                    <span>CLOUD</span>
                  </div>

                  <div className="cloud-flow-line" />

                  <div className="cloud-flow-node">
                    <Database size={20} />
                    <span>DATA</span>
                  </div>
                </div>

                <div className="cloud-code-panel">
                  <div>
                    <span>INFRASTRUCTURE</span>
                    <strong>ONLINE</strong>
                  </div>

                  <div>
                    <span>API</span>
                    <strong>READY</strong>
                  </div>

                  <div>
                    <span>DATABASE</span>
                    <strong>SYNC</strong>
                  </div>

                  <div>
                    <span>SECURITY</span>
                    <strong>ACTIVE</strong>
                  </div>
                </div>
              </div>

              <div className="cloud-core-footer">
                <span>ABN INDUSTRY 4.0</span>
                <span>CLOUD / HYBRID</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITY
      ========================================================= */}
      <section className="cloud-section cloud-capability">
        <div className="cloud-container">
          <div className="cloud-section-heading">
            <span className="cloud-section-label">OUR CAPABILITY</span>

            <h2>
              Infrastructure Built For
              <span> Industrial Digital Systems.</span>
            </h2>

            <p>
              From edge connectivity to cloud applications, ABN builds
              infrastructure designed around reliability, security, scalability,
              and operational visibility.
            </p>
          </div>

          <div className="cloud-capability-grid">
            {capabilities.map((item) => (
              <div className="cloud-capability-card" key={item.title}>
                <div className="cloud-icon-box">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="cloud-section cloud-services">
        <div className="cloud-container">
          <div className="cloud-section-heading">
            <span className="cloud-section-label">
              CLOUD INFRASTRUCTURE SERVICES
            </span>

            <h2>
              From Architecture
              <span> To Operations.</span>
            </h2>

            <p>
              Build a complete infrastructure foundation for applications,
              industrial IoT, data platforms, and enterprise operations.
            </p>
          </div>

          <div className="cloud-services-grid">
            {services.map((service) => (
              <article className="cloud-service-card" key={service.title}>
                <div className="cloud-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="cloud-feature-list">
                  {service.features.map((feature) => (
                    <div key={feature}>
                      <CheckCircle2 size={15} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section className="cloud-section cloud-solutions">
        <div className="cloud-container">
          <div className="cloud-section-heading">
            <span className="cloud-section-label">CLOUD SOLUTIONS</span>

            <h2>
              Infrastructure For
              <span> Real Industrial Applications.</span>
            </h2>

            <p>
              Our infrastructure approach connects operational technology,
              digital applications, data, and users through a secure platform.
            </p>
          </div>

          <div className="cloud-solutions-grid">
            {solutions.map((solution) => (
              <article className="cloud-solution-card" key={solution.title}>
                <div className="cloud-solution-top">
                  <div className="cloud-icon-box">{solution.icon}</div>

                  <ArrowRight size={18} />
                </div>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REFERENCE ARCHITECTURE
      ========================================================= */}
      <section className="cloud-section cloud-architecture">
        <div className="cloud-container">
          <div className="cloud-section-heading">
            <span className="cloud-section-label">
              CLOUD REFERENCE ARCHITECTURE
            </span>

            <h2>
              From The Plant
              <span> To The Cloud.</span>
            </h2>

            <p>
              A hybrid architecture can connect field devices and local systems
              with centralized cloud applications and enterprise services.
            </p>
          </div>

          <div className="cloud-architecture-card">
            <div className="cloud-architecture-flow">
              <div className="cloud-architecture-node">
                <HardDrive size={24} />

                <strong>FIELD / EDGE</strong>

                <span>
                  Sensors
                  <br />
                  PLC
                  <br />
                  IoT Gateway
                </span>
              </div>

              <div className="cloud-architecture-arrow">
                <ArrowRight size={20} />
                <span>MQTT / VPN</span>
              </div>

              <div className="cloud-architecture-node">
                <Wifi size={24} />

                <strong>CONNECTIVITY</strong>

                <span>
                  Internet
                  <br />
                  4G / LTE
                  <br />
                  Private Network
                </span>
              </div>

              <div className="cloud-architecture-arrow">
                <ArrowRight size={20} />
                <span>SECURE LINK</span>
              </div>

              <div className="cloud-architecture-node cloud-architecture-cloud">
                <Cloud size={28} />

                <strong>CLOUD PLATFORM</strong>

                <span>
                  API
                  <br />
                  Services
                  <br />
                  Applications
                </span>
              </div>

              <div className="cloud-architecture-arrow">
                <ArrowRight size={20} />
                <span>DATA</span>
              </div>

              <div className="cloud-architecture-node">
                <Database size={24} />

                <strong>DATA / BUSINESS</strong>

                <span>
                  Database
                  <br />
                  Analytics
                  <br />
                  ERP / BI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="cloud-section cloud-technology">
        <div className="cloud-container">
          <div className="cloud-tech-layout">
            <div className="cloud-tech-content">
              <span className="cloud-section-label">CLOUD TECHNOLOGY</span>

              <h2>
                Modern Tools For
                <span> Reliable Infrastructure.</span>
              </h2>

              <p>
                ABN combines open technologies, cloud services, container
                platforms, databases, APIs, and secure networking to build
                flexible infrastructure without locking the architecture to one
                application.
              </p>

              <div className="cloud-tech-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="cloud-terminal">
              <div className="cloud-terminal-header">
                <div className="cloud-terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>abn-cloud-core</span>

                <Terminal size={17} />
              </div>

              <div className="cloud-terminal-body">
                <div>
                  <span className="cloud-terminal-command">$</span>
                  <span>docker ps</span>
                </div>

                <p>
                  abn-api&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  running
                </p>

                <p>
                  abn-web&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  running
                </p>

                <p>
                  abn-mqtt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  connected
                </p>

                <p>
                  abn-db&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  healthy
                </p>

                <div className="cloud-terminal-divider" />

                <div>
                  <span className="cloud-terminal-command">$</span>
                  <span>systemctl status abn-platform</span>
                </div>

                <p className="cloud-terminal-success">
                  ● ABN PLATFORM — ACTIVE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOUD OPERATIONS
      ========================================================= */}
      <section className="cloud-section cloud-operations">
        <div className="cloud-container">
          <div className="cloud-section-heading">
            <span className="cloud-section-label">CLOUD OPERATIONS</span>

            <h2>
              Visibility Across
              <span> Your Infrastructure.</span>
            </h2>

            <p>
              Infrastructure should not only run. It should be observable,
              measurable, maintainable, and ready for operational growth.
            </p>
          </div>

          <div className="cloud-operations-card">
            <div className="cloud-operation-header">
              <div>
                <span className="cloud-status-dot" />
                ABN CLOUD CONTROL
              </div>

              <span>LIVE INFRASTRUCTURE</span>
            </div>

            <div className="cloud-operation-grid">
              <div className="cloud-operation-item">
                <div>
                  <Server size={19} />
                  <span>SERVER</span>
                </div>

                <strong>ONLINE</strong>

                <small>24 / 24</small>
              </div>

              <div className="cloud-operation-item">
                <div>
                  <Activity size={19} />
                  <span>CPU</span>
                </div>

                <strong>32%</strong>

                <small>NORMAL</small>
              </div>

              <div className="cloud-operation-item">
                <div>
                  <HardDrive size={19} />
                  <span>STORAGE</span>
                </div>

                <strong>48%</strong>

                <small>HEALTHY</small>
              </div>

              <div className="cloud-operation-item">
                <div>
                  <Network size={19} />
                  <span>NETWORK</span>
                </div>

                <strong>1.2 GB/s</strong>

                <small>STABLE</small>
              </div>

              <div className="cloud-operation-item">
                <div>
                  <Database size={19} />
                  <span>DATABASE</span>
                </div>

                <strong>SYNC</strong>

                <small>HEALTHY</small>
              </div>

              <div className="cloud-operation-item">
                <div>
                  <ShieldCheck size={19} />
                  <span>SECURITY</span>
                </div>

                <strong>ACTIVE</strong>

                <small>PROTECTED</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="cloud-cta">
        <div className="cloud-container">
          <div className="cloud-cta-card">
            <div className="cloud-cta-icon">
              <Cloud size={30} />
            </div>

            <div className="cloud-cta-content">
              <span>READY TO BUILD?</span>

              <h2>
                Build The Infrastructure
                <span> Behind Your Digital Plant.</span>
              </h2>

              <p>
                Let's design a secure, scalable, and reliable infrastructure for
                your industrial and digital operations.
              </p>
            </div>

            <button
              className="cloud-btn cloud-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start A Project
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudInfrastructure;
