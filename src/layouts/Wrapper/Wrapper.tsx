import type { FC, PropsWithChildren } from 'react'
import { Wave } from '@/components'

type WrapperProps = PropsWithChildren<{
  title: Capitalize<string>
  subtitle?: Capitalize<string>
  label: Lowercase<string>
  light?: boolean
}>

const Wrapper: FC<WrapperProps> = ({ title, subtitle, label, light, children }) => {
  const titleId = `${label}_title`

  return (
    <section aria-labelledby={titleId} className={`${light ? 'bg-white' : 'bg-black'} pb-32 text-center`} id={label}>
      <Wave is={light ? 'black' : 'white'} />
      <header className='font-bold tracking-widest'>
        <h2 id={titleId} className='mb-5 text-[2.4rem] uppercase text-primary'>
          {title}
        </h2>
        <h3 className='mb-10 text-[4rem] capitalize text-darkgrey'>{subtitle}</h3>
      </header>
      {children}
    </section>
  )
}

Wrapper.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
}

export default Wrapper
