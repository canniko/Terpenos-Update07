"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, Clock, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Blog post data - keeping only the Cannabis Oil blog
const blogPosts = [
  {
    id: 1,
    title: "Cannabis Oil: A Traditional Recipe", // This will be translated when displayed
    excerpt: "Explore the history and traditional uses of cannabis-infused oils, along with a simple recipe.",
    date: "May 10, 2023",
    author: "Alex Garcia",
    authorImage: "/images/alex-garcia.jpeg",
    category: "Traditional",
    image: "/cannabis-infused-oil.jpeg",
    slug: "cannabis-infused-oils-tradition-recipe",
    readTime: "10 min read",
    featured: true,
  },
]

export default function BlogPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Filter blog posts based on search term
  const filteredPosts = searchTerm
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : blogPosts

  const featuredPost = filteredPosts.find((post) => post.featured)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality is already handled by the filter above
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/blog-banner.png")',
          backgroundPosition: "center 70%",
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat text-white">
                {t("blog.hero.title")}
              </h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("blog.hero.subtitle")}
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2" onSubmit={handleSearch}>
                <Input
                  type="search"
                  placeholder={t("blog.search.placeholder")}
                  className="max-w-lg flex-1 bg-white/90 placeholder:text-gray-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" size="icon" className="bg-terpenos-green hover:bg-terpenos-forest-green">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts - Medium Style */}
      <section className="w-full py-12 md:py-24 bg-terpenos-offwhite">
        <div className="container px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="space-y-16">
              {/* Featured Article */}
              {featuredPost && (
                <div className="pb-16">
                  <h2 className="text-2xl font-bold mb-8 text-terpenos-forest-green">{t("blog.featured_article")}</h2>
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    <div className="md:col-span-3">
                      <Link href={`/blog/${featuredPost.slug}`} className="block">
                        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
                          <img
                            src={featuredPost.image || "/placeholder.svg"}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </Link>
                      <Badge variant="outline" className="bg-terpenos-light-green text-terpenos-forest-green mb-3">
                        {featuredPost.category}
                      </Badge>
                      <Link href={`/blog/${featuredPost.slug}`} className="block group">
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-terpenos-green transition-colors">
                          {featuredPost.slug === "cannabis-infused-oils-tradition-recipe"
                            ? t("blog.cannabis_oil.title")
                            : featuredPost.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-lg mb-6">
                        {featuredPost.slug === "cannabis-infused-oils-tradition-recipe"
                          ? t("blog.cannabis_oil.excerpt")
                          : featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/images/alex-garcia.jpeg" alt={featuredPost.author} />
                          <AvatarFallback>AG</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{featuredPost.date}</span>
                            <span className="mx-1">·</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-terpenos-green" />
                        <h3 className="font-semibold text-lg">{t("blog.in_this_article")}</h3>
                      </div>
                      <div className="space-y-4 text-muted-foreground">
                        <p>• {t("blog.cannabis_oil.outline.history")}</p>
                        <p>• {t("blog.cannabis_oil.outline.traditional_uses")}</p>
                        <p>• {t("blog.cannabis_oil.outline.modern_applications")}</p>
                        <p>• {t("blog.cannabis_oil.outline.recipe")}</p>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="mt-4 w-full">
                          {t("blog.read_full_article")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-terpenos-charcoal">{t("blog.no_posts_found")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 bg-terpenos-offwhite border-t border-terpenos-light-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter font-montserrat">{t("blog.newsletter.title")}</h2>
              <p className="max-w-[900px] text-terpenos-charcoal">{t("blog.newsletter.subtitle")}</p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">{t("blog.newsletter.button")}</Button>
              </form>
              <p className="text-xs text-terpenos-charcoal">{t("blog.newsletter.privacy")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
