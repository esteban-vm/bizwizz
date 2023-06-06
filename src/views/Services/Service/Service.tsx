import type { FC } from 'react'
import { Icon, type IconProps } from '@/components'

export type ServiceProps = {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: Capitalize<string>
  icon: IconProps['name']
}

const Service: FC<ServiceProps> = ({ id, title, icon }) => {
  return (
    <article
      id={id}
      className={`
        flex
        w-80
        flex-[1_1_30%]
        items-center
        justify-center
        overflow-hidden
        bg-lightgrey
        text-black
        hover:bg-primary
        hover:text-white
        [&>h4]:hover:translate-x-20
        [&>svg]:hover:scale-150
        [&>svg]:hover:opacity-60
      `}
    >
      <Icon
        name={icon}
        className={`
          mr-7
          h-44
          w-[4.8rem]
          scale-50
          fill-primary-light
          opacity-0
          transition-all
          duration-500
        `}
      />
      <h4
        className={`
          select-none
          p-[3rem_6rem_3rem_0]
          text-[2.3rem]
          font-[500]
          transition-all
          duration-500
        `}
      >
        {title}
      </h4>
    </article>
  )
}

export default Service
