"use server"

import { createClient } from "@/lib/supabase"
import { Resend } from "resend" // Import Resend

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)
const SENDER_EMAIL = process.env.EMAIL_FROM || "support@satha.com" // Use a default if not set

export async function submitContactForm(formData: FormData) {
  const supabase = createClient()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // التحقق من صحة البيانات
  if (!name || !email || !message) {
    return {
      success: false,
      message: "يرجى ملء جميع الحقول المطلوبة",
    }
  }

  try {
    // إدراج البيانات في قاعدة البيانات
    const { error } = await supabase.from("contact_submissions").insert([
      {
        name,
        email,
        phone,
        subject,
        message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("خطأ في إدراج البيانات:", error)
      return {
        success: false,
        message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      }
    }

    // Send email notification for new contact form submission
    try {
      await resend.emails.send({
        from: SENDER_EMAIL,
        to: "sat77atjeddah@gmail.com", // User's specified email
        subject: `رسالة جديدة من نموذج الاتصال: ${subject || "لا يوجد موضوع"}`,
        html: `
            <p>تم استلام رسالة جديدة من نموذج الاتصال:</p>
            <ul>
              <li><strong>الاسم:</strong> ${name}</li>
              <li><strong>البريد الإلكتروني:</strong> ${email}</li>
              <li><strong>رقم الهاتف:</strong> ${phone || "لا يوجد"}</li>
              <li><strong>الموضوع:</strong> ${subject || "لا يوجد"}</li>
              <li><strong>الرسالة:</strong><br>${message.replace(/\n/g, "<br>")}</li>
            </ul>
            <p>يرجى الرد في أقرب وقت ممكن.</p>
          `,
      })
      console.log("Email sent for new contact form submission.")
    } catch (emailError: any) {
      console.error("Failed to send email for contact form:", emailError)
      // Do not fail the form submission if email fails
    }

    return {
      success: true,
      message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    }
  } catch (error) {
    console.error("خطأ غير متوقع:", error)
    return {
      success: false,
      message: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
    }
  }
}

/* 
SQL لإنشاء جدول contact_submissions في Supabase:

CREATE TABLE contact_submissions (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(20),
subject VARCHAR(500),
message TEXT NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- إضافة فهرس للبحث السريع
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
*/
