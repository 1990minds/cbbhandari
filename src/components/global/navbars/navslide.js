import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img1 from '../../../images/culture/cul (2).jpg'
import img2 from '../../../images/culture/cul (3).jpg'


const NavCarsouls = (props) => {
    return (
        <CarsoulWrap>
<Carousel controls={false}  indicators={false} style={{width:"100%"}}>

  <Carousel.Item>
    <img
      className="d-block rounded w-100"
      src={img1}
      alt="Third slide"
          

    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded w-100"
      src={img2}
      alt="Third slide"
  />

 
  </Carousel.Item>
  
</Carousel>

        </CarsoulWrap>
    );
};

const CarsoulWrap = styled.div`



height:100%;
overflow:hidden;




@media(max-width:960px){

  display:none;

}


`
export default NavCarsouls;