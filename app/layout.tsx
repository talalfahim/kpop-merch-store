import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'K-Pop Merch Store | Stylish T-shirts for K-Pop Fans',
  description: 'Interactive e-commerce store for K-Pop fans. Shop trendy, high-quality T-shirts featuring your favorite K-Pop bands.',
  keywords: ['k-pop', 'merchandise', 'fashion', 'band t-shirts', 'k-pop clothing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-light text-dark">
        {children}
      </body>
    </html>
  )
}