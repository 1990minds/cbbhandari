import React from "react"

import Layout from "../../../components/layout"
import SportsR from '../../../components/layouts/infrastructure/sprtsroom'

import SEO from "../../../components/seo"
import Header from '../../../components/global/header'

const SportsRoomPage = () => (
  <Layout>
    <SEO title=" RRooms Facility" />
    <Header title=" Rooms Facility"/>
   <SportsR/>
   
  </Layout>
)

export default SportsRoomPage
