import { Icons } from '@/components'
import { Contact, CTA, Footer, Header, Portfolio, Services, Team, Testimonials } from '@/views'

export default function Home() {
  return (
    <>
      <Icons />
      <Header />
      <main>
        <Services />
        <Team />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
