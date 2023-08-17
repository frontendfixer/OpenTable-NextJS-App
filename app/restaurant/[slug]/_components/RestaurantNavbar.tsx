import Link from 'next/link'

const RestaurantNavbar = ({ slug }: { slug: string }) => {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href={`/restaurant/${slug}`} className="mr-7 font-medium">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7 font-medium">
        Menu
      </Link>
    </nav>
  )
}

export default RestaurantNavbar
