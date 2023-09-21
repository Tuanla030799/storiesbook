import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { styles } from './Badge.styled'
import { BadgeProps } from './Badge.types'

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      color = 'primary',
      size = 'md',
      rounded = 'full',
      className,
      children,
      leading,
      trailing,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.color[color],
      styles.size[size],
      styles.rounded[rounded],
      className
    )

    return (
      <span className={allClassNames} ref={ref} {...rest}>
        {leading && leading}
        {children}
        {trailing && trailing}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
