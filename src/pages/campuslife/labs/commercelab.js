import React from "react"

import Layout from "../../../components/layout"
import CommerceLab from '../../../components/layouts/infrastructure/commercelab'
import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const CommerceLabPage = () => (
  <Layout>
    <SEO title="Commerce Lab" />
    <Header title="Commerce Lab"/>

   <CommerceLab/>
  </Layout>
)

export default CommerceLabPage
