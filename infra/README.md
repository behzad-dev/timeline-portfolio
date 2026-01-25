# Infra (CDK)

This folder contains the AWS CDK (TypeScript) code that creates the infrastructure for the portfolio site: S3 + CloudFront + domain + certificate.

## What this creates

- S3 bucket for static website files
- CloudFront distribution in front of the bucket
- Domain + SSL certificate (ACM) for HTTPS

## Prerequisites

- AWS CLI configured (`aws configure`)
- Node.js installed
- Permissions to deploy CDK stacks in your AWS account

## Install

From repo root:

- cd infra
- npm install

## Deploy

First time (or if CDK was never bootstrapped in this account/region):

- npx cdk bootstrap

Deploy the infrastructure:

- npx cdk deploy

## Useful commands

Run these from inside `infra`:

- npx cdk diff (see changes before deploying)
- npx cdk synth (generate CloudFormation template)
- npx cdk destroy (delete the stack)

## Notes

- CloudFront needs the SSL certificate in `us-east-1` (that’s normal for CloudFront).
- After infra is deployed, the website content upload is handled by GitHub Actions (main README explains it).
