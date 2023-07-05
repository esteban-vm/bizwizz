import type { FC, UUID, SectionID } from '@/types'
import Link from 'next/link'

export interface NavLinkProps {
  id: UUID
  text: Capitalize<string>
  to: `#${Extract<SectionID, 'contact' | 'portfolio' | 'services'>}`
}

const NavLink: FC<NavLinkProps> = ({ to, text, ...props }) => {
  return (
    <li className='nav_link' {...props}>
      <Link href={to}>{text}</Link>
    </li>
  )
}

export default NavLink
