import React from "react";
import {
  Activity,
  ArrowRight,
  //BatteryCharging,
  CheckCircle2,
  Clock3,
  //Compass,
  Database,
  Gauge,
  Globe2,
  LocateFixed,
  MapPin,
  Navigation,
  Radio,
  Route,
  Satellite,
  ServerCog,
  ShieldCheck,
  Signal,
  Truck,
  Wifi,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./GpsTracking.css";

type TrackingService = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

type TrackingSolution = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const GpsTracking: React.FC = () => {
  const navigate = useNavigate();

  const services: TrackingService[] = [
    {
      icon: <LocateFixed size={24} />,
      title: "Realtime GPS Tracking",
      description:
        "Monitor vehicle positions, movement, speed, and operational status in realtime.",
      features: [
        "Live Location",
        "Vehicle Status",
        "Speed Monitoring",
        "Position Updates",
      ],
    },
    {
      icon: <Route size={24} />,
      title: "Route & Trip Tracking",
      description:
        "Record and analyze vehicle journeys from departure to destination.",
      features: [
        "Trip History",
        "Route Playback",
        "Distance Tracking",
        "Travel Time",
      ],
    },
    {
      icon: <Globe2 size={24} />,
      title: "Geofencing",
      description:
        "Create digital operational zones and receive notifications when vehicles enter or leave them.",
      features: [
        "Geofence Area",
        "Entry Alert",
        "Exit Alert",
        "Restricted Zone",
      ],
    },
    {
      icon: <Gauge size={24} />,
      title: "Vehicle Monitoring",
      description:
        "Monitor vehicle movement and operational parameters through GPS and telemetry.",
      features: ["Speed", "Mileage", "Idle Time", "Vehicle Status"],
    },
    {
      icon: <Radio size={24} />,
      title: "GPS Telemetry",
      description:
        "Transmit location and vehicle data from field devices to the central platform.",
      features: ["GPS Data", "4G / LTE", "MQTT", "Realtime Telemetry"],
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Tracking Security",
      description:
        "Secure communication and device monitoring for distributed GPS tracking infrastructure.",
      features: [
        "Device Authentication",
        "Secure API",
        "Connection Monitoring",
        "Tracking Alerts",
      ],
    },
  ];

  const solutions: TrackingSolution[] = [
    {
      icon: <Truck size={24} />,
      title: "Truck Tracking",
      description:
        "Realtime GPS monitoring for logistics, industrial, mining, and transportation trucks.",
    },
    {
      icon: <Navigation size={24} />,
      title: "Route Monitoring",
      description:
        "Track vehicle movement and compare actual routes with planned operations.",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location Intelligence",
      description:
        "Convert GPS coordinates into operational information for fleet management.",
    },
    {
      icon: <Activity size={24} />,
      title: "Realtime Fleet Monitoring",
      description:
        "Centralized tracking dashboard for vehicles, alerts, trips, and operational status.",
    },
  ];

  const technologies = [
    "GPS",
    "GNSS",
    "GPS Tracker",
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
  ];

  return (
    <div className="gps-page">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="gps-hero">
        <div className="gps-grid-bg" />

        <div className="gps-container gps-hero-container">
          <div className="gps-hero-content">
            <div className="gps-eyebrow">
              <Satellite size={16} />
              GPS TRACKING
            </div>

            <h1>
              Know Where Your
              <span> Fleet Is.</span>
            </h1>

            <p className="gps-hero-description">
              ABN Industry 4.0 builds realtime GPS tracking systems that connect
              vehicles, GPS devices, telemetry, maps, and fleet operations into
              one centralized digital platform.
            </p>

            <div className="gps-hero-actions">
              <button
                className="gps-btn gps-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Build GPS Tracking
                <ArrowRight size={18} />
              </button>

              <button
                className="gps-btn gps-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
            </div>

            <div className="gps-hero-points">
              <div>
                <CheckCircle2 size={17} />
                Live Location
              </div>

              <div>
                <CheckCircle2 size={17} />
                Route History
              </div>

              <div>
                <CheckCircle2 size={17} />
                Geofence Alerts
              </div>
            </div>
          </div>

          {/* =================================================
              HERO TRACKING VISUAL
              ================================================= */}
          <div className="gps-hero-visual">
            <div className="gps-tracking-card">
              <div className="gps-card-header">
                <div>
                  <span className="gps-live-dot" />
                  ABN GPS CONTROL
                </div>

                <Satellite size={18} />
              </div>

              <div className="gps-map">
                <div className="gps-map-grid" />

                <div className="gps-map-road road-a" />
                <div className="gps-map-road road-b" />
                <div className="gps-map-road road-c" />

                <div className="gps-geofence">
                  <span>ZONE A</span>
                </div>

                <div className="gps-vehicle gps-vehicle-one">
                  <Truck size={15} />
                </div>

                <div className="gps-vehicle gps-vehicle-two">
                  <Truck size={15} />
                </div>

                <div className="gps-vehicle gps-vehicle-three">
                  <Truck size={15} />
                </div>

                <div className="gps-location-label gps-label-one">
                  TRUCK-001
                </div>

                <div className="gps-location-label gps-label-two">
                  TRUCK-024
                </div>

                <div className="gps-location-label gps-label-three">
                  TRUCK-031
                </div>
              </div>

              <div className="gps-card-status">
                <div>
                  <span>TRACKING</span>
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

              <div className="gps-terminal">
                <div>GPS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOCKED</div>
                <div>GNSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTIVE</div>
                <div>4G LTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONLINE</div>
                <div>LOCATION&nbsp;&nbsp;&nbsp;SYNCED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY
          ===================================================== */}
      <section className="gps-section gps-capability">
        <div className="gps-container">
          <div className="gps-section-heading">
            <div className="gps-eyebrow">OUR CAPABILITY</div>

            <h2>
              From GPS Signal
              <span> To Fleet Intelligence.</span>
            </h2>

            <p>
              Build a complete location tracking infrastructure from vehicle GPS
              devices to realtime fleet dashboards.
            </p>
          </div>

          <div className="gps-capability-grid">
            <div className="gps-capability-card">
              <div className="gps-capability-icon">
                <Satellite size={25} />
              </div>

              <h3>Locate</h3>

              <p>Determine vehicle position using GPS and GNSS positioning.</p>
            </div>

            <div className="gps-capability-card">
              <div className="gps-capability-icon">
                <Signal size={25} />
              </div>

              <h3>Transmit</h3>

              <p>
                Send GPS and telemetry information through 4G, LTE, or IoT
                networks.
              </p>
            </div>

            <div className="gps-capability-card">
              <div className="gps-capability-icon">
                <MapPin size={25} />
              </div>

              <h3>Visualize</h3>

              <p>
                Display vehicles, routes, geofences, and operational status on
                digital maps.
              </p>
            </div>

            <div className="gps-capability-card">
              <div className="gps-capability-icon">
                <Database size={25} />
              </div>

              <h3>Analyze</h3>

              <p>
                Transform location history into trip, route, utilization, and
                fleet analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          ===================================================== */}
      <section className="gps-section gps-services">
        <div className="gps-container">
          <div className="gps-section-heading">
            <div className="gps-eyebrow">GPS TRACKING SERVICES</div>

            <h2>
              Complete
              <span> Location Visibility.</span>
            </h2>

            <p>
              Flexible GPS tracking capabilities for trucks, industrial
              vehicles, logistics fleets, and mobile assets.
            </p>
          </div>

          <div className="gps-service-grid">
            {services.map((service) => (
              <article className="gps-service-card" key={service.title}>
                <div className="gps-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="gps-service-features">
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
      <section className="gps-section gps-solutions">
        <div className="gps-container">
          <div className="gps-section-heading">
            <div className="gps-eyebrow">GPS SOLUTIONS</div>

            <h2>
              Location Data
              <span> That Drives Operations.</span>
            </h2>
          </div>

          <div className="gps-solution-grid">
            {solutions.map((solution) => (
              <article className="gps-solution-card" key={solution.title}>
                <div className="gps-solution-icon">{solution.icon}</div>

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
          GPS ARCHITECTURE
          ===================================================== */}
      <section className="gps-section gps-architecture">
        <div className="gps-container">
          <div className="gps-section-heading">
            <div className="gps-eyebrow">GPS TRACKING ARCHITECTURE</div>

            <h2>
              Vehicle Position
              <span> To Realtime Dashboard.</span>
            </h2>

            <p>
              A connected architecture for capturing, transmitting, processing,
              and visualizing vehicle location data.
            </p>
          </div>

          <div className="gps-flow">
            <div className="gps-flow-node">
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

            <div className="gps-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="gps-flow-node">
              <Satellite size={27} />

              <strong>GPS DEVICE</strong>

              <span>
                GNSS
                <br />
                GPS Tracker
                <br />
                CAN / OBD
              </span>
            </div>

            <div className="gps-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="gps-flow-node">
              <Wifi size={27} />

              <strong>NETWORK</strong>

              <span>
                4G / LTE
                <br />
                MQTT
                <br />
                REST API
              </span>
            </div>

            <div className="gps-flow-line">
              <ArrowRight size={20} />
            </div>

            <div className="gps-flow-node">
              <ServerCog size={27} />

              <strong>GPS PLATFORM</strong>

              <span>
                Maps
                <br />
                Tracking
                <br />
                Analytics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIVE TRACKING
          ===================================================== */}
      <section className="gps-section gps-live">
        <div className="gps-container">
          <div className="gps-live-layout">
            <div>
              <div className="gps-eyebrow">REALTIME GPS MONITORING</div>

              <h2>
                Every Vehicle.
                <span> One Digital Map.</span>
              </h2>

              <p>
                Build a realtime control center that shows vehicle location,
                speed, connection status, trip activity, and alerts in one
                operational interface.
              </p>

              <div className="gps-live-points">
                <div>
                  <CheckCircle2 size={17} />
                  Live vehicle position
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Historical route playback
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Geofence event detection
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Vehicle connection monitoring
                </div>
              </div>
            </div>

            <div className="gps-dashboard-card">
              <div className="gps-dashboard-header">
                <div>
                  <span className="gps-live-dot" />
                  LIVE FLEET MAP
                </div>

                <span>24 VEHICLES</span>
              </div>

              <div className="gps-dashboard-map">
                <div className="gps-map-grid" />

                <div className="gps-dashboard-road dash-road-one" />
                <div className="gps-dashboard-road dash-road-two" />
                <div className="gps-dashboard-road dash-road-three" />

                <div className="gps-ping ping-one">
                  <span />
                </div>

                <div className="gps-ping ping-two">
                  <span />
                </div>

                <div className="gps-ping ping-three">
                  <span />
                </div>

                <div className="gps-dashboard-vehicle vehicle-a">
                  <Truck size={13} />
                </div>

                <div className="gps-dashboard-vehicle vehicle-b">
                  <Truck size={13} />
                </div>

                <div className="gps-dashboard-vehicle vehicle-c">
                  <Truck size={13} />
                </div>
              </div>

              <div className="gps-dashboard-footer">
                <div>
                  <Signal size={15} />
                  <span>NETWORK</span>
                  <strong>ONLINE</strong>
                </div>

                <div>
                  <Clock3 size={15} />
                  <span>UPDATE</span>
                  <strong>2 SEC</strong>
                </div>

                <div>
                  <Zap size={15} />
                  <span>DATA</span>
                  <strong>LIVE</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
          ===================================================== */}
      <section className="gps-section gps-technology">
        <div className="gps-container">
          <div className="gps-tech-layout">
            <div>
              <div className="gps-eyebrow">GPS TECHNOLOGY</div>

              <h2>
                Built For
                <span> Connected Vehicles.</span>
              </h2>

              <p>
                Combine positioning technology, IoT connectivity, realtime
                messaging, databases, and web applications into a scalable GPS
                tracking platform.
              </p>

              <div className="gps-tech-points">
                <div>
                  <Satellite size={17} />
                  GPS / GNSS positioning
                </div>

                <div>
                  <Signal size={17} />
                  4G / LTE connectivity
                </div>

                <div>
                  <Wifi size={17} />
                  MQTT and realtime communication
                </div>

                <div>
                  <ShieldCheck size={17} />
                  Secure device communication
                </div>
              </div>
            </div>

            <div className="gps-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="gps-section gps-cta">
        <div className="gps-container">
          <div className="gps-cta-card">
            <div>
              <div className="gps-eyebrow">CONNECTED FLEET</div>

              <h2>
                Put Every Vehicle
                <span> On The Map.</span>
              </h2>

              <p>
                From GPS hardware and cellular connectivity to realtime fleet
                dashboards, ABN can build the complete tracking ecosystem.
              </p>
            </div>

            <button
              className="gps-btn gps-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start GPS Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GpsTracking;
