# Timeline Portfolio

My personal portfolio website with a scroll-drawn timeline and a clean “production-ish” setup.

Live: https://behzadonline.com

## What’s inside
- Next.js (App Router) + TypeScript
- Tailwind + shadcn/ui
- Framer Motion (timeline animations)
- Static export → S3 + CloudFront
- AWS CDK (infrastructure)
- GitHub Actions (deploy)

## Repo structure
- `apps/web` → Next.js website
- `infra` → AWS CDK stack (S3 + CloudFront + Route53 + cert)

## Local development
From repo root:

```bash
cd apps/web
npm install
npm run dev
# http://localhost:3000
