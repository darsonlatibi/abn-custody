import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  Eraser,
  Image as ImageIcon,
  Pencil,
  Plus,
  Save,
  Star,
  Trash2,
  Type,
  Upload,
  X,
} from "lucide-react";

import "./Signature.css";

/* =========================================================
   TYPES
   ========================================================= */

export type SignatureType = "TEXT" | "DRAW" | "UPLOAD";

export interface EmailSignature {
  id: string;
  name: string;
  type: SignatureType;
  content: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

interface SignatureManagerProps {
  open: boolean;
  onClose: () => void;
  onSelect?: (signature: EmailSignature) => void;
}

/* =========================================================
   CONSTANTS
   ========================================================= */

const STORAGE_KEY = "abn_mail_signatures";
const MAX_UPLOAD_SIZE = 2 * 1024 * 1024;

/* =========================================================
   HELPERS
   ========================================================= */

const createId = () => {
  return `signature-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const getStoredSignatures = (): EmailSignature[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveStoredSignatures = (signatures: EmailSignature[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(signatures));
};

/* =========================================================
   COMPONENT
   ========================================================= */

const SignatureManager: React.FC<SignatureManagerProps> = ({
  open,
  onClose,
  onSelect,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [signatures, setSignatures] = useState<EmailSignature[]>([]);

  const [editingSignature, setEditingSignature] =
    useState<EmailSignature | null>(null);

  const [name, setName] = useState("");

  const [type, setType] = useState<SignatureType>("TEXT");

  const [textContent, setTextContent] = useState("");

  const [uploadPreview, setUploadPreview] = useState("");

  const [drawing, setDrawing] = useState(false);

  /*
   * Canvas mutation does not automatically cause
   * React to re-render.
   *
   * Incrementing this value forces the preview
   * image to refresh after drawing/clearing.
   */
  const [canvasVersion, setCanvasVersion] = useState(0);

  /* =======================================================
     LOAD
     ======================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    setSignatures(getStoredSignatures());
  }, [open]);

  /* =======================================================
     CANVAS INITIALIZATION
     ======================================================= */

  useEffect(() => {
    if (!open || type !== "DRAW") {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#111827";

    setCanvasVersion((version) => version + 1);

    if (editingSignature?.type === "DRAW" && editingSignature.content) {
      const image = new Image();

      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        setCanvasVersion((version) => version + 1);
      };

      image.src = editingSignature.content;
    }
  }, [open, type, editingSignature]);

  /* =======================================================
     DRAWING
     ======================================================= */

  const getCanvasPoint = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return {
        x: 0,
        y: 0,
      };
    }

    const rect = canvas.getBoundingClientRect();

    const clientX =
      "touches" in event ? (event.touches[0]?.clientX ?? 0) : event.clientX;

    const clientY =
      "touches" in event ? (event.touches[0]?.clientY ?? 0) : event.clientY;

    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,

      y: ((clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const startDrawing = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const point = getCanvasPoint(event);

    context.beginPath();
    context.moveTo(point.x, point.y);

    setDrawing(true);
  };

  const draw = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!drawing) {
      return;
    }

    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const point = getCanvasPoint(event);

    context.lineTo(point.x, point.y);

    context.stroke();

    setCanvasVersion((version) => version + 1);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    setCanvasVersion((version) => version + 1);
  };

  /* =======================================================
     CANVAS BLANK CHECK
     ======================================================= */

  const isCanvasBlank = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext("2d");

    if (!context) {
      return true;
    }

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    const pixels = imageData.data;

    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] !== 0) {
        return false;
      }
    }

    return true;
  };

  /* =======================================================
     UPLOAD
     ======================================================= */

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      window.alert("Please select an image file.");

      event.target.value = "";

      return;
    }

    if (file.size > MAX_UPLOAD_SIZE) {
      window.alert("Signature image must be 2 MB or smaller.");

      event.target.value = "";

      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUploadPreview(reader.result);
      }
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  /* =======================================================
     NEW SIGNATURE
     ======================================================= */

  const handleNew = () => {
    setEditingSignature(null);

    setName("");

    setType("TEXT");

    setTextContent("");

    setUploadPreview("");

    setDrawing(false);

    setCanvasVersion((version) => version + 1);
  };

  /* =======================================================
     EDIT
     ======================================================= */

  const handleEdit = (signature: EmailSignature) => {
    setEditingSignature(signature);

    setName(signature.name);

    setType(signature.type);

    if (signature.type === "TEXT") {
      setTextContent(signature.content);

      setUploadPreview("");
    }

    if (signature.type === "UPLOAD") {
      setUploadPreview(signature.content);

      setTextContent("");
    }

    if (signature.type === "DRAW") {
      setTextContent("");

      setUploadPreview("");
    }

    setCanvasVersion((version) => version + 1);
  };

  /* =======================================================
     SAVE
     ======================================================= */

  const handleSave = () => {
    if (!name.trim()) {
      window.alert("Signature name is required.");

      return;
    }

    let content = "";

    /* TEXT */

    if (type === "TEXT") {
      if (!textContent.trim()) {
        window.alert("Signature text is required.");

        return;
      }

      content = textContent.trim();
    }

    /* DRAW */

    if (type === "DRAW") {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      if (isCanvasBlank(canvas)) {
        window.alert("Please draw your signature first.");

        return;
      }

      content = canvas.toDataURL("image/png");
    }

    /* UPLOAD */

    if (type === "UPLOAD") {
      if (!uploadPreview) {
        window.alert("Please upload a signature image.");

        return;
      }

      content = uploadPreview;
    }

    const now = new Date().toISOString();

    const newSignature: EmailSignature = {
      id: editingSignature?.id ?? createId(),

      name: name.trim(),

      type,

      content,

      isDefault: editingSignature?.isDefault ?? false,

      createdAt: editingSignature?.createdAt ?? now,

      updatedAt: now,
    };

    let nextSignatures: EmailSignature[];

    if (editingSignature) {
      nextSignatures = signatures.map((signature) =>
        signature.id === editingSignature.id ? newSignature : signature,
      );
    } else {
      nextSignatures = [...signatures, newSignature];
    }

    setSignatures(nextSignatures);

    saveStoredSignatures(nextSignatures);

    handleNew();
  };

  /* =======================================================
     DEFAULT SIGNATURE
     ======================================================= */

  const handleSetDefault = (id: string) => {
    const nextSignatures = signatures.map((signature) => ({
      ...signature,
      isDefault: signature.id === id,
    }));

    setSignatures(nextSignatures);

    saveStoredSignatures(nextSignatures);
  };

  /* =======================================================
     DELETE
     ======================================================= */

  const handleDelete = (id: string) => {
    const signature = signatures.find((item) => item.id === id);

    if (!signature) {
      return;
    }

    const confirmed = window.confirm(`Delete signature "${signature.name}"?`);

    if (!confirmed) {
      return;
    }

    const nextSignatures = signatures.filter((item) => item.id !== id);

    setSignatures(nextSignatures);

    saveStoredSignatures(nextSignatures);

    if (editingSignature?.id === id) {
      handleNew();
    }
  };

  /* =======================================================
     SELECT
     ======================================================= */

  const handleSelect = (signature: EmailSignature) => {
    onSelect?.(signature);

    onClose();
  };

  /* =======================================================
     RENDER
     ======================================================= */

  if (!open) {
    return null;
  }

  return (
    <div
      className="signature-manager-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="signature-manager"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signature-manager-title"
      >
        {/* =================================================
            HEADER
            ================================================= */}

        <header className="signature-manager-header">
          <div>
            <h2 id="signature-manager-title">Signature Manager</h2>

            <p>Create and manage your email signatures.</p>
          </div>

          <button
            type="button"
            className="signature-close-button"
            onClick={onClose}
            aria-label="Close Signature Manager"
            title="Close"
          >
            <X size={18} />
          </button>
        </header>

        {/* =================================================
            BODY
            ================================================= */}

        <div className="signature-manager-body">
          {/* =================================================
              SIGNATURE LIST
              ================================================= */}

          <aside className="signature-list-panel">
            <div className="signature-list-header">
              <strong>My Signatures</strong>

              <button
                type="button"
                className="signature-new-button"
                onClick={handleNew}
              >
                <Plus size={15} />
                New
              </button>
            </div>

            {signatures.length === 0 ? (
              <div className="signature-empty">
                <Pencil size={28} />

                <p>No signatures yet.</p>

                <button type="button" onClick={handleNew}>
                  Create your first signature
                </button>
              </div>
            ) : (
              <div className="signature-list">
                {signatures.map((signature) => (
                  <div
                    key={signature.id}
                    className={`signature-list-item ${
                      editingSignature?.id === signature.id ? "active" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="signature-list-main"
                      onClick={() => handleEdit(signature)}
                    >
                      <span className="signature-type-icon">
                        {signature.type === "TEXT" && <Type size={16} />}

                        {signature.type === "DRAW" && <Pencil size={16} />}

                        {signature.type === "UPLOAD" && <ImageIcon size={16} />}
                      </span>

                      <span className="signature-list-info">
                        <strong>{signature.name}</strong>

                        <small>
                          {signature.type}

                          {signature.isDefault ? " • Default" : ""}
                        </small>
                      </span>
                    </button>

                    {/* ACTIONS */}

                    <div className="signature-list-actions">
                      {/* DEFAULT */}

                      <button
                        type="button"
                        className={signature.isDefault ? "default-active" : ""}
                        onClick={() => handleSetDefault(signature.id)}
                        title={
                          signature.isDefault
                            ? "Default signature"
                            : "Set as default"
                        }
                        aria-label={
                          signature.isDefault
                            ? `${signature.name} is default`
                            : `Set ${signature.name} as default`
                        }
                      >
                        <Star
                          size={15}
                          fill={signature.isDefault ? "currentColor" : "none"}
                        />
                      </button>

                      {/* INSERT */}

                      <button
                        type="button"
                        onClick={() => handleSelect(signature)}
                        title="Insert signature"
                        aria-label={`Insert ${signature.name}`}
                      >
                        <Check size={15} />
                      </button>

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() => handleDelete(signature.id)}
                        title="Delete signature"
                        aria-label={`Delete ${signature.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>

          {/* =================================================
              EDITOR
              ================================================= */}

          <main className="signature-editor-panel">
            <div className="signature-editor-header">
              <div>
                <strong>
                  {editingSignature ? "Edit Signature" : "Create Signature"}
                </strong>

                <span>Choose a signature type and configure it.</span>
              </div>
            </div>

            {/* NAME */}

            <div className="signature-form-group">
              <label htmlFor="signature-name">Signature Name</label>

              <input
                id="signature-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. ABN Corporate"
              />
            </div>

            {/* TYPE */}

            <div className="signature-type-selector">
              <button
                type="button"
                className={type === "TEXT" ? "active" : ""}
                onClick={() => setType("TEXT")}
              >
                <Type size={17} />

                <span>Text</span>
              </button>

              <button
                type="button"
                className={type === "DRAW" ? "active" : ""}
                onClick={() => setType("DRAW")}
              >
                <Pencil size={17} />

                <span>Draw</span>
              </button>

              <button
                type="button"
                className={type === "UPLOAD" ? "active" : ""}
                onClick={() => setType("UPLOAD")}
              >
                <Upload size={17} />

                <span>Upload</span>
              </button>
            </div>

            {/* TEXT */}

            {type === "TEXT" && (
              <div className="signature-form-group">
                <label htmlFor="signature-text">Signature Content</label>

                <textarea
                  id="signature-text"
                  value={textContent}
                  onChange={(event) => setTextContent(event.target.value)}
                  placeholder={`Darson La Tibi
Director
ABN Enterprise Management System
https://abn.web.id`}
                  rows={8}
                />
              </div>
            )}

            {/* DRAW */}

            {type === "DRAW" && (
              <div className="signature-form-group">
                <div className="signature-canvas-label">
                  <label>Draw Signature</label>

                  <button
                    type="button"
                    onClick={clearCanvas}
                    title="Clear signature"
                  >
                    <Eraser size={15} />
                    Clear
                  </button>
                </div>

                <canvas
                  ref={canvasRef}
                  width={700}
                  height={220}
                  className="signature-canvas"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />

                <small>
                  Draw your signature using your mouse, touchscreen, or stylus.
                </small>
              </div>
            )}

            {/* UPLOAD */}

            {type === "UPLOAD" && (
              <div className="signature-form-group">
                <label>Signature Image</label>

                <div className="signature-upload-box">
                  {uploadPreview ? (
                    <div className="signature-upload-preview">
                      <img src={uploadPreview} alt="Signature preview" />

                      <button
                        type="button"
                        onClick={() => setUploadPreview("")}
                      >
                        <X size={15} />
                        Remove
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="signature-upload-button"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload size={22} />

                      <strong>Upload Signature</strong>

                      <span>PNG, JPG or JPEG — max 2 MB</span>
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg"
                    hidden
                    onChange={handleUpload}
                  />
                </div>
              </div>
            )}

            {/* PREVIEW */}

            <div className="signature-preview-section">
              <label>Preview</label>

              <div className="signature-preview">
                {/* TEXT */}

                {type === "TEXT" && (
                  <div className="signature-preview-text">
                    {textContent ? (
                      textContent
                        .split("\n")
                        .map((line, index) => (
                          <div key={index}>{line || "\u00A0"}</div>
                        ))
                    ) : (
                      <span>Your text signature will appear here.</span>
                    )}
                  </div>
                )}

                {/* DRAW */}

                {type === "DRAW" && (
                  <div className="signature-preview-image">
                    {canvasRef.current && !isCanvasBlank(canvasRef.current) ? (
                      <img
                        key={canvasVersion}
                        src={canvasRef.current.toDataURL("image/png")}
                        alt="Drawn signature"
                      />
                    ) : (
                      <span>Your drawn signature will appear here.</span>
                    )}
                  </div>
                )}

                {/* UPLOAD */}

                {type === "UPLOAD" && (
                  <div className="signature-preview-image">
                    {uploadPreview ? (
                      <img src={uploadPreview} alt="Uploaded signature" />
                    ) : (
                      <span>Uploaded signature preview.</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* FOOTER */}

            <div className="signature-editor-footer">
              <button
                type="button"
                className="signature-cancel-button"
                onClick={handleNew}
              >
                <X size={16} />
                Clear
              </button>

              <button
                type="button"
                className="signature-save-button"
                onClick={handleSave}
              >
                <Save size={16} />

                {editingSignature ? "Update Signature" : "Save Signature"}
              </button>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignatureManager;
