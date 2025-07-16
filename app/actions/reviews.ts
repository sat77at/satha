"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"
import { Resend } from "resend" // Import Resend

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)
const SENDER_EMAIL = process.env.EMAIL_FROM || "onboarding@resend.dev" // Use a default if not set

interface ReviewSubmissionState {
  success: boolean
  message: string
}

export async function submitReview(
  prevState: ReviewSubmissionState,
  formData: FormData,
): Promise<ReviewSubmissionState> {
  console.log("Server Action: submitReview called") // Log server action entry
  const name = formData.get("name") as string | null
  const stars = Number.parseInt(formData.get("stars") as string)
  const comment = formData.get("comment") as string
  const district_slug = formData.get("district_slug") as string

  console.log("Server Action: Received data:", { name, stars, comment, district_slug }) // Log received data

  if (!stars || stars < 1 || stars > 5) {
    console.log("Server Action: Validation failed - stars") // Log server validation failure
    return { success: false, message: "الرجاء اختيار عدد النجوم من 1 إلى 5." }
  }
  if (!comment || comment.trim().length < 10) {
    console.log("Server Action: Validation failed - comment") // Log server validation failure
    return { success: false, message: "الرجاء كتابة تعليق لا يقل عن 10 أحرف." }
  }
  if (!district_slug) {
    console.log("Server Action: Validation failed - district_slug") // Log server validation failure
    return { success: false, message: "خطأ: لم يتم تحديد الحي." }
  }

  try {
    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          name: name || "مستخدم مجهول",
          stars,
          comment: comment.trim(),
          district_slug,
        },
      ])
      .select()

    if (error) {
      console.error("Error inserting review:", error) // Log Supabase error
      return { success: false, message: `فشل إرسال التقييم: ${error.message}` }
    }

    console.log("Server Action: Review inserted successfully:", data) // Log success

    // Send email notification for new review
    try {
      await resend.emails.send({
        from: SENDER_EMAIL,
        to: "sat77atjeddah@gmail.com", // User's specified email
        subject: "تقييم جديد على موقع سطحة جدة",
        html: `
            <p>تم استلام تقييم جديد:</p>
            <ul>
              <li><strong>الاسم:</strong> ${name || "مستخدم مجهول"}</li>
              <li><strong>النجوم:</strong> ${stars}</li>
              <li><strong>التعليق:</strong> ${comment.trim()}</li>
              <li><strong>الحي:</strong> ${district_slug}</li>
            </ul>
            <p>يرجى مراجعة لوحة التحكم.</p>
          `,
      })
      console.log("Email sent for new review.")
    } catch (emailError: any) {
      console.error("Failed to send email for new review:", emailError)
      // Do not fail the review submission if email fails
    }

    // Revalidate paths for all relevant pages to show the new review
    revalidatePath(`/`)
    revalidatePath(`/districts`)
    revalidatePath(`/services`)
    revalidatePath(`/satah-jeddah-accidents`)
    revalidatePath(`/satah-jeddah-luxury-cars`)
    revalidatePath(`/satah-jeddah-${district_slug}`)
    revalidatePath(`/satah-${district_slug}-jeddah`)

    return { success: true, message: "تم إرسال تقييمك بنجاح!" }
  } catch (error: any) {
    console.error("Unexpected error submitting review:", error) // Log unexpected errors
    return { success: false, message: `حدث خطأ غير متوقع: ${error.message || "الرجاء المحاولة مرة أخرى."}` }
  }
}

// Modified function to get ALL reviews
export async function getAllReviews() {
  const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching all reviews:", error)
    return []
  }
  return data
}
