import type { FC } from '@/types'
import Image from 'next/image'
import { Button, Wave } from '@/components'
import NavLink from './NavLink'
import navLinks from './Header.data'
import styles from './Header.styles'

const Header: FC = () => {
  return (
    <header aria-labelledby='home_title' className={styles.wrapper} id='home'>
      <Wave color='primary' />
      <div className={styles.navigation}>
        <Image alt='Bizwizz logo' className={styles.image} height={500} src='/images/logo.png' width={500} />
        <nav>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.titles}>
        <div>
          <h1 className={styles.title} id='home_title'>
            Bizwizz
          </h1>
          <h2 className={styles.subtitle}>Innovate, Transform and Lead</h2>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </header>
  )
}

export default Header
