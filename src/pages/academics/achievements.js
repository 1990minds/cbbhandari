import React from "react"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Header from '../../components/global/header'
// import Achieve from '../../components/layouts/Achievements/achievements'
import Loadable from 'react-loadable';



 const LoadableAchieveComponent = Loadable({
    loader: () => import('../../components/layouts/Achievements/achievements'),
    loading: 'Loading...',
  });

const AchievementsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header title="Achievements"/>
   <LoadableAchieveComponent/>
   
  </Layout>
)

export default AchievementsPage
