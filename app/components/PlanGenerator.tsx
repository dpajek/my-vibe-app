"use client";

import { useState } from "react";

const MOCK_PLAN = [
  "1. Define your core idea and target audience",
  "2. Sketch out the key features and user flows",
  "3. Choose your tech stack and set up the project",
  "4. Build a minimal working prototype",
  "5. Gather feedback and iterate",
  "6. Ship it 🚀",
];

export default function PlanGenerator() {
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <button
        onClick={() => setShowPlan(true)}
        className="rounded-full bg-black px-8 py-3 text-white font-medium transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Generate Plan
      </button>

      {showPlan && (
        <ul className="w-full max-w-md rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left dark:border-zinc-700 dark:bg-zinc-900">
          {MOCK_PLAN.map((step) => (
            <li key={step} className="py-2 text-zinc-700 dark:text-zinc-300">
              {step}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
