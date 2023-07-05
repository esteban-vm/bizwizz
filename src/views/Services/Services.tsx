import type { FC } from '@/types'
import { Section } from '@/components'
import Service from './Service'
import services from './Services.data'

const Services: FC = () => {
  return (
    <Section bg='white' id='services' subtitle='Lorem ipsum dolor sit amet' title='Our services'>
      <div className='m-[0_6rem] flex flex-wrap gap-6'>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </Section>
  )
}

export default Services
