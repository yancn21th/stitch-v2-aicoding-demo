# Design System Document: Pharmaceutical AI CSR Reporting

## 1. Overview & Creative North Star
**The Creative North Star: "The Clinical Curator"**

This design system moves beyond the "SaaS template" aesthetic to create a high-end, editorial experience tailored for the pharmaceutical and corporate sustainability sectors. It balances the rigorous authority of medical science with the fluid innovation of Artificial Intelligence.

Instead of a rigid grid of boxes, "The Clinical Curator" uses **intentional asymmetry** and **tonal depth** to guide the user’s eye. We treat the interface as a series of premium, layered surfaces—mimicking the feel of high-grade vellum or frosted glass. The goal is a digital environment that feels breathable, authoritative, and deeply intentional, ensuring complex CSR data is presented with the clarity of a prestige medical journal and the technical sophistication of modern AI.

---

## 2. Colors & Surface Philosophy

The palette is rooted in trust-inspiring blues (`primary`), medical greens (`tertiary`), and intellectual purples (`secondary`).

### The "No-Line" Rule
To achieve a signature high-end look, **1px solid borders are prohibited for sectioning.** Traditional lines create visual "noise" that interrupts the flow of data. Boundaries must be defined exclusively through:
- **Background Color Shifts:** Placing a `surface-container-low` section against a `surface` background.
- **Tonal Transitions:** Using subtle shifts between `surface-container` tiers to define functional zones.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. Use the `surface-container` tokens to create a "nested" depth:
- **Level 0 (Base):** `surface` (#f8f9ff) for the primary application background.
- **Level 1 (Sections):** `surface-container-low` (#eff4ff) for large structural areas or sidebars.
- **Level 2 (Interaction):** `surface-container` (#e5eeff) for secondary modules.
- **Level 3 (Focus):** `surface-container-highest` (#d3e4fe) for active high-priority cards or modals.

### The Glass & Gradient Rule
To move beyond "flat" design, use **Glassmorphism** for floating elements (e.g., AI suggestion popovers). Apply semi-transparent surface colors with a `backdrop-blur` (12px–20px). Main CTAs should utilize a **Signature Texture**: a subtle linear gradient from `primary` (#0058be) to `primary_container` (#2170e4) at a 135° angle to add "soul" and dimension.

---

## 3. Typography: The Editorial Scale

We utilize two distinct typefaces to balance innovation with legibility: **Manrope** for high-impact headlines (Modern/Tech) and **Inter** for data-heavy body text (Professional/Clean).

* **Display & Headlines (Manrope):** Use `display-lg` to `headline-sm` for hero statements and report titles. Use high-contrast sizing to create an editorial feel.
* **Titles & Body (Inter):** Use `title-lg` for card headers and `body-md` for standard reporting text.
* **The "Intellectual Weight":** For CSR reports, typography is our primary tool for authority. Use `body-lg` with generous line-height (1.6) for long-form sustainability narratives to ensure readability.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are often too "heavy" for a pharmaceutical context. We use **Ambient Softness**.

* **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#eff4ff) section. The subtle difference in hex value creates a "soft lift" that feels natural and integrated.
* **Ambient Shadows:** When an element must float (like a modal), use a highly diffused shadow: `box-shadow: 0 20px 40px rgba(11, 28, 48, 0.05)`. The shadow color must be a tinted version of `on-surface`—never pure black.
* **The Ghost Border Fallback:** If a border is required for accessibility (e.g., input fields), use a **Ghost Border**: `outline-variant` (#c2c6d6) at 20% opacity. 100% opaque borders are forbidden.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `full` roundedness, white text. No shadow.
- **Secondary:** `surface_container_high` background with `on_primary_fixed_variant` text.
- **Tertiary:** Transparent background with `primary` text; underline appears only on hover.

### Input Fields
- **Styling:** Use `surface_container_lowest` for the field background.
- **States:** On focus, transition the background to `surface_container` and apply a 1px "Ghost Border" using `primary` at 30% opacity.
- **Labels:** Always use `label-md` in `on_surface_variant`.

### Cards & Lists
- **Forbid Dividers:** Do not use `
` or border-bottom lines.

- **Separation:** Use the Spacing Scale (e.g., `8` or `2.75rem`) to separate list items, or alternating background shifts between `surface-container-low` and `surface-container-lowest`.

### Chips (AI Attributes)
- **Selection Chips:** Use `secondary_container` with `on_secondary_container` text. Use `full` roundedness to contrast with the more structured report layouts.

### Tooltips & AI Insights
- **The "Insight" Glass:** Use a backdrop-blur of 16px with a background of `surface_container_low` at 80% opacity. This signals "AI-generated content" without breaking the medical aesthetic.

---

## 6. Do’s and Don’ts

### Do:
* **Use Asymmetry:** Place a large `display-md` headline on the left with a smaller `body-md` explanatory paragraph offset to the right.
* **Embrace White Space:** Use the `16` (5.5rem) and `20` (7rem) spacing tokens between major report sections.
* **Contextual Coloring:** Use `tertiary` (Medical Green) specifically for positive CSR metrics (e.g., carbon reduction) and `primary` (Trust Blue) for corporate data.

### Don't:
* **No "Hard" Containers:** Avoid dark, heavy borders or solid black text (`#000000`). Always use the `on-surface` palette.
* **No Standard Grids:** Avoid the "3-column card row" default. Try overlapping a card across two background color zones to create depth.
* **No Default Shadows:** Never use `0px 2px 4px rgba(0,0,0,0.5)`. It feels dated and "un-designed."

---

## 7. Design Tokens Summary

| Category | Token | Value |
| :--- | :--- | :--- |
| **Primary Action** | `primary` | #0058be |
| **Sustainability** | `tertiary` | #006947 |
| **AI/Innovation** | `secondary` | #6b38d4 |
| **Background** | `surface` | #f8f9ff |
| **Soft Corner** | `md` | 0.375rem |
| **Large Corner** | `xl` | 0.75rem |
| **Tight Space** | `2` | 0.7rem |
| **Section Space** | `12` | 4rem |