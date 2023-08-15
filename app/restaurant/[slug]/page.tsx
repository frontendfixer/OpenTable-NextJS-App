import Navbar from '@/components/Navbar'
import Link from 'next/link'
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
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            <RestaurantNavbar />
            <Title />
            <Rating />
            <Description />
            <FoodImages />
            <Review />
          </div>
          <div className="relative w-[27%] text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  )
}

export default RestaurantDetails
