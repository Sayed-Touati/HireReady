<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Workflow Preferences

- Do not create commits unless the user explicitly asks you to commit.
- When the user asks for a commit message, suggest a clear Conventional Commit-style message.
- Prefer these prefixes when they fit: `feat`, `fix`, `docs`, `refactor`, `hotfix`, `chore`, `style`, `test`, `build`, and `ci`.
- Keep commit messages concise, professional, and specific to the actual diff.
- Use `feat` for user-facing functionality, `fix` for bug fixes, `docs` for documentation-only changes, `refactor` for behavior-preserving code changes, `hotfix` for urgent production fixes, `chore` for project maintenance, `style` for formatting or visual-only changes, `test` for tests, `build` for dependency/build tooling changes, and `ci` for automation workflow changes.
