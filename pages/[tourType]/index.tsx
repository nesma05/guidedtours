import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import TourDetails from '../../components/TourDetails'
import Footer from '../../components/Footer'
import { toursDets,tours } from '../../utils/constants'

const Tours:NextPage = ({ tourDets,tour }:any) => {
    return (
      <>
      <Navbar title={tour.title} description={tour.description}/>
      <Hero position='left' title={tour.title} image={tour.image}/>
      <TourDetails tourDets={tourDets} tour={tour}/>
      <Footer/>
      </>
    )
  }
 

  export default Tours

  export async function getStaticPaths(){

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

  export async function getStaticProps({params:{tourType}}:any) {

    const tourDets = toursDets.filter((trDets:any)=> trDets.id === tourType )[0]
    const tour = tours.filter((tr:any)=> tr.id === tourType )[0]
  
    return {
      props:{
        tourDets,
        tour
      }
    }
  }