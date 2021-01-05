import React from "react"

import Layout from "../../components/layout"
import Mfourm from '../../components/layouts/studentsupport/managementForum'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const CommerceForum = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Management Forum"/>
<Mfourm/>   
  </Layout>
)

export default CommerceForum