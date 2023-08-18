import Header from './_components/Header'

const Loading = () => {
  return (
    <main>
      <Header />
      <div className="px-26 mt-10 flex flex-wrap justify-center py-3">
        {[1, 2, 3, 4].map((num) => (
          <div
            className="m-3 h-72 w-64 animate-pulse cursor-pointer overflow-hidden rounded border bg-slate-200 "
            key={num}
          ></div>
        ))}
      </div>
    </main>
  )
}

export default Loading
