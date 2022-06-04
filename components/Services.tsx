
import { tours } from '../utils/constants'
import Card from './card'


const Services = () => {
  return (
    <section>
      <div className="py-20 px-12">
        <div className="bg-gray-100 py-10 px-6 sm:px-10 md:px-32 text-center">
          <h3 className="mb-2 text-3xl">
            #5 in the World for Cultural Experiences
          </h3>
          <p className="text-lg font-thin">
            Great news! In 2019 TripAdvisor Travelers’ Choice Award ranked
            Edinburgh Guided Tour at number 5 in the world for cultural
            experiences! An outstanding result for a small business.
          </p>
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
