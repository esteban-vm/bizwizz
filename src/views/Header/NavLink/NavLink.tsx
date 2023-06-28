import type { FC, UUID, SectionID } from '@/types'
import Link from 'next/link'
import styles from './NavLink.styles'

export interface NavLinkProps {
  id: UUID
  link: `#${Extract<SectionID, 'contact' | 'portfolio' | 'services'>}`
  text: Capitalize<string>
}

const NavLink: FC<NavLinkProps> = ({ link, text, ...props }) => {
  return (
    <li {...props}>
      <Link className={styles} href={link}>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
