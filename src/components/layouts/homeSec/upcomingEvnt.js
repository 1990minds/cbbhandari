import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';
import {Heading } from '../../utils/heading'
import Line from '../../../images/hat copy1.svg'
import Eimg1 from '../../../images/Recent Events/recentevent (7).jpg'
import Eimg2 from '../../../images/Recent Events/recentevent (4).jpg'
import Eimg3 from '../../../images/Recent Events/recentevent (1).jpg'


class upcomingEvnt extends Component {

state = {

    upevents:[{

        id:1,
        date:" National Conference 2019",
        image:`${Eimg1}`,
    
        title:"",
        info:"",

    },{

        id:2,
        date:"Placement Cell 2019",
        image:`${Eimg2}`,
    
        title:"",
        info:"",
    },{


        id:3,
        date:"Well Women Cell 2019",
        image:`${Eimg3}`,
    
        title:"",
        info:"",
    }]
}


    render() {

return(<>

<div className="container py-5">
<Heading title="  Events & Information " align="center"/>
<img  src={Line} width="25%" className="pb-4" style={{opacity:0.8, display:"block", margin:"auto"}} height="7%"/>
    <div className="row">

{
    this.state.upevents.map(item =>{

        return (
            <div className="col-sm-4 mt-3">
            <Card className="shadow" style={{ width: '100%' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.date}</Card.Title>
    <Card.Text>
    {item.title}
    </Card.Text>
  </Card.Body>
</Card>
</div>
        );
    })
}

       
    </div>
</div>




</>)
      
      
    }
}

export default upcomingEvnt;