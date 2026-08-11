# OnlyFans Mass-DM Automation — Example (DirtyDialogues API)

A minimal, open-source **example integration** that shows how to send a
**targeted mass-DM campaign to fans** using the **DirtyDialogues chatting /
mass-DM API**.

If you run or build tooling for an OnlyFans management agency and you're
evaluating **mass DM automation** — sending targeted messages to *segments* of
fans programmatically instead of copy-pasting by hand — this repo shows the API
request pattern end to end, in one small, readable file.

> Searching for an **"onlyfans mass message bot"**? This is the developer-facing,
> API-based approach: a clean reference for calling the DirtyDialogues messaging
> API from your own backend or automation, rather than an unofficial browser
> script. It's a starting point you can read, adapt, and wire into your stack.

**→ Get your API key at [dirtydialogues.com](https://dirtydialogues.com)** — an
API key is required to run this example.

---

## What it does

- Reads your DirtyDialogues **API key** from an environment variable.
- Builds a **targeted mass-DM campaign**: an audience filter (tags, recent
  activity) plus the message copy.
- Sends that campaign to the DirtyDialogues API with a single `POST`.
- Prints the raw API response so you can see exactly what came back.

The whole flow lives in one file — [`send-mass-dm.js`](./send-mass-dm.js) — so
it's easy to read and drop into your own project.

## Why — the agency use-case

OnlyFans management agencies message large fan lists every day: promo drops,
re-engagement of quiet subscribers, PPV announcements, welcome sequences.
Doing that by hand doesn't scale, and generic "onlyfans mass message bot"
scripts are brittle and hard to audit.

**DirtyDialogues** is a chat / CRM platform creator agencies use to run **fan conversations** at scale. Its
API lets your own tooling drive **mass DM automation** the way you'd integrate
any messaging provider — you keep control of segmentation, copy, and scheduling,
and call a documented endpoint to fan it out. This repo is the smallest useful
example of that integration.

## Requirements

- **Node.js 18+** (uses the built-in `fetch`).
- A **DirtyDialogues API key** → [dirtydialogues.com](https://dirtydialogues.com).

## Install

```bash
git clone https://github.com/your-org/onlyfans-mass-dm-automation-example.git
cd onlyfans-mass-dm-automation-example
npm install
```

## Configure (`.env`)

Copy the example env file and fill in your own values:

```bash
cp .env.example .env
```

```dotenv
# .env
API_KEY=your_dirtydialogues_api_key_here     # get one at https://dirtydialogues.com
BASE_URL=https://api.dirtydialogues.com       # placeholder — confirm in the docs
```

- `API_KEY` — **required.** Your DirtyDialogues API key.
- `BASE_URL` — the API base URL. The value above is a **placeholder**; check the
  live docs for the correct host.

## Usage

Once your `.env` is set:

```bash
node send-mass-dm.js
```

The script (see [`send-mass-dm.js`](./send-mass-dm.js)) defines a sample
campaign — an audience filter plus message text — and posts it to the mass-DM
endpoint. Edit the `campaign` object to change your targeting and copy. The
endpoint path and request/response shapes in the code are marked as
**placeholders**; replace them with the real values from the docs before using
this against production.

## → Get your API key

This example **requires** a DirtyDialogues API key. Create an account and grab
your key here:

**[https://dirtydialogues.com](https://dirtydialogues.com)**

## This is an example — see the live docs

This repository is an **example integration** meant to illustrate the request
pattern. Endpoint paths, field names, and response schemas shown here are
**illustrative placeholders**, not a contract. For the authoritative, live
endpoints and payloads, always refer to the official reference:

**[https://dirtydialogues.com/docs](https://dirtydialogues.com/docs)**

## Compliance note

Only message fans who are your own subscribers and who you're permitted to
contact, and follow the messaging policies of the platform(s) you operate on.
This code is a technical integration example, not messaging or legal advice.

## License

MIT. See [`LICENSE`](./LICENSE).

---

Built to showcase the DirtyDialogues messaging API · [dirtydialogues.com](https://dirtydialogues.com)
