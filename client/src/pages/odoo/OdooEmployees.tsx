import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, RefreshCw, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../stores/store";
import { getOdooEmployees } from "../../features/odoo/odooSlice";

import "./OdooEmployees.css";

const OdooEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { employees, employeesCount, employeesLoading, employeesError } =
    useSelector((state: RootState) => state.odoo);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getOdooEmployees());
  }, [dispatch]);

  const filteredEmployees = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return employees;
    }

    return employees.filter((employee) =>
      [
        employee.name,
        employee.work_email || "",
        employee.work_phone || "",
        employee.mobile_phone || "",
        employee.job_title || "",
        employee.department_id ? employee.department_id[1] : "",
        employee.company_id ? employee.company_id[1] : "",
        employee.user_id ? employee.user_id[1] : "",
        String(employee.id),
      ].some((value) => value.toLowerCase().includes(keyword)),
    );
  }, [employees, search]);

  const handleRefresh = () => {
    dispatch(getOdooEmployees());
  };

  return (
    <div className="odoo-employees-page">
      <div className="odoo-employees-container">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="odoo-employees-header">
          <div className="odoo-employees-heading">
            <div className="odoo-employees-heading-icon">
              <BriefcaseBusiness size={20} strokeWidth={2} />
            </div>

            <div>
              <span className="odoo-employees-eyebrow">
                ABN INDUSTRY 4.0 · ODOO
              </span>

              <h1>Odoo Employees</h1>

              <p>Employee records synchronized from Odoo</p>
            </div>
          </div>

          <button
            type="button"
            className="odoo-employees-refresh"
            onClick={handleRefresh}
            disabled={employeesLoading}
          >
            <RefreshCw
              size={16}
              className={employeesLoading ? "odoo-employees-spin" : ""}
            />

            <span>Refresh</span>
          </button>
        </header>

        {/* =====================================================
            TOOLBAR
            ===================================================== */}

        <section className="odoo-employees-toolbar">
          <div className="odoo-employees-search">
            <Search
              size={17}
              className="odoo-employees-search-icon"
              aria-hidden="true"
            />

            <input
              type="text"
              placeholder="Search employee, department, company..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search Odoo employees"
            />
          </div>

          <div className="odoo-employees-meta">
            <span>
              Total Odoo Employees: <strong>{employeesCount}</strong>
            </span>

            <span className="odoo-employees-meta-separator">·</span>

            <span>
              Showing: <strong>{filteredEmployees.length}</strong>
            </span>
          </div>
        </section>

        {/* =====================================================
            ERROR
            ===================================================== */}

        {employeesError && (
          <div className="odoo-employees-alert" role="alert">
            <strong>Failed to load Odoo Employees:</strong> {employeesError}
          </div>
        )}

        {/* =====================================================
            TABLE
            ===================================================== */}

        <section className="odoo-employees-table-card">
          <div className="odoo-employees-table-wrap">
            <table className="odoo-employees-table">
              <thead>
                <tr>
                  <th className="odoo-employees-col-id">ID</th>

                  <th>Employee</th>
                  <th>Contact</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Company</th>
                  <th>Odoo User</th>

                  <th className="odoo-employees-col-status">Status</th>
                </tr>
              </thead>

              <tbody>
                {/* LOADING */}

                {employeesLoading && employees.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="odoo-employees-state">
                      <RefreshCw size={24} className="odoo-employees-spin" />

                      <span>Loading Odoo employees...</span>
                    </td>
                  </tr>
                ) : /* EMPTY */

                filteredEmployees.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="odoo-employees-state">
                      <BriefcaseBusiness size={24} />

                      <span>No Odoo employees found.</span>
                    </td>
                  </tr>
                ) : (
                  /* DATA */

                  filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      {/* ID */}

                      <td className="odoo-employees-id">{employee.id}</td>

                      {/* EMPLOYEE */}

                      <td>
                        <div className="odoo-employees-name">
                          {employee.name}
                        </div>

                        {employee.work_email && (
                          <small className="odoo-employees-subtext">
                            {employee.work_email}
                          </small>
                        )}
                      </td>

                      {/* CONTACT */}

                      <td>
                        <div className="odoo-employees-contact">
                          {employee.work_phone || "-"}
                        </div>

                        {employee.mobile_phone && (
                          <small className="odoo-employees-subtext">
                            {employee.mobile_phone}
                          </small>
                        )}
                      </td>

                      {/* JOB TITLE */}

                      <td>{employee.job_title || "-"}</td>

                      {/* DEPARTMENT */}

                      <td>
                        <span className="odoo-employees-relation">
                          {employee.department_id
                            ? employee.department_id[1]
                            : "-"}
                        </span>
                      </td>

                      {/* COMPANY */}

                      <td>
                        <span className="odoo-employees-relation">
                          {employee.company_id ? employee.company_id[1] : "-"}
                        </span>
                      </td>

                      {/* ODOO USER */}

                      <td>
                        {employee.user_id ? (
                          <span className="odoo-employees-user">
                            {employee.user_id[1]}
                          </span>
                        ) : (
                          <span className="odoo-employees-no-user">
                            No user
                          </span>
                        )}
                      </td>

                      {/* STATUS */}

                      <td>
                        <span
                          className={`odoo-employees-status ${
                            employee.active ? "is-active" : "is-inactive"
                          }`}
                        >
                          <span className="odoo-employees-status-dot" />

                          {employee.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OdooEmployees;
