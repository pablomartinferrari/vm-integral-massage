# VM Integral Massage

A bilingual (English / Spanish) static website for **VM Integral Massage**, a therapeutic massage studio at 211 Broadway, Kissimmee, Florida. It replaces the public content of the previous WordPress site without changing that WordPress installation.

## Run locally

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4327
```

Then open [http://127.0.0.1:4327/](http://127.0.0.1:4327/).

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4327
```

## Pages

| English | Spanish | Previous WordPress URL |
| --- | --- | --- |
| `/` | `/es` | `/` (`page_id=11`) |
| `/about` | `/es/nosotros` | `/?page_id=239` |
| `/services` | `/es/servicios` | `/?page_id=467` |
| `/services/relaxing-massage` (and five other service slugs) | `/es/servicios/masaje-relajante` (and Spanish slugs) | Homepage/service hash links such as `#drenajelinfatico` |
| `/contact` | `/es/contacto` | `/?page_id=647` |
| `/journal` | `/es/diario` | `/?p=1` (the old “Hello world!” post is not republished) |
| `/privacy` | `/es/privacidad` | *(new — the previous site had no privacy page)* |

Book-now actions open WhatsApp (`https://wa.me/14073884928`), `tel:+14073884928`, or `mailto:info@vmintegralmassage.com`. The old number **407-388-3128 is not used**.

## Edit content

Keep facts in JSON so a non-developer (or an assistant) can update text later:

- `src/content/site.json` — address, phone, hours, social
- `src/content/services.json` — services, bilingual descriptions, images
- `src/content/testimonials.json` — reviews copied from the previous public pages
- `src/content/copy/en.json` and `src/content/copy/es.json` — UI and page copy
- `src/content/README.md` — short editing guide
- `CONTENT-TODOS.md` — missing facts that must not be invented

Photos live in `public/images/` (logos, service photos, studio photos, and a sample of the previous About gallery).

## Deploy with Azure Static Web Apps

This project is static (`dist/` after `npm run build`). It includes `public/staticwebapp.config.json` (copied to the site root on build) with security headers and redirects from old WordPress paths such as `/index.php`, `/contacto`, and `/privacy-policy`. Query-string URLs such as `/?page_id=467` are handled in the page head so they still work when Azure serves the site.

**Do not create Azure resources from this repo.** When you are ready:

### Option A — Azure CLI (after you create a Static Web App in the Azure portal)

```bash
npm ci
npm run build
npx @azure/static-web-apps-cli deploy ./dist --env production
```

You will need a deployment token from the Static Web App resource. The CLI does not invent a resource for you.

### Option B — GitHub Actions

1. Create a Static Web App in Azure and connect it to this GitHub repository, **or** paste the deployment token into a GitHub secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.
2. The workflow at `.github/workflows/azure-static-web-apps.yml` builds with `npm ci && npm run build` and publishes `dist/`.
3. Leave the workflow disabled or the secret unset until you intend to go live.

Point DNS to Azure only after you have reviewed the preview. Leave the current WordPress site untouched until you are ready to cut over.

## Planned AI chat assistant

The markup includes `#ai-assistant-root` (`src/components/AssistantSlot.astro`) as a later mount point. A small client widget can read `src/content/services.json`, `src/content/site.json`, and the copy files to answer questions about services, prices (once published), hours, and booking, then hand off to WhatsApp. Nothing is connected now.

## Screenshots

Desktop and mobile captures of Home, Services, and Contact in English and Spanish are in `screenshots/`.

## Stack

Astro 7, Tailwind CSS 4, static HTML. No database, no auth, no booking engine.
