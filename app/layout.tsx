import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Igreja Cristã Mundial | Um lugar abençoado, cheio da presença de Deus',
  description:
    'A Igreja Cristã Mundial (ICM) é uma comunidade de fé acolhedora com unidades em Poá, Itaquaquecetuba e região. Venha viver a presença de Deus conosco.',
  generator: 'v0.app',
  keywords: [
    'Igreja Cristã Mundial',
    'ICM',
    'igreja evangélica',
    'Poá',
    'Itaquaquecetuba',
    'cultos',
    'comunidade cristã',
  ],
}

export const viewport = {
  themeColor: '#15192b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${bricolage.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
