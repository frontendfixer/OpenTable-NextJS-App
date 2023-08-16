import Header from '@/app/_components/Header'
import Navbar from '@/app/_components/Navbar'
import RestaurantCard from '@/app/_components/RestaurantCard'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto mt-10 flex w-[90%] flex-wrap justify-center gap-4 px-2 py-3">
        <Link href="/restaurant/russian-vodka-room">
          <RestaurantCard />
        </Link>
      </div>
    </main>
  )
}
