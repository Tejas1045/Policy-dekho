'use client';
import { useRouter } from "next/navigation";

export default function SelectorCard() {

    const router = useRouter();
    const handleCardClick = (type: string) => {

        localStorage.setItem("vehicleType", type);

        router.push(`/${type}`);
    };
    return (
        <>
            <div className="selector-label">Choose your insurance type</div>
            <div className="selector-card">
                <div className="vehicle-tabs flex-wrap">
                    <button className="v-tab" onClick={() => handleCardClick("car")}>
                        <span className="v-tab-icon">🚗</span>
                        Car Insurance
                    </button>
                    <button className="v-tab" onClick={() => handleCardClick("bike")}>
                        <span className="v-tab-icon">🏍️</span>
                        Bike Insurance
                    </button>
                </div>
            </div>
        </>

    );
}