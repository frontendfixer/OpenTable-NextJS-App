import { findAvailableTable } from '@/services/restaurant/findAvailableTables'
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
    select: {
      tables: true,
      open_time: true,
      close_time: true,
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

  const searchTimesWithTables = await findAvailableTable({
    time,
    day,
    res,
    restaurant,
  })

  if (!searchTimesWithTables) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided',
    })
  }

  const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
  })

  if (!searchTimeWithTables) {
    return res.status(400).json({
      errorMessage: 'No availability, cannot book',
    })
  }

  const tableCount: {
    2: number[]
    4: number[]
    6: number[]
    8: number[]
  } = {
    2: [],
    4: [],
    6: [],
    8: [],
  }

  searchTimeWithTables.tables.forEach((table) => {
    if (table.seats === 2) {
      tableCount[2].push(table.id)
    }
    if (table.seats === 4) {
      tableCount[4].push(table.id)
    }
    if (table.seats === 6) {
      tableCount[6].push(table.id)
    }
    if (table.seats === 8) {
      tableCount[8].push(table.id)
    }
  })

  return res.json({ searchTimeWithTables, tableCount })
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-08-24&time=14:00:00.000Z&partySize=4
