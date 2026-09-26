import React from "react";
import {
  Activity,
  ArrowRight,
  //BarChart3,
  CheckCircle2,
  //Cloud,
  Database,
  Gauge,
  Globe2,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  Router,
  ServerCog,
  Settings2,
  ShieldCheck,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ServerNetwork.css";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: ServerCog,
    title: "Server Infrastructure",
    description:
      "Infrastruktur server untuk menjalankan aplikasi, API, database, monitoring, dan layanan digital perusahaan.",
    features: [
      "Application server",
      "Database server",
      "Cloud / VPS",
      "Server monitoring",
    ],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Perancangan jaringan yang menghubungkan server, workstation, perangkat industri, IoT, dan sistem perusahaan.",
    features: [
      "LAN / WAN",
      "Industrial network",
      "Network segmentation",
      "Connectivity monitoring",
    ],
  },
  {
    icon: Globe2,
    title: "API & Connectivity",
    description:
      "Koneksi antar aplikasi dan sistem melalui API, WebSocket, MQTT, dan protokol komunikasi modern.",
    features: ["REST API", "WebSocket", "MQTT", "System integration"],
  },
  {
    icon: Database,
    title: "Database Infrastructure",
    description:
      "Database terpusat untuk menyimpan data operasional, transaksi, monitoring, histori, dan analytics.",
    features: ["MySQL", "Data storage", "Backup", "Database monitoring"],
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure Security",
    description:
      "Lapisan keamanan untuk melindungi server, network, API, database, dan akses pengguna.",
    features: [
      "Authentication",
      "Authorization",
      "Firewall",
      "Audit & logging",
    ],
  },
  {
    icon: RefreshCw,
    title: "Monitoring & Reliability",
    description:
      "Monitoring kondisi server dan network untuk membantu menjaga availability serta mendeteksi gangguan lebih cepat.",
    features: [
      "Health monitoring",
      "Resource monitoring",
      "Service status",
      "Alert & notification",
    ],
  },
];

const infrastructure = [
  {
    icon: ServerCog,
    title: "Application Server",
    description:
      "Menjalankan aplikasi frontend, backend, API, dan service operasional.",
  },
  {
    icon: Database,
    title: "Database Server",
    description:
      "Menyimpan data aplikasi, transaksi, histori, dan data monitoring.",
  },
  {
    icon: Network,
    title: "Network Layer",
    description:
      "Menghubungkan server, client, perangkat industri, dan sistem eksternal.",
  },
  {
    icon: ShieldCheck,
    title: "Security Layer",
    description:
      "Mengatur akses, authentication, firewall, logging, dan keamanan sistem.",
  },
];

const technologies = [
  "Linux / Windows Server",
  "Node.js",
  "Express",
  "MySQL",
  "REST API",
  "WebSocket",
  "MQTT",
  "Docker",
  "Cloud / VPS",
  "Firewall",
];

const ServerNetwork: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="server-network-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="server-network-hero">
        <div className="server-network-hero-grid" />

        <div className="server-network-container server-network-hero-content">
          <div className="server-network-hero-copy">
            <div className="server-network-eyebrow">
              <Network size={16} />
              <span>SERVER & NETWORK INFRASTRUCTURE</span>
            </div>

            <h1>
              Infrastruktur Server & <span>Network</span> untuk Industri Digital
            </h1>

            <p>
              Kami membangun infrastruktur server dan network yang stabil, aman,
              terukur, dan siap menghubungkan aplikasi, database, perangkat
              industri, IoT, serta sistem operasional perusahaan.
            </p>

            <div className="server-network-hero-actions">
              <button
                type="button"
                className="server-network-btn server-network-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Konsultasi Infrastructure
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="server-network-btn server-network-btn-secondary"
                onClick={() => navigate("/software-development")}
              >
                Software Development
              </button>
            </div>

            <div className="server-network-hero-points">
              <div>
                <CheckCircle2 size={17} />
                <span>High Availability</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Secure Infrastructure</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Monitoring</span>
              </div>
            </div>
          </div>

          {/* =================================================
              INFRASTRUCTURE VISUAL
          ================================================= */}

          <div className="server-network-hero-visual">
            <div className="server-network-system-card">
              <div className="server-network-system-header">
                <div>
                  <span className="server-network-status-dot" />
                  INFRASTRUCTURE ONLINE
                </div>

                <Settings2 size={18} />
              </div>

              <div className="server-network-system-main">
                <div className="server-network-server-panel">
                  <div className="server-network-server-title">
                    <ServerCog size={18} />
                    <span>ABN SERVER</span>
                  </div>

                  <div className="server-network-server-status">
                    <span className="server-network-online-dot" />
                    ONLINE
                  </div>

                  <div className="server-network-metrics">
                    <div>
                      <span>CPU</span>
                      <strong>32%</strong>
                    </div>

                    <div>
                      <span>RAM</span>
                      <strong>48%</strong>
                    </div>

                    <div>
                      <span>DISK</span>
                      <strong>61%</strong>
                    </div>
                  </div>

                  <div className="server-network-progress">
                    <div>
                      <span>
                        <small>CPU Usage</small>
                        <b>32%</b>
                      </span>
                      <i>
                        <em style={{ width: "32%" }} />
                      </i>
                    </div>

                    <div>
                      <span>
                        <small>Memory Usage</small>
                        <b>48%</b>
                      </span>
                      <i>
                        <em style={{ width: "48%" }} />
                      </i>
                    </div>

                    <div>
                      <span>
                        <small>Storage</small>
                        <b>61%</b>
                      </span>
                      <i>
                        <em style={{ width: "61%" }} />
                      </i>
                    </div>
                  </div>
                </div>

                <div className="server-network-flow">
                  <div className="server-network-flow-node">
                    <Wifi size={20} />
                    <span>NETWORK</span>
                  </div>

                  <div className="server-network-flow-line" />

                  <div className="server-network-flow-node server-network-flow-active">
                    <ServerCog size={20} />
                    <span>SERVER</span>
                  </div>

                  <div className="server-network-flow-line" />

                  <div className="server-network-flow-node">
                    <Database size={20} />
                    <span>DATABASE</span>
                  </div>
                </div>
              </div>

              <div className="server-network-system-footer">
                <div>
                  <span>NETWORK</span>
                  <strong>CONNECTED</strong>
                </div>

                <div>
                  <span>API</span>
                  <strong>99.99%</strong>
                </div>

                <div>
                  <span>SECURITY</span>
                  <strong>ACTIVE</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="server-network-section server-network-intro">
        <div className="server-network-container">
          <div className="server-network-section-heading">
            <div className="server-network-eyebrow">
              <Layers3 size={16} />
              <span>INFRASTRUCTURE CAPABILITY</span>
            </div>

            <h2>
              Infrastruktur bukan hanya server. <br />
              <span>Semua sistem harus saling terhubung.</span>
            </h2>

            <p>
              Infrastruktur digital yang baik menghubungkan aplikasi, database,
              network, perangkat, dan pengguna dalam satu ekosistem yang dapat
              dimonitor dan dikembangkan secara berkelanjutan.
            </p>
          </div>

          <div className="server-network-capability-grid">
            <div className="server-network-capability-card">
              <div className="server-network-capability-icon">
                <ServerCog />
              </div>

              <strong>Host</strong>

              <span>
                Menyediakan server untuk aplikasi dan service perusahaan.
              </span>
            </div>

            <div className="server-network-capability-card">
              <div className="server-network-capability-icon">
                <Network />
              </div>

              <strong>Connect</strong>

              <span>
                Menghubungkan server, client, IoT, dan perangkat industri.
              </span>
            </div>

            <div className="server-network-capability-card">
              <div className="server-network-capability-icon">
                <ShieldCheck />
              </div>

              <strong>Protect</strong>

              <span>Menjaga akses dan komunikasi sistem tetap aman.</span>
            </div>

            <div className="server-network-capability-card">
              <div className="server-network-capability-icon">
                <Activity />
              </div>

              <strong>Monitor</strong>

              <span>
                Memantau kondisi server, network, service, dan resource.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="server-network-section server-network-services">
        <div className="server-network-container">
          <div className="server-network-section-heading centered">
            <div className="server-network-eyebrow">
              <ServerCog size={16} />
              <span>INFRASTRUCTURE SERVICES</span>
            </div>

            <h2>
              Solusi Server & <span>Network Infrastructure</span>
            </h2>

            <p>
              Dari server aplikasi sampai network monitoring, kami membangun
              infrastruktur yang disesuaikan dengan kebutuhan operasional.
            </p>
          </div>

          <div className="server-network-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="server-network-service-card"
                  key={service.title}
                >
                  <div className="server-network-service-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={15} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="server-network-card-link"
                    onClick={() => navigate("/contact")}
                  >
                    Discuss Infrastructure
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}

      <section className="server-network-section server-network-architecture">
        <div className="server-network-container">
          <div className="server-network-architecture-layout">
            <div className="server-network-architecture-copy">
              <div className="server-network-eyebrow">
                <Workflow size={16} />
                <span>SYSTEM ARCHITECTURE</span>
              </div>

              <h2>
                Dari network <span>menjadi digital infrastructure.</span>
              </h2>

              <p>
                Infrastruktur ABN dirancang sebagai layer yang menghubungkan
                network, server, database, aplikasi, dan perangkat operasional
                sehingga data dapat mengalir secara terkontrol.
              </p>

              <button
                type="button"
                className="server-network-btn server-network-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Rancang Infrastructure
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="server-network-architecture-grid">
              {infrastructure.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="server-network-architecture-card"
                    key={item.title}
                  >
                    <Icon size={23} />

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MONITORING
      ===================================================== */}

      <section className="server-network-section server-network-monitoring">
        <div className="server-network-container">
          <div className="server-network-monitor-layout">
            <div>
              <div className="server-network-eyebrow">
                <Gauge size={16} />
                <span>SERVER MONITORING</span>
              </div>

              <h2>
                Monitor infrastructure <span>secara realtime.</span>
              </h2>

              <p>
                Kondisi server dan network dapat dipantau melalui dashboard
                sehingga tim dapat melihat resource usage, service status,
                konektivitas, dan aktivitas sistem.
              </p>
            </div>

            <div className="server-network-monitor-list">
              <div className="server-network-monitor-item">
                <div className="server-network-monitor-item-icon">
                  <Gauge size={18} />
                </div>

                <div>
                  <strong>CPU & Memory</strong>
                  <span>Resource utilization monitoring</span>
                </div>

                <b>32%</b>
              </div>

              <div className="server-network-monitor-item">
                <div className="server-network-monitor-item-icon">
                  <HardDrive size={18} />
                </div>

                <div>
                  <strong>Storage</strong>
                  <span>Disk capacity & usage</span>
                </div>

                <b>61%</b>
              </div>

              <div className="server-network-monitor-item">
                <div className="server-network-monitor-item-icon">
                  <Network size={18} />
                </div>

                <div>
                  <strong>Network</strong>
                  <span>Connectivity & traffic</span>
                </div>

                <b>ONLINE</b>
              </div>

              <div className="server-network-monitor-item">
                <div className="server-network-monitor-item-icon">
                  <Zap size={18} />
                </div>

                <div>
                  <strong>Services</strong>
                  <span>API, database & WebSocket</span>
                </div>

                <b>ACTIVE</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="server-network-section server-network-technology">
        <div className="server-network-container">
          <div className="server-network-tech-layout">
            <div>
              <div className="server-network-eyebrow">
                <Router size={16} />
                <span>INFRASTRUCTURE TECHNOLOGY</span>
              </div>

              <h2>
                Dibangun dengan <span>teknologi infrastructure modern.</span>
              </h2>

              <p>
                Teknologi dipilih berdasarkan kebutuhan availability,
                reliability, security, scalability, dan kemudahan maintenance
                jangka panjang.
              </p>
            </div>

            <div className="server-network-tech-list">
              {technologies.map((technology) => (
                <div className="server-network-tech-item" key={technology}>
                  <CheckCircle2 size={16} />
                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="server-network-cta">
        <div className="server-network-container">
          <div className="server-network-cta-inner">
            <div>
              <div className="server-network-eyebrow">
                <LockKeyhole size={16} />
                <span>BUILD YOUR INFRASTRUCTURE</span>
              </div>

              <h2>
                Siap membangun <span>infrastruktur digital yang reliable?</span>
              </h2>

              <p>
                Diskusikan kebutuhan server, network, cloud, database,
                cybersecurity, monitoring, IoT, atau integrasi Industry 4.0
                bersama tim ABN.
              </p>
            </div>

            <button
              type="button"
              className="server-network-btn server-network-btn-light"
              onClick={() => navigate("/contact")}
            >
              Hubungi ABN
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServerNetwork;
