import React from "react"
import FacultyPage from '../../components/layouts/FacultySec/facultypage'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const FacultyProfilePage = () => (
  <Layout>
    <SEO title="Faculty Profile" />
    <Header title="Faculty Profile"/>
 <FacultyPage/>
   
  </Layout>
)

export default FacultyProfilePage
