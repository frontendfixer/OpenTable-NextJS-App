import { Metadata } from 'next'
import Header from './_components/Header'
import ReserveForm from './_components/ReserveForm'
import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import generateFormattedTitle from '@/utils/GeneratedFormattedTitle'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export function generateMetadata({ params, searchParams }: Props): Metadata {
  return {
    title: `Reserve: ${generateFormattedTitle(
      params.slug,
    )} | Open Table Reservation`,
    description: `Reserve a table at ${generateFormattedTitle(
      params.slug,
    )} on ${String(searchParams.date).split('T')[0]} for ${
      searchParams.partySize
    } people`,
  }
}

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
  searchParams,
}: {
  params: {
    slug: string
  }
  searchParams: { date: string; partySize: string }
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header restaurant={restaurant} searchParams={searchParams} />
        <ReserveForm />
      </div>
    </div>
  )
}

export default Reserve
