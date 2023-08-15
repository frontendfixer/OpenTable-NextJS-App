import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import RestaurantCard from '@/components/RestaurantCard'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="mx-auto max-w-screen-2xl bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="mx-auto mt-10 flex w-[90%] flex-wrap justify-center gap-4 px-2 py-3">
            <Link href="/restaurant/russian-vodka-room">
              <RestaurantCard />
            </Link>
          </div>
        </main>
      </main>
    </main>
  )
}
