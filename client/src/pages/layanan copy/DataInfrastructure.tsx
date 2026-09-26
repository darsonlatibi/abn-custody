import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Database,
  DatabaseBackup,
  GitBranch,
  HardDrive,
  // Layers,
  LockKeyhole,
  Network,
  RefreshCw,
  // ServerCog,
  ShieldCheck,
  // Table2,
  Terminal,
  Workflow,
  // Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./DataInfrastructure.css";

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

const DataInfrastructure: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: <Database size={24} />,
      title: "Database Infrastructure",
      description:
        "Design reliable database environments for industrial applications, enterprise systems, IoT platforms, and operational data.",
      features: [
        "MySQL",
        "PostgreSQL",
        "Database Architecture",
        "High Availability",
      ],
    },
    {
      icon: <Activity size={24} />,
      title: "Realtime Data Infrastructure",
      description:
        "Build realtime data pipelines for telemetry, industrial monitoring, fleet tracking, IoT devices, and operational applications.",
      features: ["Realtime Streaming", "WebSocket", "MQTT", "Event Processing"],
    },
    {
      icon: <GitBranch size={24} />,
      title: "Data Pipeline & Integration",
      description:
        "Connect operational systems, databases, APIs, IoT platforms, and enterprise applications through structured data pipelines.",
      features: [
        "ETL / ELT",
        "API Integration",
        "Data Transformation",
        "Data Synchronization",
      ],
    },
    {
      icon: <HardDrive size={24} />,
      title: "Data Storage",
      description:
        "Build scalable storage infrastructure for historical records, telemetry, documents, analytics datasets, and operational data.",
      features: [
        "Object Storage",
        "Time Series Data",
        "Historical Data",
        "Data Archiving",
      ],
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Data Warehouse & Analytics",
      description:
        "Prepare structured data environments for KPI reporting, business intelligence, operational analytics, and management dashboards.",
      features: [
        "Data Warehouse",
        "KPI Data",
        "BI Integration",
        "Analytical Queries",
      ],
    },
    {
      icon: <DatabaseBackup size={24} />,
      title: "Backup & Data Recovery",
      description:
        "Protect critical operational data with backup strategies, replication, retention policies, and recovery procedures.",
      features: [
        "Automated Backup",
        "Replication",
        "Retention Policy",
        "Disaster Recovery",
      ],
    },
  ];

  const solutions: Solution[] = [
    {
      icon: <Workflow size={24} />,
      title: "Industrial Data Platform",
      description:
        "Centralize data from PLC, SCADA, IoT devices, gateways, databases, and industrial applications into one structured platform.",
    },
    {
      icon: <Activity size={24} />,
      title: "Realtime Telemetry Platform",
      description:
        "Process realtime sensor, GPS, machine, vehicle, and equipment telemetry for monitoring and operational control.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics Data Platform",
      description:
        "Prepare trusted operational datasets for dashboards, KPI monitoring, reporting, analytics, and management intelligence.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Data Platform",
      description:
        "Connect cloud databases, data pipelines, APIs, applications, and industrial edge systems into a scalable data architecture.",
    },
  ];

  const capabilities = [
    {
      icon: <Database size={22} />,
      title: "Store",
      description:
        "Organize operational, transactional, telemetry, and historical data in structured storage systems.",
    },
    {
      icon: <Network size={22} />,
      title: "Connect",
      description:
        "Connect databases, APIs, IoT devices, applications, and industrial systems through secure data interfaces.",
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Synchronize",
      description:
        "Keep realtime and historical information synchronized across operational and enterprise platforms.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Analyze",
      description:
        "Transform trusted data into KPI, reports, dashboards, trends, and actionable operational information.",
    },
  ];

  const technologies = [
    "MySQL",
    "PostgreSQL",
    "Redis",
    "InfluxDB",
    "TimescaleDB",
    "MQTT",
    "WebSocket",
    "REST API",
    "Node.js",
    "Python",
    "Docker",
    "ETL / ELT",
    "Data Warehouse",
    "Object Storage",
    "SQL",
    "Linux",
    "Git",
    "Backup",
  ];

  return (
    <main className="data-page">
      {/* =========================================================
          HERO
          ========================================================= */}
      <section className="data-hero">
        <div className="data-hero-grid" />

        <div className="data-container data-hero-inner">
          <div className="data-hero-content">
            <div className="data-eyebrow">
              <Database size={15} />
              DATA INFRASTRUCTURE
            </div>

            <h1>
              Build The Data
              <span> Foundation Of Your Operation.</span>
            </h1>

            <p>
              ABN Industry 4.0 designs data infrastructure for industrial
              systems, IoT platforms, enterprise applications, realtime
              telemetry, analytics, and digital operations.
            </p>

            <div className="data-hero-actions">
              <button
                className="data-btn data-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Data Platform
                <ArrowRight size={17} />
              </button>

              <button
                className="data-btn data-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="data-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Structured Data</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Processing</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Reliable Storage</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="data-hero-visual">
            <div className="data-core-card">
              <div className="data-core-header">
                <div>
                  <span className="data-status-dot" />
                  ABN DATA CORE
                </div>

                <Database size={20} />
              </div>

              <div className="data-core-body">
                <div className="data-core-title">INDUSTRIAL DATA PIPELINE</div>

                <div className="data-core-flow">
                  <div className="data-flow-node">
                    <HardDrive size={20} />
                    <span>FIELD</span>
                  </div>

                  <div className="data-flow-line" />

                  <div className="data-flow-node">
                    <Network size={20} />
                    <span>EDGE</span>
                  </div>

                  <div className="data-flow-line" />

                  <div className="data-flow-node data-flow-main">
                    <Database size={24} />
                    <span>DATA</span>
                  </div>

                  <div className="data-flow-line" />

                  <div className="data-flow-node">
                    <BarChart3 size={20} />
                    <span>BI</span>
                  </div>
                </div>

                <div className="data-code-panel">
                  <div>
                    <span>DATA STREAM</span>
                    <strong>ONLINE</strong>
                  </div>

                  <div>
                    <span>DATABASE</span>
                    <strong>HEALTHY</strong>
                  </div>

                  <div>
                    <span>PIPELINE</span>
                    <strong>RUNNING</strong>
                  </div>

                  <div>
                    <span>BACKUP</span>
                    <strong>ACTIVE</strong>
                  </div>
                </div>
              </div>

              <div className="data-core-footer">
                <span>ABN INDUSTRY 4.0</span>
                <span>DATA / ANALYTICS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITY
          ========================================================= */}
      <section className="data-section data-capability">
        <div className="data-container">
          <div className="data-section-heading">
            <span className="data-section-label">OUR CAPABILITY</span>

            <h2>
              Build A Reliable
              <span> Data Foundation.</span>
            </h2>

            <p>
              Industrial digitalization requires more than collecting data. ABN
              designs the infrastructure required to store, connect,
              synchronize, and analyze operational information.
            </p>
          </div>

          <div className="data-capability-grid">
            {capabilities.map((item) => (
              <div className="data-capability-card" key={item.title}>
                <div className="data-icon-box">{item.icon}</div>

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
      <section className="data-section data-services">
        <div className="data-container">
          <div className="data-section-heading">
            <span className="data-section-label">
              DATA INFRASTRUCTURE SERVICES
            </span>

            <h2>
              From Data Collection
              <span> To Trusted Information.</span>
            </h2>

            <p>
              Build the underlying data infrastructure required to operate
              realtime industrial applications and analytical platforms.
            </p>
          </div>

          <div className="data-services-grid">
            {services.map((service) => (
              <article className="data-service-card" key={service.title}>
                <div className="data-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="data-feature-list">
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
      <section className="data-section data-solutions">
        <div className="data-container">
          <div className="data-section-heading">
            <span className="data-section-label">DATA PLATFORM SOLUTIONS</span>

            <h2>
              Turn Operational Data
              <span> Into A Digital Asset.</span>
            </h2>

            <p>
              Connect plant data, business data, IoT telemetry, and applications
              into a common data foundation.
            </p>
          </div>

          <div className="data-solutions-grid">
            {solutions.map((solution) => (
              <article className="data-solution-card" key={solution.title}>
                <div className="data-solution-top">
                  <div className="data-icon-box">{solution.icon}</div>

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
          DATA ARCHITECTURE
          ========================================================= */}
      <section className="data-section data-architecture">
        <div className="data-container">
          <div className="data-section-heading">
            <span className="data-section-label">
              DATA REFERENCE ARCHITECTURE
            </span>

            <h2>
              From Raw Signals
              <span> To Business Intelligence.</span>
            </h2>

            <p>
              ABN data architecture separates collection, processing, storage,
              and analytics so each layer can scale independently.
            </p>
          </div>

          <div className="data-architecture-card">
            <div className="data-architecture-flow">
              <div className="data-architecture-node">
                <HardDrive size={24} />

                <strong>DATA SOURCES</strong>

                <span>
                  PLC
                  <br />
                  SCADA
                  <br />
                  Sensors
                  <br />
                  GPS
                </span>
              </div>

              <div className="data-architecture-arrow">
                <ArrowRight size={20} />
                <span>COLLECT</span>
              </div>

              <div className="data-architecture-node">
                <Network size={24} />

                <strong>DATA INGESTION</strong>

                <span>
                  MQTT
                  <br />
                  API
                  <br />
                  WebSocket
                  <br />
                  Gateway
                </span>
              </div>

              <div className="data-architecture-arrow">
                <ArrowRight size={20} />
                <span>PROCESS</span>
              </div>

              <div className="data-architecture-node data-architecture-main">
                <Database size={28} />

                <strong>DATA PLATFORM</strong>

                <span>
                  Database
                  <br />
                  Historian
                  <br />
                  Data Lake
                  <br />
                  Warehouse
                </span>
              </div>

              <div className="data-architecture-arrow">
                <ArrowRight size={20} />
                <span>ANALYZE</span>
              </div>

              <div className="data-architecture-node">
                <BarChart3 size={24} />

                <strong>INTELLIGENCE</strong>

                <span>
                  KPI
                  <br />
                  Dashboard
                  <br />
                  Analytics
                  <br />
                  BI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DATA FLOW
          ========================================================= */}
      <section className="data-section data-flow-section">
        <div className="data-container">
          <div className="data-flow-layout">
            <div className="data-flow-content">
              <span className="data-section-label">DATA ENGINEERING</span>

              <h2>
                One Pipeline.
                <span> Multiple Data Destinations.</span>
              </h2>

              <p>
                Operational data can be processed once and delivered to
                databases, dashboards, analytics systems, APIs, cloud platforms,
                and enterprise applications.
              </p>

              <div className="data-flow-points">
                <div>
                  <CheckCircle2 size={16} />
                  <span>Realtime processing</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>Historical storage</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>API data access</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>Analytics ready</span>
                </div>
              </div>
            </div>

            <div className="data-pipeline-card">
              <div className="data-pipeline-header">
                <div>
                  <span className="data-status-dot" />
                  ABN DATA PIPELINE
                </div>

                <Workflow size={18} />
              </div>

              <div className="data-pipeline-body">
                <div className="data-pipeline-stage">
                  <HardDrive size={18} />
                  <span>INGEST</span>
                  <strong>ACTIVE</strong>
                </div>

                <div className="data-pipeline-connector">
                  <ArrowRight size={16} />
                </div>

                <div className="data-pipeline-stage">
                  <GitBranch size={18} />
                  <span>PROCESS</span>
                  <strong>RUNNING</strong>
                </div>

                <div className="data-pipeline-connector">
                  <ArrowRight size={16} />
                </div>

                <div className="data-pipeline-stage">
                  <Database size={18} />
                  <span>STORE</span>
                  <strong>HEALTHY</strong>
                </div>

                <div className="data-pipeline-connector">
                  <ArrowRight size={16} />
                </div>

                <div className="data-pipeline-stage">
                  <BarChart3 size={18} />
                  <span>ANALYZE</span>
                  <strong>READY</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
          ========================================================= */}
      <section className="data-section data-technology">
        <div className="data-container">
          <div className="data-tech-layout">
            <div className="data-tech-content">
              <span className="data-section-label">DATA TECHNOLOGY</span>

              <h2>
                Technology For
                <span> Industrial Data.</span>
              </h2>

              <p>
                ABN combines relational databases, time-series storage, realtime
                messaging, APIs, containers, and data engineering tools to build
                flexible data platforms.
              </p>

              <div className="data-tech-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="data-terminal">
              <div className="data-terminal-header">
                <div className="data-terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>abn-data-core</span>

                <Terminal size={17} />
              </div>

              <div className="data-terminal-body">
                <div>
                  <span className="data-terminal-command">$</span>
                  <span>data pipeline status</span>
                </div>

                <p>ingestion&nbsp;&nbsp;&nbsp;&nbsp; ACTIVE</p>

                <p>processing&nbsp;&nbsp;&nbsp; RUNNING</p>

                <p>database&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HEALTHY</p>

                <p>replication&nbsp;&nbsp;&nbsp; SYNC</p>

                <div className="data-terminal-divider" />

                <div>
                  <span className="data-terminal-command">$</span>
                  <span>query industrial_kpi</span>
                </div>

                <p className="data-terminal-success">● DATA PLATFORM — READY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DATA GOVERNANCE
          ========================================================= */}
      <section className="data-section data-governance">
        <div className="data-container">
          <div className="data-section-heading">
            <span className="data-section-label">DATA RELIABILITY</span>

            <h2>
              Data You Can
              <span> Trust And Operate.</span>
            </h2>

            <p>
              Reliable data infrastructure requires security, consistency,
              backup, monitoring, and controlled access throughout the data
              lifecycle.
            </p>
          </div>

          <div className="data-governance-grid">
            <div className="data-governance-card">
              <LockKeyhole size={22} />

              <h3>Data Security</h3>

              <p>
                Authentication, access control, encryption, secure APIs, and
                network protection.
              </p>
            </div>

            <div className="data-governance-card">
              <RefreshCw size={22} />

              <h3>Data Consistency</h3>

              <p>
                Synchronization and validation mechanisms help maintain
                consistent information across systems.
              </p>
            </div>

            <div className="data-governance-card">
              <DatabaseBackup size={22} />

              <h3>Data Recovery</h3>

              <p>
                Backup, replication, retention, and recovery strategies help
                protect critical operational information.
              </p>
            </div>

            <div className="data-governance-card">
              <ShieldCheck size={22} />

              <h3>Data Governance</h3>

              <p>
                Structured ownership, access, lifecycle, and monitoring of
                operational and business data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
          ========================================================= */}
      <section className="data-cta">
        <div className="data-container">
          <div className="data-cta-card">
            <div className="data-cta-icon">
              <Database size={30} />
            </div>

            <div className="data-cta-content">
              <span>READY TO BUILD?</span>

              <h2>
                Build The Data Foundation
                <span> Behind Your Digital Plant.</span>
              </h2>

              <p>
                Let's design a reliable data infrastructure for your industrial,
                IoT, analytics, and enterprise operations.
              </p>
            </div>

            <button
              className="data-btn data-btn-primary"
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

export default DataInfrastructure;
