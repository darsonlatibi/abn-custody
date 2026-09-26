/*
=========================================================
ABN INDUSTRY 4.0

INDUSTRIAL AUTOMATION
=========================================================
*/

import React from "react";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Layers,
  MonitorCog,
  //Network,
  Radio,
  ServerCog,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  //Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./IndustrialAutomation.css";

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
    icon: Cpu,
    title: "PLC & Control System",
    description:
      "Design and integrate PLC-based control systems for machines, production lines and industrial processes.",
    features: [
      "PLC Programming",
      "I/O Configuration",
      "Control Logic",
      "Interlock System",
    ],
  },
  {
    icon: MonitorCog,
    title: "HMI & SCADA",
    description:
      "Build operator interfaces and SCADA systems for realtime process visualization, control and alarm management.",
    features: [
      "HMI Design",
      "SCADA Development",
      "Alarm Management",
      "Process Visualization",
    ],
  },
  {
    icon: GitBranch,
    title: "Control System Integration",
    description:
      "Integrate PLC, DCS, SCADA and existing control systems into a unified industrial automation architecture.",
    features: [
      "PLC Integration",
      "DCS Integration",
      "SCADA Integration",
      "Legacy System",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Process Automation",
    description:
      "Automate repetitive and critical industrial processes with reliable control sequences and operating logic.",
    features: [
      "Sequence Control",
      "PID Control",
      "Interlock",
      "Auto / Manual Mode",
    ],
  },
  {
    icon: Activity,
    title: "Industrial Monitoring",
    description:
      "Monitor process variables, equipment conditions and production parameters through realtime automation platforms.",
    features: [
      "Realtime Monitoring",
      "Trend Data",
      "Alarm Events",
      "Performance KPI",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Automation Reliability",
    description:
      "Improve system availability, control reliability and operational safety through structured automation architecture.",
    features: [
      "System Redundancy",
      "Fail-Safe Logic",
      "Access Control",
      "Backup Strategy",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: Settings,
    title: "Production Automation",
    description:
      "Automate production sequences, machine operations and process control to improve consistency and operational visibility.",
  },
  {
    icon: Gauge,
    title: "Process Control",
    description:
      "Monitor and control critical process variables such as temperature, pressure, flow, level and speed.",
  },
  {
    icon: Radio,
    title: "Plant Monitoring",
    description:
      "Connect plant automation systems into centralized SCADA and monitoring environments for operational teams.",
  },
  {
    icon: Workflow,
    title: "Digital Control Architecture",
    description:
      "Build an integrated automation architecture connecting field devices, controllers, SCADA, data platforms and enterprise systems.",
  },
];

const technologies = [
  "PLC",
  "DCS",
  "HMI",
  "SCADA",
  "OPC UA",
  "OPC DA",
  "Modbus TCP / RTU",
  "EtherNet/IP",
  "PROFINET",
  "MQTT",
  "Node.js",
  "Python",
];

const IndustrialAutomation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="automation-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="automation-hero">
        <div className="automation-container automation-hero-grid">
          <div className="automation-hero-content">
            <div className="automation-eyebrow">
              <Bot size={16} />
              INDUSTRIAL AUTOMATION
            </div>

            <h1>
              Automate Your
              <span> Industrial Operation.</span>
            </h1>

            <p className="automation-hero-copy">
              ABN Industry 4.0 designs and integrates industrial automation
              systems that connect field devices, PLCs, DCS, HMI and SCADA into
              reliable and intelligent control environments.
            </p>

            <div className="automation-hero-buttons">
              <button
                className="automation-btn automation-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Build Your Automation
                <ArrowRight size={18} />
              </button>

              <button
                className="automation-btn automation-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="automation-hero-points">
              <div>
                <CheckCircle2 size={18} />
                Reliable Control
              </div>

              <div>
                <CheckCircle2 size={18} />
                Realtime Monitoring
              </div>

              <div>
                <CheckCircle2 size={18} />
                Integrated Systems
              </div>
            </div>
          </div>

          {/* =================================================
              AUTOMATION ENGINE
          ================================================= */}

          <div className="automation-hero-visual">
            <div className="automation-system-card">
              <div className="automation-system-header">
                <div className="automation-system-title">
                  <ServerCog size={17} />
                  INDUSTRIAL CONTROL SYSTEM
                </div>

                <div className="automation-system-status">
                  <span className="automation-status-dot" />
                  RUNNING
                </div>
              </div>

              <div className="automation-system-main">
                <div className="automation-code-panel">
                  <div className="automation-code-line">
                    <span>01</span>
                    <strong>FIELD_IO</strong>
                    <em>ACTIVE</em>
                  </div>

                  <div className="automation-code-line">
                    <span>02</span>
                    <strong>PLC_CONTROL</strong>
                    <em>RUN</em>
                  </div>

                  <div className="automation-code-line">
                    <span>03</span>
                    <strong>SCADA</strong>
                    <em>ONLINE</em>
                  </div>

                  <div className="automation-code-line">
                    <span>04</span>
                    <strong>PROCESS</strong>
                    <em>NORMAL</em>
                  </div>
                </div>

                <div className="automation-system-flow">
                  <div className="automation-flow-node">
                    <Radio size={21} />

                    <span>FIELD</span>
                  </div>

                  <div className="automation-flow-line" />

                  <div className="automation-flow-node automation-flow-active">
                    <Cpu size={23} />

                    <span>PLC / DCS</span>
                  </div>

                  <div className="automation-flow-line" />

                  <div className="automation-flow-node">
                    <MonitorCog size={21} />

                    <span>SCADA</span>
                  </div>
                </div>
              </div>

              <div className="automation-system-footer">
                <div>
                  <span>CONTROL</span>
                  <strong>AUTO</strong>
                </div>

                <div>
                  <span>PLC</span>
                  <strong>RUN</strong>
                </div>

                <div>
                  <span>PROCESS</span>
                  <strong>NORMAL</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="automation-section automation-intro">
        <div className="automation-container">
          <div className="automation-section-heading">
            <span>OUR CAPABILITY</span>

            <h2>
              From Field Control
              <strong> To Plant Automation.</strong>
            </h2>

            <p>
              We develop automation systems that connect field instruments,
              controllers, operator interfaces and plant information systems
              into a structured industrial control environment.
            </p>
          </div>

          <div className="automation-capability-grid">
            <div className="automation-capability-card">
              <div className="automation-capability-icon">
                <Radio size={25} />
              </div>

              <h3>Control</h3>

              <p>
                Control machines and industrial processes through PLC, DCS and
                structured control logic.
              </p>
            </div>

            <div className="automation-capability-card">
              <div className="automation-capability-icon">
                <MonitorCog size={25} />
              </div>

              <h3>Visualize</h3>

              <p>
                Provide operators with realtime HMI and SCADA interfaces for
                process visibility and control.
              </p>
            </div>

            <div className="automation-capability-card">
              <div className="automation-capability-icon">
                <Activity size={25} />
              </div>

              <h3>Monitor</h3>

              <p>
                Monitor process variables, alarms, equipment status and
                operational performance in realtime.
              </p>
            </div>

            <div className="automation-capability-card">
              <div className="automation-capability-icon">
                <Layers size={25} />
              </div>

              <h3>Integrate</h3>

              <p>
                Connect automation systems with historians, analytics, MES, ERP
                and modern Industry 4.0 platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="automation-section automation-services">
        <div className="automation-container">
          <div className="automation-section-heading">
            <span>INDUSTRIAL AUTOMATION SERVICES</span>

            <h2>
              Control Systems
              <strong> Built For Industry.</strong>
            </h2>

            <p>
              From machine-level control to plant-wide automation, ABN delivers
              scalable solutions designed around industrial processes and
              operational requirements.
            </p>
          </div>

          <div className="automation-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="automation-service-card"
                  key={service.title}
                >
                  <div className="automation-service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="automation-service-features">
                    {service.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 size={15} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className="automation-card-link"
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

      <section className="automation-section automation-solutions">
        <div className="automation-container automation-solution-layout">
          <div className="automation-solution-copy">
            <span>AUTOMATION SOLUTIONS</span>

            <h2>
              Control The Process.
              <strong> Improve The Operation.</strong>
            </h2>

            <p>
              Our automation solutions are designed around real industrial
              processes, combining control reliability with realtime visibility
              and structured data integration.
            </p>

            <div className="automation-solution-highlight">
              <ShieldCheck size={21} />

              <div>
                <strong>Designed For Reliability</strong>

                <p>
                  Structured control logic, interlocks, alarms and operational
                  safeguards.
                </p>
              </div>
            </div>
          </div>

          <div className="automation-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  className="automation-solution-card"
                  key={solution.title}
                >
                  <div className="automation-solution-icon">
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
          AUTOMATION ARCHITECTURE
      ===================================================== */}

      <section className="automation-architecture">
        <div className="automation-container">
          <div className="automation-section-heading">
            <span>REFERENCE ARCHITECTURE</span>

            <h2>
              One Automation
              <strong> Architecture.</strong>
            </h2>

            <p>
              Connect field instrumentation, controllers, supervisory systems
              and enterprise applications through a structured automation
              architecture.
            </p>
          </div>

          <div className="automation-architecture-flow">
            <div className="automation-architecture-node">
              <Radio size={27} />

              <strong>FIELD</strong>

              <span>
                Sensors
                <br />
                Valves
                <br />
                Motors
              </span>
            </div>

            <div className="automation-architecture-connector">
              <ArrowRight size={20} />

              <span>I/O</span>
            </div>

            <div className="automation-architecture-node">
              <Cpu size={27} />

              <strong>CONTROL</strong>

              <span>
                PLC
                <br />
                DCS
                <br />
                RTU
              </span>
            </div>

            <div className="automation-architecture-connector">
              <ArrowRight size={20} />

              <span>OT</span>
            </div>

            <div className="automation-architecture-node automation-architecture-active">
              <MonitorCog size={27} />

              <strong>SCADA</strong>

              <span>
                HMI
                <br />
                Alarms
                <br />
                Trends
              </span>
            </div>

            <div className="automation-architecture-connector">
              <ArrowRight size={20} />

              <span>DATA</span>
            </div>

            <div className="automation-architecture-node">
              <Database size={27} />

              <strong>IT</strong>

              <span>
                Historian
                <br />
                Analytics
                <br />
                MES / ERP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="automation-section automation-technology">
        <div className="automation-container automation-tech-layout">
          <div>
            <div className="automation-section-heading automation-heading-left">
              <span>AUTOMATION TECHNOLOGY</span>

              <h2>
                Industrial Standards.
                <strong> Modern Architecture.</strong>
              </h2>

              <p>
                ABN combines established automation technologies with modern
                software and communication standards to integrate existing
                industrial infrastructure with Industry 4.0.
              </p>
            </div>

            <button
              className="automation-btn automation-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Design Your Automation
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="automation-tech-list">
            {technologies.map((technology) => (
              <div className="automation-tech-item" key={technology}>
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

      <section className="automation-cta">
        <div className="automation-container automation-cta-inner">
          <div>
            <span>ABN INDUSTRY 4.0</span>

            <h2>
              Automate Your Process.
              <strong> Connect Your Plant.</strong>
            </h2>

            <p>
              Let's build an industrial automation platform that gives your
              operation reliable control, realtime visibility and connected
              industrial data.
            </p>
          </div>

          <button
            className="automation-btn automation-btn-light"
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

export default IndustrialAutomation;
