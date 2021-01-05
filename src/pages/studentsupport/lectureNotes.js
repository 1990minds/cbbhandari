import React from "react"

import Layout from "../../components/layout"
import LectureSec from '../../components/layouts/studentsupport/lectureNotes/LectureSec'
import SEO from "../../components/seo"
import Header from '../../components/global/header'

const LectureNote = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Lecture Notes"/>
    <LectureSec/>
   
  </Layout>
)

export default LectureNote
