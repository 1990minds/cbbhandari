import React from "react"

import Layout from "../../components/layout"
import LibraryPage from '../../components/layouts/library-info/librarypage'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const LibraryInfoPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header fontsize="24px" title="Library"/>
 <LibraryPage/>

   
  </Layout>
)

export default LibraryInfoPage
