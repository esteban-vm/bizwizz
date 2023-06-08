import type { FC, ID } from '@/types'
import Link from 'next/link'

export type NavLinkProps = {
  id: ID
  link: `#${string}`
  text: Capitalize<string>
}

const NavLink: FC<NavLinkProps> = ({ id, link, text }) => {
  return (
    <li id={id}>
      <Link href={link} className='nav_link'>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
