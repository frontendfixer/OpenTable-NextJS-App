'use client'

import { ChangeEvent, useEffect, useState } from 'react'

const ReserveForm = () => {
  const [inputs, setInputs] = useState({
    bookerFirstName: '',
    bookerLastName: '',
    bookerPhone: '',
    bookerEmail: '',
    bookerOccasion: '',
    bookerRequest: '',
  })
  const [disabled, setDisabled] = useState(true)

  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
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
        disabled={disabled}
      >
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  )
}

export default ReserveForm
