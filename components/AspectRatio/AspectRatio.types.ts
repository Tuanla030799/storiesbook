import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export type Styles = {
  [key: string]: CSSProperties
}

export type AspectProps = {
  children: ReactNode
  ratio?: number
  className?: string
  style?: CSSProperties | Styles
} & HTMLAttributes<HTMLDivElement>
