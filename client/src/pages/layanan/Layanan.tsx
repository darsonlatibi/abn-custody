import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  //Archive,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  //Database,
  Factory,
  FileCog,
  Layers3,
  Mail,
  MoreHorizontal,
  RefreshCw,
  Search,
  Send,
  //ServerCog,
  Settings2,
  //   ShieldCheck,
  //   Smartphone,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import "./Layanan.css";

type ServiceCategory =
  | "ALL"
  | "ENTERPRISE"
  | "INDUSTRIAL"
  | "DIGITAL"
  | "IOT"
  | "SUPPORT";

type ServiceStatus = "ACTIVE" | "COMING_SOON" | "MAINTENANCE";

interface ServiceItem {
  id: number;
  code: string;
  name: string;
  category: Exclude<ServiceCategory, "ALL">;
  description: string;
  status: ServiceStatus;
  updatedAt: string;
  featured?: boolean;
  details: string[];
}

type IconComponent = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

const SERVICE_DATA: ServiceItem[] = [
  {
    id: 1,
    code: "EMS-001",
    name: "ABN Enterprise Management System",
    category: "ENTERPRISE",
    description:
      "Platform terintegrasi untuk pengelolaan operasional, HR, fleet, inventory, procurement, finance, CRM, dan dashboard manajemen.",
    status: "ACTIVE",
    updatedAt: "24 Sep 2026",
    featured: true,
    details: [
      "Executive Dashboard",
      "Human Resources Management",
      "Fleet Management",
      "Inventory & Warehouse",
      "Procurement",
      "Finance",
      "CRM",
      "Management Reporting",
    ],
  },
  {
    id: 2,
    code: "WEB-002",
    name: "Web & Application Development",
    category: "DIGITAL",
    description:
      "Pengembangan website, web application, dashboard, REST API, sistem autentikasi, dan aplikasi enterprise.",
    status: "ACTIVE",
    updatedAt: "24 Sep 2026",
    featured: true,
    details: [
      "Corporate Website",
      "Web Application",
      "REST API",
      "Authentication",
      "Dashboard",
      "Database Integration",
      "Payment Gateway",
    ],
  },
  {
    id: 3,
    code: "IOT-003",
    name: "IoT & SCADA Automation",
    category: "IOT",
    description:
      "Solusi monitoring dan kontrol perangkat industri dengan IoT, SCADA, sensor, edge device, dan realtime dashboard.",
    status: "ACTIVE",
    updatedAt: "23 Sep 2026",
    featured: true,
    details: [
      "Industrial IoT",
      "SCADA",
      "Sensor Monitoring",
      "Edge Computing",
      "Realtime Dashboard",
      "Alarm & Notification",
      "Data Logging",
    ],
  },
  {
    id: 4,
    code: "FLT-004",
    name: "Fleet Management System",
    category: "ENTERPRISE",
    description:
      "Sistem pengelolaan kendaraan dan armada meliputi kendaraan, driver, GPS, perjalanan, maintenance, dan fuel monitoring.",
    status: "ACTIVE",
    updatedAt: "22 Sep 2026",
    details: [
      "Vehicle Management",
      "Driver Management",
      "GPS Tracking",
      "Trip Management",
      "Maintenance",
      "Fuel Monitoring",
      "Fleet Reporting",
    ],
  },
  {
    id: 5,
    code: "MET-005",
    name: "Custody Metering System",
    category: "INDUSTRIAL",
    description:
      "Sistem monitoring dan pengelolaan data metering untuk kebutuhan operasional industri dan custody transfer.",
    status: "COMING_SOON",
    updatedAt: "21 Sep 2026",
    details: [
      "Meter Data Acquisition",
      "Realtime Monitoring",
      "Flow Monitoring",
      "Historical Data",
      "Reporting",
      "Alarm Management",
    ],
  },
  {
    id: 6,
    code: "TRD-006",
    name: "Market & Trading Intelligence",
    category: "DIGITAL",
    description:
      "Dashboard monitoring market dan trading dengan data realtime, analytics, chart, risk management, dan automation.",
    status: "ACTIVE",
    updatedAt: "20 Sep 2026",
    details: [
      "Market Data",
      "Trading Dashboard",
      "Realtime Chart",
      "Risk Management",
      "Trading Automation",
      "Performance Monitoring",
    ],
  },
  {
    id: 7,
    code: "INT-007",
    name: "System Integration & API",
    category: "DIGITAL",
    description:
      "Integrasi antar sistem menggunakan REST API, WebSocket, database, authentication, dan service-to-service communication.",
    status: "ACTIVE",
    updatedAt: "20 Sep 2026",
    details: [
      "REST API",
      "WebSocket",
      "Database Integration",
      "Third-party Integration",
      "Authentication",
      "Data Synchronization",
    ],
  },
  {
    id: 8,
    code: "SUP-008",
    name: "Technical Support & Maintenance",
    category: "SUPPORT",
    description:
      "Layanan dukungan teknis, monitoring, troubleshooting, maintenance, dan pengembangan berkelanjutan.",
    status: "ACTIVE",
    updatedAt: "19 Sep 2026",
    details: [
      "Technical Support",
      "System Monitoring",
      "Troubleshooting",
      "Preventive Maintenance",
      "System Update",
      "Performance Optimization",
    ],
  },
  {
    id: 9,
    code: "SEC-009",
    name: "Infrastructure & Security",
    category: "SUPPORT",
    description:
      "Pengelolaan infrastructure server, deployment, backup, access control, monitoring, dan security hardening.",
    status: "ACTIVE",
    updatedAt: "18 Sep 2026",
    details: [
      "Server Management",
      "Deployment",
      "Backup",
      "Access Control",
      "Monitoring",
      "Security Hardening",
    ],
  },
  {
    id: 10,
    code: "DAT-010",
    name: "Data Analytics & AI Dashboard",
    category: "DIGITAL",
    description:
      "Pengolahan data menjadi dashboard analitik, KPI, visualisasi, monitoring, dan insight berbasis AI.",
    status: "ACTIVE",
    updatedAt: "17 Sep 2026",
    details: [
      "Data Analytics",
      "KPI Dashboard",
      "Data Visualization",
      "Business Intelligence",
      "AI Integration",
      "Automated Reporting",
    ],
  },
];

const PAGE_SIZE = 8;

const CATEGORY_META: Record<
  ServiceCategory,
  {
    label: string;
    icon: IconComponent;
  }
> = {
  ALL: {
    label: "Semua Layanan",
    icon: Layers3,
  },
  ENTERPRISE: {
    label: "Enterprise",
    icon: BriefcaseBusiness,
  },
  INDUSTRIAL: {
    label: "Industrial",
    icon: Factory,
  },
  DIGITAL: {
    label: "Digital",
    icon: Code2,
  },
  IOT: {
    label: "IoT & SCADA",
    icon: Zap,
  },
  SUPPORT: {
    label: "Support",
    icon: Wrench,
  },
};

const STATUS_META: Record<
  ServiceStatus,
  {
    label: string;
    icon: IconComponent;
  }
> = {
  ACTIVE: {
    label: "Active",
    icon: CheckCircle2,
  },
  COMING_SOON: {
    label: "Coming Soon",
    icon: Clock3,
  },
  MAINTENANCE: {
    label: "Maintenance",
    icon: Settings2,
  },
};

const getCategoryIcon = (
  category: Exclude<ServiceCategory, "ALL">,
): IconComponent => {
  return CATEGORY_META[category].icon;
};

const Layanan: React.FC = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState<ServiceCategory>("ALL");
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [syncing, setSyncing] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );

  const filteredServices = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return SERVICE_DATA.filter((service) => {
      const matchesCategory =
        category === "ALL" || service.category === category;

      if (!keyword) {
        return matchesCategory;
      }

      const searchableText = [
        service.code,
        service.name,
        service.category,
        service.description,
        service.status,
        ...service.details,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(keyword);
    });
  }, [category, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredServices.length / PAGE_SIZE),
  );

  const safePage = Math.min(page, totalPages);

  const currentServices = filteredServices.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const allCurrentSelected =
    currentServices.length > 0 &&
    currentServices.every((service) => selectedIds.includes(service.id));

  const activeCount = SERVICE_DATA.filter(
    (service) => service.status === "ACTIVE",
  ).length;

  const comingSoonCount = SERVICE_DATA.filter(
    (service) => service.status === "COMING_SOON",
  ).length;

  const handleCategoryChange = (value: ServiceCategory) => {
    setCategory(value);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSelectAll = () => {
    if (allCurrentSelected) {
      setSelectedIds((prev) =>
        prev.filter(
          (id) => !currentServices.some((service) => service.id === id),
        ),
      );
      return;
    }

    setSelectedIds((prev) => {
      const next = new Set(prev);

      currentServices.forEach((service) => {
        next.add(service.id);
      });

      return Array.from(next);
    });
  };

  const handleSelectOne = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id],
    );
  };

  const handleRefresh = () => {
    if (syncing) return;

    setSyncing(true);

    window.setTimeout(() => {
      setSyncing(false);
    }, 700);
  };

  const handleOpenService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleRequestService = (service: ServiceItem) => {
    navigate(`/contact?service=${encodeURIComponent(service.code)}`, {
      state: {
        service: {
          code: service.code,
          name: service.name,
        },
      },
    });
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) return;

    setPage(nextPage);
    setSelectedIds([]);
  };

  return (
    <div className="layanan-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="layanan-header">
        <div className="layanan-header-left">
          <div className="layanan-title-icon">
            <BriefcaseBusiness size={21} strokeWidth={2} />
          </div>

          <div>
            <h1>Layanan</h1>
            <p>ABN Enterprise Services</p>
          </div>
        </div>

        <div className="layanan-header-actions">
          <button
            type="button"
            className={`layanan-icon-button ${syncing ? "is-loading" : ""}`}
            onClick={handleRefresh}
            title="Refresh"
            aria-label="Refresh layanan"
          >
            <RefreshCw size={18} strokeWidth={2} />
          </button>

          <button
            type="button"
            className="layanan-icon-button"
            title="Help"
            aria-label="Help"
          >
            <CircleHelp size={18} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* =====================================================
          BODY
      ===================================================== */}
      <div className="layanan-layout">
        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="layanan-sidebar">
          <div className="layanan-sidebar-top">
            <button
              type="button"
              className="layanan-compose-button"
              onClick={() => navigate("/contact")}
            >
              <Send size={17} strokeWidth={2} />
              <span>Request Layanan</span>
            </button>
          </div>

          <nav className="layanan-nav">
            {(Object.keys(CATEGORY_META) as ServiceCategory[]).map((item) => {
              const Icon = CATEGORY_META[item].icon;
              const count =
                item === "ALL"
                  ? SERVICE_DATA.length
                  : SERVICE_DATA.filter((service) => service.category === item)
                      .length;

              return (
                <button
                  key={item}
                  type="button"
                  className={`layanan-nav-item ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(item)}
                >
                  <span className="layanan-nav-icon">
                    <Icon size={17} strokeWidth={2} />
                  </span>

                  <span className="layanan-nav-label">
                    {CATEGORY_META[item].label}
                  </span>

                  <span className="layanan-nav-count">{count}</span>
                </button>
              );
            })}
          </nav>

          <div className="layanan-sidebar-divider" />

          <div className="layanan-sidebar-section-title">STATUS</div>

          <div className="layanan-status-summary">
            <div className="layanan-summary-row">
              <span>
                <CheckCircle2 size={15} />
                Active
              </span>
              <strong>{activeCount}</strong>
            </div>

            <div className="layanan-summary-row">
              <span>
                <Clock3 size={15} />
                Coming Soon
              </span>
              <strong>{comingSoonCount}</strong>
            </div>
          </div>

          <div className="layanan-sidebar-divider" />

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `layanan-sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Mail size={17} strokeWidth={2} />
            <span>Contact ABN</span>
          </NavLink>
        </aside>

        {/* ===================================================
            MAIN
        =================================================== */}
        <main className="layanan-main">
          {/* TOOLBAR */}
          <div className="layanan-toolbar">
            <div className="layanan-toolbar-left">
              <button
                type="button"
                className={`layanan-toolbar-button ${
                  allCurrentSelected ? "active" : ""
                }`}
                onClick={handleSelectAll}
                title="Select all"
              >
                <span
                  className={`layanan-checkbox ${
                    allCurrentSelected ? "checked" : ""
                  }`}
                >
                  {allCurrentSelected && (
                    <CheckCircle2 size={14} strokeWidth={2.5} />
                  )}
                </span>
              </button>

              {selectedIds.length > 0 && (
                <span className="layanan-selected-count">
                  {selectedIds.length} dipilih
                </span>
              )}

              <button
                type="button"
                className="layanan-toolbar-button"
                onClick={handleRefresh}
                title="Refresh"
              >
                <RefreshCw
                  size={17}
                  className={syncing ? "spin" : ""}
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                className="layanan-toolbar-button"
                onClick={() => setSelectedIds([])}
                disabled={selectedIds.length === 0}
                title="Clear selection"
              >
                <X size={17} strokeWidth={2} />
              </button>
            </div>

            <div className="layanan-toolbar-right">
              <div className="layanan-search">
                <Search size={17} strokeWidth={2} />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  placeholder="Search layanan..."
                  aria-label="Search layanan"
                />

                {search && (
                  <button
                    type="button"
                    className="layanan-search-clear"
                    onClick={() => handleSearchChange("")}
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <button
                type="button"
                className="layanan-toolbar-button"
                title="Filter"
              >
                <Settings2 size={17} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* INFO BAR */}
          <div className="layanan-info-bar">
            <div>
              <strong>
                {category === "ALL"
                  ? "Semua Layanan"
                  : CATEGORY_META[category].label}
              </strong>

              <span>{filteredServices.length} layanan ditemukan</span>
            </div>

            <div className="layanan-info-right">
              <span className="layanan-info-badge">{activeCount} Active</span>
            </div>
          </div>

          {/* LIST */}
          <section className="layanan-list-card">
            {currentServices.length === 0 ? (
              <div className="layanan-empty">
                <div className="layanan-empty-icon">
                  <Search size={25} strokeWidth={1.8} />
                </div>

                <h3>Layanan tidak ditemukan</h3>

                <p>
                  Tidak ada layanan yang sesuai dengan pencarian atau kategori
                  yang dipilih.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("ALL");
                    setPage(1);
                  }}
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="layanan-list">
                {currentServices.map((service) => {
                  const CategoryIcon = getCategoryIcon(service.category);

                  const StatusIcon = STATUS_META[service.status].icon;

                  const selected = selectedIds.includes(service.id);

                  return (
                    <article
                      key={service.id}
                      className={`layanan-row ${selected ? "selected" : ""}`}
                      onDoubleClick={() => handleOpenService(service)}
                    >
                      <button
                        type="button"
                        className={`layanan-row-checkbox ${
                          selected ? "checked" : ""
                        }`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleSelectOne(service.id);
                        }}
                        aria-label={`Pilih ${service.name}`}
                      >
                        {selected && (
                          <CheckCircle2 size={15} strokeWidth={2.5} />
                        )}
                      </button>

                      <button
                        type="button"
                        className="layanan-service-icon"
                        onClick={() => handleOpenService(service)}
                        aria-label={`Buka ${service.name}`}
                      >
                        <CategoryIcon size={21} strokeWidth={1.9} />
                      </button>

                      <button
                        type="button"
                        className="layanan-row-content"
                        onClick={() => handleOpenService(service)}
                      >
                        <div className="layanan-row-main">
                          <div className="layanan-row-heading">
                            <span className="layanan-code">{service.code}</span>

                            {service.featured && (
                              <span className="layanan-featured">Featured</span>
                            )}
                          </div>

                          <h3>{service.name}</h3>

                          <p>{service.description}</p>
                        </div>

                        <div className="layanan-row-meta">
                          <span
                            className={`layanan-category-badge ${service.category.toLowerCase()}`}
                          >
                            {CATEGORY_META[service.category].label}
                          </span>

                          <span
                            className={`layanan-status-badge ${service.status.toLowerCase()}`}
                          >
                            <StatusIcon size={13} strokeWidth={2} />
                            {STATUS_META[service.status].label}
                          </span>

                          <time>{service.updatedAt}</time>
                        </div>
                      </button>

                      <button
                        type="button"
                        className="layanan-row-more"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenService(service);
                        }}
                        title="More"
                        aria-label={`More ${service.name}`}
                      >
                        <MoreHorizontal size={19} strokeWidth={2} />
                      </button>
                    </article>
                  );
                })}
              </div>
            )}
          </section>

          {/* PAGINATION */}
          {filteredServices.length > 0 && (
            <div className="layanan-pagination">
              <div className="layanan-pagination-info">
                Menampilkan <strong>{(safePage - 1) * PAGE_SIZE + 1}</strong> -{" "}
                <strong>
                  {Math.min(safePage * PAGE_SIZE, filteredServices.length)}
                </strong>{" "}
                dari <strong>{filteredServices.length}</strong>
              </div>

              <div className="layanan-pagination-controls">
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage <= 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={17} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .slice(
                    Math.max(0, safePage - 3),
                    Math.min(totalPages, safePage + 2),
                  )
                  .map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      className={pageNumber === safePage ? "active" : ""}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}

                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage >= totalPages}
                  aria-label="Next page"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* =====================================================
          DETAIL MODAL
      ===================================================== */}
      {selectedService && (
        <div
          className="layanan-modal-backdrop"
          onMouseDown={() => setSelectedService(null)}
        >
          <div
            className="layanan-modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="layanan-modal-header">
              <div className="layanan-modal-title">
                <div className="layanan-modal-icon">
                  {React.createElement(
                    getCategoryIcon(selectedService.category),
                    {
                      size: 22,
                      strokeWidth: 1.9,
                    },
                  )}
                </div>

                <div>
                  <span>{selectedService.code}</span>
                  <h2>{selectedService.name}</h2>
                </div>
              </div>

              <button
                type="button"
                className="layanan-modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close"
              >
                <X size={19} />
              </button>
            </div>

            <div className="layanan-modal-body">
              <div className="layanan-modal-badges">
                <span
                  className={`layanan-category-badge ${selectedService.category.toLowerCase()}`}
                >
                  {CATEGORY_META[selectedService.category].label}
                </span>

                <span
                  className={`layanan-status-badge ${selectedService.status.toLowerCase()}`}
                >
                  {React.createElement(
                    STATUS_META[selectedService.status].icon,
                    {
                      size: 13,
                      strokeWidth: 2,
                    },
                  )}

                  {STATUS_META[selectedService.status].label}
                </span>

                {selectedService.featured && (
                  <span className="layanan-featured">Featured</span>
                )}
              </div>

              <div className="layanan-modal-section">
                <div className="layanan-modal-section-title">
                  <FileCog size={17} />
                  <span>Deskripsi Layanan</span>
                </div>

                <p className="layanan-modal-description">
                  {selectedService.description}
                </p>
              </div>

              <div className="layanan-modal-section">
                <div className="layanan-modal-section-title">
                  <Layers3 size={17} />
                  <span>Scope Layanan</span>
                </div>

                <div className="layanan-detail-grid">
                  {selectedService.details.map((detail) => (
                    <div key={detail} className="layanan-detail-item">
                      <CheckCircle2 size={15} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="layanan-modal-meta">
                <div>
                  <span>Service Code</span>
                  <strong>{selectedService.code}</strong>
                </div>

                <div>
                  <span>Last Updated</span>
                  <strong>{selectedService.updatedAt}</strong>
                </div>
              </div>
            </div>

            <div className="layanan-modal-footer">
              <button
                type="button"
                className="layanan-modal-secondary"
                onClick={() => setSelectedService(null)}
              >
                Tutup
              </button>

              <button
                type="button"
                className="layanan-modal-primary"
                onClick={() => handleRequestService(selectedService)}
              >
                <Send size={16} strokeWidth={2} />
                Request Layanan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layanan;
