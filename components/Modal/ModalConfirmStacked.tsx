import React, { ComponentProps } from 'react'
import ModalConfirm from './ModalConfirm'

export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>

type ModalConfirmStackedProps = RequiredField<
  ComponentProps<typeof ModalConfirm>,
  'target'
>

const ModalConfirmStacked = (props: ModalConfirmStackedProps) => {
  return (
    <ModalConfirm {...props} preventClickOutsideToClose={true} isCentered>
      {props.children}
    </ModalConfirm>
  )
}

export default ModalConfirmStacked
