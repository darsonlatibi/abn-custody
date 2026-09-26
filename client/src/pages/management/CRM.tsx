import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronRight,
  Clock3,
  ContactRound,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  RefreshCw,
  Search,
  //Star,
  Target,
  TrendingUp,
  UserPlus,
  UsersRound,
} from "lucide-react";

import "./CRM.css";

type SummaryCard = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  positive?: boolean;
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Customers",
    value: "2,486",
    change: "+8.7%",
    trend: "up",
    icon: <UsersRound size={19} />,
    positive: true,
  },
  {
    title: "New Leads",
    value: "184",
    change: "+14.2%",
    trend: "up",
    icon: <UserPlus size={19} />,
    positive: true,
  },
  {
    title: "Active Deals",
    value: "126",
    change: "+6.4%",
    trend: "up",
    icon: <Target size={19} />,
    positive: true,
  },
  {
    title: "Conversion Rate",
    value: "32.8%",
    change: "+3.9%",
    trend: "up",
    icon: <TrendingUp size={19} />,
    positive: true,
  },
];

const pipelineItems = [
  {
    label: "New Leads",
    value: "184",
    amount: "Rp 1,24 M",
    percentage: 76,
  },
  {
    label: "Qualified",
    value: "96",
    amount: "Rp 2,18 M",
    percentage: 62,
  },
  {
    label: "Proposal",
    value: "58",
    amount: "Rp 1,76 M",
    percentage: 48,
  },
  {
    label: "Negotiation",
    value: "34",
    amount: "Rp 1,32 M",
    percentage: 36,
  },
];

const activities = [
  {
    name: "PT Nusantara Industri",
    description: "Follow-up quotation",
    time: "10 min ago",
    type: "call",
    icon: <Phone size={15} />,
  },
  {
    name: "CV Sinar Abadi",
    description: "New sales inquiry",
    time: "35 min ago",
    type: "message",
    icon: <MessageSquare size={15} />,
  },
  {
    name: "PT Energi Mandiri",
    description: "Meeting scheduled",
    time: "1 hour ago",
    type: "meeting",
    icon: <CalendarCheck size={15} />,
  },
  {
    name: "PT Makmur Sentosa",
    description: "Email quotation sent",
    time: "2 hours ago",
    type: "email",
    icon: <Mail size={15} />,
  },
];

const customers = [
  {
    name: "PT Nusantara Industri",
    contact: "Budi Santoso",
    email: "[budi@nusantara.co.id](mailto:budi@nusantara.co.id)",
    segment: "Enterprise",
    value: "Rp 845.000.000",
    lastContact: "22 Sep 2026",
    status: "Active",
    statusClass: "active",
  },
  {
    name: "PT Energi Mandiri",
    contact: "Andi Wijaya",
    email: "[andi@energimandiri.co.id](mailto:andi@energimandiri.co.id)",
    segment: "Enterprise",
    value: "Rp 628.500.000",
    lastContact: "21 Sep 2026",
    status: "Active",
    statusClass: "active",
  },
  {
    name: "CV Sinar Abadi",
    contact: "Rina Pratama",
    email: "[rina@sinarabadi.co.id](mailto:rina@sinarabadi.co.id)",
    segment: "Business",
    value: "Rp 284.750.000",
    lastContact: "20 Sep 2026",
    status: "Follow Up",
    statusClass: "follow-up",
  },
  {
    name: "PT Makmur Sentosa",
    contact: "Dedi Kurniawan",
    email: "[dedi@makmursentosa.co.id](mailto:dedi@makmursentosa.co.id)",
    segment: "Business",
    value: "Rp 192.400.000",
    lastContact: "19 Sep 2026",
    status: "Prospect",
    statusClass: "prospect",
  },
];

const quickActions = [
  {
    title: "Add Customer",
    description: "Tambah customer baru",
    icon: <UserPlus />,
  },
  {
    title: "Create Lead",
    description: "Buat sales lead baru",
    icon: <Target />,
  },
  {
    title: "Schedule Activity",
    description: "Jadwalkan aktivitas",
    icon: <CalendarCheck />,
  },
  {
    title: "Send Message",
    description: "Hubungi customer",
    icon: <MessageSquare />,
  },
];

const CRM: React.FC = () => {
  return (
    <div className="crm-page">
      {" "}
      <header className="crm-header">
        {" "}
        <div>
          {" "}
          <h1>CRM</h1>{" "}
          <p>
            Customer relationship, sales pipeline and engagement
            management.{" "}
          </p>{" "}
        </div>
        <div className="crm-header-actions">
          <button type="button" className="crm-btn crm-btn-secondary">
            <RefreshCw size={15} />
            Refresh
          </button>

          <button type="button" className="crm-btn crm-btn-primary">
            <Plus size={16} />
            Add Customer
          </button>
        </div>
      </header>
      <section className="crm-summary-grid">
        {summaryCards.map((card) => (
          <article className="crm-card crm-summary-card" key={card.title}>
            <div className="crm-summary-card-top">
              <span>{card.title}</span>

              <div className="crm-summary-icon">{card.icon}</div>
            </div>

            <div className="crm-summary-value">{card.value}</div>

            <div
              className={`crm-summary-change ${
                card.positive ? "positive" : "negative"
              }`}
            >
              {card.trend === "up" ? (
                <ArrowUpRight size={13} />
              ) : (
                <ArrowDownRight size={13} />
              )}

              {card.change}

              <small>vs last month</small>
            </div>
          </article>
        ))}
      </section>
      <section className="crm-main-grid">
        <article className="crm-card crm-pipeline-card">
          <div className="crm-card-header">
            <div>
              <h2>Sales Pipeline</h2>
              <p>Current customer and lead opportunity pipeline.</p>
            </div>

            <select className="crm-select" defaultValue="month">
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <div className="crm-pipeline-total">
            <strong>Rp 6.50 M</strong>
            <span>Total pipeline opportunity</span>
          </div>

          <div className="crm-pipeline-list">
            {pipelineItems.map((item) => (
              <div className="crm-pipeline-item" key={item.label}>
                <div className="crm-pipeline-item-top">
                  <span>{item.label}</span>

                  <strong>
                    {item.value} · {item.amount}
                  </strong>
                </div>

                <div className="crm-progress">
                  <span
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <small>{item.percentage}% pipeline progression</small>
              </div>
            ))}
          </div>
        </article>

        <article className="crm-card crm-activity-card">
          <div className="crm-card-header">
            <div>
              <h2>Recent Activities</h2>
              <p>Latest customer engagement activities.</p>
            </div>

            <Clock3 size={20} />
          </div>

          <div className="crm-activity-list">
            {activities.map((activity) => (
              <div
                className="crm-activity-item"
                key={`${activity.name}-${activity.time}`}
              >
                <div className={`crm-activity-icon ${activity.type}`}>
                  {activity.icon}
                </div>

                <div className="crm-activity-content">
                  <strong>{activity.name}</strong>
                  <span>{activity.description}</span>

                  <small>{activity.time}</small>
                </div>

                <ChevronRight className="crm-activity-arrow" size={15} />
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="crm-card crm-customers-card">
        <div className="crm-card-header">
          <div>
            <h2>Customer Directory</h2>
            <p>Recent customers and relationship status.</p>
          </div>

          <div className="crm-table-actions">
            <div className="crm-search">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search customer..."
                aria-label="Search customer"
              />
            </div>

            <button type="button" className="crm-link-btn">
              View All
            </button>
          </div>
        </div>

        <div className="crm-table-wrapper">
          <table className="crm-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Segment</th>
                <th>Customer Value</th>
                <th>Last Contact</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.name}>
                  <td>
                    <div className="crm-customer">
                      <div className="crm-customer-icon">
                        <ContactRound size={15} />
                      </div>

                      <div>
                        <strong>{customer.name}</strong>
                        <small>{customer.email}</small>
                      </div>
                    </div>
                  </td>

                  <td>{customer.contact}</td>
                  <td>{customer.segment}</td>

                  <td className="crm-customer-value">{customer.value}</td>

                  <td>{customer.lastContact}</td>

                  <td>
                    <span className={`crm-status ${customer.statusClass}`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="crm-quick-grid">
        {quickActions.map((action) => (
          <button type="button" className="crm-quick-card" key={action.title}>
            {action.icon}

            <span>
              <strong>{action.title}</strong>
              <small>{action.description}</small>
            </span>
          </button>
        ))}
      </section>
    </div>
  );
};

export default CRM;
