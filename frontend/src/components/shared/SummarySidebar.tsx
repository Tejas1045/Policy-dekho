type Props = {
  vehicleType: "car" | "bike";
  formData: {
    brand?: string;
    model?: string;
    year?: string;
    fuelType?: string;
    city?: string;
    policyType?: string;
    ownerName?: string;
    ncb?: string;
  };
};

const getValue = (value?: string) => {
  return value ? value : "—";
};

export default function SummarySidebar({
  vehicleType,
  formData,
}: Props) {
  const isCar = vehicleType === "car";

  return (
    <div className="flex flex-col gap-6">
      
      {/* HEADER */}
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
          Your Quote Summary
        </h2>

        <p className="mt-1 text-sm leading-6 text-zinc-500">
          Details update as you fill the form
        </p>
      </div>

      {/* SUMMARY CARD */}
      <div
        className="
          rounded-2xl border border-zinc-200
          bg-[#FAFAF8]
          p-5
        "
      >
        {/* VEHICLE HEADER */}
        <div className="mb-5 flex items-center gap-4 border-b border-zinc-200 pb-5">
          
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl bg-indigo-100 text-2xl
            "
          >
            {isCar ? "🚗" : "🏍️"}
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-900">
              {formData.brand && formData.model
                ? `${formData.brand} ${formData.model}`
                : isCar
                ? "Car Insurance"
                : "Bike Insurance"}
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              {formData.year
                ? `${formData.year} · ${
                    formData.fuelType || "Petrol"
                  }`
                : "Fill in your details"}
            </p>
          </div>
        </div>

        {/* SUMMARY ROWS */}
        <div className="flex flex-col gap-4">
          
          <SummaryRow
            label="Brand & Model"
            value={
              formData.brand && formData.model
                ? `${formData.brand} ${formData.model}`
                : undefined
            }
          />

          <SummaryRow
            label="Year"
            value={formData.year}
          />

          <SummaryRow
            label="Fuel Type"
            value={formData.fuelType}
          />

          <SummaryRow
            label="City"
            value={formData.city}
          />

          <SummaryRow
            label="Policy Type"
            value={formData.policyType}
          />

          <SummaryRow
            label="Owner"
            value={formData.ownerName}
          />

          <SummaryRow
            label="NCB"
            value={formData.ncb}
          />
        </div>
      </div>

      {/* WHY SECTION */}
      <div>
        <p
          className="
            mb-4 text-xs font-extrabold uppercase
            tracking-[0.08em] text-zinc-400
          "
        >
          Why Us
        </p>

        <div className="flex flex-col gap-3">
          
          <WhyCard
            icon="🤖"
            title="AI-Powered Match"
            description="Our AI compares 50+ plans and picks the one genuinely right for your profile."
            color="bg-indigo-100"
          />

          <WhyCard
            icon="✅"
            title="No Hidden Charges"
            description="The price you see is what you pay. No surprise fees."
            color="bg-green-100"
          />

          <WhyCard
            icon="🔒"
            title="100% Secure"
            description="Your data is encrypted end-to-end and never sold."
            color="bg-orange-100"
          />
        </div>
      </div>
    </div>
  );
}

type SummaryRowProps = {
  label: string;
  value?: string;
};

function SummaryRow({
  label,
  value,
}: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-medium text-zinc-500">
        {label}
      </span>

      <span
        className={`
          text-sm font-bold
          ${
            value
              ? "text-zinc-900"
              : "italic text-zinc-400 font-normal"
          }
        `}
      >
        {getValue(value)}
      </span>
    </div>
  );
}

type WhyCardProps = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

function WhyCard({
  icon,
  title,
  description,
  color,
}: WhyCardProps) {
  return (
    <div
      className="
        flex items-start gap-3 rounded-2xl
        border border-zinc-200
        bg-[#FAFAF8]
        p-4
      "
    >
      <div
        className={`
          flex h-8 w-8 items-center justify-center
          rounded-xl text-sm
          ${color}
        `}
      >
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-bold text-zinc-900">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}