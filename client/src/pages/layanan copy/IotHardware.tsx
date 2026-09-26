import React from "react";
import {
  Activity,
  ArrowRight,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  HardDrive,
  Radio,
  Router,
  ServerCog,
  Settings,
  ShieldCheck,
  Signal,
  SlidersHorizontal,
  Thermometer,
  Wifi,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./IotHardware.css";

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
    icon: Cpu,
    title: "Industrial IoT Device",
    description:
      "Design and deployment of connected industrial devices for collecting field data and monitoring equipment.",
    items: [
      "ESP32 / ESP8266",
      "Industrial Controllers",
      "Custom Electronics",
      "Field Data Acquisition",
    ],
  },
  {
    icon: Thermometer,
    title: "Industrial Sensor",
    description:
      "Connect temperature, pressure, flow, level, vibration, energy, and other industrial measurement points.",
    items: ["Temperature", "Pressure", "Flow", "Level"],
  },
  {
    icon: Router,
    title: "IoT Gateway",
    description:
      "Bridge field devices and industrial protocols to MQTT, APIs, databases, and cloud platforms.",
    items: [
      "Protocol Gateway",
      "MQTT Gateway",
      "Modbus Gateway",
      "Edge Connectivity",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Industrial Transmitter",
    description:
      "Develop industrial signal interface solutions for connecting field instrumentation to modern digital systems.",
    items: ["4–20 mA", "RTD / PT100", "Thermocouple", "Signal Conversion"],
  },
  {
    icon: Radio,
    title: "Industrial Telemetry",
    description:
      "Transmit equipment and field data from remote locations to centralized monitoring platforms.",
    items: [
      "Wireless Telemetry",
      "Cellular IoT",
      "Remote Monitoring",
      "Realtime Data",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Edge Security & Reliability",
    description:
      "Build connected hardware with controlled communication, device monitoring, and operational reliability.",
    items: [
      "Device Authentication",
      "Secure Communication",
      "Watchdog System",
      "Remote Diagnostics",
    ],
  },
];

const solutions: Solution[] = [
  {
    icon: Gauge,
    title: "Condition Monitoring",
    description:
      "Monitor equipment parameters and operating conditions continuously from connected industrial devices.",
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    description:
      "Collect electrical and energy data from field equipment for centralized monitoring and analytics.",
  },
  {
    icon: Activity,
    title: "Asset Telemetry",
    description:
      "Connect remote assets, mobile equipment, and field installations to a centralized IoT platform.",
  },
  {
    icon: Database,
    title: "Industrial Data Acquisition",
    description:
      "Capture field signals and transform them into structured data for SCADA, analytics, and enterprise systems.",
  },
];

const technologies = [
  "ESP32",
  "ESP8266",
  "Industrial MCU",
  "Modbus RTU",
  "Modbus TCP",
  "RS485",
  "4–20 mA",
  "PT100 / RTD",
  "Thermocouple",
  "MQTT",
  "Wi-Fi",
  "Ethernet",
  "4G / LTE",
  "LoRa / LoRaWAN",
  "Node.js",
  "Python",
];

const IotHardware: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="iothw-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="iothw-hero">
        <div className="iothw-hero-grid" />

        <div className="iothw-container iothw-hero-layout">
          <div className="iothw-hero-content">
            <div className="iothw-eyebrow">
              <span className="iothw-eyebrow-dot" />
              INDUSTRIAL IoT HARDWARE
            </div>

            <h1>
              Connect Your
              <span> Physical World.</span>
            </h1>

            <p className="iothw-hero-description">
              ABN Industry 4.0 designs industrial IoT hardware, sensors,
              gateways, transmitters, and edge devices that connect physical
              equipment to realtime digital platforms.
            </p>

            <div className="iothw-hero-actions">
              <button
                className="iothw-btn iothw-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Discuss Your Hardware
                <ArrowRight size={18} />
              </button>

              <button
                className="iothw-btn iothw-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
            </div>

            <div className="iothw-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>Industrial Grade</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Connectivity</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Edge Intelligence</span>
              </div>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================== */}
          <div className="iothw-hero-visual">
            <div className="iothw-device-card">
              <div className="iothw-device-header">
                <div>
                  <span className="iothw-live-dot" />
                  ABN INDUSTRIAL EDGE
                </div>

                <span className="iothw-device-status">ONLINE</span>
              </div>

              <div className="iothw-device-body">
                <div className="iothw-device-top">
                  <div>
                    <small>INDUSTRIAL IoT DEVICE</small>
                    <strong>ABN EDGE NODE</strong>
                  </div>

                  <div className="iothw-device-chip">
                    <Cpu size={15} />
                    EDGE
                  </div>
                </div>

                <div className="iothw-device-board">
                  <div className="iothw-board-glow" />

                  <div className="iothw-board-label">
                    <span>ABN</span>
                    <small>INDUSTRIAL IoT</small>
                  </div>

                  <div className="iothw-chip-main">
                    <Cpu size={25} />
                    <span>MCU</span>
                  </div>

                  <div className="iothw-board-pins">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="iothw-board-module">
                    <Radio size={20} />
                    <small>WIRELESS</small>
                  </div>

                  <div className="iothw-board-terminal">
                    <span>FIELD</span>
                    <span>I/O</span>
                  </div>
                </div>

                <div className="iothw-signal-flow">
                  <div className="iothw-signal-node">
                    <Thermometer size={18} />
                    <span>SENSOR</span>
                  </div>

                  <div className="iothw-signal-line">
                    <span />
                  </div>

                  <div className="iothw-signal-node active">
                    <Cpu size={18} />
                    <span>EDGE</span>
                  </div>

                  <div className="iothw-signal-line">
                    <span />
                  </div>

                  <div className="iothw-signal-node">
                    <Wifi size={18} />
                    <span>MQTT</span>
                  </div>
                </div>

                <div className="iothw-data-grid">
                  <div>
                    <small>TEMPERATURE</small>
                    <strong>78.4°C</strong>
                    <span>NORMAL</span>
                  </div>

                  <div>
                    <small>PRESSURE</small>
                    <strong>6.82</strong>
                    <span>bar</span>
                  </div>

                  <div>
                    <small>VIBRATION</small>
                    <strong>2.8</strong>
                    <span>mm/s</span>
                  </div>

                  <div>
                    <small>DEVICE</small>
                    <strong>99.9%</strong>
                    <span>UPTIME</span>
                  </div>
                </div>
              </div>

              <div className="iothw-device-footer">
                <span>
                  <Signal size={13} />
                  MQTT CONNECTED
                </span>

                <span>
                  <Database size={13} />
                  DATA READY
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
      <section className="iothw-capability">
        <div className="iothw-container">
          <div className="iothw-section-heading">
            <span>OUR CAPABILITY</span>

            <h2>
              From Physical Signals
              <br />
              <strong>To Digital Data.</strong>
            </h2>

            <p>
              We build the hardware layer required to collect, process,
              transmit, and connect industrial field data to your digital
              infrastructure.
            </p>
          </div>

          <div className="iothw-capability-grid">
            <div className="iothw-capability-card">
              <div className="iothw-capability-number">01</div>
              <Thermometer size={28} />
              <h3>Sense</h3>
              <p>
                Capture temperature, pressure, flow, vibration, energy, and
                other physical parameters from industrial assets.
              </p>
            </div>

            <div className="iothw-capability-card">
              <div className="iothw-capability-number">02</div>
              <Cpu size={28} />
              <h3>Process</h3>
              <p>
                Process field signals locally using embedded controllers and
                industrial edge devices.
              </p>
            </div>

            <div className="iothw-capability-card">
              <div className="iothw-capability-number">03</div>
              <Radio size={28} />
              <h3>Connect</h3>
              <p>
                Transfer industrial data using Ethernet, Wi-Fi, cellular, LoRa,
                MQTT, and industrial protocols.
              </p>
            </div>

            <div className="iothw-capability-card">
              <div className="iothw-capability-number">04</div>
              <Database size={28} />
              <h3>Integrate</h3>
              <p>
                Deliver structured data to SCADA, databases, analytics,
                dashboards, cloud platforms, and enterprise systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="iothw-services">
        <div className="iothw-container">
          <div className="iothw-section-heading">
            <span>IoT HARDWARE SERVICES</span>

            <h2>
              Hardware Built For
              <br />
              <strong>Industrial Environments.</strong>
            </h2>

            <p>
              From field sensors and transmitters to connected edge gateways,
              ABN develops hardware solutions around your process, connectivity,
              and data requirements.
            </p>
          </div>

          <div className="iothw-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="iothw-service-card" key={service.title}>
                  <div className="iothw-service-top">
                    <div className="iothw-service-icon">
                      <Icon size={23} />
                    </div>

                    <span>0{index + 1}</span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="iothw-service-items">
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
      <section className="iothw-solutions">
        <div className="iothw-container">
          <div className="iothw-section-heading centered">
            <span>INDUSTRIAL IoT SOLUTIONS</span>

            <h2>
              Connect Assets.
              <br />
              <strong>Capture Their Data.</strong>
            </h2>
          </div>

          <div className="iothw-solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div className="iothw-solution-card" key={solution.title}>
                  <div className="iothw-solution-icon">
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
      <section className="iothw-architecture">
        <div className="iothw-container">
          <div className="iothw-architecture-layout">
            <div className="iothw-architecture-content">
              <span className="iothw-section-label">
                IoT REFERENCE ARCHITECTURE
              </span>

              <h2>
                From Sensor
                <br />
                <strong>To Industrial Cloud.</strong>
              </h2>

              <p>
                IoT hardware becomes the bridge between physical assets and your
                industrial digital ecosystem.
              </p>

              <div className="iothw-architecture-list">
                <div>
                  <span>01</span>
                  <div>
                    <strong>FIELD</strong>
                    <small>
                      Sensors, transmitters, machines and instruments
                    </small>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <strong>EDGE</strong>
                    <small>IoT controller, gateway and local processing</small>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <strong>CONNECTIVITY</strong>
                    <small>MQTT, Ethernet, Wi-Fi, cellular and LoRa</small>
                  </div>
                </div>

                <div>
                  <span>04</span>
                  <div>
                    <strong>PLATFORM</strong>
                    <small>
                      SCADA, database, analytics, dashboard and cloud
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="iothw-architecture-visual">
              <div className="iothw-architecture-card">
                <div className="iothw-architecture-header">
                  <span>
                    <GitBranch size={15} />
                    INDUSTRIAL IoT DATA FLOW
                  </span>

                  <span className="online">
                    <span />
                    ONLINE
                  </span>
                </div>

                <div className="iothw-architecture-flow">
                  <div className="iothw-architecture-node">
                    <Thermometer size={21} />
                    <strong>FIELD</strong>
                    <small>SENSORS</small>
                  </div>

                  <div className="iothw-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="iothw-architecture-node highlight">
                    <Cpu size={21} />
                    <strong>EDGE</strong>
                    <small>DEVICE</small>
                  </div>

                  <div className="iothw-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="iothw-architecture-node">
                    <Wifi size={21} />
                    <strong>MQTT</strong>
                    <small>NETWORK</small>
                  </div>

                  <div className="iothw-architecture-arrow">
                    <ArrowRight size={18} />
                  </div>

                  <div className="iothw-architecture-node">
                    <Database size={21} />
                    <strong>PLATFORM</strong>
                    <small>DATA</small>
                  </div>
                </div>

                <div className="iothw-architecture-bottom">
                  <div>
                    <SlidersHorizontal size={15} />
                    <span>FIELD I/O</span>
                  </div>

                  <div>
                    <ServerCog size={15} />
                    <span>EDGE COMPUTE</span>
                  </div>

                  <div>
                    <GitBranch size={15} />
                    <span>DATA PIPELINE</span>
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
      <section className="iothw-technology">
        <div className="iothw-container">
          <div className="iothw-technology-layout">
            <div>
              <span className="iothw-section-label">HARDWARE TECHNOLOGY</span>

              <h2>
                Industrial Hardware
                <br />
                <strong>That Speaks Your Language.</strong>
              </h2>

              <p>
                Our hardware solutions support common embedded platforms,
                industrial signals, communication protocols, and IoT
                connectivity technologies.
              </p>
            </div>

            <div className="iothw-tech-grid">
              {technologies.map((technology) => (
                <div className="iothw-tech-item" key={technology}>
                  <CheckCircle2 size={15} />
                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HARDWARE LIFECYCLE
      ====================================================== */}
      <section className="iothw-lifecycle">
        <div className="iothw-container">
          <div className="iothw-section-heading centered">
            <span>HARDWARE DEVELOPMENT</span>

            <h2>
              From Concept
              <br />
              <strong>To Industrial Deployment.</strong>
            </h2>

            <p>
              A structured development process helps turn an industrial
              requirement into a reliable connected device.
            </p>
          </div>

          <div className="iothw-lifecycle-grid">
            <div className="iothw-lifecycle-card">
              <span>01</span>
              <Settings size={23} />
              <h3>Engineering</h3>
              <p>
                Define field signals, electrical requirements, communication,
                enclosure, and operating environment.
              </p>
            </div>

            <div className="iothw-lifecycle-card">
              <span>02</span>
              <HardDrive size={23} />
              <h3>Prototype</h3>
              <p>
                Develop electronics, firmware, communication interfaces, and
                functional prototypes.
              </p>
            </div>

            <div className="iothw-lifecycle-card">
              <span>03</span>
              <ShieldCheck size={23} />
              <h3>Validation</h3>
              <p>
                Test connectivity, signals, environmental behavior, data
                accuracy, and device reliability.
              </p>
            </div>

            <div className="iothw-lifecycle-card">
              <span>04</span>
              <Zap size={23} />
              <h3>Deployment</h3>
              <p>
                Deploy connected devices into the plant and integrate them with
                the industrial data ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="iothw-cta">
        <div className="iothw-cta-grid" />

        <div className="iothw-container iothw-cta-content">
          <div>
            <span>READY TO CONNECT YOUR ASSETS?</span>

            <h2>
              Build The Hardware
              <br />
              Behind Your <strong>Digital Plant.</strong>
            </h2>

            <p>
              Let's design the IoT hardware, gateway, transmitter, and
              connectivity architecture required for your industrial
              application.
            </p>
          </div>

          <button
            className="iothw-btn iothw-btn-primary"
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

export default IotHardware;
