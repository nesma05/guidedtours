import Image from 'next/image'
import NextLink from 'next/link'
import ContactInfo from './ContactInfo'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-start gap-8 bg-[#064e3b] py-20 px-10 text-white md:flex-row md:justify-around">
        <div className="flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl">Tangier Guided Tour</h2>
          <ContactInfo />
        </div>
        <div className="flex items-center">
          <NextLink href={'/'} passHref>
            <Image
              src={'/img/logo.png'}
              width={200}
              height={70}
              className="cursor-pointer"
            />
          </NextLink>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-6 text-2xl">Site Map</h2>
          <ul className="space-y-1 text-lg">
            <NextLink href={'/'} passHref>
              <li className="cursor-pointer">Home</li>
            </NextLink>
            <NextLink href={'/group-tour'} passHref>
              <li className="cursor-pointer">Group Walking Tour</li>
            </NextLink>
            <NextLink href={'/private-tour'} passHref>
              <li className="cursor-pointer">Private Walking Tour</li>
            </NextLink>
            <NextLink href={'/contact'} passHref>
              <li className="cursor-pointer">Contact Us</li>
            </NextLink>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
