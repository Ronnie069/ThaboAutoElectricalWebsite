# Thabo's Auto Electrical — Website Project

**Student:** Ronald Mukanya (ST10532005)  
**Module:** WEDE5020 — Web Development (Introduction)

A five-page brochure website for Thabo's Auto Electrical, an auto-electrical repair workshop in Phuthaditjhaba, Free State. The project is built in stages across the module:

- **Part 1** — Content & Structure: semantic HTML for five pages (Home, About, Services, Enquiry, Contact Us), using researched content and images.
- **Part 2** — Designing the Visuals: an external CSS stylesheet applying typography, layout, decoration and colour for a desktop solution, plus responsive styling for tablet and mobile using relative units, media queries and breakpoints. *(this submission)*
- **Part 3** *(future)* — Interactivity and form handling with JavaScript.

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
├── js/                    Reserved for Part 3
└── README.md
```

## Part 2 Summary

- Created a single external stylesheet (`css/style.css`) and linked it in the `<head>` of all five HTML pages.
- Applied a consistent typography, colour and layout system across the site using CSS custom properties (`:root` tokens), CSS Grid and Flexbox.
- Styled interactive elements (navigation links, the enquiry form, and the submit button) using pseudo-classes: `:hover`, `:focus-visible`, `:active` and `:checked` (the last one drives a CSS-only mobile menu toggle, no JavaScript required).
- Made the site responsive using relative units (`rem`, `em`, `%`), two media query breakpoints (tablet ≤ 900px / 56.25em, mobile ≤ 600px / 37.5em), a fluid card/grid layout, a collapsing navigation menu on mobile, and `srcset`/`sizes` on content images so smaller devices download a smaller image file.
- Verified the layout at desktop, tablet and mobile widths using browser developer tools before submission.

## Responsive Design Evidence

Screenshots of the website at the three main breakpoints should be included below after final testing:

| Viewport | Width | Description |
|----------|-------|-------------|
| Desktop  | ≥ 901px | Multi-column layouts, full horizontal navigation |
| Tablet   | ≤ 900px (56.25em) | Adjusted grid, stacked hero sections |
| Mobile   | ≤ 600px (37.5em) | Single-column layout, CSS-only hamburger menu |

> **Action required:** Capture screenshots using browser developer tools (Ctrl+Shift+M / Cmd+Option+M) at the breakpoints above and add them to this section (or place image files in the repository and link them here) before final submission.

## Changelog

All notable changes to this project are recorded here, most recent first.

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

HTML5, CSS3 (external stylesheet, responsive design). JavaScript planned for Part 3.

## References

- Afrihost, 2026. *Web Hosting South Africa*. Available at: https://www.afrihost.com [Accessed 10 August 2026].
- Bos, B., Çelik, T., Hickson, I. and Lie, H.W., 2023. *Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification*. W3C.
- Google Fonts, 2026. *Oswald* and *Inter* type families. Available at: https://fonts.google.com [Accessed 16 August 2026].
- Mozilla Developer Network (MDN), 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 16 August 2026].
- Mozilla Developer Network (MDN), 2026. *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 16 August 2026].
- The Independent Institute of Education (Pty) Ltd, 2026. *Part 2 — Designing the Visuals: CSS Styling and Responsive Design* [Module task brief].
- Unsplash, 2026. *Free automotive stock photography*. Available at: https://unsplash.com [Accessed 10 August 2026].

---
© 2026 Thabo's Auto Electrical. All rights reserved.
