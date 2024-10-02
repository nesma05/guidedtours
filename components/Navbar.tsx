import Image from 'next/image'
import { useState } from 'react'
import NextLink from 'next/link'
import MenuItem from './MenuItem'
import Head from 'next/head'

type Title = {
  title: String
  description:any
}

const Navbar = ({ title, description }: Title) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content="walking tour, private tour, guide tour, tangier, visite tangier" />
        <meta name="author" content="nesma aboki" />
      </Head>
      <div className="relative flex flex-wrap items-center justify-between py-3 px-2 sm:py-2 sm:px-8">
        <NextLink href={'/'} passHref>
          <Image
            src={'/img/logo.png'}
            width={200}
            height={70}
            className="cursor-pointer"
            alt="website logo"
          />
        </NextLink>
        <nav className="order-last flex items-center md:order-none">
          <ul className="relative hidden gap-6 text-lg font-light md:flex ">
            <NextLink href={'/'} passHref>
              <li className="cursor-pointer" aria-label="home">
                Home
              </li>
            </NextLink>
            <MenuItem menuText="Book Walking Tour" />
            <MenuItem menuText="Book Private Tour" />
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
