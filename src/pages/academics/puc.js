import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from '../../components/global/header'
import Puc from '../../components/layouts/PUCSec/puc'
const PUCPage = () => (
  <Layout>
    <SEO title="PUC" />
    <Header title="PUC"/>
   <Puc/>
   
  </Layout>
)

export default PUCPage
