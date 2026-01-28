# Timeline Portfolio

My personal portfolio website with a scroll-drawn timeline and a clean “production-ish” setup.

**Live:** https://behzadonline.com

## What’s inside
- Next.js (App Router) + TypeScript
- Tailwind + shadcn/ui
- Framer Motion (timeline animations)
- Static export (`output: export`) → S3 + CloudFront
- AWS CDK (infrastructure)
- GitHub Actions (deploy via OIDC)

## Repo structure
- `apps/web` → Next.js website
- `infra` → AWS CDK stack (S3 + CloudFront + domain + cert)

## Local development (dev server)
From repo root:

- cd apps/web
- npm install
- npm run dev

Then open: http://localhost:3000

## Build + preview the static export (this is what production uses)
Because this project uses `output: export`, **`next start` will NOT work**.

From repo root:

- cd apps/web
- npm run build
- npx serve@latest out

Then open the URL that `serve` prints.

## Deployment (automatic)
This repo deploys automatically via GitHub Actions.

### Triggers
- Push to `main`
- Manual run (`workflow_dispatch`)

### What it does
- Installs dependencies
- Builds the static export
- Syncs `apps/web/out` to S3
- Invalidates CloudFront cache

## Required GitHub settings
GitHub → Settings → Secrets and variables → Actions

### Secrets
- `AWS_ROLE_ARN` = IAM role that GitHub Actions assumes via OIDC

### Variables
- `AWS_REGION` = for example `eu-central-1`
- `CDK_STACK_NAME` = your deployed stack name (example: `TimelinePortfolioWebsite`)

Note: the workflow reads the S3 bucket name + CloudFront distribution id from CDK stack outputs, so you don’t need `S3_BUCKET` or `CLOUDFRONT_DISTRIBUTION_ID` variables anymore.
