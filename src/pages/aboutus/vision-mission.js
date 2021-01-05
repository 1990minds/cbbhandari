import React from "react"

import Layout from "../../components/layout"
import Vission from '../../components/layouts/About/vmSec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const VissionMissionPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Vision & Misson"/>
  
   <Vission/>
  </Layout>
)

export default VissionMissionPage
