"use client";
import { useState } from "react";

const templates = [
  { name: "SaaS Pro", desc: "Perfect for SaaS products. Hero, features, pricing, testimonials.", gradient: "from-purple-600 to-blue-600" },
  { name: "Creator", desc: "For courses, ebooks, and digital products. High-converting sales page.", gradient: "from-emerald-600 to-teal-600" },
  { name: "Agency", desc: "Portfolio and services showcase. Clean, professional, impressive.", gradient: "from-rose-600 to-pink-600" },
  { name: "Waitlist", desc: "Pre-launch and coming soon. Email capture, countdown, social proof.", gradient: "from-orange-600 to-amber-600" },
];

const features = [
  { icon: "⚡", title: "Next.js 14 + Tailwind", desc: "Modern stack, blazing fast." },
  { icon: "🌙", title: "Dark Mode Built-In", desc: "Both themes, zero extra work." },
  { icon: "📱", title: "Fully Responsive", desc: "Perfect on every screen size." },
  { icon: "🚀", title: "One-Click Vercel Deploy", desc: "Push to GitHub, done." },
  { icon: "🎨", title: "Easy to Customize", desc: "Change colors, copy, images in minutes." },
  { icon: "💰", title: "Stripe-Ready", desc: "Payment components pre-wired." },
];

const faqs = [
  { q: "What tech stack are these built with?", a: "Next.js 14, TypeScript, Tailwind CSS. Deployable to Vercel with zero config." },
  { q: "Can I use them for client projects?", a: "Yes! One purchase covers unlimited personal and client projects." },
  { q: "Do I get updates?", a: "Yes. New templates and improvements are included for life." },
  { q: "What if I need help customizing?", a: "Each template includes detailed docs. Plus Discord community access for support." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, product: "shippage" }) });
      setSubmitted(true);
    } catch { alert("Something went wrong."); }
    setLoading(false);
  };

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-amber-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm font-medium">🔥 4 premium templates included</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Ship Your Landing Page <span className="gradient-text-orange">in Minutes</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">Premium Next.js + Tailwind landing page templates that actually convert. Stop designing from scratch. Start shipping.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-500" />
              <button type="submit" disabled={loading} className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 font-semibold transition-all disabled:opacity-50 whitespace-nowrap">
                {loading ? "Joining..." : "Get Access — $14"}
              </button>
            </form>
          ) : (
            <div className="px-6 py-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-300 max-w-md mx-auto">✅ You&apos;re on the list!</div>
          )}
        </div>
      </section>

      {/* Templates */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">4 Premium Templates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {templates.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-800 overflow-hidden hover:border-orange-500/40 transition-colors">
              <div className={`h-48 bg-gradient-to-br ${t.gradient} opacity-80 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white/90">{t.name}</span>
              </div>
              <div className="p-6 bg-gray-900/50">
                <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                <p className="text-gray-400">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Built for Speed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="max-w-sm mx-auto p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-900/50 border border-orange-500/30">
          <div className="text-5xl font-bold mb-2">$14</div>
          <p className="text-gray-400 mb-8">one-time · unlimited projects</p>
          <ul className="text-left space-y-3 mb-8">
            {["4 premium templates", "Next.js 14 + TypeScript", "Tailwind CSS", "Dark mode", "Stripe-ready components", "Lifetime updates", "Commercial license"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300"><span className="text-orange-400">✓</span>{item}</li>
            ))}
          </ul>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 font-semibold transition-all">Join Waitlist</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-400">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">© 2026 ShipPage</div>
      </footer>
    </main>
  );
}

