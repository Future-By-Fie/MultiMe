# MultiMe — technical foundation

The browser showcase in `index.html` is a UX mockup. The independent, testable `src/policy.js` module models context switching and field-level visibility. It is not connected to the mockup yet.

## Trust boundary

Visibility filtering on a client is **not access control**. In a real system, server-side authorization must enforce audience permissions before sending data. Never send private fields to unauthorized clients. Authentication, encrypted storage, audit logs, GDPR data subject rights and integration consent are future requirements.

## Next implementation

Build a React UI consuming this domain model, then design a server-side authorization layer with negative access tests. Avoid collecting real personal data until a privacy and security review is complete.

## Current demo features (v0.3)

- Edit three independent context profiles and field-level visibility.
- Preview what Public, Connections and Only me audiences would see.
- Export demo data to JSON and import validated JSON (20 KB maximum). No server is involved.
- All edits remain in browser memory until refresh; exported files may contain personal information and should be handled carefully.

## Next engineering challenges

1. Reuse the shared `src/policy.js` module in a bundled front-end rather than duplicating preview logic in HTML.
2. Add secure authentication and server-enforced field-level authorization, including negative access tests.
3. Implement consented connections and contact-specific sharing rules.
4. Design encrypted storage, account deletion, data export and GDPR workflows.
5. Test mobile accessibility and real cross-context sharing journeys.
