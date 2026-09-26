import React from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  MonitorCog,
  Network,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SoftwareDevelopment.css";
type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};
const services: Service[] = [
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Pengembangan aplikasi web modern untuk kebutuhan operasional, monitoring, administrasi, dan bisnis perusahaan.",
    features: [
      "React & TypeScript",
      "Node.js & REST API",
      "Responsive interface",
      "Role-based access",
    ],
  },
  {
    icon: MonitorCog,
    title: "Industrial Dashboard",
    description:
      "Dashboard realtime untuk memantau KPI, mesin, produksi, armada, energi, maintenance, dan aktivitas operasional.",
    features: [
      "Realtime monitoring",
      "KPI & analytics",
      "Interactive charts",
      "Alarm & notification",
    ],
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Menghubungkan berbagai sistem perusahaan agar data dapat mengalir secara terintegrasi dan terkontrol.",
    features: ["REST API", "WebSocket", "MQTT", "Third-party integration"],
  },
  {
    icon: Database,
    title: "Data & Analytics Platform",
    description:
      "Platform pengolahan data untuk membantu perusahaan mendapatkan insight dari data operasional.",
    features: [
      "Centralized database",
      "Data visualization",
      "Operational reports",
      "Business intelligence",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Application",
    description:
      "Implementasi aplikasi dan layanan backend pada infrastruktur cloud untuk akses yang fleksibel dan scalable.",
    features: [
      "Cloud deployment",
      "API services",
      "Database services",
      "Monitoring",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Software",
    description:
      "Software enterprise dengan struktur akses, keamanan, audit, dan workflow yang disesuaikan dengan kebutuhan perusahaan.",
    features: ["Authentication", "Authorization", "Audit trail", "Secure API"],
  },
];
const solutions = [
  {
    icon: Gauge,
    title: "Operational Monitoring",
    description:
      "Pantau aktivitas operasional perusahaan dalam satu dashboard terintegrasi.",
  },
  {
    icon: Workflow,
    title: "Digital Workflow",
    description:
      "Digitalisasi proses kerja manual menjadi workflow yang lebih cepat dan terukur.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Ubah data operasional menjadi informasi dan KPI untuk mendukung keputusan.",
  },
  {
    icon: ServerCog,
    title: "Backend Infrastructure",
    description:
      "Bangun backend yang stabil untuk aplikasi, API, database, dan integrasi sistem.",
  },
];
const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "REST API",
  "WebSocket",
  "MQTT",
  "Docker",
  "Cloud",
];
const SoftwareDevelopment: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="software-page">
      {" "}
      {/* ===================================================== HERO ===================================================== */}{" "}
      <section className="software-hero">
        {" "}
        <div className="software-hero-grid" />{" "}
        <div className="software-container software-hero-content">
          {" "}
          <div className="software-hero-copy">
            {" "}
            <div className="software-eyebrow">
              {" "}
              <Code2 size={16} />{" "}
              <span>DIGITAL & SOFTWARE DEVELOPMENT</span>{" "}
            </div>{" "}
            <h1>
              {" "}
              Software <span> Development</span> untuk Transformasi Digital
              Industri{" "}
            </h1>{" "}
            <p>
              {" "}
              Kami membangun software modern yang menghubungkan proses bisnis,
              data, manusia, perangkat, dan infrastruktur menjadi satu ekosistem
              digital yang terintegrasi.{" "}
            </p>{" "}
            <div className="software-hero-actions">
              {" "}
              <button
                type="button"
                className="software-btn software-btn-primary"
                onClick={() => navigate("/contact")}
              >
                {" "}
                Konsultasi Project <ArrowRight size={18} />{" "}
              </button>{" "}
              <button
                type="button"
                className="software-btn software-btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                {" "}
                Lihat Portfolio{" "}
              </button>{" "}
            </div>{" "}
            <div className="software-hero-points">
              {" "}
              <div>
                {" "}
                <CheckCircle2 size={17} />{" "}
                <span>Scalable Architecture</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <CheckCircle2 size={17} /> <span>Realtime Data</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <CheckCircle2 size={17} /> <span>Industrial Ready</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* SYSTEM VISUAL */}{" "}
          <div className="software-hero-visual">
            {" "}
            <div className="software-system-card">
              {" "}
              <div className="software-system-header">
                {" "}
                <div>
                  {" "}
                  <span className="software-status-dot" /> SYSTEM ONLINE{" "}
                </div>{" "}
                <Settings2 size={18} />{" "}
              </div>{" "}
              <div className="software-system-main">
                {" "}
                <div className="software-code-panel">
                  {" "}
                  <div className="software-code-line">
                    {" "}
                    <span className="code-blue">const</span>{" "}
                    <span className="code-white">platform</span>{" "}
                    <span className="code-muted">=</span>{" "}
                    <span className="code-green">ABN</span>{" "}
                  </div>{" "}
                  <div className="software-code-line">
                    {" "}
                    <span className="code-blue">await</span>{" "}
                    <span className="code-white">connect</span>{" "}
                    <span className="code-muted">(</span>{" "}
                    <span className="code-orange">"industrial"</span>{" "}
                    <span className="code-muted">);</span>{" "}
                  </div>{" "}
                  <div className="software-code-line">
                    {" "}
                    <span className="code-blue">return</span>{" "}
                    <span className="code-white">realtimeData</span>{" "}
                    <span className="code-muted">;</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="software-system-flow">
                  {" "}
                  <div className="software-flow-node">
                    {" "}
                    <Database size={20} /> <span>DATA</span>{" "}
                  </div>{" "}
                  <div className="software-flow-line" />{" "}
                  <div className="software-flow-node software-flow-active">
                    {" "}
                    <Code2 size={20} /> <span>API</span>{" "}
                  </div>{" "}
                  <div className="software-flow-line" />{" "}
                  <div className="software-flow-node">
                    {" "}
                    <MonitorCog size={20} /> <span>APP</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="software-system-footer">
                {" "}
                <div>
                  {" "}
                  <span>API</span> <strong>99.99%</strong>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <span>DATA</span> <strong>REALTIME</strong>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <span>SECURITY</span> <strong>ACTIVE</strong>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== INTRO ===================================================== */}{" "}
      <section className="software-section software-intro">
        {" "}
        <div className="software-container">
          {" "}
          <div className="software-section-heading">
            {" "}
            <div className="software-eyebrow">
              {" "}
              <Layers3 size={16} /> <span>OUR CAPABILITY</span>{" "}
            </div>{" "}
            <h2>
              {" "}
              Software bukan hanya aplikasi. <br />{" "}
              <span>Software adalah infrastruktur digital.</span>{" "}
            </h2>{" "}
            <p>
              {" "}
              ABN membantu perusahaan membangun sistem digital yang mampu
              berkembang mengikuti kebutuhan operasional, mulai dari aplikasi
              internal hingga platform Industry 4.0.{" "}
            </p>{" "}
          </div>{" "}
          <div className="software-capability-grid">
            {" "}
            <div className="software-capability-card">
              {" "}
              <div className="software-capability-icon">
                {" "}
                <Code2 />{" "}
              </div>{" "}
              <strong>Build</strong>{" "}
              <span>
                {" "}
                Membangun aplikasi sesuai kebutuhan bisnis dan operasional.{" "}
              </span>{" "}
            </div>{" "}
            <div className="software-capability-card">
              {" "}
              <div className="software-capability-icon">
                {" "}
                <Network />{" "}
              </div>{" "}
              <strong>Connect</strong>{" "}
              <span>
                {" "}
                Menghubungkan aplikasi, perangkat, database, dan sistem
                lama.{" "}
              </span>{" "}
            </div>{" "}
            <div className="software-capability-card">
              {" "}
              <div className="software-capability-icon">
                {" "}
                <BarChart3 />{" "}
              </div>{" "}
              <strong>Analyze</strong>{" "}
              <span>
                {" "}
                Mengubah data menjadi informasi dan insight yang berguna.{" "}
              </span>{" "}
            </div>{" "}
            <div className="software-capability-card">
              {" "}
              <div className="software-capability-icon">
                {" "}
                <Rocket />{" "}
              </div>{" "}
              <strong>Scale</strong>{" "}
              <span>
                {" "}
                Menyiapkan arsitektur agar sistem dapat berkembang bersama
                bisnis.{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== SERVICES ===================================================== */}{" "}
      <section className="software-section software-services">
        {" "}
        <div className="software-container">
          {" "}
          <div className="software-section-heading centered">
            {" "}
            <div className="software-eyebrow">
              {" "}
              <MonitorCog size={16} /> <span>SOFTWARE SERVICES</span>{" "}
            </div>{" "}
            <h2>
              {" "}
              Solusi Software untuk <span> Kebutuhan Industri</span>{" "}
            </h2>{" "}
            <p>
              {" "}
              Dari aplikasi operasional sampai platform enterprise, kami
              membangun solusi yang terukur dan siap dikembangkan.{" "}
            </p>{" "}
          </div>{" "}
          <div className="software-service-grid">
            {" "}
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="software-service-card" key={service.title}>
                  {" "}
                  <div className="software-service-icon">
                    {" "}
                    <Icon size={24} />{" "}
                  </div>{" "}
                  <h3>{service.title}</h3> <p>{service.description}</p>{" "}
                  <ul>
                    {" "}
                    {service.features.map((feature) => (
                      <li key={feature}>
                        {" "}
                        <CheckCircle2 size={15} /> <span>{feature}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <button
                    type="button"
                    className="software-card-link"
                    onClick={() => navigate("/contact")}
                  >
                    {" "}
                    Discuss Project <ArrowRight size={16} />{" "}
                  </button>{" "}
                </article>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== SOLUTIONS ===================================================== */}{" "}
      <section className="software-section software-solutions">
        {" "}
        <div className="software-container">
          {" "}
          <div className="software-solution-layout">
            {" "}
            <div className="software-solution-copy">
              {" "}
              <div className="software-eyebrow">
                {" "}
                <Workflow size={16} /> <span>BUSINESS SOLUTIONS</span>{" "}
              </div>{" "}
              <h2>
                {" "}
                Dari masalah operasional{" "}
                <span> menjadi sistem digital.</span>{" "}
              </h2>{" "}
              <p>
                {" "}
                Kami tidak hanya mengembangkan aplikasi. Kami memahami proses
                bisnis dan menerjemahkannya menjadi solusi digital yang dapat
                digunakan oleh tim operasional.{" "}
              </p>{" "}
              <button
                type="button"
                className="software-btn software-btn-primary"
                onClick={() => navigate("/contact")}
              >
                {" "}
                Mulai Diskusi <ArrowRight size={18} />{" "}
              </button>{" "}
            </div>{" "}
            <div className="software-solution-grid">
              {" "}
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div className="software-solution-card" key={solution.title}>
                    {" "}
                    <Icon size={23} /> <h3>{solution.title}</h3>{" "}
                    <p>{solution.description}</p>{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== TECHNOLOGY ===================================================== */}{" "}
      <section className="software-section software-technology">
        {" "}
        <div className="software-container">
          {" "}
          <div className="software-tech-layout">
            {" "}
            <div>
              {" "}
              <div className="software-eyebrow">
                {" "}
                <ServerCog size={16} /> <span>TECHNOLOGY STACK</span>{" "}
              </div>{" "}
              <h2>
                {" "}
                Dibangun dengan <span> teknologi modern.</span>{" "}
              </h2>{" "}
              <p>
                {" "}
                Teknologi dipilih berdasarkan kebutuhan project, reliability,
                scalability, security, dan kemudahan pengembangan jangka
                panjang.{" "}
              </p>{" "}
            </div>{" "}
            <div className="software-tech-list">
              {" "}
              {technologies.map((technology) => (
                <div className="software-tech-item" key={technology}>
                  {" "}
                  <CheckCircle2 size={16} /> <span>{technology}</span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== CTA ===================================================== */}{" "}
      <section className="software-cta">
        {" "}
        <div className="software-container">
          {" "}
          <div className="software-cta-inner">
            {" "}
            <div>
              {" "}
              <div className="software-eyebrow">
                {" "}
                <Smartphone size={16} />{" "}
                <span>START YOUR DIGITAL PROJECT</span>{" "}
              </div>{" "}
              <h2>
                {" "}
                Siap membangun <span> sistem digital Anda?</span>{" "}
              </h2>{" "}
              <p>
                {" "}
                Diskusikan kebutuhan aplikasi, integrasi sistem, dashboard, IoT,
                fleet management, atau platform Industry 4.0 bersama tim
                ABN.{" "}
              </p>{" "}
            </div>{" "}
            <button
              type="button"
              className="software-btn software-btn-light"
              onClick={() => navigate("/contact")}
            >
              {" "}
              Hubungi ABN <ArrowRight size={18} />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
};
export default SoftwareDevelopment;
