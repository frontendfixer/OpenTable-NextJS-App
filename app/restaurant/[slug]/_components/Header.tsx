import generateFormattedTitle from '@/utils/GeneratedFormattedTitle'

const Header = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="flex h-64 items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] md:h-96"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1 className="w-full bg-black/60 text-center text-5xl font-bold capitalize text-white drop-shadow-xl md:text-7xl">
        {generateFormattedTitle(title)}
      </h1>
    </div>
  )
}

export default Header
