import React from 'react';
import styled from 'styled-components'
import {Heading, Images, Text } from '../../utils/heading'
import pucImg1 from '../../../images/layouts/PUC/puc1.jpg'
import pucImg2 from '../../../images/layouts/PUC/PUC2.png'


const Puc = () => {

let  contentpuc= `CBBJC aims at encouraging more youth to enter the lucrative portals of Commerce and Industry. Promising prospects are emerging in the service sector which is expected to contribute more than 70% of India’s National Income by 2020. An increasing number of youth in India are joining the service Industry and C.B.B.J.C. encourages students to be part of this burgeoning sector.`
let  contentpuc2= `Students choosing science stream are 
encouraged to develop a scientific temper. 
Career guidance is offered by noted 
professionals to expose students to varied 
choices in science. Students are acquainted 
with diverse and challenging careers 
ranging from much sought of after 
engineering and medical field to innovative 
upcoming realms of bio technology and 
artificial intelligence.
`

let valueaddscience = ` Value Additions:  Coaching for IIT, JEE 
(Mains and Advanced), NEET, CET `

let valueaddcommerce = `Value Addition: Coaching for CA, CPT  `

    return (
        <PucSecWrap className="container-fluid">

        <div className="container py-5 ">



        <Heading fontsize="18px" title="CBBJC Offers The Following Radical Combinations, In Tune With Changing Career Prospects To Students of Science and Commerce "/>


          <div className="row py-5">
            <div className="col-sm-6">

   

    <div className="container">
      <div className="row">
        <div className="col-sm-3 pu1">ABMS &nbsp; &#8594;</div>
        <div className="col-sm-9">Accountancy, Business Studies, Basic Maths, Statistics</div>

        <div className="col-sm-3 pu1">ABES &nbsp; &#8594;</div>
        <div className="col-sm-9">Accountancy, Business Studies, Economics, Statistics</div>


        <div className="col-sm-3 pu1">ABECs &nbsp; &#8594;</div>
        <div className="col-sm-9">Accountancy, Business Studies, Economics, Computer Science</div>

      </div>
    </div> 

  <Text className="pt-3" text={contentpuc}/>
  <Text className="pt-2 font-weight-bold" text={valueaddcommerce}/>

            </div>
            <div className="col-sm-6 ">
            <div className="container mb-5">
      <div className="row">
        <div className="col-sm-3 pu2">PCMC &nbsp; &#8594;	</div>
        <div className="col-sm-9">PCMB Physics, Chemistry, Mathematics, Biology</div>

        <div className="col-sm-3 pu2">PCMB &nbsp; &#8594;</div>
        <div className="col-sm-9">Physics, Chemistry, Mathematics, Computer Science</div>

      </div>
    </div>

  <Text className="pt-3" text={contentpuc2}/>
  <Text className="pt-2 font-weight-bold" text={valueaddscience}/>

  

  
            </div>
            <div className="col-sm-12">
            <Images width="100%" src={pucImg1}/>
            </div>
          </div>
        </div>
      </PucSecWrap>
    );
};


const PucSecWrap = styled.div`
.pu1 {

background-color:#166589;
margin-top:8px;
padding-top:16px;
color:white;
font-family:var(--HeadingFont);
}

.pu2{
background-color:#166589;
margin-top:8px;
padding-top:16px;
color:white;
font-family:var(--HeadingFont);
  
}

.col-sm-9 {

  background-color:#f5f5f5;
  margin-top:8px;
  font-family:var(--HeadingFont);
  padding:15px;

}

`
export default Puc;