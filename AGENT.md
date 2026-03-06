# Slides Educational - Agent Guide

## Architecture

- **App.tsx** — Entry point. Exports `default function App()` which initializes a Reveal.js deck (theme: `solarized`, transition: `fade`) and composes all slide components with `isNested` prop.
- **Slide.tsx** — Wrapper component. When `isNested=true`, renders children directly (used inside App). When standalone, creates its own Reveal.js deck for single-slide preview. Exports both `Slide` (named) and `SlidePreview` (default).
- **styles.css** — Global styles scoped under `.reveal`. Uses Georgia serif for body and system sans-serif for headings. Solarized color palette (`#268bd2`, `#fdf6e3`, `#073642`).
- **slides/** — Six numbered slide files (01-Title through 06-Review). Each exports a named component and a default preview function. Slides accept optional props with defaults and wrap content in `<Slide isNested={isNested}>`.

Slide flow follows a lesson structure: Title -> Objectives -> Concept -> Example -> Practice -> Review. Each slide has a distinct pedagogical role with matching CSS classes.

## Styling

- Single `styles.css` file with plain CSS (not CSS modules).
- Solarized color scheme: blue accent `#268bd2`, cream backgrounds `#fdf6e3`, dark code blocks `#002b36`.
- Specialized educational components: `.lesson-badge`, `.objectives-list` with check icons, `.concept-diagram` with labeled boxes, `.code-block` with monospace font, `.exercise-box` with timer hint, `.summary-grid` with numbered items.
- Uses flexbox for diagrams/cards and left-aligned lists for readability.

## Extension Points

- Add a new slide by creating `slides/0N-Name.tsx`, exporting a named component and default preview, then importing/rendering it in `App.tsx`.
- Add interactive elements (quizzes, code exercises) using the existing `.exercise-box` and `.code-block` patterns.
- Extend the `.concept-diagram` pattern with additional `.box` elements for new visual explanations.

## Constraints

- Reveal.js is initialized in embedded mode (`embedded: true`, `hash: false`). Do not enable hash-based routing.
