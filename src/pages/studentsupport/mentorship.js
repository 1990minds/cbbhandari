import React from "react"

import Layout from "../../components/layout"
import MentorShip from '../../components/layouts/studentsupport/mentorshipPage'

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const MentorshipPage = () => (
  <Layout>
    <SEO title="Mentorship" />
    <Header title="Mentorship"/>
   <MentorShip/>
  </Layout>
)

export default MentorshipPage
