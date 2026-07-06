"use client"

import { useState } from "react"

const stages = [
  {
    id: 1,
    name: "Sediment Pre-Filter",
    short: "PP Sediment",
    type: "5 µm Polypropylene",
    removes: "Rust, sand, silt, sediment particles",
    color: "sky-blue",
    borderColor: "border-sky-blue/60",
    bgColor: "bg-sky-blue/10",
    activeColor: "bg-sky-blue",
  },
  {
    id: 2,
    name: "Carbon Block",
    short: "GAC Carbon",
    type: "Granular Activated Carbon",
    removes: "Chlorine, chloramines, VOCs, taste & odor",
    color: "text-ocean-mid",
    borderColor: "border-ocean-mid/60",
    bgColor: "bg-ocean-mid/10",
    activeColor: "bg-ocean-mid",
  },
  {
    id: 3,
    name: "Reverse Osmosis",
    short: "RO Membrane",
    type: "0.0001 µm TFC Membrane",
    removes: "PFAS, heavy metals, nitrates, fluoride, microplastics — up to 99.9%",
    color: "text-pure-blue",
    borderColor: "border-pure-blue/60",
    bgColor: "bg-pure-blue/10",
    activeColor: "bg-pure-blue",
  },
  {
    id: 4,
    name: "Ion Exchange",
    short: "Ion Exchange",
    type: "DI Resin Bed",
    removes: "Dissolved salts, limescale-forming Ca²⁺ and Mg²⁺ ions",
    color: "text-soft-teal",
    borderColor: "border-soft-teal/60",
    bgColor: "bg-soft-teal/10",
    activeColor: "bg-soft-teal",
  },
  {
    id: 5,
    name: "UV Sterilization",
    short: "UV-C 254nm",
    type: "254nm UV-C Chamber",
    removes: "Bacteria, viruses, cysts — 99.9999% pathogen elimination",
    color: "text-nature-green",
    borderColor: "border-nature-green/60",
    bgColor: "bg-nature-green/10",
    activeColor: "bg-nature-green",
  },
  {
    id: 6,
    name: "Mineral Enhancer",
    short: "Remineralize",
    type: "Calcium & Magnesium Cartridge",
    removes: "Restores essential minerals, adjusts pH to 7.2–7.8",
    color: "text-warm-white",
    borderColor: "border-white/20",
    bgColor: "bg-white/5",
    activeColor: "bg-white/30",
  },
  {
    id: 7,
    name: "Smart IoT Module",
    short: "IoT Sensors",
    type: "TDS + pH + Flow + Filter Life",
    removes: "Real-time monitoring via app — alerts, auto-shutoff, filter reminders",
    color: "text-pure-blue",
    borderColor: "border-pure-blue/40",
    bgColor: "bg-pure-blue/5",
    activeColor: "bg-pure-blue",
  },
]

export function HubTechnology() {
  const [active, setActive] = useState(2) // default: RO membrane

  const activeStage = stages[active]

  return (
    <section
      id="technology"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.07 240) 50%, oklch(0.14 0.05 240) 100%)",
      }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.52 0.19 240 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.52 0.19 240 / 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-sky-blue tracking-[0.15em] uppercase">Hub 04</span>
            <span className="w-8 h-px bg-sky-blue/40" />
            <span className="font-mono text-xs text-white/40 tracking-[0.15em] uppercase">The Solver</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-tight text-balance">
            Seven Stages of{" "}
            <em className="italic text-sky-blue">Scientific Purity</em>
          </h2>
          <p className="font-sans text-sm text-white/50 leading-relaxed mt-4 max-w-xl">
            Each filtration stage is independently validated in ISO-accredited laboratories. Together they form a system that outperforms hospital-grade water purification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Blueprint Schematic */}
          <div className="relative">
            {/* Schematic housing */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">System Schematic — EV-Pro 7</span>
                <span className="font-mono text-[10px] text-pure-blue bg-pure-blue/10 px-2 py-0.5 rounded">Rev. 4.1</span>
              </div>

              {/* Vertical flow diagram */}
              <div className="relative flex flex-col items-center gap-0">
                {/* Inlet label */}
                <div className="self-start flex items-center gap-2 mb-2">
                  <div className="w-6 h-px bg-sky-blue/50" />
                  <span className="font-mono text-[10px] text-sky-blue/70 tracking-widest">INLET — TAP WATER</span>
                </div>

                {stages.map((stage, i) => (
                  <div key={stage.id} className="w-full flex flex-col items-center">
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full flex items-center gap-4 rounded-xl p-3 transition-all duration-200 border ${
                        active === i
                          ? `${stage.borderColor} ${stage.bgColor}`
                          : "border-white/5 hover:border-white/15"
                      }`}
                    >
                      {/* Stage number */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold transition-colors ${
                          active === i ? `${stage.activeColor} text-ocean-deep` : "bg-white/10 text-white/40"
                        }`}
                      >
                        {stage.id}
                      </div>
                      {/* Labels */}
                      <div className="flex-1 text-left">
                        <div className={`font-sans text-sm font-medium ${active === i ? "text-white" : "text-white/60"}`}>
                          {stage.short}
                        </div>
                        <div className="font-mono text-[10px] text-white/30 tracking-wider">{stage.type}</div>
                      </div>
                      {/* Active indicator */}
                      {active === i && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </button>
                    {i < stages.length - 1 && (
                      <div className={`w-px h-4 ${active === i || active === i + 1 ? "bg-pure-blue/50" : "bg-white/10"} transition-colors`} />
                    )}
                  </div>
                ))}

                {/* Outlet label */}
                <div className="self-end flex items-center gap-2 mt-2">
                  <span className="font-mono text-[10px] text-nature-green/70 tracking-widest">OUTLET — PURE WATER</span>
                  <div className="w-6 h-px bg-nature-green/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stage Detail Panel */}
          <div className="flex flex-col gap-6">

            {/* Active stage card */}
            <div className={`rounded-3xl border ${activeStage.borderColor} ${activeStage.bgColor} p-6 lg:p-8 transition-all duration-300`}>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="font-mono text-xs text-white/40 tracking-widest uppercase mb-1">
                    Stage {activeStage.id} of 7
                  </div>
                  <h3 className="font-serif text-2xl font-light text-white">{activeStage.name}</h3>
                  <div className="font-mono text-xs text-white/50 mt-1">{activeStage.type}</div>
                </div>
                <div className={`px-3 py-1.5 rounded-full border ${activeStage.borderColor} font-mono text-xs text-white/60`}>
                  Active
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-2">Removes / Function</div>
                <p className="font-sans text-sm text-white/70 leading-relaxed">{activeStage.removes}</p>
              </div>
            </div>

            {/* IoT Smart Sensor Panel */}
            <div className="rounded-3xl border border-pure-blue/20 bg-pure-blue/5 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-pure-blue/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-pure-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="font-sans font-semibold text-sm text-white">Smart IoT Monitoring</div>
                  <div className="font-mono text-[10px] text-white/40 tracking-wider">Real-time sensor array</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-nature-green animate-pulse" />
                  <span className="font-mono text-[10px] text-nature-green">Live</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "TDS", value: "12 ppm", status: "optimal" },
                  { label: "pH", value: "7.4", status: "optimal" },
                  { label: "Flow Rate", value: "0.5 L/min", status: "normal" },
                  { label: "Filter Life", value: "87%", status: "good" },
                ].map((reading) => (
                  <div key={reading.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase">{reading.label}</div>
                    <div className="font-sans font-bold text-lg text-white mt-0.5">{reading.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-nature-green" />
                      <span className="font-mono text-[10px] text-nature-green/70 capitalize">{reading.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
