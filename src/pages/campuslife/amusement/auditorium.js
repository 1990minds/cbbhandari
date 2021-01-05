import React from "react"

import Layout from "../../../components/layout"
import Auditorium from '../../../components/layouts/infrastructure/aditourium'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const AuditoriumPage = () => (
  <Layout>
    <SEO title="auditorium" />
    <Header title="auditorium"/>
  <Auditorium/>
   
  </Layout>
)

export default AuditoriumPage
