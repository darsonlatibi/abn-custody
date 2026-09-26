import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  Clock3,
  FileText,
  GraduationCap,
  UserCheck,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";
import "./HR.css";

type SummaryCard = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Employees",
    value: "248",
    change: "+8.4%",
    positive: true,
    icon: <Users size={21} />,
  },
  {
    title: "Present Today",
    value: "231",
    change: "+3.2%",
    positive: true,
    icon: <UserCheck size={21} />,
  },
  {
    title: "On Leave",
    value: "11",
    change: "-2.1%",
    positive: true,
    icon: <CalendarDays size={21} />,
  },
  {
    title: "New Employees",
    value: "6",
    change: "+20.0%",
    positive: true,
    icon: <UserPlus size={21} />,
  },
];

const departmentBreakdown = [
  {
    label: "Operations",
    value: "82 Employees",
    percentage: 33,
  },
  {
    label: "Engineering",
    value: "51 Employees",
    percentage: 21,
  },
  {
    label: "Finance",
    value: "34 Employees",
    percentage: 14,
  },
  {
    label: "Administration",
    value: "31 Employees",
    percentage: 13,
  },
  {
    label: "Other Departments",
    value: "50 Employees",
    percentage: 19,
  },
];

const recentEmployees = [
  {
    id: "EMP-2026-0248",
    name: "Andi Pratama",
    position: "Senior Software Engineer",
    department: "Engineering",
    joinDate: "23 Sep 2026",
    status: "Active",
  },
  {
    id: "EMP-2026-0247",
    name: "Siti Rahma",
    position: "Finance Officer",
    department: "Finance",
    joinDate: "21 Sep 2026",
    status: "Active",
  },
  {
    id: "EMP-2026-0246",
    name: "Rizky Maulana",
    position: "Fleet Coordinator",
    department: "Operations",
    joinDate: "18 Sep 2026",
    status: "Active",
  },
  {
    id: "EMP-2026-0245",
    name: "Dewi Anggraini",
    position: "HR Administrator",
    department: "HR",
    joinDate: "16 Sep 2026",
    status: "Probation",
  },
];

const HR: React.FC = () => {
  return (
    <div className="hr-page">
      {" "}
      <div className="hr-header">
        {" "}
        <div>
          {" "}
          <h1>Human Resources</h1>{" "}
          <p>Employee management and workforce overview</p>{" "}
        </div>
        <div className="hr-header-actions">
          <button className="hr-btn hr-btn-secondary">
            <FileText size={17} />
            HR Reports
          </button>

          <button className="hr-btn hr-btn-primary">
            <UserPlus size={17} />
            Add Employee
          </button>
        </div>
      </div>
      <section className="hr-summary-grid">
        {summaryCards.map((card) => (
          <div className="hr-card summary-card" key={card.title}>
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
              <ArrowUpRight size={15} />

              <span>{card.change}</span>

              <small>vs last month</small>
            </div>
          </div>
        ))}
      </section>
      <section className="hr-main-grid">
        <div className="hr-card attendance-card">
          <div className="hr-card-header">
            <div>
              <h2>Attendance Overview</h2>
              <p>Employee attendance for this week</p>
            </div>

            <Clock3 size={21} />
          </div>

          <div className="attendance-overview">
            <div className="attendance-total">
              <strong>92.7%</strong>
              <span>Average attendance</span>
            </div>

            <div className="attendance-ring">
              <div className="attendance-ring-inner">
                <strong>231</strong>
                <span>Present</span>
              </div>
            </div>
          </div>

          <div className="attendance-stats">
            <div className="attendance-stat">
              <span className="attendance-dot present" />
              <div>
                <strong>231</strong>
                <small>Present</small>
              </div>
            </div>

            <div className="attendance-stat">
              <span className="attendance-dot leave" />
              <div>
                <strong>11</strong>
                <small>On Leave</small>
              </div>
            </div>

            <div className="attendance-stat">
              <span className="attendance-dot absent" />
              <div>
                <strong>6</strong>
                <small>Absent</small>
              </div>
            </div>
          </div>

          <div className="attendance-progress">
            <span style={{ width: "92.7%" }} />
          </div>

          <div className="attendance-footer">
            <span>Monthly attendance target</span>
            <strong>95%</strong>
          </div>
        </div>

        <div className="hr-card department-card">
          <div className="hr-card-header">
            <div>
              <h2>Departments</h2>
              <p>Employee distribution</p>
            </div>

            <UsersRound size={21} />
          </div>

          <div className="department-total">
            <strong>248</strong>
            <span>Total employees</span>
          </div>

          <div className="department-list">
            {departmentBreakdown.map((item) => (
              <div className="department-item" key={item.label}>
                <div className="department-item-top">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <div className="department-progress">
                  <span style={{ width: `${item.percentage}%` }} />
                </div>

                <small>{item.percentage}%</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hr-card employees-card">
        <div className="hr-card-header">
          <div>
            <h2>Recent Employees</h2>
            <p>Latest employee records</p>
          </div>

          <button className="hr-link-btn">View All</button>
        </div>

        <div className="employee-table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Join Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <strong>{employee.id}</strong>
                  </td>

                  <td>
                    <div className="employee-description">
                      <div className="employee-avatar">
                        <Users size={15} />
                      </div>

                      <span>{employee.name}</span>
                    </div>
                  </td>

                  <td>{employee.position}</td>

                  <td>{employee.department}</td>

                  <td>{employee.joinDate}</td>

                  <td>
                    <span
                      className={`employee-status ${employee.status.toLowerCase()}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="hr-quick-grid">
        <button className="hr-quick-card">
          <Users size={22} />

          <span>
            <strong>Employees</strong>
            <small>Manage employee records</small>
          </span>
        </button>

        <button className="hr-quick-card">
          <ClipboardCheck size={22} />

          <span>
            <strong>Attendance</strong>
            <small>Monitor employee attendance</small>
          </span>
        </button>

        <button className="hr-quick-card">
          <CalendarDays size={22} />

          <span>
            <strong>Leave Management</strong>
            <small>Manage leave requests</small>
          </span>
        </button>

        <button className="hr-quick-card">
          <GraduationCap size={22} />

          <span>
            <strong>Training</strong>
            <small>Manage employee development</small>
          </span>
        </button>

        <button className="hr-quick-card">
          <BriefcaseBusiness size={22} />

          <span>
            <strong>Positions</strong>
            <small>Manage jobs and positions</small>
          </span>
        </button>

        <button className="hr-quick-card">
          <FileText size={22} />

          <span>
            <strong>HR Reports</strong>
            <small>View workforce reports</small>
          </span>
        </button>
      </section>
    </div>
  );
};

export default HR;
