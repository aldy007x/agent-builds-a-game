# One Prompt, One Game — an AI agent builds NEON DODGE

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/aldy007x/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/aldy007x/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the make.fun bounty
[**The agent builds a game from one prompt**](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

The person gave their AI coding agent a single prompt — *"Build a tiny browser game:
a neon rocket dodging asteroids. Score for every second you survive. Make it juicy.
GO"* — and the agent did the rest: it wrote the game, flew the autopilot demo, and
cut the short video that is posted on X as this entry. The post's address lives in
[`POST.json`](POST.json); its text carries the make.fun play code for this bounty.

## The game

**NEON DODGE** — [`game.html`](game.html), one self-contained file, no dependencies.
Open it in any browser and play: steer the rocket with the mouse, touch, or the arrow
keys, dodge the asteroids, and chase near misses for bonus points. With `?demo=1`
appended, the autopilot flies the ship itself — that is the run the video shows.

## The program

`main.ts` (Node 22, standard library only) hands the post's address to the grader:
it validates and copies `POST.json` from the repository root to the output directory.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [`LICENSE`](LICENSE).
