import React from "react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Cpu,
  Database,
  Gauge,
  Globe2,
  MapPin,
  Radio,
  Route,
  ServerCog,
  Settings,
  ShieldCheck,
  Truck,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./FleetManagement.css";

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

const FleetManagement: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: <MapPin size={24} />,
      title: "GPS Fleet Tracking",
      description:
        "Realtime vehicle location monitoring with route history, geofencing, and fleet visibility.",
      features: [
        "Realtime GPS",
        "Vehicle Tracking",
        "Route History",
        "Geofencing",
      ],
    },
    {
      icon: <Activity size={24} />,
      title: "Fleet Telemetry",
      description:
        "Collect operational data from vehicles and mobile assets for centralized monitoring.",
      features: [
        "Vehicle Telemetry",
        "Engine Data",
        "Sensor Monitoring",
        "Realtime Data",
      ],
    },
    {
      icon: <Gauge size={24} />,
      title: "Fleet Performance",
      description:
        "Monitor vehicle utilization, operating hours, speed, mileage, and operational efficiency.",
      features: [
        "Fuel Monitoring",
        "Mileage",
        "Utilization",
        "Driver Performance",
      ],
    },
    {
      icon: <Route size={24} />,
      title: "Route Management",
      description:
        "Analyze fleet routes and movement patterns to improve transportation operations.",
      features: [
        "Route Planning",
        "Route Optimization",
        "Trip History",
        "Travel Analytics",
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: "Fleet Maintenance",
      description:
        "Digitize vehicle maintenance schedules and monitor asset condition.",
      features: [
        "Maintenance Schedule",
        "Service History",
        "Vehicle Health",
        "Maintenance Alerts",
      ],
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Fleet Safety",
      description:
        "Improve operational safety through driver behavior monitoring and vehicle alerts.",
      features: [
        "Driver Monitoring",
        "Overspeed Alert",
        "Geofence Alert",
        "Safety Events",
      ],
    },
  ];

  const solutions: Solution[] = [
    {
      icon: <Truck size={24} />,
      title: "Fleet Tracking",
      description:
        "Centralized realtime monitoring for trucks, logistics vehicles, and industrial fleets.",
    },
    {
      icon: <Radio size={24} />,
      title: "Vehicle Telemetry",
      description:
        "Collect GPS, sensor, engine, and operational information from mobile assets.",
    },
    {
      icon: <Database size={24} />,
      title: "Fleet Data Platform",
      description:
        "Store and process historical fleet data for reporting and operational analytics.",
    },
    {
      icon: <Globe2 size={24} />,
      title: "Fleet Control Center",
      description:
        "Build a centralized command center for monitoring distributed fleet operations.",
    },
  ];

  const technologies = [
    "GPS",
    "GNSS",
    "4G / LTE",
    "MQTT",
    "HTTP / REST API",
    "WebSocket",
    "RS485",
    "CAN Bus",
    "OBD-II",
    "ESP32",
    "Node.js",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <div className="fleet-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="fleet-hero">
        <div className="fleet-grid-bg" />

        <div className="fleet-container fleet-hero-container">
          <div className="fleet-hero-content">
            <div className="fleet-eyebrow">
              <Truck size={16} />
              FLEET MANAGEMENT
            </div>

            <h1>
              Manage Your Fleet.
              <span> Control Every Movement.</span>
            </h1>

            <p className="fleet-hero-description">
              ABN Industry 4.0 develops intelligent fleet management systems
              connecting vehicles, GPS trackers, telemetry devices, drivers, and
              operational data into one realtime digital platform.
            </p>

            <div className="fleet-hero-actions">
              <button
                className="fleet-btn fleet-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Build Your Fleet System
                <ArrowRight size={18} />
              </button>

              <button
                className="fleet-btn fleet-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
            </div>

            <div className="fleet-hero-points">
              <div>
                <CheckCircle2 size={17} />
                Realtime Tracking
              </div>

              <div>
                <CheckCircle2 size={17} />
                Fleet Telemetry
              </div>

              <div>
                <CheckCircle2 size={17} />
                Operational Analytics
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="fleet-hero-visual">
            <div className="fleet-system-card">
              <div className="fleet-system-header">
                <div>
                  <span className="fleet-status-dot" />
                  ABN FLEET CONTROL
                </div>

                <Radio size={18} />
              </div>

              <div className="fleet-map">
                <div className="fleet-map-grid" />

                <div className="fleet-route route-one" />
                <div className="fleet-route route-two" />

                <div className="fleet-marker marker-one">
                  <Truck size={16} />
                </div>

                <div className="fleet-marker marker-two">
                  <Truck size={16} />
                </div>

                <div className="fleet-marker marker-three">
                  <Truck size={16} />
                </div>

                <div className="fleet-map-label label-one">TRUCK-001</div>

                <div className="fleet-map-label label-two">TRUCK-024</div>
              </div>

              <div className="fleet-system-stats">
                <div>
                  <span>ACTIVE VEHICLES</span>
                  <strong>24</strong>
                </div>

                <div>
                  <span>ONLINE</span>
                  <strong>22</strong>
                </div>

                <div>
                  <span>ALERTS</span>
                  <strong>02</strong>
                </div>
              </div>

              <div className="fleet-code-panel">
                <div>GPS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONNECTED</div>
                <div>MQTT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONLINE</div>
                <div>TELEMETRY&nbsp;&nbsp;READY</div>
                <div>FLEET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTIVE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY
      ===================================================== */}
      <section className="fleet-section fleet-capability">
        <div className="fleet-container">
          <div className="fleet-section-heading">
            <div className="fleet-eyebrow">OUR CAPABILITY</div>

            <h2>
              From Vehicle Tracking
              <span> To Fleet Intelligence.</span>
            </h2>

            <p>
              Connect your entire fleet operation with realtime data, telemetry,
              analytics, and centralized fleet control.
            </p>
          </div>

          <div className="fleet-capability-grid">
            <div className="fleet-capability-card">
              <div className="fleet-capability-icon">
                <MapPin size={25} />
              </div>

              <h3>Track</h3>

              <p>
                Know where every vehicle is and understand its movement in
                realtime.
              </p>
            </div>

            <div className="fleet-capability-card">
              <div className="fleet-capability-icon">
                <Radio size={25} />
              </div>

              <h3>Connect</h3>

              <p>
                Connect GPS trackers, sensors, CAN bus, and telemetry devices.
              </p>
            </div>

            <div className="fleet-capability-card">
              <div className="fleet-capability-icon">
                <Activity size={25} />
              </div>

              <h3>Monitor</h3>

              <p>
                Monitor vehicle status, trips, drivers, alerts, and fleet
                activity.
              </p>
            </div>

            <div className="fleet-capability-card">
              <div className="fleet-capability-icon">
                <Database size={25} />
              </div>

              <h3>Analyze</h3>

              <p>
                Turn fleet data into operational KPI, reports, and actionable
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="fleet-section fleet-services">
        <div className="fleet-container">
          <div className="fleet-section-heading">
            <div className="fleet-eyebrow">FLEET MANAGEMENT SERVICES</div>

            <h2>
              Complete Fleet
              <span> Digitalization.</span>
            </h2>

            <p>
              Modular fleet technology designed for logistics, mining,
              industrial transportation, construction, and enterprise fleets.
            </p>
          </div>

          <div className="fleet-service-grid">
            {services.map((service) => (
              <article className="fleet-service-card" key={service.title}>
                <div className="fleet-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="fleet-service-features">
                  {service.features.map((feature) => (
                    <span key={feature}>
                      <CheckCircle2 size={14} />
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section className="fleet-section fleet-solutions">
        <div className="fleet-container">
          <div className="fleet-section-heading">
            <div className="fleet-eyebrow">INDUSTRIAL FLEET SOLUTIONS</div>

            <h2>
              One Platform.
              <span> Complete Fleet Visibility.</span>
            </h2>
          </div>

          <div className="fleet-solution-grid">
            {solutions.map((solution) => (
              <article className="fleet-solution-card" key={solution.title}>
                <div className="fleet-solution-icon">{solution.icon}</div>

                <div>
                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>
                </div>

                <ArrowRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}
      <section className="fleet-section fleet-architecture">
        <div className="fleet-container">
          <div className="fleet-section-heading">
            <div className="fleet-eyebrow">FLEET DIGITAL ARCHITECTURE</div>

            <h2>
              Vehicle Data
              <span> To Digital Control.</span>
            </h2>

            <p>
              A connected architecture that moves data from vehicles and mobile
              assets into realtime fleet management platforms.
            </p>
          </div>

          <div className="fleet-flow">
            <div className="fleet-flow-node">
              <Truck size={27} />

              <strong>VEHICLE</strong>

              <span>
                Truck
                <br />
                Heavy Equipment
                <br />
                Mobile Asset
              </span>
            </div>

            <div className="fleet-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="fleet-flow-node">
              <Cpu size={27} />

              <strong>EDGE DEVICE</strong>

              <span>
                GPS
                <br />
                CAN Bus
                <br />
                Sensors
              </span>
            </div>

            <div className="fleet-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="fleet-flow-node">
              <Wifi size={27} />

              <strong>CONNECTIVITY</strong>

              <span>
                4G / LTE
                <br />
                MQTT
                <br />
                REST API
              </span>
            </div>

            <div className="fleet-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="fleet-flow-node">
              <ServerCog size={27} />

              <strong>FLEET PLATFORM</strong>

              <span>
                Monitoring
                <br />
                Analytics
                <br />
                Control Center
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}
      <section className="fleet-section fleet-technology">
        <div className="fleet-container">
          <div className="fleet-tech-layout">
            <div>
              <div className="fleet-eyebrow">FLEET TECHNOLOGY</div>

              <h2>
                Built For
                <span> Connected Fleets.</span>
              </h2>

              <p>
                ABN combines GPS, industrial IoT, wireless connectivity,
                realtime communication, databases, and cloud-ready software into
                one fleet technology stack.
              </p>

              <div className="fleet-tech-points">
                <div>
                  <Zap size={17} />
                  Realtime communication
                </div>

                <div>
                  <ShieldCheck size={17} />
                  Secure device connectivity
                </div>

                <div>
                  <Settings size={17} />
                  Flexible fleet architecture
                </div>
              </div>
            </div>

            <div className="fleet-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLEET CONTROL CENTER
      ===================================================== */}
      <section className="fleet-section fleet-control">
        <div className="fleet-container">
          <div className="fleet-control-card">
            <div className="fleet-control-header">
              <div>
                <div className="fleet-eyebrow">FLEET CONTROL CENTER</div>

                <h2>
                  See Your Entire Fleet
                  <span> In One Screen.</span>
                </h2>

                <p>
                  Build a centralized fleet dashboard with realtime vehicle
                  positions, operational status, alerts, trip history, and
                  performance indicators.
                </p>
              </div>

              <div className="fleet-control-icon">
                <MonitorIcon />
              </div>
            </div>

            <div className="fleet-control-dashboard">
              <div className="fleet-mini-card">
                <MapPin size={18} />
                <span>GPS VEHICLES</span>
                <strong>24</strong>
              </div>

              <div className="fleet-mini-card">
                <Activity size={18} />
                <span>ACTIVE TRIPS</span>
                <strong>18</strong>
              </div>

              <div className="fleet-mini-card">
                <BatteryCharging size={18} />
                <span>FLEET HEALTH</span>
                <strong>94%</strong>
              </div>

              <div className="fleet-mini-card">
                <Gauge size={18} />
                <span>UTILIZATION</span>
                <strong>87%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="fleet-section fleet-cta">
        <div className="fleet-container">
          <div className="fleet-cta-card">
            <div>
              <div className="fleet-eyebrow">FLEET DIGITAL TRANSFORMATION</div>

              <h2>
                Turn Your Fleet Into
                <span> A Connected Operation.</span>
              </h2>

              <p>
                From GPS tracking to realtime telemetry and fleet analytics, ABN
                can build the digital infrastructure behind your fleet.
              </p>
            </div>

            <button
              className="fleet-btn fleet-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start Your Fleet Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================
   SMALL INLINE ICON
   ========================================================= */

const MonitorIcon = () => (
  <div className="fleet-monitor-icon">
    <div className="fleet-monitor-screen">
      <div />
      <div />
      <div />
    </div>

    <div className="fleet-monitor-stand" />
  </div>
);

export default FleetManagement;
