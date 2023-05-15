'use client'
import { BaseLayout } from '@mskcc/components-react'

interface LayoutProps {
  children: React.ReactNode
}

export function RootLayout(props: LayoutProps) {
  return <BaseLayout>{props.children}</BaseLayout>
}
