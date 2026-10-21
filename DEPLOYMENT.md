# Motionionary deployment

The site is a statically exported Next.js app deployed to the existing Cloudflare Pages project `motionionary` at <https://motionionary.pages.dev/>.

## GitHub Actions

`.github/workflows/pages-deploy.yml` runs `npm ci` and `npm run build` for pull requests and pushes to `main`. Pull requests only build the site; a push to `main` (or a manually started run on `main`) deploys the generated `out/` folder to Cloudflare Pages.

Production deployment is enabled in the public GitHub repository:

1. The repository secret `CLOUDFLARE_API_TOKEN` is configured with the Cloudflare Pages-only token. The same token is retained in the local macOS Keychain for manual deployments; do not add it to source files or workflow YAML.
2. Push a commit to `main`, or manually run **Motionionary Pages** from the Actions tab while `main` is selected.

The Cloudflare account ID and Pages project name are already set in the workflow. Use an appropriately expiring token and rotate it on a regular schedule. The temporary token used for the first manual production upload was revoked and must not be reused.

Pull requests run the build only. Production deploys run from `main` using the protected repository secret.
