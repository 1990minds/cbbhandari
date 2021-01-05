import React, { Component } from 'react';
import styled from 'styled-components';
import {Heading, Devider} from '../utils/heading'
import Fade from 'react-reveal/Fade';
import himage from '../../images/headerimg.jpg'

class Header extends Component {

    state = {

        himage
    }  


    render() {

      

        return (

            <HeaderWrap style={{backgroundImage:`url(${this.state.himage})`}}>

            <Fade left duration={500} distance="50px">
                <div className="headcontent">
                <Fade top delay={500} duration={900} distance="50px">
                <Heading className="pt-5 mt-4 head text-white" fontsize = {this.props.fontsize}    title={this.props.title || "Heading"}/>
               </Fade>
               <Fade right delay={1200} duration={1000} distance="100px">

                <Devider className="pb-5 divder" margin="0px 140px" width="10%"/>
                </Fade>

                </div>
                </Fade>
            </HeaderWrap>
        );
    }
}

const HeaderWrap = styled.div`

/* background-color:rgba(25,67,110,0.8); */
background-size:100%;
background-attachment: fixed;
/* background-blend-mode:overlay; */
background-position:center bottom;
height:200px;
margin-top: -30px;
.head{

    margin-left:3.5em !important;
    font-size:${props => props.fontsize || "2.5rem"};
    font-family:var(--HeadFont);
    padding-top:60px !important;

}

.headcontent{

    height:100%;
    width:40%;
    background-color:#0073AD;
    color:white;
    clip-path: polygon(85% 15%, 100% 100%, 93% 100%, 0 100%, 0 15%);
opacity: 1;



}


@media (max-width:1760px){

    .headcontent{

        width:50%;

}
}


@media (max-width:960px){

    height:150px;

    .headcontent{

height:100%;
width:70%;
height:100%;
background-color:#0073AD;
color:white;
clip-path: polygon(85% 50%, 100% 100%, 93% 100%, 0 100%, 0 50%);
opacity: 1;



}

    .head{

margin-left:1em !important;
padding-top:90px !important;
font-size:1.2rem;
font-family:var(--HeadFont);


}
.divder{

    margin:0px -120px;
}

}


`
export default Header;