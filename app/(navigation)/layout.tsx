import type { Metadata } from 'next'
import '../globals.css'
import NavigationMenuDemo from '@/components/navigation/NavBar'
import { Separator } from '@/components/ui/separator'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-screen bg-base-100" >
      <NavigationMenuDemo />
      <Separator />
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}
