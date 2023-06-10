import type { FC, ID } from '@/types'
import Image from 'next/image'

export type WorkProps = {
  id: ID
  image: { src: `/images/portfolio-image-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}.jpg`; height: number; width: number }
}

const Work: FC<WorkProps> = ({ id, image }) => {
  return (
    <article id={id} className='work'>
      <Image {...image} alt='' className='work_image' />
    </article>
  )
}

export default Work
