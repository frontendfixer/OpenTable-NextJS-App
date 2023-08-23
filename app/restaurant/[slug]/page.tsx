import Title from './_components/Title'
import Rating from './_components/Rating'
import Description from './_components/Description'
import FoodImages from './_components/FoodImages'
import ReviewSection from './_components/Review'
import ReservationCard from './_components/ReservationCard'
import { Item, PrismaClient, Review } from '@prisma/client'
import { notFound } from 'next/navigation'
import generateFormattedTitle from '@/utils/GeneratedFormattedTitle'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: `${generateFormattedTitle(params.slug)} | OpenTable Restaurant`,
    description: `${generateFormattedTitle(params.slug)} Restaurant`,
  }
}

const prisma = new PrismaClient()

type RestaurantType = {
  id: number
  name: string
  main_image: string
  images: string[]
  description: string
  Item: Item[]
  Review: Review[]
}

export const fetchRestaurantBySlug = async (
  slug: string,
): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      main_image: true,
      Item: true,
      Review: true,
    },
  })
  if (!restaurant) notFound()
  return restaurant
}

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  const { name, description, images, Review } = restaurant

  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
      <div className="w-full px-4 md:w-2/3">
        <Title title={name} />
        <Rating reviews={Review} />
        <Description description={description} />
        <FoodImages images={images} />
        {Review.length === 0 ? '' : <ReviewSection reviews={Review} />}
      </div>
      <div className="relative mx-auto w-full text-reg md:w-[30%]">
        <ReservationCard />
      </div>
    </div>
  )
}

export default RestaurantDetails
