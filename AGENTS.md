<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Workflow Preferences

- Do not create commits unless the user explicitly asks you to commit.
- Do not create branches unless the user explicitly asks you to create a branch.
- When the user asks for a branch name, suggest a short, professional, descriptive name using lowercase kebab-case.
- Prefer the common professional `type/short-description` branch convention when it fits, for example `feature/basic-routing`, `fix/login-validation`, `docs/update-readme`, `refactor/auth-flow`, `test/interview-setup`, `chore/dependency-cleanup`, `build/next-config`, or `ci/github-actions`.
- Use branch type prefixes consistently with the commit-message types below. Use `feature` for new user-facing functionality, `fix` for bug fixes, `docs` for documentation-only work, `refactor` for behavior-preserving code changes, `test` for tests, `chore` for maintenance, `build` for dependency/build tooling changes, and `ci` for automation workflow changes.
- Keep branch names specific to the actual work and avoid vague names like `updates`, `changes`, `work`, or `new-branch`.
- When the user asks for a commit message, suggest a clear Conventional Commit-style message.
- Prefer these prefixes when they fit: `feat`, `fix`, `docs`, `refactor`, `hotfix`, `chore`, `style`, `test`, `build`, and `ci`.
- Keep commit messages concise, professional, and specific to the actual diff.
- Use `feat` for user-facing functionality, `fix` for bug fixes, `docs` for documentation-only changes, `refactor` for behavior-preserving code changes, `hotfix` for urgent production fixes, `chore` for project maintenance, `style` for formatting or visual-only changes, `test` for tests, `build` for dependency/build tooling changes, and `ci` for automation workflow changes.
