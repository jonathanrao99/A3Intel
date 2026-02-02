import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A3Intel | AI-Powered IT & Healthcare Solutions',
  description: 'A3Intel is an AI-driven IT solutions, consulting, and staffing company delivering intelligent, secure, and scalable technology services to enterprises and healthcare organizations.',
  keywords: 'AI consulting, IT consulting, healthcare staffing, cybersecurity, digital transformation, machine learning, intelligent automation, enterprise AI',
  authors: [{ name: 'A3Intel Solutions Inc' }],
  openGraph: {
    title: 'A3Intel | AI-Powered IT & Healthcare Solutions',
    description: 'AI-driven IT solutions, consulting, and staffing for enterprises and healthcare.',
    url: 'https://a3intel.tech',
    siteName: 'A3Intel Solutions',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
