import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/website-stack';

const app = new cdk.App();

const domainNames = app.node.tryGetContext('domainNames') as string[];
const certificateArn = app.node.tryGetContext('certificateArn') as string;

new WebsiteStack(app, 'TimelinePortfolioWebsite', {
  domainNames,
  certificateArn,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
