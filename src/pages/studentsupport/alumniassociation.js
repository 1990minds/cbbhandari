import React from "react"
import Alumi from '../../components/layouts/studentsupport/alumniSec'

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const AlumniPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Alumni Association"/>
   <Alumi/>
   
  </Layout>
)

export default AlumniPage
