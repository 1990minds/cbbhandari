import React, { Component } from 'react';
import styled from 'styled-components';
import {Heading} from '../../utils/heading'
import coursedata from './dgreecoursedata'
import { HoverCard } from 'react-png-hovercard';
import Interweave from 'interweave';
import CourseImg from '../../../images/2.jpg'
import { GiBookshelf } from "react-icons/gi";

class Coursecard extends Component {

state = {

    data:coursedata
}



    render() {
        return (
            <CourseWrap imge={CourseImg} className="container">


<div className="row">
{

    this.state.data.map(data =>{


return (<>
{/* <div className="col-sm-12"> */}
    <Heading className="dcourse py-3 text-center pt-5 mt-5 " align="center" title={data.coursename}/>


{/* </div> */}

<div className={`${data.col || 'col-sm-4'}`} style={{height:`${data.height}`, overflow:'hidden' }}>
    <HoverCard
   
      maxWidth={100+'%'}
      animationSpeed={500}
      height={400}
      margin={10}
      className="fronts"
      front={
        <div className="Front shadow">
<div className="coursecontent">

<GiBookshelf/>
<h4>{data.semister}</h4>

</div>
         

        </div>
      }
      back={



<div className="Back p-4 text-center  text-white w-100" style={{backgroundColor:"#09496D"}} >
          <p><Interweave content={data.sylabus} /></p>

        </div>



      
      }
  />
    </div>

</>)


    })
}

   
</div>

                
            </CourseWrap>
        );
    }
}

const CourseWrap = styled.div`

.fronts{

    background-image:${props=>`url(${props.imge})`};
    /* background-size:cover; */
    overflow:hidden;
  
}
.Front{
   
position:relative;
    .coursecontent{

        position:absolute;
        top:50%;
        left:50%;
        transform:translate(110%, -70%);
        color:white;
        text-align:center;

        svg{

            color:white;
            font-size:45px;
        }

    }
}
.dcourse{

display:inline-block;
font-family:var(--HeadFont2);
}

#line{

opacity:0.5;
}
`
export default Coursecard;