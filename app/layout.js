import './ui/globals.css'
 
 
export const metadata = {
  title: 'Serm Developer Next.js Admin Dashboard',
  description: 'Full Stack Next.js dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-100  h-full '>
      <body className="h-full">
        {children}
        </body>
    </html>
  )
}
