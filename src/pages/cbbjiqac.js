import React from "react"

import Layout from "../components/layout";

import Loadable from 'react-loadable';
import Loading from '../components/global/Loading';



import SEO from "../components/seo"



const IqacLayout = Loadable({
  loader: () => import('../components/layouts/About/iqacSec'),
  loading: Loading,
});




const qcPage = () => (
  <Layout>
    <SEO title="Home" />
  <IqacLayout/>
   
  </Layout>
)


export default qcPage
