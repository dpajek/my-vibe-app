import PlanGenerator from "./components/PlanGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 py-24 dark:bg-black">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          My Vibe App
        </h1>
        <p className="max-w-sm text-lg text-zinc-500 dark:text-zinc-400">
          Turn your ideas into action. Generate a step-by-step plan to bring
          your next project to life.
        </p>
      </div>

      <PlanGenerator />
    </main>
  );
}
