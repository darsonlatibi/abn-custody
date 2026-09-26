import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  //Code2,
  Database,
  Factory,
  Headset,
  KeyRound,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import "./SewaEMS.css";

const modules = [
  {
    icon: Users,
    title: "Human Resources",
    description:
      "Kelola data karyawan, administrasi SDM, dan proses HR dalam satu sistem.",
    tag: "HR",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Pantau aset kendaraan, aktivitas armada, dan operasional fleet.",
    tag: "FLEET",
  },
  {
    icon: Layers3,
    title: "Inventory",
    description: "Kelola stok, pergerakan barang, dan visibilitas persediaan.",
    tag: "INVENTORY",
  },
  {
    icon: Wallet,
    title: "Finance",
    description: "Dukung proses keuangan dan pengelolaan transaksi bisnis.",
    tag: "FINANCE",
  },
  {
    icon: Workflow,
    title: "Procurement",
    description: "Kelola kebutuhan pengadaan dan alur proses procurement.",
    tag: "PROCUREMENT",
  },
  {
    icon: Network,
    title: "CRM",
    description:
      "Bangun pengelolaan relasi pelanggan dalam ekosistem enterprise.",
    tag: "CRM",
  },
];

const subscriptionSteps = [
  {
    number: "01",
    title: "Pilih Paket",
    description:
      "Tentukan kebutuhan perusahaan, modul, dan periode subscription.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Konfigurasi",
    description:
      "Tim ABN membantu menyiapkan konfigurasi sistem sesuai kebutuhan.",
    icon: Server,
  },
  {
    number: "03",
    title: "Aktivasi",
    description:
      "Subscription diaktifkan setelah proses administrasi dan pembayaran.",
    icon: KeyRound,
  },
  {
    number: "04",
    title: "Mulai Operasional",
    description:
      "Gunakan sistem sesuai cakupan layanan dan periode berlangganan.",
    icon: Workflow,
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "Biaya Berlangganan",
    description:
      "Gunakan model subscription dengan periode dan biaya yang disepakati.",
  },
  {
    icon: Layers3,
    title: "Modular & Fleksibel",
    description:
      "Sesuaikan cakupan modul dengan kebutuhan operasional perusahaan.",
  },
  {
    icon: ShieldCheck,
    title: "Akses Terkelola",
    description:
      "Pengelolaan akses sistem mengikuti konfigurasi dan ketentuan layanan.",
  },
  {
    icon: Headset,
    title: "Dukungan ABN",
    description:
      "Pilihan dukungan dan onboarding dapat disesuaikan dengan paket layanan.",
  },
];

const technologies = [
  "Enterprise Software",
  "Cloud Infrastructure",
  "Role-Based Access",
  "Modular Architecture",
  "System Integration",
  "Operational Data",
];

const SewaEMS: React.FC = () => {
  return (
    <main className="sewa-page">
      {/* HERO */}
      <section className="sewa-hero">
        <div className="sewa-hero-grid" />

        <div className="sewa-container sewa-hero-content">
          <div className="sewa-hero-copy">
            <div className="sewa-eyebrow">
              <span className="sewa-eyebrow-dot" />
              ABN ENTERPRISE MANAGEMENT SYSTEM
            </div>

            <h1>
              Sewa ABN EMS.
              <br />
              <span>Scale Your Operations.</span>
            </h1>

            <p className="sewa-hero-description">
              Kelola operasional perusahaan melalui satu platform enterprise
              terintegrasi. Mulai dengan model subscription yang dapat
              disesuaikan dengan kebutuhan bisnis Anda.
            </p>

            <div className="sewa-hero-actions">
              <a href="#sewa-packages" className="sewa-btn sewa-btn-primary">
                Lihat Paket Subscription
                <ArrowRight size={17} />
              </a>

              <NavLink to="/contact" className="sewa-btn sewa-btn-secondary">
                Konsultasi dengan ABN
                <ChevronRight size={17} />
              </NavLink>
            </div>

            <div className="sewa-hero-points">
              <div>
                <Check size={15} />
                Monthly / Yearly
              </div>
              <div>
                <Check size={15} />
                Modular Enterprise
              </div>
              <div>
                <Check size={15} />
                Guided Onboarding
              </div>
            </div>
          </div>

          {/* SYSTEM VISUAL */}
          <div className="sewa-hero-visual">
            <div className="sewa-system-card">
              <div className="sewa-system-header">
                <div>
                  <span className="sewa-system-label">
                    ABN DIGITAL PLATFORM
                  </span>
                  <strong>Enterprise Subscription</strong>
                </div>

                <div className="sewa-live-status">
                  <span />
                  EMS PLATFORM
                </div>
              </div>

              <div className="sewa-system-line" />

              <div className="sewa-system-core">
                <div className="sewa-core-ring sewa-ring-one" />
                <div className="sewa-core-ring sewa-ring-two" />

                <div className="sewa-core-center">
                  <Layers3 size={29} />
                  <span>ABN EMS</span>
                </div>

                <div className="sewa-orbit-label sewa-orbit-top">
                  ENTERPRISE
                </div>
                <div className="sewa-orbit-label sewa-orbit-bottom">
                  SUBSCRIPTION
                </div>
              </div>

              <div className="sewa-system-nodes">
                <div className="sewa-system-node">
                  <Users size={18} />
                  <span>HR</span>
                </div>

                <div className="sewa-system-node">
                  <Truck size={18} />
                  <span>FLEET</span>
                </div>

                <div className="sewa-system-node">
                  <Database size={18} />
                  <span>DATA</span>
                </div>

                <div className="sewa-system-node">
                  <Wallet size={18} />
                  <span>FINANCE</span>
                </div>
              </div>

              <div className="sewa-system-footer">
                <div>
                  <span>ACCESS MODEL</span>
                  <strong>Subscription</strong>
                </div>

                <div>
                  <span>PLATFORM</span>
                  <strong>ABN EMS</strong>
                </div>

                <div>
                  <span>DEPLOYMENT</span>
                  <strong>Configured</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sewa-intro">
        <div className="sewa-container">
          <div className="sewa-section-heading">
            <span className="sewa-section-eyebrow">SUBSCRIPTION MODEL</span>

            <h2>
              Enterprise capability.
              <br />
              <span>Flexible subscription.</span>
            </h2>

            <p>
              ABN EMS menghadirkan ekosistem pengelolaan bisnis terintegrasi
              dengan model berlangganan. Pilih cakupan layanan berdasarkan
              kebutuhan dan skala operasional Anda.
            </p>
          </div>

          <div className="sewa-intro-grid">
            <div className="sewa-intro-main">
              <div className="sewa-intro-icon">
                <Cloud size={28} />
              </div>

              <h3>Satu platform untuk mengelola banyak proses bisnis.</h3>

              <p>
                Sewa ABN EMS memberikan akses penggunaan sistem berdasarkan
                paket dan periode subscription yang disepakati.
              </p>

              <p>
                Perusahaan dapat memilih modul yang relevan, membangun alur
                kerja yang lebih terstruktur, dan mengembangkan penggunaan
                sistem seiring perubahan kebutuhan bisnis.
              </p>

              <NavLink to="/contact" className="sewa-text-link">
                Diskusikan kebutuhan perusahaan
                <ArrowRight size={16} />
              </NavLink>
            </div>

            <div className="sewa-intro-stats">
              <div className="sewa-stat-card">
                <div className="sewa-stat-icon">
                  <Layers3 size={21} />
                </div>
                <strong>Modular</strong>
                <span>Pilih modul sesuai kebutuhan</span>
              </div>

              <div className="sewa-stat-card">
                <div className="sewa-stat-icon">
                  <Wallet size={21} />
                </div>
                <strong>Recurring</strong>
                <span>Periode subscription terencana</span>
              </div>

              <div className="sewa-stat-card">
                <div className="sewa-stat-icon">
                  <Network size={21} />
                </div>
                <strong>Integrated</strong>
                <span>Ekosistem enterprise terhubung</span>
              </div>

              <div className="sewa-stat-card">
                <div className="sewa-stat-icon">
                  <ShieldCheck size={21} />
                </div>
                <strong>Managed Access</strong>
                <span>Akses sesuai ketentuan layanan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="sewa-packages" id="sewa-packages">
        <div className="sewa-container">
          <div className="sewa-section-heading sewa-heading-center">
            <span className="sewa-section-eyebrow">EMS SUBSCRIPTION PLANS</span>

            <h2>
              Pilih model <span>subscription.</span>
            </h2>

            <p>
              Mulai dari kebutuhan dasar hingga konfigurasi enterprise. Paket
              dan biaya akhir dikonfirmasi berdasarkan modul, jumlah pengguna,
              serta kebutuhan implementasi.
            </p>
          </div>

          <div className="sewa-package-grid">
            {/* MONTHLY */}
            <article className="sewa-package-card">
              <div className="sewa-package-top">
                <div className="sewa-package-icon">
                  <Layers3 size={23} />
                </div>

                <span className="sewa-package-label">FLEXIBLE PLAN</span>
              </div>

              <h3>Monthly Subscription</h3>

              <p className="sewa-package-description">
                Model berlangganan bulanan untuk kebutuhan operasional yang
                memerlukan fleksibilitas periode.
              </p>

              <div className="sewa-package-price">
                <strong>Contact</strong>
                <span>for pricing</span>
              </div>

              <div className="sewa-package-divider" />

              <ul>
                <li>
                  <Check size={15} />
                  Periode bulanan
                </li>
                <li>
                  <Check size={15} />
                  Pilihan modul EMS
                </li>
                <li>
                  <Check size={15} />
                  Konfigurasi sesuai paket
                </li>
                <li>
                  <Check size={15} />
                  Ketentuan layanan disepakati
                </li>
              </ul>

              <NavLink
                to="/contact"
                className="sewa-package-btn sewa-package-btn-outline"
              >
                Request Monthly Plan
                <ArrowRight size={16} />
              </NavLink>
            </article>

            {/* YEARLY */}
            <article className="sewa-package-card sewa-package-featured">
              <div className="sewa-package-badge">
                <Sparkles size={13} />
                ANNUAL SUBSCRIPTION
              </div>

              <div className="sewa-package-top">
                <div className="sewa-package-icon">
                  <Workflow size={23} />
                </div>

                <span className="sewa-package-label">LONG-TERM PLAN</span>
              </div>

              <h3>Yearly Subscription</h3>

              <p className="sewa-package-description">
                Model berlangganan tahunan untuk perencanaan penggunaan sistem
                dalam periode yang lebih panjang.
              </p>

              <div className="sewa-package-price">
                <strong>Contact</strong>
                <span>for pricing</span>
              </div>

              <div className="sewa-package-divider" />

              <ul>
                <li>
                  <Check size={15} />
                  Periode tahunan
                </li>
                <li>
                  <Check size={15} />
                  Pilihan modul EMS
                </li>
                <li>
                  <Check size={15} />
                  Konfigurasi sesuai paket
                </li>
                <li>
                  <Check size={15} />
                  Evaluasi kebutuhan layanan
                </li>
              </ul>

              <NavLink
                to="/contact"
                className="sewa-package-btn sewa-package-btn-primary"
              >
                Request Yearly Plan
                <ArrowRight size={16} />
              </NavLink>
            </article>

            {/* CUSTOM */}
            <article className="sewa-package-card">
              <div className="sewa-package-top">
                <div className="sewa-package-icon">
                  <Factory size={23} />
                </div>

                <span className="sewa-package-label">ENTERPRISE SOLUTION</span>
              </div>

              <h3>Custom Subscription</h3>

              <p className="sewa-package-description">
                Untuk organisasi yang membutuhkan kombinasi modul, integrasi,
                atau konfigurasi khusus.
              </p>

              <div className="sewa-package-price">
                <strong>Custom</strong>
                <span>quotation</span>
              </div>

              <div className="sewa-package-divider" />

              <ul>
                <li>
                  <Check size={15} />
                  Analisis kebutuhan perusahaan
                </li>
                <li>
                  <Check size={15} />
                  Kombinasi modul
                </li>
                <li>
                  <Check size={15} />
                  Evaluasi kebutuhan integrasi
                </li>
                <li>
                  <Check size={15} />
                  Proposal layanan khusus
                </li>
              </ul>

              <NavLink
                to="/contact"
                className="sewa-package-btn sewa-package-btn-outline"
              >
                Request Custom Plan
                <ArrowRight size={16} />
              </NavLink>
            </article>
          </div>

          <p className="sewa-package-note">
            Harga, cakupan modul, jumlah pengguna, onboarding, dan dukungan
            layanan dikonfirmasi dalam penawaran resmi ABN.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="sewa-modules">
        <div className="sewa-container">
          <div className="sewa-section-heading">
            <span className="sewa-section-eyebrow">ENTERPRISE MODULES</span>

            <h2>
              Modul bisnis dalam <span>satu ekosistem.</span>
            </h2>

            <p>
              Susun layanan subscription dengan modul yang relevan terhadap
              proses bisnis dan prioritas perusahaan Anda.
            </p>
          </div>

          <div className="sewa-module-grid">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <article className="sewa-module-card" key={module.tag}>
                  <div className="sewa-module-card-top">
                    <div className="sewa-module-icon">
                      <Icon size={23} />
                    </div>

                    <span>{module.tag}</span>
                  </div>

                  <h3>{module.title}</h3>
                  <p>{module.description}</p>

                  <div className="sewa-module-card-footer">
                    <span>EMS MODULE</span>
                    <Layers3 size={15} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION FLOW */}
      <section className="sewa-flow">
        <div className="sewa-flow-grid" />

        <div className="sewa-container sewa-flow-content">
          <div className="sewa-flow-copy">
            <span className="sewa-section-eyebrow">HOW SUBSCRIPTION WORKS</span>

            <h2>
              Dari kebutuhan
              <br />
              menjadi <span>sistem aktif.</span>
            </h2>

            <p>
              Proses subscription dimulai dengan identifikasi kebutuhan bisnis,
              dilanjutkan konfigurasi, aktivasi, dan penggunaan sistem sesuai
              paket layanan.
            </p>

            <div className="sewa-flow-checks">
              <div>
                <Check size={16} />
                Scope layanan lebih jelas
              </div>
              <div>
                <Check size={16} />
                Periode penggunaan terdefinisi
              </div>
              <div>
                <Check size={16} />
                Aktivasi berdasarkan kesepakatan
              </div>
            </div>
          </div>

          <div className="sewa-flow-steps">
            {subscriptionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="sewa-flow-step" key={step.number}>
                  <div className="sewa-flow-step-icon">
                    <Icon size={22} />
                  </div>

                  <div className="sewa-flow-step-copy">
                    <span>STEP {step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <ArrowRight className="sewa-flow-step-arrow" size={18} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sewa-benefits">
        <div className="sewa-container">
          <div className="sewa-section-heading sewa-heading-center">
            <span className="sewa-section-eyebrow">
              WHY SUBSCRIBE TO ABN EMS
            </span>

            <h2>
              Dirancang untuk <span>kebutuhan bisnis.</span>
            </h2>

            <p>
              Model subscription memberikan struktur penggunaan sistem
              berdasarkan cakupan layanan yang disepakati.
            </p>
          </div>

          <div className="sewa-benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="sewa-benefit-card" key={benefit.title}>
                  <div className="sewa-benefit-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="sewa-technology">
        <div className="sewa-container">
          <div className="sewa-technology-header">
            <div>
              <span className="sewa-section-eyebrow">PLATFORM FOUNDATION</span>

              <h2>
                Enterprise system.
                <br />
                <span>Connected operations.</span>
              </h2>
            </div>

            <p>
              ABN EMS dirancang sebagai platform modular yang dapat menjadi
              bagian dari ekosistem digital perusahaan. Cakupan integrasi dan
              infrastruktur mengikuti konfigurasi layanan yang disepakati.
            </p>
          </div>

          <div className="sewa-tech-stack">
            {technologies.map((technology) => (
              <div className="sewa-tech-item" key={technology}>
                <span className="sewa-tech-dot" />
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sewa-cta">
        <div className="sewa-container">
          <div className="sewa-cta-card">
            <div className="sewa-cta-glow" />

            <div className="sewa-cta-icon">
              <KeyRound size={29} />
            </div>

            <div className="sewa-cta-content">
              <span>START YOUR EMS SUBSCRIPTION</span>

              <h2>
                Siap mengembangkan
                <br />
                operasional perusahaan?
              </h2>

              <p>
                Diskusikan kebutuhan modul, periode subscription, dan
                konfigurasi ABN EMS bersama tim ABN.
              </p>
            </div>

            <NavLink to="/contact" className="sewa-btn sewa-btn-light">
              Konsultasi Sekarang
              <ArrowRight size={17} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sewa-footer">
        <div className="sewa-container sewa-footer-content">
          <div>
            <strong>ABN ENTERPRISE MANAGEMENT SYSTEM</strong>
            <span>Industrial Digital Technology</span>
          </div>

          <div className="sewa-footer-designed">Designed by ABN</div>
        </div>
      </footer>
    </main>
  );
};

export default SewaEMS;
