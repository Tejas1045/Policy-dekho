"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

// 🔹 Inner component (uses hook)
function BikeContent() {
    const params = useSearchParams();

    const reg = params.get("reg");
    const city = params.get("city");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Bike Insurance</h1>
            <p>Reg: {reg}</p>
            <p>City: {city}</p>
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