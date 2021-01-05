import React from "react"

import Layout from "../../../components/layout"
import Infirmary from '../../../components/layouts/infrastructure/infirmary'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const InfirmaryPage = () => (
  <Layout>
    <SEO title="Infirmary" />
    <Header title="Infirmary"/>
   
   <Infirmary/>
   
  </Layout>
)

export default InfirmaryPage
