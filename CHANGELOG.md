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


PART 2 
FEEDBACK
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


## [2.6] - 2026-05-29
### Fixed - Style Guide page
- Added meta charset UTF-8 and viewport meta tag for mobile responsiveness
- Linked Google Fonts Poppins 700 + Open Sans 400 via CDN
- Added Font Awesome CDN script for icon display
- Applied RMHC Red #DA291C to h3 headings and Charcoal #2D2D2D to body text
- Documented font usage: Poppins for headings, Open Sans for body
- Documented icon usage with Font Awesome class names
-

PART 3 
JAVASRIPT
## [3.1.1] - 2026-06-15

### Fixed
- Fixed contact form on `contact.html`, `volunteer.html`, `enquiry.html` - Added missing `method="POST"` attribute to `<form>` tag and `type="submit"` to `<button>`. Form can now be submitted
- Fixed form accessibility - Added matching `for` attributes to `<label>` tags and `id` attributes to all `<input>`, `<select>`, and `<textarea>` elements
- Fixed HTML validation errors - Removed invalid elements and corrected nesting in all forms for WEDE5020 POE Part 2 compliance

### Added
- Added `novalidate` attribute to all forms to enable custom JavaScript validation from `script.js`
- Added `required` attribute to name, email, subject, and message fields for client-side validation
- Added page-specific dropdown options for `volunteer.html` and `enquiry.html` to improve user experience and data collection
- Added `<div class="form-group">` wrappers for consistent CSS styling across all forms

### Changed
- Changed form headings to match page context: "Get In Touch" on contact, "Volunteer With RMHC SA" on volunteer, "Accommodation Enquiry" on enquiry
- Updated submit button text from generic "Submit" to "Send Message" for better UX
## [3.1.1] - 2026-06-18

### Fixed
- Fixed contact forms on `contact.html`, `volunteer.html`, `enquiry.html` - Added missing `method="POST"` and `type="submit"` to button. Form can now be submitted
- Fixed form labels: Added matching `for` and `id` attributes for accessibility and WEDE5020 POE Part 2 compliance

### Added
- Added `novalidate` attribute to forms to allow custom JavaScript validation in `script.js`
- Added specific dropdown options for Volunteer and Enquiry pages to improve user experience
## [3.2.1] - 2026-06-19

### Added
- Implemented **Social Media Integration** for Off-Page SEO - Added social share buttons linking to RMHC SA Facebook, Instagram, LinkedIn on all pages
- Added **Local SEO Implementation** - Embedded Google Maps iframe with exact RMHC Johannesburg coordinates `-26.186, 27.903` on `contact.html`
- Added **Backlink Strategy** documented in POE Word Doc Part 3.2 - Identified partnerships with Chris Hani Baragwanath Hospital, local NGOs, and news sites
- Added Open Graph meta tags for Facebook/LinkedIn previews: `og:title`, `og:description`, `og:image` in `<head>` of all pages
- Added `rel="noopener noreferrer"` to all external links for security and SEO

### Changed
- Updated `contact.html` to include NAP data for Local SEO - Added full Name, Address, Phone in footer matching Google Business Profile
- Changed footer to include clickable `tel:` and `mailto:` links for improved user experience and Local SEO signals

### Fixed
- Fixed missing Local SEO elements - Added structured address data and embedded map to improve Google Maps ranking for "Ronald McDonald House Johannesburg"
