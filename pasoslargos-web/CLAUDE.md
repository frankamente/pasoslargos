# CLAUDE.md for pasoslargos-web

## Build and Development Commands
- **Dev Server**: `ng serve` or `npm start` (available at http://localhost:4200)
- **Build**: `ng build` or `npm run build`
- **Test**: `ng test` or `npm test`
- **Visual Verification**: `npx playwright test` (Takes screenshots in `e2e/screenshots/`)
- **Run Single Test**: `ng test --include <path-to-file>`
- **Lint**: Not currently configured (Angular default). Add `.eslintrc.json` if needed.

## High-Level Architecture
- **Framework**: Angular 19+ using **Standalone Components** (no `AppModule`).
- **Project Structure**:
  - `src/app/`: Root application logic.
  - `src/app/components/`: Feature-based UI components (Home, Actividades, Contacto, Sobre Nosotros).
  - `src/app/app.routes.ts`: Central routing configuration mapping paths to components.
  - `src/app/app.config.ts`: Application-wide providers (Router, ZoneChangeDetection).
- **Layout**: The main layout is defined in `app.component.html`, featuring a persistent navigation header (with mobile menu logic) and a footer. The `router-outlet` is used for content rendering.
- **Styling**: Uses CSS. Global styles are in `src/styles.css`. Components use local CSS (e.g., `app.component.css`).
- **Assets**: Static assets (images, fonts) should be placed in `public/`.

## Coding Conventions
- **Components**: Always use standalone components.
- **Imports**: List specific imports in the `@Component({ imports: [...] })` decorator.
- **Routing**: Manage all navigation paths in `src/app/app.routes.ts`.
- **Naming**: Follow standard Angular naming conventions (e.g., `feature-name.component.ts`).
- **Testing**: Place specimen files (`.spec.ts`) alongside the source files they test.
