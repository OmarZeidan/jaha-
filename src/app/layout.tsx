import { type Metadata } from 'next'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'Jahangir - A leading hospitality company in Amman',
    template: '%s | Jahangir',
  },
  description:
    'Jahangir is a leading hospitality company in Amman, shaping food, beverage, and lifestyle experiences across the city.',
  openGraph: {
    title: 'Jahangir - A leading hospitality company in Amman',
    description:
      'A hospitality group in Amman crafting distinctive food, beverage, and lifestyle brands.',
    url: siteUrl,
    siteName: 'Jahangir',
    locale: 'en_JO',
    type: 'website',
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
