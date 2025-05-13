"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { submitContactForm, type ContactFormData } from "../actions/contact-form"
import { useLanguage } from "@/lib/i18n/context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit the form data to the server action
      const result = await submitContactForm(formData)

      setSubmitResult(result)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form data on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          inquiryType: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.hero.title")}</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("contact.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.form.title")}</CardTitle>
                <CardDescription>{t("contact.form.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-6">
                    <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-800/20 dark:text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">{t("contact.form.success.title")}</h3>
                    <p className="text-muted-foreground">
                      {submitResult?.message || t("contact.form.success.message")}
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      {t("contact.form.success.button")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitResult && !submitResult.success && (
                      <div className="p-3 bg-red-100 text-red-600 rounded-md dark:bg-red-900/20 dark:text-red-400">
                        {submitResult.message}
                      </div>
                    )}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form.name")}</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t("contact.form.name")}
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form.email")}</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder={t("contact.form.email")}
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">{t("contact.form.inquiryType")}</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("contact.form.inquiryType")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="products">Products</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t("contact.form.subject")}
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.form.message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("contact.form.message")}
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{t("contact.info.title")}</h2>
                <p className="text-muted-foreground mt-2">{t("contact.info.subtitle")}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-muted-foreground shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.address")}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Multicentro Av. 6 de Diciembre
                        <br />
                        Quito, Ecuador
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-muted-foreground shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.phone")}</h3>
                      <p className="text-sm text-muted-foreground mt-1">+593 2-223-9878</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-muted-foreground shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.email")}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        sales@terpenos.com
                        <br />
                        support@terpenos.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-muted-foreground shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.hours")}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday
                        <br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-b-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4462.543197722294!2d-78.48804182503538!3d-0.1994307997986042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b702ce1ac5d%3A0xb5c0c27a748dc1bd!2sMulticentro%20Shopping%20Center!5e1!3m2!1sen!2sus!4v1747105951635!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="aspect-video"
                      title="Terpenos Location - Multicentro Shopping Center"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">{t("contact.faq.title")}</h2>
            <p className="max-w-[900px] text-muted-foreground">{t("contact.faq.subtitle")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What areas of research does Terpenos specialize in?</h3>
                <p className="text-muted-foreground">
                  Terpenos specializes in molecular biology, biochemistry, analytical chemistry, and related fields. Our
                  interdisciplinary approach allows us to tackle complex scientific challenges across various domains.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer custom research services?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide tailored research services to meet specific client needs. Our team can design and
                  execute research projects from concept to completion, delivering comprehensive results and analysis.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What is your typical turnaround time for laboratory analysis?</h3>
                <p className="text-muted-foreground">
                  Turnaround times vary depending on the complexity of the analysis, but we strive to deliver results as
                  efficiently as possible without compromising quality. Standard analyses typically take 5-7 business
                  days.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you ship products internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship our products worldwide. International shipping times and costs vary by destination.
                  Please contact us for specific information regarding your location.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I schedule a consultation with your scientific team?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We offer consultations with our scientific experts to discuss your research needs,
                  challenges, and potential solutions. Please contact us to arrange a meeting.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer training for your analytical equipment?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive training for all our equipment and software. Training can be conducted
                  on-site or remotely, depending on your preference and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
