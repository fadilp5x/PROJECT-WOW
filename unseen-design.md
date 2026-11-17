---
version: 2.4.0
name: UNSEEN Intelligence System
description: A high-contrast, editorial resource intelligence design system centered on Soft Ivory, Midnight Black, and Neon Lime Green with tactile Duolingo-inspired components and sculptural 3D visuals.
colors:
  primary: "#CDF22B" # Neon Lime Green (Accent, key CTAs, highlights, active states)
  secondary: "#08090B" # Midnight Black (Dominant text, dark sections, tactile button bases)
  canvas: "#FAF8F3" # Soft Ivory (Dominant warm background canvas)
  pale-lime: "#ECFFB6" # Secondary background tints and soft glows
  electric-lime: "#D6FB00" # Vivid gradient midpoint and high-energy highlights
  deep-teal: "#00545F" # Atmospheric gradient transitions, borders, and depth
  alert-coral: "#FF4B4B" # Critical leak warnings and unread terms badges
  surface-card: "#FFFFFF" # Elevated light card surface
  surface-dark: "#08090B" # Elevated dark card surface
  border-light: "rgba(8, 9, 11, 0.08)"
  border-dark: "rgba(205, 242, 43, 0.25)"
typography:
  display-hero:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 6.2rem)"
    fontWeight: 700
    lineHeight: "0.92"
    letterSpacing: "-0.04em"
  display-h1:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "-0.04em"
  display-h2:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.035em"
  display-h3:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.025em"
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-caps:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "0.12em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  "2xl": "24px"
  "3xl": "32px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  section: "96px to 128px"
components:
  navbar:
    height: "72px"
    backgroundColor: "rgba(250, 248, 243, 0.95)"
    backdropBlur: "16px"
    borderBottom: "1px solid rgba(8, 9, 11, 0.07)"
    activeIndicator: "bg-[#CDF22B]/22 border border-[#CDF22B]/50 with 6px lime dot"
  button-primary:
    backgroundColor: "#CDF22B"
    textColor: "#08090B"
    downShadow: "0 4px 0 #95ba07, 0 10px 24px rgba(205, 242, 43, 0.25)"
    activeState: "translateY(2px), shadow 0 2px 0 #95ba07"
    rounded: "16px or full"
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
  button-dark:
    backgroundColor: "#08090B"
    textColor: "#CDF22B"
    downShadow: "0 4px 0 #000000, 0 10px 24px rgba(8, 9, 11, 0.25)"
    activeState: "translateY(2px), shadow 0 2px 0 #000000"
    rounded: "16px or full"
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#08090B"
    border: "1.5px solid rgba(8, 9, 11, 0.2)"
    downShadow: "0 3px 0 rgba(8, 9, 11, 0.12)"
    activeState: "translateY(2px), shadow 0 1px 0 rgba(8, 9, 11, 0.12)"
    rounded: "16px"
  card-light:
    backgroundColor: "#FFFFFF"
    border: "1px solid rgba(8, 9, 11, 0.08)"
    rounded: "24px to 32px"
    padding: "28px to 40px"
    shadow: "0 3px 0 rgba(8, 9, 11, 0.08)"
  card-dark:
    backgroundColor: "#08090B"
    textColor: "#FAF8F3"
    border: "1px solid rgba(205, 242, 43, 0.25)"
    rounded: "24px to 32px"
    padding: "28px to 40px"
    shadow: "0 4px 0 #000000, 0 14px 28px rgba(8, 9, 11, 0.2)"
---

# UNSEEN — Design System Specification

## 1. Overview & Creative Philosophy
**UNSEEN** is a Resource Intelligence Platform designed to reveal, quantify, and help remediate invisible resource losses:
- Time wasted in public queues and friction points.
- Students losing cognitive hours to unstructured routine drift.
- Unequal contribution across collaborative teams.
- Personal and financial privacy surrendered through uninspected terms.
- Hidden forensic metadata embedded inside photographs.

The visual identity positions the platform at the intersection of:
1. **A prestigious contemporary design studio** (editorial typography, tight tracking, generous whitespace, Soft Ivory canvas).
2. **A funded technology startup** (high-voltage Neon Lime, sculptural 3D ribbons, atmospheric dark sections).
3. **A friendly, tactile digital laboratory** (tactile 3D buttons, bouncy interactive states, clear micro-interactions).

Tagline: **"Make the Invisible Visible."**

---

## 2. Color System

### Primary Brand Palette
* **Soft Ivory (`#FAF8F3`)**: The primary warm canvas. Used as the default background for Home, About, Tools, and Contact pages. Softer and more sophisticated than harsh pure white.
* **Midnight Black (`#08090B`)**: Deep charcoal black used for typography, tactile down-shadows, the global footer, and high-impact dark sections (The Impact page & How It Works).
* **Neon Lime Green (`#CDF22B`)**: High-voltage brand accent used for primary CTAs, active route indicators, glowing 3D spheres, and key metric badges.

### Supporting Palette
* **Pale Lime (`#ECFFB6`)**: Soft ambient glow color, secondary badge tints, and gradient transitions.
* **Electric Lime (`#D6FB00`)**: Midpoint gradient illuminator and hover highlights.
* **Deep Teal (`#00545F`)**: Ambient shadows, category labels, subtle borders, and gradient end-stops.
* **Alert Coral (`#FF4B4B`)**: High-risk privacy tags, queue delays, and idle friction points.

### Gradients
* **Hero Radial Caustic:** `radial-gradient(ellipse 65% 55% at 85% 25%, rgba(205, 242, 43, 0.12) 0%, transparent 60%)`
* **Sphere 3D Shading:** `#FFFFFF` (35%) → `#D6FB00` (25%) → `#CDF22B` (65%) → `#80A500` (90%) → `#00545F` (100%)
* **Sculptural Ribbon Lighting:** `#1A1C20` → `#08090B` → `#021E18` → `rgba(205, 242, 43, 0.3)`

---

## 3. Typography Hierarchy

### Typefaces
* **Display & Headings:** `Space Grotesk` (Geometric sans-serif with tight tracking `-0.035em` to `-0.04em`, heavy weights 700/600).
* **Body & Interface:** `Inter` (Humanist sans-serif with line-height 1.6, weights 400/500/600).
* **Technical & Metrics:** `ui-monospace, monospace` (For timestamps, GPS coordinates, and raw parameters).

### Typographic Rules
* Use oversized editorial headlines with tight leading (`0.92` to `0.95`).
* Emphasize primary message words by nesting inside `<span class="text-lime bg-midnight px-3 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1">...</span>`.
* Keep category pill labels strictly uppercase with tracked letter-spacing (`0.12em`).
* Never invent fabricated numbers; use conceptual ratios and illustrative indicators.

---

## 4. Multi-Page Architecture & Route Specs

The platform is structured into **5 genuinely independent pages** with direct URL support, history back/forward navigation, and client-side SPA routing:

### 1. Home — `/`
* **Hero:** "Make the INVISIBLE VISIBLE.", 3D black ribbon & glowing lime sphere with mouse parallax.
* **The Problem:** 5 conceptual loss cards (Time, Effort, Privacy, Opportunity, Information).
* **Featured Tools Preview:** 5 preview cards with a "View All Tools →" button to `/tools`.
* **How It Works:** 4-step horizontal pipeline (Collect → Analyse → Reveal → Improve).
* **Final CTA:** "Ready to see what others miss?" leading to `/tools`.

### 2. About — `/about`
* **Hero:** "Not everything lost is visible."
* **01 Our Story:** The genesis and systemic blindness behind unmeasured losses.
* **02 Our Mission:** Making hidden resource leaks understandable, measurable, and actionable.
* **03 Our Vision:** A world of transparent measurement and deliberate decision-making.
* **04 What We Believe:** 5 core philosophical pillars.
* **05 Our Approach:** Collect, analyse, reveal, and improve.

### 3. Explore Tools — `/tools` (The Digital Intelligence Laboratory)
* **Hero:** "THE UNSEEN TOOLKIT", "Discover what you've been missing."
* **Category Filter Bar:** Quick navigation pills (`01 Time`, `02 Student`, `03 Group`, `04 Privacy`, `05 Forensics`).
* **5 Bespoke Tool Presentations (Alternating Left/Right Compositions):**
  1. **Time Intelligence:** "Time doesn't disappear. It gets lost." (Queue friction simulator).
  2. **Student Time Tracker:** "Every hour tells a story." (Hourly focus vs. distraction matrix).
  3. **Group Contribution Analyzer:** "See the effort behind every message." (Communication node graph + responsible ethical disclaimer).
  4. **Privacy & Terms Analyzer:** "Before you agree, understand." (Permission audit checklist).
  5. **Image Metadata Intelligence:** "Your images have hidden stories." (EXIF tag parser & GPS sanitizer).

### 4. Our Impact — `/impact`
* **Hero:** "Small invisible losses. Bigger consequences."
* **5 Concrete Impact Pillars:** Time Awareness, Student Productivity, Collaborative Equity, Digital Privacy Awareness, and Information Protection.
* **Core Directive:** "Visibility is the first step towards change." (Strictly without fake testimonials).

### 5. Contact — `/contact`
* **Hero:** "Have something worth revealing?"
* **Interactive Form:** Full Name, Email, Subject Dropdown, and Message with dynamic submit confirmation.
* **Direct Channels:** `hello@unseen.platform`, Buildathon status v2.4.

---

## 5. Navigation Bar Specifications

### Dimensions & Structure
* **Height:** Exactly `72px` (below the 76px maximum limit).
* **Background:** Soft Ivory with `backdrop-blur-md` (`rgba(250, 248, 243, 0.95)`).
* **Border:** `1px solid rgba(0, 0, 0, 0.07)`.
* **Left:** Typographic logo + visibility iris mark.
* **Center:** Nav capsule containing `Home | About | Tools | Impact | Contact`.
* **Right:** `Explore UNSEEN →` button.

### Route-Based Active State Logic
Only the navigation item matching the current browser URL receives the active indicator:
* `/` → `Home`
* `/about` → `About`
* `/tools` → `Tools`
* `/impact` → `Impact`
* `/contact` → `Contact`
* **Styling:** `bg-[#CDF22B]/22 text-[#08090B] font-bold border border-[#CDF22B]/50 shadow-[0_0_14px_rgba(205,242,43,0.25)]` with a live 6px neon lime indicator dot (`#CDF22B`).
* **Tools is never permanently highlighted** on non-tools pages.

### Mobile App Bottom Navigation Bar
Following the mobile navigation system design reference:
* **Visibility:** **Mobile screen only** (`md:hidden`). Completely hidden on PC/desktop screens where the compact top navigation header is used.
* **5 Uniform Outline Icons (Consistent Aesthetic):**
  1. **Home:** Outline house silhouette (`/`)
  2. **About:** UNSEEN Iris outline icon (`/about`)
  3. **Tools:** Laboratory 4-quadrant grid outline icon (`/tools`)
  4. **Impact:** Activity / pulse trendline outline (`/impact`)
  5. **Contact:** Direct message / chat bubble outline (`/contact`)
* **Strict Selection Logic:**
  - **No permanently highlighted icons**: Every icon shares the exact same resting treatment (`text-[#08090B]/50`, `stroke: 2px`).
  - **Dynamic Route Highlighting**: Only the icon corresponding to the active route receives the bold active state (`text-[#08090B]`, `stroke: 2.4px`) and the glowing neon-lime dot indicator (`#CDF22B`).
* **Touch Compliance:**
  - Strict minimum `48x48px` tap target per item.
  - Spring micro-interaction on tap (`active:scale-88`).

---

## 6. Duolingo-Inspired Tactile Components

### 3D Tactile Buttons
* **Primary Lime (`.btn-tactile-lime`):**
  * Normal: `bg-[#CDF22B] text-[#08090B] shadow-[0_4px_0_#95ba07,0_10px_24px_rgba(205,242,43,0.25)] rounded-2xl`
  * Hover: `translateY(-2px) shadow-[0_6px_0_#95ba07,0_14px_28px_rgba(205,242,43,0.35)]`
  * Active: `translateY(2px) shadow-[0_2px_0_#95ba07,0_4px_12px_rgba(205,242,43,0.2)]`
* **Dark Contrast (`.btn-tactile-dark`):**
  * Normal: `bg-[#08090B] text-[#CDF22B] shadow-[0_4px_0_#000000,0_10px_24px_rgba(8,9,11,0.25)] rounded-2xl`
  * Active: `translateY(2px) shadow-[0_2px_0_#000000]`
* **Secondary Outline (`.btn-tactile-secondary`):**
  * Normal: `border-[1.5px] border-midnight/20 text-midnight shadow-[0_3px_0_rgba(8,9,11,0.12)] rounded-2xl`
  * Active: `translateY(2px) shadow-[0_1px_0_rgba(8,9,11,0.12)]`

---

## 7. Do's and Don'ts

### Do's:
- **Do** keep Soft Ivory (`#FAF8F3`) as the predominant light background.
- **Do** use tactile down-shadows (`box-shadow: 0 4px 0 ...`) on buttons for tactile feedback.
- **Do** use route-based active indicators on navigation links.
- **Do** provide generous vertical padding (`py-20` to `py-32`) between sections.
- **Do** include responsible ethical disclaimers on collaboration analysis.
- **Do** support browser back/forward and direct refresh with SPA fallbacks.

### Don'ts:
- **Don't** compress all pages onto a single scrolling page.
- **Don't** leave `Tools` permanently highlighted in the navigation bar.
- **Don't** introduce generic purple or blue gradients.
- **Don't** invent fake statistics, user testimonial quotes, or made-up counter numbers.
- **Don't** make the navigation taller than 76px.
- **Don't** allow mobile navigation to cause horizontal scroll overflow.
