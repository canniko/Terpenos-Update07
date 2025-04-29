"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-terpenos-light-green bg-terpenos-offwhite/95 backdrop-blur supports-[backdrop-filter]:bg-terpenos-offwhite/60 dark:bg-terpenos-black/90 dark:border-terpenos-forest-green">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/terpenos-logo.png"
              alt="Terpenos.com Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green dark:text-terpenos-offwhite dark:hover:text-terpenos-light-green"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green dark:text-terpenos-offwhite dark:hover:text-terpenos-light-green"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green dark:text-terpenos-offwhite dark:hover:text-terpenos-light-green"
          >
            {t("nav.team")}
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green dark:text-terpenos-offwhite dark:hover:text-terpenos-light-green"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green dark:text-terpenos-offwhite dark:hover:text-terpenos-light-green"
          >
            {t("nav.blog")}
          </Link>
          <Link href="/contact">
            <Button variant="default" size="sm">
              {t("nav.contact")}
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.team")}
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.products")}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.blog")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-terpenos-charcoal hover:text-terpenos-green"
              onClick={toggleMenu}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
