import React from 'react';
import styled from 'styled-components'
import {Heading, Devider} from '../../utils/heading'
import { Parallax } from 'react-scroll-parallax';
import pdfstd from '../../../images/pdf/sylubus/2.6 STUDENT PERFORMANCE AND LEARNING OUTCOMES-converted (1).pdf'
import { FaFilePdf } from "react-icons/fa";
import stdimg from '../../../images/std.png'
import Fade from 'react-reveal/Fade';
const Staticourse = () => {
    return (
        <StaticWrap className="container-fluid mt-3">



<Parallax  className="principaralax" x={[20, -20]} y={[-0, 0]}   tagOuter="div">

<div className="pcontent py-3 shadow">


<Heading title="Courses Offered" align="left" className="text-white phead"/>
<Devider width="10%" className="" margin="0 15%"/>


            </div>

</Parallax>
            <div className="container-fluid">
<div className="row">
<div className="col-sm-4">


<Fade  bottom>
<img src={stdimg} id="std" alt="std" width="100%"/>
</Fade>



</div>
<div className="col-sm-8 mt-sm-5 pt-sm-5">

<div className="row">
                <div className="col-sm-4">

                <div className="card shadow" style={{width: "100%"}}>
  <div className="card-header">
    PUC
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">PCMB<br/>
<span>(Physics, Chemistry, Mathematics, Biology)</span></li>

    <li className="list-group-item">PCMC<br/>
 <span>(Physics, Chemistry, Mathematics, Computer Sc)</span></li>
    <li className="list-group-item">ABMS<br/>
<span>(Accountancy, Business Studies, Basic Maths, Statistics)</span></li>

    <li className="list-group-item">ABES<br/>
<span>(Accountancy, Business Studies, Economics, Statistics)</span></li>
    <li className="list-group-item">ABECs<br/>
<span>(Accountancy, Business Studies, Economics, Computer Sc)</span></li>


  </ul>
</div>

                </div>
  <div className="col-sm-4 dmb">


                <div className="card shadow" style={{width: "100%"}}>
  <div class="card-header">
  Degree Courses

  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">B.Com</li>
    <li className="list-group-item">BBA</li>
  </ul>
</div>

<div className="card shadow mt-5" style={{width: "100%"}}>
  <div className="card-header">
  Fashion Entrepreneurship Courses


  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Basic Diploma Course
</li>
    <li className="list-group-item">Advanced Diploma Course

</li>
  
  </ul>
</div>

<div className="card shadow mt-5" style={{width: "100%"}}>
  <div className="card-header">
Student Performence & Learning Out Comes


  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><a  href={pdfstd}>Download </a>
<FaFilePdf className="text-danger ml-2"/></li>
 
  
  </ul>
</div>



                </div>
                <div className="col-sm-4 dmb">

                <div className="card shadow" style={{width: "100%"}}>
  <div className="card-header">
  Value Added Courses

  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">B.Com+Diploma in Banking and Financial Services

</li>
    <li className="list-group-item">B.Com+Diploma in Accounts and Auditing

</li>
    <li className="list-group-item">B.Com+C A Coaching

</li>
<li className="list-group-item">B.B.A.+Diploma in Finance and Capital Markets



</li>
<li className="list-group-item">B.Com/B.B.A. + SAP Training





</li>

  </ul>
</div>



                </div>
            </div>


</div>
</div>
            
            </div>
        </StaticWrap>
    );
};

const StaticWrap = styled.div`
/* background-image:url('http://www.vanillamist.com/wp-content/uploads/2019/04/college.jpg'); */
background-size:cover;
background-color:#f5f5f5;
background-blend-mode:overlay;
background-attachment:fixed;
position: relative;
background-position:left;



.pcontent{

position:absolute;
margin-top:-2.5%;
 width:60%;
 background-color:var(--BrandColor);
 clip-path: polygon(6% 0, 100% 0%, 100% 100%, 0 100%);
 left:60%;

.phead{

 margin-left:15% !important;
}
}

.card{
    .card-header{

        font-family:bold;
        text-transform:capitalize;
      color:var(--AccentColor3);
      font-family:var(--HeadFont)

    }

    a{

      text-decoration:none;

    }

    

  span{

    font-size:14px;
    opacity: 0.7;
}  
} 

@media(max-width:960px){
  overflow:hidden !important;
.pcontent{

position:absolute;
background-color:#0073AD;
clip-path: polygon(6% 0, 100% 0%, 100% 100%, 0 100%);
left:40%;

width:100%;

}
#std{

  margin-top: 25%;
}
.phead{
    margin-left:10% ;

    font-size:1.2rem;
}

.princicontent{

    font-size:14px;



}

.dmb{

  margin-top:40px;
}


}
`
export default Staticourse;