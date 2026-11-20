# Editing site content

Non-developers can update copy without touching page layouts.

| File | What it holds |
| --- | --- |
| `site.json` | Phone, WhatsApp, email, address, hours, social links |
| `services.json` | Service names, descriptions, images, slugs (English and Spanish) |
| `testimonials.json` | Reviews copied from the previous public website |
| `copy/en.json` | English interface and page text |
| `copy/es.json` | Spanish interface and page text |

After editing JSON, run `npm run build` (or keep `npm run dev` running) to see changes.

Do not invent prices, hours, or credentials. If a fact is unknown, keep the `TODO` wording already in the copy files.
