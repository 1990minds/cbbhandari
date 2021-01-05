import React from "react"

import Layout from "../../components/layout"
import GallerySec from '../../components/layouts/About/gallery/gallerySec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Header title="Gallery"/>
  
   <GallerySec/>
  </Layout>
)

export default GalleryPage;