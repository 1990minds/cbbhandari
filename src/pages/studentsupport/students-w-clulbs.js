import React from "react"

import Layout from "../../components/layout"
import StdWings from '../../components/layouts/studentsupport/stdWings'

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const StudentClubPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Student Wings & Clubs" fontsize="2rem"/>
 <StdWings/>
   
  </Layout>
)

export default StudentClubPage
