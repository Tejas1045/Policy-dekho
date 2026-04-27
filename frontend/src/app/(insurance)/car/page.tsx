"use client";

import { useSearchParams } from "next/navigation";

export default function CarPage() {
    const params = useSearchParams();

    const reg = params.get("reg");
    const city = params.get("city");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Car Insurance</h1>
            
        </div>
    );
}