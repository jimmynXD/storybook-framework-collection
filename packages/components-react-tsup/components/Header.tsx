import '@mskcc/components/css/header.css'
import { Header as MskHeader } from '@mskcc/components-react'
import type { HeaderProps } from '@mskcc/components-react'

export function Header(props: HeaderProps) {
  const { productName, ...rest } = props
  return (
    <MskHeader
      {...rest}
      logoSrc={
        'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@1.11.1/dist/logo/assets/logo-arrow-sans-medium-navy.svg'
      }
      productName={productName ?? 'MarComm'}
    />
  )
}
