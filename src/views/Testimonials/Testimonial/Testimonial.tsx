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

const Testimonial: FC<TestimonialProps> = ({ name, designation, stars, photo, ...props }) => {
  return (
    <article className={styles.wrapper} {...props}>
      <div className={styles.icon_container}>
        {[...Array(5).keys()].map((key) => (
          <Icon key={key} className={styles.icon} name={`star-${key + 1 <= stars ? 'full' : 'empty'}`} />
        ))}
      </div>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro dignissimos quisquam distinctio totam
        obcaecati laudantium accusamus id ut architecto!
      </p>
      <div className={styles.client}>
        <div className={styles.photo_container}>
          <Image alt={`${name}'s photo`} className={styles.photo} {...photo} />
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
