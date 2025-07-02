"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FlaskConical, Microscope, Atom, Award, Dna, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-brand-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-brand geometric-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand-green">
                <Dna className="h-6 w-6 glow-text" />
                <span className="section-label glow-text">Biotech Innovation</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="btn-primary">
                    {t("home.hero.cta.explore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn-outline">
                    {t("home.hero.cta.contact")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-2xl border-2 border-brand-green shadow-neon">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Terpene%20Skin%20Care.png-anMLt9BCm3tPKOY0RuSeMAAwgKhhrI.jpeg"
                  alt="Terpene Skin Care - Woman's profile with botanical elements and terpene essence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-alt grid-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-accent">
                <Sparkles className="h-6 w-6" />
                <span className="section-label">Our Expertise</span>
              </div>
              <h2 className="section-title">
                {t("home.features.title")}
              </h2>
              <p className="section-subtitle max-w-[900px]">
                {t("home.features.subtitle")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            <div className="card-neon group">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center shadow-neon group-hover:shadow-glow transition-all duration-300">
                  <FlaskConical className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("home.features.research")}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t("home.features.research.desc")}
                </p>
              </div>
            </div>
            <div className="card-neon group">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center shadow-neon group-hover:shadow-glow transition-all duration-300">
                  <Microscope className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("home.features.analysis")}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t("home.features.analysis.desc")}
                </p>
              </div>
            </div>
            <div className="card-neon group">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center shadow-neon group-hover:shadow-glow transition-all duration-300">
                  <Atom className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("home.features.innovation")}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t("home.features.innovation.desc")}
                </p>
              </div>
            </div>
            <div className="card-neon group">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center shadow-neon group-hover:shadow-glow transition-all duration-300">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("home.features.quality")}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {t("home.features.quality.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-surface border-t border-brand-border geometric-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="section-title">
                {t("home.cta.title")}
              </h2>
              <p className="section-subtitle max-w-[900px]">
                {t("home.cta.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="btn-primary">
                  {t("home.cta.button1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="btn-outline">
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
