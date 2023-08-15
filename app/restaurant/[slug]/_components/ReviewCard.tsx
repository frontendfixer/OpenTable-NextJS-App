const ReviewCard = () => {
  return (
    <div className="flex">
      <div className="flex w-1/6 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
          <h2 className="text-2xl text-white">MJ</h2>
        </div>
        <p className="text-center">Micheal Jordan</p>
      </div>
      <div className="ml-10 w-5/6">
        <div className="flex items-center">
          <div className="mr-5 flex">*****</div>
        </div>
        <div className="mt-5">
          <p className="text-lg font-light">
            Laurie was on top of everything! Slow night due to the snow storm so
            it worked in our favor to have more one on one with the staff.
            Delicious and well worth the money.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
