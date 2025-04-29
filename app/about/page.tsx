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
In the heart of Quito, Ecuador, lies a pioneering force in the cannabis industry—Terpenos.com. Established in 2021, our journey is not just a tale of business inception but a profound narrative that intertwines with the history and evolution of cannabis as medicine. Our roots delve deep into the early days of cannabis legalization campaigns in Berkeley and Oakland, California, where our founders were not just spectators but active volunteers and advocates. Their dedication to the cause saw them alongside influential organizations such as Oaksterdam and Harborside, witnessing first-hand the challenges and triumphs that shaped the industry.
              </p>
              <p className="text-muted-foreground">
Our story, however, did not start with the founding of Terpenos.com. It is a continuation of a decade-long legacy of excellence and innovation in the pharmaceutical and food manufacturing sectors. Our founders brought with them a wealth of experience, having worked with top-tier private label food and pharmaceutical manufacturers, where they were instrumental in implementing world-class systems. This invaluable experience laid the groundwork for what Terpenos.com would become—a leader in the cannabis space, dedicated to the highest standards of quality and safety.
              </p>
              <p>
Today, Terpenos.com stands as a fully licensed importer of cannabis-derived molecules, operating out of Ecuador with a satellite presence in California. Our laboratory is at the forefront of developing and maintaining processes that guarantee the pharmaceutical and food-grade quality of our formulations and raw materials. We specialize in terpenes, CBD, and other legal cannabinoids, catering to customers that seek unparalleled purity and efficacy. Our story is a testament to the belief that cannabis is medicine, a belief that has driven us from the early days of legalization campaigns to the cutting-edge of the industry today. At Terpenos.com, we are more than just a company; we are a part of a global movement towards wellness, innovation, and the unyielding pursuit of excellence in the cannabis domain.
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
