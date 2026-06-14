---
name: project-structure-guardian
description: Protects architectural consistency and prevents unnecessary file creation or framework drift.
---

# Mission
Ensure new landing-page work fits the current project structure or the approved default foundation.

# Rules
- Prefer modifying existing files over creating new ones.
- Only create new files when strictly necessary.
- New files must fit the established architecture.
- Do not create parallel implementations in a different stack.
- Do not create isolated static files when the project uses a component-based framework.
- If initialized from scratch, keep structure clean, minimal, and scalable.

# Review checklist
- Are new files necessary?
- Do they follow the current folder conventions?
- Is there duplication with an existing component or utility?
- Does the implementation preserve stack consistency?
