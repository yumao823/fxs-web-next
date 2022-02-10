const path = require('path')

// eslint-disable-next-line import/no-unresolved
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      'assets.vercel.com',
      `${process.env.aws_user_files_s3_bucket}.s3.${process.env.aws_user_files_s3_bucket_region}.amazonaws.com`,
    ],
  },
  webpack: (config) => {
    /**
     * Missing typescript loader when importing from sibling packages in a mono-repo
     * This fixes the error: Module parse failed: Unexpected token (5:7). You may need an appropriate loader to handle this file type
     * RCA: To fix issue with typescript loader not working when importing from sibling packages in this package when running yarn build
     * Fix: Add sibling package paths into the rule.include array (which contains the paths to apply the loader on)
     */
    // Find rules that includes current directory
    const rulesWithCurrentDir = config.module.rules.filter((rule) => rule.include && rule.include.includes(__dirname))
    // Prepare the sibling package paths that we want to include
    const apiPath = path.resolve(`${__dirname}../../api`)
    const landingPath = path.resolve(`${__dirname}../../material-ui-landing`)
    const siblingPackagePaths = [apiPath, landingPath]
    // Push sibling package paths
    rulesWithCurrentDir.forEach((ruleWithCurrentDir) => ruleWithCurrentDir.include.push(...siblingPackagePaths))

    return config
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
    npm_package_version: process.env.npm_package_version,
    aws_project_region: process.env.aws_project_region,
    aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
    aws_appsync_region: process.env.aws_appsync_region,
    aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
    aws_appsync_apiKey: process.env.aws_appsync_apiKey,
    aws_cognito_identity_pool_id: process.env.aws_cognito_identity_pool_id,
    aws_cognito_region: process.env.aws_cognito_region,
    aws_user_pools_id: process.env.aws_user_pools_id,
    aws_user_pools_web_client_id: process.env.aws_user_pools_web_client_id,
    aws_user_files_s3_bucket: process.env.aws_user_files_s3_bucket,
    aws_user_files_s3_bucket_region: process.env.aws_user_files_s3_bucket_region,
    aws_mobile_analytics_app_id: process.env.aws_mobile_analytics_app_id,
    aws_mobile_analytics_app_region: process.env.aws_mobile_analytics_app_region,
    aws_pinpoint_access_key_id: process.env.aws_pinpoint_access_key_id,
    aws_pinpoint_secret_access_key: process.env.aws_pinpoint_secret_access_key,
    aws_cloud_logic_custom_stripe_endpoint: process.env.aws_cloud_logic_custom_stripe_endpoint,
    aws_cloud_logic_custom_mailgen_endpoint: process.env.aws_cloud_logic_custom_mailgen_endpoint,
    aws_cloud_logic_custom_twilio_endpoint: process.env.aws_cloud_logic_custom_twilio_endpoint,
    aws_cloud_logic_custom_rapyd_endpoint: process.env.aws_cloud_logic_custom_rapyd_endpoint,
  },
})
