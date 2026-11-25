import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 135 chars, under the 160-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "All servers are down. I do not know why yet, the dashboard is also down, and I am refreshing the same error page like it owes me money.");
