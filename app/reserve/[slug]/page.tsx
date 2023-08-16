import Header from './_components/Header'
import ReserveForm from './_components/ReserveForm'

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
