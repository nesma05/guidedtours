import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

import Services from '../components/Services'
import MyStory from '../components/MyStory'
import WalkingTour from '../components/WalkingTour'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
    <Navbar title='Home Page' description="Start your holiday with us and let us give you inside knowledge on what to see, where to go , and things to do."/>
    <Hero position='center' title='Tangier Private Guided Tour' text={true} imageUrl='/img/tangier-hero.jpg'/>
    <Services/>
    <MyStory/>
    <WalkingTour/>
    <Footer/>
    </>
  )
}

export default Home
