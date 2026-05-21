import IsotopeCalculator from "@/components/IsotopeCalculator";
import { Atom } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto py-16">
        {/* Header */}
        <div className="mb-12 border-l-4 border-zinc-900 pl-8 space-y-2">
          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter font-outfit">
            Llogaritësi i Izotopeve
          </h1>
          <p className="text-zinc-600 text-lg max-w-xl font-medium">
            Sistemi i analizës dhe identifikimit të izotopeve bërthamore.
            Zbuloni stabilitetin bërthamor dhe aplikimet shkencore.
          </p>
        </div>

        {/* Calculator */}
        <IsotopeCalculator />
      </div>
    </main>
  );
}
