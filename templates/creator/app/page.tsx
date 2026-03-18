"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "The Foundation", lessons: "8 lessons · 45 min" },
  { num: "02", title: "Core Skills", lessons: "12 lessons · 1.5 hrs" },
  { num: "03", title: "Advanced Techniques", lessons: "10 lessons · 2 hrs" },
  { num: "04", title: "Real-World Projects", lessons: "6 projects · 3 hrs" },
  { num: "05", title: "Launch & Scale", lessons: "5 lessons · 1 hr" },
];

const testimonials = [
  { name: "Alex K.", text: "This course paid for itself within the first week. The project-based approach means you actually retain what you learn.", result: "Landed a $95k role" },
  { name: "Priya M.", text: "I've taken dozens of online courses. This is the only one where I finished every module AND applied it immediately.", result: "Built and sold a SaaS" },
  { name: "Jordan T.", text: "The community alone is worth the price. Having direct access to the creator made all the difference.", result: "Grew audience to 10k" },
];

const faqs = [
  { q: "Who is this for?", a: "Anyone who wants to [learn this skill]. No prior experience needed — we start from the basics and build up." },
  { q: "How long do I have access?", a: "Lifetime. Buy once, learn forever. All future updates included." },
  { q: "Is there a money-back guarantee?", a: "Yes. 30 days, no questions asked. If it's not for you, you get a full refund." },
  { q: "Can I learn at my own pace?", a: "Absolutely. All content is pre-recorded. Watch whenever, wherever, as many times as you want." },
];

export default function CreatorTemplate() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-orange-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-400 font-medium mb-4">A course by [Your Name]</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Master [Skill] in<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">30 Days or Less</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">The no-BS course that takes you from complete beginner to confidently building real projects. 41 lessons, 5 modules, lifetime access.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 font-semibold text-lg transition">Enroll Now — $97</button>
            <button className="px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 font-semibold text-lg transition">Watch Free Preview</button>
          </div>
          <p className="text-sm text-gray-600">30-day money-back guarantee · 1,200+ students enrolled</p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Course Modules</h2>
        <div className="space-y-4">
          {modules.map((m) => (
            <div key={m.num} className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-500/30 transition-colors">
              <span className="text-3xl font-bold text-amber-500/30 font-mono">{m.num}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-sm text-gray-500">{m.lessons}</p>
              </div>
              <span className="text-gray-600">▶</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Student Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-amber-400">★</span>)}</div>
                <p className="text-gray-300 mb-4 text-sm">&quot;{t.text}&quot;</p>
                <div className="border-t border-gray-800 pt-3 mt-3">
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-amber-400">{t.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-4xl font-bold shrink-0">YN</div>
          <div>
            <h2 className="text-2xl font-bold mb-2">About Your Instructor</h2>
            <p className="text-gray-400 mb-4">[Your Name] has been [doing this skill] for X years. Previously at [Company], they&apos;ve helped [achievement]. Now they teach others through practical, project-based courses.</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>🎓 10,000+ students</span>
              <span>⭐ 4.9 rating</span>
              <span>📚 5 courses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-gray-800">
        <div className="max-w-lg mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-2">Invest in Yourself</h2>
          <p className="text-gray-400 mb-8">One payment. Lifetime access. All future updates.</p>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-900/50 border border-amber-500/30">
            <div className="text-5xl font-bold mb-1">$97</div>
            <p className="text-gray-500 mb-6">one-time payment</p>
            <ul className="text-left space-y-3 mb-8">
              {["41 video lessons", "5 hands-on projects", "Lifetime access", "Future updates free", "Private community", "Certificate of completion", "30-day money-back guarantee"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm"><span className="text-amber-400">✓</span>{f}</li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 font-semibold text-lg transition">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-400 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">© 2026 [Your Name]. All rights reserved.</div>
      </footer>
    </main>
  );
}
