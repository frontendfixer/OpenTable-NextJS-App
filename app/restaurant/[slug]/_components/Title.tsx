const Title = ({ title }: { title: string }) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
    </div>
  )
}

export default Title
