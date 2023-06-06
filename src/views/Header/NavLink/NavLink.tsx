import type { FC } from 'react'
import Link from 'next/link'

export type NavLinkProps = {
  id: `${string}-${string}-${string}-${string}-${string}`
  link: `#${string}`
  text: Capitalize<string>
}

const NavLink: FC<NavLinkProps> = ({ id, link, text }) => {
  return (
    <li id={id}>
      <Link
        href={link}
        className={`
          ml-10
          block
          select-none
          pb-[0.8rem]
          text-[1.4rem]
          uppercase
          text-white
          transition-[border-b]
          hover:border-b-2
          hover:border-b-primary
        `}
      >
        {text}
      </Link>
    </li>
  )
}

export default NavLink
