"use client";

import { InsuranceFormData } from "@/components/shared/config/types";
import OwnerDetailsStep from "@/components/shared/OwnerDetailsStep";
import QuoteLayout from "@/components/shared/QuoteLayout";
import StepIndicator from "@/components/shared/StepIndicator";
import SummarySidebar from "@/components/shared/SummarySidebar";
import VehicleDetailsStep from "@/components/shared/VehicleDetailsStep";
import { useState } from "react";

const initialFormData: InsuranceFormData = {
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    city: "",
    registrationNumber: "",
    policyType: "comprehensive",

    ownerName: "",
    dob: "",
    mobile: "",
    email: "",

    previousInsurer: "",
    policyExpiry: "",

    ncb: "",

    addOns: [],
};

export default function BikePage() {
    const [currentStep, setCurrentStep] =
        useState(1);

    const [formData, setFormData] =
        useState<InsuranceFormData>(
            initialFormData
        );
        const [errors, setErrors] =
            useState<Record<string, string>>({});

    /* -------------------------------------------------------------------------- */
    /*                                   HANDLERS                                 */
    /* -------------------------------------------------------------------------- */

    const handleChange = (
        field: string,
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleToggleAddon = (
        addon: string
    ) => {
        setFormData((prev) => {
            const exists =
                prev.addOns.includes(addon);

            return {
                ...prev,
                addOns: exists
                    ? prev.addOns.filter(
                        (item) => item !== addon
                    )
                    : [...prev.addOns, addon],
            };
        });
    };

    const handleNext = () => {
            import("@/components/shared/schemas").then(({ vehicleSchema, toErrorMap }) => {
                const stepSchema = vehicleSchema.pick({ brand: true, model: true, registrationNumber: true });
                const result = stepSchema.safeParse(formData as any);
                if (!result.success) {
                    const map = toErrorMap(result.error as any);
                    setErrors(map);
                    focusFirstField(map);
                    return;
                }

                setErrors({});
                setCurrentStep(2);
            });
    };

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

    const handleBack = () => {
        setCurrentStep(1);
    };

    const handleSubmit = () => {
            import("@/components/shared/schemas").then(({ ownerSchema, toErrorMap }) => {
                const result = ownerSchema.safeParse(formData);
                if (!result.success) {
                    const map = toErrorMap(result.error);
                    setErrors(map);
                    focusFirstField(map);
                    return;
                }

                setErrors({});
                console.log(formData);
            });

        // later:
        // API call
        // redirect to quotes page
    };

    /* -------------------------------------------------------------------------- */
    /*                                    RENDER                                  */
    /* -------------------------------------------------------------------------- */

    return (
        <QuoteLayout
            sidebar={
                <SummarySidebar
                    vehicleType="bike"
                    formData={formData}
                />
            }
        >
            {/* STEP INDICATOR */}
            <StepIndicator
                currentStep={currentStep}
            />

            {/* HEADER */}
            <div className="mb-10">

                <div
                    className="
            mb-4 inline-flex items-center gap-2
            rounded-full border border-indigo-200
            bg-indigo-50 px-4 py-2
            text-xs font-bold text-indigo-600
          "
                >
                    🚗 Bike Insurance
                </div>

                <h1
                    className="
            font-serif text-5xl font-bold
            leading-tight tracking-tight
            text-zinc-900
          "
                >
                    {currentStep === 1
                        ? "Tell us about your vehicle"
                        : "A few details about you"}
                </h1>

                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500">
                    {currentStep === 1
                        ? "We'll use this to find the most accurate plans and pricing."
                        : "This helps us personalise your quote and contact you."}
                </p>
            </div>

            {/* STEP CONTENT */}
            {currentStep === 1 ? (
                <VehicleDetailsStep
                    vehicleType="bike"
                    formData={formData}
                    onChange={handleChange}
                    onNext={handleNext}
                    errors={errors}
                />
            ) : (
                <OwnerDetailsStep
                    formData={formData}
                    onChange={handleChange}
                    onToggleAddon={
                        handleToggleAddon
                    }
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                    // pass errors for owner step too
                    errors={errors}
                />
            )}
        </QuoteLayout>
    );
}