import React from 'react';
import styled from 'styled-components'
import {Card, ListGroup } from 'react-bootstrap'
import {Heading, Text} from '../../utils/heading'
import pdfict from '../../../images/pdf/final ict ppt.pdf'
import md1 from '../../../images/mediaGroup/media (1).jpg'
import md2 from '../../../images/mediaGroup/media (2).jpg'
import md3 from '../../../images/mediaGroup/media (3).jpg'
import md4 from '../../../images/mediaGroup/media (4).jpg'

const Buisnesslab = () => {

let mediaGroups = [
  {
    imge:md1
  },
  {
    imge:md2
  },
  {
    imge:md3
  },
  {
    imge:md4
  }
]


    let lear = `§   Teachers integrate ICT into learning, and reporting in ways that transform learning into more interactive and engaging environments for students.\n

    §   The launch of EDUSAT has helped in providing quality instruction through video programs to students.\n
    
    §   The students have benefited from the video programs delivered through the Satellite. The benefit gained is in terms of gain in knowledge and understanding of the content, improvement in attendance and holding attention and interest in viewing programs.\n
    
    §   The teacher involvement during the broadcast as facilitator and conduct of Pre and Post broadcast activity is noteworthy.\n`


    return (
        <BuisnessWrap className="container py-5">
{/* <img src="https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/ICT1.jpg" width="100%" alt="hkg"/> */}
<Text className="mt-2" text="Information and Communications Technologies (ICT) supports CBBJC to reach strategic goals in both education and research and to enhance the student experience."/>
<Heading className="mt-3" fontsize="24px" title="Learning & Teaching"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>

<Text text={lear}/>

<Heading className="mt-3" fontsize="24px" title="Learning Spaces"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>


<Text text="Learning spaces integrate flexible physical spaces and interactive online spaces to provide continual seamless links to resources, local communities and global communities."/>


<Heading className="mt-3" fontsize="24px" title="ICT Infrastructure"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>

<Text text="Reliable ICT infrastructure and technical support provides highly accessible and efficient use of ICT for learning, teaching and administration."/>

<Heading className="mt-3" fontsize="24px" title="Administration"/>
<Text text="The college uses ICT for the efficient and effective delivery of all business processes"/>

<Heading className="mt-3" fontsize="24px" title="Administration"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>

<Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Number of nodes/ computers with Internet facility – 39</ListGroup.Item>
    <ListGroup.Item>Computer-student ratio – 1:8</ListGroup.Item>
    <ListGroup.Item>Stand-alone facility– 07 systems</ListGroup.Item>

    <ListGroup.Item>LAN facility – Yes available (Computer Lab, Library, Office)</ListGroup.Item>
    <ListGroup.Item>Wifi facility– Yes available (Entire Campus)</ListGroup.Item>

    <ListGroup.Item>Licensed software– Tally, SQL ,K7, Ms office, Windows XP</ListGroup.Item>
    <ListGroup.Item>Stand-alone facility– 07 systems</ListGroup.Item>

    <ListGroup.Item>Licensed software– Tally, SQL ,K7, Ms office, Windows XP</ListGroup.Item>
    <ListGroup.Item>Any other– 4 Printers, 2 Printer cum Scanner, 5 Laptop, 6 LCD Projector, 1 OHP, 9 Routers [6 BSNL, 1 AIRTEL, 2 ACT], 3 Standalone UPS.</ListGroup.Item>
  </ListGroup>
</Card>

<Heading className="mt-3" fontsize="24px" title="CBBJC Media Room"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>

<div className="container media my-sm-4">
<div className="row">
  {

mediaGroups.map(item=>{

  return <div className="col-sm-6 p-2">

<img src={item.imge} alt="medi"  width="100%"/>

  </div>
})

  }
  </div>
</div>

{/* <iframe src={pdfict} width="100%" height="800px">
  <p>Your browser does not support iframes.</p>
</iframe> */}
        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`
.media{

  img {

    height:370px;
  }
}

@media(max-width:960px){
.media{

  img {

    height:230px;
  }
}

  
}

`
export default Buisnesslab;