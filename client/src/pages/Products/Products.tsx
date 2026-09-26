import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  Network,
  Radio,
  Satellite,
  ServerCog,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import CementIndustry from "../../components/svg/CementIndustry";
import TinIndustry from "../../components/svg/TinIndustry";
import WaterIndustry from "../../components/svg/WaterIndustry";
import EMSIndustry from "../../components/svg/EMSIndustry";
import FleetIndustry from "../../components/svg/FleetIndustry";

import "./Products.css";

/* =========================================================
   ABN INDUSTRIAL INTELLIGENCE
   PRODUCTS & COMMERCIAL SOLUTIONS
   ========================================================= */

type ProductStatus = "AVAILABLE" | "DEMO" | "CUSTOM";

type ProductCategory =
  | "ALL"
  | "ENTERPRISE"
  | "INDUSTRIAL"
  | "FLEET & IOT"
  | "AI & INTELLIGENCE"
  | "COMMERCE"
  | "CONSULTING & TRANSFORMATION";

type Product = {
  id: string;
  name: string;
  category: Exclude<ProductCategory, "ALL">;
  description: string;
  icon: LucideIcon;
  tags: string[];
  featured?: boolean;
  status: ProductStatus;
  url?: string;
  domain?: string;
  background: React.ComponentType;
  backgroundClass?: string;
};

/* =========================================================
   PRODUCTS DATA
   ========================================================= */

const products: Product[] = [
  {
    id: "01",
    name: "ABN EMS",
    category: "ENTERPRISE",
    description:
      "Enterprise management and intelligence platform that unifies business operations, workforce, assets, performance, reporting, and management information.",
    icon: BrainCircuit,
    tags: ["AI", "KPI", "Analytics", "Enterprise"],
    featured: true,
    status: "AVAILABLE",
    url: "https://ems.abn.web.id",
    domain: "ems.abn.web.id",
    background: EMSIndustry,
    backgroundClass: "ems-bg",
  },

  {
    id: "02",
    name: "ABN Fleet",
    category: "FLEET & IOT",
    description:
      "Real-time fleet intelligence platform for GPS tracking, vehicle monitoring, driver visibility, asset tracking, operational control, and performance analytics.",
    icon: Truck,
    tags: ["GPS", "Fleet", "Tracking", "Analytics"],
    featured: true,
    status: "AVAILABLE",
    url: "https://fleet.abn.web.id",
    domain: "fleet.abn.web.id",
    background: FleetIndustry,
    backgroundClass: "fleet-bg",
  },

  {
    id: "03",
    name: "ABN Industrial Intelligence",
    category: "AI & INTELLIGENCE",
    description:
      "Industrial intelligence layer connecting enterprise, operational, IoT, and production data into analytics, anomaly detection, prediction, recommendations, and executive decision support.",
    icon: BrainCircuit,
    tags: ["Industrial", "AI", "Analytics", "KPI"],
    featured: true,
    status: "CUSTOM",
    background: CementIndustry,
    backgroundClass: "industrial-bg",
  },

  {
    id: "04",
    name: "ABN Industrial IoT",
    category: "INDUSTRIAL",
    description:
      "Industrial IoT platform connecting sensors, machines, field devices, and telemetry into real-time operational monitoring and intelligent decision support.",
    icon: Network,
    tags: ["IoT", "Sensors", "Telemetry", "Monitoring"],
    featured: true,
    status: "CUSTOM",
    background: CementIndustry,
    backgroundClass: "iot-bg",
  },

  {
    id: "05",
    name: "ABN Automation",
    category: "INDUSTRIAL",
    description:
      "Industrial automation platform for process monitoring, control systems, SCADA integration, machine connectivity, and operational optimization.",
    icon: Cpu,
    tags: ["PLC", "SCADA", "Control", "Automation"],
    status: "CUSTOM",
    background: CementIndustry,
    backgroundClass: "automation-bg",
  },

  {
    id: "06",
    name: "ABN Controller",
    category: "INDUSTRIAL",
    description:
      "Industrial control platform connecting controllers, field devices, sensors, process signals, data acquisition, monitoring, and automation workflows.",
    icon: Cpu,
    tags: ["PLC", "Control", "Edge", "Automation"],
    status: "CUSTOM",
    url: "https://controller.abn.web.id",
    domain: "controller.abn.web.id",
    background: CementIndustry,
    backgroundClass: "controller-bg",
  },

  {
    id: "07",
    name: "ABN Tracker",
    category: "FLEET & IOT",
    description:
      "Real-time GPS and asset tracking platform for vehicles, mobile assets, field operations, location monitoring, movement history, and operational visibility.",
    icon: Satellite,
    tags: ["GPS", "Realtime", "Assets", "Location"],
    status: "AVAILABLE",
    url: "https://fleet.abn.web.id",
    domain: "fleet.abn.web.id",
    background: FleetIndustry,
    backgroundClass: "tracker-bg",
  },

  {
    id: "08",
    name: "ABN Transmitter",
    category: "INDUSTRIAL",
    description:
      "Industrial instrumentation solution designed to acquire field measurement signals and connect process measurements to modern monitoring and IoT platforms.",
    icon: Radio,
    tags: ["4–20 mA", "IoT", "Telemetry", "Instrumentation"],
    status: "CUSTOM",
    url: "https://semar.abn.web.id",
    domain: "semar.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "transmitter-bg",
  },

  {
    id: "09",
    name: "ABN Water Intelligence",
    category: "INDUSTRIAL",
    description:
      "Smart water and utility intelligence platform for monitoring process conditions, field instrumentation, equipment status, consumption, and operational performance.",
    icon: Waves,
    tags: ["Water", "SCADA", "IoT", "Utility"],
    featured: true,
    status: "DEMO",
    url: "https://water.abn.web.id",
    domain: "water.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "water-bg",
  },

  {
    id: "10",
    name: "TONASA Industrial Intelligence",
    category: "AI & INTELLIGENCE",
    description:
      "Industrial intelligence demonstration for cement operations covering production, assets, maintenance, energy, KPI, operational performance, and executive decision support.",
    icon: Factory,
    tags: ["Cement", "Production", "Asset", "AI"],
    featured: true,
    status: "DEMO",
    url: "https://tonasa.abn.web.id",
    domain: "tonasa.abn.web.id",
    background: CementIndustry,
    backgroundClass: "tonasa-bg",
  },

  {
    id: "11",
    name: "SIG Industrial Intelligence",
    category: "AI & INTELLIGENCE",
    description:
      "Cement industry performance intelligence concept connecting production, energy, assets, operational KPI, analytics, and AI-powered recommendations.",
    icon: Factory,
    tags: ["Cement", "Energy", "KPI", "AI"],
    featured: true,
    status: "DEMO",
    url: "https://sig.abn.web.id",
    domain: "sig.abn.web.id",
    background: CementIndustry,
    backgroundClass: "sig-bg",
  },

  {
    id: "12",
    name: "ABN Mining Intelligence",
    category: "AI & INTELLIGENCE",
    description:
      "Mining intelligence platform connecting production, equipment, operational data, industrial monitoring, performance analytics, risk, and management insight.",
    icon: ServerCog,
    tags: ["Mining", "Production", "IoT", "Analytics"],
    featured: true,
    status: "DEMO",
    url: "https://timah.abn.web.id",
    domain: "timah.abn.web.id",
    background: TinIndustry,
    backgroundClass: "mining-bg",
  },

  {
    id: "13",
    name: "ABN Trade Intelligence",
    category: "COMMERCE",
    description:
      "Digital trading intelligence platform for realtime market monitoring, transaction management, technical analytics, signals, and decision support.",
    icon: Gauge,
    tags: ["Trading", "Market", "Realtime", "Analytics"],
    status: "DEMO",
    url: "https://trade.abn.web.id",
    domain: "trade.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "trade-bg",
  },

  {
    id: "14",
    name: "Mokana Online",
    category: "COMMERCE",
    description:
      "Modern fashion commerce platform for catalog, orders, customers, inventory, promotions, affiliate marketing, analytics, and business administration.",
    icon: ShoppingBag,
    tags: ["Fashion", "Commerce", "Affiliate", "Analytics"],
    featured: true,
    status: "AVAILABLE",
    url: "https://fashion.abn.web.id",
    domain: "fashion.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "fashion-bg",
  },

  {
    id: "15",
    name: "ABN Sembako",
    category: "COMMERCE",
    description:
      "Commerce and distribution platform for catalog management, orders, inventory, customers, promotions, sales operations, and reporting.",
    icon: ShoppingBag,
    tags: ["Commerce", "Orders", "Inventory", "Sales"],
    status: "DEMO",
    url: "https://sembako.abn.web.id",
    domain: "sembako.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "commerce-bg",
  },

  {
    id: "16",
    name: "ABN MyCompany",
    category: "ENTERPRISE",
    description:
      "Digital company management platform centralizing business operations, organizational information, workflows, reporting, users, finance, and performance.",
    icon: Building2,
    tags: ["Business", "Management", "Workflow", "Reports"],
    status: "DEMO",
    url: "https://mycompany.abn.web.id",
    domain: "mycompany.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "mycompany-bg",
  },

  {
    id: "17",
    name: "ABN Mail",
    category: "ENTERPRISE",
    description:
      "Business communication and email infrastructure for organizations requiring controlled domain identity, user management, communication, and security.",
    icon: Mail,
    tags: ["Email", "Identity", "Security", "Business"],
    status: "CUSTOM",
    url: "https://mail.abn.web.id",
    domain: "mail.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "mail-bg",
  },

  {
    id: "18",
    name: "ABN Corporate Platform",
    category: "ENTERPRISE",
    description:
      "Corporate digital platform connecting ABN products, technology capabilities, industrial intelligence, solutions, customer engagement, and digital presence.",
    icon: Globe2,
    tags: ["Corporate", "Digital", "Technology", "Platform"],
    featured: true,
    status: "AVAILABLE",
    url: "https://abn.web.id",
    domain: "abn.web.id",
    background: WaterIndustry,
    backgroundClass: "corporate-bg",
  },

  {
    id: "19",
    name: "ABN Accenture",
    category: "CONSULTING & TRANSFORMATION",
    description:
      "Enterprise transformation and AI consulting platform for strategy, technology transformation, artificial intelligence, data, cloud, cybersecurity, digital engineering, industrial intelligence, and managed services.",
    icon: BrainCircuit,
    tags: ["Consulting", "AI", "Transformation", "Enterprise"],
    featured: true,
    status: "AVAILABLE",
    url: "https://accenture.abn.web.id",
    domain: "accenture.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "accenture-bg",
  },

  {
    id: "20",
    name: "ABN Population Intelligence",
    category: "AI & INTELLIGENCE",
    description:
      "Indonesia population and regional intelligence platform combining demographic data, administrative regions, geographic intelligence, data visualization, and AI-powered decision support for government, enterprise, and strategic planning.",
    icon: Globe2,
    tags: ["Population", "Regional Intelligence", "Geospatial", "AI"],
    featured: true,
    status: "AVAILABLE",
    url: "https://population.abn.web.id/dashboard",
    domain: "population.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "population-bg",
  },
  {
    id: "21",
    name: "ABN Industrial Intelligence Platform",
    category: "INDUSTRIAL",
    description:
      "Enterprise industrial intelligence platform integrating SCADA, IIoT, Fleet & GPS, Maintenance, Energy, Production, Warehouse, real-time operational data, industrial analytics, and AI-powered decision support into a unified Industry 4.0 ecosystem.",
    icon: Factory,
    tags: [
      "Industry 4.0",
      "SCADA",
      "IIoT",
      "Fleet & GPS",
      "Maintenance",
      "Energy",
      "Production",
      "Warehouse",
      "AI",
    ],
    featured: true,
    status: "AVAILABLE",
    url: "https://industry.abn.web.id/dashboard",
    domain: "industry.abn.web.id",
    background: WaterIndustry,
    backgroundClass: "industry40-bg",
  },
];

/* =========================================================
   CATEGORIES
   ========================================================= */

const categories: {
  label: string;
  value: ProductCategory;
  icon: LucideIcon;
}[] = [
  {
    label: "All Products",
    value: "ALL",
    icon: Layers3,
  },
  {
    label: "Enterprise",
    value: "ENTERPRISE",
    icon: Database,
  },
  {
    label: "Industrial",
    value: "INDUSTRIAL",
    icon: Factory,
  },
  {
    label: "Fleet & IoT",
    value: "FLEET & IOT",
    icon: Network,
  },
  {
    label: "AI & Intelligence",
    value: "AI & INTELLIGENCE",
    icon: BrainCircuit,
  },
  {
    label: "Commerce",
    value: "COMMERCE",
    icon: ShoppingBag,
  },
  {
    label: "Consulting & Transformation",
    value: "CONSULTING & TRANSFORMATION",
    icon: Sparkles,
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

function statusDescription(status: ProductStatus) {
  if (status === "AVAILABLE") {
    return "Ready to explore";
  }

  if (status === "DEMO") {
    return "Demonstration environment";
  }

  return "Tailored to your requirements";
}

function requestDemo(product: Product) {
  const subject = encodeURIComponent(`ABN Request Demo — ${product.name}`);

  const body = encodeURIComponent(
    `Hello ABN Team,

I would like to request a demonstration of:

Product: ${product.name}
Category: ${product.category}

Please contact me with the available demo schedule.

Thank you.`,
  );

  window.location.href = `mailto:info@abn.web.id?subject=${subject}&body=${body}`;
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const Background = product.background;

  return (
    <article className={`product-card ${product.featured ? "featured" : ""}`}>
      {/* INDUSTRY SVG */}

      <div
        className={`product-card-background ${product.backgroundClass ?? ""}`}
        aria-hidden="true"
      >
        <Background />
      </div>

      {/* DARK OVERLAY */}

      <div className="product-card-overlay" />

      {/* CARD */}

      <div className="product-card-inner">
        <div className="product-card-top">
          <div className="product-icon">
            <Icon size={21} strokeWidth={1.8} />
          </div>

          <div className="product-top-right">
            <span className="product-number">{product.id}</span>

            <span className={`product-status ${product.status.toLowerCase()}`}>
              <span className="product-status-dot" />
              {product.status}
            </span>
          </div>
        </div>

        <div className="product-card-content">
          <span className="product-category">{product.category}</span>

          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <div className="product-tags">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="product-availability">
            <CheckCircle2 size={14} />
            <span>{statusDescription(product.status)}</span>
          </div>

          {product.domain && (
            <div className="product-domain">
              <Globe2 size={12} />
              <span>{product.domain}</span>
            </div>
          )}

          {/* =====================================================
              PRODUCT ACTION
          ====================================================== */}

          <div className="product-actions">
            {product.status === "CUSTOM" ? (
              <NavLink
                to={`/custom-solution-request?product=${encodeURIComponent(
                  product.name,
                )}`}
                className="product-button primary"
              >
                Request Proposal
                <ArrowRight size={14} />
              </NavLink>
            ) : product.url ? (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-button primary"
              >
                {product.status === "DEMO" ? "Live Demo" : "Open Platform"}

                <ArrowRight size={14} />
              </a>
            ) : (
              <button
                type="button"
                className="product-button primary"
                onClick={() => requestDemo(product)}
              >
                Request Demo
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PRODUCTS PAGE
   ========================================================= */

function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("ALL");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "ALL") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const featuredProducts = useMemo(
    () => products.filter((product) => product.featured),
    [],
  );

  const availableCount = products.filter(
    (product) => product.status === "AVAILABLE",
  ).length;

  const demoCount = products.filter(
    (product) => product.status === "DEMO",
  ).length;

  const customCount = products.filter(
    (product) => product.status === "CUSTOM",
  ).length;

  return (
    <main className="products-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <header className="products-header">
        <div className="products-header-content">
          <span className="products-eyebrow">
            ABN DIGITAL & INDUSTRIAL TECHNOLOGY
          </span>

          <h1>
            Products Built for
            <br />
            <span>Intelligent Operations.</span>
          </h1>

          <p>
            ABN develops enterprise, industrial, IoT, AI, fleet, and commerce
            platforms designed to transform operational data into visibility,
            intelligence, and business value.
          </p>

          <div className="products-header-actions">
            <a href="#product-catalog" className="products-primary-button">
              Explore Products
              <ArrowRight size={16} />
            </a>

            <a
              href="mailto:info@abn.web.id?subject=ABN%20Business%20Inquiry"
              className="products-secondary-button"
            >
              Talk to ABN
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        <div className="products-header-badge">
          <div className="products-badge-icon">
            <Globe2 size={20} />
          </div>

          <div>
            <strong>ABN PRODUCT ECOSYSTEM</strong>
            <small>Connected • Intelligent • Scalable</small>
          </div>
        </div>
      </header>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="products-stats">
        <div className="product-stat">
          <span>Total Platforms</span>
          <strong>{products.length}</strong>
        </div>

        <div className="product-stat available">
          <span>Available</span>
          <strong>{availableCount}</strong>
        </div>

        <div className="product-stat demo">
          <span>Demo</span>
          <strong>{demoCount}</strong>
        </div>

        <div className="product-stat custom">
          <span>Custom</span>
          <strong>{customCount}</strong>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="products-intro">
        <div>
          <span className="section-eyebrow">ABN PRODUCT ECOSYSTEM</span>

          <h2>
            Digital Products for
            <br />
            <span>Real-World Operations.</span>
          </h2>
        </div>

        <p>
          From enterprise management to industrial intelligence, ABN provides
          modular technology platforms that can operate independently or become
          part of a unified intelligence ecosystem.
        </p>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section className="products-featured">
        <div className="products-section-heading">
          <div>
            <span className="section-eyebrow">FEATURED PLATFORMS</span>
            <h2>Solutions Ready for Business.</h2>
          </div>

          <p>Explore ABN's core platforms and intelligence solutions.</p>
        </div>

        <div className="products-featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* =====================================================
          CATALOG
      ====================================================== */}

      <section id="product-catalog" className="products-catalog">
        <div className="products-section-heading">
          <div>
            <span className="section-eyebrow">PRODUCT CATALOG</span>
            <h2>Explore ABN Platforms.</h2>
          </div>

          <span className="products-count">
            {filteredProducts.length} platforms
          </span>
        </div>

        <div className="products-filters">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.value}
                type="button"
                className={`products-filter ${
                  activeCategory === category.value ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                <Icon size={15} />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* =====================================================
          DEPLOYMENT
      ====================================================== */}

      <section className="products-deployment">
        <div className="products-section-heading">
          <div>
            <span className="section-eyebrow">DEPLOYMENT OPTIONS</span>

            <h2>
              Deploy the Way
              <br />
              <span>Your Business Needs.</span>
            </h2>
          </div>

          <p>
            Choose a ready platform or work with ABN to create an environment
            around your operational, integration, infrastructure, and security
            requirements.
          </p>
        </div>

        <div className="deployment-grid">
          <article className="deployment-card">
            <div className="deployment-icon">
              <Cloud size={21} />
            </div>

            <h3>SaaS</h3>

            <p>
              Ready-to-use cloud platform with managed infrastructure and
              continuous updates.
            </p>

            <span>FAST DEPLOYMENT</span>
          </article>

          <article className="deployment-card">
            <div className="deployment-icon">
              <HardDriveIcon />
            </div>

            <h3>Private Cloud</h3>

            <p>
              Dedicated environment for organizations requiring greater control
              over data and infrastructure.
            </p>

            <span>ENTERPRISE READY</span>
          </article>

          <article className="deployment-card">
            <div className="deployment-icon">
              <ServerCog size={21} />
            </div>

            <h3>On-Premise</h3>

            <p>
              Deploy inside your own infrastructure for specific security,
              compliance, and operational requirements.
            </p>

            <span>INFRASTRUCTURE CONTROL</span>
          </article>

          <article className="deployment-card">
            <div className="deployment-icon">
              <Settings2 size={21} />
            </div>

            <h3>Custom Enterprise</h3>

            <p>
              Tailored solutions integrating ERP, SAP, SCADA, IoT, APIs,
              databases, and existing business systems.
            </p>

            <span>BUILT AROUND YOUR OPERATION</span>
          </article>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE LAYER
      ====================================================== */}

      <section className="products-intelligence">
        <div className="intelligence-copy">
          <span className="section-eyebrow">ABN INTELLIGENCE LAYER</span>

          <h2>
            Products That Work
            <br />
            <span>Together.</span>
          </h2>

          <p>
            ABN products are designed as connected building blocks. Each
            platform can operate independently while sharing information through
            the ABN Intelligence Layer.
          </p>

          <div className="intelligence-points">
            <div className="intelligence-point">
              <ShieldCheck size={18} />
              <span>Secure enterprise and industrial connectivity</span>
            </div>

            <div className="intelligence-point">
              <Gauge size={18} />
              <span>Real-time operational visibility and performance</span>
            </div>

            <div className="intelligence-point">
              <BrainCircuit size={18} />
              <span>AI-powered insights and decision support</span>
            </div>
          </div>
        </div>

        <div className="intelligence-stack">
          <div className="stack-item">
            <span>01</span>

            <div>
              <strong>DATA SOURCES</strong>
              <small>ERP • SAP • IoT • GPS • SCADA • APIs • Databases</small>
            </div>
          </div>

          <div className="stack-connector" />

          <div className="stack-item active">
            <span>02</span>

            <div>
              <strong>ABN INTELLIGENCE LAYER</strong>
              <small>Integration • Analytics • AI • Monitoring</small>
            </div>
          </div>

          <div className="stack-connector" />

          <div className="stack-item">
            <span>03</span>

            <div>
              <strong>BUSINESS DECISION</strong>
              <small>KPI • Insights • Alerts • Actions • Optimization</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENTERPRISE FOUNDATION
      ====================================================== */}

      <section className="products-foundation">
        <div className="products-section-heading">
          <div>
            <span className="section-eyebrow">ENTERPRISE FOUNDATION</span>

            <h2>
              Built for Controlled
              <br />
              <span>Business Operations.</span>
            </h2>
          </div>

          <p>
            Security, identity, integration, infrastructure, and intelligence
            are designed as part of the platform foundation.
          </p>
        </div>

        <div className="foundation-grid">
          <div className="foundation-card">
            <ShieldCheck size={20} />

            <strong>Security & Identity</strong>

            <span>
              Authentication, authorization, RBAC, auditability, and controlled
              access.
            </span>
          </div>

          <div className="foundation-card">
            <Network size={20} />

            <strong>System Integration</strong>

            <span>
              ERP, SAP, APIs, databases, SCADA, IoT, GPS, and operational
              systems.
            </span>
          </div>

          <div className="foundation-card">
            <Cloud size={20} />

            <strong>Cloud & Infrastructure</strong>

            <span>
              SaaS, private cloud, on-premise, and hybrid deployment models.
            </span>
          </div>

          <div className="foundation-card">
            <BrainCircuit size={20} />

            <strong>AI & Analytics</strong>

            <span>
              Analytics, anomaly detection, prediction, recommendation, and
              decision intelligence.
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL SHOWROOM
      ====================================================== */}

      <section className="products-showroom">
        <div>
          <span className="section-eyebrow">ABN DIGITAL SHOWROOM</span>

          <h2>
            See ABN Technology
            <br />
            <span>In Action.</span>
          </h2>

          <p>
            Explore ABN demonstrations across enterprise management, industrial
            operations, fleet, IoT, automation, commerce, and executive
            intelligence.
          </p>
        </div>

        <NavLink to="/demos" className="products-showroom-button">
          Explore ABN Demos
          <ArrowRight size={16} />
        </NavLink>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="products-cta">
        <div className="products-cta-icon">
          <Sparkles size={22} />
        </div>

        <div className="products-cta-content">
          <span className="section-eyebrow">BUILD WITH ABN</span>

          <h2>
            Turn Your Technology
            <br />
            <span>Into Intelligence.</span>
          </h2>

          <p>
            Start with a product demonstration, discuss your requirements, or
            request a customized enterprise proposal.
          </p>
        </div>

        <div className="products-cta-actions">
          <a
            href="mailto:info@abn.web.id?subject=ABN%20Request%20Demo"
            className="products-primary-button"
          >
            Request Demo
            <ArrowRight size={16} />
          </a>

          <NavLink
            to="/custom-solution-request"
            className="products-secondary-button"
          >
            Request Proposal
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL ICON
   ========================================================= */

function HardDriveIcon() {
  return <Database size={21} />;
}

export default Products;
