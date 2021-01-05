import React from "react"

import Layout from "../../components/layout"
import Cfourm from '../../components/layouts/studentsupport/commforum'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const CommerceForum = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Commerce Forum"/>
<Cfourm/>   
  </Layout>
)

export default CommerceForum
