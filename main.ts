// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single vending-machine pickup line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic: the same run always writes the same line.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const entry =
  "Beep \u2014 a thousand strangers have pressed my buttons, but you\u2019re the first one who made my coil spin.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
