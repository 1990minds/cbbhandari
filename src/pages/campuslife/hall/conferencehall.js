import React from "react"

import Layout from "../../../components/layout"
import Confrence from '../../../components/layouts/infrastructure/conferencehall'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const ConferenceHallPage = () => (
  <Layout>
    <SEO title="Conference Hall" />
    <Header title="Conference Hall"/>

   <Confrence/>
  </Layout>
)

export default ConferenceHallPage
