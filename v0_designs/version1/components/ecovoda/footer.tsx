const hubs = [
  { label: "Safety", sub: "The Protector", href: "#safety" },
  { label: "Wellness", sub: "The Optimizer", href: "#wellness" },
  { label: "Eco", sub: "The Sustainer", href: "#eco" },
  { label: "Technology", sub: "The Solver", href: "#technology" },
  { label: "ROI", sub: "The Pragmatist", href: "#practicality" },
]

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Lab Reports", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-white">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-pure-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z" />
                </svg>
              </div>
              <span className="font-sans font-semibold text-sm tracking-[0.08em] uppercase">
                Ecovoda<span className="text-sky-blue">Life</span>
              </span>
            </div>
            <p className="font-serif text-lg font-light italic text-white/70 leading-relaxed mb-6">
              &ldquo;Medical-Grade Trust meets Nature&apos;s Purity.&rdquo;
            </p>
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-xs">
              Premium water filtration engineered to protect your family, optimize your biology, and respect the planet — without compromise.
            </p>

            {/* Certifications row */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["NSF/ANSI 58", "ISO 13485", "WQA Gold"].map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[10px] tracking-widest uppercase text-sky-blue/70 border border-sky-blue/20 rounded px-2 py-0.5"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Knowledge hubs */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">
              Knowledge Hubs
            </h4>
            <nav>
              <ul className="space-y-4">
                {hubs.map((hub) => (
                  <li key={hub.label}>
                    <a
                      href={hub.href}
                      className="group flex items-center gap-3 hover:gap-4 transition-all duration-200"
                    >
                      <div className="w-5 h-px bg-white/20 group-hover:bg-pure-blue transition-colors flex-shrink-0" />
                      <div>
                        <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors block">
                          {hub.label}
                        </span>
                        <span className="font-mono text-[10px] text-white/30 tracking-wider">{hub.sub}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact / CTA */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">
              Get Started
            </h4>
            <div className="space-y-4">
              <a
                href="#safety"
                className="flex items-center gap-3 group"
              >
                <svg className="w-4 h-4 text-sky-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">Free Water Quality Analysis</span>
              </a>
              <a href="#practicality" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-sky-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 22V12M12 12l-4 4M12 12l4 4M3 8l9-6 9 6" />
                </svg>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">Calculate Your ROI</span>
              </a>
              <a href="#technology" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-sky-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">View Lab Certifications</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="font-sans text-xs text-white/40 mb-3">Water quality insights, delivered monthly.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 font-sans text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-pure-blue/50 transition-colors"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-primary hover:bg-sky-blue rounded-full px-4 py-2.5 font-sans text-xs text-white font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/25 tracking-wider">
            © {new Date().getFullYear()} EcovodaLife. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-4">
              {legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-mono text-[10px] text-white/30 hover:text-white/60 tracking-wider transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
