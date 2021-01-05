import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

export default class SimpleSlider extends Component {





  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    
      autoplaySpeed: 4000,
      fade:true
    };
    return (
      <TestiWrap>

        <Slider {...settings}>


        <div className="containers ">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:'90px'}}/>
  
  <p className="text-white">Pooja Chopda</p> 
  <span className="text-secondary">BCOM Student</span>

  <p>  The College has excellent infrastructure 
and experienced teachers. Curriculum is 
enriched with a value added courses.  
</p>
</div>



        <div className="containers " >
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:'90px'}}/>
 
  <p className="text-white">Namitha H D</p>
  <span className="text-secondary"> BCOM Student</span>

  <p>College is centrally located with Metro 
Station and bus facilities within 200 mts. 
Teaching and discipline is very good. </p>
</div>

<div className="containers ">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:'90px'}}/>
  <p>Khushboo Surana</p>
  <span className="text-secondary">BCOM Student</span>

  <p>College has well equipped teaching aids 
and experienced faculty. Clean and 
excellent infrastructure sets the college 
apart.  </p>
</div>

<div className="containers ">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:'90px'}}/>
  <p>Pinky Jain</p>
  <span className="text-secondary">BBA Student</span>

  <p>Excellent teaching, encouragement for 
co-curricular activities helps the students to 
develop their personality.  </p>
</div>


<div className="containers ">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:'90px'}}/>
  <p>Komal Rajpurohith</p>
  <span className="text-secondary">PUC</span>

  <p>Centrally located with excellent teaching 
and infrastructure, sets this college apart 
heart a lot of life skills too during my stay in 
this college.   </p>
</div>

        </Slider>
      </TestiWrap>
    );
  }
}

const TestiWrap = styled.div`
/* background-blend-mode:multiply; */
background-color:var(--AccentColor2);

background-size:cover;
background-position:bottom;
background-attachment:fixed;
width:100%;
margin:0px auto 0px auto;
height:300px;



overflow:hidden;
.containers {
  background-image:url("https://livedemo00.template-help.com/wt_prod-16603/learner/images/pattern.png");
  background-attachment:fixed;
width:100%;
height:300px;
margin-top:50px;
  color:grey;
  border-radius: 2px;
  padding: 16px;
  display:block !important;
  margin: 0px auto;
  text-align:center;
  
}

hr{
  display:block;
  border:none;
  height:2px;
  background-color:white;
  margin:auto;
  margin-bottom:30px;
  
}

p{

  color:white;
  font-size:20px;
opacity:0.8;
  width:60%;
  margin:auto;



}



.containers img {
  border-radius: 50%;
  display:block;
  margin:auto;
}

.containers span {
  font-size: 14px;
  text-align:center;
}

@media (max-width: 960px) {
  .containers {
      text-align: center;
  }
  p{

color:white;
font-size:14px;
opacity:0.8;
width:60%;
margin:auto;



}
  .containers img {
      margin: auto;
      float: none;
      display: block;
  }
}

`