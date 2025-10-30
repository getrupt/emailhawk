# Automatic Deployment Setup Guide

This repository is configured with automatic deployments to Fly.io when pull requests are merged to the `main` branch.

## GitHub Actions Workflows

Three workflows have been set up:

1. **API Deployment** (`deploy-api.yml`) - Deploys the `api/` directory to `emailhawk`
2. **App Deployment** (`deploy-app.yml`) - Deploys the `app/` directory to `app-morning-sunset-9817`
3. **Marketing Deployment** (`deploy-marketing.yml`) - Deploys the `marketing/` directory to `marketing-weathered-fog-3274`

Each workflow:
- Triggers automatically when changes are pushed to `main` (including PR merges)
- Only deploys when files in its respective directory are modified
- Uses Fly.io's remote builder for faster builds

## Required Setup

### 1. Get Your Fly.io API Token

Run the following command in your terminal:

```bash
flyctl auth token
```

This will output your Fly.io API token. Keep it secure!

### 2. Add the Token to GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FLY_API_TOKEN`
5. Value: Paste your Fly.io API token from step 1
6. Click **Add secret**

### 3. Test the Deployment

Once the secret is added, you can test the deployment by:

1. Making a small change to any file in `api/`, `app/`, or `marketing/`
2. Creating a pull request
3. Merging the pull request to `main`
4. Check the **Actions** tab in GitHub to see the deployment progress

## How It Works

- **Path Filtering**: Each workflow only triggers when files in its specific directory change
- **Remote Building**: The `--remote-only` flag ensures builds happen on Fly.io's servers
- **Smart Deploys**: Only the modified app(s) will be deployed, not all three

## Deployment Apps

| Directory | Fly.io App Name | Workflow File |
|-----------|----------------|---------------|
| `api/` | `emailhawk` | `deploy-api.yml` |
| `app/` | `app-morning-sunset-9817` | `deploy-app.yml` |
| `marketing/` | `marketing-weathered-fog-3274` | `deploy-marketing.yml` |

## Troubleshooting

### Deployment fails with "unauthorized"
- Verify the `FLY_API_TOKEN` secret is set correctly in GitHub
- Check that your token hasn't expired by running `flyctl auth whoami`

### Deployment doesn't trigger
- Ensure your changes are merged to the `main` branch
- Check if your changes are in the correct directory path
- Look at the workflow file's `paths:` filter to confirm it includes your changed files

### Check deployment status
- Visit the **Actions** tab in your GitHub repository
- Or check Fly.io dashboard: https://fly.io/dashboard

## Manual Deployment

If you need to deploy manually:

```bash
# For API
cd api && flyctl deploy

# For App
cd app && flyctl deploy

# For Marketing
cd marketing && flyctl deploy
```

