/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './global/navbars/navbar';
import Topbar from './global/navbars/topbar';
import Footer from './global/footer';
import BottomBar from './global/botombar';
import "./layout.css"
// import Sylubus from '../components/global/Syllabus'
// import Loadable from 'react-loadable';
// import Loading from '../components/global/Loading';


// const Syllabus = Loadable({
//   loader: () => import('../components/global/Syllabus'),
//   loading: Loading,
// });


const Layout = ({ children }) => {


  return (
    <>
    <Topbar/>
     <Navbar/>

      {children}
      <Footer/>
      <BottomBar/>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
