import { HTMLAttributes, ReactNode } from 'react'

export type PropsSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'

export type TypographyAligns = 'center' | 'left' | 'right' | 'justify'

export type TypographyWeights =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export type TypographyFontSizes =
  | 'text-2xs'
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl'

export type TypographyTransforms =
  | 'none'
  | 'lowercase'
  | 'uppercase'
  | 'capitalize'

export interface TypographyProps
  extends PropsSpread<
    HTMLAttributes<HTMLElement>,
    {
      children: ReactNode
      variant?: TypographyVariants
      weight?: TypographyWeights
      align?: TypographyAligns
      fontSize?: TypographyFontSizes
      transform?: TypographyTransforms
      gutter?: boolean
      noWrap?: boolean
      className?: string
    }
  > {}
