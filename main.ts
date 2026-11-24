import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Everything is down, including the dashboard that would tell you what is down. I cannot check the servers because the servers are the thing that is down.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
