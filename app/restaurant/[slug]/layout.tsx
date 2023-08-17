import Header from './_components/Header'
import RestaurantNavbar from './_components/RestaurantNavbar'
import { fetchRestaurantBySlug } from './page'

const RestaurantLayout = async ({
  params,
  children,
}: {
  params: { slug: string }
  children: React.ReactNode
}) => {
  const rest = await fetchRestaurantBySlug(params.slug)
  return (
    <>
      <Header title={params.slug} image={rest.main_image} />
      <div className="mx-auto -mt-11 w-[90%]">
        <div className="rounded bg-white p-3">
          <RestaurantNavbar slug={params.slug} />
          {children}
        </div>
      </div>
    </>
  )
}

export default RestaurantLayout
