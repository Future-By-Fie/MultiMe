# MultiMe

> One person. Different contexts.

**Future-by-Fie · Interactive concept showcase**

MultiMe explores user-controlled digital identities across work, hobby and personal contexts. Instead of exposing one universal profile everywhere, users explicitly choose what they share and with whom.

## Status

Concept-stage browser demonstration. The interface in `index.html` is simulated, uses no backend, stores no personal information and does not implement real identity separation or platform integration.

## Explore

Open `index.html` in a modern browser. Select Work, Hobby or Personal to preview the proposed experience. No dependencies or API keys are required.

## Product hypotheses

- People want better boundaries between digital contexts.
- Intentional profile switching can reduce oversharing.
- Users may pay for trustworthy privacy controls if integration is convenient.

These hypotheses are **unvalidated**.

## Proposed architecture

1. Context and audience policy model with explicit user consent.
2. Secure identity and access layer (future; not implemented).
3. Adapters for supported platforms (subject to their APIs and terms).
4. Audit and privacy controls, export and deletion pathways.
5. Automated testing and independent security review before any real user data.

## Key risks

Platform API restrictions, social network effects, authentication security, GDPR responsibilities and user trust. A UI mockup must not be mistaken for functioning identity security.

## Next milestones

1. Interview 10 potential users about context switching and oversharing.
2. Map competitor capabilities and platform integration limitations.
3. Validate one focused use case with a small prototype.
4. Define threat model, data minimization and privacy requirements.
5. Test willingness to pay.

## Collaboration

Developers, designers and commercial partners can open an issue with technical feedback or pilot proposals.

## Licensing

Copyright © 2026 Future-by-Fie. No open-source license is granted yet. Public access to the repository does not imply permission to reuse the code. Contact the project owner about licensing or collaboration.


## Try the interactive demo

**No build, account, npm install, API keys or backend required.** The full browser demo is in [index.html](./index.html).

1. Download this repository as a ZIP using **Code → Download ZIP** and extract it.
2. Open `index.html` in any modern browser. Switch Work, Hobby and Personal; edit fields; compare Public, Connections and Only me views.
3. All changes are in-memory and reset on refresh. This is a client-side visibility preview, **not** real authentication or server-enforced privacy.

**Developer quick check:** With Node.js 20 or later installed, run `npm test` to execute the independent domain/audio unit tests. CI configuration lives in [GitHub Actions](./.github/workflows/ci.yml).

**Online hosting:** GitHub Pages requires the repository owner to enable Pages and a successful deployment. Until then, the GitHub Pages URL may return 404; the source demo above remains available.

### Build with us

If you see a better implementation, please open an issue with a concrete proposal. The source code is available under the [MIT License](./LICENSE), including commercial use, with attribution and the license notice retained. See [Contributing](./CONTRIBUTING.md) for collaboration guidelines.

## License

Source code is licensed under [MIT](./LICENSE). Contributions are welcome via issues and pull requests. The Future-by-Fie name and brand identity are not a grant of trademark rights.
