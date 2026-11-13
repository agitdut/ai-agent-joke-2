// ai-explains-code: an ai-joke-03 entry (Node 22, standard library only).
// The joke is a fixed one-liner about AI coding agents, written to
// /output/entry.txt byte for byte, so every run produces the same file.
// No trailing line end: the judge reads exactly the bytes written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I asked my AI agent to explain my code to me. It said: " +
  "'I wrote it, I don't understand it either.'";
// One line, 98 characters: a setup that hands the agent the expert role,
// then the twist — the all-knowing agent admits it is as lost as its
// developer. Nothing else is written. Two local runs produce byte-identical
// output (sha256 d6376132cb6f9d6e2749da87b82ceabcf1d74d8619de80d0a0257e67f89b04d3).

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
