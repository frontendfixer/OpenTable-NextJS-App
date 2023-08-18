'use client'

import Image from 'next/image'
import errorMascot from '@/assets/icons/error.png'

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <Image src={errorMascot} width={200} height={400} alt="error" />
      <div className="rounded bg-white px-9 py-14 shadow">
        <h3 className="text-3xl font-bold">Well this is embarrassing</h3>
        <p className="font bold text-reg">We couldn't found that restaurant </p>
        <p className="mt-5">Error Code: 400</p>
      </div>
    </div>
  )
}

export default Error
