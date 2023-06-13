import type { FC } from '@/types'
import Image from 'next/image'
import { Button, Wave } from '@/components'
import NavLink, { type NavLinkProps } from './NavLink'
import styles from './Header.styles'

export const navLinks: NavLinkProps[] = [
  { id: 'c054a01e-9103-4cd7-8a2f-c647d0d3e73b', link: '#home', text: 'Home' },
  { id: 'e67da725-6069-4902-838f-2e54b680426e', link: '#contact', text: 'Contact' },
  { id: 'fdd9fce5-598c-4029-8682-5296584eec75', link: '#about', text: 'About Us' },
]

const Header: FC = () => {
  return (
    <header aria-labelledby='home_title' className={styles.wrapper} id='home'>
      <Wave is='primary' />
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
      <div className={styles.headings}>
        <div>
          <h1 className={styles.heading_1} id='home_title'>
            Bizwizz
          </h1>
          <h2 className={styles.heading_2}>Innovate, Transform and Lead</h2>
        </div>
        <div>
          <Button text='Get a quote today' />
        </div>
      </div>
    </header>
  )
}

export default Header
