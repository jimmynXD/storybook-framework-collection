import '@mskcc/components/css/header.css'
import { BaseLayout, PageLayout, Header } from '@mskcc/components-react'

export default function IndexPage() {
  return (
    <BaseLayout>
      <Header 
      productName="NextJS"
      logoSrc='https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@1.12.0/dist/logo/assets/logo-arrow-sans-medium-navy.svg'/>
      <PageLayout layout="bookworm">
        <h1>Hello</h1>
      </PageLayout>
    </BaseLayout>
  )
}
