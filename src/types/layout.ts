import { ReactNode, CSSProperties, JSX } from 'react'
import { ThemeType } from './theme'

export interface ILayout {
  children: ReactNode
  theme: ThemeType
  style?: CSSProperties
}

export type LayoutComponent = (props: ILayout) => JSX.Element
export type LayoutType = Record<string, LayoutComponent>