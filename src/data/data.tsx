import {
  Home,
  ShoppingCart,
  List,
  User,
  Target,
  Truck,
  Dollar,
  Brush,
  CreditCard,
  CogPlanet,
  Extension,
  Settings,
  Logout,
  Help,
  Share,
  Eye,
} from '../assets/icons'
interface SubListItem {
  name: string
  path: string
}

interface SidebarItem {
  name: string
  subList?: Array<SubListItem>
  path?: string
  icon?: JSX.Element
}

export const mainLinks: Array<SidebarItem> = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <Home color='#103b66' />,
  },
  {
    name: 'Catalogue',
    subList: [
      {
        name: 'Products',
        path: '/products',
      },
      {
        name: 'Categories',
        path: '/categories',
      },
      {
        name: 'Promotional Package',
        path: '/promotional-package',
      },
    ],
    icon: <ShoppingCart color='#103b66' />,
  },
  {
    name: 'Orders',
    path: '/orders',
    icon: <List color='#103b66' />,
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: <User color='#103b66' />,
  },
  {
    name: 'Marketing',
    subList: [
      {
        name: 'Discount Codes',
        path: '/discount-codes',
      },
      {
        name: 'Exit Intent',
        path: '/exit-intent',
      },
      {
        name: 'Checkout Features',
        path: '/checkout-features',
      },
      {
        name: 'Post-Purchase Conversion',
        path: '/post-purchase',
      },
      {
        name: 'Cart Abandonment',
        path: '/cart-abandonment',
      },
      {
        name: 'Timer Checkout',
        path: '/timer-checkout',
      },
      {
        name: 'Sell on Social',
        path: '/social-sell',
      },
      {
        name: 'Special Offer',
        path: '/special-offer',
      },
      {
        name: 'Seasonal Offer',
        path: '/seasonal-offer',
      },
    ],
    icon: <Target color='#103b66' />,
  },
  {
    name: 'Delivery Options',
    path: '/delivery-options',
    icon: <Truck color='#103b66' />,
  },
  {
    name: 'Payment Options',
    path: '/payment-options',
    icon: <Dollar color='#103b66' />,
  },
  {
    name: 'Store Design',
    path: '/store-design',
    icon: <Brush color='#103b66' />,
  },
  {
    name: 'Subscription',
    path: '/subscription',
    icon: <CreditCard color='#103b66' />,
  },
  {
    name: 'Integrations',
    path: '/integrations',
    icon: <CogPlanet color='#103b66' />,
  },
  {
    name: 'Extensions',
    path: '/extensions',
    icon: <Extension color='#103b66' />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Settings color='#103b66' />,
  },
  {
    name: 'Log Out',
    path: '/logout',
    icon: <Logout color='#103b66' />,
  },
]

export const secondLinks: Array<SidebarItem> = [
  {
    name: 'Customer Support',
    path: '/support',
    icon: <Help color='#103b66' />,
  },
  {
    name: 'Share your Shop',
    path: '/share-shop',
    icon: <Share color='#103b66' />,
  },
  {
    name: 'View your Shop',
    path: '/view-shop',
    icon: <Eye color='#103b66' />,
  },
]

export const titles: { [key: string]: string } = {
  '/': 'Dashboard',
  '/procduts': 'Products',
  '/categories': 'Categories',
  '/promotional-package': 'Promotional Package',
  '/orders': 'Orders',
  '/customers': 'Customers',
  '/delivery-options': 'Delivery Options',
  '/payment-options': 'Payment Options',
  '/store-design': 'Store Design',
  '/subscription': 'Subscription',
  '/integrations': 'Integrations',
  '/extensions': 'Extensions',
  '/settings': 'Settings',
  '/support': 'Customer Support',
  '/share-shop': 'Share your Shop',
  '/view-shop': 'View your Shop',
  '/discount-codes': 'Discount Codes',
  '/exit-intent': 'Exit Intent',
  '/checkout-features': 'Checkout Features',
  '/post-purchase': 'Post-Purchase Conversion',
  '/cart-abandonment': 'Cart Abandonment',
  '/timer-checkout': 'Timer Checkout',
  '/social-sell': 'Sell on Social',
  '/special-offer': 'Special Offer',
  '/seasonal-offer': 'Seasonal Offer',
  '/logout': "You're logged out!",
}
