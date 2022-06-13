import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import MyStory from '../components/MyStory'
import WalkingTour from '../components/WalkingTour'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
    <Navbar title='Home Page' description="Start your holiday with us and let us give you inside knowledge on what to see, where to go , and things to do."/>
    <Hero position='center' title='Tangier Guided Tour' text={true} image='/img/tangier-hero.jpg'/>
    <Services/>
    <MyStory/>
    <WalkingTour/>
    <Footer/>
    </>
  )
}

export default Home
