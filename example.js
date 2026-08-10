/**
 * DirtyDialogues API — Mass-DM Campaign Example
 * ---------------------------------------------
 * Demonstrates the core "onlyfans mass dm automation" pattern:
 * send a TARGETED mass-DM campaign to a segment of fans through the
 * DirtyDialogues chatting / mass-DM API.
 *
 * This is an EXAMPLE integration. The endpoint path and the request /
 * response shapes below are PLACEHOLDERS — confirm the real ones in the
 * live reference before using this in production:
 *   https://dirtydialogues.com/docs
 *
 * An API key is REQUIRED to run this example.
 *   -> Get yours at https://dirtydialogues.com
 *
 * Run:
 *   npm install
 *   cp .env.example .env      # then fill in API_KEY + BASE_URL
 *   node send-mass-dm.js
 *
 * Requires Node.js 18+ (uses the built-in global fetch).
 */

import 'dotenv/config';

// --- Configuration (loaded from environment) ------------------------------
const API_KEY = process.env.API_KEY;
// BASE_URL is a PLACEHOLDER host — confirm the correct one in the docs.
const BASE_URL = process.env.BASE_URL || 'https://api.dirtydialogues.com';

if (!API_KEY) {
  console.error(
    'Missing API_KEY. Get one at https://dirtydialogues.com and add it to your .env file.'
  );
  process.exit(1);
}

// --- Campaign definition --------------------------------------------------
// A targeted mass-DM campaign = WHO to reach (audience) + WHAT to send
// (message). The `audience` block is how you target a subset of fans
// instead of messaging everyone. All field names here are ILLUSTRATIVE —
// verify the real targeting/message schema in the docs.
const campaign = {
  name: 'Weekly promo — returning subscribers',
  audience: {
    // Example targeting filters (placeholders):
    tags: ['subscriber', 'high-engagement'],
    lastActiveWithinDays: 30,
  },
  message: {
    // Plain-text campaign copy. Personalization tokens like {{first_name}}
    // are shown for illustration; confirm supported tokens in the docs.
    text:
      'Hey {{first_name}}, thanks for being here! New content just dropped — ' +
      'reply MENU to see what is available.',
  },
  // Send now (null), or pass an ISO 8601 timestamp to schedule for later.
  sendAt: null,
};

// --- Send the campaign ----------------------------------------------------
async function sendMassDmCampaign() {
  // TODO: replace with the real endpoint from https://dirtydialogues.com/docs
  const endpoint = `${BASE_URL}/v1/campaigns/mass-dm`; // PLACEHOLDER path

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      // Auth scheme shown as a common default; confirm it in the docs.
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(campaign),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Request failed (${response.status}): ${detail}`);
  }

  // NOTE: the response shape is defined by the LIVE API. Do not assume any
  // particular fields exist — inspect the real payload and read the docs:
  //   https://dirtydialogues.com/docs
  return response.json();
}

sendMassDmCampaign()
  .then((result) => {
    console.log('Campaign submitted. Raw API response:');
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.error('Failed to send mass-DM campaign:', err.message);
    process.exit(1);
  });
