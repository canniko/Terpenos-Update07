"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, FlaskConical } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-alt border-t border-brand-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-accent rounded-lg flex items-center justify-center shadow-neon">
                <FlaskConical className="h-4 w-4 text-black" />
              </div>
              <Image
                src="/images/terpenos-logo.png"
                alt="Terpenos.com Logo"
                width={100}
                height={25}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pioneering biotech solutions for a sustainable future. 
              Cutting-edge research meets innovative applications.
            </p>
            <div className="flex items-center gap-3">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=terpenes" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  Terpenes
                </Link>
              </li>
              <li>
                <Link href="/products?category=cannabis" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  Cannabis Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-brand-green transition-all duration-200">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-accent" />
                <span className="text-sm text-gray-300">info@terpenos.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-accent" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-accent" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              © 2024 Terpenos. All rights reserved. | Modern biotech solutions for tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
