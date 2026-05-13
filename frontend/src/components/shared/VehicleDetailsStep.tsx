"use client";

import { useState } from "react";
import { insuranceConfig } from "./config/insuranceConfig";

type Props = {
  vehicleType: "car" | "bike";
  formData: {
    brand: string;
    model: string;
    year: string;
    fuelType: string;
    city: string;
    registrationNumber: string;
    policyType: string;
  };
  onChange: (
    field: string,
    value: string
  ) => void;
  onNext: () => void;
  errors?: Record<string, string>;
};

export default function VehicleDetailsStep({
  vehicleType,
  formData,
  onChange,
  onNext,
  errors,
}: Props) {
  const config = insuranceConfig[vehicleType];

  return (
    <div className="flex flex-col">
      
      {/* SECTION LABEL */}
      <div
        className="
          mb-5 border-b border-zinc-200 pb-3
          text-[11px] font-extrabold uppercase
          tracking-widest text-zinc-400
        "
      >
        Basic Information
      </div>

      {/* BRAND + MODEL */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        
        <FormSelect
          name="brand"
          label="Vehicle Brand"
          required
          value={formData.brand}
          onChange={(value) =>
            onChange("brand", value)
          }
          options={[
            "Maruti Suzuki",
            "Hyundai",
            "Honda",
            "Tata",
            "Mahindra",
            "Toyota",
          ]}
          error={errors?.brand}
        />
        <FormSelect
          name="model"
          label="Model"
          value={formData.model}
          onChange={(value) =>
            onChange("model", value)
          }
          options={[
            "Swift",
            "Baleno",
            "Creta",
            "City",
            "Nexon",
            "i20",
          ]}
          error={errors?.model}
        />
      </div>

      {/* YEAR + CITY */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        
        <FormSelect
          name="year"
          label="Year"
          required
          value={formData.year}
          onChange={(value) =>
            onChange("year", value)
          }
          options={[
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
          ]}
          error={errors?.year}
        />
        <FormSelect
          name="city"
          label="Registration City"
          value={formData.city}
          onChange={(value) =>
            onChange("city", value)
          }
          options={[
            "Mumbai",
            "Pune",
            "Delhi",
            "Bangalore",
            "Hyderabad",
          ]}
        />
      </div>

      {/* REGISTRATION NUMBER */}
      <div className="mb-8">
        <FormInput
          name="registrationNumber"
          label="Registration Number"
          required
          placeholder="MH12AB1234"
          value={formData.registrationNumber}
          onChange={(value) => onChange("registrationNumber", value)}
          error={errors?.registrationNumber}
        />
      </div>

      {/* FUEL TYPE */}
      <div
        className="
          mb-5 border-b border-zinc-200 pb-3
          text-[11px] font-extrabold uppercase
          tracking-widest text-zinc-400
        "
      >
        Fuel Type
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {config.fuelOptions.map((fuel) => {
          const active =
            formData.fuelType === fuel.value;

          return (
            <button
              key={fuel.value}
              type="button"
              onClick={() =>
                onChange("fuelType", fuel.value)
              }
              className={`
                flex flex-col items-center justify-center
                gap-2 rounded-2xl border p-4
                transition-all duration-200
                
                ${
                  active
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-zinc-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"
                }
              `}
            >
              <span className="text-2xl">
                {fuel.icon}
              </span>

              <span
                className={`
                  text-xs font-bold
                  ${
                    active
                      ? "text-indigo-600"
                      : "text-zinc-500"
                  }
                `}
              >
                {fuel.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* POLICY TYPE */}
      <div
        className="
          mb-5 border-b border-zinc-200 pb-3
          text-[11px] font-extrabold uppercase
          tracking-widest text-zinc-400
        "
      >
        Policy Type
      </div>

      <div className="mb-10 flex flex-col gap-3">
        {config.policyOptions.map((policy) => {
          const active =
            formData.policyType === policy.value;

          return (
            <button
              key={policy.value}
              type="button"
              onClick={() =>
                onChange(
                  "policyType",
                  policy.value
                )
              }
              className={`
                flex items-center justify-between
                rounded-2xl border p-5
                text-left transition-all duration-200

                ${
                  active
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-zinc-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"
                }
              `}
            >
              <div>
                <h3 className="text-sm font-bold text-zinc-900">
                  {policy.label}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  {policy.description}
                </p>
              </div>

              <div
                className={`
                  h-5 w-5 rounded-full border-2
                  transition-all

                  ${
                    active
                      ? "border-indigo-600 bg-indigo-600"
                      : "border-zinc-300"
                  }
                `}
              />
            </button>
          );
        })}
      </div>

      {/* FOOTER */}
      <div
        className="
          flex items-center justify-between
          border-t border-zinc-200 pt-6
        "
      >
        <p className="text-xs text-zinc-400">
          🔒 Your data is encrypted & secure
        </p>

        <button onClick={onNext}
          className="
            rounded-xl bg-indigo-600 px-7 py-3
            text-sm font-bold text-white
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-indigo-700
            hover:shadow-lg
          "
        >
          Continue →
        </button>
      </div>
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
  error,
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
          Select {label.toLowerCase()}
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
        <p id={name ? `error-field-${name}` : undefined} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = {
  name?: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
};

function FormInput({
  name,
  label,
  value,
  placeholder,
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
          text-sm font-medium uppercase text-zinc-900
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