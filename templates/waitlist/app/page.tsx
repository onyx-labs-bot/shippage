"use client";
import { useState, useEffect } from "react";

export default function WaitlistTemplate() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(847);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const target = new Date("2026-04-15T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { clearInterval(interval); return; }
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMins(Math.floor((diff / (1000 * 60)) % 60));
      setSecs(Math.floor((diff / 1000) % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: "🚀", title: "Feature One", desc: "A brief description of your first killer feature." },
    { icon: "⚡", title: "Feature Two", desc: "A brief description of your second killer feature." },
    { icon: "🎯", title: "Feature Three", desc: "A brief description of your third killer feature." },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          {/* Logo */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-2xl font-bold mx-auto mb-8">Y</div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
            Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">amazing</span> is coming
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">We&apos;re building the next generation of [product category]. Be the first to know when we launch.</p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto mb-12">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: mins, label: "Minutes" },
              { val: secs, label: "Seconds" },
            ].map((t) => (
              <div key={t.label} className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                <div className="text-3xl font-bold font-mono">{String(t.val).padStart(2, "0")}</div>
                <div className="text-xs text-gray-500 mt-1">{t.label}</div>
              </div>
            ))}
          </div>

          {/* Email Capture */}
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); setCount(c => c + 1); } }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-white placeholder-gray-500" />
              <button type="submit" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-semibold transition whitespace-nowrap">Join Waitlist</button>
            </form>
          ) : (
            <div className="px-6 py-4 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 max-w-md mx-auto mb-4">✅ You&apos;re #{count} on the list!</div>
          )}
          <p className="text-sm text-gray-600">{count} people already waiting · No spam, ever</p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 text-left">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-semibold mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-2xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
          <span>© 2026 [YourProduct]</span>
          <div className="flex gap-4"><a href="#" className="hover:text-white transition">Twitter</a><a href="#" className="hover:text-white transition">Discord</a></div>
        </div>
      </footer>
    </main>
  );
}
