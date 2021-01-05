import React from "react"

import Layout from "../../../components/layout"
import Gym from '../../../components/layouts/infrastructure/gym'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const GymPage = () => (
  <Layout>
    <SEO title="Gym" />
    <Header title="Gym"/>
    <Gym/>
   
  </Layout>
)

export default GymPage
