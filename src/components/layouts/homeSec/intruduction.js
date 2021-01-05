import React from 'react';
import {Heading, Images, Text} from '../../utils/heading'
// import Line from '../../../images/hat copy1.svg'
import styled from 'styled-components'
import buildImage from '../../../images/layouts/home/bhandari-building.png'
import Vision from './visionSec'



const Intruduction = () => {

    let content = `C.B. Bhandari Jain College is a premier co-educational PU, Degree and 
    Post Graduate College with a difference. Established in June 2000 by Shree Mahaveer Jain Shikshan Sangh, this Institution aims at imparting quality, value-based education to youth . Located on K.R. Road, one of the arterial landmarks of Bangalore, the College provides a platform for for young boys and girls with wings of intellect and talent alike to take off in pursuit of careers in Science, Commerce and Management .
    To ensure proficiency in their  core-skills, the college offers compulsory value-added courses
    in Advanced Accounting Techniques, Advanced Computing Skills, Management and Leadership courses together with soft skills such as Team building, leadership & Pre-Placement preparation. As testimony to its thrust on Quality Education, five  of its students have bagged the 8th and 9th rank in 2011, 7th rank in 2013,  7th Rank in 2015 and 10th Rank in 2017, in Bangalore University B.Com., Examinations.
    In its 19th year of service towards the empowerment of youth, C.B Bhandari Jain College hopes to march ahead introducing more and more educational avenues for its students.
     `;
    return (
        <IntroWrap className="container-fluid py-4">

            <div className="container py-4">
            <div className="row py-4">
                <div className="col-sm-3">

<Images className="pt-sm-5 mt-sm-4" src={buildImage}/>
                </div>
                <div className="col-sm-9">

                <Heading className="ihead pl-sm-4" title="introduction" align="left"/>

<Text text={content} className="pl-sm-4 textintro"/>

                </div>
            </div>
          <Vision/>  
          </div>
        </IntroWrap>
    );
};

const IntroWrap = styled.div`






position:relative;


&::before{
content:"";
position:absolute;
width:100%;
height:100%;
border-radius:0%;
background-size:cover;
background-attachment:fixed;
background-color:rgba(0,0,0,0.05);
clip-path: polygon(0 1%, 12% 20%, 91% 80%, 100% 59%, 100% 100%, 91% 80%, 12% 20%, 0 39%);



top:0%;
left:0%;


}

.textintro{

    color:#222222;
    font-family:600;
}

@media(max-width:960px){

    .ihead{

        margin-top:30px;
    }

}

`
export default Intruduction;