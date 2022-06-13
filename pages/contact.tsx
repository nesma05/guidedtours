import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ContactDetails from '../components/ContactDetails'

const Contact: NextPage = () => {
  return (
    <>
      <Navbar title="Contact Us" description="Contact Us to Book a Tour" />
      <Hero
        position="left"
        title="Contact Us to Book a Tour"
        image="/img/book-tour.jpg"
      />
      <section className="flex items-start p-10">
        <Form />
        <ContactDetails />
      </section>

      <Footer />
    </>
  )
}

export default Contact
