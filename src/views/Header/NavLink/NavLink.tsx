import type { FC, UUID } from '@/types'
import Link from 'next/link'
import styles from './NavLink.styles'

export type NavLinkProps = {
  id: UUID
  link: `#${Lowercase<string>}`
  text: Capitalize<string>
}

const NavLink: FC<NavLinkProps> = ({ id, link, text }) => {
  return (
    <li id={id}>
      <Link className={styles} href={link}>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
