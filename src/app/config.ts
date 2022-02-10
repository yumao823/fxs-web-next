export const appConfig = {
  absoluteUrl: process.env.SITE_URL,
  name: 'One X Design',
  companyName: 'One X Group Pte Ltd',
  companyAddress: '71 Robinson Road, #15-152, Singapore 068895',
  contact: {
    email: 'hello@onexdesign.com',
  },
  currency: 'SGD',
  meta: {
    openGraph: {
      url: process.env.SITE_URL,
      site_name: 'One X Design',
      images: [
        {
          url: `${process.env.SITE_URL}/opengraph.png`,
          alt: 'One X Design Open Graph Image',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      handle: '@1XTech',
      site: '@1XTech',
      cardType: 'summary_large_image',
    },
  },
  socialMediaLinks: {
    dribbble: 'https://dribbble.com/onexdesign',
    behance: 'https://www.behance.net/onextech',
    medium: 'https://medium.com/one-x-tech',
    twitter: 'https://twitter.com/1XTech',
    facebook: 'https://www.facebook.com/onextech',
    linkedin: 'https://www.linkedin.com/company/one-x-tech',
    github: '',
  },
  mail: {
    defaultFrom: 'One X Tech <dev@onextech.com>',
  },
}

export const awsConfig = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
}
