import React from "react"

import Layout from "../../components/layout"
import Feedback from '../../components/layouts/infrastructure/feedback'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const FeedBackPage = () => (
  <Layout>
    <SEO title="Feedback" />
    <Header title="Feedback" />
   <Feedback/>
 
  </Layout>
)

export default FeedBackPage