"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FlaskRoundIcon as Flask, Microscope, Dna, Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-terpenos-offwhite">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-terpenos-light-green px-3 py-1 text-sm text-terpenos-forest-green font-medium">
                Natural Science Innovation
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-terpenos-black font-montserrat">
                {t("home.hero.title")}
              </h1>
              <p className="max-w-[600px] text-terpenos-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button>
                    {t("home.hero.cta.explore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">{t("home.hero.cta.contact")}</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border-4 border-terpenos-light-green">
                <div className="absolute inset-0 bg-terpenos-light-green/20 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <path
                        d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z"
                        fill="none"
                        stroke="#2C7A1F"
                        strokeWidth="2"
                      />
                      <path
                        d="M100,40 L160,70 L160,130 L100,160 L40,130 L40,70 Z"
                        fill="none"
                        stroke="#2C7A1F"
                        strokeWidth="2"
                      />
                      <path
                        d="M100,60 L140,80 L140,120 L100,140 L60,120 L60,80 Z"
                        fill="none"
                        stroke="#2C7A1F"
                        strokeWidth="2"
                      />
                      <circle cx="100" cy="100" r="20" fill="#2C7A1F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-terpenos-offwhite">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-terpenos-light-green px-3 py-1 text-sm text-terpenos-forest-green font-medium">
                Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-terpenos-black font-montserrat">
                {t("home.features.title")}
              </h2>
              <p className="max-w-[900px] text-terpenos-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.features.subtitle")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-light-green p-6 shadow-sm bg-white relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terpenos-green to-terpenos-forest-green"></div>
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Flask className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-terpenos-black font-montserrat">{t("home.features.research")}</h3>
              <p className="text-center text-sm text-terpenos-charcoal">{t("home.features.research.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-light-green p-6 shadow-sm bg-white relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terpenos-green to-terpenos-forest-green"></div>
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Microscope className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-terpenos-black font-montserrat">{t("home.features.analysis")}</h3>
              <p className="text-center text-sm text-terpenos-charcoal">{t("home.features.analysis.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-light-green p-6 shadow-sm bg-white relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terpenos-green to-terpenos-forest-green"></div>
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Dna className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-terpenos-black font-montserrat">{t("home.features.innovation")}</h3>
              <p className="text-center text-sm text-terpenos-charcoal">{t("home.features.innovation.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-light-green p-6 shadow-sm bg-white relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terpenos-green to-terpenos-forest-green"></div>
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Award className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-terpenos-black font-montserrat">{t("home.features.quality")}</h3>
              <p className="text-center text-sm text-terpenos-charcoal">{t("home.features.quality.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-terpenos-offwhite border-t border-terpenos-light-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-montserrat text-terpenos-black">
                {t("home.cta.title")}
              </h2>
              <p className="max-w-[900px] text-terpenos-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.cta.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  {t("home.cta.button1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  {t("home.cta.button2")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
