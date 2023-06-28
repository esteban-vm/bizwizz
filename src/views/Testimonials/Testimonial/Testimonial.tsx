import type { FC, UUID, ImageProps } from '@/types'
import Image from 'next/image'
import { Icon } from '@/components'
import styles from './Testimonial.styles'

export interface TestimonialProps {
  id: UUID
  name: `${Capitalize<string>} ${Capitalize<string>}`
  designation: Capitalize<string>
  stars: 1 | 2 | 3 | 4 | 5
  photo: ImageProps<`client-${1 | 2 | 3}`>
}

const Testimonial: FC<TestimonialProps> = ({ id, name, designation, stars, photo }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <div className={styles.icon_container}>
        {[...Array(5)].map((_, index) => (
          <Icon key={index} className={styles.icon} name={index + 1 <= stars ? 'star-full' : 'star-empty'} />
        ))}
      </div>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro dignissimos quisquam distinctio totam
        obcaecati laudantium accusamus id ut architecto!
      </p>
      <div className={styles.client}>
        <div className={styles.photo_container}>
          <Image {...photo} alt={`${name}'s photo`} className={styles.photo} />
        </div>
        <div className={styles.client_data}>
          <p className={styles.name}>{name}</p>
          <p className={styles.designation}>{designation}</p>
        </div>
      </div>
    </article>
  )
}

export default Testimonial
