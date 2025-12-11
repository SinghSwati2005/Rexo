"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function WelcomePage() {
  const { user } = useUser();
  const name = user?.firstName || user?.fullName || "Guest";

  return (
    <div className="min-h-screen bg-[#f9f5ec] text-gray-900 px-8 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d6601a]">
            Fashion Concierge
          </p>
          <h1 className="text-5xl font-bold text-[#d6601a]">
            Hi {name}, Welcome!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Tell us what festival or occasion you are shopping for, and choose how you
            want to explore.
          </p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-800">
            What festival or occasion are you shopping for?
          </label>
          <input
            type="text"
            placeholder="e.g., Diwali, Wedding, Graduation..."
            className="w-full rounded-xl border border-[#f3e8d7] bg-white px-4 py-3 text-base shadow-sm focus:border-[#d6601a] focus:ring-2 focus:ring-[#d6601a]/20 outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-6 py-3 rounded-xl text-lg font-semibold bg-[#f3e8d7] text-[#d6601a] border border-[#f3e8d7] hover:bg-[#f0dcc3]">
            Wanna Browse Yourself?
          </Button>
          <Button className="px-6 py-3 rounded-xl text-lg font-semibold bg-[#d6601a] text-white hover:bg-[#c25315]">
            Want Our Agent to help?
          </Button>
        </div>
      </div>
    </div>
  );
}

