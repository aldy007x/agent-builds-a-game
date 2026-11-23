// Entry program for the make.fun bounty
// "post-x-the-agent-builds-a-game-from-20261122-1709" (Node 22, standard library only).
//
// The entry itself is a post on X: a short video of an AI coding agent building the
// tiny browser game that ships in this repository (game.html), posted natively as a
// video with the bounty's play code in its text. This program's whole job is to hand
// the gate the post's address: it copies POST.json from the repository root into the
// output directory, where the grader reads it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success, and two runs write exactly the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postFile = join(botDir, 'POST.json');

// Read the file before copying, so a missing or malformed POST.json fails here with
// a clear message instead of handing the gate a file it cannot use.
let postText: string;
try {
  postText = readFileSync(postFile, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${postFile}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(postText);
} catch {
  console.error('POST.json is not valid JSON.');
  process.exit(1);
}

const url = (post as { url?: unknown })?.url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json must carry the post address in a non-empty "url" string.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, 'POST.json'));
