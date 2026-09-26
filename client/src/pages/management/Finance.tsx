import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CreditCard,
  DollarSign,
  FileText,
  PieChart,
  Receipt,
  Wallet,
} from "lucide-react";
import "./Finance.css";

type SummaryCard = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Revenue",
    value: "Rp 1.285.000.000",
    change: "+12.8%",
    positive: true,
    icon: <ArrowUpRight size={22} />,
  },
  {
    title: "Total Expenses",
    value: "Rp 486.500.000",
    change: "+4.6%",
    positive: false,
    icon: <ArrowDownRight size={22} />,
  },
  {
    title: "Net Profit",
    value: "Rp 798.500.000",
    change: "+18.4%",
    positive: true,
    icon: <DollarSign size={22} />,
  },
  {
    title: "Cash Balance",
    value: "Rp 2.145.750.000",
    change: "+8.2%",
    positive: true,
    icon: <Wallet size={22} />,
  },
];

const recentTransactions = [
  {
    id: "INV-2026-0098",
    description: "Customer Invoice",
    category: "Sales",
    date: "23 Sep 2026",
    amount: "Rp 125.000.000",
    type: "income",
    status: "Paid",
  },
  {
    id: "EXP-2026-0142",
    description: "Vehicle Maintenance",
    category: "Fleet",
    date: "22 Sep 2026",
    amount: "Rp 18.750.000",
    type: "expense",
    status: "Paid",
  },
  {
    id: "PO-2026-0187",
    description: "Office Equipment",
    category: "Procurement",
    date: "21 Sep 2026",
    amount: "Rp 32.500.000",
    type: "expense",
    status: "Pending",
  },
  {
    id: "INV-2026-0097",
    description: "Industrial Service",
    category: "Sales",
    date: "20 Sep 2026",
    amount: "Rp 87.500.000",
    type: "income",
    status: "Paid",
  },
];

const expenseBreakdown = [
  { label: "Operations", value: "Rp 185.000.000", percentage: 38 },
  { label: "Fleet", value: "Rp 96.500.000", percentage: 20 },
  { label: "Procurement", value: "Rp 82.000.000", percentage: 17 },
  { label: "Payroll", value: "Rp 75.000.000", percentage: 15 },
  { label: "Other", value: "Rp 48.000.000", percentage: 10 },
];

const Finance: React.FC = () => {
  return (
    <div className="finance-page">
      {" "}
      <div className="finance-header">
        {" "}
        <div>
          {" "}
          <h1>Finance</h1>{" "}
          <p>Financial overview and transaction management</p>{" "}
        </div>
        <div className="finance-header-actions">
          <button className="finance-btn finance-btn-secondary">
            <FileText size={17} />
            Reports
          </button>

          <button className="finance-btn finance-btn-primary">
            <Receipt size={17} />
            New Transaction
          </button>
        </div>
      </div>
      <section className="finance-summary-grid">
        {summaryCards.map((card) => (
          <div className="finance-card summary-card" key={card.title}>
            <div className="summary-card-top">
              <span>{card.title}</span>
              <div className="summary-icon">{card.icon}</div>
            </div>

            <div className="summary-value">{card.value}</div>

            <div
              className={`summary-change ${
                card.positive ? "positive" : "negative"
              }`}
            >
              {card.positive ? (
                <ArrowUpRight size={15} />
              ) : (
                <ArrowDownRight size={15} />
              )}
              <span>{card.change}</span>
              <small>vs last month</small>
            </div>
          </div>
        ))}
      </section>
      <section className="finance-main-grid">
        <div className="finance-card finance-chart-card">
          <div className="finance-card-header">
            <div>
              <h2>Cash Flow</h2>
              <p>Revenue and expenses overview</p>
            </div>

            <select className="finance-select" defaultValue="6months">
              <option value="6months">Last 6 months</option>
              <option value="12months">Last 12 months</option>
              <option value="year">This year</option>
            </select>
          </div>

          <div className="cashflow-chart">
            <div className="chart-y-axis">
              <span>400M</span>
              <span>300M</span>
              <span>200M</span>
              <span>100M</span>
              <span>0</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line chart-zero" />

              <div className="chart-bars">
                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "62%" }} />
                    <span className="bar expense" style={{ height: "38%" }} />
                  </div>
                  <small>Apr</small>
                </div>

                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "72%" }} />
                    <span className="bar expense" style={{ height: "42%" }} />
                  </div>
                  <small>May</small>
                </div>

                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "68%" }} />
                    <span className="bar expense" style={{ height: "46%" }} />
                  </div>
                  <small>Jun</small>
                </div>

                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "82%" }} />
                    <span className="bar expense" style={{ height: "51%" }} />
                  </div>
                  <small>Jul</small>
                </div>

                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "76%" }} />
                    <span className="bar expense" style={{ height: "48%" }} />
                  </div>
                  <small>Aug</small>
                </div>

                <div className="chart-month">
                  <div className="bars">
                    <span className="bar income" style={{ height: "91%" }} />
                    <span className="bar expense" style={{ height: "55%" }} />
                  </div>
                  <small>Sep</small>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-legend">
            <span>
              <i className="legend-dot income-dot" />
              Revenue
            </span>

            <span>
              <i className="legend-dot expense-dot" />
              Expenses
            </span>
          </div>
        </div>

        <div className="finance-card breakdown-card">
          <div className="finance-card-header">
            <div>
              <h2>Expense Breakdown</h2>
              <p>Current month</p>
            </div>

            <PieChart size={21} />
          </div>

          <div className="expense-total">
            <strong>Rp 486.500.000</strong>
            <span>Total expenses</span>
          </div>

          <div className="expense-list">
            {expenseBreakdown.map((item) => (
              <div className="expense-item" key={item.label}>
                <div className="expense-item-top">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <div className="expense-progress">
                  <span style={{ width: `${item.percentage}%` }} />
                </div>

                <small>{item.percentage}%</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="finance-card transactions-card">
        <div className="finance-card-header">
          <div>
            <h2>Recent Transactions</h2>
            <p>Latest financial activities</p>
          </div>

          <button className="finance-link-btn">View All</button>
        </div>

        <div className="transaction-table-wrapper">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    <strong>{transaction.id}</strong>
                  </td>

                  <td>
                    <div className="transaction-description">
                      <div className={`transaction-icon ${transaction.type}`}>
                        {transaction.type === "income" ? (
                          <ArrowUpRight size={16} />
                        ) : (
                          <ArrowDownRight size={16} />
                        )}
                      </div>

                      <span>{transaction.description}</span>
                    </div>
                  </td>

                  <td>{transaction.category}</td>

                  <td>{transaction.date}</td>

                  <td className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === "income" ? "+" : "-"}
                    {transaction.amount}
                  </td>

                  <td>
                    <span
                      className={`transaction-status ${transaction.status.toLowerCase()}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="finance-quick-grid">
        <button className="finance-quick-card">
          <CreditCard size={22} />
          <span>
            <strong>Invoices</strong>
            <small>Manage customer invoices</small>
          </span>
        </button>

        <button className="finance-quick-card">
          <Receipt size={22} />
          <span>
            <strong>Expenses</strong>
            <small>Manage company expenses</small>
          </span>
        </button>

        <button className="finance-quick-card">
          <BarChart3 size={22} />
          <span>
            <strong>Financial Reports</strong>
            <small>View financial reports</small>
          </span>
        </button>

        <button className="finance-quick-card">
          <Wallet size={22} />
          <span>
            <strong>Accounts</strong>
            <small>Manage bank and cash accounts</small>
          </span>
        </button>
      </section>
    </div>
  );
};

export default Finance;
