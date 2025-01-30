import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Blake Anthony Wilson',
  description: 'Dr. Blake Anthony Wilson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html data-theme="light" lang="en">
      <body>
        <div className="w-full h-screen bg-base-100" >
          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
