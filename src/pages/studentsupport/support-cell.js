import React from "react"

import Layout from "../../components/layout"
import StdCell from '../../components/layouts/studentsupport/supportcell/stdsupport'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const SupportCellPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Support Cell"/>
 
    <StdCell/>
   
  </Layout>
)

export default SupportCellPage
