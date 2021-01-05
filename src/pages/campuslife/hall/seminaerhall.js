import React from "react"

import Layout from "../../../components/layout"
import SeminarHall from '../../../components/layouts/infrastructure/seminarhall'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const SeminerHallPage = () => (
  <Layout>
    <SEO title="Seminar Hall" />
    <Header title="Seminar Hall"/>
    <SeminarHall/>
   
  </Layout>
)

export default SeminerHallPage
