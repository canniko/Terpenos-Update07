"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Calendar, Tag, Clock, Share2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CannabisInfusedOilsArticle() {
  const { t } = useLanguage()
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Featured Image */}
      <section className="w-full relative">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src="/cannabis-infused-oil.jpeg"
            alt="Cannabis-infused oil in glass bottles with cannabis leaves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 -mt-32 pb-8">
          <div className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terpenos-light-green text-terpenos-forest-green">
                <Tag className="mr-1 h-3 w-3" />
                {t("blog.cannabis_oil.tags.traditional")}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terpenos-light-green text-terpenos-forest-green">
                <Tag className="mr-1 h-3 w-3" />
                {t("blog.cannabis_oil.tags.recipes")}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terpenos-light-green text-terpenos-forest-green">
                <Tag className="mr-1 h-3 w-3" />
                {t("blog.cannabis_oil.tags.terpenes")}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
              {t("blog.cannabis_oil.title")}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <Avatar>
                <AvatarImage src="/images/alex-garcia.jpeg" alt="Alex Garcia" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Alex Garcia</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  May 10, 2023
                  <Clock className="ml-4 mr-2 h-4 w-4" />
                  10 min read
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{t("blog.cannabis_oil.excerpt")}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <p>{t("blog.cannabis_oil.history.p1")}</p>

              <p>{t("blog.cannabis_oil.history.p2")}</p>

              <p>{t("blog.cannabis_oil.history.p3")}</p>

              <h2>{t("blog.cannabis_oil.recipe.title")}</h2>

              <h3>{t("blog.cannabis_oil.recipe.ingredients.title")}</h3>
              <ul>
                {t("blog.cannabis_oil.recipe.ingredients.list")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                <li>
                  {t("blog.cannabis_oil.recipe.ingredients.terpenes.intro")}
                  <ul>
                    <li>{t("blog.cannabis_oil.recipe.ingredients.terpenes.limonene")}</li>
                    <li>{t("blog.cannabis_oil.recipe.ingredients.terpenes.linalool")}</li>
                    <li>{t("blog.cannabis_oil.recipe.ingredients.terpenes.myrcene")}</li>
                  </ul>
                </li>
              </ul>

              <h3>{t("blog.cannabis_oil.recipe.utensils.title")}</h3>
              <ul>
                {t("blog.cannabis_oil.recipe.utensils.list")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>

              <h3>{t("blog.cannabis_oil.recipe.instructions.title")}</h3>

              <h4>{t("blog.cannabis_oil.recipe.instructions.decarb.title")}</h4>
              <ol>
                {t("blog.cannabis_oil.recipe.instructions.decarb.steps")
                  .split("\n")
                  .map((step, index) => (
                    <li key={index}>{step.substring(step.indexOf(".") + 1).trim()}</li>
                  ))}
              </ol>

              <h4>{t("blog.cannabis_oil.recipe.instructions.infusion.title")}</h4>
              <ol>
                {t("blog.cannabis_oil.recipe.instructions.infusion.steps")
                  .split("\n")
                  .map((step, index) => (
                    <li key={index}>{step.substring(step.indexOf(".") + 1).trim()}</li>
                  ))}
              </ol>

              <h4>{t("blog.cannabis_oil.recipe.instructions.terpenes.title")}</h4>
              <ol>
                {t("blog.cannabis_oil.recipe.instructions.terpenes.steps")
                  .split("\n")
                  .map((step, index) => (
                    <li key={index}>{step.substring(step.indexOf(".") + 1).trim()}</li>
                  ))}
              </ol>

              <h4>{t("blog.cannabis_oil.recipe.instructions.straining.title")}</h4>
              <ol>
                {t("blog.cannabis_oil.recipe.instructions.straining.steps")
                  .split("\n")
                  .map((step, index) => (
                    <li key={index}>{step.substring(step.indexOf(".") + 1).trim()}</li>
                  ))}
              </ol>

              <h4>{t("blog.cannabis_oil.recipe.instructions.storage.title")}</h4>
              <ol>
                {t("blog.cannabis_oil.recipe.instructions.storage.steps")
                  .split("\n")
                  .map((step, index) => (
                    <li key={index}>{step.substring(step.indexOf(".") + 1).trim()}</li>
                  ))}
              </ol>

              <h3>{t("blog.cannabis_oil.recipe.usage.title")}</h3>
              <p>{t("blog.cannabis_oil.recipe.usage.text")}</p>

              <h3>{t("blog.cannabis_oil.recipe.notes.title")}</h3>
              <ul>
                <li>
                  <strong>{t("blog.cannabis_oil.recipe.notes.dosage").split(":")[0]}:</strong>{" "}
                  {t("blog.cannabis_oil.recipe.notes.dosage").split(":")[1].trim()}
                </li>
                <li>
                  <strong>{t("blog.cannabis_oil.recipe.notes.terpenes").split(":")[0]}:</strong>{" "}
                  {t("blog.cannabis_oil.recipe.notes.terpenes").split(":")[1].trim()}
                </li>
              </ul>

              <p>{t("blog.cannabis_oil.recipe.conclusion")}</p>

              <div className="bg-terpenos-light-green p-6 rounded-lg mt-8 mb-8">
                <p className="text-terpenos-forest-green font-medium italic">{t("blog.cannabis_oil.disclaimer")}</p>
              </div>

              <p>{t("blog.cannabis_oil.closing.p1")}</p>

              <p>{t("blog.cannabis_oil.closing.p2")}</p>
            </article>

            {/* Share and Navigation */}
            <div className="mt-12 pt-6 border-t border-terpenos-light-green">
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" onClick={() => router.push("/blog")} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("blog.back_to_blog")}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert(t("blog.link_copied"))
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  {t("blog.share_article")}
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{t("blog.related_articles")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/laboratory-equipment.png"
                      alt="Laboratory equipment for terpene analysis"
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Advances in Molecular Analysis Techniques</CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/blog/advances-in-molecular-analysis">
                      <Button variant="outline" size="sm">
                        {t("blog.read_more")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/sustainable-laboratory.png"
                      alt="Sustainable laboratory practices"
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Sustainable Practices in Laboratory Settings</CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/blog/sustainable-laboratory-practices">
                      <Button variant="outline" size="sm">
                        {t("blog.read_more")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
