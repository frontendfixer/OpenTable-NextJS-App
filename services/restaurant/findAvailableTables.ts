import { times } from '@/data'
import { PrismaClient, Table } from '@prisma/client'
import { NextApiResponse } from 'next'

const prisma = new PrismaClient()

export const findAvailableTable = async ({
  time,
  day,
  res,
  restaurant,
}: {
  time: string
  day: string
  res: NextApiResponse
  restaurant: {
    open_time: string
    close_time: string
    tables: Table[]
  }
}) => {
  const searchTimes = times.find((t) => {
    return t.time === time
  })?.searchTimes as string[]

  if (!searchTimes) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided in time',
    })
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      bookingOnTable: true,
    },
  })

  const bookingTableObj: { [key: string]: { [key: number]: true } } = {}

  bookings.forEach((booking) => {
    bookingTableObj[booking.booking_time.toISOString()] =
      booking.bookingOnTable.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        }
      }, {})
  })

  const tables = restaurant.tables

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    }
  })

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTableObj[t.date.toISOString()]) {
        if (bookingTableObj[t.date.toISOString()][table.id]) {
          return false
        }
      }
      return true
    })
  })

  return searchTimesWithTables
}
