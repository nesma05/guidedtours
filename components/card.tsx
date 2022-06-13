import Image from 'next/image'
import NextLink from 'next/link'

type cardProps = {
  tour: {
    id: string
    title: string
    description: string
    type: string
    time: string
    badge: string
    image: string
  }
}

const card = ({ tour }: cardProps) => {
  return (
    <div className="card flex basis-1/2 flex-col overflow-hidden rounded-t-xl shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="relative w-full cursor-pointer">
        <NextLink href={`/${tour.id}`} passHref>
          <div className="card-overlay absolute z-20 h-full w-full bg-black/30 transition duration-300">
            <div className="absolute bottom-6 left-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex items-center rounded-sm bg-white px-2 py-1 font-thin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-thin">
                  {tour.type.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center rounded-sm bg-white px-2 py-1 font-thin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-1"
                >
                  <path
                    fill="#000"
                    d="M6.16 4.6A4.054 4.054 0 0 1 8 7.994v0c0-1.415.726-2.66 1.825-3.384a2.857 2.857 0 0 0 1.17-1.589L5 3.001c.191.67.603 1.225 1.15 1.594z"
                  />
                  <path
                    fill="#000"
                    d="M11.18 6.06A4.399 4.399 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.391 4.391 0 0 0 1.808 3.551A2.564 2.564 0 0 1 6 7.99a2.755 2.755 0 0 1-1.209 2.003 4.441 4.441 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.435 4.435 0 0 0-1.769-3.492 2.762 2.762 0 0 1-1.23-1.996 2.551 2.551 0 0 1 1.169-1.946zM9 8a3.693 3.693 0 0 0 1.519 2.763A3.477 3.477 0 0 1 12 13.495V14H4v-.5a3.472 3.472 0 0 1 1.459-2.723 3.698 3.698 0 0 0 1.54-2.766 3.482 3.482 0 0 0-1.498-2.683 3.438 3.438 0 0 1-1.502-2.827v-.5h8v.5a3.426 3.426 0 0 1-1.479 2.813 3.487 3.487 0 0 0-1.521 2.678z"
                  />
                </svg>
                <span className="text-sm font-thin">{tour.time}</span>
              </div>
            </div>
            {tour.badge && (
              <span className="absolute top-6 right-6 rounded bg-[#963f45] py-1 px-4 text-sm font-thin text-white">
                {tour.badge}
              </span>
            )}
          </div>
        </NextLink>
        <Image
          src={tour.image}
          layout="responsive"
          width={550}
          height={300}
          className="relative z-0"
          alt='tour image'
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <NextLink href={`/${tour.id}`} passHref>
          <h3 className="card-title cursor-pointer text-2xl transition duration-300">
            {tour.title}
          </h3>
        </NextLink>
        <p className="sm:text-md flex-1 text-lg font-thin">
          {tour.description}
        </p>
        <div className="flex justify-between">
          <NextLink href={'contact'} passHref>
            <button aria-label='book my tour' className="basis-[47%] rounded-sm bg-[#047857] py-3 font-light text-white transition duration-300 hover:bg-[#064e3b]">
              BOOK MY TOUR
            </button>
          </NextLink>
          <NextLink href={`/${tour.id}`} passHref>
            <button aria-label='learn more' className="basis-[47%] rounded-sm border-2 border-[#047857] py-3 font-light text-[#047857] transition duration-300 hover:bg-[#064e3b] hover:text-white">
              LEARN MORE
            </button>
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default card
