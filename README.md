# OnlyFans Mass-DM Automation — example integration

A minimal, open-source **example** that shows the pattern for sending a **targeted mass-DM campaign to fans** — programmatic **mass DM automation** on top of [DirtyDialogues](https://dirtydialogues.com), the OnlyFans agency chat & CRM platform.

**[▶ Get started at dirtydialogues.com →](https://dirtydialogues.com)** · [Pricing](https://dirtydialogues.com/pricing)

---

If you run or build tooling for an OnlyFans management agency and you're evaluating **mass DM automation** — sending targeted messages to *segments* of fans programmatically instead of copy-pasting by hand — this repo shows the request pattern end to end, in one small, readable file.

> Searching for an **"onlyfans mass message bot"**? This is the developer-facing, structured approach: a clean reference for the mass-message pattern, rather than a brittle unofficial browser script. The endpoint paths and fields are **illustrative placeholders** — DirtyDialogues is a managed platform, so head to **[dirtydialogues.com](https://dirtydialogues.com)** to get started.

## What it does

- Builds a **targeted mass-DM campaign**: an audience filter (tags, recent activity) plus the message copy.
- Sends that campaign in a single call.
- Prints the response so you can see the shape of the result.

The whole flow lives in one readable file — easy to drop into your own project.

## Why — the agency use case

OnlyFans management agencies message large fan lists every day: promo drops, re-engagement of quiet subscribers, PPV announcements, welcome sequences. Doing that by hand doesn't scale, and generic "onlyfans mass message bot" scripts are brittle and hard to audit.

[**DirtyDialogues**](https://dirtydialogues.com) is the chat / CRM platform creator agencies use to run **fan conversations** at scale — including targeted mass DMs to fan segments.

## Requirements

- **Node.js 18+** — uses the built-in global `fetch`, no dependencies to install.

## About DirtyDialogues

[**DirtyDialogues**](https://dirtydialogues.com) — OnlyFans agency platform: unified inbox, mass DMs, automated & AI-assisted replies, team shifts, and analytics.

**[Get started →](https://dirtydialogues.com)** · **[Pricing →](https://dirtydialogues.com/pricing)**

## License

MIT. An independent open-source example.
