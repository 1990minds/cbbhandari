import React from "react"

import Layout from "../../../components/layout"
import BuisnessLab from '../../../components/layouts/infrastructure/businesslab'
import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const BussinesLabPage = () => (
  <Layout>
    <SEO title="Business Lab" />
    <Header title="Business Lab" />
   <BuisnessLab/>
 
  </Layout>
)

export default BussinesLabPage
