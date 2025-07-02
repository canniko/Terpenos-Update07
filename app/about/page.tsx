"use client"

import { Beaker, Users, Target, Lightbulb } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("about.hero.title")}</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">{t("about.story.title")}</h2>
              <p className="text-muted-foreground">{t("about.story.p1")}</p>
              <p className="text-muted-foreground">{t("about.story.p2")}</p>
              <p className="text-muted-foreground">{t("about.story.p3")}</p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202023-10-17%2014.33.02%20-%20Illustration%20of%20Alexander%20Von%20Humboldt%20in%20his%20exploration%20attire%2C%20holding%20a%20magnifying%20glass%20inspecting%20a%20cannabis%20plant.%20The%20aromatic%20terpenes%20are%20vi.png-mYD37zwR2yB84B3pxyTjN90p4yORwI.jpeg"
                  alt="Illustration of scientific exploration of cannabis and terpenes"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-terpenos-light-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-terpenos-forest-green">
              {t("about.values.title")}
            </h2>
            <p className="max-w-[900px] text-terpenos-forest-green">{t("about.values.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Beaker className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.values.integrity")}</h3>
              <p className="text-center text-sm text-gray-700">{t("about.values.integrity.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Lightbulb className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.values.innovation")}</h3>
              <p className="text-center text-sm text-gray-700">{t("about.values.innovation.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Users className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.values.collaboration")}</h3>
              <p className="text-center text-sm text-gray-700">{t("about.values.collaboration.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Target className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.values.impact")}</h3>
              <p className="text-center text-sm text-gray-700">{t("about.values.impact.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XhhAPzbVbMaNXoHNWPrLzuGHjbCYBK.png"
                  alt="Terpenos laboratory technician analyzing cannabis extracts"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t("about.approach.title")}</h2>
              <p className="text-muted-foreground">{t("about.approach.p1")}</p>
              <p className="text-muted-foreground">{t("about.approach.p2")}</p>
              <p className="text-muted-foreground">{t("about.approach.p3")}</p>
              <p className="text-muted-foreground">{t("about.approach.p4")}</p>
              <p className="text-muted-foreground">{t("about.approach.p5")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
