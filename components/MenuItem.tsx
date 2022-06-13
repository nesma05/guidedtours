import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'

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

type MenuInfo = {
  menuText: String
}

const MenuItem = ({menuText}:MenuInfo) => {
  const [open, setOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  const menuRef = useRef<HTMLLIElement>(null)
  useClickOutside(menuRef, () => setOpen(false))
  return (
    <li className="relative z-30 cursor-pointer" ref={menuRef}>
      <span
        onClick={() => {
          setOpen(!open)
          setRotate(!rotate)
        }}
        aria-label="book a walking tour"
      >
        {menuText}
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
        className={`divide-y divide-slate-300 menu-shadow absolute top-12 z-50 h-fit w-[200px] min-w-max rounded bg-white text-base transition duration-200 ease-in-out ${
          open ? '-translate-y-2 opacity-100' : 'translate-y-0 opacity-0'
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
  )
}

export default MenuItem
