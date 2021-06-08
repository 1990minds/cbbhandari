import React, { Component } from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import {Link} from 'gatsby';
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn,  FaInstagram } from "react-icons/fa";
import styled from 'styled-components'
import { FaCaretRight } from "react-icons/fa";


class TopNavbar extends Component {


    render() {

        
        return (
            <Navbar className="border-bottom p-0" bg="white" expand="lg">
                <TopbarWrap className="containers">


<div className="row">
    <div className="col-sm-3.5">
    <Nav.Link href = "mailto: cbbhandarijaincollege@gmail.com " className=" border-left oicon"><AiOutlineMail className=""/> &nbsp;cbbhandarijaincollege@gmail.com </Nav.Link>

    </div>
    <div className="col-sm-2.5">
    <Link to="/"><Nav.Link className=" border-left oicon"><MdPhone className=""/> 080 - 2661 1924 </Nav.Link></Link>

    </div>

    <div className="col-sm-0.5 pt-2  border-left">
    <span className="bg-danger  mx-2 p-1  text-white">News<FaCaretRight/></span>
    </div>
    <div className="col-sm-3">
    
 <marquee width="100%" className="p-0" direction="left" >
 <h5 className="text-danger mt-2 mb-0">Admissions for all PUC/ Degree Courses are open for the year 2021 -2022</h5>
</marquee>

    </div>
    <div className="col-sm-0.5 sc">
    <Nav.Link href="https://www.facebook.com/Cbbbhandarijaincollege/" target="_blank"  id="facebook"  className=" border-right border-left"><FaFacebookF /></Nav.Link>

    </div>

    <div className="col-sm-2 ">
 
      <Link to="/online_application">
        <button style={{backgroundColor:"#3F307F"}} className="mt-1 rounded text-white border-0 p-1 w-100">
             
            APPLY NOW
              
            </button>
        </Link>

    </div>
    {/*
    <div className="col-sm-0.5">
    <Link to="/"><Nav.Link id="linkedin" className=" border-left"><FaLinkedinIn/></Nav.Link></Link>

    </div>
    <div className="col-sm-0.5">
    <Link to="/"><Nav.Link id="youtube" className=" border-left"><FaYoutube/></Nav.Link></Link>

    </div>
    <div className="col-sm-0.5">
    <Link to="/"><Nav.Link id="instagram"  className=" border-left border-right"><FaInstagram/></Nav.Link></Link>

    </div>  */}

</div>
{/* 
              <Nav className="">
                  <div className="topcontent ">
                <Link to="/"><Nav.Link className=" border-left"><AiOutlineMail className=""/> &nbsp; CallUs  9739835068</Nav.Link></Link>
                <Link to="/"><Nav.Link className=" border-left"><MdPhone className=""/> cbbhandarijaincollege@gmail.com</Nav.Link></Link>
                <Link to="/"><Nav.Link className="border-right-0 border-left "><span className="bg-danger  mx-2 p-1 text-white">News</span>this is the Events</Nav.Link></Link>
                </div>
                <div className="slink">
                <Link to="/"><Nav.Link className=" border-left "><FaFacebookF /></Nav.Link></Link>
                <Link to="/"><Nav.Link className=" border-left"><FaTwitter/></Nav.Link></Link>
                <Link to="/"><Nav.Link className=" border-left"><FaLinkedinIn/></Nav.Link></Link>
                <Link to="/"><Nav.Link className=" border-left"><FaYoutube/></Nav.Link></Link>
                <Link to="/"><Nav.Link className=" border-left border-right"><FaInstagram/></Nav.Link></Link>
                    </div>
              
              </Nav> */}
           </TopbarWrap>

          </Navbar>
        );
    }
}

const TopbarWrap = styled.div`




@media(max-width:1700px){
    width:90% !important;
margin:0 auto;

}
width:64% !important;
margin:0 auto;

#facebook{
    transition:0.2s ease-in-out;
color:#4267B2;
    &:hover{

background-color:#4267B2;
color:white;
}
}


#twitter{
transition:0.2s ease-in-out;
color:#1DA1F2;

   &:hover{

background-color:#1DA1F2;
color:white;
} 
}

#linkedin{
    transition:0.2s ease-in-out;
    color:#0077B5;
    &:hover{

background-color:#0077B5;
color:white;
}
}


#instagram{
    transition:0.2s ease-in-out;
    color:#F64F59;
&:hover{

background-color:#F64F59;
color:white;
}

}


#youtube{

    transition:0.2s ease-in-out;
color:#E21C29;
&:hover{

background-color:#E21C29;
color:white;
}  
}

.oicon svg{

    color:var(--AccentColor2);
    font-weight:bold;
}

 .nav-link {

  
    color:grey;
    text-decoration:none !important;


    &:hover {

        text-decoration-color: transparent !important;    }
}


@media(max-width:960px){

 
    marquee{

        border-top:0.5px solid #DBDFE3;
        padding:10px 0px !important;

    }

    #facebook{
margin-left:70px;



}

.sc{
    display:none;
}

}




`
export default TopNavbar;