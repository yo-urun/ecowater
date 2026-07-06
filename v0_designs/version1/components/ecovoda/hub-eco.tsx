"use client"

import { useEffect, useRef, useState } from "react"

const BOTTLES_PER_YEAR = 1460 // average family of 4
const ECO_HABITS = [
  {
    label: "Plastic-Free Kitchen",
    desc: "Replace single-use plastic with a permanent, beautiful countertop system.",
    img: "/placeholder.svg?height=260&width=340",
  },
  {
    label: "Refillable Everywhere",
    desc: "Premium glass and stainless bottles, filled from pure filtered water at home.",
    img: "/placeholder.svg?height=260&width=340",
  },
  {
    label: "Zero Water Waste",
    desc: "Our permeate pump reduces waste water to below 1:1 ratio — far below industry standard.",
    img: "/placeholder.svg?height=260&width=340",
  },
  {
    label: "Sustainable Materials",
    desc: "Food-grade components, recyclable housings, and a filter return program with zero landfill.",
    img: "/placeholder.svg?height=260&width=340",
  },
]

const impactStats = [
  { value: "156", unit: "kg", label: "Plastic eliminated per household annually" },
  { value: "1,460", unit: "btl", label: "Bottles saved per family of 4 per year" },
  { value: "97%", unit: "", label: "Reduction in single-use plastic footprint" },
]

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          let start = 0
          const duration = 2200
          const step = 16
          const increment = target / (duration / step)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, step)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-sans font-bold text-5xl lg:text-6xl text-nature-green tabular-nums">
      {count.toLocaleString()}
    </div>
  )
}

export function HubEco() {
  return (
    <section id="eco" className="bg-medical-white py-24 lg:py-32 relative overflow-hidden">
      {/* Nature texture accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.4 0.15 158) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-nature-green tracking-[0.15em] uppercase">Hub 03</span>
              <span className="w-8 h-px bg-nature-green/40" />
              <span className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">The Sustainer</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-text-deep leading-tight text-balance">
              Every Drop Is a Vote for a{" "}
              <em className="italic text-nature-green">Plastic-Free Future</em>
            </h2>
          </div>
          <p className="font-sans text-sm text-text-muted leading-relaxed max-w-sm lg:text-right">
            The average household goes through 1,460 plastic bottles a year. Every EcovodaLife system eliminates them permanently — without compromise on quality.
          </p>
        </div>

        {/* Giant counter */}
        <div className="rounded-3xl bg-gradient-to-br from-nature-light to-pale-teal border border-nature-green/20 p-8 lg:p-12 mb-10 text-center">
          <p className="font-mono text-xs text-nature-green tracking-[0.2em] uppercase mb-4">Your Household Impact — Year One</p>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-baseline gap-3">
              <AnimatedCounter target={BOTTLES_PER_YEAR} />
              <span className="font-sans text-xl font-light text-nature-green/70">Plastic Bottles</span>
            </div>
            <span className="font-sans text-lg text-text-muted font-light">saved from landfills and oceans</span>
          </div>
          <div className="mt-8 w-full bg-nature-green/10 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-nature-green transition-all duration-[2s]"
              style={{ width: "97%" }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[10px] text-text-muted">0</span>
            <span className="font-mono text-[10px] text-nature-green">97% reduction in plastic usage</span>
          </div>
        </div>

        {/* Impact stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {impactStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-sans font-bold text-3xl text-text-deep">{s.value}</span>
                {s.unit && <span className="font-mono text-sm text-nature-green">{s.unit}</span>}
              </div>
              <p className="font-sans text-sm text-text-muted leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Sustainable habits gallery */}
        <div>
          <h3 className="font-serif text-2xl font-light text-text-deep mb-6">
            The Zero-Waste Home
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECO_HABITS.map((habit) => (
              <div
                key={habit.label}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-nature-green/40 transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={habit.img}
                    alt={habit.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-nature-green" />
                    <span className="font-sans font-semibold text-sm text-text-deep">{habit.label}</span>
                  </div>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{habit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
