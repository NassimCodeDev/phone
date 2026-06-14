# Stack Audit and Initialize Workflow

## Goal
Safely determine the correct foundation for a premium landing page.

## Steps
1. Run stack-resolution-agent.
2. Inspect actual project files for framework evidence.
3. If a usable frontend exists:
   - preserve the existing stack
   - identify files to modify
   - continue implementation inside the current architecture
4. If no usable frontend exists:
   - run frontend-foundation-agent
   - initialize Next.js + TypeScript + App Router
   - create the minimal scalable structure
5. Run project-structure-guardian before large file creation.
6. Run library-selection-agent before installing new dependencies.

## Required report before implementation
- actual files detected
- chosen stack
- why that stack is correct
- files to modify
- files to create only if necessary
