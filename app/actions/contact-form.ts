"use server"

import { neon } from "@neondatabase/serverless"

// Define the form data type
export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  inquiryType: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Create a SQL client using the environment variable
    const sql = neon(process.env.DATABASE_URL!)

    // Insert the form data into the contact_submissions table
    const result = await sql`
      INSERT INTO contact_submissions (name, email, inquiry_type, subject, message)
      VALUES (${formData.name}, ${formData.email}, ${formData.inquiryType}, ${formData.subject}, ${formData.message})
      RETURNING id
    `

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully!",
      id: result[0].id,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    // Return error response
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}
