import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Archive,
  ChevronLeft,
  ChevronRight,
  Mail,
  MailOpen,
  MoreHorizontal,
  Paperclip,
  RefreshCw,
  Search,
  Star,
  Trash2,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import type { AppDispatch } from "../../stores/store";

import {
  archiveEmail,
  deleteEmail,
  fetchEmailById,
  fetchEmails,
  markEmailAsRead,
  selectEmailError,
  selectEmailLoading,
  selectEmailTotal,
  selectEmails,
  selectSelectedEmail,
  setSelectedEmail,
  toggleEmailStar,
} from "../../features/email/emailSlice";

import type { EmailMessage } from "../../features/email/emailSlice";

import "./Inbox.css";

/* =========================================================
   TYPES
   ========================================================= */

type MailFolder = "INBOX" | "STARRED" | "SENT" | "ARCHIVE" | "TRASH";

interface InboxProps {
  folder?: MailFolder;
}

type EmailApiFolder = "INBOX" | "SENT" | "ARCHIVE" | "TRASH";

/* =========================================================
   CONSTANTS
   ========================================================= */

const MAILS_PER_PAGE = 25;
const SEARCH_DEBOUNCE_MS = 400;

/* =========================================================
   FOLDER META
   ========================================================= */

const FOLDER_META: Record<
  MailFolder,
  {
    title: string;
    emptyTitle: string;
    emptyMessage: string;
    icon: React.ComponentType<{
      size?: number;
      strokeWidth?: number;
    }>;
  }
> = {
  INBOX: {
    title: "Inbox",
    emptyTitle: "No messages found",
    emptyMessage: "Tidak ada email masuk pada mailbox ini.",
    icon: Mail,
  },

  STARRED: {
    title: "Starred",
    emptyTitle: "No starred messages",
    emptyMessage: "Belum ada email yang ditandai sebagai favorit.",
    icon: Star,
  },

  SENT: {
    title: "Sent",
    emptyTitle: "No sent messages",
    emptyMessage: "Belum ada email yang dikirim dari mailbox ini.",
    icon: MailOpen,
  },

  ARCHIVE: {
    title: "Archive",
    emptyTitle: "No archived messages",
    emptyMessage: "Belum ada email yang diarsipkan.",
    icon: Archive,
  },

  TRASH: {
    title: "Trash",
    emptyTitle: "Trash is empty",
    emptyMessage: "Tidak ada email di tempat sampah.",
    icon: Trash2,
  },
};

/* =========================================================
   API FOLDER MAPPER
   ========================================================= */

const getApiFolder = (folder: MailFolder): EmailApiFolder => {
  if (folder === "STARRED") {
    return "INBOX";
  }

  return folder;
};

/* =========================================================
   HELPERS
   ========================================================= */

const formatDateParts = (value?: string | null) => {
  if (!value) {
    return {
      date: "-",
      time: "-",
    };
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return {
      date: "-",
      time: "-",
    };
  }

  return {
    date: new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(parsed),

    time: new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(parsed),
  };
};

const createPreview = (mail: EmailMessage) => {
  if (mail.preview?.trim()) {
    return mail.preview.trim().slice(0, 180);
  }

  const text = (mail.body || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text) {
    return text.slice(0, 180);
  }

  return "(No content)";
};

const getDateValue = (mail: EmailMessage) => {
  return mail.sentAt || mail.createdAt;
};

/* =========================================================
   COMPONENT
   ========================================================= */

const Inbox: React.FC<InboxProps> = ({ folder = "INBOX" }) => {
  const dispatch = useDispatch<AppDispatch>();

  /* =======================================================
     REDUX
     ======================================================= */

  const emails = useSelector(selectEmails);
  const selectedEmail = useSelector(selectSelectedEmail);
  const loading = useSelector(selectEmailLoading);
  const error = useSelector(selectEmailError);
  const totalMessages = useSelector(selectEmailTotal);

  /* =======================================================
     FOLDER
     ======================================================= */

  const folderMeta = FOLDER_META[folder];
  const FolderIcon = folderMeta.icon;
  const apiFolder = getApiFolder(folder);

  /* =======================================================
     LOCAL STATE
     ======================================================= */

  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [syncing, setSyncing] = useState(false);

  /*
   * Digunakan untuk mencegah response/request lama
   * mengganggu state halaman aktif.
   */
  const requestIdRef = useRef(0);

  /* =======================================================
     FETCH CURRENT FOLDER
     ======================================================= */

  useEffect(() => {
    let cancelled = false;

    const requestId = ++requestIdRef.current;

    const timer = window.setTimeout(async () => {
      if (cancelled || requestId !== requestIdRef.current) {
        return;
      }

      try {
        await dispatch(
          fetchEmails({
            folder: apiFolder,
            search: search.trim() || undefined,
            page,
            limit: MAILS_PER_PAGE,
          }),
        ).unwrap();
      } catch (err) {
        /*
         * Error sudah ditangani Redux.
         *
         * Jangan throw lagi ke browser agar tidak menjadi
         * unhandled promise rejection / alarm console.
         */
        if (!cancelled) {
          console.warn("[MAIL FETCH]", err);
        }
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [dispatch, apiFolder, search, page]);

  /* =======================================================
     RESET WHEN FOLDER CHANGES
     ======================================================= */

  useEffect(() => {
    setPage(1);
    setSelectedIds([]);

    dispatch(setSelectedEmail(null));
  }, [dispatch, folder]);

  /* =======================================================
     STARRED FILTER
     ======================================================= */

  const folderEmails = useMemo(() => {
    if (folder === "STARRED") {
      return emails.filter((mail) => mail.starred === true);
    }

    return emails;
  }, [emails, folder]);

  /* =======================================================
     SEARCH
     ======================================================= */

  const filteredEmails = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return folderEmails;
    }

    return folderEmails.filter((mail) =>
      [
        mail.fromName || "",
        mail.fromEmail || "",
        mail.subject || "",
        createPreview(mail),
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [folderEmails, search]);

  /* =======================================================
     DISPLAY TOTAL
     ======================================================= */

  const displayTotal =
    folder === "STARRED" ? folderEmails.length : totalMessages;

  /* =======================================================
     PAGINATION
     ======================================================= */

  const totalPages = Math.max(1, Math.ceil(displayTotal / MAILS_PER_PAGE));

  const safePage = Math.min(page, totalPages);

  const currentStart =
    displayTotal === 0 ? 0 : (safePage - 1) * MAILS_PER_PAGE + 1;

  const currentEnd = Math.min(safePage * MAILS_PER_PAGE, displayTotal);

  /* =======================================================
     UNREAD
     ======================================================= */

  const unreadCount = useMemo(() => {
    return emails.filter((mail) => mail.unread).length;
  }, [emails]);

  /* =======================================================
     SELECT ALL
     ======================================================= */

  const allVisibleSelected =
    filteredEmails.length > 0 &&
    filteredEmails.every((mail) => selectedIds.includes(mail.id));

  const toggleSelect = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(filteredEmails.map((mail) => mail.id));
  };

  /* =======================================================
     REFRESH
     ======================================================= */

  const handleRefresh = async () => {
    if (syncing || loading) {
      return;
    }

    setSyncing(true);

    try {
      await dispatch(
        fetchEmails({
          folder: apiFolder,
          search: search.trim() || undefined,
          page: safePage,
          limit: MAILS_PER_PAGE,
        }),
      ).unwrap();
    } catch (err) {
      console.warn("[MAIL REFRESH]", err);
    } finally {
      setSyncing(false);
    }
  };

  /* =======================================================
     MARK READ
     ======================================================= */

  const markSelectedAsRead = async () => {
    if (!selectedIds.length) {
      return;
    }

    try {
      await Promise.all(
        selectedIds.map((id) => dispatch(markEmailAsRead(id)).unwrap()),
      );

      setSelectedIds([]);
    } catch (err) {
      console.warn("[MAIL READ]", err);
    }
  };

  /* =======================================================
     DELETE
     ======================================================= */

  const deleteSelected = async () => {
    if (!selectedIds.length) {
      return;
    }

    try {
      await Promise.all(
        selectedIds.map((id) => dispatch(deleteEmail(id)).unwrap()),
      );

      setSelectedIds([]);
    } catch (err) {
      console.warn("[MAIL DELETE]", err);
    }
  };

  /* =======================================================
     STAR
     ======================================================= */

  const toggleStar = async (id: number) => {
    try {
      await dispatch(toggleEmailStar(id)).unwrap();
    } catch (err) {
      console.warn("[MAIL STAR]", err);
    }
  };

  /* =======================================================
     OPEN MAIL
     ======================================================= */

  const openMail = async (mail: EmailMessage) => {
    try {
      const response = await dispatch(fetchEmailById(mail.id)).unwrap();

      const detail = response.data;

      dispatch(setSelectedEmail(detail));

      if (detail.unread) {
        await dispatch(markEmailAsRead(detail.id)).unwrap();
      }
    } catch (err) {
      console.warn("[MAIL OPEN]", err);

      /*
       * Fallback:
       * tampilkan data list jika detail gagal.
       */
      dispatch(setSelectedEmail(mail));
    }
  };

  /* =======================================================
     ARCHIVE
     ======================================================= */

  const handleArchiveSelected = async () => {
    if (!selectedIds.length) {
      return;
    }

    try {
      await Promise.all(
        selectedIds.map((id) => dispatch(archiveEmail(id)).unwrap()),
      );

      setSelectedIds([]);
    } catch (err) {
      console.warn("[MAIL ARCHIVE]", err);
    }
  };

  /* =======================================================
     ERROR DISPLAY
     ======================================================= */

  const safeError = error && error.trim() ? error : null;

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="inbox-page">
      {/* ===================================================
          HEADER
          =================================================== */}

      <div className="inbox-header">
        <div>
          <div className="inbox-title-row">
            <FolderIcon size={22} strokeWidth={2} />

            <h1>{folderMeta.title}</h1>

            {folder === "INBOX" && unreadCount > 0 && (
              <span className="inbox-unread-badge">{unreadCount}</span>
            )}
          </div>

          <p>
            Mailbox <strong>admin@abn.web.id</strong>
          </p>
        </div>

        <button
          type="button"
          className="inbox-tool-button"
          onClick={handleRefresh}
          disabled={syncing || loading}
          title="Sync Email"
        >
          <RefreshCw size={17} className={syncing ? "inbox-spin" : ""} />
        </button>
      </div>

      {/* ===================================================
          ERROR
          =================================================== */}

      {safeError && (
        <div className="inbox-error">
          <strong>Mail Error</strong>

          <span>{safeError}</span>
        </div>
      )}

      {/* ===================================================
          LAYOUT
          =================================================== */}

      <div className="inbox-layout">
        {/* =================================================
            SIDEBAR
            ================================================= */}

        <aside className="inbox-sidebar">
          <NavLink to="/mail/compose" className="inbox-compose-button">
            <Mail size={17} />
            Compose
          </NavLink>

          <nav className="inbox-folder-nav">
            <NavLink
              to="/mail/inbox"
              className={({ isActive }) =>
                `inbox-folder ${isActive ? "active" : ""}`
              }
            >
              <Mail size={17} />

              <span>Inbox</span>

              {unreadCount > 0 && <strong>{unreadCount}</strong>}
            </NavLink>

            <NavLink
              to="/mail/starred"
              className={({ isActive }) =>
                `inbox-folder ${isActive ? "active" : ""}`
              }
            >
              <Star size={17} />

              <span>Starred</span>
            </NavLink>

            <NavLink
              to="/mail/sent"
              className={({ isActive }) =>
                `inbox-folder ${isActive ? "active" : ""}`
              }
            >
              <MailOpen size={17} />

              <span>Sent</span>
            </NavLink>

            <NavLink
              to="/mail/archive"
              className={({ isActive }) =>
                `inbox-folder ${isActive ? "active" : ""}`
              }
            >
              <Archive size={17} />

              <span>Archive</span>
            </NavLink>

            <NavLink
              to="/mail/trash"
              className={({ isActive }) =>
                `inbox-folder ${isActive ? "active" : ""}`
              }
            >
              <Trash2 size={17} />

              <span>Trash</span>
            </NavLink>
          </nav>
        </aside>

        {/* =================================================
            MAIN
            ================================================= */}

        <section className="inbox-main">
          {/* TOOLBAR */}

          <div className="inbox-toolbar">
            <div className="inbox-toolbar-left">
              <label className="inbox-checkbox">
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={toggleSelectAll}
                />

                <span />
              </label>

              <button
                type="button"
                className="inbox-tool-button"
                onClick={handleRefresh}
                disabled={syncing || loading}
                title="Refresh"
              >
                <RefreshCw size={17} className={syncing ? "inbox-spin" : ""} />
              </button>

              {selectedIds.length > 0 && (
                <>
                  <button
                    type="button"
                    className="inbox-tool-button"
                    onClick={markSelectedAsRead}
                    title="Mark as read"
                  >
                    <MailOpen size={17} />
                  </button>

                  <button
                    type="button"
                    className="inbox-tool-button"
                    onClick={handleArchiveSelected}
                    title="Archive"
                  >
                    <Archive size={17} />
                  </button>

                  <button
                    type="button"
                    className="inbox-tool-button danger"
                    onClick={deleteSelected}
                    title="Delete"
                  >
                    <Trash2 size={17} />
                  </button>
                </>
              )}
            </div>

            <div className="inbox-search">
              <Search size={17} />

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
                placeholder="Search mail..."
              />
            </div>
          </div>

          {/* =================================================
              LIST
              ================================================= */}

          <div className="inbox-list">
            {loading ? (
              <div className="inbox-empty">
                <RefreshCw size={32} className="inbox-spin" />

                <h3>
                  Loading {folderMeta.title.toLowerCase()}
                  ...
                </h3>

                <p>Mengambil email dari server ABN.</p>
              </div>
            ) : filteredEmails.length === 0 ? (
              <div className="inbox-empty">
                <FolderIcon size={42} />

                <h3>{folderMeta.emptyTitle}</h3>

                <p>{folderMeta.emptyMessage}</p>
              </div>
            ) : (
              filteredEmails.map((mail) => {
                const dateParts = formatDateParts(getDateValue(mail));

                return (
                  <div
                    key={mail.id}
                    className={`inbox-message ${mail.unread ? "unread" : ""}`}
                    onClick={() => openMail(mail)}
                  >
                    {/* SELECT */}

                    <label
                      className="inbox-checkbox"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(mail.id)}
                        onChange={() => toggleSelect(mail.id)}
                      />

                      <span />
                    </label>

                    {/* STAR */}

                    <button
                      type="button"
                      className={`inbox-star ${mail.starred ? "active" : ""}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleStar(mail.id);
                      }}
                      title={mail.starred ? "Unstar" : "Star"}
                    >
                      <Star
                        size={17}
                        fill={mail.starred ? "currentColor" : "none"}
                      />
                    </button>

                    {/* SENDER */}

                    <div className="inbox-sender">
                      <span>
                        {mail.fromName || mail.fromEmail || "Unknown sender"}
                      </span>

                      <small>{mail.fromEmail}</small>
                    </div>

                    {/* CONTENT */}

                    <div className="inbox-content">
                      <strong>{mail.subject || "(No Subject)"}</strong>

                      <span>
                        {" — "}
                        {createPreview(mail)}
                      </span>
                    </div>

                    {/* ATTACHMENT */}

                    {mail.hasAttachment ||
                    (Array.isArray(mail.recipients) &&
                      mail.recipients.length > 0) ? (
                      <Paperclip className="inbox-attachment" size={16} />
                    ) : null}

                    {/* DATE */}

                    <div className="inbox-date">
                      <span>{dateParts.date}</span>

                      <small>{dateParts.time}</small>
                    </div>

                    {/* MORE */}

                    <button
                      type="button"
                      className="inbox-more"
                      onClick={(event) => event.stopPropagation()}
                      title="More"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* =================================================
              FOOTER
              ================================================= */}

          <div className="inbox-footer">
            <span>
              {displayTotal === 0
                ? "0 messages"
                : `${currentStart}–${currentEnd} of ${displayTotal}`}
            </span>

            <div className="inbox-pagination">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                aria-label="Previous page"
              >
                <ChevronLeft size={17} />
              </button>

              <span>
                {safePage} / {totalPages}
              </span>

              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() =>
                  setPage((current) => Math.min(totalPages, current + 1))
                }
                aria-label="Next page"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ===================================================
          EMAIL READER
          =================================================== */}

      {selectedEmail && (
        <div
          className="inbox-reader-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              dispatch(setSelectedEmail(null));
            }
          }}
        >
          <article className="inbox-reader">
            <header className="inbox-reader-header">
              <div>
                <span>Email</span>

                <h2>{selectedEmail.subject || "(No Subject)"}</h2>
              </div>

              <button
                type="button"
                onClick={() => dispatch(setSelectedEmail(null))}
                aria-label="Close email"
              >
                ×
              </button>
            </header>

            <div className="inbox-reader-meta">
              <div>
                <strong>From</strong>

                <span>
                  {selectedEmail.fromName || selectedEmail.fromEmail}
                  {" <"}
                  {selectedEmail.fromEmail}
                  {">"}
                </span>
              </div>

              <div>
                <strong>To</strong>

                <span>
                  {selectedEmail.recipients?.find(
                    (recipient) => recipient.type === "TO",
                  )?.email || "admin@abn.web.id"}
                </span>
              </div>

              <div>
                <strong>Date</strong>

                <span>
                  {formatDateParts(getDateValue(selectedEmail)).date}{" "}
                  {formatDateParts(getDateValue(selectedEmail)).time}
                </span>
              </div>
            </div>

            <div className="inbox-reader-body">
              {selectedEmail.body ? (
                <iframe
                  title={selectedEmail.subject || "Email"}
                  sandbox=""
                  srcDoc={selectedEmail.body}
                  style={{
                    width: "100%",
                    minHeight: "500px",
                    border: 0,
                    background: "white",
                  }}
                />
              ) : (
                <pre>Tidak ada isi email.</pre>
              )}
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default Inbox;
