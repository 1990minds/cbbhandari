import React from "react"

import Layout from "../../../components/layout"
import WomensLounge from '../../../components/layouts/infrastructure/womenslounge'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const WomensLoungePage = () => (
  <Layout>
    <SEO title="Women's Lounge" />
    <Header title="Women's Lounge"/>
    <WomensLounge/>
   
  </Layout>
)

export default WomensLoungePage
