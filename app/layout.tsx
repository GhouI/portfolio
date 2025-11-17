import type { Metadata } from 'next'
import { Montserrat, Merriweather, Ubuntu_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"] });
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AbdulRahman Alian - Software Engineer & AI Specialist',
  description: 'Portfolio of AbdulRahman Alian - Software Engineer specializing in AI/ML, deep learning, full-stack development, and mobile applications. Building intelligent systems with PyTorch, React Native, and TypeScript.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${montserrat.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
