import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LevelUp Web - Professional Web Solutions',
  description: 'Professional web development services and solutions for modern businesses.',
  keywords: 'web development, professional services, modern web solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-xl font-bold text-primary-600">
                LevelUp Web
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Home
                </Link>
                <Link href="/privacy" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">LevelUp Web</h3>
                <p className="text-gray-300">Professional web solutions for modern businesses.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Phone: (786) 641-1493</p>
                <p className="text-gray-300">Email: support@maktubtechnologies.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <div className="space-y-2">
                  <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; 2025 LevelUp Web by Maktub Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 