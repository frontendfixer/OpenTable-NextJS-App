const ReservationCard = () => {
  return (
    <div className="rounded bg-white p-3 ">
      <div className="border-b pb-2 text-center font-bold">
        <h4 className="mr-7 text-xl">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col gap-1">
        <label htmlFor="">Party size</label>
        <select name="" className="rounded border-b px-2 py-3 font-light" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex w-[60%] flex-col gap-1">
          <label htmlFor="">Date</label>
          <input
            type="text"
            className="w-full rounded border-b border-none bg-slate-100 px-2 py-3 font-light"
          />
        </div>
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="rounded border-b px-2 py-3 font-light"
          >
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
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
