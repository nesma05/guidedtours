import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import TourDetails from '../../components/TourDetails'
import Footer from '../../components/Footer'
import axios from 'axios'

const Tours:NextPage = ({ tourDets,tour }:any) => {
    return (
      <>
      <Navbar/>
      <Hero position='left' title={tour.title} image={tour.image}/>
      <TourDetails tourDets={tourDets} tour={tour}/>
      <Footer/>
      </>
    )
  }
 

  export default Tours

  export async function getStaticPaths(){

    const res = await fetch(`${process.env.BASE_URL}/api/getData`)
    const {tours} = await res.json()

    const paths = tours.map((tr:any)=>{
      return {
        params:{
          tourType: `${tr.id}`
        }
      }
    })
     return {
       paths,
       fallback: false
     }
  }

  export async function getStaticProps({req,params:{tourType}}:any) {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getData`)
    const {toursDets,tours} = await res.json()

    const tourDets = toursDets.filter((trDets:any)=> trDets.id === tourType )[0]
    const tour = tours.filter((tr:any)=> tr.id === tourType )[0]
    console.log('tourDets',tourDets)
    console.log('tour',tour)
    return {
      props:{
        tourDets,
        tour
      }
    }
  }