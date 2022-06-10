import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'

let useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (e: any) => {
      const el = ref?.current

      if (!el || el.contains(e.target)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const menuRef = useRef<HTMLLIElement>(null)
  useClickOutside(menuRef, () => setOpen(false))

  return (
    <header>
      <div className="relative flex flex-wrap items-center justify-between py-3 px-2 sm:py-2 sm:px-8">
        <NextLink href={'/'} passHref>
          <Image
            src={'/img/logo.png'}
            width={200}
            height={70}
            className="cursor-pointer"
          />
        </NextLink>
        <nav className="order-last flex items-center md:order-none">
          <ul className="relative hidden gap-6 text-lg font-light md:flex ">
            <NextLink href={'/'} passHref>
              <li className="cursor-pointer" aria-label="home">
                Home
              </li>
            </NextLink>
            <li className="relative z-30 cursor-pointer" ref={menuRef}>
              <span
                onClick={() => {
                  setOpen(!open)
                  setRotate(!rotate)
                }}
                aria-label="book a walking tour"
              >
                Book a Walking Tour
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-1 inline h-4 w-4 ${
                    rotate ? 'rotate-180' : ''
                  } transition duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <ul
                className={`menu-shadow absolute top-12 z-50 h-fit w-[200px] min-w-max rounded bg-white text-base transition duration-200 ease-in-out ${
                  open
                    ? '-translate-y-2 opacity-100'
                    : 'translate-y-0 opacity-0'
                }`}
              >
                <NextLink href={'/group-tour'} passHref>
                  <li
                    className="relative block py-2 pl-5 text-gray-800 transition-all duration-200 hover:bg-black/10 hover:pl-7"
                    aria-label="group walking tour"
                  >
                    Group Walking Tour
                  </li>
                </NextLink>
                <hr></hr>
                <NextLink href={'/private-tour'} passHref>
                  <li
                    className="relative block py-2 pl-5 text-gray-800 transition-all duration-200 hover:bg-black/10 hover:pl-7"
                    aria-label="private walking tour"
                  >
                    Private Walking Tour
                  </li>
                </NextLink>
              </ul>
            </li>
            <NextLink href={'/contact'} passHref>
              <li className="cursor-pointer" aria-label="contact us">
                Contact us
              </li>
            </NextLink>
          </ul>
          <div
            className="cursor-pointer space-y-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span
              className={`block h-0.5 w-5 bg-[#963f45] transition duration-200 ${
                mobileMenu ? 'hidden' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-[#963f45] transition duration-200 ${
                mobileMenu ? 'translate-y-1 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-[#963f45] transition duration-200 ${
                mobileMenu ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </nav>
        <NextLink href={'/contact'} passHref>
          <div className="transtion order-last flex h-12 w-full cursor-pointer items-center justify-center rounded bg-[#963f45] px-8 font-thin tracking-wide text-white duration-200 hover:bg-[#6d2f33] sm:order-none sm:w-fit">
            BOOK MY WALKING TOUR
          </div>
        </NextLink>
        <ul
          className={`menu-shadow absolute top-[105%] z-30 w-[97%] bg-white p-2 transition duration-500 sm:w-[92%] md:hidden ${
            mobileMenu
              ? '-translate-y-3 opacity-100'
              : 'translate-y-2 opacity-0'
          }`}
        >
          <NextLink href={'/'} passHref>
            <li className="cursor-pointer border-b-2 p-2 transition-colors duration-300 hover:bg-gray-200">
              Home
            </li>
          </NextLink>
          <NextLink href={'/group-tour'} passHref>
            <li className="cursor-pointer border-b-2 p-2 transition-colors duration-300 hover:bg-gray-200">
              Group Walking Tour
            </li>
          </NextLink>
          <NextLink href={'/private-tour'} passHref>
            <li className="cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-200">
              Private Walking Tour
            </li>
          </NextLink>
          <NextLink href={'/contact'} passHref>
            <li
              className="cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-200"
              aria-label="contact us"
            >
              Contact us
            </li>
          </NextLink>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
