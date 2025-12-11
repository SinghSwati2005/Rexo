"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useRef } from "react";

const featureCards = [
  {
    title: "Conversational AI Sales Agent",
    desc: "Understands intent, asks questions, guides purchases like a real associate.",
  },
  {
    title: "Worker Agent Orchestration",
    desc: "Recommendation, Inventory, Payment, Loyalty & Fulfillment Agents.",
  },
  {
    title: "Omnichannel Consistency",
    desc: "Switch between Web, WhatsApp, and Kiosk while preserving session context.",
  },
  {
    title: "End‑to‑End Checkout",
    desc: "Smart suggestions, inventory checks, payment simulation, and pickup QR code.",
  },
];

export default function LandingPage() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="min-h-screen bg-[#f9f5ec] text-gray-900">
      {/* Hero Section */}
      <section className="px-10 lg:px-24 py-24 flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-[#d6601a]">
            AI-Powered Fashion Concierge
          </h2>
          <p className="text-gray-700 text-lg">
            REXO AI curates looks, manages inventory, and keeps shoppers engaged
            across web, app, and in-store experiences — all with one cohesive
            fashion brain.
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              asChild
              variant="outline"
              className="px-6 py-3 rounded-xl text-lg border-[#f3c58a] text-gray-900 hover:bg-[#fff3de]"
            >
              <a href="#features">Learn More</a>
            </Button>
            <Button
              asChild
              className="bg-[#f08a1f] px-6 py-3 rounded-xl text-lg font-semibold text-white hover:bg-[#e07e17]"
            >
              <Link href="/demo">Try Now!</Link>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-10 lg:mt-0 grid grid-cols-3 gap-4 h-96">
          <img
            src="/fashion1.jpg"
            alt="Curated clothing rack with outfits"
            className="h-full w-full object-cover rounded-3xl drop-shadow-2xl border border-[#f3e8d7]"
          />
          <img
            src="/fashion2.jpg"
            alt="Shopping bags in a boutique"
            className="h-full w-full object-cover rounded-3xl drop-shadow-2xl border border-[#f3e8d7]"
          />
          <img
            src="/fashion3.jpeg"
            alt="Folded fashion pieces and accessories"
            className="h-full w-full object-cover rounded-3xl drop-shadow-2xl border border-[#f3e8d7]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-10 lg:px-24 py-20 text-center">
        <h3 className="text-4xl font-bold mb-12 text-[#d6601a]">
          Key Features
        </h3>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="py-2">
            {[...featureCards, ...featureCards].map((f, i) => (
              <CarouselItem
                key={`${f.title}-${i}`}
                className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] basis-1/1 sm:basis-1/2 lg:basis-1/4 px-2"
              >
                <Card className="h-full bg-[#fffaf1] border-[#f3e8d7] p-6 rounded-2xl shadow-xl hover:bg-[#fff3de] transition-transform duration-300 hover:scale-105">
                  <h4 className="text-xl font-semibold mb-3 text-[#d6601a]">
                    {f.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="px-10 lg:px-24 py-20 text-center">
        <h3 className="text-4xl font-bold mb-12 text-[#d6601a]">
          Personalize your shopping with AI Agent
        </h3>
        <img
          src="/traditional.jpeg"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-[#f3e8d7]"
          alt="Traditional fashion ensemble curated by AI"
        />
      </section>
    </div>
  );
}
