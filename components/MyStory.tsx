import Image from 'next/image'
import { myStory } from '../utils/constants'

const MyStory = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-20 bg-[#394c6f] px-10 py-20">
        <div className="basis-1/2 text-white">
          <h4 className="mb-4 text-2xl">My Story</h4>
          <div className="flex flex-col gap-4">
              {myStory.map(story=>(
                  <p key={story.id} className={`${story.style ? 'text-xl' : ''} leading-7`}>{story.text}</p>
              ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col basis-1/2 gap-4">
          <Image src={'/img/tourist-guide.jpg'} width={500} height={450} alt='tourist guide image'/>
          <Image src={'/img/with-tourists.jpg'} width={500} height={450} alt='tourist guide with customers image'/>
        </div>
      </div>
    </section>
  )
}

export default MyStory
