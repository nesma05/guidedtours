import Image from 'next/image'
import { walkingTour } from '../utils/constants'

const WalkingTour = () => {
  return (
    <section>
      <div className="flex flex-col items-center md:flex-row gap-20 px-10 py-20 bg-[#f2f2f3]">
        <div className="basis-1/2">
          <h4 className="mb-4 text-3xl">The Walking Tour</h4>
          <div className="flex flex-col gap-4">
              {walkingTour.map(tour=>(
                  <p key={tour.id} className="leading-7">{tour.text}</p>
              ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col basis-1/2 gap-4">
          <Image src={'/img/walking-tour.jpg'} width={500} height={450} alt='walking tour image' />
        </div>
      </div>
    </section>
  )
}

export default WalkingTour
