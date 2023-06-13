import type { FC } from '@/types'
import { Wave } from '@/components'
import Service from './Service'
import services from './Services.data'
import styles from './Services.styles'

const Services: FC = () => {
  return (
    <section aria-labelledby='services_title' className={styles.wrapper('white')} id='services'>
      <Wave is='black' />
      <div className={styles.header}>
        <h2 className={styles.heading} id='services_title'>
          Our services
        </h2>
        <h3 className={styles.subheading}>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className={styles.services}>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
