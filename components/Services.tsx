
import { tours } from '../utils/constants'
import Card from './card'


const Services = () => {
  return (
    <section>
      <div className="py-20 px-10 sm:px12">
        <div className="bg-gray-100 py-10 px-6 sm:px-10 md:px-32 text-center">
          <h3 className="mb-2 text-3xl text-[#963f45]">
            Fun, informative, and inspiring guided tours of Tangier
          </h3>
          
        </div>
        <div className="mt-20 flex flex-col md:flex-row gap-10">
          {tours.map((tour) => (
            <Card tour={tour} key={tour.id}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
