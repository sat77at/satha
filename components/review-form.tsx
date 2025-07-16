"use client"

import { useState, useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RatingStars from "./rating-stars"
import { submitReview } from "@/app/actions/reviews"
import { toast } from "@/hooks/use-toast"

interface ReviewFormProps {
  districtSlug: string
}

export default function ReviewForm({ districtSlug }: ReviewFormProps) {
  const [stars, setStars] = useState(0)
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const reviewed = localStorage.getItem(`reviewed_${districtSlug}`)
      if (reviewed) {
        setHasSubmitted(true)
      }
    }
  }, [districtSlug])

  const [state, formAction, isPending] = useActionState(submitReview, {
    success: false,
    message: "",
  })

  useEffect(() => {
    console.log("ReviewForm: State updated", state) // Log state changes
    if (state.message) {
      toast({
        title: state.success ? "نجاح!" : "خطأ!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
      if (state.success) {
        setHasSubmitted(true)
        setStars(0)
        setComment("")
        setName("")
        if (typeof window !== "undefined") {
          localStorage.setItem(`reviewed_${districtSlug}`, "true")
        }
      }
    }
  }, [state, districtSlug])

  const handleSubmit = (formData: FormData) => {
    console.log("ReviewForm: handleSubmit called") // Log when handleSubmit is called
    console.log("ReviewForm: Current stars:", stars, "Comment length:", comment.trim().length) // Log current values

    if (stars === 0) {
      toast({
        title: "خطأ في الإرسال",
        description: "الرجاء اختيار عدد النجوم.",
        variant: "destructive",
      })
      console.log("ReviewForm: Validation failed - stars missing") // Log validation failure
      return
    }
    if (comment.trim().length < 10) {
      toast({
        title: "خطأ في الإرسال",
        description: "الرجاء كتابة تعليق لا يقل عن 10 أحرف.",
        variant: "destructive",
      })
      console.log("ReviewForm: Validation failed - comment too short") // Log validation failure
      return
    }

    formData.append("stars", stars.toString())
    formData.append("district_slug", districtSlug)
    console.log("ReviewForm: Validation passed, calling formAction") // Log validation success
    formAction(formData)
  }

  if (hasSubmitted) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-green-600">شكراً لتقييمك!</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-700">
          لقد قمت بالفعل بتقديم تقييم لهذا الحي. نقدر مساهمتك!
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">أضف تقييمك</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="stars" className="block text-sm font-medium text-gray-700 mb-2">
              عدد النجوم <span className="text-red-500">*</span>
            </label>
            <RatingStars value={stars} onChange={setStars} />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              تعليقك <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="comment"
              name="comment"
              rows={4}
              placeholder="اكتب تعليقك هنا..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="resize-y"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              اسمك (اختياري)
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isPending}>
            {isPending ? "جاري الإرسال..." : "إرسال التقييم"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
