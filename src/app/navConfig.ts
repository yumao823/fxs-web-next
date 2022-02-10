import { routes } from './routes'

export const headerNavItems = [
  { name: 'home', title: 'Home', href: routes.HOME, sx: { display: { xs: 'block', md: 'none' } } },
  { name: 'portfolio', title: 'Portfolio', href: routes.PORTFOLIO },
  { name: 'process', title: 'Process', href: routes.PROCESS },
  { name: 'blog', title: 'Blog', href: routes.BLOG },
  { name: 'services', title: 'Services', href: routes.SERVICES },
  { name: 'about', title: 'About', href: routes.ABOUT },
  // { name: 'product-design', title: 'Product Design', href: routes.PRODUCT },
  // { name: 'pricing', title: 'Pricing', href: routes.PRICING },
  // { name: 'showcase', title: 'Showcase', href: routes.WORK },
  { name: 'contact', title: 'Contact Us', href: routes.CONTACT },
]
