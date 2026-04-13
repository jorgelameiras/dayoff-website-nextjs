import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display-next',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-next',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono-next',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DayOff — Vacation Home Cleaning & AC Maintenance | Central Florida',
  description:
    'Professional vacation home cleaning and AC maintenance in Central Florida. Serving Orlando, Kissimmee, Daytona Beach & Tampa. Fresh homes, happy guests.',
  keywords: 'vacation rental cleaning, AC maintenance, Central Florida, Orlando, Kissimmee, property management',
  openGraph: {
    type: 'website',
    title: 'DayOff — Vacation Home Cleaning & AC Maintenance | Central Florida',
    description: 'Professional vacation home cleaning and AC maintenance in Central Florida. Fresh homes, happy guests.',
    url: 'https://dayoff.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1F1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
