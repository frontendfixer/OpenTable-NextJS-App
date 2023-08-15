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
          <div className="mt-10 flex flex-wrap px-36 py-3">
            <Link href="/restaurant/russian-vodka-room">
              <RestaurantCard />
            </Link>
          </div>
        </main>
      </main>
    </main>
  )
}
