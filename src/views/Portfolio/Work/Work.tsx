import type { FC, UUID, ImageProps } from '@/types'
import Image from 'next/image'
import styles from './Work.styles'

export interface WorkProps {
  id: UUID
  image: ImageProps<`portfolio-image-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`>
}

const Work: FC<WorkProps> = ({ id, image }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <Image alt='' className={styles.image} {...image} />
    </article>
  )
}

export default Work
