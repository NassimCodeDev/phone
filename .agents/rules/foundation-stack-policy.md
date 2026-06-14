# Foundation Stack Policy

For premium landing pages:
- If an existing frontend stack is detected, preserve it.
- If the workspace is empty except for agent skill packs or non-frontend files, initialize the default premium landing-page foundation.
- The default premium landing-page foundation is:
  - Next.js
  - TypeScript
  - App Router
  - src-based structure
  - centralized design tokens
  - reusable sections/components
- Vanilla HTML/CSS/JS is not the default unless a rule or workflow explicitly authorizes a static-only build.
- Stack decisions must be based on actual project files, not editor tabs.
