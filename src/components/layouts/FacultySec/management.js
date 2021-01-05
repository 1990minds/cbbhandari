import React, { Component } from 'react';
import FacultyCard from './facultycard';
import {Managementdata, contactinfo} from './facultydata';
import Facultycontact from './facultycontactinfo';
import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

class Facultypage extends Component {


state = {

    Facultydata:Managementdata,
    Contactinfo:contactinfo,
    deptnames:["Office Bearers of Shree Mahaveer Jain Shikshan Sangh (SMJSS)","Governing Council"],
    currentdept:"",
    dept:"",
    ph:"",
    email:"",
    loading:true
}


handleClick = (e) =>{

    e.preventDefault();
let ele = e.target.textContent;

this.setState({currentdept:ele})

}




    render() {
        return (
            <FacultyWrap className="container " >
                <div className="row">
                <div className="col-sm-8 py-5 mt-4">

                {

                  this.state.Facultydata.map(faculty =>{
                if( faculty.commerce == (this.state.currentdept || 'Office Bearers of Shree Mahaveer Jain Shikshan Sangh (SMJSS)')){


                        return(<>
                        
                        <Fade duration={1000} distance="30px" left >
                            <FacultyCard key={faculty.id}  name={faculty.name} dept={faculty.Dept} status={faculty.status} img={faculty.imge}/>
                       </Fade>
                        
                        
                        </>)

                              }
                  })
              } 
 </div>


<div className="col-sm-4 depttab mt-5 py-5" >
<div className="card" style={{width: "100%"}}>
  <div className="card-header">
    Departments
  </div>
  <ul className="list-group list-group-flush tabli">

      {

this.state.deptnames.map((name, index)=>{

return <li className="list-group-item" autofocus="true"  tabindex={index} key={index} onClick={(e)=>this.handleClick(e)}><span className="mr-3"><FaLongArrowAltRight tabindex={index}  onClick={(e)=>this.handleClick(e)}/></span>{name}</li>
})

      }
 
  </ul>
</div>

{/* <div className="container px-0">

    {

        this.state.Contactinfo.map(info =>{
if(info.commerce == (this.state.currentdept || 'commerce')){

return <Facultycontact ph={info.ph} email={info.email} event={info.event} dept={info.dept} />
    
}
            
        })
    }
</div> */}


</div>




                </div>
             
            </FacultyWrap>
        );
    }
}

const FacultyWrap = styled.div`



.depttab{
ul li {
    transition:0.3s;

   &:hover{

background-color:var(  --AccentColor2);
color:white !important;
}

&:focus{

    background-color:var(  --AccentColor2);
    color:white !important;


}


}
 


.tabli li{

    font-family:var(--HeadFont);
    color:var(--AccentColor3);

    cursor: pointer;
   
}

}



`

export default Facultypage;