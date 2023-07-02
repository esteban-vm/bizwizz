import type { FC, UUID, SectionID } from '@/types'
import Link from 'next/link'

export interface NavLinkProps {
  id: UUID
  text: Capitalize<string>
  className: `nav_link ${'header' | 'footer'}`
  link: `#${Extract<SectionID, 'contact' | 'portfolio' | 'services'>}`
}

const NavLink: FC<NavLinkProps> = ({ link, text, ...props }) => {
  return (
    <li {...props}>
      <Link href={link}>{text}</Link>
    </li>
  )
}

export default NavLink
