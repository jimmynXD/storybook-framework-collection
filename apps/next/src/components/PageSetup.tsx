import {
  BaseLayout,
  Header,
  Footer,
  NavItemProps,
} from '@mskcc/components-react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface PageSetupProps {
  title?: string
  children: React.ReactNode
  className?: string
}
export function PageSetup(props: PageSetupProps) {
  const router = useRouter()

  const navItems: NavItemProps[] = [
    {
      label: 'Home',
      href: '/',
      active: router.pathname === '/',
    },
    {
      label: 'SubPage',
      href: '/subpage',
      active: router.pathname === '/subpage',
    },
  ]

  return (
    <>
      <Head>
        <title>{props.title + ' | MSK' ?? 'MSK'}</title>
      </Head>
      <BaseLayout
        header={
          <Header
            navItems={navItems}
            productName='NextJS with Pages'
            logoSrc='https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/dist/logo/assets/logo-arrow-sans-medium-navy.svg'
          />
        }
        footer={
          <Footer logoSrc='https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/dist/logo/assets/logo-primary-sans-medium-navy.svg' />
        }
      >
        {props.children}
      </BaseLayout>
    </>
  )
}
