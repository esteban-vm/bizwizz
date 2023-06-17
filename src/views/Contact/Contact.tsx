import type { FC } from '@/types'
import { Wave } from '@/components'
import Info from './Info'
import info from './Contact.data'
import styles from './Contact.styles'

const Contact: FC = () => {
  return (
    <section aria-labelledby='contact_title' className={styles.wrapper('white')} id='contact'>
      <Wave is='black' />
      <div className={styles.header}>
        <h2 className={styles.heading} id='contact_title'>
          Contact Us
        </h2>
      </div>
      <div className={styles.contact}>
        <div className={styles.column}>
          <h3>Get in Touch</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis eos unde officiis tempore
            assumenda ab repellat facere dolore dignissimos a repudiandae iste fugiat, rerum ad voluptates veritatis
            tenetur laboriosam?
          </p>
          {info.map((item) => (
            <Info key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.column}>&nbsp;</div>
      </div>
    </section>
  )
}

export default Contact
