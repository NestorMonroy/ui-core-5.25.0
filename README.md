<p align="center">
  <a href="/">
    <img src="/images/brand/ui-signet.svg" alt="UI logo" width="200">
  </a>
</p>

<h3 align="center">ui</h3>

<p align="center">
  An advanced UI library based on Bootstrap 5 – UI extends Bootstrap with PRO components, and ready-to-use admin templates for React, Angular, Vue, and more.
  <br>
  <a href="/bootstrap/docs/"><strong>Explore UI docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/ui/ui/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/ui/ui/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="/blog/">Blog</a>
</p>

## UI vs Bootstrap

UI is fully compatible with Bootstrap, but it’s more than just a theme or UI extension — it’s a professionally developed and maintained system that addresses many of the limitations developers face with Bootstrap alone.

**Key differences between UI and Bootstrap:**

* ✅ **Framework-native versions** – UI offers official libraries for [React.js](/react/), [Vue.js](/vue/), and [Angular](/angular/), while Bootstrap depends on third-party community plugins for framework integration.
* 👨‍💻 **Full-time maintained project** – UI is not a community-only initiative. It’s developed by a dedicated, full-time team focused on long-term evolution and support.
* 📦 **More built-in components** – UI includes many components not present in Bootstrap by default, such as range sliders, multi-selects, and step-based form wizards.
* 🛠️ **Sass Modules support today** – UI already supports Sass Modules out of the box, a feature that Bootstrap plans to introduce in version 6.
* 🌍 **Modern RTL/LTR support** – UI uses CSS logical properties to provide seamless RTL and LTR layout support for multilingual and internationalized apps.
* 🔒 **Long-Term Support (LTS)** – While Bootstrap 3 & 4 LTS is now a paid service via [HeroDevs](https://www.herodevs.com/support/nes-bootstrap?utm_source=Bootstrap_site&utm_medium=Banner&utm_campaign=v3and4_eol), UI continues to offer long-term support without additional cost.

Whether you're starting a new project or migrating from Bootstrap, UI gives you a powerful upgrade path with more features, framework bindings, and peace of mind for long-term maintainability.

## Table of contents

- [Table of contents](#table-of-contents)
- [Quick start](#quick-start)
- [Components](#components)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Frameworks](#frameworks)
- [Templates](#templates)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Support UI Development](#support-ui-development)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/ui/ui-pro/archive/v5.25.0.zip) (Enterprise subscription required)
- Clone the repo: `git clone https://github.com/ui/ui-pro.git` (Enterprise subscription required)
- Install with [npm](https://www.npmjs.com/): `npm install @ui/ui-pro`
- Install with [yarn](https://yarnpkg.com/): `yarn add @ui/ui-pro`
- Install with [Composer](https://getcomposer.org/): `composer require ui/ui-pro:5.25.0`

Read the [Getting started page](/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

## Components

- [Bootstrap Accordion](/bootstrap/docs/components/accordion/)
- [Bootstrap Alert](/bootstrap/docs/components/alert/)
- [Bootstrap Autocomplete](/bootstrap/docs/forms/autocomplete/) **PRO**
- [Bootstrap Avatar](/bootstrap/docs/components/avatar/)
- [Bootstrap Badge](/bootstrap/docs/components/badge/)
- [Bootstrap Breadcrumb](/bootstrap/docs/components/breadcrumb/)
- [Bootstrap Button](/bootstrap/docs/components/button/)
- [Bootstrap Button Group](/bootstrap/docs/components/button-group/)
- [Bootstrap Callout](/bootstrap/docs/components/callout/)
- [Bootstrap Card](/bootstrap/docs/components/card/)
- [Bootstrap Carousel](/bootstrap/docs/components/carousel/)
- [Bootstrap Chip](/bootstrap/docs/components/chip/)
- [Bootstrap Chip Input](/bootstrap/docs/forms/chip-input/)
- [Bootstrap Checkbox](/bootstrap/docs/forms/checkbox/)
- [Bootstrap Close Button](/bootstrap/docs/components/close-button/)
- [Bootstrap Calendar](/bootstrap/docs/components/calendar/) **PRO**
- [Bootstrap Collapse](/bootstrap/docs/components/collapse/)
- [Bootstrap Date Picker](/bootstrap/docs/forms/date-picker/) **PRO**
- [Bootstrap Date Range Picker](/bootstrap/docs/forms/date-range-picker/) **PRO**
- [Bootstrap Dropdown](/bootstrap/docs/components/dropdown/)
- [Bootstrap Floating Labels](/bootstrap/docs/forms/floating-labels/)
- [Bootstrap Footer](/bootstrap/docs/components/footer/)
- [Bootstrap Header](/bootstrap/docs/components/header/)
- [Bootstrap Image](/bootstrap/docs/components/image/)
- [Bootstrap Input](/bootstrap/docs/forms/input/)
- [Bootstrap Input Group](/bootstrap/docs/forms/input-group/)
- [Bootstrap List Group](/bootstrap/docs/components/list-group/)
- [Bootstrap Loading Button](/bootstrap/docs/components/loading-button/) **PRO**
- [Bootstrap Modal](/bootstrap/docs/components/modal/)
- [Bootstrap Multi Select](/bootstrap/docs/forms/multi-select/) **PRO**
- [Bootstrap Navs & Tabs](/bootstrap/docs/components/navs-tabs/)
- [Bootstrap Navbar](/bootstrap/docs/components/navbar/)
- [Bootstrap Offcanvas](/bootstrap/docs/components/offcanvas/)
- [Bootstrap Pagination](/bootstrap/docs/components/pagination/)
- [Bootstrap Password Input](/bootstrap/docs/forms/password-input/) **PRO**
- [Bootstrap Placeholder](/bootstrap/docs/components/placeholder/)
- [Bootstrap Popover](/bootstrap/docs/components/popover/)
- [Bootstrap Progress](/bootstrap/docs/components/progress/)
- [Bootstrap Radio](/bootstrap/docs/forms/radio/)
- [Bootstrap Range](/bootstrap/docs/forms/range/)
- [Bootstrap Range Slider](/bootstrap/docs/forms/range-slider/) **PRO**
- [Bootstrap Rating](/bootstrap/docs/forms/rating/) **PRO**
- [Bootstrap Select](/bootstrap/docs/forms/select/)
- [Bootstrap Sidebar](/bootstrap/docs/components/sidebar/)
- [Bootstrap Search Button](/bootstrap/docs/components/search-button/)
- [Bootstrap Spinner](/bootstrap/docs/components/spinner/)
- [Bootstrap Stepper](/bootstrap/docs/forms/stepper/) **PRO**
- [Bootstrap Switch](/bootstrap/docs/forms/switch/)
- [Bootstrap Table](/bootstrap/docs/content/tables/)
- [Bootstrap Textarea](/bootstrap/docs/forms/textarea/)
- [Bootstrap Time Picker](/bootstrap/docs/forms/time-picker/) **PRO**
- [Bootstrap Toast](/bootstrap/docs/components/toast/)
- [Bootstrap Tooltip](/bootstrap/docs/components/tooltip/)

## Status

[![Build Status](https://github.com/ui/ui/workflows/JS%20Tests/badge.svg?branch=main)](https://github.com/ui/ui/actions?query=workflow%3AJS+Tests+branch%3Amain)
[![npm version](https://img.shields.io/npm/v/@ui/ui)](https://www.npmjs.com/package/@ui/ui)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/ui/ui)](https://packagist.org/packages/ui/ui)
[![Coverage Status](https://img.shields.io/coveralls/github/ui/ui/main)](https://coveralls.io/github/ui/ui?branch=main)
[![CSS gzip size](https://img.badgesize.io/ui/ui/main/dist/css/ui.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/ui/ui/blob/main/dist/css/ui.min.css)
[![CSS Brotli size](https://img.badgesize.io/ui/ui/main/dist/css/ui.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/ui/ui/blob/main/dist/css/ui.min.css)
[![JS gzip size](https://img.badgesize.io/ui/ui/main/dist/js/ui.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/ui/ui/blob/main/dist/js/ui.min.js)
[![JS Brotli size](https://img.badgesize.io/ui/ui/main/dist/js/ui.min.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/ui/ui/blob/main/dist/js/ui.min.js)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
ui/
├── css/
│   ├── ui-grid.css
│   ├── ui-grid.css.map
│   ├── ui-grid.min.css
│   ├── ui-grid.min.css.map
│   ├── ui-grid.rtl.css
│   ├── ui-grid.rtl.css.map
│   ├── ui-grid.rtl.min.css
│   ├── ui-grid.rtl.min.css.map
│   ├── ui-reboot.css
│   ├── ui-reboot.css.map
│   ├── ui-reboot.min.css
│   ├── ui-reboot.min.css.map
│   ├── ui-reboot.rtl.css
│   ├── ui-reboot.rtl.css.map
│   ├── ui-reboot.rtl.min.css
│   ├── ui-reboot.rtl.min.css.map
│   ├── ui-utilities.css
│   ├── ui-utilities.css.map
│   ├── ui-utilities.min.css
│   ├── ui-utilities.min.css.map
│   ├── ui-utilities.rtl.css
│   ├── ui-utilities.rtl.css.map
│   ├── ui-utilities.rtl.min.css
│   ├── ui-utilities.rtl.min.css.map
│   ├── ui.css
│   ├── ui.css.map
│   ├── ui.min.css
│   ├── ui.min.css.map
│   ├── ui.rtl.css
│   ├── ui.rtl.css.map
│   ├── ui.rtl.min.css
│   └── ui.rtl.min.css.map
└── js/
    ├── ui.bundle.js
    ├── ui.bundle.js.map
    ├── ui.bundle.min.js
    ├── ui.bundle.min.js.map
    ├── ui.esm.js
    ├── ui.esm.js.map
    ├── ui.esm.min.js
    ├── ui.esm.min.js.map
    ├── ui.js
    ├── ui.js.map
    ├── ui.min.js
    └── ui.min.js.map
```

We provide compiled CSS and JS (`ui.*`), as well as compiled and minified CSS and JS (`ui.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`ui.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`ui.bundle.js` and minified `ui.bundle.min.js`) include [Popper](https://popper.js.org/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/ui/ui/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/ui/ui/issues/new).

## Documentation

The documentation for the UI & is hosted at our website [ui](/bootstrap/docs/getting-started/introduction/)

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/ui` directory, run `npm run docs-serve` in the command line.
4. Open `http://localhost:9001/` in your browser, and voilà.

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

## Frameworks

UI supports most popular frameworks.

- [UI for Angular](https://github.com/ui/ui-angular)
- [UI for Bootstrap (Vanilla JS)](https://github.com/ui/ui)
- [UI for React](https://github.com/ui/ui-react)
- [UI for Vue](https://github.com/ui/ui-vue)

## Templates

Fully featured, out-of-the-box, templates for your application based on ui.

- [Angular Admin Templates](/themes-templates/admin-dashboard/angular/)
- [Bootstrap Admin Templates](/themes-templates/admin-dashboard/bootstrap/)
- [Next.js Admin Templates](/themes-templates/admin-dashboard/next-js/)
- [React Admin Templates](/themes-templates/admin-dashboard/react/)
- [Vue Admin Templates](/themes-templates/admin-dashboard/vue/)

## Contributing

Please read through our [contributing guidelines](https://github.com/ui/ui/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/ui/ui/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Community

Stay up to date on the development of UI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official UI Blog](/blog).
- Follow [@core_ui on Twitter](https://x.com/core_ui).
- Discuss, ask questions, and more on [the community Discord](https://discord.gg/pQRWe5XdGm).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, UI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/ui/ui/releases) for changelogs for each release version.


## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

**UI Team**

* <https://twitter.com/core_ui>
* <https://github.com/ui>
* <https://github.com/orgs/ui/people>

## Thanks
UI is designed as the extension of [Bootstrap](https://getbootstrap.com). Special thanks for [Bootstrap team](https://getbootstrap.com/docs/5.0/about/team/) and [Bootstrap's contributors](https://github.com/twbs/bootstrap/graphs/contributors).

## Support UI Development

UI is an MIT-licensed open source project and is completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying the [UI PRO](/pricing/?framework=bootstrap&src=github-ui) or by becoming a sponsor via [Open Collective](https://opencollective.com/ui/).

## Copyright and license

Copyright 2026 creativeLabs Łukasz Holeczek.
This is commercial software. To use it, you have to own a commercial license. Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
