import React from "react"

import Layout from "../../components/layout"
import StdClub from '../../components/layouts/studentsupport/std-union/stdunionSec'

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const StdClubPage = () => (
  <Layout>
    <SEO title="Student Clubs" />
    <Header title="Student Clubs" fontsize="2rem"/>
 <StdClub/>
   
  </Layout>
)

export default StdClubPage