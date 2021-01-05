import React from "react"

import Layout from "../../../components/layout"

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'
import IctCenter from '../../../components/layouts/infrastructure/ictcenter'
const ICTLabPage = () => (
  <Layout>
    <SEO title="ICT Centers" />
    <Header title="ICT Centers"/>
  <IctCenter/>
   
  </Layout>
)

export default ICTLabPage
