import React from "react"
import OnlineSec  from "../components/layouts/onlineApplication"
import Header from '../components/global/header'

import Layout from "../components/layout"
import SEO from "../components/seo"

const OnlineApplication = () => (
  <Layout>
    <SEO title="Online Application" />
    <Header title="Online Application"/>
    <div className="container">
    <OnlineSec/>
    </div>
    
  </Layout>
)

export default OnlineApplication
