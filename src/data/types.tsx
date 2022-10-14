import { ReactNode } from 'react'

export type IconProps = {
  color: string
}

export type LayoutProps = {
  children: ReactNode
}

export type LinkItemProps = {
  name: string
  icon?: JSX.Element
  path?: string
  subList?: { name: string; path: string }[]
}
