import React, { useMemo, useState } from "react";
import {
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Droplets,
  Globe2,
  //Map,
  Package,
  Radar,
  ShoppingCart,
  Truck,
  //Users,
  X,
  Zap,
} from "lucide-react";
import "./CatalogProduct.css";
/* =========================================================
 * TYPES
 * ========================================================= */

type ProductType = "RENT" | "SELL" | "CUSTOM";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  type: ProductType;
  category: string;
  icon: React.ElementType;
  price: string;
  period?: string;
  featured?: boolean;
  features: string[];
};

/* =========================================================
 * PRODUCT DATA
 * ========================================================= */

const PRODUCTS: Product[] = [
  {
    id: "abn-ems",
    name: "ABN EMS",
    subtitle: "Enterprise Management System",
    description:
      "Platform management terintegrasi untuk mengelola operasional, KPI, HR, inventory, produksi, dan executive intelligence.",
    type: "RENT",
    category: "Enterprise",
    icon: Building2,
    price: "Rp1.500.000",
    period: "/bulan",
    featured: true,
    features: [
      "Executive Dashboard",
      "Operational Management",
      "HR & Employee",
      "Inventory",
      "KPI & Reporting",
      "AI Intelligence",
    ],
  },

  {
    id: "abn-regional",
    name: "Indonesia Regional Intelligence",
    subtitle: "Regional Data & Intelligence",
    description:
      "Platform intelligence wilayah Indonesia dengan data provinsi, kabupaten, kecamatan, desa, demografi dan ekonomi.",
    type: "RENT",
    category: "Intelligence",
    icon: Globe2,
    price: "Rp999.000",
    period: "/bulan",
    features: [
      "Regional Dashboard",
      "Indonesia Map",
      "Population Data",
      "Demographic Intelligence",
      "Economic Data",
      "API Integration",
    ],
  },

  {
    id: "abn-tracker",
    name: "ABN Tracker",
    subtitle: "Asset & Fleet Monitoring",
    description:
      "Sistem monitoring kendaraan, armada, aset dan aktivitas lapangan secara realtime.",
    type: "RENT",
    category: "Monitoring",
    icon: Truck,
    price: "Rp299.000",
    period: "/bulan",
    features: [
      "Realtime Tracking",
      "Fleet Monitoring",
      "GPS Integration",
      "Trip History",
      "Geofencing",
      "Reports",
    ],
  },

  {
    id: "abn-trading",
    name: "ABN Trading Dashboard",
    subtitle: "Realtime Trading Intelligence",
    description:
      "Dashboard trading realtime dengan market data, chart, technical indicators dan trading intelligence.",
    type: "RENT",
    category: "Trading",
    icon: BarChart3,
    price: "Rp299.000",
    period: "/bulan",
    features: [
      "Realtime Market Data",
      "Trading Chart",
      "Technical Indicators",
      "Realtime SSE",
      "Socket.IO",
      "Trading Signals",
    ],
  },

  {
    id: "abn-water",
    name: "ABN Water",
    subtitle: "Water Monitoring System",
    description:
      "Platform monitoring sistem air, parameter sensor, distribusi dan kondisi operasional secara realtime.",
    type: "RENT",
    category: "Industrial",
    icon: Droplets,
    price: "Rp499.000",
    period: "/bulan",
    features: [
      "Realtime Monitoring",
      "Sensor Integration",
      "Water Parameters",
      "Alarm & Notification",
      "Historical Data",
      "Dashboard",
    ],
  },

  {
    id: "abn-ai",
    name: "ABN Executive Intelligence",
    subtitle: "AI Business Intelligence",
    description:
      "Executive intelligence untuk membantu manajemen membaca data, KPI, trend dan kondisi bisnis.",
    type: "RENT",
    category: "AI",
    icon: Bot,
    price: "Rp2.500.000",
    period: "/bulan",
    features: [
      "AI Analysis",
      "Executive Report",
      "KPI Intelligence",
      "Trend Analysis",
      "Business Insight",
      "Automated Reporting",
    ],
  },

  {
    id: "react-dashboard",
    name: "ABN React Dashboard Starter",
    subtitle: "React Admin Dashboard",
    description:
      "Starter dashboard React untuk developer yang membutuhkan struktur dashboard modern dan siap dikembangkan.",
    type: "SELL",
    category: "Developer",
    icon: Code2,
    price: "Rp499.000",
    features: [
      "React",
      "Admin Dashboard",
      "Responsive UI",
      "Reusable Components",
      "Authentication Ready",
      "Developer Source Code",
    ],
  },

  {
    id: "express-api",
    name: "ABN Express API Starter",
    subtitle: "Node.js Backend Starter",
    description:
      "Starter backend Node.js + Express untuk membangun aplikasi API dengan cepat.",
    type: "SELL",
    category: "Developer",
    icon: Zap,
    price: "Rp399.000",
    features: [
      "Node.js",
      "Express",
      "REST API",
      "Authentication Ready",
      "MySQL Ready",
      "Source Code",
    ],
  },

  {
    id: "react-express",
    name: "ABN Fullstack Starter",
    subtitle: "React + Express + MySQL",
    description:
      "Starter fullstack untuk membangun aplikasi bisnis menggunakan React, Express dan MySQL.",
    type: "SELL",
    category: "Developer",
    icon: Package,
    price: "Rp999.000",
    features: [
      "React Frontend",
      "Express Backend",
      "MySQL",
      "Authentication",
      "REST API",
      "Source Code",
    ],
  },

  {
    id: "custom",
    name: "ABN Custom Solution",
    subtitle: "Custom Enterprise Development",
    description:
      "Solusi software khusus sesuai kebutuhan bisnis, industri dan sistem existing perusahaan.",
    type: "CUSTOM",
    category: "Enterprise",
    icon: Radar,
    price: "Custom",
    features: [
      "Custom Development",
      "System Integration",
      "API Integration",
      "Database Design",
      "Deployment",
      "Maintenance & Support",
    ],
  },
];

/* =========================================================
 * BADGE
 * ========================================================= */

const typeConfig: Record<
  ProductType,
  {
    label: string;
    className: string;
  }
> = {
  RENT: {
    label: "RENT / SaaS",
    className: "bg-success-subtle text-success",
  },
  SELL: {
    label: "SELL / Source",
    className: "bg-primary-subtle text-primary",
  },
  CUSTOM: {
    label: "CUSTOM",
    className: "bg-warning-subtle text-warning-emphasis",
  },
};

/* =========================================================
 * COMPONENT
 * ========================================================= */

const CatalogProduct: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"ALL" | ProductType>("ALL");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "ALL") {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => product.type === activeFilter);
  }, [activeFilter]);

  const stats = useMemo(() => {
    return {
      total: PRODUCTS.length,
      rent: PRODUCTS.filter((p) => p.type === "RENT").length,
      sell: PRODUCTS.filter((p) => p.type === "SELL").length,
      custom: PRODUCTS.filter((p) => p.type === "CUSTOM").length,
    };
  }, []);

  return (
    <div className="content-wrapper catalog-product-page">
      {/* =====================================================
       * HEADER
       * ===================================================== */}

      <section className="content-header">
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div>
              <h1 className="mb-1 fw-bold">ABN Product Catalog</h1>

              <p className="text-muted mb-0">
                Software • SaaS • Intelligence • Enterprise Solutions
              </p>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setActiveFilter("ALL")}
            >
              <ShoppingCart size={17} className="me-2" />
              All Products
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
       * CONTENT
       * ===================================================== */}

      <section className="content">
        <div className="container-fluid">
          {/* =================================================
           * STAT CARDS
           * ================================================= */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="small-box bg-white border shadow-sm">
                <div className="inner">
                  <h3>{stats.total}</h3>
                  <p>Total Products</p>
                </div>

                <div className="icon text-primary">
                  <Package size={60} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="small-box bg-white border shadow-sm">
                <div className="inner">
                  <h3>{stats.rent}</h3>
                  <p>RENT / SaaS</p>
                </div>

                <div className="icon text-success">
                  <Zap size={60} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="small-box bg-white border shadow-sm">
                <div className="inner">
                  <h3>{stats.sell}</h3>
                  <p>SELL / Source</p>
                </div>

                <div className="icon text-primary">
                  <Code2 size={60} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="small-box bg-white border shadow-sm">
                <div className="inner">
                  <h3>{stats.custom}</h3>
                  <p>Custom Solution</p>
                </div>

                <div className="icon text-warning">
                  <Building2 size={60} />
                </div>
              </div>
            </div>
          </div>
          {/* =================================================
           * FILTER
           * ================================================= */}
          <div className="card shadow-sm border-0 mb-4 catalog-filter">
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                {(["ALL", "RENT", "SELL", "CUSTOM"] as const).map((filter) => {
                  const active = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      className={`btn ${
                        active ? "btn-primary" : "btn-outline-secondary"
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter === "ALL" ? "All Products" : filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* =========================================================
           * PRODUCT CATALOG TABLE
           * ========================================================= */}
          {/*  */}

          {/* =========================================================
           * PRODUCT CATALOG TABLE
           * ========================================================= */}
          {filteredProducts.length > 0 ? (
            <div className="catalog-table-wrapper">
              <div className="table-responsive">
                <table className="table catalog-product-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th className="catalog-col-product">PRODUCT</th>
                      <th className="catalog-col-description">DESCRIPTION</th>
                      <th className="catalog-col-type">TYPE</th>
                      <th className="catalog-col-features">FEATURES</th>
                      <th className="catalog-col-price">PRICE</th>
                      <th className="catalog-col-action">ACTION</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredProducts.map((product) => {
                      const Icon = product.icon;
                      const badge = typeConfig[product.type];

                      return (
                        <tr
                          key={product.id}
                          className={
                            product.featured ? "catalog-product-featured" : ""
                          }
                        >
                          {/* =================================================
                           * PRODUCT
                           * ================================================= */}
                          <td>
                            <div className="catalog-product-cell">
                              <div className="catalog-product-icon">
                                <Icon size={23} />
                              </div>

                              <div className="catalog-product-info">
                                <div className="catalog-product-name">
                                  {product.name}

                                  {product.featured && (
                                    <span className="badge bg-primary ms-2">
                                      FEATURED
                                    </span>
                                  )}
                                </div>

                                <div className="catalog-product-subtitle">
                                  {product.subtitle}
                                </div>

                                <div className="catalog-product-category">
                                  {product.category}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* =================================================
                           * DESCRIPTION
                           * ================================================= */}
                          <td>
                            <div className="catalog-description">
                              {product.description}
                            </div>
                          </td>

                          {/* =================================================
                           * TYPE
                           * ================================================= */}
                          <td>
                            <span className={`badge ${badge.className}`}>
                              {badge.label}
                            </span>
                          </td>

                          {/* =================================================
                           * FEATURES
                           * ================================================= */}
                          <td>
                            <div className="catalog-feature-list">
                              {product.features.slice(0, 4).map((feature) => (
                                <div
                                  key={feature}
                                  className="catalog-feature-item"
                                >
                                  <Check
                                    size={14}
                                    className="text-success flex-shrink-0"
                                  />

                                  <span>{feature}</span>
                                </div>
                              ))}

                              {product.features.length > 4 && (
                                <small className="catalog-more-features">
                                  +{product.features.length - 4} more
                                </small>
                              )}
                            </div>
                          </td>

                          {/* =================================================
                           * PRICE
                           * ================================================= */}
                          <td>
                            <div className="catalog-price">
                              <strong>{product.price}</strong>

                              {product.period && <span>{product.period}</span>}
                            </div>
                          </td>

                          {/* =================================================
                           * ACTION
                           * ================================================= */}
                          <td>
                            <div className="catalog-actions">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => setSelectedProduct(product)}
                              >
                                Details
                                <ChevronRight size={15} className="ms-1" />
                              </button>

                              {product.type === "RENT" && (
                                <button
                                  type="button"
                                  className="btn btn-outline-success btn-sm"
                                >
                                  Demo
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* =========================================================
             * EMPTY STATE
             * ========================================================= */
            <div className="card catalog-empty shadow-sm border-0 mb-4">
              <Package size={50} className="text-muted mb-3" />

              <h5 className="mb-1">No Products</h5>

              <p className="text-muted mb-0">
                Belum ada produk pada kategori ini.
              </p>
            </div>
          )}
          {/* =========================================================
           * BUSINESS MODEL
           * ========================================================= */}
          <div className="card shadow-sm border-0 mt-2 mb-4 business-model-card">
            <div className="card-header bg-white">
              <h5 className="mb-0 fw-bold">ABN Business Model</h5>
            </div>

            <div className="card-body">
              <div className="row">
                {/* =================================================
                 * RENT
                 * ================================================= */}
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="business-model-item">
                    <div className="business-model-title">
                      <Zap size={20} className="text-success" />

                      <strong>RENT / SaaS</strong>
                    </div>

                    <p className="business-model-description mb-0">
                      Software disewa bulanan atau tahunan. ABN tetap mengelola
                      server, update, security dan maintenance.
                    </p>
                  </div>
                </div>

                {/* =================================================
                 * SELL
                 * ================================================= */}
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="business-model-item">
                    <div className="business-model-title">
                      <Code2 size={20} className="text-primary" />

                      <strong>SELL / SOURCE</strong>
                    </div>

                    <p className="business-model-description mb-0">
                      Template dan starter project dijual putus dengan source
                      code.
                    </p>
                  </div>
                </div>

                {/* =================================================
                 * CUSTOM
                 * ================================================= */}
                <div className="col-md-4">
                  <div className="business-model-item">
                    <div className="business-model-title">
                      <Building2 size={20} className="text-warning" />

                      <strong>CUSTOM</strong>
                    </div>

                    <p className="business-model-description mb-0">
                      Development dan integrasi khusus untuk kebutuhan
                      enterprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
           * EMPTY
           * ================================================= */}
          {filteredProducts.length === 0 && (
            <div className="card catalog-empty">
              <Package size={50} className="text-muted mb-3" />

              <h5>No Products</h5>

              <p className="text-muted mb-0">
                Belum ada produk pada kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
       * DETAIL MODAL
       * ===================================================== */}

      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,.45)",
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title fw-bold">
                    {selectedProduct.name}
                  </h5>

                  <small className="text-muted">
                    {selectedProduct.subtitle}
                  </small>
                </div>

                <button
                  type="button"
                  className="btn btn-sm btn-light"
                  onClick={() => setSelectedProduct(null)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="modal-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className={`badge ${
                      typeConfig[selectedProduct.type].className
                    }`}
                  >
                    {typeConfig[selectedProduct.type].label}
                  </span>

                  <span className="badge bg-light text-dark">
                    {selectedProduct.category}
                  </span>
                </div>

                <p className="text-muted">{selectedProduct.description}</p>

                <hr />

                <h6 className="fw-bold mb-3">Features</h6>

                <div className="row">
                  {selectedProduct.features.map((feature) => (
                    <div className="col-md-6 mb-2" key={feature}>
                      <div className="d-flex align-items-center">
                        <Check size={17} className="text-success me-2" />

                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                <hr />

                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted">Starting Price</small>

                    <div className="fs-4 fw-bold">
                      {selectedProduct.price}

                      {selectedProduct.period && (
                        <span className="fs-6 text-muted">
                          {" "}
                          {selectedProduct.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      console.log("Request product:", selectedProduct.id);
                    }}
                  >
                    Request Product
                    <ChevronRight size={17} className="ms-1" />
                  </button>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogProduct;
