import React, { useRef, useState } from "react";
import {
  Archive,
  Bold,
  Italic,
  Link,
  List,
  Paperclip,
  Send,
  Trash2,
  Underline,
  Table,
  PenLine,
} from "lucide-react";

import SignaturePicker from "./Signature/SignaturePicker";
import SignatureManager from "./Signature/SignatureManager";
import type { EmailSignature } from "./Signature/SignatureManager";
import sanitizeHtml from "../../utils/sanitizeHtml";
import "./Compose.css";
import api from "../../api/axios";

/* =========================================================
   CONSTANTS
   ========================================================= */

const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;

/* =========================================================
   COMPONENT
   ========================================================= */

const Compose: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const savedRangeRef = useRef<Range | null>(null);

  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");

  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  const [attachments, setAttachments] = useState<File[]>([]);

  const [sending, setSending] = useState(false);
  const [saved, setSaved] = useState(false);

  const [showSignaturePicker, setShowSignaturePicker] = useState(false);
  const [showSignatureManager, setShowSignatureManager] = useState(false);

  const [errors, setErrors] = useState<{
    to?: string;
    subject?: string;
  }>({});

  /* =========================================================
     HELPERS
     ========================================================= */

  const clearErrors = () => {
    setErrors({});
  };

  const resetCompose = () => {
    setTo("");
    setCc("");
    setBcc("");
    setSubject("");
    setAttachments([]);
    setSaved(false);
    setErrors({});

    savedRangeRef.current = null;

    setShowSignaturePicker(false);
    setShowSignatureManager(false);

    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  /* =========================================================
     ATTACHMENT
     ========================================================= */

  const handleAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    const validFiles = files.filter((file) => file.size <= MAX_ATTACHMENT_SIZE);

    setAttachments((current) => {
      const existingKeys = new Set(
        current.map((file) => `${file.name}-${file.size}-${file.lastModified}`),
      );

      const newFiles = validFiles.filter(
        (file) =>
          !existingKeys.has(`${file.name}-${file.size}-${file.lastModified}`),
      );

      return [...current, ...newFiles];
    });

    event.target.value = "";
  };

  const removeAttachment = (index: number) => {
    setAttachments((current) =>
      current.filter((_, fileIndex) => fileIndex !== index),
    );
  };

  /* =========================================================
     SAVE DRAFT
     ========================================================= */

  const handleSaveDraft = () => {
    setSaved(true);

    // Backend draft API will be connected here.

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* =========================================================
     DISCARD
     ========================================================= */

  const handleDiscard = () => {
    resetCompose();
  };

  /* =========================================================
     VALIDATION
     ========================================================= */

  const validateForm = () => {
    const nextErrors: {
      to?: string;
      subject?: string;
    } = {};

    if (!to.trim()) {
      nextErrors.to = "Recipient is required.";
    }

    if (!subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  /* =========================================================
     SEND
     ========================================================= */

  const handleSend = async () => {
    clearErrors();

    if (!validateForm()) {
      return;
    }

    setSending(true);

    try {
      /*
       * Ambil HTML dari editor.
       */
      const rawBody = editorRef.current?.innerHTML || "";

      /*
       * Sanitasi HTML untuk XSS protection.
       */
      const safeBody = sanitizeHtml(rawBody);

      /*
       * Payload email.
       *
       * Untuk test pertama:
       * To isi dengan agroberkahn@gmail.com
       */
      const payload = {
        to: to.trim(),
        cc: cc.trim(),
        bcc: bcc.trim(),
        subject: subject.trim(),
        body: safeBody,
      };

      console.log("EMAIL PAYLOAD:", payload);

      /*
       * Kirim ke backend.
       */
      const response = await api.post("/email", payload, {
        withCredentials: true,
      });

      if (!response.data?.success) {
        throw new Error(response.data?.message || "Email gagal dikirim.");
      }

      console.log("Email sent successfully:", response.data);

      window.alert("Email berhasil dikirim.");

      resetCompose();
    } catch (error: any) {
      console.error("Send email failed:", error);

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Gagal mengirim email.";

      window.alert(message);
    } finally {
      setSending(false);
    }
  };

  /* =========================================================
     EDITOR COMMAND
     ========================================================= */

  const execCommand = (command: string, value?: string) => {
    editorRef.current?.focus();

    document.execCommand(command, false, value);
  };

  /* =========================================================
     SAVE EDITOR SELECTION
     ========================================================= */

  const saveEditorSelection = () => {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (editorRef.current?.contains(range.commonAncestorContainer)) {
      savedRangeRef.current = range.cloneRange();
    }
  };

  /* =========================================================
     INSERT LINK
     ========================================================= */

  const handleInsertLink = () => {
    saveEditorSelection();

    const url = window.prompt("Enter URL", "https://");

    if (!url?.trim()) {
      return;
    }

    execCommand("createLink", url.trim());
  };

  /* =========================================================
     INSERT SIGNATURE
     ========================================================= */

  const handleInsertSignature = (signature: EmailSignature) => {
    const editor = editorRef.current;

    if (!editor) {
      return;
    }

    editor.focus();

    const selection = window.getSelection();

    let range: Range | null = savedRangeRef.current;

    // Jika belum ada cursor tersimpan,
    // gunakan posisi paling akhir editor.
    if (!range) {
      range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
    }

    // Restore cursor / selection.
    try {
      selection?.removeAllRanges();
      selection?.addRange(range);
    } catch {
      range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);

      selection?.removeAllRanges();
      selection?.addRange(range);
    }

    const fragment = document.createDocumentFragment();

    // Spacing sebelum signature.
    const spacer = document.createElement("div");

    spacer.innerHTML = "<br>";

    fragment.appendChild(spacer);

    // Signature container.
    const signatureContainer = document.createElement("div");

    signatureContainer.setAttribute("data-signature", "true");

    signatureContainer.style.marginTop = "12px";

    signatureContainer.style.marginBottom = "12px";

    if (signature.type === "TEXT") {
      const lines = signature.content.split(/\r?\n/);

      lines.forEach((line, index) => {
        signatureContainer.appendChild(document.createTextNode(line));

        if (index < lines.length - 1) {
          signatureContainer.appendChild(document.createElement("br"));
        }
      });
    } else {
      const image = document.createElement("img");

      image.src = signature.content;
      image.alt = signature.name;

      image.style.display = "block";
      image.style.maxWidth = "320px";
      image.style.height = "auto";

      signatureContainer.appendChild(image);
    }

    fragment.appendChild(signatureContainer);

    // Spacing setelah signature.
    const after = document.createElement("div");

    after.innerHTML = "<br>";

    fragment.appendChild(after);

    // Hapus selection lama.
    range.deleteContents();

    // Insert signature.
    range.insertNode(fragment);

    // Pindahkan cursor setelah signature.
    const newRange = document.createRange();

    newRange.selectNodeContents(after);
    newRange.collapse(false);

    selection?.removeAllRanges();
    selection?.addRange(newRange);

    // Simpan posisi cursor terbaru.
    savedRangeRef.current = newRange.cloneRange();

    setSaved(false);
    setShowSignaturePicker(false);
  };

  /* =========================================================
     INSERT TABLE
     ========================================================= */

  const handleInsertTable = () => {
    const rowsInput = window.prompt("Number of rows:", "3");

    if (rowsInput === null) {
      return;
    }

    const colsInput = window.prompt("Number of columns:", "3");

    if (colsInput === null) {
      return;
    }

    const rows = Number(rowsInput);
    const cols = Number(colsInput);

    if (
      !Number.isInteger(rows) ||
      !Number.isInteger(cols) ||
      rows < 1 ||
      cols < 1 ||
      rows > 20 ||
      cols > 15
    ) {
      window.alert("Enter rows (1–20) and columns (1–15).");

      return;
    }

    const hasHeader = window.confirm("Add a header row to the table?");

    const editor = editorRef.current;

    if (!editor) {
      return;
    }

    const table = document.createElement("table");

    table.setAttribute(
      "style",
      "width:100%; border-collapse:collapse; margin:12px 0;",
    );

    table.setAttribute("border", "1");

    const tbody = document.createElement("tbody");

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const tr = document.createElement("tr");

      for (let colIndex = 0; colIndex < cols; colIndex++) {
        const isHeader = hasHeader && rowIndex === 0;

        const cell = document.createElement(isHeader ? "th" : "td");

        cell.setAttribute(
          "style",
          "border:1px solid #cbd5e1; padding:8px; min-width:60px;",
        );

        cell.innerHTML = isHeader ? `Header ${colIndex + 1}` : "&nbsp;";

        tr.appendChild(cell);
      }

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    // Restore cursor position.
    const selection = window.getSelection();

    const range = savedRangeRef.current;

    if (range && editor.contains(range.commonAncestorContainer)) {
      selection?.removeAllRanges();
      selection?.addRange(range);
    } else {
      editor.focus();

      const fallbackRange = document.createRange();

      fallbackRange.selectNodeContents(editor);

      fallbackRange.collapse(false);

      selection?.removeAllRanges();
      selection?.addRange(fallbackRange);
    }

    const activeRange = selection?.rangeCount ? selection.getRangeAt(0) : null;

    if (!activeRange) {
      return;
    }

    activeRange.deleteContents();
    activeRange.insertNode(table);

    // Line after table.
    const newLine = document.createElement("p");

    newLine.innerHTML = "<br>";

    table.parentNode?.insertBefore(newLine, table.nextSibling);

    // Cursor after table.
    const cursorRange = document.createRange();

    cursorRange.setStart(newLine, 0);
    cursorRange.collapse(true);

    selection?.removeAllRanges();
    selection?.addRange(cursorRange);

    savedRangeRef.current = cursorRange.cloneRange();

    editor.focus();

    setSaved(false);
  };

  /* =========================================================
     EDITOR INPUT
     ========================================================= */

  const handleEditorInput = () => {
    setSaved(false);
    saveEditorSelection();
  };

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div className="compose-page">
      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="compose-header">
        <div>
          <h1>Compose</h1>

          <p>Create and send a new message.</p>
        </div>

        {saved && (
          <div className="compose-saved" role="status" aria-live="polite">
            Draft saved
          </div>
        )}
      </div>

      {/* =====================================================
          CARD
          ===================================================== */}

      <section className="compose-card">
        {/* ===================================================
            TO
            =================================================== */}

        <div className="compose-field-row">
          <label htmlFor="compose-to">To</label>

          <div className="compose-recipient-wrapper">
            <div className="compose-recipient-field">
              <input
                id="compose-to"
                type="text"
                value={to}
                onChange={(event) => {
                  setTo(event.target.value);

                  if (errors.to) {
                    setErrors((current) => ({
                      ...current,
                      to: undefined,
                    }));
                  }
                }}
                placeholder="recipient@example.com"
                autoComplete="off"
                aria-invalid={Boolean(errors.to)}
                aria-describedby={errors.to ? "compose-to-error" : undefined}
              />

              <div className="compose-recipient-actions">
                <button
                  type="button"
                  className={showCc ? "active" : ""}
                  onClick={() => setShowCc((current) => !current)}
                >
                  Cc
                </button>

                <button
                  type="button"
                  className={showBcc ? "active" : ""}
                  onClick={() => setShowBcc((current) => !current)}
                >
                  Bcc
                </button>
              </div>
            </div>

            {errors.to && (
              <span id="compose-to-error" className="compose-field-error">
                {errors.to}
              </span>
            )}
          </div>
        </div>

        {/* ===================================================
            CC
            =================================================== */}

        {showCc && (
          <div className="compose-field-row">
            <label htmlFor="compose-cc">Cc</label>

            <input
              id="compose-cc"
              type="text"
              value={cc}
              onChange={(event) => setCc(event.target.value)}
              placeholder="carboncopy@example.com"
              autoComplete="off"
            />
          </div>
        )}

        {/* ===================================================
            BCC
            =================================================== */}

        {showBcc && (
          <div className="compose-field-row">
            <label htmlFor="compose-bcc">Bcc</label>

            <input
              id="compose-bcc"
              type="text"
              value={bcc}
              onChange={(event) => setBcc(event.target.value)}
              placeholder="blindcopy@example.com"
              autoComplete="off"
            />
          </div>
        )}

        {/* ===================================================
            SUBJECT
            =================================================== */}

        <div className="compose-field-row">
          <label htmlFor="compose-subject">Subject</label>

          <div className="compose-field-wrapper">
            <input
              id="compose-subject"
              type="text"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);

                if (errors.subject) {
                  setErrors((current) => ({
                    ...current,
                    subject: undefined,
                  }));
                }
              }}
              placeholder="Subject"
              autoComplete="off"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "compose-subject-error" : undefined
              }
            />

            {errors.subject && (
              <span id="compose-subject-error" className="compose-field-error">
                {errors.subject}
              </span>
            )}
          </div>
        </div>

        {/* ===================================================
            TOOLBAR
            =================================================== */}

        <div className="compose-editor-toolbar">
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => execCommand("bold")}
            title="Bold"
            aria-label="Bold"
          >
            <Bold size={16} />
          </button>

          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => execCommand("italic")}
            title="Italic"
            aria-label="Italic"
          >
            <Italic size={16} />
          </button>

          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => execCommand("underline")}
            title="Underline"
            aria-label="Underline"
          >
            <Underline size={16} />
          </button>

          <span className="compose-toolbar-divider" />

          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => execCommand("insertUnorderedList")}
            title="Bullet list"
            aria-label="Bullet list"
          >
            <List size={16} />
          </button>

          <button
            type="button"
            onMouseDown={(event) => {
              saveEditorSelection();
              event.preventDefault();
            }}
            onClick={handleInsertLink}
            title="Insert link"
            aria-label="Insert link"
          >
            <Link size={16} />
          </button>

          <button
            type="button"
            onMouseDown={(event) => {
              saveEditorSelection();
              event.preventDefault();
            }}
            onClick={handleInsertTable}
            title="Insert table"
            aria-label="Insert table"
          >
            <Table size={16} />
          </button>

          <button
            type="button"
            onMouseDown={(event) => {
              saveEditorSelection();
              event.preventDefault();
            }}
            onClick={() => setShowSignaturePicker(true)}
            title="Insert signature"
            aria-label="Insert signature"
          >
            <PenLine size={16} />
          </button>
        </div>

        {/* ===================================================
            EDITOR
            =================================================== */}

        <div
          ref={editorRef}
          className="compose-editor"
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Message body"
          data-placeholder="Write your message..."
          onInput={handleEditorInput}
          onMouseUp={saveEditorSelection}
          onKeyUp={saveEditorSelection}
        />

        {/* ===================================================
            ATTACHMENTS
            =================================================== */}

        {attachments.length > 0 && (
          <div className="compose-attachments">
            {attachments.map((file, index) => (
              <div
                className="compose-attachment"
                key={`${file.name}-${file.size}-${file.lastModified}`}
              >
                <Paperclip size={15} />

                <span title={file.name}>{file.name}</span>

                <small>
                  {file.size < 1024 * 1024
                    ? `${Math.max(1, Math.round(file.size / 1024))} KB`
                    : `${(file.size / 1024 / 1024).toFixed(1)} MB`}
                </small>

                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  title="Remove attachment"
                  aria-label={`Remove ${file.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ===================================================
            FOOTER
            =================================================== */}

        <div className="compose-footer">
          <div className="compose-footer-left">
            <button
              type="button"
              className="compose-send-button"
              disabled={sending || !to.trim() || !subject.trim()}
              onClick={handleSend}
            >
              <Send size={16} />

              {sending ? "Sending..." : "Send"}
            </button>

            <button
              type="button"
              className="compose-icon-button"
              onClick={() => fileInputRef.current?.click()}
              title="Attach files"
              aria-label="Attach files"
            >
              <Paperclip size={17} />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              onChange={handleAttachment}
            />

            <button
              type="button"
              className="compose-draft-button"
              onClick={handleSaveDraft}
            >
              <Archive size={16} />
              Save Draft
            </button>
          </div>

          <button
            type="button"
            className="compose-discard-button"
            onClick={handleDiscard}
            title="Discard"
          >
            <Trash2 size={17} />
            Discard
          </button>
        </div>
      </section>

      {/* =====================================================
          SIGNATURE PICKER
          ===================================================== */}

      <SignaturePicker
        open={showSignaturePicker}
        onClose={() => setShowSignaturePicker(false)}
        onSelect={handleInsertSignature}
        onManage={() => {
          setShowSignaturePicker(false);
          setShowSignatureManager(true);
        }}
      />

      {/* =====================================================
          SIGNATURE MANAGER
          ===================================================== */}

      <SignatureManager
        open={showSignatureManager}
        onClose={() => setShowSignatureManager(false)}
        onSelect={(signature) => {
          setShowSignatureManager(false);
          handleInsertSignature(signature);
        }}
      />
    </div>
  );
};

export default Compose;
