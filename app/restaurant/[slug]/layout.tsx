import Header from './_components/Header'
import RestaurantNavbar from './_components/RestaurantNavbar'

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mx-auto -mt-11 w-[90%]">
        <div className="rounded bg-white p-3">
          <RestaurantNavbar />
          {children}
        </div>
      </div>
    </>
  )
}

export default RestaurantLayout
