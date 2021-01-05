import React, { Component } from 'react';
import { FaFilePdf, FaTimes } from "react-icons/fa";
import styled from 'styled-components';
import bcompdf from '../../images/pdf/sylubus/B.Com Syllabus (1).pdf'
import bbapdf from '../../images/pdf/sylubus/BBA Syllabus (1).pdf'
import stdperformence from '../../images/pdf/sylubus/2.6 STUDENT PERFORMANCE AND LEARNING OUTCOMES-converted (1).pdf'
class Syllabus extends Component {


    state = { isOpen: true, display:true}


    handleClick = (props) => {


 this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));

       

        
      }
    
   componentWillMount(){

    
    if(window.location.href==="http://cbbhandarijaincollege.com/"){
    }
    else{
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }));    
    }

    console.log(this.props);
    
   } 



    render() {

      

        return (
          
        <SylabusWrap id="syl" style={{left:this.state.isOpen? "0%" : "-16.8%"}}>
<div className="row" >

<div className="col-11 p-0" >

<div className="card" style={{width: "100%"}}>
  <div className="card-header">
   <h5 className="text-center text-secondary">CBBJ College Syllabus</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
        
    <FaFilePdf/> <a href={bcompdf} target="_blank" rel="noopener noreferrer" className="btn">Download B.Com new Sylubus</a></li>
    <li className="list-group-item">
        
    <FaFilePdf/> <a href={bbapdf} target="_blank" rel="noopener noreferrer" className="btn">Download BBA new Sylubus</a></li>
    <li className="list-group-item">
        
    <FaFilePdf/> <a href={stdperformence} target="_blank" rel="noopener noreferrer" className="btn">Download Student Performence</a></li>
  </ul>
</div>



</div>
    
<div className="col-1 p-0">{this.state.isOpen? <FaTimes onClick={()=>this.handleClick()} className="ml-2  cl"/> : <FaFilePdf onClick={()=>this.handleClick()} className="ml-2 cl"/> }</div>

</div>
  


 
        </SylabusWrap>

        );
    }
}


const SylabusWrap = styled.div`

position:fixed;
top:40%;
left:0%;
z-index:223;
transition:0.5s;

.cl{
font-size:35px;
color:#DC3545 !important;


}
svg{

    color:#DC3545;
    font-size:23px;
    cursor: pointer;
}

`
export default Syllabus;