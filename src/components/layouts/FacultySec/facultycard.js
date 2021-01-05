import React from 'react';
import styled from 'styled-components'
import Img from 'react-image'

const Facultycard = (props) => {

    const {name, dept, status, img} = props;
    return (
        <FacultyCardWrap  className="container my-4 border shadow-sm">


    <div className="row bg-light  ">
        <div className="col-sm-4 p-0">
            <Img src={img} width="200px" height="220px" alt="dg"/>
        </div>
        <div className="col-sm-8 py-3  px-3 faculyprofile">

<h3>{name}</h3>
<hr/>
<h6 className="text-muted">{status}</h6>

<h5 className="pt-2"> {dept}</h5>



        </div>
    </div>


            
        </FacultyCardWrap>
    );
};

const FacultyCardWrap = styled.div`
.faculyprofile{

   h3{

    font-size:24px;
    color:var(--AccentColor3);

}

h5{
  font-size:16px;
    color:#000;
    opacity:0.8;
    line-height:30px;
} 
}


`

export default Facultycard;