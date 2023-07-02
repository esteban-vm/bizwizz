import type { FC } from '@/types'
import { NavLink } from '@/components'
import navLinks from './Footer.data'
import styles from './Footer.styles'

const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.copyright}>
        <p>
          This website has been created by
          <a className={styles.author} href='#foo'>
            Esteban V.M.
          </a>
        </p>
      </div>
      <nav>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
