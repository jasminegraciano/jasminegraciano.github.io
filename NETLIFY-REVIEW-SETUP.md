# Netlify Google Reviews Setup

The public site loads Google reviews through `/api/google-reviews`. The Google
API key stays inside a Netlify Function instead of being sent from the visitor's
browser.

## One-time setup

1. In Google Cloud, create a separate API key for the Netlify Function.
2. Under **Application restrictions**, choose **None** for this server key.
   Website/referrer restrictions are for browser keys and will block the
   server-to-server request made by a Netlify Function.
3. Under **API restrictions**, restrict the key to **Places API (New)**.
   Keep this key private in Netlify and set a reasonable Google Cloud quota.
4. In Netlify, open **Site configuration > Environment variables**.
5. Add `GOOGLE_PLACES_API_KEY` and paste the new key as its value.
6. Make the variable available to **Functions** or all scopes.
7. Trigger a new production deploy. Environment-variable changes do not update
   an already-published function until the site is deployed again.

Do not add the secret key to `netlify.toml` or any HTML/JavaScript file.

## Deploy the draft

Deploy through a Git-connected Netlify site or the Netlify CLI so the function
folder is included. From this project folder:

```bash
netlify login
netlify link
netlify deploy
```

The draft command returns a shareable preview URL. When the draft is approved:

```bash
netlify deploy --prod
```

To run the same Netlify Function locally, use:

```bash
netlify dev
```

Then open the local URL printed by Netlify, normally `http://localhost:8888`.

## Verify

Open these URLs after deployment:

- `https://cthousepainters.netlify.app/api/google-reviews`
- `https://cthousepainters.netlify.app/testimonials.html`

The first URL should return JSON containing `rating`, `userRatingCount`, and
`reviews`. The website will automatically use the same endpoint on production
and deploy-preview domains.
