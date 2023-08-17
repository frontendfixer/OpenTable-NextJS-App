import Image from 'next/image'

const FoodImages = ({ images }: { images: string[] }) => {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">5 photos</h1>
      <div className="grid grid-flow-row grid-cols-1 justify-center gap-2 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => (
          <div className="relative h-80 w-full md:h-60" key={image}>
            <Image
              src={image}
              alt={image}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodImages
