import React from "react"

import Layout from "../../../components/layout"
import Cafteria from '../../../components/layouts/infrastructure/cafeteria'
import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const CafeteriaPage = () => (
  <Layout>
    <SEO title="Cafeteria" />
    <Header title="Cafeteria"/>
    <Cafteria/>
   
  </Layout>
)

export default CafeteriaPage