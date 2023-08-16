import Link from 'next/link'

const RestaurantNavbar = () => {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href="/restaurant/milestone-grill" className="mr-7 font-medium">
        Overview
      </Link>
      <Link
        href="/restaurant/milestone-grill/menu"
        className="mr-7 font-medium"
      >
        Menu
      </Link>
    </nav>
  )
}

export default RestaurantNavbar
