import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img1 from '../../../images/culture/cul (1).jpg'
import img3 from '../../../images/facility/fac (4).jpg'

import img2 from '../../../images/Recent Events/recentevent (5).jpg'
import img4 from '../../../images/culture/cul (3).jpg'
import img5 from '../../../images/gym/IMG_0183.jpg'
import img0 from '../../../images/layouts/home/Untitled-4-02 (3).jpg'

const Carsouls = (props) => {
    return (
        <CarsoulWrap>
<Carousel controls={false}  indicators={false} style={{width:"100%"}}>

<Carousel.Item>
    <img
      className="d-block w-100 s"
      src={img0}
      alt="Third slide"
          

    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 s"
      src={img1}
      alt="Third slide"
          

    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 s"
      src={img2}
      alt="Third slide"
               

    />

 
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 s"
      src={img3}
      alt="Third slide"
               


      
    />

 
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 s"
      src={img4}
      alt="Third slide"
               


      
    />

 
  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block s"
      src={img5}
      alt="Third slide"
               


      
    />

 
  </Carousel.Item>
  
</Carousel>

        </CarsoulWrap>
    );
};

const CarsoulWrap = styled.div`


opacity:0.5;
.s{

  height:450px;
}

.active{

  z-index:0  !important;

}
margin-top:70px;
height:100%;
overflow:hidden;




img{

    width:100%;
    /* height:400px; */



}

@media(max-width:960px){

  display:none;

}


`
export default Carsouls;