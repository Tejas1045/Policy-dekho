const steps = [
    {
        step: "Step 01",
        icon: "🚗",
        title: "Enter Vehicle Details",
        description:
            "Tell us your vehicle make, model, year, and registration city. Takes under 60 seconds.",
        styles: {
            bg: "bg-indigo-50",
            text: "text-indigo-600",
        },
    },
    {
        step: "Step 02",
        icon: "📋",
        title: "Compare Plans",
        description:
            "Browse and compare plans from 50+ insurers side by side — premiums, IDV, and features.",
        styles: {
            bg: "bg-orange-50",
            text: "text-orange-600",
        },
    },
    {
        step: "Step 03",
        icon: "🤖",
        title: "Get AI Recommendation",
        description:
            "Our AI analyses your profile and picks the best policy based on your actual needs.",
        styles: {
            bg: "bg-teal-50",
            text: "text-teal-600",
        },
    },
    {
        step: "Step 04",
        icon: "✅",
        title: "Buy Instantly",
        description:
            "Pay online and receive your policy document in minutes. No agent visits required.",
        styles: {
            bg: "bg-green-50",
            text: "text-green-600",
        },
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#FAFAF8]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

                {/* Section Tag */}
                <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-5 h-0.5 rounded bg-indigo-600" />
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
                        How it works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-zinc-900 mb-4">
                    Get covered in <br />
                    four simple steps
                </h2>

                {/* Subtitle */}
                <p className="text-zinc-500 text-base leading-7 max-w-md mb-14">
                    No paperwork, no agents, no confusion. Just the right
                    policy for your vehicle.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className="
                bg-white
                border
                border-zinc-200
                rounded-3xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-transparent
              "
                        >
                            {/* Step Badge */}
                            <div
                                className={`
                  inline-block
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-bold
                  mb-5
                  ${step.styles.bg}
                  ${step.styles.text}
                `}
                            >
                                {step.step}
                            </div>

                            {/* Icon */}
                            <div className="text-3xl mb-4">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-[15px] font-bold tracking-tight text-zinc-900 mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-6 text-zinc-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}