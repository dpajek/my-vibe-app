import PlanGenerator from "./components/PlanGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 dark:bg-black">
      <div className="w-full max-w-lg flex flex-col items-center gap-10 py-24 text-center">
        {/* Hero */}
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-xs font-medium tracking-widest text-zinc-500 uppercase dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
            Beta
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            My Vibe App
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            Turn your ideas into action. Generate a step-by-step plan to bring
            your next project to life.
          </p>
        </div>

        {/* Interactive section */}
        <PlanGenerator />
      </div>
    </main>
  );
}
