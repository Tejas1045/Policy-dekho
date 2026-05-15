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
    const params = useSearchParams();

    const reg = params.get("reg");
    const city = params.get("city");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Bike Insurance</h1>
        </div>
    );
}

// 🔹 Page component (wrap with Suspense)
export default function BikePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BikeContent />
        </Suspense>
    );
}