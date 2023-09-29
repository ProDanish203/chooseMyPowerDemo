import './globals.css'
import type { Metadata } from 'next'
import { Footer, Header} from "@/components/shared";

export const metadata: Metadata = {
  title: 'Choose My Power',
  description: 'Your personal powerful energy provider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <div className=''>
          <Header/>
        </div>

        <div className='min-h-[100vh] h-full'>
          {children}
        </div>

        <div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
