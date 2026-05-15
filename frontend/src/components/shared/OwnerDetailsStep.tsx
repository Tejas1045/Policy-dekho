"use client";
import { useState } from "react";
import { ownerSchema, toErrorMap } from "./schemas";

type Props = {
    formData: {
        ownerName: string;
        dob: string;
        mobile: string;
        email: string;
        previousInsurer: string;
        policyExpiry: string;
        ncb: string;
        addOns: string[];
    };

    onChange: (
        field: string,
        value: string
    ) => void;

    onToggleAddon: (addon: string) => void;

    onBack: () => void;

    onSubmit: () => void;
    errors?: Record<string, string>;
};

const addons = [
    "Zero Depreciation",
    "Engine Protection",
    "Roadside Assistance",
    "Return to Invoice",
];

const ncbOptions = [
    "0%",
    "20%",
    "25%",
    "35%",
    "45%",
    "50%",
    "Not Sure",
];

export default function OwnerDetailsStep({
    formData,
    onChange,
    onToggleAddon,
    onBack,
    onSubmit,
    errors: propErrors,
}: Props) {
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
    const combinedErrors = { ...(localErrors || {}), ...(propErrors || {}) };
    const hasErrors = Object.keys(combinedErrors).length > 0;
    function focusFirstField(errorMap: Record<string, string>) {
        const keys = Object.keys(errorMap || {});
        if (keys.length === 0) return;
        const first = keys[0];
        const el = document.getElementById(`field-${first}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            try { (el as HTMLElement).focus(); } catch (e) {}
        }
    }
    return (
        <div className="flex flex-col">

            {/* PERSONAL INFO */}
            <SectionLabel title="Personal Information" />

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">

                <FormInput
                    name="ownerName"
                    label="Full Name"
                    required
                    value={formData.ownerName}
                    placeholder="As on Aadhaar / DL"
                    onChange={(value) =>
                        onChange("ownerName", value)
                    }
                    error={combinedErrors.ownerName}
                />


                <FormInput
                    name="dob"
                    label="Date of Birth"
                    required
                    type="date"
                    value={formData.dob}
                    onChange={(value) =>
                        onChange("dob", value)
                    }
                    error={combinedErrors.dob}
                />
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">

                <FormInput
                    name="mobile"
                    label="Mobile Number"
                    required
                    value={formData.mobile}
                    placeholder="9876543210"
                    onChange={(value) =>
                        onChange("mobile", value)
                    }
                    error={combinedErrors.mobile}
                />

                <FormInput
                    name="email"
                    label="Email Address"
                    required
                    value={formData.email}
                    placeholder="you@example.com"
                    onChange={(value) =>
                        onChange("email", value)
                    }
                    error={combinedErrors.email}
                />
            </div>

            {/* PREVIOUS INSURANCE */}
            <SectionLabel title="Previous Insurance" />

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">

                <FormSelect
                    name="previousInsurer"
                    label="Previous Insurer"
                    value={formData.previousInsurer}
                    onChange={(value) =>
                        onChange("previousInsurer", value)
                    }
                    options={[
                        "HDFC ERGO",
                        "ICICI Lombard",
                        "Bajaj Allianz",
                        "Tata AIG",
                        "Royal Sundaram",
                        "No Previous Insurance",
                    ]}
                    error={combinedErrors.previousInsurer}
                />

                <FormInput
                    name="policyExpiry"
                    label="Policy Expiry"
                    type="date"
                    value={formData.policyExpiry}
                    onChange={(value) =>
                        onChange("policyExpiry", value)
                    }
                    error={combinedErrors.policyExpiry}
                />
            </div>

            {/* NCB */}
            <SectionLabel title="No Claim Bonus (NCB)" />

            <div className="mb-10 flex flex-wrap gap-2">
                {ncbOptions.map((option) => {
                    const active =
                        formData.ncb === option;

                    return (
                        <button
                            key={option}
                            type="button"
                            onClick={() =>
                                onChange("ncb", option)
                            }
                            className={`
                rounded-full border px-4 py-2
                text-sm font-semibold
                transition-all duration-200

                ${active
                                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                                    : "border-zinc-200 bg-white text-zinc-500 hover:border-indigo-300 hover:text-indigo-600"
                                }
              `}
                        >
                            {option}
                        </button>
                    );
                })}
                {combinedErrors.ncb && (
                    <p className="mt-2 text-sm text-red-600">{combinedErrors.ncb}</p>
                )}
            </div>

            {/* ADDONS */}
            <SectionLabel title="Add-ons (Optional)" />

            <div className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-2">
                {addons.map((addon) => {
                    const checked =
                        formData.addOns.includes(addon);

                    return (
                        <button
                            key={addon}
                            type="button"
                            onClick={() =>
                                onToggleAddon(addon)
                            }
                            className={`
                flex items-center gap-3 rounded-2xl
                p-4 text-left
                transition-all duration-200`}
                        >
                            <div
                                className={`
                  flex h-5 w-5 items-center justify-center
                  rounded border transition-all

                  ${checked
                                        ? "border-indigo-600 bg-indigo-600 text-white"
                                        : "border-zinc-300 bg-white"
                                    }
                `}
                            >
                                {checked && "✓"}
                            </div>

                            <span
                                className={`
                  text-sm font-semibold
                  ${checked
                                        ? "text-indigo-600"
                                        : "text-zinc-700"
                                    }
                `}
                            >
                                {addon}
                            </span>
                        </button>
                    );
                })}
                {combinedErrors.addOns && (
                    <p className="mt-2 text-sm text-red-600">{combinedErrors.addOns}</p>
                )}
            </div>

            {/* FOOTER */}
            {hasErrors && (
                <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    Please fix the highlighted fields before continuing.
                </div>
            )}
            <div
                className="
          flex items-center justify-between
          border-t border-zinc-200 pt-6
        "
            >
                <button
                    onClick={onBack}
                    className="
            rounded-xl border border-zinc-300
            px-6 py-3 text-sm font-semibold
            text-zinc-600 transition-all duration-200
            hover:border-zinc-800 hover:text-zinc-900
          "
                >
                    ← Back
                </button>

                <button
                    onClick={() => {
                        // validate owner step
                        const parse = ownerSchema.safeParse(formData);
                        if (!parse.success) {
                            const map = toErrorMap(parse.error);
                            setLocalErrors(map);
                            focusFirstField(map);
                            return;
                        }

                        setLocalErrors({});
                        onSubmit();
                    }}
                    className="
            rounded-xl bg-green-600 px-7 py-3
            text-sm font-bold text-white
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-green-700
            hover:shadow-lg
          "
                >
                    View Plans →
                </button>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

function SectionLabel({
    title,
}: {
    title: string;
}) {
    return (
        <div
            className="
        mb-5 border-b border-zinc-200 pb-3
        text-[11px] font-extrabold uppercase
        tracking-widest text-zinc-400
      "
        >
            {title}
        </div>
    );
}

type InputProps = {
    name?: string;
    label: string;
    value: string;
    placeholder?: string;
    type?: string;
    onChange: (value: string) => void;
    required?: boolean;
    error?: string;
};

function FormInput({
    name,
    label,
    value,
    placeholder,
    type = "text",
    onChange,
    required = false,
    error,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-zinc-700">
                {label} {required && <span className="text-red-600">*</span>}
            </label>

            <input
                id={name ? `field-${name}` : undefined}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                aria-invalid={!!error}
                aria-describedby={name && error ? `error-field-${name}` : undefined}
                className="
          rounded-xl border border-zinc-200
          bg-white px-4 py-3
          text-sm font-medium text-zinc-900
          outline-none transition-all
          focus:border-indigo-600
          focus:ring-4 focus:ring-indigo-100
        "
            />
            {error && (
                <p id={name ? `error-field-${name}` : undefined} className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}

type SelectProps = {
    name?: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    required?: boolean;
    error?: string;
};

function FormSelect({
    name,
    label,
    value,
    onChange,
    options,
    required = false,
    error
}: SelectProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-zinc-700">
                {label} {required && <span className="text-red-600">*</span>}
            </label>

            <select
                id={name ? `field-${name}` : undefined}
                name={name}
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="
          rounded-xl border border-zinc-200
          bg-white px-4 py-3
          text-sm font-medium text-zinc-900
          outline-none transition-all
          focus:border-indigo-600
          focus:ring-4 focus:ring-indigo-100
        "
            >
                <option value="">
                    Select option
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}