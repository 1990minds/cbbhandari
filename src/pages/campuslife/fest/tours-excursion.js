import React from "react"

import Layout from "../../../components/layout"
import TourSec from '../../../components/layouts/fest/tour'
import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const ToursPage = () => (
  <Layout>
    <SEO title="Tours and Excursion" />
    <Header title="Tours and Excursion"/>
   < TourSec/>
   
  </Layout>
)

export default ToursPage
