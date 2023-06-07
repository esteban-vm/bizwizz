import type { FC } from 'react'
import Image from 'next/image'
import { Button, Wave } from '@/components'
import NavLink, { type NavLinkProps } from './NavLink'

export const navLinks: NavLinkProps[] = [
  { id: 'c054a01e-9103-4cd7-8a2f-c647d0d3e73b', link: '#home', text: 'Home' },
  { id: 'e67da725-6069-4902-838f-2e54b680426e', link: '#contact', text: 'Contact' },
  { id: 'fdd9fce5-598c-4029-8682-5296584eec75', link: '#about', text: 'About Us' },
]

const Header: FC = () => {
  return (
    <header
      id='home'
      className={`
        relative
        h-[100vh]
        w-full
        bg-black
        bg-[url('/images/header-img.jpg')]
        bg-[length:40%]
        bg-[90%_50%]
        bg-no-repeat
      `}
    >
      <Wave is='primary' />
      <div className='-mt-20 flex justify-between'>
        <Image
          src='/images/logo.png'
          alt='Bizwizz logo'
          width={500}
          height={500}
          className='h-[12rem] w-auto select-none'
        />
        <nav>
          <ul className='m-[5rem_2rem_0_0] flex list-none'>
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className='absolute left-20 top-60 text-left'>
        <div className='font-[500]'>
          <h1 className='text-[6rem] text-primary'>Bizwizz</h1>
          <h2 className='mb-12 w-1/2 text-[5rem] text-white'>Innovate, Transform and Lead</h2>
        </div>
        <div>
          <Button text='Get a quote today' />
        </div>
      </div>
    </header>
  )
}

export default Header
