import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '../Components/Header/Header.jsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
