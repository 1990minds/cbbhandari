import React from "react"

import Layout from "../../../components/layout"
import Industry from '../../../components/layouts/fest/industry'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const IndustrialVisitPage = () => (
  <Layout>
    <SEO title="Industrial visit" />
    <Header title="Industrial visit"/>
  <Industry/>
   
  </Layout>
)

export default IndustrialVisitPage
