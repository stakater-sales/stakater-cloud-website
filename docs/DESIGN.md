# DESIGN.md — Stakater Cloud Design System

## Design Philosophy

**Refined enterprise.** Clean, structured, and authoritative — with orange as the one sharp accent that signals energy and urgency. The design should feel trustworthy enough for a CTO signing off on infrastructure, and clear enough for a developer evaluating tooling.

The aesthetic is intentionally restrained. No gradients in cards. No decorative noise. Precision typography. Generous whitespace. Orange earns its place — it is only used for CTAs, checkmarks, key numbers, and section labels.

---

## Colour System

| Name              | Hex       | Usage                                        |
|-------------------|-----------|----------------------------------------------|
| Primary Orange    | `#FF5623` | CTAs, highlights, checkmarks, section labels |
| Secondary Orange  | `#CC451C` | Hover states on orange elements              |
| Light Orange      | `#FF8C6E` | Text on dark/purple backgrounds              |
| Primary Purple    | `#1A0D32` | Dark sections, primary headings, dark nav    |
| Secondary Purple  | `#0A0614` | Deepest dark sections                        |
| BG Main           | `#F5F5F5` | Default page background                      |
| BG Alt            | `#E8E8E8` | Alternating section / input backgrounds      |
| BG Card           | `#D1CFD6` | Occasionally used for internal card fills    |
| Border            | `#D9D9D9` | All borders, dividers                        |
| Muted             | `#5a5668` | Secondary text, descriptions                 |
| White             | `#FFFFFF` | Cards, light section backgrounds             |
| Black             | `#000000` | Primary body text on white                   |

**Rules:**
- Orange = CTAs + accents ONLY. Never large background areas.
- Purple = dark section backgrounds (hero, how-it-works, who it's for, CTA).
- Sections alternate: BG Main → White → Purple → BG Main → White → Purple-dark → BG Main → White → Orange (CTA) → Purple-dark (footer)

---

## Typography

**Font:** Plus Jakarta Sans (Google Fonts)
Import: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

### Desktop Scale
| Token | Size  | Weight    | Line Height | Letter Spacing |
|-------|-------|-----------|-------------|----------------|
| H1    | 56px  | 700 Bold  | 1.05        | -1.5px         |
| H2    | 48px  | 700 Bold  | 1.1         | -1px           |
| H3    | 32px  | 700 Bold  | 1.2         | -0.5px         |
| H4    | 24px  | 600 Semi  | 1.3         | 0              |
| H5    | 20px  | 600 Semi  | 1.4         | 0              |
| H6    | 18px  | 600 Semi  | 1.4         | 0              |
| P1    | 24px  | 400 Reg   | 1.5         | 0              |
| P2    | 18px  | 400 Reg   | 1.5         | 0              |
| P3    | 16px  | 400 Reg   | 1.5         | 0              |
| P4    | 14px  | 400 Reg   | 1.5         | 0              |

### Mobile Scale
| Token | Size  |
|-------|-------|
| H1    | 32px  |
| H2    | 28px  |
| H3    | 22px  |
| H4    | 20px  |
| H5    | 18px  |
| P1    | 16px  |
| P2    | 14px  |

---

## Spacing System

### Section spacing
| Context            | Value          |
|--------------------|----------------|
| Section-to-section | 144px desktop  |
| Section-to-section | 72px mobile    |

### Component spacing
| Context                  | Value |
|--------------------------|-------|
| Element inside section   | 72px  |
| Between cards            | 32px  |
| Between heading & para   | 24px  |
| Between paragraphs       | 24px  |

### Container
| Breakpoint | Side padding |
|------------|-------------|
| Desktop    | 120px       |
| Tablet     | 40px        |
| Mobile     | 16px        |

### Grid
| Breakpoint | Columns | Gutter |
|------------|---------|--------|
| Desktop    | 12      | 32px   |
| Tablet     | 8       | 24px   |
| Mobile     | 4       | 16px   |

---

## Component Patterns

### Buttons

**Primary** (`btn-primary`)
- Background: `#FF5623`
- Text: white
- Font: 16px / 600
- Padding: 14px 28px
- Radius: 10px
- Hover: `#CC451C`, translateY(-1px)

**Ghost** (`btn-ghost`)
- Background: transparent
- Border: 2px `#1A0D32`
- Text: `#1A0D32`
- Hover: bg `#1A0D32`, text white

**Ghost White** (`btn-ghost-white`)
- Background: transparent
- Border: 2px white/40
- Text: white
- Hover: border-white, bg white/10
- Used on: dark/purple backgrounds

**White** (`btn-white`)
- Background: white
- Text: `#CC451C`
- Font: 16px / 700
- Used on: orange CTA section

**Nav** (`btn-nav`)
- Background: `#FF5623`
- Text: white
- Font: 14px / 600
- Padding: 10px 22px
- Radius: 8px

---

### Cards

**Standard card** (`.card`)
```
background: white
border-radius: 20px
border: 1px solid #D9D9D9
```

**Card hover** (`.card.card-hover`)
```
hover: translateY(-4px)
hover: box-shadow: 0 20px 60px rgba(26,13,50,0.1)
```

**Featured card** (for SAAP / recommended)
```
border: 2px solid #FF5623
```

---

### Section Labels

Small orange eyebrow above headings:
```
font-size: 12px
font-weight: 700
letter-spacing: 2px
text-transform: uppercase
color: #FF5623
margin-bottom: 16px
```
On dark backgrounds, use `text-orange-light` (`#FF8C6E`).

---

### Check Items

Used in product feature lists:
- Orange check circle (20px, bg orange/10)
- 15px / 500 text
- Gap 12px between icon and text

---

## Page Section Sequence (Homepage)

1. **Hero** — Purple gradient, white text, orange accents, 3 stats
2. **Trust Bar** — White, Red Hat badge, ISO certs, GDPR logos
3. **Products** — BG Main, two cards side-by-side
4. **How It Works** — Purple, 3 steps
5. **Why Us** — BG Main, 6 cards
6. **Comparison** — White, table
7. **Who It's For** — Purple-dark, 3 cards
8. **Testimonials** — BG Main, 3 cards
9. **Compliance Bar** — White, badges row
10. **CTA** — Orange gradient, white text
11. **Footer** — Purple-dark

---

## Animation

**Animate on scroll** (`.animate-on-scroll`)
- Starts: `opacity: 0`
- On intersect: adds `.visible` → `animate-fade-up`
- Fade up: `opacity 0→1, translateY 20px→0, 0.6s ease-out`
- Observer threshold: 10%, rootMargin: -40px bottom

The IntersectionObserver script lives in `BaseLayout.astro`.

---

## Dark mode

The site does not implement a dark/light toggle. It uses deliberate section-level contrast: white and BG Main sections for light content, purple sections for dark content. This is intentional — it creates visual rhythm and avoids the complexity of a full dark mode implementation.

---

## Do not

- Do not use gradients inside card backgrounds
- Do not use orange for section backgrounds
- Do not use more than 2 font weights in any single component (400 + 600/700)
- Do not use border-radius above 20px on cards
- Do not add decorative noise textures or patterns
- Do not animate more than one element per viewport scroll event
