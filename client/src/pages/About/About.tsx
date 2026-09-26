import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gauge,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CementIndustry from "../../components/svg/CementIndustry";
import "./About.css";

const About: React.FC = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: Factory,
      title: "Industrial System",
      description:
        "Membangun solusi digital untuk kebutuhan operasional industri, monitoring, automation, dan system integration.",
    },
    {
      icon: Network,
      title: "System Integration",
      description:
        "Menghubungkan equipment, PLC, DCS, SCADA, IoT, database, API, dan aplikasi bisnis dalam satu ekosistem.",
    },
    {
      icon: Database,
      title: "Data & Intelligence",
      description:
        "Mengubah data operasional menjadi informasi yang dapat digunakan untuk monitoring, analisis, dan pengambilan keputusan.",
    },
    {
      icon: Cloud,
      title: "Digital Platform",
      description:
        "Membangun platform berbasis cloud, web, realtime communication, dan data services untuk kebutuhan industri.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Result Oriented",
      description:
        "Setiap solusi dirancang berdasarkan kebutuhan nyata di lapangan dan target operasional yang ingin dicapai.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable",
      description:
        "Mengutamakan reliability, security, availability, dan maintainability dalam setiap sistem yang dibangun.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Menggunakan teknologi modern untuk menciptakan proses kerja yang lebih cepat, terhubung, dan efisien.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Bekerja bersama tim engineering, operation, IT, management, dan stakeholder untuk menghasilkan solusi yang tepat.",
    },
  ];

  const ecosystem = [
    {
      icon: Cpu,
      title: "Connected Devices",
      text: "Sensor, controller, PLC, gateway, dan industrial equipment.",
    },
    {
      icon: ServerCog,
      title: "Edge & Server",
      text: "Edge computing, backend services, API, database, dan middleware.",
    },
    {
      icon: Activity,
      title: "Realtime Data",
      text: "Telemetry, events, alarms, machine status, dan operational data.",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      text: "Dashboard, analytics, reporting, KPI, dan decision support.",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "REST API",
    "WebSocket",
    "MQTT",
    "MySQL",
    "Cloud",
    "IoT",
    "SCADA",
    "PLC",
    "DCS",
  ];

  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="about-hero-grid" />

        <div className="about-container about-hero-content">
          <div className="about-hero-copy">
            <div className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              ABN INDUSTRY 4.0
            </div>

            <h1>
              Building the
              <span> Digital Industrial Future.</span>
            </h1>

            <p className="about-hero-description">
              ABN membangun solusi teknologi yang menghubungkan manusia, mesin,
              data, software, dan infrastruktur menjadi satu ekosistem digital
              yang terintegrasi.
            </p>

            <div className="about-hero-actions">
              <button
                className="about-btn about-btn-primary"
                onClick={() => navigate("/dashboard")}
              >
                Explore Platform
                <ArrowRight size={18} />
              </button>

              <button
                className="about-btn about-btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact ABN
              </button>
            </div>

            <div className="about-hero-points">
              <div>
                <CheckCircle2 size={17} />
                Industrial Ready
              </div>

              <div>
                <CheckCircle2 size={17} />
                Realtime Architecture
              </div>

              <div>
                <CheckCircle2 size={17} />
                Scalable Platform
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="about-hero-visual">
            <div className="about-system-card">
              <div className="about-industry-background">
                <CementIndustry
                  width="100%"
                  height="100%"
                  className="about-cement-svg"
                />
              </div>
              <div className="about-system-header">
                <div>
                  <span className="about-system-label">
                    ABN DIGITAL ECOSYSTEM
                  </span>
                  <strong>Industrial Intelligence</strong>
                </div>

                <div className="about-live-status">
                  <span />
                  ONLINE
                </div>
              </div>

              <div className="about-system-line" />

              <div className="about-system-core">
                <div className="about-core-ring about-ring-one">
                  <div className="about-core-ring about-ring-two">
                    <div className="about-core-center">
                      <Layers3 size={30} />
                      <span>ABN</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-system-nodes">
                <div className="about-system-node">
                  <Cpu size={18} />
                  <span>FIELD</span>
                </div>

                <div className="about-system-node">
                  <Network size={18} />
                  <span>EDGE</span>
                </div>

                <div className="about-system-node">
                  <Database size={18} />
                  <span>DATA</span>
                </div>

                <div className="about-system-node">
                  <BarChart3 size={18} />
                  <span>INSIGHT</span>
                </div>
              </div>

              <div className="about-system-footer">
                <div>
                  <span>CONNECTIVITY</span>
                  <strong>99.9%</strong>
                </div>

                <div>
                  <span>DATA FLOW</span>
                  <strong>REALTIME</strong>
                </div>

                <div>
                  <span>PLATFORM</span>
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
      <section className="about-intro">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-eyebrow">WHO WE ARE</span>

            <h2>
              Technology yang dibangun untuk
              <span> dunia industri.</span>
            </h2>

            <p>
              ABN berfokus pada pengembangan teknologi dan sistem digital untuk
              membantu perusahaan menghubungkan proses operasional, equipment,
              data, dan aplikasi bisnis.
            </p>
          </div>

          <div className="about-intro-grid">
            <div className="about-intro-main">
              <div className="about-intro-icon">
                <Factory size={30} />
              </div>

              <h3>
                From Industrial Data
                <br />
                to Digital Intelligence.
              </h3>

              <p>
                Kami melihat transformasi digital bukan hanya sebagai proses
                mengganti sistem manual menjadi software. Transformasi yang
                sebenarnya terjadi ketika data dari lapangan dapat mengalir
                secara konsisten menuju sistem informasi dan menjadi dasar untuk
                monitoring, analisis, dan tindakan.
              </p>

              <p>
                Karena itu, ABN membangun pendekatan yang menggabungkan
                industrial technology, software engineering, IoT, data platform,
                dan system integration.
              </p>
            </div>

            <div className="about-intro-stats">
              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <Gauge size={21} />
                </div>

                <strong>Realtime</strong>
                <span>Operational Visibility</span>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <Workflow size={21} />
                </div>

                <strong>Integrated</strong>
                <span>Industrial Ecosystem</span>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <Database size={21} />
                </div>

                <strong>Data Driven</strong>
                <span>Decision Support</span>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <ShieldCheck size={21} />
                </div>

                <strong>Secure</strong>
                <span>Reliable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="about-capabilities">
        <div className="about-container">
          <div className="about-section-heading about-heading-center">
            <span className="about-section-eyebrow">OUR CAPABILITIES</span>

            <h2>
              One ecosystem.
              <span> Multiple capabilities.</span>
            </h2>

            <p>
              Menggabungkan engineering dan software untuk membangun solusi
              digital yang dapat berkembang mengikuti kebutuhan industri.
            </p>
          </div>

          <div className="about-capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="about-capability-card" key={item.title}>
                  <div className="about-capability-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="about-card-arrow">
                    <ArrowRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}
      <section className="about-ecosystem">
        <div className="about-ecosystem-grid" />

        <div className="about-container about-ecosystem-content">
          <div className="about-ecosystem-copy">
            <span className="about-section-eyebrow">INDUSTRIAL ECOSYSTEM</span>

            <h2>
              Connect.
              <br />
              <span>Understand.</span>
              <br />
              Act.
            </h2>

            <p>
              Sistem industri menghasilkan data dalam jumlah besar. Tantangan
              berikutnya adalah memastikan data tersebut dapat terhubung,
              dipahami, dan digunakan.
            </p>

            <div className="about-ecosystem-checks">
              <div>
                <CheckCircle2 size={17} />
                <span>Equipment Connectivity</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Realtime Monitoring</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Data Integration</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Operational Intelligence</span>
              </div>
            </div>
          </div>

          <div className="about-ecosystem-cards">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="about-ecosystem-card" key={item.title}>
                  <div className="about-ecosystem-number">0{index + 1}</div>

                  <div className="about-ecosystem-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-eyebrow">OUR PRINCIPLES</span>

            <h2>
              Built with
              <span> purpose.</span>
            </h2>

            <p>
              Prinsip yang menjadi dasar dalam merancang teknologi dan membangun
              hubungan jangka panjang dengan pengguna dan partner.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-value-card" key={item.title}>
                  <div className="about-value-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}
      <section className="about-technology">
        <div className="about-container">
          <div className="about-technology-header">
            <div>
              <span className="about-section-eyebrow">
                TECHNOLOGY FOUNDATION
              </span>

              <h2>
                Modern technology.
                <span> Industrial mindset.</span>
              </h2>
            </div>

            <p>
              Arsitektur ABN menggunakan kombinasi teknologi modern untuk
              membangun platform yang realtime, scalable, dan terintegrasi.
            </p>
          </div>

          <div className="about-tech-stack">
            {technologies.map((technology) => (
              <div className="about-tech-item" key={technology}>
                <span className="about-tech-dot" />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="about-mission">
        <div className="about-container">
          <div className="about-mission-card">
            <div className="about-mission-glow" />

            <div className="about-mission-icon">
              <Zap size={30} />
            </div>

            <div className="about-mission-content">
              <span>ABN MISSION</span>

              <h2>
                Making industrial technology
                <br />
                <strong>more connected, visible, and intelligent.</strong>
              </h2>

              <p>
                Kami ingin membantu industri memanfaatkan teknologi secara
                praktis — mulai dari data lapangan hingga platform digital yang
                dapat digunakan oleh operation, engineering, IT, dan management.
              </p>
            </div>

            <button
              className="about-btn about-btn-light"
              onClick={() => navigate("/contact")}
            >
              Start a Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="about-footer">
        <div className="about-container about-footer-content">
          <div>
            <strong>ABN INDUSTRY 4.0</strong>
            <span>Industrial Digital Technology</span>
          </div>

          <div className="about-footer-designed">Designed by ABN</div>
        </div>
      </footer>
    </main>
  );
};

export default About;
