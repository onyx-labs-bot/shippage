"use client";

const services = [
  { title: "Web Development", desc: "Custom web applications built with modern frameworks. From MVPs to enterprise platforms.", icon: "🌐" },
  { title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android.", icon: "📱" },
  { title: "UI/UX Design", desc: "User-centered design that converts. Research, wireframes, prototypes, and design systems.", icon: "🎨" },
  { title: "Cloud & DevOps", desc: "Infrastructure automation, CI/CD pipelines, and cloud architecture.", icon: "☁️" },
];

const projects = [
  { title: "FinTech Dashboard", client: "PayFlow", desc: "Real-time trading dashboard processing 1M+ transactions daily", tags: ["React", "Node.js", "PostgreSQL"], color: "from-blue-600 to-cyan-600" },
  { title: "Health Platform", client: "MediConnect", desc: "Telemedicine platform connecting 50k+ patients with providers", tags: ["Next.js", "AWS", "HIPAA"], color: "from-emerald-600 to-teal-600" },
  { title: "E-Commerce Rebuild", client: "StyleHaus", desc: "Complete platform rebuild resulting in 3x conversion rate", tags: ["Shopify", "React", "Tailwind"], color: "from-purple-600 to-pink-600" },
  { title: "AI Analytics Tool", client: "DataSense", desc: "ML-powered analytics platform with natural language queries", tags: ["Python", "OpenAI", "React"], color: "from-orange-600 to-red-600" },
];

const stats = [
  { num: "150+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "12", label: "Team Members" },
  { num: "5y", label: "In Business" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your business, users, and goals. Deep-dive workshops and stakeholder interviews." },
  { step: "02", title: "Strategy", desc: "Technical architecture, project roadmap, and timeline. You know exactly what you're getting." },
  { step: "03", title: "Build", desc: "Agile sprints with weekly demos. You see progress every week, not just at the end." },
  { step: "04", title: "Launch & Scale", desc: "Deployment, monitoring, and ongoing support. We don't disappear after launch." },
];

export default function AgencyTemplate() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">[Agency]</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">Let&apos;s Talk</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            We build digital<br />products that<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">matter.</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="text-xl text-gray-400 max-w-lg">A design and development studio for startups and scale-ups who need to ship fast without cutting corners.</p>
            <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition text-lg">Start a Project →</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold mb-1">{s.num}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-16">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-800 overflow-hidden group hover:border-gray-600 transition-colors cursor-pointer">
              <div className={`h-48 bg-gradient-to-br ${p.color} opacity-80 group-hover:opacity-100 transition flex items-end p-6`}>
                <span className="text-xs text-white/60">{p.client}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">{t}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-16">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step}>
              <span className="text-5xl font-bold text-gray-800 block mb-4">{p.step}</span>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-gray-400 mb-8">Let&apos;s build something great together.</p>
          <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition text-lg">Get in Touch →</button>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2026 [Agency]. All rights reserved.</span>
          <div className="flex gap-6"><a href="#" className="hover:text-white transition">Twitter</a><a href="#" className="hover:text-white transition">LinkedIn</a><a href="#" className="hover:text-white transition">Dribbble</a></div>
        </div>
      </footer>
    </main>
  );
}
