type Props = {
  currentStep: number;
};

const steps = [
  {
    id: 1,
    title: "Vehicle Details",
    subtitle: "Make, model & fuel type",
  },
  {
    id: 2,
    title: "Owner Details",
    subtitle: "Your contact & history",
  },
];

export default function StepIndicator({
  currentStep,
}: Props) {
  return (
    <div className="mb-12 flex items-center">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isDone = currentStep > step.id;

        return (
          <div
            key={step.id}
            className="flex flex-1 items-center"
          >
            {/* STEP ITEM */}
            <div className="flex items-center gap-3">

              {/* CIRCLE */}
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full
                  text-sm font-bold transition-all duration-300
                  
                  ${isDone
                    ? "bg-green-600 text-white"
                    : isActive
                      ? "bg-indigo-600 text-white ring-4 ring-indigo-100"
                      : "bg-zinc-200 text-zinc-400"
                  }
                `}
              >
                {isDone ? "✓" : step.id}
              </div>

              {/* LABEL */}
              <div className="flex flex-col">
                <span
                  className={`
                    text-sm font-bold transition-colors
                    ${isDone
                      ? "text-green-600"
                      : isActive
                        ? "text-indigo-600"
                        : "text-zinc-400"
                    }
                  `}
                >
                  {step.title}
                </span>

                <span className="text-[11px] text-zinc-400">
                  {step.subtitle}
                </span>
              </div>
            </div>

            {/* CONNECTOR */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  mx-4 h-[2px] flex-1 rounded-full transition-all duration-300
                  ${currentStep > step.id
                    ? "bg-green-600"
                    : "bg-zinc-200"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}