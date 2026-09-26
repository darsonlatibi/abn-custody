import React from "react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  ClipboardList,
  Package,
  PackageCheck,
  RefreshCw,
  //Search,
  Truck,
  Warehouse,
} from "lucide-react";
import "./Inventory.css";

type SummaryCard = {
  title: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
  tone?: "teal" | "orange" | "blue" | "purple";
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Items",
    value: "2,486",
    detail: "+8.4% vs last month",
    icon: <Boxes size={21} />,
    tone: "teal",
  },
  {
    title: "Inventory Value",
    value: "Rp 3.285.750.000",
    detail: "+6.8% vs last month",
    icon: <Package size={21} />,
    tone: "blue",
  },
  {
    title: "Low Stock Items",
    value: "38",
    detail: "12 require immediate action",
    icon: <AlertTriangle size={21} />,
    tone: "orange",
  },
  {
    title: "Warehouses",
    value: "6",
    detail: "All warehouses operational",
    icon: <Warehouse size={21} />,
    tone: "purple",
  },
];

const stockMovements = [
  {
    id: "STK-2026-0187",
    item: "Hydraulic Oil ISO 68",
    category: "Maintenance",
    warehouse: "Main Warehouse",
    date: "23 Sep 2026",
    quantity: "+120",
    type: "in",
    status: "Received",
  },
  {
    id: "STK-2026-0186",
    item: "Safety Helmet",
    category: "Safety",
    warehouse: "Site Warehouse",
    date: "23 Sep 2026",
    quantity: "-35",
    type: "out",
    status: "Issued",
  },
  {
    id: "STK-2026-0185",
    item: "Diesel Filter",
    category: "Fleet",
    warehouse: "Main Warehouse",
    date: "22 Sep 2026",
    quantity: "-18",
    type: "out",
    status: "Issued",
  },
  {
    id: "STK-2026-0184",
    item: "Industrial Bearing 6205",
    category: "Spare Parts",
    warehouse: "Spare Parts",
    date: "21 Sep 2026",
    quantity: "+75",
    type: "in",
    status: "Received",
  },
  {
    id: "STK-2026-0183",
    item: "Electrical Cable 4mm",
    category: "Electrical",
    warehouse: "Project Warehouse",
    date: "20 Sep 2026",
    quantity: "-240",
    type: "out",
    status: "Issued",
  },
];

const lowStockItems = [
  {
    item: "Hydraulic Filter",
    sku: "FLT-HYD-0042",
    stock: 8,
    minimum: 25,
    unit: "pcs",
  },
  {
    item: "Engine Oil 15W-40",
    sku: "OIL-ENG-0018",
    stock: 14,
    minimum: 40,
    unit: "drum",
  },
  {
    item: "Safety Gloves",
    sku: "PPE-GLV-0091",
    stock: 32,
    minimum: 100,
    unit: "box",
  },
  {
    item: "Brake Pad Set",
    sku: "FLT-BRK-0027",
    stock: 5,
    minimum: 15,
    unit: "set",
  },
];

const Inventory: React.FC = () => {
  return (
    <div className="inventory-page">
      {" "}
      <div className="inventory-header">
        {" "}
        <div>
          {" "}
          <h1>Inventory</h1>{" "}
          <p>Inventory, warehouse and stock management</p>{" "}
        </div>
        <div className="inventory-header-actions">
          <button className="inventory-btn inventory-btn-secondary">
            <RefreshCw size={16} />
            Stock Adjustment
          </button>

          <button className="inventory-btn inventory-btn-primary">
            <PackageCheck size={17} />
            Add Inventory
          </button>
        </div>
      </div>
      <section className="inventory-summary-grid">
        {summaryCards.map((card) => (
          <div
            className="inventory-card inventory-summary-card"
            key={card.title}
          >
            <div className="inventory-summary-top">
              <span>{card.title}</span>

              <div className={`inventory-summary-icon ${card.tone || "teal"}`}>
                {card.icon}
              </div>
            </div>

            <div className="inventory-summary-value">{card.value}</div>

            <div
              className={`inventory-summary-detail ${
                card.tone === "orange" ? "warning" : "positive"
              }`}
            >
              {card.tone === "orange" ? (
                <AlertTriangle size={13} />
              ) : (
                <ArrowUpRight size={13} />
              )}

              <span>{card.detail}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="inventory-main-grid">
        <div className="inventory-card inventory-stock-card">
          <div className="inventory-card-header">
            <div>
              <h2>Stock Movement</h2>
              <p>Latest inventory activities</p>
            </div>

            <select
              className="inventory-select"
              defaultValue="7days"
              aria-label="Stock movement period"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
            </select>
          </div>

          <div className="inventory-movement-chart">
            <div className="inventory-chart-y-axis">
              <span>500</span>
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>

            <div className="inventory-chart-area">
              <div className="inventory-grid-line" />
              <div className="inventory-grid-line" />
              <div className="inventory-grid-line" />
              <div className="inventory-grid-line" />
              <div className="inventory-grid-line" />
              <div className="inventory-grid-line inventory-grid-zero" />

              <div className="inventory-chart-bars">
                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "58%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "42%" }}
                    />
                  </div>
                  <small>Mon</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "72%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "54%" }}
                    />
                  </div>
                  <small>Tue</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "48%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "68%" }}
                    />
                  </div>
                  <small>Wed</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "82%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "61%" }}
                    />
                  </div>
                  <small>Thu</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "67%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "75%" }}
                    />
                  </div>
                  <small>Fri</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "91%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "57%" }}
                    />
                  </div>
                  <small>Sat</small>
                </div>

                <div className="inventory-chart-day">
                  <div className="inventory-bars">
                    <span
                      className="inventory-bar stock-in"
                      style={{ height: "54%" }}
                    />
                    <span
                      className="inventory-bar stock-out"
                      style={{ height: "38%" }}
                    />
                  </div>
                  <small>Sun</small>
                </div>
              </div>
            </div>
          </div>

          <div className="inventory-chart-legend">
            <span>
              <i className="inventory-legend-dot stock-in-dot" />
              Stock In
            </span>

            <span>
              <i className="inventory-legend-dot stock-out-dot" />
              Stock Out
            </span>
          </div>
        </div>

        <div className="inventory-card inventory-low-stock-card">
          <div className="inventory-card-header">
            <div>
              <h2>Low Stock</h2>
              <p>Items below minimum level</p>
            </div>

            <AlertTriangle size={21} />
          </div>

          <div className="inventory-low-stock-list">
            {lowStockItems.map((item) => {
              const percentage = Math.min(
                100,
                Math.round((item.stock / item.minimum) * 100),
              );

              return (
                <div className="inventory-low-stock-item" key={item.sku}>
                  <div className="inventory-low-stock-top">
                    <div>
                      <strong>{item.item}</strong>
                      <small>{item.sku}</small>
                    </div>

                    <span>
                      {item.stock} / {item.minimum} {item.unit}
                    </span>
                  </div>

                  <div className="inventory-progress">
                    <span style={{ width: `${percentage}%` }} />
                  </div>

                  <div className="inventory-low-stock-bottom">
                    <small>Current stock</small>
                    <strong>{percentage}%</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="inventory-card inventory-table-card">
        <div className="inventory-card-header">
          <div>
            <h2>Recent Stock Movements</h2>
            <p>Latest incoming and outgoing inventory transactions</p>
          </div>

          <button className="inventory-link-btn">View All</button>
        </div>

        <div className="inventory-table-wrapper">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Item</th>
                <th>Category</th>
                <th>Warehouse</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {stockMovements.map((movement) => (
                <tr key={movement.id}>
                  <td>
                    <strong>{movement.id}</strong>
                  </td>

                  <td>
                    <div className="inventory-item-description">
                      <div
                        className={`inventory-movement-icon ${movement.type}`}
                      >
                        {movement.type === "in" ? (
                          <ArrowUpRight size={15} />
                        ) : (
                          <ArrowDownRight size={15} />
                        )}
                      </div>

                      <span>{movement.item}</span>
                    </div>
                  </td>

                  <td>{movement.category}</td>

                  <td>
                    <span className="inventory-warehouse">
                      <Warehouse size={13} />
                      {movement.warehouse}
                    </span>
                  </td>

                  <td>{movement.date}</td>

                  <td className={`inventory-quantity ${movement.type}`}>
                    {movement.quantity}
                  </td>

                  <td>
                    <span
                      className={`inventory-status ${
                        movement.type === "in" ? "received" : "issued"
                      }`}
                    >
                      {movement.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="inventory-quick-grid">
        <button className="inventory-quick-card">
          <Package size={22} />
          <span>
            <strong>Items</strong>
            <small>Manage inventory items and SKU</small>
          </span>
        </button>

        <button className="inventory-quick-card">
          <Warehouse size={22} />
          <span>
            <strong>Warehouses</strong>
            <small>Manage warehouses and locations</small>
          </span>
        </button>

        <button className="inventory-quick-card">
          <Truck size={22} />
          <span>
            <strong>Stock Transfer</strong>
            <small>Transfer stock between warehouses</small>
          </span>
        </button>

        <button className="inventory-quick-card">
          <ClipboardList size={22} />
          <span>
            <strong>Stock Reports</strong>
            <small>View inventory and stock reports</small>
          </span>
        </button>
      </section>
    </div>
  );
};

export default Inventory;
