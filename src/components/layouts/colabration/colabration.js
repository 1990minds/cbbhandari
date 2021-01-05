import React from 'react';
import Gallery from 'react-grid-gallery';
import col1 from '../../../images/layouts/colobaration/col1.jpg'
import col2 from '../../../images/layouts/colobaration/col2.jpg'
import col3 from '../../../images/layouts/colobaration/col3.jpg'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { FaFilePdf } from "react-icons/fa";
import styled from 'styled-components'
import awk1 from '../../../images/COLLABORATION/AWAKE/AWAKE LOGO.png'
import awkpdf from '../../../images/COLLABORATION/AWAKE/Awake.pdf'


import asc1 from '../../../images/COLLABORATION/ASSOCHAM/ASSOCHAM.jpg'
import ascpdf from '../../../images/COLLABORATION/ASSOCHAM/ASSOCHAM.pdf'

import fcc1 from '../../../images/COLLABORATION/FKCCI/100_6020.jpg'
import fcc2 from '../../../images/COLLABORATION/FKCCI/DSCN1074.jpg'
import fcc3 from '../../../images/COLLABORATION/FKCCI/DSCN1084.jpg'
import fcc4 from '../../../images/COLLABORATION/FKCCI/DSCN1086.jpg'

import fccpdf from '../../../images/COLLABORATION/FKCCI/fkcci.pdf'


import cww1 from '../../../images/COLLABORATION/cwcci/SBD_3000.jpg'
import cww2 from '../../../images/COLLABORATION/cwcci/SBD_3129.jpg'
import cww3 from '../../../images/COLLABORATION/cwcci/SBD_3189.jpg'
import cww4 from '../../../images/COLLABORATION/cwcci/SBD_3238.jpg'

import cwwpdf from '../../../images/COLLABORATION/cwcci/CWCCI.pdf'

import kal1 from '../../../images/COLLABORATION/KALAM/1T9A1894.jpg'
import kal2 from '../../../images/COLLABORATION/KALAM/1T9A1985.jpg'
import kal3 from '../../../images/COLLABORATION/KALAM/1T9A2055.jpg'
import kal4 from '../../../images/COLLABORATION/KALAM/1T9A2121.jpg'

import kalpdf from '../../../images/COLLABORATION/KALAM/Kalam.pdf'

import ranpdf from '../../../images/COLLABORATION/RANGADORAI HOSPITAL _MOU/Rangadorai.pdf'






const Colabration = () => {


    let IMAGESColabration =
    [{
            src: `${col1}`,
            thumbnail: `${col1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${col2}`,
            thumbnail:`${col2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${col3}`,
            thumbnail:`${col3}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]
    return (
            <ColbrationWrap>
        <div className="container pt-5" style={{height:"400px", width:"100%"}}>
       
                      <Gallery images={IMAGESColabration} rowHeight={300}/> 
                     
 
        </div>

        <div className="container mb-5">
     
        <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">AWAKE </Tab>
          <Tab tabFor="two">FKCCI </Tab>
          <Tab tabFor="three">ASSOCHAM </Tab>

          <Tab tabFor="four">CWCCI  </Tab>
          <Tab tabFor="five">KALAM INCUBATION CENTRE </Tab>
          <Tab tabFor="six">RANGADORAI HOSPITAL  </Tab>
        </TabList>
        <TabPanel tabId="one">
         
<div className="row">
        <div className="col-sm-6 mt-4">
                <img src={awk1} alt="f" className="w-50 mx-auto d-block"/>
        </div>
        <div className="col-sm-6">


        <div class="card mt-3" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">AWAKE</h5>
            <a href={awkpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


        </div>
</div>


        </TabPanel>
        <TabPanel tabId="two">
       

         
        <div className="row mt-4">
        <div className="col-sm-3">
                <img src={fcc1} alt="d" className="w-100"/>
        </div>
        <div className="col-sm-3">
                <img src={fcc2} alt="y" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={fcc3} alt="j" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={fcc4} alt="h" className="w-100"/>
        </div>
        <div className="col-sm-3">


        <div class="card mt-4" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">FKCCI</h5>
            <a href={fccpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


        </div>
</div>


        </TabPanel>


        <TabPanel tabId="three">

        <div className="row pt-4">
        <div className="col-sm-6">
                <img src={asc1} alt="d" className="w-100"/>
        </div>
        <div className="col-sm-6">


        <div class="card" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">ASSOCHAM</h5>
            <a href={ascpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


        </div>
</div>




        </TabPanel>

        <TabPanel tabId="four">
        

            
        <div className="row pt-4">
        <div className="col-sm-3">
                <img src={cww1} alt="d" className="w-100"/>
        </div>
        <div className="col-sm-3">
                <img src={cww2} alt="y" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={cww3} alt="j" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={cww4} alt="h" className="w-100"/>
        </div>
        <div className="col-sm-3">


        <div class="card mt-5" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">CWCCI</h5>
            <a href={cwwpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


        </div>
</div>



        </TabPanel>
        <TabPanel tabId="five">
        

        <div className="row mt-4">
        <div className="col-sm-3">
                <img src={kal1} alt="d" className="w-100"/>
        </div>
        <div className="col-sm-3">
                <img src={kal2} alt="y" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={kal3} alt="j" className="w-100"/>
        </div>   <div className="col-sm-3">
                <img src={kal4} alt="h" className="w-100"/>
        </div>
        <div className="col-sm-3">


        <div class="card mt-4" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">KALAM INCUBATION CENTRE</h5>
            <a href={kalpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


        </div>
</div>






        </TabPanel>
        <TabPanel tabId="six">
      


        <div className="card mt-4" style={{width: "18rem"}}>
            <FaFilePdf id="pdf"/>
            <div className="card-body">
            <h5 className="card-title text-center">RANGADORAI HOSPITAL </h5>
            <a href={ranpdf} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>


      
        </TabPanel>
      </Tabs>


</div>
        </ColbrationWrap>
    );
};

const ColbrationWrap = styled.div`

#pdf{

font-size:100px;
color:#DC3545;
text-align:center;
display:block;
margin:auto;
padding:10px;

}

#pdfanchr{

display:block;
margin:auto;


}


`
export default Colabration;