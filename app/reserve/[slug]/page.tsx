import Header from './_components/Header'
import ReserveForm from './_components/ReserveForm'
import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
      main_image: true,
    },
  })

  if (!restaurant) {
    return notFound()
  }
  return restaurant
}

const Reserve = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header restaurant={restaurant} />
        <ReserveForm />
      </div>
    </div>
  )
}

export default Reserve
