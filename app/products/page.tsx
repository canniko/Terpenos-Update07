import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FlaskRoundIcon as Flask, Microscope, Database, Dna } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Products & Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Innovative scientific solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Flask className="h-6 w-6" />
                    </div>
                    <CardTitle>Analytical Kits</CardTitle>
                    <CardDescription>High-precision tools for scientific analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our analytical kits provide researchers with reliable, accurate tools for a wide range of
                      scientific applications. Each kit is meticulously designed and rigorously tested to ensure
                      consistent results.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Microscope className="h-6 w-6" />
                    </div>
                    <CardTitle>Research Equipment</CardTitle>
                    <CardDescription>State-of-the-art instruments for scientific discovery</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our research equipment combines cutting-edge technology with user-friendly design. From basic
                      laboratory tools to specialized instruments, we offer solutions that enhance research
                      capabilities.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Database className="h-6 w-6" />
                    </div>
                    <CardTitle>Data Analysis Software</CardTitle>
                    <CardDescription>Powerful tools for scientific data processing</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our software solutions streamline data analysis workflows, enabling researchers to extract
                      meaningful insights from complex datasets. With intuitive interfaces and robust algorithms, our
                      tools accelerate scientific discovery.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Dna className="h-6 w-6" />
                    </div>
                    <CardTitle>Custom Research</CardTitle>
                    <CardDescription>Tailored scientific investigations</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our team of experienced scientists can design and conduct research projects tailored to your
                      specific needs. From initial concept to final report, we provide comprehensive research services.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Microscope className="h-6 w-6" />
                    </div>
                    <CardTitle>Laboratory Analysis</CardTitle>
                    <CardDescription>Precise analytical services</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our state-of-the-art laboratory offers a wide range of analytical services. With advanced
                      equipment and skilled technicians, we deliver accurate, reliable results with quick turnaround
                      times.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-2 w-fit rounded-full bg-muted p-2">
                      <Database className="h-6 w-6" />
                    </div>
                    <CardTitle>Consulting</CardTitle>
                    <CardDescription>Expert scientific guidance</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground">
                      Our consulting services provide expert guidance on research design, methodology, data analysis,
                      and interpretation. Our consultants bring years of experience and specialized knowledge to help
                      you overcome scientific challenges.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Case Studies</h2>
            <p className="max-w-[900px] text-muted-foreground">
              See how our products and services have helped organizations achieve their scientific goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Case study 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Pharmaceutical Research Breakthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  How our analytical tools helped a pharmaceutical company accelerate their drug discovery process by
                  40%.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#">
                  <Button variant="outline" size="sm">
                    Read Case Study
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Case study 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Environmental Monitoring Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  How our custom research services helped an environmental agency develop a comprehensive monitoring
                  system.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#">
                  <Button variant="outline" size="sm">
                    Read Case Study
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Case study 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Academic Research Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  How our consulting services and equipment helped a university research team publish groundbreaking
                  findings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#">
                  <Button variant="outline" size="sm">
                    Read Case Study
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Contact us today to discuss how our products and services can support your scientific endeavors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
