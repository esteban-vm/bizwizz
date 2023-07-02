import type { FC, UUID, SectionID } from '@/types'
import Link from 'next/link'

export interface NavLinkProps {
  id: UUID
  text: Capitalize<string>
  to: `#${Extract<SectionID, 'contact' | 'portfolio' | 'services'>}`
  className: `nav_link ${'header' | 'footer'}`
}

const NavLink: FC<NavLinkProps> = ({ to, text, ...props }) => {
  return (
    <li {...props}>
      <Link href={to}>{text}</Link>
    </li>
  )
}

export default NavLink
