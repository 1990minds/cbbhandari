import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

class Course extends Component {

state = {
    coursedata:[

       {
           title:"PUC",
           path:"/academics/puc"
         },
         {
            title:"Degree",
            path:"/academics/degree"

          },
          {
            title:"Post Graduate",
            path:"/academics/postgraduate"

          },
          {
            title:"Value Added Course",
            path:"/academics/certificate-courses"

          }
    ],
    
    sected:"PUC",
    path:"/academics/puc"

}



handlechange = (e) =>{

    let ele = e.target
   let select =  ele.options[ele.selectedIndex].text
   let select2 =  ele.options[ele.selectedIndex].value

    console.log(select, select2);
    


  this.setState({sected:select, path:select2});

}


    render() {

        
        console.log(this.state);
        
     
        return (
            <CourseWrap className="container-fluid bg-light py-5">

                  <div className="container">
<div className="row">
    <div className="col-sm-4 mt-3 mt-sm-0 d-flex">


  <Parallax className="principaralax" x={[-50, 50]} y={[-0, 0]}   tagOuter="div">

<h3 className="text-left ">Our Course Details

<FaArrowRight className="ml-3"/>

</h3>
</Parallax>


    </div>


    <div className="col-sm-8 mt-3 mt-sm-0 d-flex" >

    <select className="form-control w-75" id="selectelement" onChange={(e)=>this.handlechange(e)} >
        {
            this.state.coursedata.map(course =>{

                return  <option value={course.path}>{course.title}</option>

            })
        }
 
</select>
        <button className="btn btn-danger ml-3 px-4 "><Link  style={{textDecoration:"none"}} className="text-white" to={this.state.path} >Get info</Link></button>
    </div>
</div>

                  </div>
                
            </CourseWrap>
        );
    }
}

const CourseWrap = styled.div`

h3{

    font-family:var(--HeadFont2);
    display:inline;
}

@media(max-width:960px){

h3{

    font-size:18px;
}

}
`;
export default Course;