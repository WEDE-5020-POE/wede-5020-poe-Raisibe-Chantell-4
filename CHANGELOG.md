# CHANGELOG - RMHC Website project

All notable changes to this project will be documented in this file.

This project follows Semantic Versioning.

## [1.2] -2026-04-20
### Added
-created donate page with R250/R500/R1000 donation tiers
-Added unsplashed family image to home hero page (Mwangi, 2023)
### Added -2026-04-12
-wire frames
### Added -2026-04-03
-crated reference list with 8 sources in Harvard style
### Changed
-Rewrote About us paragraph to paraprase RMHC mission (RMHC SOUTH AFRICA , 2024)

### Fixed
-Corrected broken link on Contact page to google map
-Fixed in-textcitation format from (RMHC, 2024) to(RMHC SOUTH AFRICA, 2024)

## Semantic Versioning

Format: MAJOR.MINOR.PATCH  
Example: 2.1.3

- MAJOR → Breaking changes (1.0.0 → 2.0.0)  
- MINOR → New features (1.0.0 → 1.1.0)  
- PATCH → Bug fixes / small improvements (1.0.0 → 1.0.1)


PART 2 FEEDBACK
### Fixed
Valid HTML tags only :Removed 
type="monetary"
type="comment".Used select and textarea instead
Matching labels: Added
method="POST" and <button
type=submit">.Form can now be submitted

### FIXED
SITEMAP 
### ADDED
Added comments explaining each section and fix
Sematic html structure with header and main

### [2.0.0]- 2026-05-18
 ### Changed
 -fixed navigation structure: moved ul inside nav, corrected link destinations
 -updated layout to use sematic HTML tags: header, nav, main, section, footer
 -updated my images
 ### Added
 -HTML comments throughout code explaing each section
 _internal navigation between homepage, about, enquiry, and contact pa
 -improved links

 ### fixed - 2026-05-20
 -fixed invalid HTML- REMOVED br and h3 from iside table
 -corrected table colums 
 -contact.html structure, donate. html, and aboutus.html
 -footer
 -made user exprience easy
 ## [3.0.0] 2026-05-20
 -Created external stylesheet style.css for styling 
 -linked stylesheetsheet to all html pages using <link rel="stylesheet">

## [1.3] - 2026-05-29
### Added
- Background images for all main sections using CSS `background-image`
- Hero section on index.html with full-width background + dark overlay for text contrast
- About section background image on about.html  
- Programs section background image on Product and Services.html
- 3-card grid layout for Local Programs using CSS Grid 2.4
- Responsive media query 3.1: grid stacks to 1 column on screens < 768px
- White service cards with rgba overlay so text is readable on background images
- Text-shadow on headings for better readability over images

### Fixed
- Broken image icons: moved 3 program images into img/ folder and corrected file paths
- Blue color tint on background images: changed blend-mode from `darken` to `overlay` and set background-color to rgba(0,0,0,0.5)
- Text color contrast: changed h2/p text to white with text-shadow for accessibility
- Image file paths in CSS: added `../img/` prefix since style.css is inside CSS/ folder

### Technical
- Implemented CSS Grid for 3-column layout, marks 2.4
- Implemented responsive design with @media query, marks 3.1
- Used background-size: cover and background-position: center for responsive images


# CHANGED
-