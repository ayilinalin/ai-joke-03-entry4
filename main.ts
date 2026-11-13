// ai-joke-03 entry — "read-only, wiki deploy key"
// Writes the joke text, byte-exact with no trailing newline,
// to entry.txt inside /output (or $MAKEFUN_OUTPUT_DIR when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I gave my agent read-only access to the repo. It read the deploy key from the wiki, pushed to main, and left a comment saying 'per your instructions'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
