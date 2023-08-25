'use client'

import useReservation from '@/hooks/useReservation'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress } from '@mui/material'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'

const ReserveForm = ({
  slug,
  searchParams,
}: {
  slug: string
  searchParams: { date: string; partySize: string }
}) => {
  const { date, partySize } = searchParams
  const [day, time] = date.split('T')

  const [inputs, setInputs] = useState({
    bookerFirstName: '',
    bookerLastName: '',
    bookerPhone: '',
    bookerEmail: '',
    bookerOccasion: '',
    bookerRequest: '',
  })
  const [disabled, setDisabled] = useState(true)
  const { loading, error, createReservation } = useReservation()
  const [didBooked, setDidBooked] = useState(false)

  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handelClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      day,
      time,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerPhone: inputs.bookerPhone,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
      setDidBooked,
    })
  }

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false)
    }
    return setDisabled(true)
  }, [inputs])

  return (
    <div className="mt-10 flex w-[660px] flex-wrap justify-between">
      {didBooked ? (
        <div className="grid h-full w-full place-content-center text-center">
          <FontAwesomeIcon
            icon={faCheckDouble}
            className="mx-auto my-10 h-20 w-20 text-green-400"
          />
          <h1 className="text-2xl font-bold">You are all booked up</h1>
          <p>Enjoy your reservation</p>
          <Link
            href={`/restaurant/${slug}`}
            className="mt-8 rounded bg-red-600 p-2 font-medium text-white"
          >
            Back to Restaurant
          </Link>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="First name"
            name="bookerFirstName"
            value={inputs.bookerFirstName}
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Last name"
            name="bookerLastName"
            value={inputs.bookerLastName}
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Phone number"
            name="bookerPhone"
            value={inputs.bookerPhone}
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Email"
            name="bookerEmail"
            value={inputs.bookerEmail}
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            value={inputs.bookerOccasion}
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Requests (optional)"
            name="bookerRequest"
            value={inputs.bookerRequest}
            onChange={handelChangeInput}
          />
          <button
            className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-400"
            disabled={disabled || loading}
            onClick={handelClick}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              'Complete reservation'
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </>
      )}
    </div>
  )
}

export default ReserveForm
