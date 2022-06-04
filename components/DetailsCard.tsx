import Image from 'next/image'

const DetailsCard = ({pricesDetails}:any) => {
  return (
    <div className="sticky top-4 mt-8 sm:mt-0 card basis-2/5 w-full overflow-hidden rounded-t-xl shadow-xl">
      <div className="relative  md:w-[350px] h-[400px] cursor-pointer">
        <Image
          src={pricesDetails.image}         
          layout='fill'
          objectFit='cover'
          objectPosition='center-center'
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="card-title text-2xl transition duration-300"></h4>
        <p className="sm:text-md flex-1 text-lg font-thin"></p>
        <button className="rounded-sm bg-[#047857] py-3 px-16 text-white transition duration-300 hover:bg-[#064e3b]">
          BOOK MY TOUR
        </button>
        <ul>
          {pricesDetails.prices.map((price:any,i:any)=>(
            <li key={i} className="flex justify-between text-gray-900 py-2 border-t-2"><span>{price.category}</span>  <span className='text-lg font-medium'>{price.price}</span></li>
          ))}
          
         
        </ul>
      </div>
    </div>
  )
}

export default DetailsCard
