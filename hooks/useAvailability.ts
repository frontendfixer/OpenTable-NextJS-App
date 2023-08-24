'use client'

import axios from 'axios'
import { useState } from 'react'

const useAvailability = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState<
    { time: string; seats: number; available: boolean }[] | null
  >(null)

  const fetchAvailability = async ({
    slug,
    day,
    time,
    partySize,
  }: {
    slug: string
    day: string
    time: string
    partySize: string
  }) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        },
      )
      setLoading(false)
      setData(response.data)
    } catch (error: any) {
      setLoading(false)
      setError(error.response.data.errorMessage)
    }
  }

  return { loading, data, error, fetchAvailability }
}

export default useAvailability
