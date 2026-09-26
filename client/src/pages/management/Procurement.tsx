import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ClipboardList,
  FileCheck2,
  PackageCheck,
  Plus,
  RefreshCw,
  ShoppingCart,
  Truck,
  WalletCards,
} from "lucide-react";

import "./Procurement.css";

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
    title: "Purchase Orders",
    value: "248",
    change: "+12.8%",
    trend: "up",
    icon: <ShoppingCart size={19} />,
    positive: true,
  },
  {
    title: "Pending Approval",
    value: "18",
    change: "-21.7%",
    trend: "down",
    icon: <ClipboardList size={19} />,
    positive: true,
  },
  {
    title: "Total Procurement",
    value: "Rp 8,42 M",
    change: "+9.6%",
    trend: "up",
    icon: <WalletCards size={19} />,
    positive: true,
  },
  {
    title: "On-Time Delivery",
    value: "94.8%",
    change: "+4.2%",
    trend: "up",
    icon: <Truck size={19} />,
    positive: true,
  },
];

const procurementProgress = [
  {
    label: "Raw Materials",
    amount: "Rp 3,24 M",
    percentage: 82,
    count: "84 orders",
  },
  {
    label: "Spare Parts",
    amount: "Rp 1,86 M",
    percentage: 67,
    count: "51 orders",
  },
  {
    label: "Equipment",
    amount: "Rp 2,15 M",
    percentage: 74,
    count: "38 orders",
  },
  {
    label: "Office Supplies",
    amount: "Rp 1,17 M",
    percentage: 49,
    count: "75 orders",
  },
];

const approvalItems = [
  {
    title: "Hydraulic Pump Assembly",
    code: "PR-2026-0184",
    amount: "Rp 185.000.000",
    status: "Pending Approval",
    statusClass: "pending",
  },
  {
    title: "Industrial Safety Helmet",
    code: "PR-2026-0182",
    amount: "Rp 42.500.000",
    status: "Pending Approval",
    statusClass: "pending",
  },
  {
    title: "Diesel Generator 100 KVA",
    code: "PR-2026-0179",
    amount: "Rp 318.000.000",
    status: "Needs Review",
    statusClass: "review",
  },
  {
    title: "Printer & Office Equipment",
    code: "PR-2026-0175",
    amount: "Rp 28.750.000",
    status: "Approved",
    statusClass: "approved",
  },
];

const purchaseOrders = [
  {
    reference: "PO-2026-0248",
    item: "Hydraulic Oil 15W-40",
    category: "Lubricants",
    supplier: "PT Makmur Industrial",
    total: "Rp 96.000.000",
    delivery: "28 Sep 2026",
    status: "Ordered",
    statusClass: "ordered",
  },
  {
    reference: "PO-2026-0247",
    item: "Bearing 6205 SKF",
    category: "Spare Parts",
    supplier: "PT Sumber Teknik",
    total: "Rp 64.800.000",
    delivery: "26 Sep 2026",
    status: "In Transit",
    statusClass: "transit",
  },
  {
    reference: "PO-2026-0246",
    item: "Safety Helmet",
    category: "PPE",
    supplier: "PT Safety Indonesia",
    total: "Rp 42.500.000",
    delivery: "25 Sep 2026",
    status: "Delivered",
    statusClass: "delivered",
  },
  {
    reference: "PO-2026-0245",
    item: "Electrical Control Panel",
    category: "Equipment",
    supplier: "PT Energi Nusantara",
    total: "Rp 275.000.000",
    delivery: "02 Oct 2026",
    status: "Pending",
    statusClass: "pending",
  },
];

const quickActions = [
  {
    title: "Create Purchase Order",
    description: "Buat purchase order baru",
    icon: <Plus />,
  },
  {
    title: "Purchase Request",
    description: "Kelola permintaan pembelian",
    icon: <ClipboardList />,
  },
  {
    title: "Supplier Management",
    description: "Kelola data supplier",
    icon: <Truck />,
  },
  {
    title: "Goods Receipt",
    description: "Catat penerimaan barang",
    icon: <PackageCheck />,
  },
];

const Procurement: React.FC = () => {
  return (
    <div className="procurement-page">
      {" "}
      <header className="procurement-header">
        {" "}
        <div>
          {" "}
          <h1>Procurement Management</h1>{" "}
          <p>
            Enterprise procurement, purchasing and supplier management.{" "}
          </p>{" "}
        </div>
        <div className="procurement-header-actions">
          <button
            type="button"
            className="procurement-btn procurement-btn-secondary"
          >
            <RefreshCw size={15} />
            Refresh
          </button>

          <button
            type="button"
            className="procurement-btn procurement-btn-primary"
          >
            <Plus size={16} />
            New Purchase Order
          </button>
        </div>
      </header>
      <section className="procurement-summary-grid">
        {summaryCards.map((card) => (
          <article
            className="procurement-card procurement-summary-card"
            key={card.title}
          >
            <div className="procurement-summary-card-top">
              <span>{card.title}</span>
              <div className="procurement-summary-icon">{card.icon}</div>
            </div>

            <div className="procurement-summary-value">{card.value}</div>

            <div
              className={`procurement-summary-change ${
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
      <section className="procurement-main-grid">
        <article className="procurement-card procurement-spending-card">
          <div className="procurement-card-header">
            <div>
              <h2>Procurement Spending</h2>
              <p>Purchase value by procurement category.</p>
            </div>

            <select className="procurement-select" defaultValue="2026">
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div className="procurement-spending-total">
            <strong>Rp 8.42 M</strong>
            <span>Total procurement value this year</span>
          </div>

          <div className="procurement-category-list">
            {procurementProgress.map((item) => (
              <div className="procurement-category-item" key={item.label}>
                <div className="procurement-category-top">
                  <span>{item.label}</span>
                  <strong>{item.amount}</strong>
                </div>

                <div className="procurement-progress">
                  <span style={{ width: `${item.percentage}%` }} />
                </div>

                <small>
                  {item.count} · {item.percentage}% of budget allocation
                </small>
              </div>
            ))}
          </div>
        </article>

        <article className="procurement-card procurement-approval-card">
          <div className="procurement-card-header">
            <div>
              <h2>Approval Queue</h2>
              <p>Purchase requests requiring action.</p>
            </div>

            <ClipboardList size={20} />
          </div>

          <div className="procurement-approval-list">
            {approvalItems.map((item) => (
              <div className="procurement-approval-item" key={item.code}>
                <div className="procurement-approval-icon">
                  <FileCheck2 size={17} />
                </div>

                <div className="procurement-approval-content">
                  <strong>{item.title}</strong>
                  <span>{item.code}</span>
                  <small>{item.amount}</small>
                </div>

                <span
                  className={`procurement-approval-badge ${item.statusClass}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="procurement-card procurement-orders-card">
        <div className="procurement-card-header">
          <div>
            <h2>Recent Purchase Orders</h2>
            <p>Latest procurement transactions and delivery status.</p>
          </div>

          <button type="button" className="procurement-link-btn">
            View All
          </button>
        </div>

        <div className="procurement-table-wrapper">
          <table className="procurement-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Item</th>
                <th>Category</th>
                <th>Supplier</th>
                <th>Total</th>
                <th>Delivery</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {purchaseOrders.map((order) => (
                <tr key={order.reference}>
                  <td>
                    <strong>{order.reference}</strong>
                  </td>

                  <td>
                    <div className="procurement-product">
                      <div className="procurement-product-icon">
                        <ShoppingCart size={15} />
                      </div>

                      <span>{order.item}</span>
                    </div>
                  </td>

                  <td>{order.category}</td>
                  <td>{order.supplier}</td>
                  <td className="procurement-order-total">{order.total}</td>
                  <td>{order.delivery}</td>

                  <td>
                    <span className={`procurement-status ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="procurement-quick-grid">
        {quickActions.map((action) => (
          <button
            type="button"
            className="procurement-quick-card"
            key={action.title}
          >
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

export default Procurement;
