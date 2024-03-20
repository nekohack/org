# org

This repository is the source code for nekohack inc. website.

## Setup

```bash
# yarn
yarn
```

### Development

```bash
# company-app

# company-legacyapp
cp apps/company-legacyapp/.env.example apps/company-legacyapp/.env
yarn nx run company-legacyapp:css

# portfolio-app (App Router)

# portfolio-legacyapp (Page Router)
cp apps/portfolio-legacyapp/.env.example apps/portfolio-legacyapp/.env
yarn nx run portfolio-legacyapp:css
```

You can be launched

```bash
# company-app

# company-legacyapp
yarn nx run company-legacyapp:serve

# portfolio-app (App Router)
yarn nx run portfolio-app:serve

# portfolio-legacyapp (Page Router)
yarn nx run portfolio-legacyapp:serve
```

## Skills

- [Next.js](https://nextjs.org/)
- [Next.js (PWA)](https://nextjs.org/)
- [AWS CDK](https://aws.amazon.com/jp/cdk/)
- [AWS S3](https://aws.amazon.com/jp/s3/)
- [AWS CloudFront](https://aws.amazon.com/jp/cloudfront/)
- [Github Actions](https://docs.github.com/ja/actions/language-and-framework-guides/using-nodejs-with-github-actions)
