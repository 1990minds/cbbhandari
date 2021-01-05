import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import {RDphotos, NSSphotos, MNphotos, WCphotos, ICphotos, Shephotos, YTphotos, CFphotos, Zestphotos } from './gallerydata'
//  import {Heading} from '../../../utils/heading'
 import Gallery from "react-photo-gallery";
import styled from 'styled-components'
class GallerySec extends Component {

state = {

  RDphotos,
   NSSphotos,
    MNphotos, 
    WCphotos, 
    ICphotos,
     Shephotos,
      YTphotos,
       CFphotos,
      Zest:Zestphotos
  

}




    render() {

      return (



        <GalWrap className="container-fluid  my-5">


<Tabs defaultTab="vertical-tab-one" id="tabs" vertical>
          <TabList className="col-sm4">
            <Tab tabFor="vertical-tab-one">Red Cross</Tab>
            <Tab tabFor="vertical-tab-two">NSS</Tab>
            <Tab tabFor="vertical-tab-three">She</Tab>
            <Tab tabFor="vertical-tab-four">Commerce Forum</Tab>
            <Tab tabFor="vertical-tab-five">Well Women Cell</Tab>
            <Tab tabFor="vertical-tab-six">Youth for Seva</Tab>
            <Tab tabFor="vertical-tab-seven">Inter College Fest</Tab>
            <Tab tabFor="vertical-tab-nine">Zest Hobby club </Tab>

            <Tab tabFor="vertical-tab-eight">Mangement Forum</Tab>


          </TabList>
          <div className="col-sm-8 ">
          <TabPanel tabId="vertical-tab-one">
          <Gallery photos={this.state.RDphotos} />;

          </TabPanel>
         <TabPanel tabId="vertical-tab-two">
          <Gallery photos={this.state.NSSphotos} />;
          </TabPanel>



       <TabPanel tabId="vertical-tab-three">
          <Gallery photos={this.state.Shephotos} />;
          </TabPanel>

            <TabPanel tabId="vertical-tab-four">
          <Gallery photos={this.state.CFphotos} />;

          </TabPanel>
          <TabPanel tabId="vertical-tab-five">
          <Gallery photos={this.state.WCphotos} />;
          </TabPanel>
          <TabPanel tabId="vertical-tab-six">
          <Gallery photos={this.state.YTphotos} />;
          </TabPanel>

         <TabPanel tabId="vertical-tab-seven">
          <Gallery photos={this.state.ICphotos} />;

          </TabPanel>

          <TabPanel tabId="vertical-tab-eight">
          <Gallery photos={this.state.MNphotos} />;
          </TabPanel> 

          <TabPanel tabId="vertical-tab-nine">
          <Gallery photos={this.state.Zest} />;
          </TabPanel> 
          </div>
        </Tabs> 
     

        </GalWrap>
     
      );
    }
  }


  const GalWrap = styled.div`
  width:85%;
  margin:auto;

@media(max-width:1600px){

  width:95%;

  .react-photo-gallery--gallery{

width:1000px;
}
}

 @media(max-width:960px){

#tabs{

  width:100%;
  display:block;

}

.react-photo-gallery--gallery{

width:100%;
}

 } 
  
  `
export default  GallerySec