import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Vajranda Corp',
  description: 'Official Website of Vajranda Corporation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
