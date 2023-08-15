import Navbar from '@/components/Navbar'
import Header from './_components/Header'
import ReserveForm from './_components/ReserveForm'

const Reserve = () => {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            <Header />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  )
}

export default Reserve
