import type { FC } from '@/types'
import { Wave } from '@/components'
import Service, { type ServiceProps } from './Service'
import styles from './Services.styles'

export const services: ServiceProps[] = [
  { id: '92cf33d6-5464-4bb5-8768-d62f81ab5036', title: 'Digital Marketing', icon: 'strategy' },
  { id: '3d87ca25-fe39-47f3-8d1c-3cdf0f459a94', title: 'UX Design', icon: 'desktop' },
  { id: 'fdbe44b3-5dca-4f76-b07a-e6de8b0bf480', title: 'Product Design', icon: 'picture' },
  { id: '4706f6ad-30b1-4eca-a8a3-5571508a9949', title: 'Content Writing', icon: 'pencil' },
  { id: '0d3834cc-d18c-49db-97b0-e0c06aefc6fc', title: 'Concept Development', icon: 'expand' },
  { id: '8718afff-4203-47cb-a1f1-4232466284d4', title: 'Social Outreach', icon: 'megaphone' },
  { id: '1e23a19c-4a83-4ab8-a05d-adefccfae2f1', title: 'Media Planning', icon: 'video' },
  { id: '6ef025ef-fd35-474e-9090-0f9e19ff2ef4', title: 'Branding', icon: 'trophy' },
  { id: '47bf22db-4831-47bd-8d97-fc2bb53471b3', title: 'SEO', icon: 'map' },
]

const Services: FC = () => {
  return (
    <section aria-labelledby='services_title' className='section bg-white' id='services'>
      <Wave is='black' />
      <div className='section_header'>
        <h2 className='section_heading' id='services_title'>
          Our services
        </h2>
        <h3 className='section_subheading'>Lorem ipsum dolor sit amet</h3>
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
