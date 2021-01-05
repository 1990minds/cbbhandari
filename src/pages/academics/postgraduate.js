import React from "react"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'
import PGraduate from '../../components/layouts/postdraduate/postgradut'

const PostGraduatePage = () => (
  <Layout>
    <SEO title="Post Graduate"  />
    <Header title="Post Graduate"/>
   <PGraduate/>
   
  </Layout>
)

export default PostGraduatePage
