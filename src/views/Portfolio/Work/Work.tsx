import type { FC, UUID, ImageData } from '@/types'
import Image from 'next/image'
import styles from './Work.styles'

type WorkImage = `portfolio-image-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`

export type WorkProps = {
  id: UUID
  image: ImageData<WorkImage>
}

const Work: FC<WorkProps> = ({ id, image }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <Image alt='' className={styles.image} {...image} />
    </article>
  )
}

export default Work
