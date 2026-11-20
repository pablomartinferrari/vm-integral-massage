# Editing site content

Non-developers can update copy without touching page layouts.

| File | What it holds |
| --- | --- |
| `site.json` | Phone, WhatsApp, email, address, hours, social links |
| `pricing.json` | `showPrices` flag, session/package amounts, first-visit offer, couples, gift cards, payment methods, and Premium Membership. Set `showPrices` to `false` to hide every price. |
| `services.json` | Service names, descriptions, images, slugs (English and Spanish) |
| `testimonials.json` | Reviews copied from the previous public website |
| `copy/en.json` | English interface and page text |
| `copy/es.json` | Spanish interface and page text |

After editing JSON, run `npm run build` (or keep `npm run dev` running) to see changes.

Hours are confirmed in `site.json`. Session and membership amounts in `pricing.json` are owner-provided. Do not invent credentials. If a fact is unknown, keep the `TODO` wording already in the copy files.
