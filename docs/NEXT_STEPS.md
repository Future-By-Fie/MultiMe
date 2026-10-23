# Developer roadmap

## Current boundary
An interactive concept showcase of context-specific profiles. It does not provide secure identity separation, authentication or integrations.

## Getting started
Open `index.html` in a browser. With Node.js 20+, run `npm test` and `npm run check`. These are documented commands, not verified execution results.

## Technical milestones
1. Formalize an audience-policy matrix: Work / Hobby / Personal x recipient x field visibility.
2. Add denial-by-default tests and checks for context switching without accidental data carry-over.
3. Create a minimal adapter interface for future platform integrations; keep adapters mocked.
4. Add keyboard, mobile and screen-reader checks.
5. Document consent, export, deletion and platform API limitations before real user data.

## Good first issue
Create tests proving that a field hidden in one context remains hidden after switching contexts.
