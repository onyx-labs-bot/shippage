"use client";
import { useState } from "react";

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Built on Next.js 14 with edge runtime. Sub-100ms response times." },
  { icon: "🔒", title: "Secure by Default", desc: "SOC2 compliant infrastructure with end-to-end encryption." },
  { icon: "📊", title: "Advanced Analytics", desc: "Real-time dashboards with custom metrics and alerts." },
  { icon: "🔄", title: "Seamless Integrations", desc: "Connect with 50+ tools via our REST API and webhooks." },
  { icon: "👥", title: "Team Collaboration", desc: "Shared workspaces, permissions, and audit logs." },
  { icon: "🎯", title: "Smart Automation", desc: "AI-powered workflows that learn from your usage patterns." },
];

const tiers = [
  { name: "Starter", price: { monthly: 19, annual: 15 }, desc: "For individuals", features: ["1 workspace", "5 integrations", "1,000 API calls/mo", "Email support"], cta: "Start Free Trial" },
  { name: "Pro", price: { monthly: 49, annual: 39 }, desc: "For growing teams", features: ["5 workspaces", "Unlimited integrations", "50,000 API calls/mo", "Priority support", "Advanced analytics", "Custom automations"], cta: "Start Free Trial", popular: true },
  { name: "Enterprise", price: { monthly: 149, annual: 119 }, desc: "For large organizations", features: ["Unlimited workspaces", "Unlimited everything", "SSO & SAML", "Dedicated support", "Custom SLAs", "On-premise option"], cta: "Contact Sales" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, TechFlow", text: "We cut our deployment time by 60% after switching. The automation features alone justify the price.", avatar: "SC" },
  { name: "Marcus Rivera", role: "Head of Eng, ScaleUp", text: "The API is beautifully designed. We integrated it into our pipeline in less than a day.", avatar: "MR" },
  { name: "Emily Watson", role: "Founder, DataPulse", text: "Finally a tool that just works. No bloat, no complexity. Pure productivity.", avatar: "EW" },
];

const faqs = [
  { q: "Can I try before I buy?", a: "Yes! All plans come with a 14-day free trial. No credit card required." },
  { q: "What happens when I hit my API limit?", a: "We'll notify you at 80% usage. You can upgrade anytime, and we never cut you off mid-request." },
  { q: "Do you offer refunds?", a: "Yes, 30-day money-back guarantee on all plans." },
  { q: "Can I switch plans later?", a: "Absolutely. Upgrade or downgrade anytime. Changes take effect on your next billing cycle." },
  { q: "Is my data safe?", a: "We use AES-256 encryption at rest and TLS 1.3 in transit. SOC2 Type II certified." },
];

export default function SaaSPro() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">YourSaaS</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm">✨ Now with AI-powered automation</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Ship faster with<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">modern infrastructure</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">The all-in-one platform for teams that ship. Build, deploy, and scale without the overhead.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition text-lg">Start Free Trial</button>
            <button className="px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 font-semibold transition text-lg">Watch Demo</button>
          </div>
          <p className="text-sm text-gray-600 mt-4">No credit card required · Free for 14 days</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need</h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Powerful features that help your team move faster without sacrificing quality.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-center mb-8">No hidden fees. No surprises. Cancel anytime.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full transition-colors ${annual ? "bg-indigo-600" : "bg-gray-700"} relative`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${annual ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm ${annual ? "text-white" : "text-gray-500"}`}>Annual <span className="text-indigo-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className={`p-8 rounded-2xl ${t.popular ? "bg-gradient-to-b from-indigo-900/30 to-gray-900 border-indigo-500/30 ring-1 ring-indigo-500/20 scale-105" : "bg-gray-900/50 border-gray-800"} border relative`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-full text-xs font-medium">Most Popular</div>}
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{t.desc}</p>
                <div className="mb-6"><span className="text-4xl font-bold">${annual ? t.price.annual : t.price.monthly}</span><span className="text-gray-500">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-indigo-400">✓</span>{f}</li>))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${t.popular ? "bg-indigo-600 hover:bg-indigo-500" : "bg-gray-800 hover:bg-gray-700"}`}>{t.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Loved by developers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}</div>
              <p className="text-gray-300 mb-4">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600/30 flex items-center justify-center text-sm font-medium text-indigo-300">{t.avatar}</div>
                <div><p className="font-medium text-sm">{t.name}</p><p className="text-xs text-gray-500">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-800 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-900/50 transition">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-gray-500 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-gray-400">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ship faster?</h2>
        <p className="text-gray-400 mb-8">Join 2,000+ teams already using YourSaaS.</p>
        <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition text-lg">Start Your Free Trial</button>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2026 YourSaaS. All rights reserved.</span>
          <div className="flex gap-6"><a href="#" className="hover:text-white transition">Privacy</a><a href="#" className="hover:text-white transition">Terms</a><a href="#" className="hover:text-white transition">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
