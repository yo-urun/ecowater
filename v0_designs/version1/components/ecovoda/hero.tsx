"use client"

import { useEffect, useRef } from "react"

const stats = [
  { value: "99.9%", label: "Contaminants Removed" },
  { value: "7-Stage", label: "Filtration System" },
  { value: "ISO 13485", label: "Medical Certified" },
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.fill()
      })
      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Deep ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.08 240) 0%, oklch(0.32 0.12 230) 35%, oklch(0.42 0.15 210) 60%, oklch(0.48 0.14 195) 80%, oklch(0.56 0.12 170) 100%)",
        }}
      />

      {/* Animated molecular canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Lab grid overlay — precision aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Nature photo overlay — right side */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/placeholder.svg?height=900&width=700')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to right, transparent, oklch(1 0 0 / 0.6) 40%, oklch(1 0 0) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Hero body */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-16">
            <div className="max-w-3xl">
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-soft-teal animate-pulse" />
                <span className="font-mono text-xs text-white/80 tracking-[0.15em] uppercase">
                  ISO 13485 · NSF/ANSI 58 · WQA Gold Seal
                </span>
              </div>

              {/* Main headline — serif for aspiration */}
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-balance text-white mb-6">
                Medical-Grade Trust
                <br />
                <em className="italic text-soft-teal">meets</em>{" "}
                Nature&apos;s Purity.
              </h1>

              {/* Subheadline — sans for clarity */}
              <p className="font-sans font-light text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
                Premium water filtration that protects your family, optimizes
                your health, and saves the planet — one drop at a time.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#safety"
                  className="group inline-flex items-center gap-2.5 font-sans font-semibold text-sm tracking-[0.08em] uppercase px-7 py-3.5 rounded-full bg-primary-foreground text-ocean-deep hover:bg-soft-teal hover:text-white transition-all duration-300"
                >
                  Analyze Your Water
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#technology"
                  className="inline-flex items-center gap-2.5 font-sans font-medium text-sm tracking-[0.08em] uppercase px-7 py-3.5 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition-all duration-300"
                >
                  See the Technology
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 sm:divide-x sm:divide-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="sm:px-10 first:pl-0 last:pr-0">
                <div className="font-sans font-semibold text-2xl text-white">{stat.value}</div>
                <div className="font-mono text-xs text-white/50 tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
            <div className="sm:px-10 ml-auto flex items-center gap-2">
              <svg className="w-4 h-4 text-nature-green" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
                3rd-Party Lab Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
