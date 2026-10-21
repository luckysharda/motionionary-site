# Motionionary deployment

The site is a statically exported Next.js app deployed to the existing Cloudflare Pages project `motionionary` at <https://motionionary.pages.dev/>.

## GitHub Actions

`.github/workflows/pages-deploy.yml` runs `npm ci` and `npm run build` for pull requests and pushes to `main`. Pull requests only build the site; a push to `main` (or a manually started run on `main`) deploys the generated `out/` folder to Cloudflare Pages.

To activate production deployment in the public GitHub repository:

1. In the repository, open **Settings → Secrets and variables → Actions → New repository secret**.
2. Add `CLOUDFLARE_API_TOKEN` with a Cloudflare API token restricted to the account's **Cloudflare Pages → Edit** permission. Keep the token in GitHub's secret store; do not add it to source files or workflow YAML.
3. Push a commit to `main`, or manually run **Motionionary Pages** from the Actions tab while `main` is selected.

The Cloudflare account ID and Pages project name are already set in the workflow. Use an appropriately expiring token and rotate it on a regular schedule. The temporary token used for the first manual production upload was revoked and must not be reused.

Pull requests run the build only. Production deploys run from `main` after the repository secret is configured.
