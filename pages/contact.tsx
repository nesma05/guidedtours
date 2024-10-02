import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Form from '../components/Form'
import ContactDetails from '../components/ContactDetails'
import Hero from '../components/Hero'

const Contact: NextPage = () => {
  return (
    <>
      <Navbar title="Contact Us" description="Contact Us to Book a Tour" />
      <Hero
        titlePosition="left"
        title="Contact Us to Book a Tour"
        imageUrl="/img/book-tour.jpg"
      />
      <section className="md:flex items-start justify-between p-4 sm:p-10 space-y-6">
        <Form />
        <ContactDetails />
      </section>

      <Footer />
    </>
  )
}

export default Contact
