import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './_components/Navbar'

const googleFont = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Open Table Reservation',
  description: 'Reserve a table in any restaurant in a country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={googleFont.className}>
        <div className="min-h-screen w-screen bg-gray-100">
          <div className="mx-auto max-w-screen-2xl bg-white">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
