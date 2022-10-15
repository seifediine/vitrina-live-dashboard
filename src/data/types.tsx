import { ReactNode } from 'react'

export type IconProps = {
  color: string
}

export type LayoutProps = {
  children: ReactNode
}
export interface SidebarItemProps {
  name: string
  icon?: JSX.Element
  path?: string
  subList?: { name: string; path: string }[]
}

export type navbarTitleProps = {
  '/': string
  '/procduts': string
  '/categories': string
  '/promotional-package': string
  '/orders': string
  '/customers': string
  '/delivery-options': string
  '/payment-options': string
  '/store-design': string
  '/subscription': string
  '/integrations': string
  '/extensions': string
  '/settings': string
  '/support': string
  '/share-shop': string
  '/view-shop': string
  '/discount-codes': string
  '/exit-intent': string
  '/checkout-features': string
  '/post-purchase': string
  '/cart-abandonment': string
  '/timer-checkout': string
  '/social-sell': string
  '/special-offer': string
  '/seasonal-offer': string
  '/logout': string
}
