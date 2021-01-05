import React from "react"

import Layout from "../../../components/layout"

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'
import CelbrationSec from '../../../components/layouts/fest/celabrationSec'

const CelebrationPage = () => (
  <Layout>
    <SEO title="Celebrations" />
    <Header title="Celebrations"/>
  <CelbrationSec/>
   
  </Layout>
)

export default CelebrationPage
