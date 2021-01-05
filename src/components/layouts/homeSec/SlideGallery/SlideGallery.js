import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img from 'react-image';
import styled from 'styled-components'
import recent1 from '../../../../images/Recent Events/recentevent (1).jpg'
import recent2 from '../../../../images/Recent Events/recentevent (2).jpg'
import recent3 from '../../../../images/Recent Events/recentevent (3).jpg'
import recent4 from '../../../../images/Recent Events/recentevent (4).jpg'
import recent5 from '../../../../images/Recent Events/recentevent (5).jpg'
import recent6 from '../../../../images/Recent Events/recentevent (6).jpg'
import recent7 from '../../../../images/Recent Events/recentevent (7).jpg'
import recent8 from '../../../../images/Recent Events/recentevent (8).jpg'
import recent10 from '../../../../images/Recent Events/recentevent (10).jpg'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <SliderWrap>
        <Slider {...settings}>
        <div className="">
          <Img width="100%" height="300px" src={recent1} />
         
          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent2} />
         
          </div>


          <div className="">
            <Img width="100%" height="300px" src={recent3} />

          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent4} />

          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent5} />

          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent6} />

          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent7} />

          </div>
          <div className="">
          <Img width="100%" height="300px" src={recent8} />

          </div>
        
          <div className="">
          <Img  width="100%" height="300px" src={recent10} />

          </div>
        </Slider>
      </SliderWrap>
    );
  }
}

const SliderWrap = styled.div`

background-color:#233863;

`