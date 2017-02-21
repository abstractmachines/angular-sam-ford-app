# Angular ES6 Webpack app

[![npm used](https://img.shields.io/npm/dm/localeval.svg?style=flat)](https://www.npmjs.com/)

[![apm](https://img.shields.io/apm/v/vim-mode.svg?style=flat)](https://github.com/atom/apm)

## Made with:
> • ES6, Babel, Node, Webpack, AngularJS, UI-Router, ESLint, UglifyJS,
Atom (ESLint, bootstrap boot-lint, css-lint), git, nginx, Photoshop.

> • Style guides / guidelines: Airbnb, Pete Hunt

A custom app for Sam Ford, an illustrator and artist.
Design + Code: Amanda Falke (2016)

## Background:
### A "performance-first, mobile-first" responsive design, hosted on nginx.
I've written and delivered a performant AngularJS app for a visual artist,
where both image quality and fast speeds (particularly on mobile) were a primary
concern. For this reason, detail-oriented image compression techniques were
used (UglifyJS, Google pagespeed, Photoshop), nginx was chosen for the server
over Apache, and gzip techniques were also used. As many techniques as possible
were used to avoid FOUC (Flash of Unstyled Content).

Using existing technologies and best practices such as Angular-UI Bootstrap carousel, typography, bootstrap classes, the ngMagnify directive, UI-Router, and other
open source software too,

I wrote custom JavaScript logic for models, nested views, routes.
My code:
> webpack configuration file, app.js, index.html, all of the JavaScript ui-router \
routes, Angular directives and controllers in js/, and all of the html partials
in pages/

Everything else in this project is open source.

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
