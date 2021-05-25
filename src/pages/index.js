import React from "react"

import Layout from "../components/layout";
// import HomeLayout from '../components/layouts/homeSec/homeslidelayout'
import Course from '../components/layouts/homeSec/course'
import Intruduction from '../components/layouts/homeSec/intruduction'
import StaticCourse from '../components/layouts/homeSec/staticourse'
import UpcommingEvent from '../components/layouts/homeSec/upcomingEvnt'
import Testimnial from '../components/layouts/homeSec/testimonal'
import Principal from '../components/layouts/homeSec/Principal'
import Gallery from '../components/layouts/homeSec/SlideGallery/SlideGallery'
// import Vision from '../components/layouts/homeSec/visionSec'
import { ParallaxProvider } from 'react-scroll-parallax';
// import ModalPopup from '../components/global/modalPopup'

import Fade from 'react-reveal/Fade';
import Loadable from 'react-loadable';
import Loading from '../components/global/Loading';



import SEO from "../components/seo"



const HomeLayout = Loadable({
  loader: () => import('../components/layouts/homeSec/homeslidelayout'),
  loading: Loading,
});



const ModalPopup = Loadable({
  loader: () => import('../components/global/modalPopup'),
  loading: "Loading....",
});

const IndexPage = () => (
  <Layout   >
    <SEO title="Home" />
    {/* <ModalPopup/> */}

    <ParallaxProvider>
  <HomeLayout/>

  <Fade delay={50} duration={600}>

   <Course/>
   <Intruduction/>
 
   <StaticCourse/>
   <Principal/>
   <UpcommingEvent/>
  

   <Testimnial/>
   <Gallery/>
   </Fade>
   </ParallaxProvider>

   
  </Layout>
)


export default IndexPage
