import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RatingStars from "./rating-stars"

interface Review {
  id: string
  name: string | null
  stars: number
  comment: string
  created_at: string
}

interface ReviewsListProps {
  reviews: Review[]
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center text-gray-600">
          لا توجد تقييمات لهذا الحي حتى الآن. كن أول من يقيّم!
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <Card key={review.id} className="w-full shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">{review.name || "مستخدم مجهول"}</CardTitle>
              <RatingStars value={review.stars} readOnly size={18} />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(review.created_at).toLocaleDateString("ar-SA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
