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
              <p className="text-muted-foreground">
                In the heart of Quito, Ecuador, lies a pioneering force in the cannabis industry—Terpenos.com.
                Established in 2021, our journey is not just a tale of business inception but a profound narrative that
                intertwines with the history and evolution of cannabis as medicine. Our roots delve deep into the early
                days of cannabis legalization campaigns in Berkeley and Oakland, California, where our founders were not
                just spectators but active volunteers and advocates. Their dedication to the cause saw them alongside
                influential organizations such as Oaksterdam and Harborside, witnessing first-hand the challenges and
                triumphs that shaped the industry.
              </p>
              <p className="text-muted-foreground">
                Our story, however, did not start with the founding of Terpenos.com. It is a continuation of a
                decade-long legacy of excellence and innovation in the pharmaceutical and food manufacturing sectors.
                Our founders brought with them a wealth of experience, having worked with top-tier private label food
                and pharmaceutical manufacturers, where they were instrumental in implementing world-class systems. This
                invaluable experience laid the groundwork for what Terpenos.com would become—a leader in the cannabis
                space, dedicated to the highest standards of quality and safety.
              </p>
              <p className="text-muted-foreground">
                Today, Terpenos.com stands as a fully licensed importer of cannabis-derived molecules, operating out of
                Ecuador with a satellite presence in California. Our laboratory is at the forefront of developing and
                maintaining processes that guarantee the pharmaceutical and food-grade quality of our formulations and
                raw materials. We specialize in terpenes, CBD, and other legal cannabinoids, catering to customers that
                seek unparalleled purity and efficacy. Our story is a testament to the belief that cannabis is medicine,
                a belief that has driven us from the early days of legalization campaigns to the cutting-edge of the
                industry today. At Terpenos.com, we are more than just a company; we are a part of a global movement
                towards wellness, innovation, and the unyielding pursuit of excellence in the cannabis domain.
              </p>
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
              <h3 className="text-xl font-bold">{t("about.values.integrity")}</h3>
              <p className="text-center text-sm text-muted-foreground">{t("about.values.integrity.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Lightbulb className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold">{t("about.values.innovation")}</h3>
              <p className="text-center text-sm text-muted-foreground">{t("about.values.innovation.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Users className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold">{t("about.values.collaboration")}</h3>
              <p className="text-center text-sm text-muted-foreground">{t("about.values.collaboration.desc")}</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-terpenos-green p-6 shadow-md bg-white">
              <div className="rounded-full bg-terpenos-light-green p-3">
                <Target className="h-6 w-6 text-terpenos-green" />
              </div>
              <h3 className="text-xl font-bold">{t("about.values.impact")}</h3>
              <p className="text-center text-sm text-muted-foreground">{t("about.values.impact.desc")}</p>
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
              <p className="text-muted-foreground">
                At Terpenos.com, our approach is rooted in science, guided by purpose, and fueled by innovation. From
                our state-of-the-art lab in Ecuador to our strategic presence in California, we apply rigorous standards
                to every step of our process—ensuring that every molecule we import or formulate meets pharmaceutical
                and food-grade benchmarks.
              </p>
              <p className="text-muted-foreground">
                We partner with multiple FDA-certified laboratories in the United States to validate the safety, purity,
                and consistency of our products. These collaborations reinforce our commitment to quality assurance and
                global compliance, bridging science and trust across borders.
              </p>
              <p className="text-muted-foreground">
                We don't just work with cannabis—we work with intention. Specializing in terpenes, CBD, and legal
                cannabinoids, we collaborate with pharmaceutical companies, food labs, and wellness brands that demand
                purity, traceability, and efficacy.
              </p>
              <p className="text-muted-foreground">
                Our work is grounded in the belief that cannabis is medicine. That conviction drives us to maintain the
                highest levels of integrity, transparency, and quality in an industry still defining its future. Whether
                we're formulating bespoke terpene profiles or importing active ingredients, we act as stewards of a
                plant we respect deeply.
              </p>
              <p className="text-muted-foreground">This is more than commerce. It's a mission. It's our approach.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
