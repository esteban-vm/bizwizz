import '@/app/globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Bizwizz',
  description: 'Example of fictional landing page created with NextJS and TailwindCSS',
  key: 'landing page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
