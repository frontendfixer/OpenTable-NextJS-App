'use client'

import axios from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'

const useReservation = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerPhone,
    bookerEmail,
    bookerOccasion,
    bookerRequest,
    setDidBooked,
  }: {
    slug: string
    partySize: string
    day: string
    time: string
    bookerFirstName: string
    bookerLastName: string
    bookerPhone: string
    bookerEmail: string
    bookerOccasion: string
    bookerRequest: string
    setDidBooked: Dispatch<SetStateAction<boolean>>
  }) => {
    setLoading(true)
    try {
      const response = await axios.post(
        `https://open-table-next-js-app.vercel.app/api/restaurant/${slug}/reserve`,
        {
          bookerFirstName,
          bookerLastName,
          bookerPhone,
          bookerEmail,
          bookerOccasion,
          bookerRequest,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        },
      )
      setLoading(false)
      setDidBooked(true)
      return response.data
    } catch (error: any) {
      setLoading(false)
      setError(error.response.data.errorMessage)
    }
  }

  return { loading, error, createReservation }
}

export default useReservation
