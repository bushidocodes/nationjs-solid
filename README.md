# NationJS Solid

A social networking demo built on the [Solid](https://solidproject.org) framework, presented at NationJS. It replicates familiar social-network features (profile, friends, timeline) by reading decentralized Linked Data from a user's Solid pod rather than a central database.

## What is Solid?

Solid (Social Linked Data) is a specification led by Sir Tim Berners-Lee that lets users store their data in personal online data stores called **pods**. Apps read from and write to pods using standard web protocols, giving users full ownership of their data.

## Prerequisites

- **Node 22** (see `.nvmrc`) — use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
- A **WebID** — a URL that points to your Solid profile document. You can get one from a public identity provider such as [solidcommunity.net](https://solidcommunity.net)

## Getting Started

```bash
npm install
npm start          # dev server → http://localhost:5173
npm run build      # production build → dist/
```

## How to Use

1. Open the app at `http://localhost:5173`
2. Enter a WebID in the navbar and click **View**
3. The app fetches the profile document and displays biographic data, pages, friends, and timeline entries

### Example WebIDs

| Person | WebID |
|--------|-------|
| Ruben Verborgh | `https://ruben.verborgh.org/profile/#me` |
| Sarven Capadisli | `http://csarven.ca/#i` |
| Kingsley Uyi Idehen | `https://id.myopenlink.net/DAV/home/KingsleyUyiIdehen/Public/kingsley.ttl#this` |

## How It Works

The app uses [`@solid/react`](https://github.com/solid/react-components) to bind Solid pod data directly to React components. Profile properties (first name, friends, weblog, etc.) are fetched via SPARQL-like queries against the user's Linked Data profile.

## Tech Stack

- [Vite 5](https://vitejs.dev) — build tool
- [React 16](https://reactjs.org) — UI framework
- [React Router 4](https://v5.reactrouter.com) — client-side routing
- [styled-components](https://styled-components.com) — CSS-in-JS
- [@solid/react](https://github.com/solid/react-components) — Solid data binding

## Deployment

The project is configured for [Netlify](https://netlify.com) via `netlify.toml`. Push to `master` to trigger a deploy; all routes redirect to `index.html` for SPA navigation.
