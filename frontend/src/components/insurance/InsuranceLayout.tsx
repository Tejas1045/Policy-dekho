"use client";

import React from "react";

export default function InsuranceLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[72vh] flex items-start justify-center py-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  <aside className="hidden md:block p-8 bg-linear-to-b from-white to-gray-50 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
              <div>
                <div className="font-medium">Compare leading plans</div>
                <div className="text-sm text-gray-500">Find the best coverage and price from top insurers.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
              <div>
                <div className="font-medium">AI tailored recommendations</div>
                <div className="text-sm text-gray-500">Get a concise recommendation based on vehicle and driving profile.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
              <div>
                <div className="font-medium">Hassle-free purchase</div>
                <div className="text-sm text-gray-500">Buy online and receive policy documents instantly.</div>
              </div>
            </li>
          </ul>
        </aside>

        <main className="p-6">
          <div className="mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
