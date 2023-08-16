import Header from './_components/Header'
import RestaurantNavbar from './_components/RestaurantNavbar'
import Title from './_components/Title'
import Rating from './_components/Rating'
import Description from './_components/Description'
import FoodImages from './_components/FoodImages'
import Review from './_components/Review'
import ReservationCard from './_components/ReservationCard'

const RestaurantDetails = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
      <div className="w-full px-4 md:w-2/3">
        <Title />
        <Rating />
        <Description />
        <FoodImages />
        <Review />
      </div>
      <div className="relative mx-auto w-full text-reg md:w-[30%]">
        <ReservationCard />
      </div>
    </div>
  )
}

export default RestaurantDetails
