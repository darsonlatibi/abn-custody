import React, { useEffect, useState } from "react";
import {
  Check,
  Image as ImageIcon,
  Pencil,
  Settings,
  Type,
  X,
} from "lucide-react";

import type { EmailSignature } from "./SignatureManager";
import "./Signature.css";

interface SignaturePickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (signature: EmailSignature) => void;
  onManage: () => void;
}

const STORAGE_KEY = "abn_mail_signatures";

const getStoredSignatures = (): EmailSignature[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch (error) {
    console.error("Failed to load signatures:", error);
    return [];
  }
};

const getTypeIcon = (type: EmailSignature["type"]) => {
  switch (type) {
    case "DRAW":
      return <Pencil size={16} />;

    case "UPLOAD":
      return <ImageIcon size={16} />;

    case "TEXT":
    default:
      return <Type size={16} />;
  }
};

const getTypeLabel = (type: EmailSignature["type"]) => {
  switch (type) {
    case "DRAW":
      return "Drawn signature";

    case "UPLOAD":
      return "Image signature";

    case "TEXT":
    default:
      return "Text signature";
  }
};

const getPreview = (signature: EmailSignature) => {
  if (signature.type === "TEXT") {
    return signature.content.replace(/\n/g, " ").trim().slice(0, 100);
  }

  return getTypeLabel(signature.type);
};

const SignaturePicker: React.FC<SignaturePickerProps> = ({
  open,
  onClose,
  onSelect,
  onManage,
}) => {
  const [signatures, setSignatures] = useState<EmailSignature[]>([]);

  useEffect(() => {
    if (!open) {
      return;
    }

    setSignatures(getStoredSignatures());
  }, [open]);

  if (!open) {
    return null;
  }

  const defaultSignature = signatures.find((signature) => signature.isDefault);

  const handleSelect = (signature: EmailSignature) => {
    onSelect(signature);
    onClose();
  };

  return (
    <div
      className="signature-picker-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="signature-picker"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signature-picker-title"
      >
        <div className="signature-picker-header">
          <div>
            <h3 id="signature-picker-title">Insert Signature</h3>
            <p>Select a signature to insert into your message.</p>
          </div>

          <button
            type="button"
            className="signature-close"
            onClick={onClose}
            aria-label="Close signature picker"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="signature-picker-body">
          {signatures.length === 0 ? (
            <div className="signature-picker-empty">
              <div className="signature-picker-empty-icon">
                <Pencil size={28} />
              </div>

              <h4>No signatures yet</h4>

              <p>
                Create a text, drawn, or image signature before inserting it
                into your email.
              </p>

              <button
                type="button"
                className="signature-primary-button"
                onClick={onManage}
              >
                <Settings size={16} />
                Manage Signatures
              </button>
            </div>
          ) : (
            <>
              {defaultSignature && (
                <div className="signature-picker-default">
                  <Check size={15} />
                  <span>
                    Default signature: <strong>{defaultSignature.name}</strong>
                  </span>
                </div>
              )}

              <div className="signature-picker-list">
                {signatures.map((signature) => (
                  <button
                    key={signature.id}
                    type="button"
                    className={`signature-picker-item${
                      signature.isDefault
                        ? " signature-picker-item-default"
                        : ""
                    }`}
                    onClick={() => handleSelect(signature)}
                  >
                    <div className="signature-picker-item-icon">
                      {getTypeIcon(signature.type)}
                    </div>

                    <div className="signature-picker-item-content">
                      <div className="signature-picker-item-title">
                        <span>{signature.name}</span>

                        {signature.isDefault && (
                          <span className="signature-default-badge">
                            Default
                          </span>
                        )}
                      </div>

                      <div className="signature-picker-item-preview">
                        {signature.type === "UPLOAD" ? (
                          <img
                            src={signature.content}
                            alt={`${signature.name} preview`}
                          />
                        ) : signature.type === "DRAW" ? (
                          <img
                            src={signature.content}
                            alt={`${signature.name} preview`}
                          />
                        ) : (
                          <span>{getPreview(signature)}</span>
                        )}
                      </div>
                    </div>

                    <div className="signature-picker-item-action">
                      <Check size={17} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="signature-picker-footer">
          <button
            type="button"
            className="signature-secondary-button"
            onClick={onManage}
          >
            <Settings size={16} />
            Manage Signatures
          </button>

          <button
            type="button"
            className="signature-secondary-button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignaturePicker;
