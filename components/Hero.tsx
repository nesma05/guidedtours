import Image from 'next/image'

const Hero = ({position, title, text=false,image}:any) => {
  return (
    <section className="relative -z-10 w-[100vw] h-[500px]">
      <div className={`flex flex-col gap-3 justify-center ${position == 'center' ? 'items-center' : 'pl-8'} p-1 absolute z-40 h-full w-full bg-black/40  text-white`}>
        <h1 className="text-4xl md:text-6xl" aria-label='tangier guided tour'>{title}</h1>
        {text && <p className="text-2xl text-center md:text-left md:text-4xl"  aria-label='private and group walking tours of tangier'>Private and Group Walking Tours of Tangier</p>}
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt='tangier image'
      />
    </section>
  )
}

export default Hero
