"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuickSearch() {
    const [value, setValue] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (!value) return;

        // Basic logic (you can improve later)
        const isCar = value.length > 8;

        router.push(isCar ? "/car" : "/bike");
    };

    return (
        <div className="flex gap-2 max-w-md mx-auto mt-6">
            <Input
                placeholder="Enter vehicle number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
}