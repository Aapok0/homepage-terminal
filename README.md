# homepage-terminal

Preact-based terminal homepag/CV. Explore file systems and run commands.

## Setup

**Prerequisites:** Node.js 18+, pnpm

```bash
pnpm install
```

## Development

Start the dev server with hot reload:

```bash
pnpm dev
```

Opens at `http://localhost:5173`

## Building

Create an optimized production build:

```bash
pnpm build
```

Output goes to `dist/`

Preview the build locally:

```bash
pnpm preview
```

## Project Structure

- `src/app.tsx` — Main terminal component
- `src/components/` — Terminal UI pieces (input, output, prompt)
- `src/commands/` — Command handlers (builtins, system, easter eggs)
- `src/fs/` — Virtual file system
- `src/terminal/` — State management, parsing, execution

## Tech Stack

- **Frontend:** Vite + Preact (Signals)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **State:** Preact Signals (no hooks)
- **Package Manager:** pnpm

## Testing

Run TypeScript type checking:

```bash
pnpm build  # includes tsc -b
```

No unit test runner configured yet. Manual testing via `pnpm dev`.
