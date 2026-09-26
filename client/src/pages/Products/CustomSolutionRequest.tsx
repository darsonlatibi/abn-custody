import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Globe2,
  Layers3,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
  X,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  selectCustomSolutionSubmitError,
  selectCustomSolutionSubmitting,
  submitCustomSolutionRequest,
} from "../../features/customSolutionRequests/customSolutionRequestsSlice";

import "./CustomSolutionRequest.css";

type FormData = {
  companyName: string;
  industry: string;
  contactName: string;
  position: string;
  email: string;
  phone: string;
  website: string;

  solutionName: string;
  businessProblem: string;
  objectives: string;
  users: string;
  departments: string;

  dataSources: string[];
  integrations: string[];
  realtime: string;
  aiRequired: string;

  deployment: string;
  infrastructure: string;
  security: string;

  timeline: string;
  budget: string;
  additionalNotes: string;
};

const initialForm: FormData = {
  companyName: "",
  industry: "",
  contactName: "",
  position: "",
  email: "",
  phone: "",
  website: "",

  solutionName: "",
  businessProblem: "",
  objectives: "",
  users: "",
  departments: "",

  dataSources: [],
  integrations: [],
  realtime: "No",
  aiRequired: "Optional",

  deployment: "Cloud",
  infrastructure: "",
  security: "",

  timeline: "",
  budget: "",
  additionalNotes: "",
};

const dataSourceOptions = [
  "ERP / SAP",
  "Database",
  "REST API",
  "Excel / CSV",
  "IoT / Sensor",
  "MQTT",
  "OPC-UA",
  "Other",
];

const integrationOptions = [
  "SAP",
  "Oracle",
  "Microsoft",
  "Google",
  "WhatsApp",
  "Email",
  "Existing API",
  "Other",
];

const deploymentOptions = [
  {
    value: "Cloud",
    label: "Cloud",
    description: "ABN managed cloud deployment",
    icon: Cloud,
  },
  {
    value: "Private Cloud",
    label: "Private Cloud",
    description: "Dedicated customer environment",
    icon: ServerCog,
  },
  {
    value: "On-Premise",
    label: "On-Premise",
    description: "Installed inside customer infrastructure",
    icon: Database,
  },
  {
    value: "Hybrid",
    label: "Hybrid",
    description: "Combination of cloud and on-premise",
    icon: Network,
  },
];

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".csv",
  ".png",
  ".jpg",
  ".jpeg",
];

export default function CustomSolutionRequest() {
  const dispatch = useDispatch();
  const location = useLocation();

  const submitting = useSelector(selectCustomSolutionSubmitting);

  const submitError = useSelector(selectCustomSolutionSubmitError);

  const searchParams = new URLSearchParams(location.search);

  const productFromUrl =
    searchParams.get("product") || searchParams.get("solution") || "";

  const [form, setForm] = useState<FormData>(() => ({
    ...initialForm,
    solutionName: productFromUrl,
  }));

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleArrayValue = (
    field: "dataSources" | "integrations",
    value: string,
  ) => {
    setForm((current) => {
      const currentValues = current[field];

      return {
        ...current,
        [field]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (!selectedFiles.length) {
      return;
    }

    setError("");

    /*
     * Validate file types
     */
    const invalidType = selectedFiles.find((file) => {
      const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;

      return !ALLOWED_EXTENSIONS.includes(extension);
    });

    if (invalidType) {
      setError(`File "${invalidType.name}" has an unsupported file type.`);

      event.target.value = "";
      return;
    }

    /*
     * Validate file size
     */
    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_FILE_SIZE,
    );

    if (oversizedFile) {
      setError(
        `File "${oversizedFile.name}" exceeds the maximum size of 10 MB.`,
      );

      event.target.value = "";
      return;
    }

    /*
     * Validate total file count
     */
    setFiles((current) => {
      const availableSlots = MAX_FILES - current.length;

      if (availableSlots <= 0) {
        setError(`You can upload a maximum of ${MAX_FILES} files.`);

        return current;
      }

      const filesToAdd = selectedFiles.slice(0, availableSlots);

      if (selectedFiles.length > availableSlots) {
        setError(
          `Only ${availableSlots} more file(s) can be added. Maximum is ${MAX_FILES} files.`,
        );
      }

      return [...current, ...filesToAdd];
    });

    /*
     * Allow selecting the same file again
     */
    event.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((current) =>
      current.filter((_, fileIndex) => fileIndex !== index),
    );

    setError("");
  };

  const validateStep = () => {
    setError("");

    /*
     * STEP 1
     */
    if (step === 1) {
      if (
        !form.companyName.trim() ||
        !form.contactName.trim() ||
        !form.email.trim()
      ) {
        setError("Please complete company name, contact name, and email.");

        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(form.email.trim())) {
        setError("Please enter a valid business email address.");

        return false;
      }
    }

    /*
     * STEP 2
     */
    if (step === 2) {
      if (
        !form.solutionName.trim() ||
        !form.businessProblem.trim() ||
        !form.objectives.trim()
      ) {
        setError(
          "Please describe the requested solution, business problem, and expected objectives.",
        );

        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (!validateStep()) {
      return;
    }

    setStep((current) => Math.min(current + 1, 4));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setError("");

    setStep((current) => Math.max(current - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    if (!validateStep()) {
      return;
    }

    setError("");

    try {
      const result = await dispatch(
        submitCustomSolutionRequest({
          form,
          files,
        }) as any,
      ).unwrap();

      if (!result?.ok) {
        throw new Error(
          result?.message || "Failed to submit custom solution request.",
        );
      }

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (submitException) {
      const message =
        submitException instanceof Error
          ? submitException.message
          : submitError || "Failed to submit custom solution request.";

      setError(message);
    }
  };

  /*
   * SUCCESS PAGE
   */
  if (submitted) {
    return (
      <main className="custom-solution-page">
        <section className="custom-success-card">
          <div className="custom-success-icon">
            <CheckCircle2 size={42} />
          </div>

          <span className="custom-eyebrow">ABN SOLUTION ENGINEERING</span>

          <h1>Request Received</h1>

          <p>
            Thank you. Your custom solution request has been successfully
            submitted to ABN.
          </p>

          <div className="custom-success-summary">
            <div>
              <span>Company</span>
              <strong>{form.companyName}</strong>
            </div>

            <div>
              <span>Solution</span>
              <strong>{form.solutionName}</strong>
            </div>

            <div>
              <span>Contact</span>
              <strong>{form.email}</strong>
            </div>
          </div>

          <p className="custom-success-note">
            ABN Solution Engineering will review the requirements, architecture,
            integration needs, and deployment model before preparing the
            proposal.
          </p>

          <Link to="/products" className="custom-primary-button">
            Back to Products
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>
    );
  }

  /*
   * MAIN FORM
   */
  return (
    <main className="custom-solution-page">
      <section className="custom-solution-shell">
        {/* HEADER */}
        <header className="custom-page-header">
          <div>
            <Link to="/products" className="custom-back-link">
              <ArrowLeft size={17} />
              Back to Products
            </Link>

            <div className="custom-title-row">
              <div className="custom-title-icon">
                <Sparkles size={25} />
              </div>

              <div>
                <span className="custom-eyebrow">ABN SOLUTION ENGINEERING</span>

                <h1>Custom Solution Request</h1>

                <p>
                  Tell us about your business, technology, integration, and
                  deployment requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="custom-header-badge">
            <ShieldCheck size={17} />
            Enterprise Ready
          </div>
        </header>

        {/* PROGRESS */}
        <div className="custom-progress">
          {[
            ["01", "Company"],
            ["02", "Requirements"],
            ["03", "Technology"],
            ["04", "Review"],
          ].map(([number, label], index) => {
            const currentStep = index + 1;
            const active = step === currentStep;
            const completed = step > currentStep;

            return (
              <div
                className={`custom-progress-item ${active ? "active" : ""} ${
                  completed ? "completed" : ""
                }`}
                key={number}
              >
                <div className="custom-progress-number">
                  {completed ? <CheckCircle2 size={17} /> : number}
                </div>

                <span>{label}</span>
              </div>
            );
          })}
        </div>

        <form className="custom-form" onSubmit={handleSubmit} noValidate>
          {/* =====================================================
              STEP 1
              ===================================================== */}
          {step === 1 && (
            <section className="custom-form-card">
              <div className="custom-section-heading">
                <div className="custom-section-icon">
                  <Building2 size={20} />
                </div>

                <div>
                  <span>STEP 01</span>

                  <h2>Company Information</h2>

                  <p>Tell us who will be working with ABN.</p>
                </div>
              </div>

              <div className="custom-grid">
                <Field
                  label="Company / Organization"
                  required
                  value={form.companyName}
                  onChange={(value) => updateField("companyName", value)}
                  placeholder="PT Example Indonesia"
                />

                <Field
                  label="Industry"
                  value={form.industry}
                  onChange={(value) => updateField("industry", value)}
                  placeholder="Manufacturing, Mining, Government..."
                />

                <Field
                  label="Contact Person"
                  required
                  value={form.contactName}
                  onChange={(value) => updateField("contactName", value)}
                  placeholder="Full name"
                />

                <Field
                  label="Position / Department"
                  value={form.position}
                  onChange={(value) => updateField("position", value)}
                  placeholder="IT Manager / Operations / BOD..."
                />

                <Field
                  label="Business Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="name@company.com"
                />

                <Field
                  label="WhatsApp / Phone"
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="+62..."
                />

                <Field
                  label="Company Website"
                  value={form.website}
                  onChange={(value) => updateField("website", value)}
                  placeholder="https://company.com"
                  wide
                />
              </div>
            </section>
          )}

          {/* =====================================================
              STEP 2
              ===================================================== */}
          {step === 2 && (
            <section className="custom-form-card">
              <div className="custom-section-heading">
                <div className="custom-section-icon">
                  <BrainCircuit size={20} />
                </div>

                <div>
                  <span>STEP 02</span>

                  <h2>Business Requirements</h2>

                  <p>Help us understand what you want ABN to build.</p>
                </div>
              </div>

              <div className="custom-grid">
                <Field
                  label="Requested Solution"
                  required
                  value={form.solutionName}
                  onChange={(value) => updateField("solutionName", value)}
                  placeholder="ABN Industrial Intelligence"
                  wide
                />

                <TextArea
                  label="Business Problem"
                  required
                  value={form.businessProblem}
                  onChange={(value) => updateField("businessProblem", value)}
                  placeholder="What problem or process do you want to solve?"
                  wide
                />

                <TextArea
                  label="Expected Outcome / Objectives"
                  required
                  value={form.objectives}
                  onChange={(value) => updateField("objectives", value)}
                  placeholder="What should the system achieve?"
                  wide
                />

                <Field
                  label="Estimated Users"
                  value={form.users}
                  onChange={(value) => updateField("users", value)}
                  placeholder="e.g. 50 users"
                />

                <Field
                  label="Departments"
                  value={form.departments}
                  onChange={(value) => updateField("departments", value)}
                  placeholder="IT, Operations, Finance..."
                />
              </div>
            </section>
          )}

          {/* =====================================================
              STEP 3
              ===================================================== */}
          {step === 3 && (
            <section className="custom-form-card">
              <div className="custom-section-heading">
                <div className="custom-section-icon">
                  <Network size={20} />
                </div>

                <div>
                  <span>STEP 03</span>

                  <h2>Technology & Integration</h2>

                  <p>
                    Let our engineering team understand the technical
                    environment.
                  </p>
                </div>
              </div>

              <OptionGroup
                title="Current Data Sources"
                options={dataSourceOptions}
                selected={form.dataSources}
                onToggle={(value) => toggleArrayValue("dataSources", value)}
              />

              <OptionGroup
                title="Required Integrations"
                options={integrationOptions}
                selected={form.integrations}
                onToggle={(value) => toggleArrayValue("integrations", value)}
              />

              <div className="custom-subsection">
                <div className="custom-subsection-title">
                  <Database size={17} />
                  Realtime & Intelligence
                </div>

                <div className="custom-grid">
                  <SelectField
                    label="Realtime Monitoring"
                    value={form.realtime}
                    onChange={(value) => updateField("realtime", value)}
                    options={["No", "Yes", "Realtime + Alerts"]}
                  />

                  <SelectField
                    label="AI / Intelligence"
                    value={form.aiRequired}
                    onChange={(value) => updateField("aiRequired", value)}
                    options={[
                      "Optional",
                      "Required",
                      "AI + Predictive Analytics",
                    ]}
                  />

                  <Field
                    label="Existing Infrastructure"
                    value={form.infrastructure}
                    onChange={(value) => updateField("infrastructure", value)}
                    placeholder="Cloud / Server / VPN / Existing system..."
                    wide
                  />

                  <TextArea
                    label="Security Requirements"
                    value={form.security}
                    onChange={(value) => updateField("security", value)}
                    placeholder="SSO, LDAP, VPN, role-based access, audit log..."
                    wide
                  />
                </div>
              </div>

              <div className="custom-subsection">
                <div className="custom-subsection-title">
                  <Globe2 size={17} />
                  Deployment Model
                </div>

                <div className="deployment-grid">
                  {deploymentOptions.map((option) => {
                    const Icon = option.icon;

                    const selected = form.deployment === option.value;

                    return (
                      <button
                        type="button"
                        key={option.value}
                        className={`deployment-option ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() => updateField("deployment", option.value)}
                      >
                        <Icon size={22} />

                        <strong>{option.label}</strong>

                        <span>{option.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              STEP 4
              ===================================================== */}
          {step === 4 && (
            <section className="custom-form-card">
              <div className="custom-section-heading">
                <div className="custom-section-icon">
                  <Layers3 size={20} />
                </div>

                <div>
                  <span>STEP 04</span>

                  <h2>Project & Review</h2>

                  <p>Final information before submitting your request.</p>
                </div>
              </div>

              <div className="custom-grid">
                <SelectField
                  label="Expected Timeline"
                  value={form.timeline}
                  onChange={(value) => updateField("timeline", value)}
                  options={[
                    "",
                    "Less than 1 month",
                    "1 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "Flexible",
                  ]}
                />

                <SelectField
                  label="Estimated Budget"
                  value={form.budget}
                  onChange={(value) => updateField("budget", value)}
                  options={[
                    "",
                    "Not decided",
                    "< Rp 100 Million",
                    "Rp 100 - 500 Million",
                    "Rp 500 Million - 1 Billion",
                    "> Rp 1 Billion",
                  ]}
                />

                <TextArea
                  label="Additional Requirements"
                  value={form.additionalNotes}
                  onChange={(value) => updateField("additionalNotes", value)}
                  placeholder="Any additional information that can help our solution engineers..."
                  wide
                />
              </div>

              {/* UPLOAD */}
              <div className="custom-upload">
                <div className="custom-upload-icon">
                  <UploadCloud size={22} />
                </div>

                <div>
                  <strong>Supporting Documents</strong>

                  <p>
                    Upload process flow, sample reports, architecture diagrams,
                    or sample data.
                  </p>

                  <small>Maximum {MAX_FILES} files, 10 MB per file.</small>
                </div>

                <label className="custom-upload-button">
                  Select Files
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    disabled={submitting || files.length >= MAX_FILES}
                  />
                </label>
              </div>

              {/* FILE LIST */}
              {files.length > 0 && (
                <div className="custom-file-list">
                  {files.map((file, index) => (
                    <div
                      className="custom-file-item"
                      key={`${file.name}-${file.size}-${index}`}
                    >
                      <Mail size={16} />

                      <span>{file.name}</span>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        aria-label={`Remove ${file.name}`}
                        disabled={submitting}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* REQUEST SUMMARY */}
              <div className="custom-review">
                <div className="custom-review-header">
                  <CheckCircle2 size={18} />
                  Request Summary
                </div>

                <div className="custom-review-grid">
                  <div>
                    <span>Company</span>
                    <strong>{form.companyName || "-"}</strong>
                  </div>

                  <div>
                    <span>Contact</span>
                    <strong>{form.contactName || "-"}</strong>
                  </div>

                  <div>
                    <span>Solution</span>
                    <strong>{form.solutionName || "-"}</strong>
                  </div>

                  <div>
                    <span>Deployment</span>
                    <strong>{form.deployment}</strong>
                  </div>

                  <div>
                    <span>Realtime</span>
                    <strong>{form.realtime}</strong>
                  </div>

                  <div>
                    <span>AI</span>
                    <strong>{form.aiRequired}</strong>
                  </div>

                  <div>
                    <span>Documents</span>
                    <strong>
                      {files.length} file
                      {files.length !== 1 ? "s" : ""}
                    </strong>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ERROR */}
          {(error || submitError) && (
            <div className="custom-form-error">{error || submitError}</div>
          )}

          {/* ACTIONS */}
          <div className="custom-form-actions">
            {step > 1 ? (
              <button
                type="button"
                className="custom-secondary-button"
                onClick={previousStep}
                disabled={submitting}
              >
                <ArrowLeft size={17} />
                Previous
              </button>
            ) : (
              <Link to="/products" className="custom-secondary-button">
                <ArrowLeft size={17} />
                Cancel
              </Link>
            )}

            {step < 4 ? (
              <button
                type="button"
                className="custom-primary-button"
                onClick={nextStep}
                disabled={submitting}
              >
                Continue
                <ArrowRight size={17} />
              </button>
            ) : (
              <button
                type="submit"
                className="custom-primary-button"
                disabled={submitting}
              >
                {submitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    Submit Proposal Request
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        <footer className="custom-page-footer">
          <ShieldCheck size={15} />
          Your information is used only for solution assessment and proposal
          preparation.
        </footer>
      </section>
    </main>
  );
}

/* =========================================================
   FIELD
   ========================================================= */

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  wide = false,
}: FieldProps) {
  return (
    <label className={`custom-field ${wide ? "custom-field-wide" : ""}`}>
      <span>
        {label}

        {required && <b>*</b>}
      </span>

      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

/* =========================================================
   TEXT AREA
   ========================================================= */

type TextAreaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  wide?: boolean;
};

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  wide = false,
}: TextAreaProps) {
  return (
    <label className={`custom-field ${wide ? "custom-field-wide" : ""}`}>
      <span>
        {label}

        {required && <b>*</b>}
      </span>

      <textarea
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

/* =========================================================
   SELECT
   ========================================================= */

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <label className="custom-field">
      <span>{label}</span>

      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option || "Select option"}
          </option>
        ))}
      </select>
    </label>
  );
}

/* =========================================================
   OPTION GROUP
   ========================================================= */

type OptionGroupProps = {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

function OptionGroup({ title, options, selected, onToggle }: OptionGroupProps) {
  return (
    <div className="custom-option-section">
      <div className="custom-option-title">
        <Users size={17} />
        {title}
      </div>

      <div className="custom-options">
        {options.map((option) => {
          const active = selected.includes(option);

          return (
            <button
              type="button"
              key={option}
              className={`custom-option ${active ? "selected" : ""}`}
              onClick={() => onToggle(option)}
            >
              {active && <CheckCircle2 size={15} />}

              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
