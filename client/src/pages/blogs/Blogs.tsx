import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gauge,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Tag,
  Truck,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

type BlogPost = {
  icon: React.ElementType;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    icon: Factory,
    category: "Industry 4.0",
    title: "Membangun Ekosistem Digital Industri yang Terhubung",
    excerpt:
      "Bagaimana field equipment, edge computing, server, database, dan dashboard dapat dibangun menjadi satu ekosistem digital industri yang terintegrasi.",
    date: "15 Sep 2026",
    readTime: "7 min read",
    tags: ["Digital Industry", "Integration", "Automation"],
    featured: true,
  },
  {
    icon: Network,
    category: "System Integration",
    title: "SCADA, PLC, OPC, dan API: Menyatukan Data Industri",
    excerpt:
      "Memahami pola integrasi antara sistem kontrol, gateway, OPC, database, dan aplikasi modern tanpa mengganggu sistem existing.",
    date: "12 Sep 2026",
    readTime: "8 min read",
    tags: ["SCADA", "PLC", "OPC", "API"],
  },
  {
    icon: Cpu,
    category: "IoT & Edge",
    title: "IoT Gateway: Dari Sensor ke Cloud",
    excerpt:
      "Mengenal arsitektur IoT gateway untuk menghubungkan sensor dan equipment dengan platform monitoring serta cloud infrastructure.",
    date: "09 Sep 2026",
    readTime: "6 min read",
    tags: ["IoT", "Gateway", "MQTT"],
  },
  {
    icon: Gauge,
    category: "Software",
    title: "Realtime Dashboard untuk Operational Monitoring",
    excerpt:
      "Prinsip membangun dashboard realtime yang menampilkan status equipment, alarm, KPI, trend, dan data operasional secara cepat.",
    date: "05 Sep 2026",
    readTime: "7 min read",
    tags: ["React", "Realtime", "Dashboard"],
  },
  {
    icon: Truck,
    category: "Fleet",
    title: "Fleet Management dan GPS Monitoring untuk Armada",
    excerpt:
      "Konsep monitoring kendaraan berbasis GPS untuk melihat posisi armada, perjalanan, status kendaraan, dan histori operasional.",
    date: "02 Sep 2026",
    readTime: "6 min read",
    tags: ["Fleet", "GPS", "Tracking"],
  },
  {
    icon: Database,
    category: "Data",
    title: "Industrial Data: Dari Historian ke Analytics",
    excerpt:
      "Data industri dapat menjadi aset operasional ketika dikumpulkan, disimpan, divisualisasikan, dan dianalisis dengan arsitektur yang tepat.",
    date: "29 Aug 2026",
    readTime: "8 min read",
    tags: ["Database", "Historian", "Analytics"],
  },
  {
    icon: Zap,
    category: "IoT & Edge",
    title: "MQTT vs WebSocket untuk Data Realtime",
    excerpt:
      "Memahami perbedaan penggunaan MQTT dan WebSocket ketika membangun aplikasi monitoring dengan kebutuhan data realtime.",
    date: "25 Aug 2026",
    readTime: "5 min read",
    tags: ["MQTT", "WebSocket", "Realtime"],
  },
  {
    icon: Workflow,
    category: "Software",
    title: "Membangun API Layer untuk Industrial Integration",
    excerpt:
      "API layer menjadi penghubung penting antara aplikasi enterprise, database, IoT gateway, dashboard, dan sistem operasional.",
    date: "21 Aug 2026",
    readTime: "7 min read",
    tags: ["Node.js", "REST API", "Integration"],
  },
];

const categories = [
  "All",
  "Industry 4.0",
  "System Integration",
  "IoT & Edge",
  "Software",
  "Data",
  "Fleet",
];

const knowledgeAreas = [
  {
    icon: Factory,
    title: "Industrial Systems",
    text: "Digitalisasi proses, automation, SCADA, PLC, DCS, dan operational systems.",
  },
  {
    icon: Cpu,
    title: "IoT & Edge",
    text: "Sensor, gateway, embedded systems, MQTT, edge processing, dan telemetry.",
  },
  {
    icon: Layers3,
    title: "Software Engineering",
    text: "Web application, API, backend, realtime system, dan enterprise platform.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    text: "Industrial database, historian, KPI, reporting, analytics, dan visualization.",
  },
  {
    icon: Truck,
    title: "Fleet Technology",
    text: "GPS tracking, fleet monitoring, vehicle telemetry, dan operational intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Integration",
    text: "Network architecture, authentication, access control, monitoring, dan reliability.",
  },
];

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const categoryMatch =
        activeCategory === "All" || post.category === activeCategory;

      const searchMatch =
        !keyword ||
        post.title.toLowerCase().includes(keyword) ||
        post.excerpt.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword) ||
        post.tags.some((tag) => tag.toLowerCase().includes(keyword));

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const regularPosts = filteredPosts.filter(
    (post) => post.title !== featuredPost.title,
  );

  const scrollToLibrary = () => {
    document
      .getElementById("blogs-library")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main className="blogs-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="blogs-hero">
        <div className="blogs-container blogs-hero-grid">
          <div className="blogs-hero-content">
            <div className="blogs-eyebrow">
              <span className="blogs-eyebrow-dot" />
              ABN INDUSTRY 4.0 / INSIGHTS
            </div>

            <h1 className="blogs-title">
              Ideas, Technology
              <span>&amp; Industrial Insights.</span>
            </h1>

            <p className="blogs-description">
              Eksplorasi teknologi, digitalisasi industri, IoT, software, data,
              fleet management, dan system integration melalui insight yang
              praktis dan relevan untuk kebutuhan industri modern.
            </p>

            <div className="blogs-hero-actions">
              <button
                type="button"
                className="blogs-btn blogs-btn-primary"
                onClick={scrollToLibrary}
              >
                Explore Insights
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="blogs-btn blogs-btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Discuss a Project
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="blogs-hero-points">
              <span>
                <Zap size={15} />
                Practical
              </span>

              <span>
                <Network size={15} />
                Connected
              </span>

              <span>
                <ShieldCheck size={15} />
                Industrial Focus
              </span>
            </div>
          </div>

          <div className="blogs-hero-visual">
            <div className="blogs-command-card">
              <div className="blogs-command-top">
                <div>
                  <span className="blogs-command-label">ABN KNOWLEDGE HUB</span>
                  <strong>Industrial Intelligence</strong>
                </div>

                <div className="blogs-command-status">
                  <span />
                  ONLINE
                </div>
              </div>

              <div className="blogs-command-grid">
                <div className="blogs-command-metric">
                  <BookOpen size={19} />
                  <span>ARTICLES</span>
                  <strong>
                    {blogPosts.length.toString().padStart(2, "0")}
                  </strong>
                </div>

                <div className="blogs-command-metric">
                  <Layers3 size={19} />
                  <span>TOPICS</span>
                  <strong>
                    {(categories.length - 1).toString().padStart(2, "0")}
                  </strong>
                </div>

                <div className="blogs-command-metric">
                  <Cloud size={19} />
                  <span>DIGITAL</span>
                  <strong>4.0</strong>
                </div>

                <div className="blogs-command-metric">
                  <Database size={19} />
                  <span>DATA</span>
                  <strong>LIVE</strong>
                </div>
              </div>

              <div className="blogs-command-terminal">
                <div className="blogs-terminal-header">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="blogs-terminal-lines">
                  <p>
                    <b>$</b> abn-insights --status
                  </p>
                  <p className="success">
                    <b>✓</b> industrial systems connected
                  </p>
                  <p className="success">
                    <b>✓</b> realtime architecture ready
                  </p>
                  <p className="muted">
                    <b>›</b> knowledge stream active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================= */}
      <section className="blogs-featured-section">
        <div className="blogs-container">
          <div className="blogs-section-heading">
            <div>
              <span className="blogs-section-kicker">FEATURED INSIGHT</span>
              <h2>Featured Article</h2>
            </div>

            <button
              type="button"
              className="blogs-text-button"
              onClick={scrollToLibrary}
            >
              View all insights
              <ArrowRight size={16} />
            </button>
          </div>

          <article className="blogs-featured-card">
            <div className="blogs-featured-icon">
              <featuredPost.icon size={38} strokeWidth={1.6} />
            </div>

            <div className="blogs-featured-content">
              <div className="blogs-post-meta">
                <span className="blogs-category">
                  <Tag size={13} />
                  {featuredPost.category}
                </span>

                <span>
                  <CalendarDays size={14} />
                  {featuredPost.date}
                </span>

                <span>{featuredPost.readTime}</span>
              </div>

              <h3>{featuredPost.title}</h3>

              <p>{featuredPost.excerpt}</p>

              <div className="blogs-featured-tags">
                {featuredPost.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button
                type="button"
                className="blogs-read-button"
                onClick={scrollToLibrary}
              >
                Explore this topic
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="blogs-featured-pattern">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          ARTICLE LIBRARY
      ========================================================= */}
      <section className="blogs-library-section" id="blogs-library">
        <div className="blogs-container">
          <div className="blogs-section-heading blogs-library-heading">
            <div>
              <span className="blogs-section-kicker">KNOWLEDGE LIBRARY</span>
              <h2>Explore Our Insights</h2>
              <p>Pilih topik atau cari artikel berdasarkan kebutuhan Anda.</p>
            </div>
          </div>

          <div className="blogs-toolbar">
            <div className="blogs-category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`blogs-category-button ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="blogs-search">
              <Search size={18} />

              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              {searchTerm && (
                <button
                  type="button"
                  className="blogs-search-clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="blogs-grid">
              {regularPosts.map((post) => {
                const Icon = post.icon;

                return (
                  <article className="blogs-card" key={post.title}>
                    <div className="blogs-card-top">
                      <div className="blogs-card-icon">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="blogs-card-category">
                        {post.category}
                      </span>
                    </div>

                    <div className="blogs-card-meta">
                      <span>
                        <CalendarDays size={13} />
                        {post.date}
                      </span>

                      <span>{post.readTime}</span>
                    </div>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <div className="blogs-card-tags">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="blogs-card-link"
                      onClick={scrollToLibrary}
                    >
                      Read insight
                      <ArrowRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="blogs-empty">
              <Search size={30} />
              <h3>No insights found</h3>
              <p>
                Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE AREAS
      ========================================================= */}
      <section className="blogs-topics-section">
        <div className="blogs-container">
          <div className="blogs-topics-header">
            <div>
              <span className="blogs-section-kicker">KNOWLEDGE AREAS</span>
              <h2>Technology Behind Modern Industry</h2>
            </div>

            <p>
              Insight ABN berfokus pada bagaimana teknologi dapat dihubungkan
              menjadi sistem yang lebih terukur, realtime, dan mudah
              dikembangkan.
            </p>
          </div>

          <div className="blogs-topics-grid">
            {knowledgeAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div className="blogs-topic-card" key={area.title}>
                  <div className="blogs-topic-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(
                        area.title === "Industrial Systems"
                          ? "Industry 4.0"
                          : area.title === "IoT & Edge"
                            ? "IoT & Edge"
                            : area.title === "Software Engineering"
                              ? "Software"
                              : area.title === "Data & Analytics"
                                ? "Data"
                                : area.title === "Fleet Technology"
                                  ? "Fleet"
                                  : "System Integration",
                      );

                      scrollToLibrary();
                    }}
                  >
                    Explore
                    <ChevronRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="blogs-cta-section">
        <div className="blogs-container">
          <div className="blogs-cta">
            <div className="blogs-cta-icon">
              <Workflow size={27} />
            </div>

            <div className="blogs-cta-content">
              <span>HAVE AN INDUSTRIAL CHALLENGE?</span>
              <h2>
                Let's turn your idea into a <strong>connected system.</strong>
              </h2>
              <p>
                Dari software development, IoT, dashboard, fleet monitoring,
                sampai industrial system integration.
              </p>
            </div>

            <button
              type="button"
              className="blogs-btn blogs-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Talk to ABN
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="blogs-footer">
        <div className="blogs-container blogs-footer-inner">
          <div>
            <strong>ABN INDUSTRY 4.0</strong>
            <span>Digital Systems • Industrial Technology • Integration</span>
          </div>

          <div className="blogs-footer-right">
            <span>Insights &amp; Technology</span>
            <span className="blogs-footer-divider" />
            <span>Designed by ABN</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Blogs;
