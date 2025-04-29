import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Advances in Molecular Analysis Techniques",
    excerpt: "Exploring the latest breakthroughs in molecular analysis and their implications for scientific research.",
    date: "April 15, 2023",
    author: "Dr. Elena Rodriguez",
    category: "Research",
    image: "/placeholder.svg?height=400&width=600",
    slug: "advances-in-molecular-analysis",
  },
  {
    id: 2,
    title: "The Future of Scientific Instrumentation",
    excerpt: "How emerging technologies are transforming laboratory equipment and research capabilities.",
    date: "March 22, 2023",
    author: "Dr. Michael Chen",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-scientific-instrumentation",
  },
  {
    id: 3,
    title: "Sustainable Practices in Laboratory Settings",
    excerpt: "Implementing eco-friendly approaches to scientific research without compromising quality.",
    date: "February 10, 2023",
    author: "Dr. Sarah Johnson",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-laboratory-practices",
  },
  {
    id: 4,
    title: "Data Analysis Methods for Complex Datasets",
    excerpt: "Innovative approaches to extracting meaningful insights from large and complex scientific data.",
    date: "January 28, 2023",
    author: "Dr. Aisha Patel",
    category: "Data Science",
    image: "/placeholder.svg?height=400&width=600",
    slug: "data-analysis-complex-datasets",
  },
  {
    id: 5,
    title: "Collaborative Research in the Digital Age",
    excerpt: "How digital tools and platforms are enabling unprecedented collaboration in scientific research.",
    date: "December 15, 2022",
    author: "Prof. James Wilson",
    category: "Collaboration",
    image: "/placeholder.svg?height=400&width=600",
    slug: "collaborative-research-digital-age",
  },
  {
    id: 6,
    title: "Quality Control in Scientific Research",
    excerpt: "Best practices for maintaining rigorous quality standards throughout the research process.",
    date: "November 5, 2022",
    author: "Dr. Carlos Mendez",
    category: "Best Practices",
    image: "/placeholder.svg?height=400&width=600",
    slug: "quality-control-scientific-research",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, discoveries, and perspectives from our scientific team.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input type="search" placeholder="Search articles..." className="max-w-lg flex-1" />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-sm">By {post.author}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Stay Updated</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Subscribe to our newsletter to receive the latest scientific insights and updates.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
