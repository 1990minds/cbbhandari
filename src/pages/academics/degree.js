import React from "react"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'
import Degreeinfo from '../../components/layouts/Degree/degreeinfo'

const DegreePage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Degree"/>

   <Degreeinfo/>
  </Layout>
)

export default DegreePage
