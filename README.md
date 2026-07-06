# Intelligence Foundry — Empty States

A prototype of the Crusoe Intelligence Foundry (IF) empty-state experience: a cohesive set of
zero-state screens for every product surface, in IF's dark console theme.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## What's here

- **Full IF shell** — global top bar (Crusoe logo + green breadcrumb), grouped sidebar
  (Home / Model Hub / Playground, Inference, Develop, Monitor, Manage, Admin), project switcher.
- **Two empty-state layouts**, chosen by content:
  - **With cards → left-hero layout** (illustration left, headline + description + single primary
    CTA right, cards below): Serverless (detailed getting-started steps), Self-Serve & Fine-Tuning
    (clickable model cards).
  - **No cards → centered state** (illustration + headline + description + CTA): Tailored,
    Evaluations, Datasets, Deployments, Usage, Billing, Metrics, API Keys.
- **Shared animated cube illustration** and a consistent CTA pattern: one primary action, with
  "View docs" as an inline link in the description.

## Stack

Vite + React + React Router. Content lives in `src/data.js`; components in `src/App.jsx`;
styling in `src/styles.css`.
