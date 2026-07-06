"use client"

import { useState } from "react"

const symptomSolutions = [
  {
    symptom: "Limescale in kettle & taps",
    cause: "High calcium & magnesium (water hardness)",
    solution: "Ion Exchange Resin",
    stageId: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    symptom: "Chlorine smell & taste",
    cause: "Chlorination disinfection byproducts",
    solution: "Activated Carbon Block",
    stageId: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2c-4 4-6 8-6 11a6 6 0 0 0 12 0c0-3-2-7-6-11z" />
      </svg>
    ),
  },
  {
    symptom: "Cloudy or discoloured water",
    cause: "Sediment, rust, corroded pipes",
    solution: "PP Sediment Pre-Filter",
    stageId: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M2 12h20M12 2l8 10-8 10-8-10 8-10z" />
      </svg>
    ),
  },
  {
    symptom: "Recurring gut issues",
    cause: "Bacteria, cysts, and pathogens",
    solution: "UV-C Sterilization",
    stageId: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    symptom: "Dry skin and brittle hair",
    cause: "Chlorine strips skin and hair moisture",
    solution: "Carbon + Mineral Enhancer",
    stageId: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    symptom: "High TDS reading on meter",
    cause: "Dissolved solids from industrial runoff",
    solution: "RO Membrane (0.0001µm)",
    stageId: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
]

export function HubPracticality() {
  const [bottles, setBottles] = useState(4)
  const [pricePerBottle, setPricePerBottle] = useState(1.5)
  const [activeSymptom, setActiveSymptom] = useState<number | null>(null)

  const annualBottled = bottles * 365 * pricePerBottle
  const annualEcovoda = 399 + 120 // system amortised + filters
  const yearlySaving = Math.max(0, annualBottled - annualEcovoda)
  const fiveYearSaving = yearlySaving * 5

  return (
    <section id="practicality" className="bg-medical-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-text-mid tracking-[0.15em] uppercase">Hub 05</span>
            <span className="w-8 h-px bg-border" />
            <span className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">The Pragmatist</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-text-deep leading-tight text-balance">
            Pure Logic.{" "}
            <em className="italic text-pure-blue">Pure ROI.</em>
          </h2>
          <p className="font-sans text-sm text-text-muted leading-relaxed mt-4 max-w-xl">
            The most sustainable decision is also the most economical. Calculate your exact savings and diagnose your water quality in under a minute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ROI Calculator */}
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 22V12M12 12l-4 4M12 12l4 4M3 8l9-6 9 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-text-deep">ROI Calculator</h3>
                <p className="font-mono text-[10px] text-text-muted tracking-wider">Your home, your numbers</p>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-6 mb-7">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-sans text-sm text-text-mid">Bottles per day</label>
                  <span className="font-sans font-bold text-lg text-text-deep">{bottles}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={bottles}
                  onChange={(e) => setBottles(Number(e.target.value))}
                  className="w-full accent-primary h-1.5 rounded cursor-pointer"
                  aria-label="Bottles per day"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-mono text-[10px] text-text-muted">1</span>
                  <span className="font-mono text-[10px] text-text-muted">12</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-sans text-sm text-text-mid">Price per bottle (€)</label>
                  <span className="font-sans font-bold text-lg text-text-deep">€{pricePerBottle.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={4}
                  step={0.1}
                  value={pricePerBottle}
                  onChange={(e) => setPricePerBottle(Number(e.target.value))}
                  className="w-full accent-primary h-1.5 rounded cursor-pointer"
                  aria-label="Price per bottle"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-mono text-[10px] text-text-muted">€0.50</span>
                  <span className="font-mono text-[10px] text-text-muted">€4.00</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-muted border border-border p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-text-muted">Annual bottled water cost</span>
                <span className="font-sans font-bold text-text-deep">€{annualBottled.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-text-muted">EcovodaLife annual cost</span>
                <span className="font-sans font-bold text-nature-green">€{annualEcovoda.toLocaleString()}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="font-sans font-semibold text-sm text-text-deep">Year 1 savings</span>
                <span className="font-sans font-bold text-2xl text-pure-blue">€{yearlySaving.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
              </div>
              <div className="rounded-xl bg-pure-blue/10 p-3 flex justify-between items-center">
                <span className="font-mono text-xs text-pure-blue tracking-wider uppercase">5-Year Total Savings</span>
                <span className="font-sans font-bold text-xl text-pure-blue">€{fiveYearSaving.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>

          {/* Symptom Checker */}
          <div className="rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-soft-teal/15 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-soft-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-text-deep">Symptom Checker</h3>
                <p className="font-mono text-[10px] text-text-muted tracking-wider">Diagnose → Solve</p>
              </div>
            </div>

            <p className="font-sans text-sm text-text-muted mb-5">Select a symptom you recognise in your home:</p>

            <div className="space-y-2.5">
              {symptomSolutions.map((item, i) => (
                <button
                  key={item.symptom}
                  onClick={() => setActiveSymptom(activeSymptom === i ? null : i)}
                  className={`w-full text-left rounded-2xl border transition-all duration-200 overflow-hidden ${
                    activeSymptom === i
                      ? "border-pure-blue/50 bg-primary/5"
                      : "border-border hover:border-primary/30 bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3 p-3.5">
                    <span className={`flex-shrink-0 ${activeSymptom === i ? "text-pure-blue" : "text-text-muted"}`}>
                      {item.icon}
                    </span>
                    <span className="font-sans text-sm text-text-deep flex-1">{item.symptom}</span>
                    <svg
                      className={`w-4 h-4 text-text-muted transition-transform ${activeSymptom === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {activeSymptom === i && (
                    <div className="px-4 pb-4 border-t border-border/50 pt-3 grid grid-cols-2 gap-3">
                      <div>
                        <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-1">Root Cause</div>
                        <p className="font-sans text-xs text-text-mid leading-relaxed">{item.cause}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-nature-green tracking-widest uppercase mb-1">Solution</div>
                        <div className="inline-flex items-center gap-1.5 bg-nature-green/10 border border-nature-green/20 rounded-lg px-2.5 py-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-nature-green" />
                          <span className="font-sans text-xs font-semibold text-nature-green">{item.solution}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-ocean-deep via-ocean-mid to-pure-blue p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <p className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase mb-3">Ready to transform your water?</p>
            <h3 className="font-serif text-3xl lg:text-4xl font-light text-white text-balance leading-tight">
              Discover which EcovodaLife system is right for your home.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#safety"
              className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full bg-white text-ocean-deep hover:bg-soft-teal hover:text-white transition-all duration-300"
            >
              Analyze Your Water
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#technology"
              className="inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition-all duration-300"
            >
              Compare Systems
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
