import React from "react"

import Layout from "../../components/layout"
import AdmSec from '../../components/layouts/About/AdmisionSec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const AddmisionPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Admissions"/>
 
 <AdmSec/>
   
  </Layout>
)

export default AddmisionPage
