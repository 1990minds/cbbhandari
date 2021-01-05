import React from "react"

import Layout from "../../../components/layout"
import IntercollegeSec from '../../../components/layouts/fest/intercollegeSec'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const InterCollegePage = () => (
  <Layout>
    <SEO title="Intercollege fest" />
    <Header title="InterCollege Fest"/>
   <IntercollegeSec/>
   
  </Layout>
)

export default InterCollegePage
