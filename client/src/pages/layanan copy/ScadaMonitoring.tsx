import React from "react";
import {
  Activity,
  AlarmClock,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Gauge,
  GitBranch,
  Layers,
  Monitor,
  Radio,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ScadaMonitoring.css";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
};

type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Monitor,
    title: "SCADA System Development",
    description:
      "Design and development of SCADA applications for realtime industrial process visualization and supervision.",
    items: [
      "Process Visualization",
      "Equipment Monitoring",
      "Realtime Status",
      "Operator Interface",
    ],
  },
  {
    icon: Radio,
    title: "Realtime Plant Monitoring",
    description:
      "Centralized monitoring of plant equipment, process parameters, production lines, and critical operating conditions.",
    items: [
      "Realtime Data",
      "Equipment Status",
      "Process Values",
      "Plant Overview",
    ],
  },
  {
    icon: AlarmClock,
    title: "Alarm & Event Management",
    description:
      "Structured alarm and event management to help operators identify abnormal process conditions quickly.",
    items: [
      "Alarm Monitoring",
      "Event Logging",
      "Priority Management",
      "Alarm History",
    ],
  },
  {
    icon: TrendingUp,
    title: "Trend & Historical Data",
    description:
      "Historical process data visualization for operational analysis, troubleshooting, and performance monitoring.",
    items: [
      "Realtime Trend",
      "Historical Trend",
      "Data Comparison",
      "Time Range Analysis",
    ],
  },
  {
    icon: Database,
    title: "Historian & Data Logging",
    description:
      "Industrial data logging architecture for storing process values and making historical information available.",
    items: [
      "Process Historian",
      "Time Series Data",
      "Data Retention",
      "Historical Query",
    ],
  },
  {
    icon: ShieldCheck,
    title: "SCADA Reliability & Security",
    description:
      "SCADA architecture designed around availability, controlled access, system reliability, and operational security.",
    items: [
      "User Access",
      "Role Management",
      "System Redundancy",
      "Secure Architecture",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: Gauge,
    title: "Plant Performance Monitoring",
    description:
      "Monitor critical plant parameters and equipment performance from a centralized SCADA environment.",
  },
  {
    icon: Activity,
    title: "Production Monitoring",
    description:
      "Track production processes, machine conditions, operating parameters, and production status in realtime.",
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    description:
      "Visualize electrical and energy-related parameters to support operational efficiency and energy management.",
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence",
    description:
      "Transform SCADA data into dashboards, trends, KPIs, and actionable operational information.",
  },
];

const technologies = [
  "SCADA",
  "HMI",
  "OPC UA",
  "OPC DA",
  "Modbus TCP",
  "Modbus RTU",
  "MQTT",
  "WebSocket",
  "Node.js",
  "Python",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "InfluxDB",
];

const ScadaMonitoring: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="scada-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="scada-hero">
        <div className="scada-hero-grid" />

        <div className="scada-container scada-hero-layout">
          <div className="scada-hero-content">
            <div className="scada-eyebrow">
              <span className="scada-eyebrow-dot" />
              SCADA & INDUSTRIAL MONITORING
            </div>

            <h1>
              Monitor Your
              <span> Industrial Operation.</span>
            </h1>

            <p className="scada-hero-description">
              ABN Industry 4.0 develops SCADA and industrial monitoring
              solutions that connect plant equipment, control systems, realtime
              data, alarms, trends, and operational dashboards into one
              monitoring environment.
            </p>

            <div className="scada-hero-actions">
              <button
                className="scada-btn scada-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </button>

              <button
                className="scada-btn scada-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
            </div>

            <div className="scada-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Monitoring</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Alarm & Event</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Historical Data</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="scada-hero-visual">
            <div className="scada-monitor-card">
              <div className="scada-monitor-header">
                <div>
                  <span className="scada-live-dot" />
                  SCADA MONITORING
                </div>

                <span className="scada-monitor-time">LIVE</span>
              </div>

              <div className="scada-monitor-body">
                <div className="scada-process-header">
                  <div>
                    <small>PLANT CONTROL CENTER</small>
                    <strong>PROCESS OVERVIEW</strong>
                  </div>

                  <div className="scada-status-badge">
                    <Activity size={14} />
                    SYSTEM NORMAL
                  </div>
                </div>

                <div className="scada-process-flow">
                  <div className="scada-process-node">
                    <div className="scada-node-icon">
                      <SlidersHorizontal size={20} />
                    </div>

                    <span>FIELD</span>
                    <small>SENSORS</small>
                  </div>

                  <div className="scada-flow-line">
                    <span />
                  </div>

                  <div className="scada-process-node active">
                    <div className="scada-node-icon">
                      <ServerCog size={20} />
                    </div>

                    <span>PLC / DCS</span>
                    <small>CONTROL</small>
                  </div>

                  <div className="scada-flow-line">
                    <span />
                  </div>

                  <div className="scada-process-node">
                    <div className="scada-node-icon">
                      <Monitor size={20} />
                    </div>

                    <span>SCADA</span>
                    <small>MONITOR</small>
                  </div>
                </div>

                <div className="scada-kpi-grid">
                  <div className="scada-kpi">
                    <small>PROCESS TEMP</small>
                    <strong>78.4°C</strong>
                    <span className="scada-kpi-normal">
                      <TrendingUp size={12} />
                      NORMAL
                    </span>
                  </div>

                  <div className="scada-kpi">
                    <small>FLOW RATE</small>
                    <strong>124.8</strong>
                    <span className="scada-kpi-unit">m³/h</span>
                  </div>

                  <div className="scada-kpi">
                    <small>PRESSURE</small>
                    <strong>6.82</strong>
                    <span className="scada-kpi-unit">bar</span>
                  </div>

                  <div className="scada-kpi">
                    <small>MOTOR LOAD</small>
                    <strong>72%</strong>
                    <span className="scada-kpi-normal">
                      <Activity size={12} />
                      RUNNING
                    </span>
                  </div>
                </div>

                <div className="scada-chart">
                  <div className="scada-chart-header">
                    <span>PROCESS TREND</span>

                    <div>
                      <span>1H</span>
                      <span className="active">REALTIME</span>
                    </div>
                  </div>

                  <div className="scada-chart-area">
                    <div className="scada-chart-line">
                      <span className="point point-1" />
                      <span className="point point-2" />
                      <span className="point point-3" />
                      <span className="point point-4" />
                      <span className="point point-5" />
                      <span className="point point-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="scada-monitor-footer">
                <span>
                  <Database size={13} />
                  HISTORIAN CONNECTED
                </span>

                <span>
                  <Radio size={13} />
                  OPC UA ONLINE
                </span>

                <span>
                  <ShieldCheck size={13} />
                  SECURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY
      ====================================================== */}
      <section className="scada-capability">
        <div className="scada-container">
          <div className="scada-section-heading">
            <span>OUR CAPABILITY</span>

            <h2>
              See Your Plant.
              <br />
              <strong>Understand Your Operation.</strong>
            </h2>

            <p>
              SCADA connects realtime plant information with operators,
              engineers, maintenance teams, and management through a centralized
              monitoring environment.
            </p>
          </div>

          <div className="scada-capability-grid">
            <div className="scada-capability-card">
              <div className="scada-capability-number">01</div>
              <Monitor size={28} />
              <h3>Visualize</h3>
              <p>
                Transform raw industrial signals into intuitive process
                graphics, equipment status, and plant overview screens.
              </p>
            </div>

            <div className="scada-capability-card">
              <div className="scada-capability-number">02</div>
              <Activity size={28} />
              <h3>Monitor</h3>
              <p>
                Monitor critical process variables and equipment conditions in
                realtime from a centralized interface.
              </p>
            </div>

            <div className="scada-capability-card">
              <div className="scada-capability-number">03</div>
              <AlarmClock size={28} />
              <h3>Respond</h3>
              <p>
                Detect alarms and abnormal conditions so operators can respond
                quickly to changing plant conditions.
              </p>
            </div>

            <div className="scada-capability-card">
              <div className="scada-capability-number">04</div>
              <BarChart3 size={28} />
              <h3>Analyze</h3>
              <p>
                Use trends and historical information to understand process
                behavior and operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="scada-services">
        <div className="scada-container">
          <div className="scada-section-heading">
            <span>SCADA SERVICES</span>

            <h2>
              Industrial Monitoring
              <br />
              <strong>Built Around Your Plant.</strong>
            </h2>

            <p>
              From SCADA visualization to historian and alarm management, we
              build monitoring solutions around the architecture and operating
              requirements of your industrial environment.
            </p>
          </div>

          <div className="scada-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="scada-service-card" key={service.title}>
                  <div className="scada-service-top">
                    <div className="scada-service-icon">
                      <Icon size={23} />
                    </div>

                    <span>0{index + 1}</span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="scada-service-items">
                    {service.items.map((item) => (
                      <div key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ====================================================== */}
      <section className="scada-solutions">
        <div className="scada-container">
          <div className="scada-section-heading centered">
            <span>SCADA SOLUTIONS</span>

            <h2>
              One Monitoring Layer.
              <br />
              <strong>Multiple Industrial Applications.</strong>
            </h2>
          </div>

          <div className="scada-solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div className="scada-solution-card" key={solution.title}>
                  <div className="scada-solution-icon">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>

                  <ArrowRight size={19} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}
      <section className="scada-architecture">
        <div className="scada-container">
          <div className="scada-architecture-layout">
            <div className="scada-architecture-content">
              <span className="scada-section-label">
                REFERENCE ARCHITECTURE
              </span>

              <h2>
                From Field Signals
                <br />
                <strong>To Plant Intelligence.</strong>
              </h2>

              <p>
                ABN SCADA architecture can connect field instrumentation,
                PLC/DCS controllers, SCADA applications, historians, and
                higher-level industrial platforms.
              </p>

              <div className="scada-architecture-list">
                <div>
                  <span>01</span>
                  <div>
                    <strong>FIELD</strong>
                    <small>
                      Sensors, transmitters, motors, drives, instruments
                    </small>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <strong>CONTROL</strong>
                    <small>PLC, DCS, RTU and industrial controllers</small>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <strong>SCADA</strong>
                    <small>HMI, visualization, alarms and trends</small>
                  </div>
                </div>

                <div>
                  <span>04</span>
                  <div>
                    <strong>DATA</strong>
                    <small>Historian, analytics, MES, ERP and cloud</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="scada-architecture-visual">
              <div className="scada-architecture-card">
                <div className="scada-architecture-header">
                  <span>
                    <GitBranch size={15} />
                    INDUSTRIAL DATA FLOW
                  </span>

                  <span className="online">
                    <span />
                    ONLINE
                  </span>
                </div>

                <div className="scada-architecture-flow">
                  <div className="scada-architecture-node">
                    <SlidersHorizontal size={21} />
                    <strong>FIELD</strong>
                    <small>I/O</small>
                  </div>

                  <div className="scada-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="scada-architecture-node">
                    <ServerCog size={21} />
                    <strong>PLC / DCS</strong>
                    <small>CONTROL</small>
                  </div>

                  <div className="scada-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="scada-architecture-node highlight">
                    <Monitor size={21} />
                    <strong>SCADA</strong>
                    <small>MONITORING</small>
                  </div>

                  <div className="scada-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="scada-architecture-node">
                    <Database size={21} />
                    <strong>HISTORIAN</strong>
                    <small>DATA</small>
                  </div>
                </div>

                <div className="scada-architecture-bottom">
                  <div>
                    <Layers size={15} />
                    <span>OT NETWORK</span>
                  </div>

                  <div>
                    <Workflow size={15} />
                    <span>INTEGRATION</span>
                  </div>

                  <div>
                    <BarChart3 size={15} />
                    <span>ANALYTICS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      <section className="scada-technology">
        <div className="scada-container">
          <div className="scada-technology-layout">
            <div>
              <span className="scada-section-label">SCADA TECHNOLOGY</span>

              <h2>
                Open Industrial
                <br />
                <strong>Connectivity.</strong>
              </h2>

              <p>
                Our SCADA solutions are designed to communicate with existing
                industrial systems and modern software platforms through
                standard industrial protocols and APIs.
              </p>
            </div>

            <div className="scada-tech-grid">
              {technologies.map((technology) => (
                <div className="scada-tech-item" key={technology}>
                  <CheckCircle2 size={15} />
                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="scada-cta">
        <div className="scada-cta-grid" />

        <div className="scada-container scada-cta-content">
          <div>
            <span>READY TO CONNECT YOUR PLANT?</span>

            <h2>
              Make Your Industrial
              <br />
              Operation <strong>Visible.</strong>
            </h2>

            <p>
              Let's design a SCADA and monitoring architecture that fits your
              plant, equipment, protocols, and operational requirements.
            </p>
          </div>

          <button
            className="scada-btn scada-btn-primary"
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

export default ScadaMonitoring;
