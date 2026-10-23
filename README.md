# Ronan's portfolio

A simple personal portfolio built with React, TypeScript, and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the contents of the generated `dist` folder to Hostinger's `public_html` directory.

## Automatic deployment to Hostinger

The GitHub Actions workflow in `.github/workflows/deploy-hostinger.yml` builds and deploys the site whenever a commit is pushed to `main`. It can also be run manually from the repository's **Actions** tab.

The deployment uses SSH and `rsync`, so the Hostinger plan must include SSH access (Premium Web Hosting or higher). In Hostinger, enable SSH under **Websites → Dashboard → Advanced → SSH Access**.

### 1. Create a deployment key

Create a dedicated key on your computer. Keep it outside this repository:

```bash
ssh-keygen -t ed25519 -C "github-actions-hostinger" -f ~/.ssh/hostinger_github_actions
```

Add the contents of `~/.ssh/hostinger_github_actions.pub` to Hostinger under **SSH Access → SSH keys**.

### 2. Add GitHub Actions secrets

In the GitHub repository, open **Settings → Secrets and variables → Actions → Secrets** and add:

| Secret | Value |
| --- | --- |
| `HOSTINGER_HOST` | The IP address or hostname shown in Hostinger's SSH Access page |
| `HOSTINGER_USERNAME` | The SSH username shown in Hostinger |
| `HOSTINGER_SSH_PRIVATE_KEY` | The complete contents of `~/.ssh/hostinger_github_actions`, including the BEGIN/END lines |
| `HOSTINGER_SSH_KNOWN_HOSTS` | The output of `ssh-keyscan -p 65002 HOSTINGER_HOST` |

For better host verification, connect to Hostinger once from your computer and confirm the displayed fingerprint before saving the `ssh-keyscan` output.

### 3. Add GitHub Actions variables

On the same page, open **Variables** and add:

| Variable | Value |
| --- | --- |
| `HOSTINGER_DEPLOY_PATH` | The absolute path to the site's `public_html` folder, such as `/home/u123456789/domains/example.com/public_html` |
| `HOSTINGER_PORT` | Optional. Hostinger web/cloud hosting normally uses `65002`; VPS hosting normally uses `22`. |

After these settings are saved, push a commit to `main`. The workflow installs dependencies with `npm ci`, runs `npm run build`, and uploads the contents of `dist` to the configured directory.

The deployment intentionally does not delete files already on the server. This protects Hostinger-managed files and anything else in `public_html`; old hashed Vite assets may remain and can be cleaned up separately if needed.
