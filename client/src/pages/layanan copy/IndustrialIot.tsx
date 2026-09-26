/*
=========================================================
ABN INDUSTRY 4.0

INDUSTRIAL IoT
=========================================================
*/

import React from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Gauge,
  //Globe,
  MonitorCog,
  Network,
  Radio,
  //ServerCog,
  //Settings,
  ShieldCheck,
  //Smartphone,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./IndustrialIot.css";

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
    icon: Radio,
    title: "Industrial Sensor Integration",
    description:
      "Connect industrial sensors, instruments and field devices to a centralized IoT architecture for realtime monitoring.",
    features: ["Temperature", "Pressure", "Flow", "Vibration"],
  },
  {
    icon: Network,
    title: "IoT Gateway",
    description:
      "Deploy industrial gateways that collect, normalize and securely transfer field data between OT devices and IT systems.",
    features: [
      "Protocol Conversion",
      "Edge Processing",
      "Device Buffering",
      "Secure Connectivity",
    ],
  },
  {
    icon: Workflow,
    title: "Industrial Protocol Integration",
    description:
      "Integrate legacy and modern industrial equipment using standard industrial communication protocols.",
    features: ["Modbus TCP / RTU", "OPC UA", "MQTT", "REST API"],
  },
  {
    icon: Activity,
    title: "Realtime Monitoring",
    description:
      "Monitor equipment, process conditions and industrial assets through realtime IoT data and operational dashboards.",
    features: [
      "Realtime Data",
      "Device Status",
      "Alarm Monitoring",
      "Trend Visualization",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Industrial IoT Security",
    description:
      "Protect industrial devices and data flows with secure communication, access control and network segmentation.",
    features: [
      "Authentication",
      "Encrypted Data",
      "Access Control",
      "Network Segmentation",
    ],
  },
  {
    icon: Cloud,
    title: "IoT Cloud Platform",
    description:
      "Connect industrial assets to scalable cloud and enterprise platforms for centralized data access and analytics.",
    features: [
      "Cloud Connectivity",
      "Data Storage",
      "API Integration",
      "Remote Monitoring",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: Gauge,
    title: "Condition Monitoring",
    description:
      "Monitor equipment parameters and operating conditions to identify abnormal behavior before it becomes a major operational problem.",
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    description:
      "Collect electricity and utility measurements from industrial assets and visualize consumption across operations.",
  },
  {
    icon: MonitorCog,
    title: "Remote Asset Monitoring",
    description:
      "Connect distributed equipment and field assets to a centralized monitoring platform accessible by authorized teams.",
  },
  {
    icon: Database,
    title: "Industrial Data Acquisition",
    description:
      "Build reliable data acquisition pipelines from sensors, PLCs, meters, machines and existing control systems.",
  },
];

const technologies = [
  "ESP8266 / ESP32",
  "Industrial Sensors",
  "Modbus TCP / RTU",
  "OPC UA",
  "MQTT",
  "Node.js",
  "Python",
  "REST API",
  "WebSocket",
  "MySQL",
  "PostgreSQL",
  "Docker",
];

const IndustrialIot: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="iiot-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="iiot-hero">
        <div className="iiot-container iiot-hero-grid">
          <div className="iiot-hero-content">
            <div className="iiot-eyebrow">
              <Wifi size={16} />
              INDUSTRIAL IoT
            </div>

            <h1>
              Connect Your
              <span> Industrial World.</span>
            </h1>

            <p className="iiot-hero-copy">
              ABN Industry 4.0 connects sensors, machines, PLCs and industrial
              assets into a secure IoT ecosystem for realtime monitoring, data
              acquisition and intelligent operations.
            </p>

            <div className="iiot-hero-buttons">
              <button
                className="iiot-btn iiot-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Build Your IoT System
                <ArrowRight size={18} />
              </button>

              <button
                className="iiot-btn iiot-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Solutions
              </button>
            </div>

            <div className="iiot-hero-points">
              <div>
                <CheckCircle2 size={18} />
                Realtime Connectivity
              </div>

              <div>
                <CheckCircle2 size={18} />
                Edge & Cloud
              </div>

              <div>
                <CheckCircle2 size={18} />
                Industrial Security
              </div>
            </div>
          </div>

          {/* =================================================
              IoT ARCHITECTURE VISUAL
          ================================================= */}

          <div className="iiot-hero-visual">
            <div className="iiot-system-card">
              <div className="iiot-system-header">
                <div className="iiot-system-title">
                  <Cpu size={17} />
                  INDUSTRIAL IoT PLATFORM
                </div>

                <div className="iiot-system-status">
                  <span className="iiot-status-dot" />
                  CONNECTED
                </div>
              </div>

              <div className="iiot-system-main">
                <div className="iiot-code-panel">
                  <div className="iiot-code-line">
                    <span>01</span>
                    <strong>SENSORS</strong>
                    <em>ONLINE</em>
                  </div>

                  <div className="iiot-code-line">
                    <span>02</span>
                    <strong>EDGE_GATEWAY</strong>
                    <em>ACTIVE</em>
                  </div>

                  <div className="iiot-code-line">
                    <span>03</span>
                    <strong>MQTT_BROKER</strong>
                    <em>CONNECTED</em>
                  </div>

                  <div className="iiot-code-line">
                    <span>04</span>
                    <strong>DATA_PLATFORM</strong>
                    <em>RUNNING</em>
                  </div>
                </div>

                <div className="iiot-system-flow">
                  <div className="iiot-flow-node">
                    <Radio size={21} />
                    <span>SENSORS</span>
                  </div>

                  <div className="iiot-flow-line" />

                  <div className="iiot-flow-node iiot-flow-active">
                    <Network size={23} />
                    <span>GATEWAY</span>
                  </div>

                  <div className="iiot-flow-line" />

                  <div className="iiot-flow-node">
                    <Cloud size={21} />
                    <span>PLATFORM</span>
                  </div>
                </div>
              </div>

              <div className="iiot-system-footer">
                <div>
                  <span>DEVICES</span>
                  <strong>ONLINE</strong>
                </div>

                <div>
                  <span>MQTT</span>
                  <strong>CONNECTED</strong>
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

      <section className="iiot-section iiot-intro">
        <div className="iiot-container">
          <div className="iiot-section-heading">
            <span>OUR CAPABILITY</span>

            <h2>
              From Field Devices
              <strong> To Connected Industry.</strong>
            </h2>

            <p>
              We build Industrial IoT architectures that connect physical
              equipment with software platforms, enabling realtime data
              acquisition, monitoring and intelligent operations.
            </p>
          </div>

          <div className="iiot-capability-grid">
            <div className="iiot-capability-card">
              <div className="iiot-capability-icon">
                <Radio size={25} />
              </div>

              <h3>Sense</h3>

              <p>
                Capture physical parameters from sensors, instruments, meters
                and industrial equipment.
              </p>
            </div>

            <div className="iiot-capability-card">
              <div className="iiot-capability-icon">
                <Network size={25} />
              </div>

              <h3>Connect</h3>

              <p>
                Connect field devices through industrial networks, gateways and
                standard communication protocols.
              </p>
            </div>

            <div className="iiot-capability-card">
              <div className="iiot-capability-icon">
                <Cpu size={25} />
              </div>

              <h3>Process</h3>

              <p>
                Process and normalize data at the edge before delivering it to
                industrial or enterprise platforms.
              </p>
            </div>

            <div className="iiot-capability-card">
              <div className="iiot-capability-icon">
                <Cloud size={25} />
              </div>

              <h3>Operate</h3>

              <p>
                Deliver connected data to dashboards, analytics systems, cloud
                platforms and enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="iiot-section iiot-services">
        <div className="iiot-container">
          <div className="iiot-section-heading">
            <span>INDUSTRIAL IoT SERVICES</span>

            <h2>
              Connect Every
              <strong> Industrial Asset.</strong>
            </h2>

            <p>
              From a single sensor to a complete plant-wide IoT platform, ABN
              can build the connectivity layer between physical assets and
              digital systems.
            </p>
          </div>

          <div className="iiot-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="iiot-service-card" key={service.title}>
                  <div className="iiot-service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="iiot-service-features">
                    {service.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 size={15} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className="iiot-card-link"
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

      <section className="iiot-section iiot-solutions">
        <div className="iiot-container iiot-solution-layout">
          <div className="iiot-solution-copy">
            <span>INDUSTRIAL IoT SOLUTIONS</span>

            <h2>
              Real Connectivity
              <strong> For Real Operations.</strong>
            </h2>

            <p>
              Industrial IoT should solve operational problems. Our architecture
              focuses on reliable field connectivity, realtime visibility and
              useful industrial data.
            </p>

            <div className="iiot-solution-highlight">
              <ShieldCheck size={21} />

              <div>
                <strong>Secure By Design</strong>

                <p>
                  Industrial devices and data flows are designed with controlled
                  access and secure communication.
                </p>
              </div>
            </div>
          </div>

          <div className="iiot-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article className="iiot-solution-card" key={solution.title}>
                  <div className="iiot-solution-icon">
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

      <section className="iiot-section iiot-technology">
        <div className="iiot-container iiot-tech-layout">
          <div>
            <div className="iiot-section-heading iiot-heading-left">
              <span>IoT TECHNOLOGY</span>

              <h2>
                Open Standards.
                <strong> Industrial Connectivity.</strong>
              </h2>

              <p>
                ABN combines embedded devices, industrial protocols, messaging
                systems and modern software technologies to create scalable
                Industrial IoT platforms.
              </p>
            </div>

            <button
              className="iiot-btn iiot-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Design Your IoT Architecture
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="iiot-tech-list">
            {technologies.map((technology) => (
              <div className="iiot-tech-item" key={technology}>
                <CheckCircle2 size={17} />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}

      <section className="iiot-architecture">
        <div className="iiot-container">
          <div className="iiot-section-heading">
            <span>REFERENCE ARCHITECTURE</span>

            <h2>
              One Connected
              <strong> Industrial Ecosystem.</strong>
            </h2>
          </div>

          <div className="iiot-architecture-flow">
            <div className="iiot-architecture-node">
              <Radio size={27} />

              <strong>FIELD</strong>

              <span>
                Sensors
                <br />
                Meters
                <br />
                Machines
              </span>
            </div>

            <div className="iiot-architecture-connector">
              <ArrowRight size={20} />
              <span>DATA</span>
            </div>

            <div className="iiot-architecture-node">
              <Network size={27} />

              <strong>EDGE</strong>

              <span>
                Gateway
                <br />
                Protocol
                <br />
                Processing
              </span>
            </div>

            <div className="iiot-architecture-connector">
              <ArrowRight size={20} />
              <span>MQTT</span>
            </div>

            <div className="iiot-architecture-node iiot-architecture-active">
              <Database size={27} />

              <strong>PLATFORM</strong>

              <span>
                Database
                <br />
                Analytics
                <br />
                API
              </span>
            </div>

            <div className="iiot-architecture-connector">
              <ArrowRight size={20} />
              <span>INSIGHT</span>
            </div>

            <div className="iiot-architecture-node">
              <MonitorCog size={27} />

              <strong>USER</strong>

              <span>
                Dashboard
                <br />
                Mobile
                <br />
                Enterprise
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="iiot-cta">
        <div className="iiot-container iiot-cta-inner">
          <div>
            <span>ABN INDUSTRY 4.0</span>

            <h2>
              Connect Your Assets.
              <strong> Unlock Your Data.</strong>
            </h2>

            <p>
              Let's build an Industrial IoT ecosystem that connects your
              equipment, people and digital platforms.
            </p>
          </div>

          <button
            className="iiot-btn iiot-btn-light"
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

export default IndustrialIot;
