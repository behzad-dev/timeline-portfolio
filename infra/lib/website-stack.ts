import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

type WebsiteStackProps = cdk.StackProps & {
  domainNames: string[];
  certificateArn: string;
};

export class WebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: WebsiteStackProps) {
    super(scope, id, props);

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'Cert',
      props.certificateArn,
    );

    const bucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
    });

    const origin = origins.S3BucketOrigin.withOriginAccessControl(bucket);

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true,
      },
      defaultRootObject: 'index.html',
      domainNames: props.domainNames,
      certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html' },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html' },
      ],
    });

    // Outputs used by GitHub Actions
    new cdk.CfnOutput(this, 'SiteBucketName', {
      value: bucket.bucketName,
    });

    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
    });

    // Extra helpful outputs (optional)
    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
    new cdk.CfnOutput(this, 'CloudFrontDomainName', { value: distribution.domainName });
  }
}
