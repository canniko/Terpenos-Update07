"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alejandro Paz",
    role: "Chief Scientific Officer",
    bio: "Alejandro leads our research initiatives with over 10 years of experience in biotechnology. He leads all science and production.",
    image: "/images/alejandro-paz.jpeg",
    linkedin: "#",
    email: "alejandro@terpenos.com",
  },
  {
    id: 2,
    name: "Juan Cano",
    role: "Chief Executive Officer",
    bio: "With an Masters in Business Administration and successful exits, Juan brings a commercial powerhouse to the team. He leads sales and operations.",
    image: "/images/juan-cano.jpeg",
    linkedin: "#",
    email: "jcano@terpenos.com",
  },
  {
    id: 3,
    name: "Alex Garcia",
    role: "CMO/Big Brain",
    bio: "Alex is the interim CMO and provides support and guidance to the team as chairman of the board of directors. He has founded multiple successful companies before and consults for research and innovation laboratories in the United States.",
    image: "/images/alex-garcia.jpeg",
    linkedin: "#",
    email: "alex@terpenos.com",
  },
]

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("team.hero.title")}</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("team.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <div className="flex space-x-4">
                      <Link href={member.linkedin} className="text-muted-foreground hover:text-foreground">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-terpenos-light-green">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-terpenos-forest-green">{t("team.join.title")}</h2>
              <p className="text-terpenos-forest-green">{t("team.join.p1")}</p>
              <p className="text-terpenos-forest-green">{t("team.join.p2")}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    {t("team.join.button")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
