import React from "react"
import Calander from '../../components/layouts/AcademicCalnder/Calander'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const AcademicCalanderPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Academic Calendars"/>
  <Calander/>
   
  </Layout>
)

export default AcademicCalanderPage
