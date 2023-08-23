'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { partySize, times } from '@/data/'
import 'react-datepicker/dist/react-datepicker.css'

const ReservationCard = ({
  openTime,
  closeTime,
}: {
  openTime: string
  closeTime: string
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = []
    let isWithinWindow = false

    times.forEach((time) => {
      if (time.time === openTime) {
        return (isWithinWindow = true)
      }
      if (isWithinWindow) {
        return timesWithinWindow.push(time)
      }
      if (time.time === closeTime) {
        return (isWithinWindow = false)
      }
    })
    return timesWithinWindow
  }

  return (
    <div className="rounded bg-white p-3 ">
      <div className="border-b pb-2 text-center font-bold">
        <h4 className="mr-7 text-xl">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col gap-1">
        <label htmlFor="">Party size</label>
        <select
          name=""
          className="rounded border-b bg-slate-200 px-2 py-3 font-light"
          id=""
        >
          {partySize.map((size) => (
            <option value={size.value} key={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex w-[48%] flex-col gap-1">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={selectedDate}
            dateFormat="MMMM dd"
            onChange={(date: Date) => setSelectedDate(date)}
            className="w-full rounded border-b border-none bg-slate-200 px-2 py-3 font-light"
          />
        </div>
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="rounded border-b bg-slate-200 px-2 py-3 font-light"
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option value={time.time} key={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5 pb-2">
        <button className="w-full rounded bg-red-600 p-4 font-bold text-white">
          Find a Time
        </button>
      </div>
    </div>
  )
}

export default ReservationCard
