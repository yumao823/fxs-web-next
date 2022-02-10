import { appConfig } from './config'

export const setSeoTitle = (title: string): string => `${title} | ${appConfig.name}`

export const seo = {
  home: {
    title: setSeoTitle('UX Design Singapore'),
    description:
      'One X Design is a leading UI UX design agency in Singapore that delivers innovative user experience (UX) design services.',
  },
  about: {
    title: setSeoTitle('About'),
    description:
      'One X Design is a research, design company, user experience agency, innovation design consultant and design firm based in Singapore.',
  },
  product: {
    title: setSeoTitle('Product Design'),
    description:
      'One X Design offers a 4-week Product Design system that guarantees world-class UX and UI product design for customers.',
  },
  contact: {
    title: setSeoTitle('Contact'),
    description:
      'Contact One X Design to discuss your design project, book a complimentary call or just speak with us.',
  },
  work: {
    title: setSeoTitle('Work'),
    description:
      'One X Design works with established companies to optimise their products and help them launch with a competitive edge.',
  },
  pricing: {
    title: setSeoTitle('Pricing'),
    description:
      'Choose from One X Design’s flat pricing plans and access the support our team of talented designers for a wide range of projects',
  },
  cms: {
    title: setSeoTitle('CMS'),
    description: 'This will be the cms page meta description',
  },
}
