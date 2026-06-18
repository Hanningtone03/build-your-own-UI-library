![CI](https://github.com/Hanningtone03/build-your-own-ui-library/actions/workflows/ci.yml/badge.svg)

**[Live Demo](https://hanningtone03.github.io/build-your-own-UI-library/demo/)**

# Build Your Own UI Library

A UI component library built in vanilla JavaScript, HTML and CSS.

## How it works

Each component is a JavaScript function that creates and returns a DOM element. CSS custom properties handle theming. No virtual DOM, build step or dependencies.

## Components

Five components: button, card, modal, dropdown, and toast. Buttons cover primary, danger, neutral, and outline variants with small and large sizes. Cards have optional header, body, and footer sections. The modal supports confirm and cancel callbacks with a backdrop animation. The dropdown closes when you click outside it. Toasts auto-dismiss after 3 seconds and come in four types; success, error, warning, and info.

## Project structure

```
src/
├── components/
│   ├── button.js
│   ├── card.js
│   ├── modal.js
│   ├── dropdown.js
│   └── toast.js
├── styles/
│   ├── base.css
│   └── components.css
└── index.js
demo/
└── index.html
```

## Running locally

```bash
npx serve .
```

Then open `http://localhost:3000/demo`

## Usage

```javascript
import { createButton } from "./src/components/button.js";
import { createModal } from "./src/components/modal.js";
import { toast } from "./src/components/toast.js";

const btn = createButton({ label: "Click me", variant: "primary" });
document.body.appendChild(btn);

toast("Hello world", "success");
```

## Tech

- Vanilla JavaScript (ES Modules)
- CSS custom properties
- No external dependencies
- No build step required
