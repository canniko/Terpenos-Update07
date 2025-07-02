import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n/context"
import { CartProvider } from "@/components/providers/cart-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Load Inter font for modern biotech aesthetic
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Terpenos - Modern Biotech Solutions",
  description: "Innovative biotech solutions and research by Terpenos",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className={`${inter.className} bg-brand-background text-brand-text antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <CartProvider>
              <Suspense>
                <div className="flex min-h-screen flex-col bg-brand-background">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </Suspense>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
