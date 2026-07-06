const wellnessCards = [
  {
    title: "Cellular Hydration",
    quote: "Water is the driving force of all nature.",
    attribution: "— Leonardo da Vinci",
    body: "Optimal mineral balance and low TDS enables water to pass through aquaporin channels at peak efficiency, hydrating at the cellular level — not just the surface.",
    stat: "Up to 3× faster",
    statLabel: "cellular absorption vs. tap",
    bg: "from-pale-teal to-medical-white",
    accent: "soft-teal",
    img: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Cognitive Performance",
    quote: "Even mild dehydration impairs memory, focus, and mood regulation.",
    attribution: "— Journal of Nutrition, 2012",
    body: "Contaminant-free water with balanced pH reduces oxidative stress on neural tissue, supporting sharper thinking and sustained energy throughout your day.",
    stat: "14%",
    statLabel: "cognitive improvement in hydrated subjects",
    bg: "from-sky-blue/10 to-pale-teal",
    accent: "pure-blue",
    img: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Skin & Hair Vitality",
    quote: "Purity is not a standard — it is a baseline.",
    attribution: "— EcovodaLife Research",
    body: "Hard water and heavy metals deposit on skin and scalp, disrupting the microbiome. Filtered water restores pH balance, reduces inflammation, and amplifies your skincare investment.",
    stat: "67%",
    statLabel: "report improved skin clarity within 30 days",
    bg: "from-nature-light to-pale-teal",
    accent: "nature-green",
    img: "/placeholder.svg?height=300&width=400",
  },
]

const biohackPillars = [
  { icon: "⬡", label: "Mineral Balance", value: "Ca²⁺ Mg²⁺ K⁺ Na⁺" },
  { icon: "◎", label: "pH Optimized", value: "7.2 — 7.8 range" },
  { icon: "◈", label: "Low TDS", value: "< 30 ppm output" },
  { icon: "◉", label: "ORP Negative", value: "Antioxidant potential" },
]

export function HubWellness() {
  return (
    <section
      id="wellness"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.03 195) 0%, oklch(0.99 0.005 210) 40%, oklch(0.95 0.04 195) 80%, oklch(0.97 0.025 185) 100%)",
      }}
    >
      {/* Organic blob decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 70% 30%, oklch(0.72 0.11 195 / 0.4), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 70%, oklch(0.58 0.13 158 / 0.35), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-soft-teal tracking-[0.15em] uppercase">Hub 02</span>
            <span className="w-8 h-px bg-soft-teal/50" />
            <span className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">The Optimizer</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-text-deep leading-tight text-balance">
            Water as a{" "}
            <em className="italic text-soft-teal">Performance Tool</em>
          </h2>
          <p className="font-sans text-base text-text-muted leading-relaxed mt-4">
            Biohackers, longevity researchers, and elite athletes all agree: the quality of water you consume is the highest-leverage intervention available at home.
          </p>
        </div>

        {/* Biohack Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {biohackPillars.map((p) => (
            <div key={p.label} className="rounded-2xl border border-soft-teal/30 bg-white/60 backdrop-blur-sm p-5">
              <div className="font-mono text-2xl text-soft-teal mb-3">{p.icon}</div>
              <div className="font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mb-1">{p.label}</div>
              <div className="font-sans font-semibold text-sm text-text-deep">{p.value}</div>
            </div>
          ))}
        </div>

        {/* Wellness Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wellnessCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-3xl overflow-hidden bg-gradient-to-b ${card.bg} border border-white/80 shadow-sm group hover:shadow-lg transition-shadow duration-500`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                {/* Serif quote */}
                <blockquote className="font-serif text-xl font-light italic text-text-mid leading-snug mb-1">
                  &ldquo;{card.quote}&rdquo;
                </blockquote>
                <cite className="font-mono text-[10px] text-text-muted tracking-wider not-italic block mb-4">
                  {card.attribution}
                </cite>

                <h3 className="font-sans font-semibold text-base text-text-deep mb-2">{card.title}</h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed mb-5">{card.body}</p>

                {/* Stat */}
                <div className="flex items-baseline gap-2 pt-4 border-t border-border/50">
                  <span className="font-sans font-bold text-2xl text-pure-blue">{card.stat}</span>
                  <span className="font-mono text-[10px] text-text-muted tracking-wide leading-tight">{card.statLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
