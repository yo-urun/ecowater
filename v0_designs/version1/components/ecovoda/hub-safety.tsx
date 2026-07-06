"use client"

import { useState } from "react"

const toxins = [
  {
    name: "PFAS",
    fullName: "Per- & Polyfluoroalkyl Substances",
    risk: "Linked to cancer, thyroid disruption, immune suppression",
    level: "Found in 45% of US tap water",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </svg>
    ),
  },
  {
    name: "Microplastics",
    fullName: "Nanoscale Polymer Particles",
    risk: "Penetrate cell membranes, accumulate in organs and bloodstream",
    level: "Present in 93% of bottled water",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <path d="M12 9l4-3M12 15l-4 3" />
      </svg>
    ),
  },
  {
    name: "Heavy Metals",
    fullName: "Lead, Arsenic, Mercury, Cadmium",
    risk: "Neurotoxic, carcinogenic — no safe exposure level exists",
    level: "In 6M+ US water lines pre-1986",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66 4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66 4.24-4.24" />
      </svg>
    ),
  },
]

const comparisonRows = [
  { feature: "PFAS Removal", tap: false, bottled: "partial", ecovoda: true },
  { feature: "Microplastics", tap: false, bottled: false, ecovoda: true },
  { feature: "Heavy Metals", tap: false, bottled: "partial", ecovoda: true },
  { feature: "Chlorine & DBPs", tap: false, bottled: "partial", ecovoda: true },
  { feature: "Bacteria & Viruses", tap: "partial", bottled: "partial", ecovoda: true },
  { feature: "TDS Control", tap: false, bottled: false, ecovoda: true },
  { feature: "pH Optimization", tap: false, bottled: false, ecovoda: true },
  { feature: "Zero Plastic Waste", tap: true, bottled: false, ecovoda: true },
]

const certifications = [
  { label: "NSF/ANSI 58", sub: "RO Certified" },
  { label: "ISO 13485", sub: "Medical Device" },
  { label: "WQA Gold", sub: "Quality Assurance" },
  { label: "CE Mark", sub: "EU Compliant" },
  { label: "FDA Listed", sub: "Registered" },
]

type ComparisonValue = boolean | "partial"

function CellIcon({ value }: { value: ComparisonValue }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-nature-green/15">
        <svg className="w-3.5 h-3.5 text-nature-green" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    )
  if (value === "partial")
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100">
        <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path d="M5 12h14" />
        </svg>
      </span>
    )
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
      <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
}

export function HubSafety() {
  const [activeToxin, setActiveToxin] = useState(0)

  return (
    <section id="safety" className="bg-medical-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-pure-blue tracking-[0.15em] uppercase">Hub 01</span>
              <span className="w-8 h-px bg-pure-blue/30" />
              <span className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">The Protector</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-text-deep text-balance leading-tight">
              What&apos;s Really <br />
              <em className="italic text-pure-blue">In Your Water</em>
            </h2>
          </div>
          <div className="hidden lg:block ml-auto max-w-xs text-right">
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              Independent lab analysis reveals contaminants your utility provider is not required to disclose. Relief begins with knowledge.
            </p>
          </div>
        </div>

        {/* Hidden Toxins Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {toxins.map((toxin, i) => (
            <button
              key={toxin.name}
              onClick={() => setActiveToxin(i)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeToxin === i
                  ? "border-pure-blue bg-primary/5 shadow-md shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className={`mb-4 ${activeToxin === i ? "text-pure-blue" : "text-text-muted"}`}>
                {toxin.icon}
              </div>
              <div className="font-sans font-semibold text-xs tracking-[0.1em] uppercase text-text-mid mb-1">
                {toxin.name}
              </div>
              <div className="font-serif text-lg font-light text-text-deep mb-3 leading-snug">
                {toxin.fullName}
              </div>
              {activeToxin === i && (
                <div className="border-t border-border pt-3 mt-3 space-y-2">
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{toxin.risk}</p>
                  <div className="inline-block font-mono text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded">
                    {toxin.level}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-border overflow-hidden mb-12 shadow-sm">
          <div className="grid grid-cols-4 bg-text-deep text-primary-foreground">
            <div className="p-4 lg:p-5 font-mono text-xs tracking-widest uppercase text-white/50">Feature</div>
            <div className="p-4 lg:p-5 text-center font-mono text-xs tracking-widest uppercase text-white/60">Tap Water</div>
            <div className="p-4 lg:p-5 text-center font-mono text-xs tracking-widest uppercase text-white/60">Bottled</div>
            <div className="p-4 lg:p-5 text-center font-mono text-xs tracking-[0.1em] uppercase text-pure-blue font-semibold">EcovodaLife</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-medical-white"}`}
            >
              <div className="p-4 lg:p-5 font-sans text-sm text-text-deep">{row.feature}</div>
              <div className="p-4 lg:p-5 flex justify-center items-center">
                <CellIcon value={row.tap as ComparisonValue} />
              </div>
              <div className="p-4 lg:p-5 flex justify-center items-center">
                <CellIcon value={row.bottled as ComparisonValue} />
              </div>
              <div className="p-4 lg:p-5 flex justify-center items-center">
                <CellIcon value={row.ecovoda as ComparisonValue} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar — Certifications */}
        <div className="rounded-2xl bg-gradient-to-r from-ocean-deep to-ocean-mid p-6 lg:p-8">
          <p className="font-mono text-xs text-white/50 tracking-[0.15em] uppercase mb-6">
            Certification & Compliance
          </p>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/15"
              >
                <svg className="w-4 h-4 text-sky-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <div className="font-sans font-semibold text-xs text-white">{cert.label}</div>
                  <div className="font-mono text-[10px] text-white/40 tracking-wider">{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
