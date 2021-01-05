import React from "react"

import Layout from "../../components/layout"
import Placement from '../../components/layouts/studentsupport/placements'

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const PlacementPage = () => (
  <Layout>
    <SEO title="Placements" />
    <Header title="Placements"/>
   <Placement/>
  </Layout>
)

export default PlacementPage
