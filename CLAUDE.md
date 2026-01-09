# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Figma-generated code bundle for a Hiking Mini Program Design. The project is built with React + Vite and uses a component-heavy architecture.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

## Architecture

### Tech Stack
- **Build Tool**: Vite 6.3.5
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.12 with Emotion for component styling
- **UI Components**: Heavy use of Radix UI primitives and MUI components

### Project Structure
```
src/
├── app/
│   ├── App.tsx          # Main application entry
│   └── components/      # React components
├── styles/
│   └── index.css        # Global styles
└── main.tsx             # React DOM entry point
```

### Path Aliases
- `@` maps to `src/` directory (configured in vite.config.ts)

### Key Dependencies
- **Radix UI**: Unstyled, accessible component primitives (dialog, dropdown, navigation, etc.)
- **MUI**: Pre-styled Material-UI components and icons
- **Framer Motion**: Animation library (`motion` package)
- **React Hook Form**: Form state management
- **date-fns**: Date manipulation
- **recharts**: Data visualization/charts

### Important Notes
- Both React and Tailwind plugins are required in Vite config - do not remove them even if Tailwind is not actively used
- This is a Figma code export - the generated code may contain components that need manual refinement for production use
- Components use a mix of Emotion styling and Tailwind utility classes
