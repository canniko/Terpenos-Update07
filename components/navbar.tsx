"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AdminAccess } from "@/components/admin-access"
import { CartIcon } from "@/components/cart/cart-icon"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { Menu, X, FlaskConical, Settings } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-surface/80 backdrop-blur-md border-b border-brand-border shadow-bold">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-accent rounded-lg flex items-center justify-center shadow-neon">
                <FlaskConical className="h-5 w-5 text-black" />
              </div>
              <Image
                src="/images/terpenos-logo.png"
                alt="Terpenos.com Logo"
                width={120}
                height={30}
                className="h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-link">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="nav-link">
              {t("nav.about")}
            </Link>
            <Link href="/team" className="nav-link">
              {t("nav.team")}
            </Link>
            <Link href="/products" className="nav-link">
              {t("nav.products")}
            </Link>
            <Link href="/blog" className="nav-link">
              {t("nav.blog")}
            </Link>
            <Link href="/contact">
              <Button className="btn-primary">
                {t("nav.contact")}
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <CartIcon onCartClick={toggleCart} />
              <LanguageSwitcher />
              <ModeToggle />
              <AdminAccess />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <CartIcon onCartClick={toggleCart} />
            <LanguageSwitcher />
            <ModeToggle />
            <AdminAccess />
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-brand-alt text-white" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="container md:hidden py-6 bg-brand-surface/95 backdrop-blur-sm border-t border-brand-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/team"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.team")}
              </Link>
              <Link
                href="/products"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.products")}
              </Link>
              <Link
                href="/blog"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.blog")}
              </Link>
              <Link
                href="/contact"
                className="nav-link py-2"
                onClick={toggleMenu}
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Navbar
