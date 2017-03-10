# Angular ES6 Webpack app

[![npm used](https://img.shields.io/npm/dm/localeval.svg?style=flat)](https://www.npmjs.com/)

[![apm](https://img.shields.io/apm/v/vim-mode.svg?style=flat)](https://github.com/atom/apm)

## Made with:
> • ES6, Babel, Node, Webpack, AngularJS, UI-Router, ESLint, UglifyJS,
Atom (ESLint, bootstrap boot-lint, css-lint), git, nginx, Photoshop.

> • Style guides / guidelines: Airbnb, Pete Hunt

A custom app for Sam Ford, an illustrator and artist.

Design + Code: Amanda Falke, Portland Oregon

## Background:
### A "performance-first, mobile-first" responsive design, hosted on nginx.
I've written and delivered a performant AngularJS app for a visual artist,
where both image quality and fast speeds (particularly on mobile) were a primary
concern. For this reason, detail-oriented image compression techniques were
used (UglifyJS, Google pagespeed, Photoshop), nginx was chosen for the server
over Apache, and gzip techniques were also used.

### Design: Performance
- **Minification:** UglifyJS (and Webpack's Angular Inject plugin) used
- **FOUC:** Extract Text Webpack Plugin used, but did not make discernible benchmarked performance difference
- **gzip:** Used whenever possible on nginx VPS
- **Images (format):** JPG chosen over PNG for smaller file sizes and photographic image quality; SVG and vectors not appropriate for design.
- **Images (size):** Bootstrap breakpoints and responsive image classes used; Photoshop compression techniques used
- **Generated pages** Using regexp, URL segment pattern matching, and JSON in SPA architecture rather than individual pages for each portfolio piece

### Design notes
- **SPA with generated portfolio pages:** Portfolio pages are generated from JSON using **nested views** with **UI-Router** and **regular expression pattern matching** via URL segments and `$stateparams`.

- **Custom next logic:** The Carousel in this project is an Angular-UI Bootstrap Carousel and tpls template, so I used custom logic with pattern matching URLs of generated portfolio pages for the `next/prev` logic for portfolio pages.

Using existing technologies and best practices such as Angular-UI Bootstrap carousel, typography, bootstrap classes, the ngMagnify directive, UI-Router, and other
open source software too,

I wrote custom JavaScript logic for models, nested views, routes.

My code:
> webpack configuration file, app.js ES6 imports and logic,
index.html bootstrap responsive classes, all of the JavaScript ui-router
routes and logic, Angular directives and controllers in js/, and all of the html
 partials in pages/.

Everything else in this project is open source.

### Use:
1. Clone the repo
2. `$ nvm use` will use Node 6.9.2
3. `$ npm install`
4. `$ npm run installdevdeps` // will install all dev dependencies
5. `$ npm run clean`
6. `$ npm run build` // Webpack compilation will verbosely warn re: UglifyJS
7. `$ npm run dev`	// runs Webpack dev server in --inline hot mode
8. App will now run, albeit without (client-owned, copyrighted) images;
populate JSON objects with appropriate images in model logic.

### Responsive design (mobile first):
### Mobile:

![Bootstrap classes for mobile](/readmeimg/gallery-mobile.jpg "Gallery, mobile")

![Bootstrap classes for mobile](/readmeimg/work-mobile.jpg "Work, mobile")

![Bootstrap classes for mobile](/readmeimg/portfolio-mobile.jpg "Portfolio, mobile")


### Tablet:

![Bootstrap classes for tablets](/readmeimg/work-tablet.jpg "Work, tablet")


### Desktop:

![Bootstrap classes for desktops](/readmeimg/gallery-large.jpg "Gallery, desktop")

![Bootstrap classes for desktops](/readmeimg/work-large-medium.jpg "Gallery, desktop")

![Bootstrap classes for desktops](/readmeimg/portfolio-large.jpg "Portfolio, desktop")

![Bootstrap classes for desktops](/readmeimg/about-large.jpg "About, desktop")


Noted bug: Chrome on Windows: opening up a new tab stops navigation
with Angular-UI Bootstrap Carousel (something I didn't build! ha)
