'use client'
import { usePathname } from 'next/navigation'
import '../styles/global.css'
import {
  BaseLayout,
  Footer,
  Header,
  NavItemProps,
} from '@mskcc/components-react'

interface LayoutProps {
  children: React.ReactNode
}

export function RootLayout(props: LayoutProps) {
  const pathname = usePathname()
  console.log()
  const navItems: NavItemProps[] = [
    {
      label: 'Home',
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'SubPage',
      href: '/subpage',
      active: pathname === '/subpage',
    },
  ]
  return (
    <BaseLayout
      header={
        <Header
          navItems={navItems}
          productName='NextJS with App'
          logoSrc='https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/dist/logo/assets/logo-arrow-sans-medium-navy.svg'
        />
      }
      footer={
        <Footer logoSrc='https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/dist/logo/assets/logo-primary-sans-medium-navy.svg' />
      }
    >
      {props.children}
    </BaseLayout>
  )
}
