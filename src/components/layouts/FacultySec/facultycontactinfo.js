import React from 'react';
import styled from 'styled-components'
const Facultycontactinfo = (props) => {
    return (
        <FacultyContactWrap>
        <div className="container-fluid px-0   py-2 my-4 w-100">

            <div className="contctinfo shadow">


    <h2>Department Contact Info</h2>
    <hr/>
    <ul className="p-0">
        <li>Dept: &nbsp; {props.dept}</li>
    <li>email: &nbsp;{props.email}</li>
    <li>ph:&nbsp;{props.ph}</li>

    </ul>



            </div>
  
        </div>

        <div className="container-fluid">

        {/* <img src={props.event} alt="eve" width="100%"/> */}

        </div>

        </FacultyContactWrap>
    );
};

const FacultyContactWrap = styled.div`
.contctinfo{
text-align:center;
 padding:20px;
background-color:var(--AccentColor2);
    h2{

        color:white;
        font-size:24px;



}

ul{
    
   
    li{

padding:10px 20px;
list-style:none;
color:white;
border-bottom:1px solid white;
} 
    
    }

}

` 
export default Facultycontactinfo;