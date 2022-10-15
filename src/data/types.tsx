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
