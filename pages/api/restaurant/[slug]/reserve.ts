import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug, day, time, partySize } = req.query as {
    slug: string
    day: string
    time: string
    partySize: string
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  })

  if (!restaurant) {
    return res.status(404).json({ errorMessage: 'Restaurant not found' })
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return res.status(400).json({
      errorMessage: 'Restaurant not open at that time',
    })
  }

  return res.json({ slug, day, time, partySize })
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-08-24&time=14:00:00.000Z&partySize=4
