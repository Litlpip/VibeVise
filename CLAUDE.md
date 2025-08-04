# VibeVise - Split Front Project

## Project Architecture & Stack

- **Core**: React 19 + TypeScript + Vite
- **UI Framework**: Chakra UI v3 (latest)
- **Architecture**: Feature-Sliced Design (FSD)
- **Styling**: CSS Modules + Chakra UI
- **PWA**: Progressive Web App with vite-plugin-pwa
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier + Husky pre-commit hooks

## Key Commands

```bash
npm run dev          # Development server
npm run build        # Production build with TypeScript check
npm run test         # Run tests
npm run test:coverage # Run tests with coverage
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run typecheck    # TypeScript type checking
npm run format       # Prettier formatting
```

## Architecture Patterns

- **FSD Structure**: `/src/{app,pages,widgets,features,entities,shared}`
- **CSS Modules**: Component-specific styling with `.module.css`
- **Chakra UI v3**: Modern component library with latest API
- **Global Styles**: Managed through `globals.module.css`

## Code Conventions

- TypeScript strict mode
- CSS Modules for component styling
- Chakra UI components for UI primitives
- React Icons for iconography
- Absolute imports from src root
- Pre-commit hooks ensure code quality

## Testing Setup

- Jest with jsdom environment
- React Testing Library for component testing
- Coverage reports in `/coverage`
- Test files in `__tests__` directories

## Development Notes

- Hot Module Replacement (HMR) enabled
- PWA capabilities configured
- Pre-commit hooks run lint + format on staged files
- Dark/light theme toggle implemented

## Memory Management Rule

**ВАЖНО**: При работе с ключевыми аспектами приложения (новые фичи, архитектурные решения, важные паттерны, специфичные подходы) обязательно документировать их в этом файле для сохранения контекста между сессиями.
