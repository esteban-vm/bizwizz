import type { FC } from '@/types'
import { Section } from '@/components'
import Form from './Form'
import Info from './Info'
import info from './Contact.data'
import styles from './Contact.styles'

const Contact: FC = () => {
  return (
    <Section bg='white' id='contact' title='Contact Us'>
      <div className={styles.wrapper}>
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
        <div className={styles.column}>
          <Form />
        </div>
      </div>
    </Section>
  )
}

export default Contact
