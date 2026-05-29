# RMHC South Africa Website - POE Part 2

**Student:** [Raisibe Chantell Aphane]
**Student Number:** [ST10507551]
**Subject:** WEDE5020
**Date:** 29 May 2026

## 1. Project Overview
Responsive website for Ronald McDonald House Charities South Africa. Built with HTML5 + CSS3. Focus: "warm, hopeful, trustworthy" aesthetic + WCAG AA accessibility + RMHC brand compliance.

## 2. Features Implemented
Based on code in `/css/styles.css` and HTML pages:

**Design & UX:**
- RMHC brand colors: Yellow `#FFC72C`, Charcoal `#2D2D2D`, Soft Grey `#F5F5F5`' blue, purple, rainbow
- Full-bleed background images on hero/about/programs sections using `background-image`
- CSS Grid for 3-column program cards, collapses to 1 column on mobile
- `rgba(255,255,255,0.95)` semi-transparent cards for readability over images
- Soft shadows + rounded corners for "welcoming" aesthetic

**Responsive Design:**
- Media query `@media screen and (max-width: 48rem)` for mobile
- Nav changes from horizontal `flex-direction: row` to vertical `flex-direction: column`
- Font sizes scale: `body 16px` → `90%` on mobile, `h1 2.5rem` → `1.75rem`
- Images: `max-width: 100%` + `height: auto` for fluid scaling

**Navigation:**
- RMHC yellow background, white text, no underlines
- Hover state: RMHC Yellow and white  background
- `.active` class with darker red + yellow bottom border for current page
- Touch-friendly full-width links on mobile

**Typography:**
- System font stack: `Arial, Helvetica, sans-serif` for performance
- Poppins Bold for headings, Open Sans Regular for body via Google Fonts
- WCAG AA contrast: Charcoal `#2D2D2D` text on light backgrounds

**Assets:**
- Images stored in `/img/` folder with correct relative paths
- All images include `alt` text for accessibility

## Referece
APHANE, R.C ST105007551 2026.*styles.css*[CSS stylesheet].Available at: css/styles.css [ Accessed 29 May 2026]
W3Schools. 2026. *CSS Flexbox*. Available at: https://www.w3schools.com/ css_flexbox.asp [Accced 29 May 2026]
Google Fonts. 2024. *Poppins and Open Sans*. Available at: https://fonts.google.com/specimen/Poppins [Accessed 29 May 2026]
