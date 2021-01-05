import React, { Component } from 'react';
import styled from 'styled-components'
import img from '../../../images/2.jpg';
import imgh from '../../../images/line.svg'
import { Parallax } from 'react-scroll-parallax';
import Carsoul from './carsoul'
import Fade from 'react-reveal/Fade';
// import home1 from '../../../images/1home.png';
import Form from '../../global/footerform'

class Homeslidelayout extends Component {
    render() {
        return (

            <Fade delay={600} duration={800}>
            <HomeLayout className="container-fluid  py-sm-5" style={{backgroundImage:`url(${img})`}}>
<div className="backtext">
<h1>ACADEMICS</h1>

</div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-5  ">
                        {/* <img className="rounded   "  src={home1} id="img1" alt="adad"/> */}
                        <div className="hform">
                            <h2 className="text-white mb-sm-5">ENQUIRY FORM</h2>
                        <Form display="block"/>
                        </div>

                        </div>
                        <div className="col-sm-7 cols2 ">

                            <Carsoul/>
                        {/* <img className="rounded shadow  w-110 mt-5"  src="https://assets.biola.edu/4396738754672012438/attachment/599bbabd75b06103948eaada/academics_undergrad-hero2-42741619496-web.jpg" id="img2" alt="adad"/> */}

<div className="homecontent  p-sm-2">
<h2 className="text-white  w-50"><span className="text-danger">CB </span>Bhandari Jain College</h2>
<Parallax className="principaralax" x={[10, -10]} y={[-0, 0]}   tagOuter="div">

<div className="tex shadow rounded p-4 bg-danger text-dark">
<h6 className="text-white"> “Empowering the nation by educating the 
youth.”</h6>


<img src={imgh} style={{opacity:"0.2"}} alt="dfdf" />
</div>
</Parallax>

</div>


                        </div>




                    </div>
                </div>
                
            </HomeLayout>
            </Fade>
        );
    }
}

const HomeLayout = styled.div`

overflow:hidden;
background-attachment:fixed;
height:95vh;
background-size:100%;

.hform {
    margin-top: 50px;
    padding: 50px;

    h2{
        font-family:var(--HeadFont);
    }
}

#img1{

    width:105%;
}
.cols2{

position: relative;

.homecontent{

position:absolute;
top:55%;
left:26%;
transform:translate(-50%, -50%);
width:60%;

.text-p{

    font-family:var(--HeadFont);
    font-size:16px;
}

h2{

    font-family:var(--HeadFont2);
    font-size:3.5rem;
    z-index:22 !important;
    background: linear-gradient(90deg, rgba(32,32,32,0) 19%, rgba(24,24,24,0.3617822128851541) 20%);


    span{

         font-size:5rem;
            font-weight:bold;

   
    }
}

}

}




 .backtext{

    transform:rotate(-90deg) translate(-70px, -400px);
    width:50%;
    height:30%;

   position:absolute;
    
    color:lightskyblue;
    opacity:0.1;
    h1{
        font-size:7rem;
        text-align:left;
        font-weight:bolder;
    }
}


@media (max-width:1600px){
    height:110vh;
    padding-bottom:100px;
    #img1{

width:85%;
}
    .backtext{

transform:rotate(-90deg) translate(-170px, -290px);


}

}

@media (max-width:960px){
.cols2{

    display:none;
}
    .hform {
    margin-top: 20px;
    padding: 0px;
}

    height:80vh;

/* #img1{

    width:85%;
} */

    .homecontent{

/* position:absolute;
top:50%;
left:6%;
transform: translate(-40%,-120%) !important;
-webkit-transform: translate(-40%,-120%) !important; */
/* width:60%; */


.tex{

    width:300px !important;
}

h2{

    font-size:2.7rem !important;

    span{

font-size:4rem !important;



}

}

    }

}



`
export default Homeslidelayout;