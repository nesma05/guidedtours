import React from 'react'
import Image from 'next/image'

const Hero = ({ imageUrl, title, titlePosition }: any) => {
  const titleAlignment =
    titlePosition === 'left' ? 'left-8' : 'left-1/2 transform -translate-x-1/2'
  return (
    <div className="relative h-[550px] w-full">
      <img src={imageUrl} alt="Hero" className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 transform text-5xl font-bold text-white ${titleAlignment}`}
      >
        {title}
      </div>
    </div>
  )
}

export default Hero
