import '@/app/styles/global.css'
import { RootLayout } from '@/app'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MSK Next Edge',
  description: 'Nextjs with react-hook-forms',
  viewport: 'width=device-width, initial-scale=1',
  icons: [
    {
      url: 'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/src/favicons/assets/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
      rel: 'icon',
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/src/favicons/assets/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
      rel: 'icon',
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
