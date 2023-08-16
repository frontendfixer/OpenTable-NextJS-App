import Navbar from '@/app/_components/Navbar'
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
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <Header />
        <div className="mx-auto -mt-11 flex w-[90%] flex-col items-start justify-between gap-6 md:flex-row">
          <div className="w-full rounded bg-white p-3  shadow md:w-[70%] md:shadow-lg">
            <RestaurantNavbar />
            <div className="px-4">
              <Title />
              <Rating />
              <Description />
              <FoodImages />
              <Review />
            </div>
          </div>
          <div className="relative mx-auto w-full text-reg md:w-[27%]">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  )
}

export default RestaurantDetails
