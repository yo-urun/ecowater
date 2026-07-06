"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Safety", href: "#safety" },
  { label: "Wellness", href: "#wellness" },
  { label: "Eco", href: "#eco" },
  { label: "Technology", href: "#technology" },
  { label: "ROI", href: "#practicality" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-medical-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-primary-foreground" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z" />
            </svg>
          </div>
          <span className={`font-sans font-semibold text-sm tracking-[0.08em] uppercase transition-colors ${scrolled ? "text-text-deep" : "text-medical-white"}`}>
            Ecovoda<span className="text-primary">Life</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors hover:text-primary ${
                  scrolled ? "text-text-mid" : "text-medical-white/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#safety"
            className="font-sans text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-ocean-mid transition-colors"
          >
            Analyze Your Water
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px transition-all ${scrolled ? "bg-text-deep" : "bg-medical-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px transition-all ${scrolled ? "bg-text-deep" : "bg-medical-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px transition-all ${scrolled ? "bg-text-deep" : "bg-medical-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-medical-white border-t border-border px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm font-medium tracking-widest uppercase text-text-mid hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#safety"
            className="mt-6 block text-center font-sans text-xs font-semibold tracking-[0.1em] uppercase px-5 py-3 rounded-full bg-primary text-primary-foreground"
          >
            Analyze Your Water
          </a>
        </div>
      )}
    </header>
  )
}
