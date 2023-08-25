const Loading = () => {
  return (
    <main>
      <div className="px-26 mx-auto mt-10 flex w-3/4 flex-col justify-center py-3">
        <div className="my-10 h-32 w-full animate-pulse rounded bg-slate-200"></div>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              className="m-3 h-12 w-48 animate-pulse cursor-pointer overflow-hidden rounded border bg-slate-200 "
              key={num}
            ></div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Loading
