"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-terpenos-light-green bg-terpenos-offwhite text-terpenos-charcoal">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/terpenos-logo.png"
                alt="Terpenos.com Logo"
                width={150}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-terpenos-charcoal">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-montserrat text-terpenos-black">{t("footer.links.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-terpenos-green hover:text-terpenos-forest-green">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-terpenos-green hover:text-terpenos-forest-green">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-terpenos-green hover:text-terpenos-forest-green">
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-terpenos-green hover:text-terpenos-forest-green">
                  {t("nav.products")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-montserrat text-terpenos-black">{t("footer.resources.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-terpenos-green hover:text-terpenos-forest-green">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-terpenos-green hover:text-terpenos-forest-green">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-montserrat text-terpenos-black">{t("footer.contact.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-terpenos-charcoal">Multicentro Av. 6 de Diciembre</li>
              <li className="text-terpenos-charcoal">Quito, Ecuador</li>
              <li>
                <Link href="mailto:info@terpenos.com" className="text-terpenos-green hover:text-terpenos-forest-green">
                  sales@terpenos.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-terpenos-green hover:text-terpenos-forest-green">
                  +593 2-223-9878
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-terpenos-light-green pt-6 text-center text-sm text-terpenos-charcoal">
          <p>
            &copy; {currentYear} Terpenos Humboldt SAS {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
