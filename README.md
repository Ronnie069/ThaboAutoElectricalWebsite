# Thabo's Auto Electrical — Website Project

**Student:** Ronald Mukanya (ST10532005)  
**Module:** WEDE5020 — Web Development (Introduction)  
**Live site:** https://dreamy-jelly-fbc50e.netlify.app  
**GitHub repository:** https://github.com/Ronnie069/ThaboAutoElectricalWebsite

A five-page brochure website for Thabo's Auto Electrical, an auto-electrical repair workshop in Phuthaditjhaba, Free State. The project is built in stages across the module:

- **Part 1** — Content & Structure: semantic HTML for five pages (Home, About, Services, Enquiry, Contact Us), using researched content and images.
- **Part 2** — Designing the Visuals: an external CSS stylesheet applying typography, layout, decoration and colour for a desktop solution, plus responsive styling for tablet and mobile using relative units, media queries and breakpoints. *(submitted)*
- **Part 3** — Enhancing Functionality and SEO: JavaScript interactivity (map, lightbox, accordion, service filter, animations), validated enquiry and contact forms, SEO (titles, meta tags, robots.txt, sitemap.xml) and deployment. *(this submission)*

## Part 3 Summary — Enhancing Functionality and SEO

Part 3 adds JavaScript interactivity, improved forms with client-side validation and simulated AJAX responses, an interactive map, image lightbox, accordion, service filtering, comprehensive on-page SEO (title tags, meta descriptions, keywords), robots.txt, sitemap.xml, and updated documentation.

### Key Features Added
- **Interactive Map** (Contact Us.html): Leaflet.js + OpenStreetMap with workshop marker and popup.
- **Image Lightbox**: Click any service or team image to view it enlarged; close with ×, Escape, or click outside.
- **Accordion FAQ** (About.html): Expandable frequently asked questions.
- **Service Filter** (Services.html): Filter cards by category (All / Diagnostics / Battery / Alternator / Wiring).
- **Form Validation + AJAX-style responses**:
  - Enquiry form: required fields, phone/email format checks, success message with service-specific feedback.
  - Contact form: full message form with validation and confirmation response.
- **SEO**: Unique title tags and meta descriptions on every page, keywords, robots meta, descriptive alt text.
- **robots.txt** and **sitemap.xml** for search engine crawlers.
- Scroll-triggered fade-in animations on sections.

## Website Goals and Objectives

- Give the business its first online presence for local searches.
- Generate leads through an online enquiry/booking form.
- Build trust through service information and photos of past work.

## Key Features

- **Home** (`index.html`) — hero intro, services overview, CTA
- **About** (`About.html`) — workshop history, mission, values
- **Services** (`Services.html`) — diagnostics, battery, alternator, wiring, accessories
- **Enquiry** (`Enquiry.html`) — booking/quote request form
- **Contact Us** (`Contact Us.html`) — address, phone, hours, map

## Sitemap

```
Home
├── About
├── Services
├── Enquiry
└── Contact Us
```

## Project Structure

```
ThaboAutoElectricalWebsite/
├── index.html
├── About.html
├── Services.html
├── Enquiry.html
├── Contact Us.html
├── css/
│   └── style.css          External stylesheet, linked from every page
├── images/                Page images + 400w resized variants for srcset
├── js/
│   └── script.js          Part 3 JavaScript (map, lightbox, accordion, filter, validation)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Part 2 Summary

- Created a single external stylesheet (`css/style.css`) and linked it in the `<head>` of all five HTML pages.
- Applied a consistent typography, colour and layout system across the site using CSS custom properties (`:root` tokens), CSS Grid and Flexbox.
- Styled interactive elements (navigation links, the enquiry form, and the submit button) using pseudo-classes: `:hover`, `:focus-visible`, `:active` and `:checked` (the last one drives a CSS-only mobile menu toggle, no JavaScript required).
- Made the site responsive using relative units (`rem`, `em`, `%`), two media query breakpoints (tablet ≤ 900px / 56.25em, mobile ≤ 600px / 37.5em), a fluid card/grid layout, a collapsing navigation menu on mobile, and `srcset`/`sizes` on content images so smaller devices download a smaller image file.
- Verified the layout at desktop, tablet and mobile widths using browser developer tools before submission.

## Responsive Design Evidence

The layout was tested in browser developer tools at the three main breakpoints:

| Viewport | Width | Description |
|----------|-------|-------------|
| Desktop  | ≥ 901px | Multi-column layouts, full horizontal navigation |
| Tablet   | ≤ 900px (56.25em) | Adjusted grid, stacked hero sections |
| Mobile   | ≤ 600px (37.5em) | Single-column layout, CSS-only hamburger menu |


## Changelog

All notable changes to this project are recorded here, most recent first.

### [Part 3] — Interactivity, Forms and SEO

- **Added:** `js/script.js` with map, lightbox, accordion, filtering, form validation, and animation logic.
- **Added:** Leaflet CSS/JS via CDN on Contact Us page.
- **Added:** Contact form on Contact Us.html.
- **Added:** FAQ accordion section on About.html.
- **Added:** Service filter buttons and data-category attributes on Services.html.
- **Added:** Lightbox HTML structure on pages that use images.
- **Added:** Meta description, keywords, and robots tags on all five pages; titles optimised for local search.
- **Added:** `robots.txt` and `sitemap.xml` in the project root.
- **Added:** Form error styling, success response styling, map container, accordion, and lightbox styles in `css/style.css`.
- **Changed:** Map coordinates updated from Johannesburg placeholder to Harrismith area (approx. -28.2728, 29.1294).
- **Changed:** Enquiry and contact forms now use HTML validation (`required`, `minlength`, `type="email"`, `type="date"` with a `min` of today) first, followed by JavaScript validation; the earlier `novalidate` attribute was removed so both layers run.
- **Added:** JavaScript validation of name length (minimum 2 characters), South African phone format, email structure, message length (minimum 10 characters), and enquiry date (not in the past and not a Sunday, as the workshop is closed).
- **Fixed:** Services page filter buttons did not filter because the script targeted a non-existent `main.services-main` selector; it now targets `.services-grid .service-card`.
- **Fixed:** added the missing `@keyframes fadeIn` rule in `css/style.css` used by the filter animation.
- **Updated:** `robots.txt` and `sitemap.xml` now use the live Netlify address instead of the placeholder URL.
- **Added:** Deployed the website on Netlify and added the live link to this README.
- **Updated:** README with Part 3 summary, detailed changelog, and additional references.

### [Part 2] — CSS Styling & Responsive Design

- **Added:** external stylesheet `css/style.css` linked to every page.
- **Added:** base/reset styles (box-sizing, margins, `<img>` defaults) and a site-wide colour and typography token system (`:root` custom properties).
- **Added:** typography styling for headings and body text using the Oswald (display) and Inter (body) type families, with a defined type scale (`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`).
- **Added:** CSS Grid / Flexbox layout structure for the header, navigation, service cards (`Services.html`), values grid (`About.html`), the enquiry form (`Enquiry.html`) and the contact info cards (`Contact Us.html`).
- **Added:** decorative and colour styling — card shadows (`box-shadow`), hover states, an amber accent underline on section headings (`::after`), bordered info panels.
- **Added:** pseudo-class interactivity — `:hover` / `:focus-visible` / `:active` on navigation links, form fields and the submit button; `:checked` used to drive a CSS-only responsive navigation toggle.
- **Added:** two responsive breakpoints (900px / 56.25em and 600px / 37.5em) adjusting layout, navigation, typography scale and image sizing for tablet and mobile.
- **Added:** `srcset` / `sizes` attributes and 400px-wide resized image variants for content images so mobile devices load a smaller file.
- **Changed:** replaced inline `style="max-width:100%; height:auto;"` attributes on `<img>` tags (from Part 1) with a single rule in `style.css`.
- **Changed:** wrapped the Enquiry form fields in `.form-field` containers so each label/input pair could be styled and positioned consistently.
- **Changed:** navigation updated from simple links to a CSS-only mobile menu using a hidden checkbox (`#nav-toggle`) and `:checked` pseudo-class.

### [Part 1 Feedback] — Edits based on lecturer feedback

Received Part 1 feedback (80/100). Minor deductions were noted in the following areas. The actions taken are recorded below:

| Feedback Area | Action Taken |
|---------------|--------------|
| **Sitemap** | Added a clear Sitemap section to this README showing the hierarchical page structure. |
| **Content Depth** | Reviewed page content for clarity and completeness; service descriptions and about content retained and supported by visual hierarchy in Part 2 styling. |
| **HTML structure detail** | Confirmed consistent use of semantic elements (`header`, `nav`, `main`, `section`, `footer`) across all five pages; structure remains intact while CSS handles presentation. |
| **Code Comments** | Retained existing HTML comments and added clear section comments in `css/style.css` explaining major blocks (reset, tokens, typography, layout, components, media queries). |

Where the lecturer indicated that formal corrections could be deferred while focus shifted to Part 2, those items are noted above and addressed through the README and CSS organisation.

### [Part 1] — Content & Structure

- **Added:** semantic HTML5 structure for Home, About, Services, Enquiry and Contact Us pages (`header`, `nav`, `main`, `section`, `footer`).
- **Added:** researched workshop content, service descriptions and contact details.
- **Added:** enquiry form structure (name, phone, email, vehicle, service, date, message).
- **Added:** page images sourced during research and placed in `images/`.

## Technical Requirements

HTML5, CSS3 (external stylesheet, responsive design), JavaScript (ES6), Leaflet.js with OpenStreetMap.

## References

- Afrihost, 2026. *Web Hosting South Africa*. Available at: https://www.afrihost.com [Accessed 10 August 2026].
- Bos, B., Çelik, T., Hickson, I. and Lie, H.W., 2023. *Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification*. W3C.
- Google Fonts, 2026. *Oswald* and *Inter* type families. Available at: https://fonts.google.com [Accessed 16 August 2026].
- Mozilla Developer Network (MDN), 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 16 August 2026].
- Mozilla Developer Network (MDN), 2026. *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 16 August 2026].
- The Independent Institute of Education (Pty) Ltd, 2026. *Part 2 — Designing the Visuals: CSS Styling and Responsive Design* [Module task brief].
- Unsplash, 2026. *Free automotive stock photography*. Available at: https://unsplash.com [Accessed 10 August 2026].


### Part 3 References

- Leaflet, 2026. *Leaflet — an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com [Accessed 18 October 2026].
- OpenStreetMap contributors, 2026. *OpenStreetMap*. Available at: https://www.openstreetmap.org [Accessed 18 October 2026].
- Mozilla Developer Network (MDN), 2026. *Form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 18 October 2026].
- Mozilla Developer Network (MDN), 2026. *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 18 October 2026].
- Google Search Central, 2026. *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 18 October 2026].
- Netlify, 2026. *Netlify Docs: Deploy sites*. Available at: https://docs.netlify.com [Accessed 1 November 2026].
- The Independent Institute of Education (Pty) Ltd, 2026. *Part 3 — Enhancing Functionality and SEO* [Module task brief].

### Deployment Notes
The site is deployed on free static hosting. Other suitable platforms are:
- **Netlify** (drag-and-drop the project folder or connect the GitHub repo)
- **GitHub Pages**
- **Cloudflare Pages**

**Live site:** https://dreamy-jelly-fbc50e.netlify.app (deployed on Netlify). The URLs in `robots.txt` and `sitemap.xml` point to this address.

---
© 2026 Thabo's Auto Electrical. All rights reserved.
