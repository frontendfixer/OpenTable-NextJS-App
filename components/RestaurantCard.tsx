const RestaurantCard = () => {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
      <img
        src="https://resizer.otstatic.com/v2/photos/wide-huge/1/24980223.webp"
        alt=""
        className="h-36 w-full"
      />
      <div className="p-1">
        <h3 className="mb-2 text-2xl font-bold">Russian Vodka Room</h3>
        <div className="item-start flex">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2">77 reviews</p>
        </div>
      </div>
      <div className="flex text-reg font-light capitalize">
        <p className="mr-3 ">Russian</p>
        <p className="mr-3">$$$$$</p>
        <p>Kive</p>
      </div>
      <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
    </div>
  )
}

export default RestaurantCard
