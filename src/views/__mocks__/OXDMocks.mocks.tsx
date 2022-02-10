import { ImageProps } from 'next/image'
import { ButtonProps } from '@mui/material'
import { routes } from '../../app/routes'
import {
  flatlay_iix_dash_image,
  flatlay_mbk_image,
  flatlay_mtj_image,
  flatlay_nkk_image,
  flatlay_nxg_image,
  flatlay_sim_image,
  flatlay_sri_auto_image,
  flatlay_sri_op_image,
  meeting_sticky_notes_image,
  review_avatar_1_image,
  review_avatar_2_image,
  review_avatar_3_image,
  table_documents_image,
  wavy_bookshelves_image,
  work_iix_card_image,
  work_iix_gallery_1_image,
  work_iix_gallery_2_image,
  work_iix_gallery_3_image,
  work_iix_gallery_4_image,
  work_iix_hero_image,
  work_iix_tall_1_image,
  work_iix_tall_2_image,
  work_mbk_card_image,
  work_mbk_gallery_1_image,
  work_mbk_gallery_2_image,
  work_mbk_gallery_3_image,
  work_mbk_gallery_4_image,
  work_mbk_hero_image,
  work_mbk_tall_1_image,
  work_mbk_tall_2_image,
  work_otf_card_image,
  work_otf_gallery_1_image,
  work_otf_gallery_2_image,
  work_otf_gallery_3_image,
  work_otf_gallery_4_image,
  work_otf_hero_image,
  work_otf_tall_1_image,
  work_otf_tall_2_image,
  work_sri_card_image,
  work_sri_gallery_1_image,
  work_sri_gallery_2_image,
  work_sri_gallery_3_image,
  work_sri_gallery_4_image,
  work_sri_hero_image,
  work_sri_tall_1_image,
  work_sri_tall_2_image,
} from '../../app/images'

export interface CaseStudyItem {
  href: string
  image: ImageProps
  title: string
  slug: string
  subtitle: string

  hero: {
    overline: string
    title: string
    subtitle: string
    image: ImageProps
  }
  talls: Array<{
    overline: string
    title: string
    subtitle: string
    image: ImageProps
  }>
  gallery: {
    overline: string
    title: string
    subtitle: string
    images: ImageProps[]
  }
}

export const mockCaseStudies: CaseStudyItem[] = [
  {
    href: `${routes.WORK}/sri`,
    image: work_sri_card_image,
    title: 'Singapore Realtors Inc',
    slug: 'sri',
    subtitle: 'Real Estate',

    hero: {
      overline: 'Real Estate Platform',
      title: "Singapore Realtor's Inc",
      subtitle: 'Dare to Be Different.',
      image: work_sri_hero_image,
    },
    talls: [
      {
        overline: 'About',
        title: 'Meet SRI',
        subtitle:
          'As one of the top Real Estate Agency in Singapore, SRI stands out by championing the experience of both its clients and realtors as what matters most.',
        image: work_sri_tall_1_image,
      },
      {
        overline: 'The Crux',
        title: "It's all about the experience",
        subtitle:
          'A titan in the business with over 10 years under their belt, we use clean and diverse designs to propel the vision of SRI to the forefronts of Real Estate in Singapore.',
        image: work_sri_tall_2_image,
      },
    ],
    gallery: {
      overline: 'Our Take',
      title: 'Fresh. Bold. Modern',
      subtitle: 'Let your site convey your promise.',
      images: [work_sri_gallery_1_image, work_sri_gallery_2_image, work_sri_gallery_3_image, work_sri_gallery_4_image],
    },
  },
  {
    href: `${routes.WORK}/octifi`,
    image: work_otf_card_image,
    title: 'OctiFi',
    slug: 'octifi',
    subtitle: 'Buy Now Pay Later',

    hero: {
      overline: 'Fintech Platform',
      title: 'Octifi',
      subtitle: 'Shop Now. Pay Later.',
      image: work_otf_hero_image,
    },
    talls: [
      {
        overline: 'About',
        title: 'Meet Octifi',
        subtitle:
          'Enjoy true credit with Singapore’s first Pay later credit card by paying in installments with no extra charges.',
        image: work_otf_tall_1_image,
      },
      {
        overline: 'The Crux',
        title: 'Shop Now. Pay Later.',
        subtitle:
          'Using fresh and exciting designs to convey the groundbreaking nature of a revolutionary product that customers will ever need. ',
        image: work_otf_tall_2_image,
      },
    ],
    gallery: {
      overline: 'Our Take',
      title: 'Conversion',
      subtitle: 'Let your site convert visitors into loyal customers',
      images: [work_otf_gallery_1_image, work_otf_gallery_2_image, work_otf_gallery_3_image, work_otf_gallery_4_image],
    },
  },
  {
    href: `${routes.WORK}/mr-bucket`,
    image: work_mbk_card_image,
    title: 'Mr. Bucket',
    slug: 'mr-bucket',
    subtitle: 'Chocolaterie E-Commerce',

    hero: {
      overline: 'E-Commerce Platform',
      title: 'Mr. Bucket',
      subtitle: 'Chocolaterie E-Commerce',
      image: work_mbk_hero_image,
    },
    talls: [
      {
        overline: 'About',
        title: 'Meet Mr. Bucket',
        subtitle: 'Explosion of chocolatey-goodness with every bite into these delightfully hand-crafted bon-bons.',
        image: work_mbk_tall_1_image,
      },
      {
        overline: 'The Crux',
        title: 'Where Modern Design meets History',
        subtitle:
          'A family-run business of 120 years, we complement this history with elegant designs which showcase the bold and fresh take Mr. Bucket has on chocolate treats.',
        image: work_mbk_tall_2_image,
      },
    ],
    gallery: {
      overline: 'Our Take',
      title: 'Fresh. Bold. Modern',
      subtitle: 'Let your site convey the whimsical nature of your product.',
      images: [work_mbk_gallery_1_image, work_mbk_gallery_2_image, work_mbk_gallery_3_image, work_mbk_gallery_4_image],
    },
  },
  {
    href: `${routes.WORK}/iix-impact-partners`,
    image: work_iix_card_image,
    title: 'IIX Impact Partners',
    slug: 'iix-impact-partners',
    subtitle: 'Impact Investment',

    hero: {
      overline: 'Impact Investing Platform',
      title: 'IIX',
      subtitle: 'Pioneer in Impact Investing. Global leader in sustainability.',
      image: work_iix_hero_image,
    },
    talls: [
      {
        overline: 'About',
        title: 'Meet IIX',
        subtitle:
          'An investment enterprise with the vision of creating a platform for SMEs to make their investment impacts measurable and sustainble.',
        image: work_iix_tall_1_image,
      },
      {
        overline: 'The Crux',
        title: 'A Pioneer and Global Leader',
        subtitle:
          'We translate the vision of impact investing with functional and clean designs which support IIX’s movement to become a global leader in sustainability.',
        image: work_iix_tall_2_image,
      },
    ],
    gallery: {
      overline: 'Our Take',
      title: 'Impactful',
      subtitle: 'Let your site convey the impact of your vision with simplicity.',
      images: [work_iix_gallery_1_image, work_iix_gallery_2_image, work_iix_gallery_3_image, work_iix_gallery_4_image],
    },
  },
]

interface ApproachCardItem {
  title: string
  image: ImageProps
  subtitle: string
  link?: { title: string; href: string }
}
export const mockApproaches: ApproachCardItem[] = [
  {
    image: wavy_bookshelves_image,
    title: 'Patterns',
    subtitle:
      'We harness the power of research and data by improving upon tried and tested design solutions, cementing the effectiveness of our design solutions.',
  },
  {
    image: table_documents_image,
    title: 'Principles',
    subtitle:
      'At the heart of our innovative designs are fundamental design principles which ensures an optimum balance between diversity and standardisation.',
  },
  {
    image: meeting_sticky_notes_image,
    title: 'Practices',
    subtitle:
      'We follow the most respected brands and adopt their best practices to ensure our creative solutions achieve it’s competitive edge by learning from the best.',
  },
]

export const mockTimelineItems = [
  {
    overline: 'Step 1',
    title: 'Week 1: Research',
    actionListItems: [{ title: 'Market Research' }, { title: 'Jobs-to-be-Done Discovery' }],
    deliverableListItems: [{ title: 'Best Practices report in .pdf format' }],
  },
  {
    overline: 'Step 2',
    title: 'Week 2: Wireframe',
    actionListItems: [{ title: 'Wireframing' }, { title: 'User Journey Review' }],
    deliverableListItems: [
      { title: 'Wireframes of key user flows in Figma' },
      { title: 'Access to your Figma board for easy collaboration' },
    ],
  },
  {
    overline: 'Step 3',
    title: 'Week 3: Style',
    actionListItems: [{ title: 'Style Exploration' }, { title: 'User Interface (UI) Design' }],
    deliverableListItems: [
      { title: 'Top 3 product style options in .pdf format' },
      { title: 'User interface of key user flows in Figma' },
    ],
  },
  {
    overline: 'Step 4',
    title: 'Week 4: Launch',
    actionListItems: [{ title: 'Live Revisions' }],
    deliverableListItems: [{ title: 'Design source files in .figma format' }],
  },
]

export const mockReviewQuotes = [
  {
    ratingValue: 5,
    image: review_avatar_1_image,
    author: 'Felicia Chong, Founder at Zenplans',
    content:
      '“We recently worked with One X Design on creating our new mobile app from the ground up. One X Design surpassed our expectations. The team felt like a natural extension to our company, working diligently to deliver each phase of the project as if it were their own. They are professional, highly creative, and have been responsive throughout the entire project; the project was meticulously planned out from initial meeting to final delivery, where One X Design managed navigate and translate incoherent ideas into concrete designs, with ease.”',
  },
  {
    ratingValue: 5,
    image: review_avatar_2_image,
    author: 'Nicole Tan, CEO at Symbiotica',
    content:
      '“First-class team - they completely understood the problems we were trying to solve and brought our vision to life in a beautifully simple way. Would definitely showcase with them again”',
  },
  {
    ratingValue: 5,
    image: review_avatar_3_image,
    author: 'Michelle Lim, CEO at Creid AI',
    content:
      "“One X Design is probably the best UI/UX Design studio we've worked with. Apart from being professional and highly creative, their team brought an approach we hadn't seen before. They design for outcome, making sure that our concepts aligned with our goals. Highly recommend them for any digital design showcase.”",
  },
]

export const mockPricingItems = [
  {
    title: 'Basic',
    price: 2400,
    subtitle: 'For small businesses',
    features: ['Up to 5 screens', '1 live review session', '3 weeks turnaround', 'Design source files'],
    buttonTitle: 'Get Started with Basic',
    ButtonProps: { variant: 'outlined' as ButtonProps['variant'] },
  },
  {
    title: 'Essential',
    price: 0.75 * 640 * 10,
    subtitle: 'For product startups',
    features: [
      'Up to 10 screens',
      '1 live review sessions',
      '4 weeks turnaround',
      '1 Best Practices Report',
      'Design source files',
    ],
    sx: { backgroundColor: 'black', color: 'white' },
    buttonTitle: 'Get Started with Essential',
    ButtonProps: { color: 'secondary' as ButtonProps['color'] },
  },
  {
    title: 'Enterprise',
    price: 23800, // (0.75 * 640 * 40) + (4 * 640) + (3 * 640) // Screens + Workshop + Report
    subtitle: 'For enterprise apps',
    features: [
      'Up to 40 screens',
      '1 live review session',
      '6 weeks turnaround',
      '1 Best Practices Report',
      'Design source files',
      '1 Stakeholder UX Workshop',
      '1 UX Report',
    ],
    buttonTitle: 'Get Started with Pro',
    ButtonProps: { variant: 'outlined' as ButtonProps['variant'] },
  },
]

export const mockFAQItems = [
  {
    title: 'Who is this design service for?',
    content:
      'For business owners with growing businesses that want to accelerate their product to the next level with an experienced design team. We’ll apply the knowledge we gained working on software products for companies at different stages, from startups to MNCs, across multiple industries.',
  },
  {
    title: 'Why should I care about product design?',
    content:
      "A well-designed product is essential if you want to grow faster. Having a simpler, more intuitive, and user-friendly product reduces customer support calls and increases conversion & retention. Giving your customers a delightful experience that is both simple and beautiful makes them spend more on your platform. We've had some cases where company's revenue doubled after our simplified improvements were implemented.",
  },
  {
    title: 'What is the difference between UX and UI design?',
    content:
      'User experience (UX) design is the process of enhancing customer satisfaction and loyalty by improving the usability, ease of use, and pleasure provided in the interaction between the customer and the product. On the other hand User Interface (UI) Design is responsible for the transference of a brand’s strengths and visual assets to a product’s interface as to best enhance the user’s experience.',
  },
  {
    title: 'What is considered good product design?',
    content:
      'Product design that drives strategic business goals. We believe in optimising designs to meet your specific goals, whatever they may be, from conversion to retention.',
  },
  {
    title: 'What is a screen?',
    content: 'A screen is typically designed at 1920px x 1080px (Web) or 640px x 480px (Mobile).',
  },
]

export const mockImageMarquee = [
  flatlay_sri_op_image,
  flatlay_sri_auto_image,
  flatlay_sim_image,
  flatlay_nxg_image,
  flatlay_nkk_image,
  flatlay_mtj_image,
  flatlay_mbk_image,
  flatlay_iix_dash_image,
]
