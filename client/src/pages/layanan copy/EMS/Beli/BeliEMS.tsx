import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Factory,
  Gauge,
  KeyRound,
  Layers3,
  LockKeyhole,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Boxes,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "./BeliEMS.css";

const BeliEMS: React.FC = () => {
  const modules = [
    {
      icon: Users,
      title: "HR Management",
      description:
        "Kelola employee, struktur organisasi, attendance, role dan data HR perusahaan.",
    },
    {
      icon: Factory,
      title: "Fleet Management",
      description:
        "Monitoring kendaraan, GPS, driver, maintenance dan operational fleet.",
    },
    {
      icon: Boxes,
      title: "Inventory",
      description:
        "Kelola stock, warehouse, item movement dan inventory control.",
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description:
        "Kelola purchasing request, supplier, purchase order dan procurement workflow.",
    },
    {
      icon: Database,
      title: "Finance",
      description:
        "Struktur financial data, transaction monitoring dan operational finance.",
    },
    {
      icon: Network,
      title: "CRM",
      description:
        "Kelola customer, business relationship, activity dan sales pipeline.",
    },
  ];

  const features = [
    "Multi-module enterprise management",
    "Role based access control",
    "Centralized database",
    "REST API architecture",
    "Web based dashboard",
    "Cloud atau on-premise deployment",
    "Integration ready",
    "Continuous product development",
  ];

  return (
    <main className="beli-ems-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="beli-ems-hero">
        <div className="beli-ems-hero-grid" />

        <div className="beli-ems-container beli-ems-hero-content">
          <div className="beli-ems-hero-copy">
            <div className="beli-ems-eyebrow">
              <span className="beli-ems-eyebrow-dot" />
              <span>ABN ENTERPRISE MANAGEMENT SYSTEM</span>
            </div>

            <h1>
              Own your
              <br />
              <span>ABN EMS.</span>
            </h1>

            <p className="beli-ems-hero-description">
              Dapatkan license ABN Enterprise Management System untuk membangun
              centralized platform bagi HR, Fleet, Inventory, Procurement,
              Finance, CRM dan operational management perusahaan.
            </p>

            <div className="beli-ems-hero-actions">
              <a href="#license" className="beli-ems-btn beli-ems-btn-primary">
                <ShoppingCart size={18} />
                View License
                <ArrowRight size={17} />
              </a>

              <NavLink
                to="/contact"
                className="beli-ems-btn beli-ems-btn-secondary"
              >
                Contact ABN
              </NavLink>
            </div>

            <div className="beli-ems-hero-points">
              <div>
                <Check size={15} />
                Enterprise ready
              </div>

              <div>
                <Check size={15} />
                Modular architecture
              </div>

              <div>
                <Check size={15} />
                Integration ready
              </div>
            </div>
          </div>

          {/* =====================================================
              SYSTEM VISUAL
          ===================================================== */}
          <div className="beli-ems-hero-visual">
            <div className="beli-ems-system-card">
              <div className="beli-ems-system-header">
                <div>
                  <span className="beli-ems-system-label">ABN PLATFORM</span>
                  <strong>Enterprise Management System</strong>
                </div>

                <div className="beli-ems-live-status">
                  <span />
                  LICENSE
                </div>
              </div>

              <div className="beli-ems-system-line" />

              <div className="beli-ems-system-core">
                <div className="beli-ems-core-ring beli-ems-ring-one" />
                <div className="beli-ems-core-ring beli-ems-ring-two" />

                <div className="beli-ems-core-center">
                  <MonitorCog size={31} />
                  <span>ABN EMS</span>
                </div>
              </div>

              <div className="beli-ems-system-nodes">
                <div className="beli-ems-system-node">
                  <Users size={18} />
                  <span>HR</span>
                </div>

                <div className="beli-ems-system-node">
                  <Factory size={18} />
                  <span>FLEET</span>
                </div>

                <div className="beli-ems-system-node">
                  <Boxes size={18} />
                  <span>INVENTORY</span>
                </div>

                <div className="beli-ems-system-node">
                  <ShoppingCart size={18} />
                  <span>PROCUREMENT</span>
                </div>
              </div>

              <div className="beli-ems-system-footer">
                <div>
                  <strong>WEB</strong>
                  <span>Application</span>
                </div>

                <div>
                  <strong>API</strong>
                  <span>Integration</span>
                </div>

                <div>
                  <strong>DB</strong>
                  <span>Centralized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="beli-ems-intro">
        <div className="beli-ems-container">
          <div className="beli-ems-section-heading">
            <div className="beli-ems-section-eyebrow">
              <span className="beli-ems-eyebrow-dot" />
              <span>WHY ABN EMS?</span>
            </div>

            <h2>
              One platform for your
              <span> enterprise operations.</span>
            </h2>

            <p>
              ABN EMS dirancang sebagai platform modular yang dapat digunakan
              untuk mengintegrasikan berbagai kebutuhan operational perusahaan
              dalam satu ecosystem.
            </p>
          </div>

          <div className="beli-ems-intro-grid">
            <div className="beli-ems-intro-main">
              <div className="beli-ems-intro-icon">
                <MonitorCog size={29} />
              </div>

              <h3>Enterprise platform, built modular.</h3>

              <p>
                ABN EMS menggabungkan berbagai fungsi enterprise management
                dalam architecture yang dapat dikembangkan sesuai kebutuhan
                organisasi.
              </p>

              <p>
                Perusahaan dapat memulai dari beberapa modul kemudian
                mengembangkan platform secara bertahap ketika kebutuhan
                operational bertambah.
              </p>

              <NavLink to="/ems/sewa" className="beli-ems-inline-link">
                Compare with Subscription
                <ArrowRight size={16} />
              </NavLink>
            </div>

            <div className="beli-ems-intro-stats">
              <div className="beli-ems-stat-card">
                <div className="beli-ems-stat-icon">
                  <Layers3 size={21} />
                </div>
                <strong>Modular</strong>
                <span>Activate modules according to business needs.</span>
              </div>

              <div className="beli-ems-stat-card">
                <div className="beli-ems-stat-icon">
                  <ShieldCheck size={21} />
                </div>
                <strong>Secure</strong>
                <span>Role based access and centralized control.</span>
              </div>

              <div className="beli-ems-stat-card">
                <div className="beli-ems-stat-icon">
                  <Network size={21} />
                </div>
                <strong>Connected</strong>
                <span>Ready for API and system integration.</span>
              </div>

              <div className="beli-ems-stat-card">
                <div className="beli-ems-stat-icon">
                  <Gauge size={21} />
                </div>
                <strong>Scalable</strong>
                <span>Designed to grow with your organization.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LICENSE
      ========================================================= */}
      <section id="license" className="beli-ems-license">
        <div className="beli-ems-container">
          <div className="beli-ems-section-heading beli-ems-heading-center">
            <div className="beli-ems-section-eyebrow">
              <span className="beli-ems-eyebrow-dot" />
              <span>ABN EMS LICENSE</span>
            </div>

            <h2>
              Choose your
              <span> enterprise license.</span>
            </h2>

            <p>
              Pilih model license sesuai kebutuhan deployment dan skala
              perusahaan.
            </p>
          </div>

          <div className="beli-ems-license-grid">
            {/* STANDARD */}
            <div className="beli-ems-license-card">
              <div className="beli-ems-license-icon">
                <KeyRound size={27} />
              </div>

              <span className="beli-ems-license-label">STANDARD</span>

              <h3>ABN EMS License</h3>

              <p>
                License untuk perusahaan yang ingin memiliki akses ABN EMS
                dengan deployment enterprise.
              </p>

              <div className="beli-ems-price">
                <small>Starting from</small>
                <strong>Custom</strong>
              </div>

              <ul>
                <li>
                  <Check size={15} />
                  Enterprise platform
                </li>
                <li>
                  <Check size={15} />
                  Core modules
                </li>
                <li>
                  <Check size={15} />
                  License ownership
                </li>
                <li>
                  <Check size={15} />
                  Deployment support
                </li>
              </ul>

              <NavLink to="/contact" className="beli-ems-license-btn">
                Request License
                <ArrowRight size={16} />
              </NavLink>
            </div>

            {/* PROFESSIONAL */}
            <div className="beli-ems-license-card beli-ems-license-featured">
              <div className="beli-ems-featured-badge">ENTERPRISE</div>

              <div className="beli-ems-license-icon">
                <Sparkles size={27} />
              </div>

              <span className="beli-ems-license-label">PROFESSIONAL</span>

              <h3>ABN EMS Enterprise</h3>

              <p>
                Solusi untuk organisasi yang membutuhkan customization,
                integration dan deployment yang lebih luas.
              </p>

              <div className="beli-ems-price">
                <small>Pricing</small>
                <strong>Custom</strong>
              </div>

              <ul>
                <li>
                  <Check size={15} />
                  Full modular architecture
                </li>
                <li>
                  <Check size={15} />
                  Custom modules
                </li>
                <li>
                  <Check size={15} />
                  API integration
                </li>
                <li>
                  <Check size={15} />
                  Enterprise deployment
                </li>
              </ul>

              <NavLink
                to="/contact"
                className="beli-ems-license-btn beli-ems-license-btn-featured"
              >
                Discuss Enterprise
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODULES
      ========================================================= */}
      <section className="beli-ems-modules">
        <div className="beli-ems-container">
          <div className="beli-ems-section-heading beli-ems-heading-center">
            <div className="beli-ems-section-eyebrow">
              <span className="beli-ems-eyebrow-dot" />
              <span>EMS MODULES</span>
            </div>

            <h2>
              Build your enterprise
              <span> ecosystem.</span>
            </h2>

            <p>
              ABN EMS menggunakan pendekatan modular sehingga setiap bagian
              platform dapat dikembangkan sesuai kebutuhan perusahaan.
            </p>
          </div>

          <div className="beli-ems-module-grid">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <div className="beli-ems-module-card" key={module.title}>
                  <span className="beli-ems-module-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="beli-ems-module-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{module.title}</h3>

                  <p>{module.description}</p>

                  <ChevronRight className="beli-ems-module-arrow" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES / DARK ECOSYSTEM
      ========================================================= */}
      <section className="beli-ems-ecosystem">
        <div className="beli-ems-ecosystem-grid" />

        <div className="beli-ems-container beli-ems-ecosystem-content">
          <div className="beli-ems-ecosystem-copy">
            <div className="beli-ems-section-eyebrow beli-ems-section-eyebrow-light">
              <span className="beli-ems-eyebrow-dot" />
              <span>ENTERPRISE TECHNOLOGY</span>
            </div>

            <h2>
              More than software.
              <span> An operational platform.</span>
            </h2>

            <p>
              ABN EMS dirancang sebagai foundation untuk digitalisasi proses
              perusahaan — bukan hanya dashboard, tetapi ecosystem yang dapat
              terhubung dengan application, database, IoT dan infrastructure.
            </p>

            <div className="beli-ems-ecosystem-checks">
              {features.map((feature) => (
                <div key={feature}>
                  <Check size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="beli-ems-architecture">
            <div className="beli-ems-architecture-card">
              <div className="beli-ems-architecture-icon">
                <MonitorCog size={25} />
              </div>

              <strong>APPLICATION</strong>
              <span>ABN EMS Web Platform</span>
            </div>

            <div className="beli-ems-architecture-line">
              <ArrowRight size={17} />
            </div>

            <div className="beli-ems-architecture-card">
              <div className="beli-ems-architecture-icon">
                <Code2 size={25} />
              </div>

              <strong>API</strong>
              <span>Integration Layer</span>
            </div>

            <div className="beli-ems-architecture-line">
              <ArrowRight size={17} />
            </div>

            <div className="beli-ems-architecture-card">
              <div className="beli-ems-architecture-icon">
                <Database size={25} />
              </div>

              <strong>DATA</strong>
              <span>Centralized Database</span>
            </div>

            <div className="beli-ems-architecture-bottom">
              <div>
                <Server size={19} />
                <span>Cloud / Server</span>
              </div>

              <div>
                <Network size={19} />
                <span>IoT / SCADA</span>
              </div>

              <div>
                <Factory size={19} />
                <span>Industrial Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY / DEPLOYMENT
      ========================================================= */}
      <section className="beli-ems-security">
        <div className="beli-ems-container">
          <div className="beli-ems-security-grid">
            <div className="beli-ems-security-card">
              <div className="beli-ems-security-icon">
                <LockKeyhole size={28} />
              </div>

              <span className="beli-ems-section-eyebrow">
                <span className="beli-ems-eyebrow-dot" />
                SECURITY
              </span>

              <h2>
                Designed for
                <span> controlled access.</span>
              </h2>

              <p>
                Enterprise platform membutuhkan kontrol akses yang jelas. ABN
                EMS menggunakan pendekatan role based access dan centralized
                authentication untuk mengatur akses pengguna.
              </p>
            </div>

            <div className="beli-ems-security-list">
              <div>
                <ShieldCheck size={21} />
                <div>
                  <strong>Role Based Access</strong>
                  <span>Pengaturan akses berdasarkan role pengguna.</span>
                </div>
              </div>

              <div>
                <KeyRound size={21} />
                <div>
                  <strong>License Control</strong>
                  <span>License dapat dikontrol berdasarkan deployment.</span>
                </div>
              </div>

              <div>
                <Cloud size={21} />
                <div>
                  <strong>Deployment Flexibility</strong>
                  <span>Cloud, server maupun environment enterprise.</span>
                </div>
              </div>

              <div>
                <Network size={21} />
                <div>
                  <strong>Integration Ready</strong>
                  <span>Siap terhubung dengan sistem lain.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PURCHASE FLOW
      ========================================================= */}
      <section className="beli-ems-purchase">
        <div className="beli-ems-container">
          <div className="beli-ems-section-heading beli-ems-heading-center">
            <div className="beli-ems-section-eyebrow">
              <span className="beli-ems-eyebrow-dot" />
              <span>HOW TO PURCHASE</span>
            </div>

            <h2>
              From license to
              <span> deployment.</span>
            </h2>

            <p>
              Proses pembelian dirancang sederhana agar perusahaan dapat
              berdiskusi, memilih license dan memulai deployment.
            </p>
          </div>

          <div className="beli-ems-purchase-flow">
            <div className="beli-ems-purchase-step">
              <span>01</span>
              <div>
                <ShoppingCart size={22} />
              </div>
              <h3>Choose License</h3>
              <p>Pilih model license dan modul yang dibutuhkan.</p>
            </div>

            <div className="beli-ems-flow-arrow">
              <ArrowRight size={19} />
            </div>

            <div className="beli-ems-purchase-step">
              <span>02</span>
              <div>
                <Users size={22} />
              </div>
              <h3>Discuss</h3>
              <p>Diskusikan kebutuhan perusahaan dan deployment.</p>
            </div>

            <div className="beli-ems-flow-arrow">
              <ArrowRight size={19} />
            </div>

            <div className="beli-ems-purchase-step">
              <span>03</span>
              <div>
                <KeyRound size={22} />
              </div>
              <h3>License</h3>
              <p>ABN menyiapkan license dan konfigurasi platform.</p>
            </div>

            <div className="beli-ems-flow-arrow">
              <ArrowRight size={19} />
            </div>

            <div className="beli-ems-purchase-step">
              <span>04</span>
              <div>
                <Server size={22} />
              </div>
              <h3>Deploy</h3>
              <p>Platform dipersiapkan untuk environment perusahaan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="beli-ems-final">
        <div className="beli-ems-container">
          <div className="beli-ems-final-card">
            <div className="beli-ems-final-glow" />

            <div className="beli-ems-final-icon">
              <KeyRound size={31} />
            </div>

            <div className="beli-ems-final-content">
              <span>ABN EMS LICENSE</span>

              <h2>
                Ready to build your
                <strong> enterprise platform?</strong>
              </h2>

              <p>
                Hubungi ABN untuk mendapatkan informasi license, modul,
                customization dan deployment ABN EMS.
              </p>
            </div>

            <div className="beli-ems-final-actions">
              <NavLink
                to="/contact"
                className="beli-ems-btn beli-ems-btn-light"
              >
                Request License
                <ArrowRight size={17} />
              </NavLink>

              <NavLink
                to="/ems/sewa"
                className="beli-ems-btn beli-ems-btn-outline-light"
              >
                Compare Subscription
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <section className="beli-ems-footer">
        <div className="beli-ems-container beli-ems-footer-content">
          <div>
            <strong>ABN ENTERPRISE MANAGEMENT SYSTEM</strong>
            <span>Enterprise digital platform by ABN.</span>
          </div>

          <div className="beli-ems-footer-designed">Designed by ABN</div>
        </div>
      </section>
    </main>
  );
};

export default BeliEMS;
