# 🎨 Design System: EcovodaLife

This document defines the visual language of the Ecovoda brand, ensuring a consistent transition from "Medical-Grade Trust" to "Nature's Purity".

## 1. Color Palette (OKLCH)
We use the OKLCH color space for perceptual uniformity and "water-like" purity.

| Variable | Value | Vibe | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.98 0.005 210)` | Pure / Airy | Main page background |
| `--foreground` | `oklch(0.12 0.025 220)` | Deep / Authoritative | Primary text, deep contrast |
| `--primary` | `oklch(0.42 0.12 210)` | Trust / Professional | Primary buttons, brand elements |
| `--accent` | `oklch(0.60 0.13 185)` | Fresh / Vitality | Highlights, CTAs, accents |
| `--ocean-deep` | `oklch(0.22 0.07 220)` | Depth / Seriousness | Footer, dark sections, gradients |
| `--teal-bright`| `oklch(0.60 0.13 185)` | Pure / Modern | Interactive elements |

## 2. Visual Patterns & Effects
To avoid a "generic template" feel, we implement these bespoke elements:

### A. Glassmorphism (Transparency & Purity)
- **Application:** Navigation bars, card overlays, modal backgrounds.
- **Spec:** `backdrop-filter: blur(12px) saturate(180%); background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.3);`
- **Meaning:** Communicates transparency, purity, and modern sophistication.

### B. Water Dynamics (Immersive Experience)
- **Hero Effect:** Animated water ripple rings emanating from the center.
- **Gradients:** Use of `ocean-deep` $\rightarrow$ `primary` linear gradients to create a sense of depth.
- **Meaning:** Direct emotional connection to the element of water.

### C. Typography (The Luxury Balance)
- **Headlines (Serif):** Use a premium Serif font for main brand statements, founder quotes, and "Luxury" accents.
- **Body (Sans-Serif):** Clean, highly readable Sans-serif for technical data, articles, and UI elements.
- **Meaning:** $\text{Serif (Heritage/Luxury)} + \text{Sans (Precision/Tech)} = \text{Medical-Grade Luxury}$.

## 3. Component Library (Core Blocks)
Each page is assembled from these high-conversion blocks:

| Component | Purpose | Key Feature |
| :--- | :--- | :--- |
| `Hero` | First Impression | Animated ripples + Strong Value Prop |
| `TrustBar` | Instant Authority | Logos of NSF, WHO, ISO 9001 |
| `PillarSection` | Deep Education | Split layout: Visual on left, Scientific text on right |
| `ComparisonTable`| Decision Driving | "Standard vs. Medical-Grade" contrast |
| `BenefitGrid` | Value Delivery | Glassmorphic cards with OKLCH accents |
| `CTASection` | Conversion | High-contrast background (`ocean-deep`) + clear action |
