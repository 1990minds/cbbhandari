import React from 'react';
import styled from 'styled-components'
import {Heading, Text } from '../../../utils/heading'
import Fade from 'react-reveal/Fade';



const Supportcard = (props) => {
    return (
        <StdWrap className="container-fluid">
            
<div className="row">
    <div className="col-sm-3">
<Fade left duration={800} delay={800} distance='50px'>
        <img className="rounded shadow mt-2" src={props.src} alt="fgf" id="stdimg"/>
     </Fade>
    </div>
    <div className="col-sm-8">
    <Fade right duration={700} delay={400} distance='50px'>

<Heading fontsize="24px" title={props.title}/>
</Fade>



<Fade bottom duration={500} delay={500} distance='50px'>

<Text text={props.content} />


</Fade>
    </div>
    <div className="container ml-0 mt-3 " style={{display:`${props.display}`}}>
        <div className="row">
            <div className="col-sm-4">
            <img className="rounded shadow mt-2" src={props.img2} alt="fgf" id="stdimgs" />

            </div>
            <div className="col-sm-4">
            <img src={props.img3}className="rounded shadow mt-2"  alt="ff" id="stdimgs" />

            </div>
            <div className="col-sm-4">
            <img className="rounded shadow mt-2" src={props.img4} alt="f" id="stdimgs"/>

            </div>

        </div>
    </div>
 

</div>

        </StdWrap>
    );
};

const StdWrap = styled.div`

#stdimgs{
  width:100%;
    margin:auto;
    display:block;
    height:80%;


}

#stdimg{
  width:100%;
    margin:auto;
    display:block;
  
}

#hr{

width:10%;
margin:auto 0;
border:none;
height:3px;
border-radius:10px;
opacity:0.5;

}

`
export default Supportcard;