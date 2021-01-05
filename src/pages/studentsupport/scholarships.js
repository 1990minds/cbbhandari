import React from "react"

import Layout from "../../components/layout"
import Scolarshop from '../../components/layouts/studentsupport/scolarshipSec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const ScolarshipPage = () => (
  <Layout>
    <SEO title="Scholarships" />
    <Header title="Scholarships"/>
   
<Scolarshop/>
   
  </Layout>
)

export default ScolarshipPage
