const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Deployment",
    description:
      "Ship from commit to production in under 60 seconds. Zero-downtime deploys with instant rollback — so your team stays confident and your users stay happy.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II compliant with end-to-end encryption, role-based access control, and automated vulnerability scanning built into every pipeline.",
  },
  {
    icon: "📊",
    title: "Actionable Observability",
    description:
      "Real-time dashboards, distributed tracing, and smart alerts surface the metrics that matter — before your on-call engineer even picks up the phone.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-indigo-700/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="animate-fade-in inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Now in Public Beta — Free to start
          </span>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Build Faster.{" "}
            <span className="gradient-text">Ship Smarter.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-in-up text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animationDelay: "0.1s" }}
          >
            The all-in-one pipeline platform that empowers your team to move
            from idea to production in record time — without the operational
            complexity.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Get Started for Free
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-base sm:text-lg rounded-xl border border-white/10 hover:border-white/25 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Explore Features
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <p
            className="animate-fade-in mt-10 text-slate-500 text-sm"
            style={{ animationDelay: "0.3s" }}
          >
            Trusted by{" "}
            <span className="text-slate-300 font-semibold">2,000+</span>{" "}
            engineering teams worldwide. No credit card required.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-semibold uppercase tracking-widest">
              Everything you need
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              The platform your team{" "}
              <span className="gradient-text">deserves</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Stop stitching together a dozen tools. HIVE brings your entire
              development pipeline under one roof — from code to cloud.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group glass-card rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="mb-4 text-3xl" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4" aria-label="HIVE home">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-white">HIVE</span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed">
                The all-in-one pipeline platform for modern engineering teams.
              </p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {["Features", "Pricing", "Changelog", "Roadmap"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {["Privacy Policy", "Terms of Service", "Security", "Status"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <p>&copy; 2026 HIVE. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {/* GitHub */}
              <a href="#" aria-label="GitHub" className="hover:text-slate-300 transition-colors duration-150">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" aria-label="Twitter / X" className="hover:text-slate-300 transition-colors duration-150">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-300 transition-colors duration-150">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
