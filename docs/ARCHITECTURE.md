# MultiMe — technical foundation

The browser showcase in `index.html` is a UX mockup. The independent, testable `src/policy.js` module models context switching and field-level visibility. It is not connected to the mockup yet.

## Trust boundary

Visibility filtering on a client is **not access control**. In a real system, server-side authorization must enforce audience permissions before sending data. Never send private fields to unauthorized clients. Authentication, encrypted storage, audit logs, GDPR data subject rights and integration consent are future requirements.

## Next implementation

Build a React UI consuming this domain model, then design a server-side authorization layer with negative access tests. Avoid collecting real personal data until a privacy and security review is complete.
