// app/layout.tsx
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { Providers } from "@/components/providers"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rick & Morty App",
  description: "Application Rick & Morty avec React et Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <div className="page-transition">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
