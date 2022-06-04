import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center md:justify-around gap-8 bg-[#064e3b] py-20 px-10 text-white md:flex-row">
        <div className="flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl">Tangier Guided Tour</h2>
          <p className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+212 621 225 820</span>
          </p>
          <p className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span>tangierguidedtour@gmail.com</span>
          </p>
          <p className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
            <span>+212 621 225 820</span>
          </p>
          <p className="flex gap-3">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="44px"
              height="44px"
            >
              <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#FFE082"
                d="M24,29C6.9,29-3.1,23.7,3.2,18C8.7,13,16,10,24,10c7.2,0,13.8,2.4,19,6.5C50.3,22.2,41.1,29,24,29z"
              />
              <path
                fill="#FFF"
                d="M23,26c0,6.1-4.9,11-11,11S1,32.1,1,26s4.9-11,11-11S23,19.9,23,26z M36,15c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S42.1,15,36,15z"
              />
              <path
                fill="#F44336"
                d="M12 24A2 2 0 1 0 12 28A2 2 0 1 0 12 24Z"
              />
              <path
                fill="#00C853"
                d="M36 24A2 2 0 1 0 36 28A2 2 0 1 0 36 24Z"
              />
              <path
                fill="#37474F"
                d="M12,17c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,17,12,17 M12,14C5.4,14,0,19.4,0,26c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,19.4,18.6,14,12,14L12,14z"
              />
              <path
                fill="#37474F"
                d="M12 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S9.8 22 12 22M12 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S15.3 20 12 20L12 20zM36 17c5 0 9 4 9 9s-4 9-9 9-9-4-9-9S31 17 36 17M36 14c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C48 19.4 42.6 14 36 14L36 14z"
              />
              <path
                fill="#37474F"
                d="M36 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S33.8 22 36 22M36 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S39.3 20 36 20L36 20zM24 26L21 33 24 37zM24 26L27 33 24 37zM36 14h12c0 0-3.1 3.8-3 7C42.1 16 36 14 36 14zM12 14H0c0 0 3.1 3.8 3 7C5.9 16 12 14 12 14z"
              />
              <path
                fill="#37474F"
                d="M24,10c-6.3,0-12.2,1.9-17.1,5.2C8.4,14.4,10.2,14,12,14c0.4,0,0.8,0,1.3,0.1c3.4-1.4,7-2.1,10.7-2.1c3.7,0,7.4,0.7,10.7,2.1c0.4,0,0.8-0.1,1.3-0.1c1.8,0,3.6,0.4,5.1,1.2C36.2,11.9,30.3,10,24,10z"
              />
            </svg>
          </p>
        </div>
        <div className='flex items-center'>
          <Image src={'/img/logo.png'} width={200} height={70} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-6 text-2xl">Site Map</h2>
          <ul className="text-lg">
            <li>Home</li>
            <li>Group Walking Tour</li>
            <li>Private Walking Tour</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
