import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Giuseppe Ferlazzo',
  description: 'Giuseppe Ferlazzo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
