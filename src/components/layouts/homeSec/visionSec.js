import React from 'react';
import {Text, Heading} from '../../utils/heading'
import styled from 'styled-components'
import { MdDescription } from "react-icons/md";
import { GiMissileLauncher, GiStairsGoal, GiTargetArrows } from "react-icons/gi";

const visionSec = () => {
    return (
        <VisionWrap className="container my-0 my-sm-5">
            <div className="row">
                <div className="col-sm-4 mt-4 mt-sm-0 ">

<div className="card" style={{width: "100%"}}>
 <GiStairsGoal />
  <div className="card-body">
    <h5 className="card-title text-center">Vision</h5>
    <p className="card-text"><Text text="Knowledge Solutions for
Youth Empowerment"/></p>
  </div>
</div>






                </div>
                <div className="col-sm-4 mt-4 mt-sm-0">

     

<div className="card" style={{width: "100%"}}>
 <GiMissileLauncher />
  <div className="card-body">
    <h5 className="card-title text-center">Mission</h5>
    <p className="card-text"><Text text="To ensure a conducive learning
environment that nurtures the
acquisition of relevant skills for
our students and to inculcate a
winning attitude in their chosen
    domains"/></p>
  </div>
</div>

                </div>
                <div className="col-sm-4 mt-4 mt-sm-0">


          

         



<div className="card" style={{width: "100%"}}>
 <MdDescription />
  <div className="card-body">
    <h5 className="card-title text-center">Quality Policy</h5>
    <p className="card-text">
        
<Text text="C.B. Bhandari Jain College strives for
excellence through sustained efforts to
improve the quality of academic &
administrative services using as effective
quality management system considering all
statutory, regulatory & environmental
requirements."/>
    </p>

</div>







</div>

                </div>
                <div className="col-sm-12 mt-4 mb-5">


                <div className="card" style={{width: "100%"}}>
 <GiTargetArrows id="target" />
  <div className="card-body">
    <h5 className="card-title text-left">Objectives</h5>
    <p className="card-text " style={{opacity:"0.7"}}>

    To create the right environment for learning.<br/>
❖ To provide top quality resources in terms of
teaching, library and laboratories.<br/>
❖ To inculcate discipline.<br/>
❖ To promote physical fitness and emotional stability.<br/>
❖ To enhance self worth in disadvantaged students.<br/>
❖ To equip them with better communication skills.<br/>
❖ To inculcate values relating to tolerance, endurance,
peaceful co – existence, sympathy towards the less
endowed, charity and non-violence [Ahimsa Paramo
Dharmaha]<br/>
❖ To ingrain noble ideals and principles.



    </p>
  </div>
</div>

</div>
            </div>
        </VisionWrap>
    );
};

const VisionWrap = styled.div`
.card{

    background-color:white;
    border-bottom:4px solid var(--BrandColor);
    padding:10px;
    height:100%;
    box-shadow:0px 5px 10px 1px  #f5f5f5;
    border-top:none;
    transition:0.6s;

 svg{

display:block;
margin:auto;
font-size:80px;
color:var(--BrandColor);

}
&:hover{
    background-color:var(--BrandColor);
    color:white;
p{

    opacity:0.9;
}
    svg{

display:block;
margin:auto;
font-size:80px;
color:white;

}

}

}



#target{
    margin-left:20px;   
}

`
export default visionSec;