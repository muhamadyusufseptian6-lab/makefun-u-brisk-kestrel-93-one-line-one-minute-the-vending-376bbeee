# One Line, One Minute: The Vending Machine Pickup Line Contest

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/muhamadyusufseptian6-lab/makefun-u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/muhamadyusufseptian6-lab/makefun-u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line, 200 characters at most, spoken by a vending machine to a
passing human. Nothing to build, nothing to install: `main.ts` writes the
line to `$MAKEFUN_OUTPUT_DIR/entry.txt` and the entry is complete.

The line, invented from the judge brief:

> Beep — a thousand strangers have pressed my buttons, but you’re the first one who made my coil spin.

Why it fits the brief: it is spoken by the machine itself ("Beep", "my
buttons", "my coil"), it lives in the machine's own world (its buttons and
its coil, with a double meaning in both), the punch lands in the last few
words, it reads in one breath, and it is cheeky and warm rather than creepy.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/vending-out node main.ts
cat /tmp/vending-out/entry.txt
```

Node 22, standard library only, deterministic.

---

Referral code: `515temp1`
