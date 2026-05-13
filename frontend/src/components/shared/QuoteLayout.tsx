import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    sidebar: ReactNode;
};

export default function QuoteLayout({
    children,
    sidebar,
}: Props) {
    return (
        <div className="min-h-screen bg-[#FAFAF8]">
            {/* PAGE LAYOUT */}
            <div className="grid min-h-[calc(100vh-73px)] grid-cols-1 lg:grid-cols-[1fr_420px]">

                {/* LEFT PANEL */}
                <div className="flex justify-center px-6 py-10 lg:px-16 lg:py-14 bg-white">
                    <div className="w-full max-w-3xl">
                        {children}
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <aside
                    className="
            hidden
            border-l border-zinc-200
            bg-white
            lg:block
          "
                >
                    <div className="sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto p-10">
                        {sidebar}
                    </div>
                </aside>
            </div>
        </div>
    );
}