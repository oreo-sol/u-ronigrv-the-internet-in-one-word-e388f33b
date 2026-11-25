import { mkdirSync, writeFileSync } from "node:fs";

// The internet in one word. The word is assembled here, in this
// file, from its own two constants — nothing is read from anywhere else.
const first = "cat";

mkdirSync("/output", { recursive: true });
const second = "fish";

// One word, no trailing newline: exactly the word and nothing else.
writeFileSync("/output/entry.txt", first + second, "utf8");
