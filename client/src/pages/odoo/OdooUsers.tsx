import React, { useEffect, useMemo, useState } from "react";
import { RefreshCw, Search, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../stores/store";
import { getOdooUsers } from "../../features/odoo/odooSlice";

import "./OdooUsers.css";

const OdooUsers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, usersCount, usersLoading, usersError } = useSelector(
    (state: RootState) => state.odoo,
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getOdooUsers());
  }, [dispatch]);

  const filteredUsers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return users;
    }

    return users.filter((user) =>
      [user.name, user.login, user.email, String(user.id)].some((value) =>
        value.toLowerCase().includes(keyword),
      ),
    );
  }, [users, search]);

  const handleRefresh = () => {
    dispatch(getOdooUsers());
  };

  return (
    <div className="odoo-users-page">
      <div className="odoo-users-container">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="odoo-users-header">
          <div className="odoo-users-heading">
            <div className="odoo-users-heading-icon">
              <Users size={20} strokeWidth={2} />
            </div>

            <div>
              <span className="odoo-users-eyebrow">
                ABN INDUSTRY 4.0 · ODOO
              </span>

              <h1>Odoo Users</h1>

              <p>User accounts synchronized from Odoo</p>
            </div>
          </div>

          <button
            type="button"
            className="odoo-users-refresh"
            onClick={handleRefresh}
            disabled={usersLoading}
          >
            <RefreshCw
              size={16}
              className={usersLoading ? "odoo-users-spin" : ""}
            />

            <span>Refresh</span>
          </button>
        </header>

        {/* =====================================================
            TOOLBAR
            ===================================================== */}

        <section className="odoo-users-toolbar">
          <div className="odoo-users-search">
            <Search
              size={17}
              className="odoo-users-search-icon"
              aria-hidden="true"
            />

            <input
              type="text"
              placeholder="Search name, login, email, or ID..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search Odoo users"
            />
          </div>

          <div className="odoo-users-meta">
            <span>
              Total Odoo Users: <strong>{usersCount}</strong>
            </span>

            <span className="odoo-users-meta-separator">·</span>

            <span>
              Showing: <strong>{filteredUsers.length}</strong>
            </span>
          </div>
        </section>

        {/* =====================================================
            ERROR
            ===================================================== */}

        {usersError && (
          <div className="odoo-users-alert" role="alert">
            <strong>Failed to load Odoo Users:</strong> {usersError}
          </div>
        )}

        {/* =====================================================
            TABLE
            ===================================================== */}

        <section className="odoo-users-table-card">
          <div className="odoo-users-table-wrap">
            <table className="odoo-users-table">
              <thead>
                <tr>
                  <th className="odoo-users-col-id">ID</th>
                  <th>Name</th>
                  <th>Login</th>
                  <th>Email</th>
                  <th className="odoo-users-col-status">Status</th>
                </tr>
              </thead>

              <tbody>
                {usersLoading && users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="odoo-users-state">
                      <RefreshCw size={24} className="odoo-users-spin" />

                      <span>Loading Odoo users...</span>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="odoo-users-state">
                      <Users size={24} />

                      <span>No Odoo users found.</span>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="odoo-users-id">{user.id}</td>

                      <td>
                        <div className="odoo-users-name">{user.name}</div>
                      </td>

                      <td>
                        <code className="odoo-users-login">{user.login}</code>
                      </td>

                      <td className="odoo-users-email">{user.email || "-"}</td>

                      <td>
                        <span
                          className={`odoo-users-status ${
                            user.active ? "is-active" : "is-inactive"
                          }`}
                        >
                          <span className="odoo-users-status-dot" />

                          {user.active ? "Active" : "Inactive"}
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

export default OdooUsers;
