import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Database,
  Gauge,
  Lightbulb,
  LineChart,
  Network,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

import "./Insights.css";

/* =========================================================
   ABN BUSINESS & INDUSTRIAL INTELLIGENCE
   ========================================================= */

type InsightLevel = "POSITIVE" | "ATTENTION" | "CRITICAL" | "OPPORTUNITY";

type InsightItem = {
  icon: typeof TrendingUp;
  title: string;
  description: string;
  value: string;
  trend: string;
  level: InsightLevel;
};

type KPIItem = {
  icon: typeof Activity;
  label: string;
  value: string;
  detail: string;
  direction: "up" | "down" | "neutral";
};

/* =========================================================
   INSIGHT DATA
   ========================================================= */

const insights: InsightItem[] = [
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    description:
      "Continuously monitor operational performance to identify productivity gains, bottlenecks, process deviations, and improvement opportunities.",
    value: "+0%",
    trend: "Baseline intelligence",
    level: "OPPORTUNITY",
  },
  {
    icon: Gauge,
    title: "Asset Utilization",
    description:
      "Connected asset data provides visibility into utilization, availability, idle time, equipment performance, and operational effectiveness.",
    value: "0%",
    trend: "Data integration pending",
    level: "ATTENTION",
  },
  {
    icon: TrendingDown,
    title: "Cost Intelligence",
    description:
      "Analyze business and operational data to identify cost drivers, inefficiencies, waste, and opportunities for measurable optimization.",
    value: "0%",
    trend: "Baseline intelligence",
    level: "OPPORTUNITY",
  },
  {
    icon: Target,
    title: "Performance Target",
    description:
      "Connect strategic targets with operational execution through continuous KPI monitoring, variance analysis, and corrective action.",
    value: "0%",
    trend: "Target tracking ready",
    level: "POSITIVE",
  },
  {
    icon: ShieldCheck,
    title: "Risk Monitoring",
    description:
      "AI-supported monitoring can identify anomalies, operational risks, control deviations, and emerging conditions before they impact performance.",
    value: "0",
    trend: "Risk signals ready",
    level: "ATTENTION",
  },
  {
    icon: Lightbulb,
    title: "Improvement Opportunity",
    description:
      "Cross-functional data creates a foundation for AI recommendations, optimization models, predictive insights, and continuous improvement programs.",
    value: "READY",
    trend: "AI opportunity layer",
    level: "OPPORTUNITY",
  },
];

/* =========================================================
   KPI DATA
   ========================================================= */

const kpis: KPIItem[] = [
  {
    icon: Activity,
    label: "Operational Performance",
    value: "0%",
    detail: "Current baseline",
    direction: "neutral",
  },
  {
    icon: TrendingUp,
    label: "Productivity",
    value: "0%",
    detail: "Current baseline",
    direction: "up",
  },
  {
    icon: TrendingDown,
    label: "Cost Efficiency",
    value: "0%",
    detail: "Current baseline",
    direction: "down",
  },
  {
    icon: ShieldCheck,
    label: "Risk Exposure",
    value: "0",
    detail: "Open intelligence signals",
    direction: "neutral",
  },
];

/* =========================================================
   INTELLIGENCE SOURCES
   ========================================================= */

const intelligenceStream = [
  {
    icon: Building2,
    title: "ENTERPRISE DATA",
    description: "ERP • SAP • Finance • HR • Procurement • Sales",
  },
  {
    icon: Activity,
    title: "OPERATIONAL DATA",
    description: "Production • Fleet • Maintenance • Logistics",
  },
  {
    icon: Database,
    title: "INDUSTRIAL DATA",
    description: "SCADA • IoT • Sensors • Machines • Telemetry",
  },
  {
    icon: Network,
    title: "CONNECTED DATA",
    description: "GPS • APIs • Systems • Applications • Networks",
  },
  {
    icon: LineChart,
    title: "ANALYTICS",
    description: "KPI • Trends • Variance • Performance • Correlation",
  },
  {
    icon: BrainCircuit,
    title: "AI INTELLIGENCE",
    description: "Prediction • Recommendation • Optimization • Detection",
  },
  {
    icon: Zap,
    title: "EXECUTIVE ACTION",
    description: "Decision • Alert • Workflow • Improvement",
  },
];

/* =========================================================
   INSIGHTS
   ========================================================= */

function Insights() {
  return (
    <main className="insights-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="insights-header">
        <div className="insights-header-content">
          <span className="insights-eyebrow">
            ABN BUSINESS & INDUSTRIAL INTELLIGENCE
          </span>

          <h1>
            Turning Data
            <br />
            Into Intelligence.
          </h1>

          <p>
            ABN Intelligence transforms enterprise, operational, industrial, and
            technology data into a continuous intelligence layer for better
            decisions, stronger performance, and measurable improvement.
          </p>
        </div>

        <div className="insights-header-status">
          <span className="insights-status-icon">
            <BrainCircuit size={20} />
          </span>

          <div>
            <strong>INTELLIGENCE LAYER</strong>

            <small>Connected • Analytical • Predictive • Actionable</small>
          </div>
        </div>
      </header>

      {/* =====================================================
          EXECUTIVE SUMMARY
      ===================================================== */}

      <section className="insights-executive">
        <div className="executive-heading">
          <span className="section-eyebrow">EXECUTIVE INTELLIGENCE</span>

          <h2>
            What the data
            <br />
            should tell you.
          </h2>

          <p>
            ABN Intelligence moves beyond traditional reporting by connecting
            KPI, operational signals, enterprise systems, industrial data, AI
            analysis, and improvement opportunities into one executive
            perspective.
          </p>
        </div>

        <div className="executive-highlight">
          <div className="highlight-icon">
            <BarChart3 size={22} />
          </div>

          <div className="highlight-content">
            <span>EXECUTIVE POSITION</span>

            <strong>Intelligence Foundation Ready</strong>

            <p>
              ABN can connect existing enterprise, operational, and industrial
              data sources to create a unified intelligence environment without
              replacing the systems already in use.
            </p>
          </div>

          <div className="highlight-score">
            <strong>READY</strong>

            <span>INTELLIGENCE FOUNDATION</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          KPI
      ===================================================== */}

      <section className="insights-kpi-grid">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;

          return (
            <article className="insights-kpi-card" key={kpi.label}>
              <div className="kpi-icon">
                <Icon size={20} />
              </div>

              <div className="kpi-content">
                <span>{kpi.label}</span>

                <strong>{kpi.value}</strong>

                <small>{kpi.detail}</small>
              </div>

              <div className={`kpi-direction ${kpi.direction}`}>
                {kpi.direction === "up" && <TrendingUp size={14} />}

                {kpi.direction === "down" && <TrendingDown size={14} />}

                {kpi.direction === "neutral" && <Activity size={14} />}
              </div>
            </article>
          );
        })}
      </section>

      {/* =====================================================
          INSIGHT GRID
      ===================================================== */}

      <section className="insights-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">INTELLIGENCE AREAS</span>

            <h2>
              Identify.
              <br />
              Understand. Improve.
            </h2>
          </div>

          <p>
            Each intelligence area can connect to live enterprise data,
            operational systems, IoT devices, industrial assets, and AI models
            to create a continuously improving decision environment.
          </p>
        </div>

        <div className="insights-grid">
          {insights.map((insight, index) => {
            const Icon = insight.icon;

            return (
              <article className="insight-card" key={insight.title}>
                <div className="insight-card-top">
                  <div className="insight-icon">
                    <Icon size={21} />
                  </div>

                  <span
                    className={`insight-level ${insight.level.toLowerCase()}`}
                  >
                    {insight.level}
                  </span>
                </div>

                <div className="insight-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{insight.title}</h3>

                <p>{insight.description}</p>

                <div className="insight-metric">
                  <strong>{insight.value}</strong>

                  <span>{insight.trend}</span>
                </div>

                <a href="/insights" className="insight-link">
                  <span>Explore Insight</span>

                  <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE FLOW
      ===================================================== */}

      <section className="insights-flow-panel">
        <div className="flow-copy">
          <span className="section-eyebrow">ABN INTELLIGENCE FLOW</span>

          <h2>
            From Enterprise Data
            <br />
            to Executive Action.
          </h2>

          <p>
            The ABN intelligence layer continuously connects enterprise,
            operational, industrial, and technology data and converts it into
            context, analysis, recommendations, and actionable executive
            decisions.
          </p>
        </div>

        <div className="flow-list">
          {intelligenceStream.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="flow-item-wrapper" key={item.title}>
                <div
                  className={`flow-item ${
                    index === intelligenceStream.length - 1 ? "active" : ""
                  }`}
                >
                  <div className="flow-icon">
                    <Icon size={19} />
                  </div>

                  <div className="flow-content">
                    <span>{item.title}</span>

                    <strong>{item.description}</strong>
                  </div>
                </div>

                {index < intelligenceStream.length - 1 && (
                  <div className="flow-arrow">
                    <ArrowRight size={15} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          SIGNAL PANEL
      ===================================================== */}

      <section className="insights-signal-grid">
        <article className="signal-panel">
          <div className="signal-header">
            <div>
              <span className="section-eyebrow">SIGNAL MONITORING</span>

              <h2>Business Signals</h2>
            </div>

            <Activity size={18} />
          </div>

          <div className="signal-list">
            <div className="signal-row">
              <span>
                <i className="signal-dot positive" />
                Positive Signals
              </span>

              <strong>0</strong>
            </div>

            <div className="signal-row">
              <span>
                <i className="signal-dot attention" />
                Attention Required
              </span>

              <strong>0</strong>
            </div>

            <div className="signal-row">
              <span>
                <i className="signal-dot critical" />
                Critical Signals
              </span>

              <strong>0</strong>
            </div>
          </div>
        </article>

        <article className="signal-panel">
          <div className="signal-header">
            <div>
              <span className="section-eyebrow">IMPROVEMENT ENGINE</span>

              <h2>Opportunity Pipeline</h2>
            </div>

            <Lightbulb size={18} />
          </div>

          <div className="opportunity-list">
            <div className="opportunity-row">
              <span>Efficiency Opportunities</span>

              <strong>0</strong>
            </div>

            <div className="opportunity-row">
              <span>Cost Optimization</span>

              <strong>0</strong>
            </div>

            <div className="opportunity-row">
              <span>Predictive Opportunities</span>

              <strong>0</strong>
            </div>

            <div className="opportunity-row">
              <span>Strategic Opportunities</span>

              <strong>0</strong>
            </div>
          </div>
        </article>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="insights-cta">
        <div>
          <span className="section-eyebrow">BUILD YOUR INTELLIGENCE LAYER</span>

          <h2>
            Make your existing data
            <br />
            work harder.
          </h2>

          <p>
            Connect ERP, SAP, operational systems, industrial assets, IoT, and
            business data into an intelligence layer built for management
            decisions and continuous improvement.
          </p>
        </div>

        <a href="/contact" className="insights-button">
          <span>Talk to ABN</span>

          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}

export default Insights;
