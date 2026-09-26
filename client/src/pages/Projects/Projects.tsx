import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Factory,
  Gauge,
  Globe2,
  Network,
  Radio,
  Satellite,
  Truck,
  Zap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { NavLink } from "react-router-dom";

import "./Projects.css";

/* =========================================================
   ABN INDUSTRIAL INTELLIGENCE
   SOLUTIONS & PROJECT PORTFOLIO
   ========================================================= */

/* =========================================================
   TYPES
   ========================================================= */

type ProjectStatus = "LIVE" | "DEPLOYED" | "DEMO" | "DEVELOPMENT";

type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  status: ProjectStatus;
  featured?: boolean;
  path?: string;
};

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects: Project[] = [
  {
    id: "01",
    client: "ABN INDUSTRIAL INTELLIGENCE",
    title: "ABN Enterprise Management System",
    category: "Enterprise Intelligence",
    description:
      "Integrated enterprise management and intelligence platform connecting business processes, operational data, KPI, workflows, integrations, and AI-driven decision support.",
    icon: BrainCircuit,
    tags: ["EMS", "AI", "KPI", "Analytics"],
    status: "LIVE",
    featured: true,
    path: "/demos/ems",
  },

  {
    id: "02",
    client: "ABN FLEET INTELLIGENCE",
    title: "ABN GPS Fleet Intelligence",
    category: "Fleet & Transportation",
    description:
      "Real-time fleet intelligence platform for vehicle tracking, operational visibility, telemetry, driver monitoring, asset monitoring, and fleet performance.",
    icon: Truck,
    tags: ["GPS", "Fleet", "Realtime", "Tracking"],
    status: "DEPLOYED",
    featured: true,
    path: "/demos/fleet",
  },

  {
    id: "03",
    client: "ABN INDUSTRIAL INTELLIGENCE",
    title: "Industrial IoT Monitoring",
    category: "Industrial IoT",
    description:
      "Connected industrial monitoring solution integrating sensors, telemetry, equipment data, realtime monitoring, and operational intelligence.",
    icon: Factory,
    tags: ["IoT", "Sensors", "Telemetry", "Monitoring"],
    status: "DEPLOYED",
    path: "/demos/industrial-iot",
  },

  {
    id: "04",
    client: "ABN MARINE INTELLIGENCE",
    title: "Marine & Vessel Monitoring",
    category: "Marine & Maritime",
    description:
      "Digital monitoring platform for vessels and marine assets with location tracking, telemetry, operational monitoring, and asset intelligence.",
    icon: Radio,
    tags: ["Marine", "GPS", "Telemetry", "Assets"],
    status: "DEVELOPMENT",
    path: "/demos/marine",
  },

  {
    id: "05",
    client: "ABN INDUSTRIAL AUTOMATION",
    title: "Smart Industrial Automation",
    category: "Automation & Control",
    description:
      "Industrial automation ecosystem connecting field instrumentation, controllers, data acquisition, monitoring, automation workflows, and digital intelligence.",
    icon: Gauge,
    tags: ["SCADA", "PLC", "Control", "Automation"],
    status: "DEVELOPMENT",
    path: "/demos/automation",
  },

  {
    id: "06",
    client: "ABN DIGITAL ENGINEERING",
    title: "Enterprise System Integration",
    category: "Digital Transformation",
    description:
      "Integration architecture connecting existing ERP, SAP, databases, APIs, operational systems, IoT platforms, and digital applications.",
    icon: Network,
    tags: ["API", "ERP", "SAP", "Integration"],
    status: "DEPLOYED",
    path: "/solutions/integration",
  },

  {
    id: "07",
    client: "TONASA INDUSTRIAL INTELLIGENCE",
    title: "TONASA Executive Intelligence",
    category: "Industrial Intelligence",
    description:
      "Executive intelligence demonstration combining production, asset, maintenance, energy, fleet, operational performance, and AI-driven management insight.",
    icon: Building2,
    tags: ["Executive", "Production", "Asset", "AI"],
    status: "DEMO",
    featured: true,
    path: "/demos/tonasa",
  },
];

/* =========================================================
   PROJECT STATUS
   ========================================================= */

function getStatusLabel(status: ProjectStatus) {
  switch (status) {
    case "LIVE":
      return "LIVE";

    case "DEPLOYED":
      return "DEPLOYED";

    case "DEMO":
      return "DEMO";

    case "DEVELOPMENT":
      return "DEVELOPMENT";

    default:
      return status;
  }
}

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  const liveProjects = projects.filter(
    (project) => project.status === "LIVE",
  ).length;

  const deployedProjects = projects.filter(
    (project) => project.status === "DEPLOYED",
  ).length;

  const demoProjects = projects.filter(
    (project) => project.status === "DEMO",
  ).length;

  const developmentProjects = projects.filter(
    (project) => project.status === "DEVELOPMENT",
  ).length;

  return (
    <main className="projects-page">
      {/* =========================================
          HEADER
      ========================================== */}

      <header className="projects-header">
        <div>
          <span className="projects-eyebrow">ABN INDUSTRIAL INTELLIGENCE</span>

          <h1>
            Solutions That Turn
            <br />
            Data Into Intelligence.
          </h1>

          <p>
            ABN develops digital and industrial solutions that connect
            enterprise systems, operational data, field devices, IoT,
            automation, and artificial intelligence.
          </p>
        </div>

        <div className="projects-server-status">
          <span className="projects-status-dot online" />

          <div>
            <strong>ABN SOLUTION PORTFOLIO</strong>

            <small>Digital • Industrial • IoT • AI</small>
          </div>
        </div>
      </header>

      {/* =========================================
          PROJECT SUMMARY
      ========================================== */}

      <section className="projects-summary">
        {/* TOTAL */}

        <article className="project-summary-card">
          <div className="project-summary-icon">
            <Globe2 size={21} />
          </div>

          <div>
            <span>Total Solutions</span>

            <strong>{projects.length}</strong>
          </div>
        </article>

        {/* LIVE */}

        <article className="project-summary-card live">
          <div className="project-summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Live</span>

            <strong>{liveProjects}</strong>
          </div>
        </article>

        {/* DEPLOYED */}

        <article className="project-summary-card deployed">
          <div className="project-summary-icon">
            <Building2 size={21} />
          </div>

          <div>
            <span>Deployed</span>

            <strong>{deployedProjects}</strong>
          </div>
        </article>

        {/* DEMO */}

        <article className="project-summary-card demo">
          <div className="project-summary-icon">
            <BrainCircuit size={21} />
          </div>

          <div>
            <span>Intelligence Demo</span>

            <strong>{demoProjects}</strong>
          </div>
        </article>

        {/* DEVELOPMENT */}

        <article className="project-summary-card development">
          <div className="project-summary-icon">
            <Zap size={21} />
          </div>

          <div>
            <span>In Development</span>

            <strong>{developmentProjects}</strong>
          </div>
        </article>
      </section>

      {/* =========================================
          PROJECT PORTFOLIO
      ========================================== */}

      <section className="projects-section">
        <div className="projects-section-heading">
          <div>
            <span className="section-eyebrow">
              SOLUTIONS & PROJECT PORTFOLIO
            </span>

            <h2>From Digital Engineering to Intelligence.</h2>
          </div>

          <p>
            Selected ABN solutions designed to connect people, systems,
            machines, data, and AI into intelligent operations.
          </p>
        </div>

        {/* =======================================
            PROJECT GRID
        ======================================== */}

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""}`}
              >
                {/* CARD TOP */}

                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={22} />
                  </div>

                  <div className="project-card-meta">
                    <span className="project-number">{project.id}</span>

                    <span
                      className={`project-status ${project.status.toLowerCase()}`}
                    >
                      <span className="project-status-dot" />

                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="project-card-content">
                  <span className="project-client">{project.client}</span>

                  <h3>{project.title}</h3>

                  <span className="project-category">{project.category}</span>

                  <p>{project.description}</p>

                  {/* TAGS */}

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {/* ACTION */}

                  {project.path ? (
                    <NavLink to={project.path} className="project-link">
                      View Solution
                      <ArrowRight size={15} />
                    </NavLink>
                  ) : (
                    <button type="button" className="project-link">
                      View Solution
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================
          PROJECT INTELLIGENCE
      ========================================== */}

      <section className="projects-intelligence">
        <div className="projects-intelligence-copy">
          <span className="section-eyebrow">ABN INTELLIGENCE APPROACH</span>

          <h2>
            From Existing Systems
            <br />
            To New Intelligence.
          </h2>

          <p>
            ABN solutions are designed to work with the technology that
            organizations already own. We connect enterprise systems,
            operational data, industrial assets, field devices, and AI into an
            intelligence layer that supports better decisions and measurable
            improvement.
          </p>

          <div className="project-flow">
            <span>CONNECT</span>

            <ArrowRight size={14} />

            <span>INTEGRATE</span>

            <ArrowRight size={14} />

            <span>INTELLIGENCE</span>

            <ArrowRight size={14} />

            <span>ACTION</span>
          </div>
        </div>

        {/* =======================================
            PROJECT STACK
        ======================================== */}

        <div className="projects-stack">
          <div className="project-stack-item">
            <div className="project-stack-icon">
              <Satellite size={18} />
            </div>

            <div>
              <strong>DATA & FIELD SYSTEMS</strong>

              <small>ERP • SAP • GPS • Sensors • Machines • IoT</small>
            </div>
          </div>

          <div className="project-stack-line" />

          <div className="project-stack-item active">
            <div className="project-stack-icon">
              <BrainCircuit size={18} />
            </div>

            <div>
              <strong>ABN INTELLIGENCE LAYER</strong>

              <small>Integration • Analytics • AI • Monitoring</small>
            </div>
          </div>

          <div className="project-stack-line" />

          <div className="project-stack-item">
            <div className="project-stack-icon">
              <Building2 size={18} />
            </div>

            <div>
              <strong>BUSINESS & OPERATIONS</strong>

              <small>KPI • Decisions • Optimization • Performance</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DEMO SHOWCASE
      ========================================== */}

      <section className="projects-showcase">
        <div>
          <span className="section-eyebrow">ABN DIGITAL SHOWROOM</span>

          <h2>
            See Intelligence
            <br />
            In Action.
          </h2>

          <p>
            Explore ABN demonstrations across enterprise management, industrial
            operations, fleet intelligence, IoT, automation, and executive
            intelligence.
          </p>
        </div>

        <NavLink to="/demos" className="projects-showcase-button">
          Explore ABN Demos
          <ArrowRight size={16} />
        </NavLink>
      </section>

      {/* =========================================
          CTA
      ========================================== */}

      <section className="projects-cta">
        <div>
          <span className="section-eyebrow">START A PROJECT</span>

          <h2>
            Have a Business or Industrial
            <br />
            Challenge?
          </h2>

          <p>
            Let&apos;s connect your systems, data and operations into measurable
            intelligence.
          </p>
        </div>

        <NavLink to="/contact" className="projects-button">
          Discuss Your Project
          <ArrowRight size={16} />
        </NavLink>
      </section>
    </main>
  );
}

export default Projects;
