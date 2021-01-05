import React from "react"
import ManagementPage from '../../components/layouts/FacultySec/management'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'

const FacultyProfilePage = () => (
  <Layout>
    <SEO title="Management Profile" />
    <Header title="Management Profile"/>
 <ManagementPage/>
   
  </Layout>
)

export default FacultyProfilePage