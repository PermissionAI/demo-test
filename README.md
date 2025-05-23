# AI Agent Marketplace

This is a simple React-based foundation for an AI Agent Marketplace. It uses **Vite** with **React Router** and the Context API for global state. Components and layouts are organized for reusability.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build

## Project Structure

```
/src
  /components    # Reusable UI components
  /layouts       # Page wrappers
  /pages         # Marketplace pages
  /data          # Mock agent data
  /context       # App-wide state
  /styles        # Global styles
  App.jsx        # Main app entry
  main.jsx       # ReactDOM render
```

## Mock Data

The `src/data/agents.js` file contains a simple list of agents used for the demo.
