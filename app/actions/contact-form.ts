"use server"

import { neon } from "@neondatabase/serverless"

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  inquiryType: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Connect to the Neon database
    const sql = neon(process.env.DATABASE_URL!)

    // Insert the form data into the contact_submissions table
    await sql`
      INSERT INTO contact_submissions (name, email, inquiry_type, subject, message)
      VALUES (${formData.name}, ${formData.email}, ${formData.inquiryType}, ${formData.subject}, ${formData.message})
    `

    return {
      success: true,
      message: "Thank you for reaching out! We'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}
