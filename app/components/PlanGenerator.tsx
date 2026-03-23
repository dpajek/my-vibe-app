"use client";

import { useState } from "react";

const MOCK_PLAN = [
  "Define your core idea and target audience",
  "Sketch out the key features and user flows",
  "Choose your tech stack and set up the project",
  "Build a minimal working prototype",
  "Gather feedback and iterate",
  "Ship it 🚀",
];

export default function PlanGenerator() {
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <button
        onClick={() => setShowPlan(true)}
        disabled={showPlan}
        className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Generate Plan
      </button>

      {showPlan && (
        <div className="w-full rounded-2xl border border-zinc-200 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-900">
          {/* Card header */}
          <div className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-700">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Your Plan
            </h2>
          </div>

          {/* Steps */}
          <ol className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {MOCK_PLAN.map((step, i) => (
              <li key={step} className="flex items-start gap-4 px-6 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
