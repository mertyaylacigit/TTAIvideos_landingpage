# AI Video Creator landing page

Fully static, Cloudflare Pages-ready landing page for the AI Video Creator free blueprint. It uses HTML, CSS and vanilla JavaScript only; there is no backend, build server, database, API key or runtime environment variable.

## Run locally

Open `index.html` directly, or serve the folder with any static server, for example `python3 -m http.server 8080`. The output directory is the repository root (`/`). No build command is required.

## Kit setup

1. Create a Kit form and confirm its public form ID.
2. In `script.js`, replace `YOUR_KIT_FORM_ID` in `KIT_FORM_ID`.
3. Optionally set `VSL_URL` to the absolute or relative URL of your VSL.

The page submits to Kit's public form subscription endpoint. A successful `fetch` response is used as the success callback; only then will a configured `VSL_URL` redirect occur. If you prefer Kit's hosted confirmation page, leave `VSL_URL` empty and configure the confirmation behavior inside Kit. No Kit API secret belongs in this repository.

The marketing consent checkbox is separate and unchecked by default. The free blueprint signup remains available without opting into additional promotional emails. Confirm your Kit form and account settings match your consent and privacy requirements before launch.

## Cloudflare Pages

Create a Pages project connected to this repository with:

- Build command: leave blank (or `exit 0`)
- Build output directory: `/` (the repository root)
- Root directory: `/`

Relative asset paths are used and there is no server-dependent routing. `privacy.html` and `legal.html` are intentional placeholders: replace them with your reviewed policy and legal notice before publishing. Update the title, description and social metadata in `index.html` if your brand/domain changes.
