import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import IqacC from './iqaccompSec'
import styled from 'styled-components'
import img1 from '../../../images/layouts/iqac/img1.jpg'

import imgg1 from '../../../images/iqac-gal/iqac (1).png'

import aqar from '../../../images/pdf/iqac/AQAR2017-18.pdf'
import ev18 from '../../../images/pdf/iqac/CALENDAR OF EVENTS 2017 - 18.pdf'
import ev19 from '../../../images/pdf/iqac/Calendar of Event Excel 2018-19.pdf'

import m18 from '../../../images/pdf/iqac/IQAC Meeting 2017-18.pdf'
import m19 from '../../../images/pdf/iqac/10. IQAC Meeting 18-19.pdf'

import a18 from '../../../images/pdf/iqac/Annual Report 17-18.pdf'
import a19 from '../../../images/pdf/iqac/Annual Report 2018-19.pdf'


import Bcom19 from '../../../images/pdf/iqac/B.Com Result Analysis 18-19.pdf'
import BBA19 from '../../../images/pdf/iqac/BBA Result Analysis  18-19.pdf'

import SSS from '../../../images/pdf/iqac/Student Satisfaction Survey (SSS) 2018.pdf'
import Nacc from '../../../images/pdf/iqac/NAAC CER.pdf'
import Aqar19 from '../../../images/pdf/iqac/AQAR 2018-19.pdf'
import Aqar20 from '../../../images/pdf/iqac/AQAR 2019-20 Final.pdf'

import Code_of_Conduct from '../../../images/pdf/iqac/Code  of Conduct.pdf'
import Institutional_Distinctiveness from '../../../images/pdf/iqac/Institutional Distinctiveness.pdf'
import Best_Practices from '../../../images/pdf/iqac/Best Practices.pdf'

import IQAC_Meet_19_20 from '../../../images/pdf/iqac/IQAC Meeting 2019-20.pdf'
import IQAC_Members_19_20 from '../../../images/pdf/iqac/IQAC Members 19-20.pdf'
import IQAC_Members_20_21 from '../../../images/pdf/iqac/IQAC Members 2020-21.pdf'
import IQAC_Activity_19_20 from '../../../images/pdf/iqac/IQAC Activities 2019-20.pdf'
import Student_performence from '../../../images/pdf/iqac/STUDENT PERFORMANCE AND LEARNING OUTCOMES.pdf'
import student_survey from '../../../images/pdf/student_survey/Students Satisfactory Survery 2019-20 (1).pdf'




import Gallery from "react-photo-gallery";

import { FaFilePdf } from "react-icons/fa";
import photos from './iqacgaldata'
import Nacctable from '../../global/tables/nacctable';

class componentName extends Component {

    render() {
        return (
           <IqacWrap className="">
           <Tabs>
           <TabList className="tlist">
           <Tab tabFor="vertical-tab-nine">NAAC CERTIFICATE </Tab>
           <Tab tabFor="vertical-tab-one">IQAC  MEMBERS</Tab>
           <Tab tabFor="vertical-tab-two">IQAC  AQAR</Tab>
           <Tab tabFor="vertical-tab-three">IQAC  ACTIVITIES</Tab>
           <Tab tabFor="vertical-tab-four">IQAC  MINUTES OF MEETING</Tab>
           <Tab tabFor="vertical-tab-five">ANNUAL  REPORT</Tab>
           <Tab tabFor="vertical-tab-six">IQAC  Gallery</Tab>
           <Tab tabFor="vertical-tab-seven"> STUDENT SATISFACTORY SURVEY(SSS) </Tab>
           <Tab tabFor="vertical-tab-eight"> RESULT ANALYSIS </Tab>



           </TabList>

           <TabPanel tabId="vertical-tab-one">
<div className="container-fluid">

<div className="row">

<div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Members 2019-20</h5>
<a href={IQAC_Members_19_20} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>

<div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Members 2020-21</h5>
<a href={IQAC_Members_20_21} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>




</div>

    <div className="row">
        {/* <div className="col-sm-6">




        <IqacC/>

        </div> */}
        <div className="col-sm-6 mb-4">

{/* <Nacctable/> */}
<img src={imgg1} className="mt-5" alt="f" width="100%"/>

        </div>
    </div>
</div>


           </TabPanel>

           <TabPanel tabId="vertical-tab-two">

               <div className=" row p-sm-3">

               <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">AQAR 2020-21</h5>
<a href={Aqar20} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div> 

                   <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">Code of Conduct for Staff</h5>
<a href={Code_of_Conduct} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>


<div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">Institutional Distinctiveness</h5>
<a href={Institutional_Distinctiveness} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>

<div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">Best Practices</h5>
<a href={Best_Practices} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>




                   <div className="col-md-3 col-sm-4 my-2">



                   <div class="card" style={{width: "100%"}}>
            <FaFilePdf id="pdf"/>
            <div class="card-body">
            <h5 class="card-title text-center">AQAR 2018-19</h5>
            <a href={Aqar19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
            </div>
            </div>

                   </div>

                   <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">AQAR 2017-18</h5>
<a href={aqar} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>
       

               </div>
           </TabPanel>  

                <TabPanel tabId="vertical-tab-three">

<div className="row my-sm-5">
    <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Activities 2017 - 18</h5>
<a href={ev18} target="new_tab" id="pdfanchr" class="btn btn-primary">Download</a>
</div>
</div>




    </div>
    <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Activities 2018 - 19</h5>
<a href={ev19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

    </div>

    <div className="col-md-3 col-sm-4 my-2">

<div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Activities 2019 - 20</h5>
<a href={IQAC_Activity_19_20} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

    </div>
</div>

           </TabPanel>

           <TabPanel tabId="vertical-tab-four">


               
<div className="row my-sm-5">
    <div className="col-md-3 col-sm-4 my-2">

    <div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Minutes of Meeting 2017 - 18</h5>
<a href={m18} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

    </div>
    <div className="col-md-3 col-sm-4 my-2">

    <div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC Minutes of Meeting 2018 - 19</h5>
<a href={m19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
    </div>


    <div className="col-md-3 col-sm-4 my-2">

<div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center">IQAC  Meeting 2019 - 20</h5>
<a href={IQAC_Meet_19_20} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>
</div>
           </TabPanel>

           <TabPanel tabId="vertical-tab-five">

<div className="row my-sm-5">
    <div className="col-md-3 col-sm-4 my-2">
    <div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> Anual Report 2017 - 18</h5>
<a href={a18} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
    </div>
    <div className="col-md-3 col-sm-4 my-2 ">

    <div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> Anual Report 2018 - 19</h5>
<a href={a19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>


    </div>
</div>
               
           </TabPanel>



           <TabPanel tabId="vertical-tab-seven">


               
<div className="row my-sm-5">


<div className="col-md-3 col-sm-4 my-2">

<div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
Student Satisfaction Survey 2019-20</h5>
<a href={student_survey} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

</div>







    <div className="col-md-3 col-sm-4 my-2">

    <div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
 SSS 2018-19</h5>
<a href={SSS} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

    </div>


    <div className="col-md-3 col-sm-4 my-2">

<div class="card" >
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
Student Performance & Learning Outcomes</h5>
<a href={Student_performence} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

</div>
    
</div>
           </TabPanel>

           <TabPanel tabId="vertical-tab-eight">


               
<div className="row my-sm-5">
    <div className="col-sm-3">

    <div class="card" style={{width: "18rem"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
B.Com 2018-19
</h5>
<a href={Bcom19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

    </div>


    <div className="col-sm-3">

<div class="card" style={{width: "18rem"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
BBA 2018-19
</h5>
<a href={BBA19} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>

</div>
    
</div>




   
    
           </TabPanel>


           <TabPanel tabId="vertical-tab-nine">


               
<div className="row my-sm-5">
    <div className="col-sm-3">

    <div class="card" style={{width: "18rem"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<h5 class="card-title text-center"> 
NAAC CERTIFICATE 
</h5>
<a href={Nacc} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
    </div>



    
</div>
           </TabPanel>










           <TabPanel tabId="vertical-tab-six">
<div className="row my-sm-5">
    <div className="col-sm-12">
<Gallery photos={photos} direction={"column"} /> 
    </div>
</div>
          





           </TabPanel>

           </Tabs>
           </IqacWrap> 
        );
    }
}

const IqacWrap  = styled.div`

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
background-color:#f5f5f5;
width:75%;
margin:50px auto;
.tlist{

font-family:var(--HeadFont) !important;
color:var(--AccentColor3) !important;

}

@media(max-width:960px){

    width:99%;
    margin:30px auto;

iframe{

    height:500px;
}

}

`
export default componentName;