import { Beaker, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Terpenos</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Pioneering scientific research and innovation for a better future.
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
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, Terpenos began with a simple mission: to advance scientific knowledge and create
                innovative solutions that address real-world challenges. What started as a small research team has grown
                into a leading scientific organization with a global presence.
              </p>
              <p className="text-muted-foreground">
                Our journey has been marked by groundbreaking discoveries, technological innovations, and a steadfast
                commitment to scientific excellence. Today, we continue to push the boundaries of what's possible,
                driven by curiosity and a passion for discovery.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Terpenos laboratory"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="max-w-[900px] text-muted-foreground">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-muted p-3">
                <Beaker className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Scientific Integrity</h3>
              <p className="text-center text-sm text-muted-foreground">
                We uphold the highest standards of scientific rigor and ethical conduct in all our work.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-muted p-3">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-center text-sm text-muted-foreground">
                We foster a culture of creativity and continuous improvement to drive scientific progress.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-muted p-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-center text-sm text-muted-foreground">
                We believe in the power of teamwork and partnerships to solve complex challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-muted p-3">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Impact</h3>
              <p className="text-center text-sm text-muted-foreground">
                We are committed to research that makes a meaningful difference in the world.
              </p>
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
                  src="/placeholder.svg?height=600&width=600"
                  alt="Scientific research process"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Approach</h2>
              <p className="text-muted-foreground">
                At Terpenos, we combine rigorous scientific methodology with innovative thinking to tackle complex
                challenges. Our interdisciplinary approach brings together experts from diverse fields, fostering
                collaboration and cross-pollination of ideas.
              </p>
              <p className="text-muted-foreground">
                We believe in the power of data-driven decision making and evidence-based solutions. Our research
                process is characterized by meticulous attention to detail, thorough validation, and a commitment to
                reproducibility.
              </p>
              <p className="text-muted-foreground">
                By maintaining strong connections with academic institutions, industry partners, and the broader
                scientific community, we ensure that our work remains at the cutting edge of scientific advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
