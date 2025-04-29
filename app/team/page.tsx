"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Elena Rodriguez",
    role: "Chief Scientific Officer",
    bio: "Dr. Rodriguez leads our research initiatives with over 15 years of experience in molecular biology and biochemistry. She has published numerous papers in prestigious scientific journals.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "elena@terpenos.com",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Research Director",
    bio: "With a PhD in Chemical Engineering, Dr. Chen oversees our laboratory operations and research methodology development. His expertise in analytical techniques has been instrumental in our success.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "michael@terpenos.com",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    role: "Head of Product Development",
    bio: "Dr. Johnson bridges the gap between research and application, transforming scientific discoveries into practical solutions. She holds multiple patents in biotechnology.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "sarah@terpenos.com",
  },
  {
    id: 4,
    name: "Prof. James Wilson",
    role: "Scientific Advisor",
    bio: "A renowned academic and industry consultant, Prof. Wilson provides strategic guidance to our research programs and helps maintain our scientific excellence.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "james@terpenos.com",
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    role: "Senior Researcher",
    bio: "Dr. Patel specializes in computational modeling and data analysis. Her innovative approaches have revolutionized our research methodologies.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "aisha@terpenos.com",
  },
  {
    id: 6,
    name: "Dr. Carlos Mendez",
    role: "Laboratory Manager",
    bio: "Dr. Mendez ensures the smooth operation of our state-of-the-art facilities. His attention to detail and commitment to safety standards are unparalleled.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    email: "carlos@terpenos.com",
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
