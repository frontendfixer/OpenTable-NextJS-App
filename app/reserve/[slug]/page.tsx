import { Metadata } from 'next'
import Header from './_components/Header'
import ReserveForm from './_components/ReserveForm'

export const metadata: Metadata = {
  title: 'Reserve table at Milesstone Grill | Open Table Reservation',
  description: 'Reserve a table at Milesstone Grill Restaurant',
}

const Reserve = () => {
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header />
        <ReserveForm />
      </div>
    </div>
  )
}

export default Reserve
