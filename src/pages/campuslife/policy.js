import React from "react"

import Layout from "../../components/layout"
import Policy from '../../components/layouts/infrastructure/policySec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const PolicyPage = () => (
  <Layout>

    <SEO title="CBBJ Policy" />
    <Header fontsize="10px" title="Infrastructure and Amenities   " />

   <Policy/>

  </Layout>
)

export default PolicyPage