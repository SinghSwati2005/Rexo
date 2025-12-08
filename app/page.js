'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-neutral-900 to-black text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-5 border-b border-neutral-800 sticky top-0 bg-black/40 backdrop-blur-xl z-50">
        <h1 className="text-2xl font-bold tracking-wide">OmniSphere AI</h1>
        <div className="flex gap-6 items-center">
          <a href="#features" className="hover:text-neutral-300">Features</a>
          <a href="#architecture" className="hover:text-neutral-300">Architecture</a>
          <a href="#demo" className="hover:text-neutral-300">Demo</a>
          <Link href={"/sign-in"} className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-neutral-200">Login</Link>
          <Link href={"/sign-up"} className="bg-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-700">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 lg:px-24 py-24 flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl font-bold leading-tight">AI-Powered Omnichannel Retail Sales Agent</h2>
          <p className="text-neutral-300 text-lg">Delivering seamless shopping experiences across Web, WhatsApp, Mobile App, and In‑Store Kiosks — powered by Agentic AI.</p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-blue-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700">Launch Agent</Button>
            <Button variant="outline" className="px-6 py-3 rounded-xl text-lg border-neutral-600 text-white hover:bg-neutral-800">Learn More</Button>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="/hero-ai.png"
          alt="AI Retail"
          className="w-[420px] mt-10 lg:mt-0 drop-shadow-2xl"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="px-10 lg:px-24 py-20 text-center">
        <h3 className="text-4xl font-bold mb-12">Key Features</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Conversational AI Sales Agent", desc: "Understands intent, asks questions, guides purchases like a real associate." },
            { title: "Worker Agent Orchestration", desc: "Recommendation, Inventory, Payment, Loyalty & Fulfillment Agents." },
            { title: "Omnichannel Consistency", desc: "Switch between Web, WhatsApp, and Kiosk while preserving session context." },
            { title: "End‑to‑End Checkout", desc: "Smart suggestions, inventory checks, payment simulation, and pickup QR code." }
          ].map((f, i) => (
            <Card key={i} className="bg-neutral-900/60 border-neutral-800 p-6 rounded-2xl shadow-xl hover:bg-neutral-800 duration-300">
              <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="px-10 lg:px-24 py-20 text-center">
        <h3 className="text-4xl font-bold mb-12">System Architecture</h3>
        <img src="/architecture-dark.png" className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl" />
      </section>

      {/* Demo CTA */}
      <section id="demo" className="px-10 lg:px-24 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Experience the AI Agent</h3>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">Chat with the omnichannel AI assistant that handles recommendations, inventory checks, offers, payments, and in‑store reservations.</p>
        <Button className="bg-blue-600 px-8 py-4 text-xl rounded-2xl hover:bg-blue-700">Start Demo</Button>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-800 text-center text-neutral-500 text-sm">© 2025 OmniSphere AI — Retail Intelligence Reinvented.</footer>
    </div>
  );
}
