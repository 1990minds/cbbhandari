import React from "react"

import Layout from "../../components/layout"
import ValueSec from '../../components/layouts/Valuaddcourse/vlaueaddSec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const CertificateCoursePage = () => (
  <Layout>
    <SEO title="Certificates" />
    <Header title="Certificates"/>
    
   <ValueSec/>
  </Layout>
)

export default CertificateCoursePage
