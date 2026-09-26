/*
=========================================================
ABN INDUSTRY 4.0

DATA & ANALYTICS
=========================================================
*/

import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  //Cloud,
  Database,
  Gauge,
  LineChart,
  MonitorCog,
  Network,
  PieChart,
  ServerCog,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./DataAnalytics.css";

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
    icon: BarChart3,
    title: "Industrial Dashboard",
    description:
      "Interactive dashboards for production, operations, maintenance, quality, energy and management monitoring.",
    features: [
      "Realtime KPI",
      "Interactive Charts",
      "Drill Down",
      "Management Dashboard",
    ],
  },
  {
    icon: Database,
    title: "Industrial Data Platform",
    description:
      "Centralized platform for collecting, storing, modeling and accessing industrial data from multiple sources.",
    features: [
      "Data Collection",
      "Historical Data",
      "Data Modeling",
      "API Access",
    ],
  },
  {
    icon: Gauge,
    title: "KPI & Performance Analytics",
    description:
      "Transform operational data into measurable KPIs for production performance, OEE, quality and efficiency.",
    features: [
      "OEE Monitoring",
      "KPI Tracking",
      "Trend Analysis",
      "Performance Reports",
    ],
  },
  {
    icon: Activity,
    title: "Realtime Analytics",
    description:
      "Analyze live industrial data streams to identify events, deviations and operational conditions in real time.",
    features: [
      "Realtime Stream",
      "Event Detection",
      "Threshold Monitoring",
      "Operational Alerts",
    ],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Use historical and realtime data to identify patterns, anomalies and early indicators of equipment or process problems.",
    features: [
      "Anomaly Detection",
      "Predictive Indicators",
      "Asset Analytics",
      "Early Warning",
    ],
  },
  {
    icon: Network,
    title: "Data Integration & Reporting",
    description:
      "Connect plant, enterprise and external data sources into a unified analytics and reporting environment.",
    features: [
      "SQL / NoSQL",
      "API Integration",
      "Scheduled Reports",
      "Data Export",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: LineChart,
    title: "Production Analytics",
    description:
      "Monitor production trends, throughput, downtime, quality and operational performance across industrial processes.",
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    description:
      "Analyze electricity, fuel and utility consumption to identify efficiency opportunities and abnormal usage.",
  },
  {
    icon: MonitorCog,
    title: "Asset Performance",
    description:
      "Combine equipment condition, operational history and maintenance data to improve asset visibility.",
  },
  {
    icon: PieChart,
    title: "Management Intelligence",
    description:
      "Provide management with consolidated business and operational insights through clear KPI dashboards.",
  },
];

const technologies = [
  "Python",
  "Node.js",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "InfluxDB / TimescaleDB",
  "MQTT",
  "OPC UA",
  "REST API",
  "WebSocket",
  "Power BI",
  "Docker",
];

const DataAnalytics: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="analytics-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="analytics-hero">
        <div className="analytics-container analytics-hero-grid">
          <div className="analytics-hero-content">
            <div className="analytics-eyebrow">
              <BarChart3 size={16} />
              DATA & ANALYTICS
            </div>

            <h1>
              Turn Industrial Data
              <span> Into Actionable Insight.</span>
            </h1>

            <p className="analytics-hero-copy">
              ABN Industry 4.0 transforms realtime and historical industrial
              data into clear dashboards, measurable KPIs, operational
              intelligence and actionable business insights.
            </p>

            <div className="analytics-hero-buttons">
              <button
                className="analytics-btn analytics-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Data
                <ArrowRight size={18} />
              </button>

              <button
                className="analytics-btn analytics-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="analytics-hero-points">
              <div>
                <CheckCircle2 size={18} />
                Realtime Data
              </div>

              <div>
                <CheckCircle2 size={18} />
                Industrial KPI
              </div>

              <div>
                <CheckCircle2 size={18} />
                Actionable Insight
              </div>
            </div>
          </div>

          {/* =================================================
              ANALYTICS ENGINE VISUAL
          ================================================= */}

          <div className="analytics-hero-visual">
            <div className="analytics-system-card">
              <div className="analytics-system-header">
                <div className="analytics-system-title">
                  <Database size={17} />
                  DATA ANALYTICS ENGINE
                </div>

                <div className="analytics-system-status">
                  <span className="analytics-status-dot" />
                  ONLINE
                </div>
              </div>

              <div className="analytics-system-main">
                <div className="analytics-code-panel">
                  <div className="analytics-code-line">
                    <span>01</span>
                    <strong>DATA_SOURCE</strong>
                    <em>CONNECTED</em>
                  </div>

                  <div className="analytics-code-line">
                    <span>02</span>
                    <strong>DATA_STREAM</strong>
                    <em>REALTIME</em>
                  </div>

                  <div className="analytics-code-line">
                    <span>03</span>
                    <strong>ANALYTICS</strong>
                    <em>ACTIVE</em>
                  </div>

                  <div className="analytics-code-line">
                    <span>04</span>
                    <strong>KPI_ENGINE</strong>
                    <em>RUNNING</em>
                  </div>
                </div>

                <div className="analytics-system-flow">
                  <div className="analytics-flow-node">
                    <ServerCog size={21} />
                    <span>PLC / SCADA</span>
                  </div>

                  <div className="analytics-flow-line" />

                  <div className="analytics-flow-node analytics-flow-active">
                    <BarChart3 size={23} />
                    <span>ANALYTICS</span>
                  </div>

                  <div className="analytics-flow-line" />

                  <div className="analytics-flow-node">
                    <TrendingUp size={21} />
                    <span>INSIGHT</span>
                  </div>
                </div>
              </div>

              <div className="analytics-system-footer">
                <div>
                  <span>DATA</span>
                  <strong>REALTIME</strong>
                </div>

                <div>
                  <span>KPI</span>
                  <strong>ACTIVE</strong>
                </div>

                <div>
                  <span>ANALYSIS</span>
                  <strong>ONLINE</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="analytics-section analytics-intro">
        <div className="analytics-container">
          <div className="analytics-section-heading">
            <span>OUR CAPABILITY</span>

            <h2>
              From Raw Data
              <strong> To Industrial Intelligence.</strong>
            </h2>

            <p>
              We connect industrial data sources and transform them into
              structured information that can be monitored, analyzed and used to
              support operational and management decisions.
            </p>
          </div>

          <div className="analytics-capability-grid">
            <div className="analytics-capability-card">
              <div className="analytics-capability-icon">
                <Database size={25} />
              </div>

              <h3>Collect</h3>

              <p>
                Capture realtime and historical data from PLC, DCS, SCADA,
                sensors, databases and enterprise systems.
              </p>
            </div>

            <div className="analytics-capability-card">
              <div className="analytics-capability-icon">
                <Workflow size={25} />
              </div>

              <h3>Process</h3>

              <p>
                Normalize, structure and enrich industrial data so it can be
                used consistently across applications.
              </p>
            </div>

            <div className="analytics-capability-card">
              <div className="analytics-capability-icon">
                <LineChart size={25} />
              </div>

              <h3>Analyze</h3>

              <p>
                Discover trends, deviations, performance patterns and
                operational indicators from industrial datasets.
              </p>
            </div>

            <div className="analytics-capability-card">
              <div className="analytics-capability-icon">
                <TrendingUp size={25} />
              </div>

              <h3>Predict</h3>

              <p>
                Turn historical and realtime information into early indicators
                and actionable operational insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="analytics-section analytics-services">
        <div className="analytics-container">
          <div className="analytics-section-heading">
            <span>DATA & ANALYTICS SERVICES</span>

            <h2>
              Industrial Data
              <strong> Built For Decisions.</strong>
            </h2>

            <p>
              Build a complete analytics ecosystem from data acquisition through
              visualization, KPI monitoring and advanced analytics.
            </p>
          </div>

          <div className="analytics-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="analytics-service-card" key={service.title}>
                  <div className="analytics-service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="analytics-service-features">
                    {service.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 size={15} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className="analytics-card-link"
                    onClick={() => navigate("/contact")}
                  >
                    Explore Service
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="analytics-section analytics-solutions">
        <div className="analytics-container analytics-solution-layout">
          <div className="analytics-solution-copy">
            <span>SOLUTIONS</span>

            <h2>
              Analytics For
              <strong> Real Industrial Problems.</strong>
            </h2>

            <p>
              Our analytics solutions are designed around real operational
              requirements, connecting plant data with KPIs that matter to
              engineering, operations, maintenance and management teams.
            </p>

            <div className="analytics-solution-highlight">
              <ShieldCheck size={21} />

              <div>
                <strong>Data You Can Trust</strong>
                <p>Secure, structured and traceable industrial information.</p>
              </div>
            </div>
          </div>

          <div className="analytics-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  className="analytics-solution-card"
                  key={solution.title}
                >
                  <div className="analytics-solution-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <ArrowRight size={17} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="analytics-section analytics-technology">
        <div className="analytics-container analytics-tech-layout">
          <div>
            <div className="analytics-section-heading analytics-heading-left">
              <span>ANALYTICS TECHNOLOGY</span>

              <h2>
                Built On
                <strong> Industrial-Ready Technology.</strong>
              </h2>

              <p>
                ABN combines modern software technologies with industrial
                communication protocols to build scalable data platforms that
                can operate alongside existing plant infrastructure.
              </p>
            </div>

            <button
              className="analytics-btn analytics-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Build Your Data Platform
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="analytics-tech-list">
            {technologies.map((technology) => (
              <div className="analytics-tech-item" key={technology}>
                <CheckCircle2 size={17} />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="analytics-cta">
        <div className="analytics-container analytics-cta-inner">
          <div>
            <span>ABN INDUSTRY 4.0</span>

            <h2>
              Make Your Data
              <strong> Work For Your Operation.</strong>
            </h2>

            <p>
              Let's build a data and analytics platform that connects your
              industrial operation with the information you need.
            </p>
          </div>

          <button
            className="analytics-btn analytics-btn-light"
            onClick={() => navigate("/contact")}
          >
            Start a Conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default DataAnalytics;
