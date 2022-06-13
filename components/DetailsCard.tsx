import Image from 'next/image'
import NextLink from 'next/link'

const DetailsCard = ({ pricesDetails }: any) => {
  return (
    <div className="card sticky top-4 mt-8 w-full basis-2/5 overflow-hidden rounded-t-xl shadow-xl sm:mt-0">
      <div className="relative  h-[400px] cursor-pointer md:w-[350px]">
        <Image
          src={pricesDetails.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center-center"
          alt='tour image'
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="card-title text-2xl transition duration-300"></h4>
        <p className="sm:text-md flex-1 text-lg font-thin"></p>
        <NextLink href={'/contact'} passHref>
          <button className="rounded-sm bg-[#047857] py-3 px-16 text-white transition duration-300 hover:bg-[#064e3b]">
            BOOK MY TOUR
          </button>
        </NextLink>
        <ul className="divide-y divide-slate-300">
          {pricesDetails.prices.map((price: any, i: any) => (
            <li key={i} className="flex justify-between py-2 text-gray-900">
              <span>{price.category}</span>{' '}
              <span className="text-lg font-medium">{price.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DetailsCard
