import DetailsCard from './DetailsCard'

const TourDetails = ({ tourDets,tour }:any) => {
  return (
    <section>
      <div className="md:flex justify-between py-20 px-10">
        <div className="basis-3/5 mb-6 sm:mr-3">
          <div className="space-y-4 bg-gray-100 p-6">
            <h5>QUICK DETAILS</h5>
            <div className="flex sm:items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 mt-1 sm:mt-0 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="">
                <strong>Category: </strong>{tour.type}
              </span>
            </div>
            <div className="flex items-center">
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
              <span className="">
                <strong>Duration: </strong>{tour.time}
              </span>
            </div>
            <p>
              {tourDets.description}
            </p>
            <ul className="list-disc pl-4">
              {tourDets.infoList &&
                tourDets.infoList.map((info:any) => (
                  <li key={info.name}>
                    <strong>{info.name}: </strong>
                    {info.value}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>{tourDets.text}</p>
            <h2 className="text-3xl">{tourDets.title1}</h2>
            <ul className="list-disc pl-4">
              {tourDets.tourList2.map((trList:any) => (
                <li key={trList}>{trList}</li>
              ))}
            </ul>
            <h3 className="text-3xl">{tourDets.title2}</h3>
            <div className="space-y-4">
              {tourDets.paragraphs.map((para:any, i:any) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {tourDets.title3 && (
              <h3 className="text-3xl">{tourDets.title3}</h3>
            )}
            {tourDets.paragraphs2.length != 0 && (
              <div className="space-y-4">
                {tourDets.paragraphs.map((para:any,i:any) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <DetailsCard pricesDetails={tourDets.pricesDetails} />
        </div>
      </div>
    </section>
  )
}

export default TourDetails
