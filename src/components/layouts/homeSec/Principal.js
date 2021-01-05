import React from 'react';
import {Heading, Devider, Text, Images} from '../../utils/heading'
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import priciImage from '../../../images/layouts/home/principal-image.png'

const Principals = () => {

    let content1 = ` We recognize the fact that choosing an institution goes a long way in shaping one’s career. Today students are faced with a bewildering choice about the reputation of the institution, its location, the team of faculty, and availability of infrastructure. I hope this message makes the decision easier.
    CBBJC aims at providing a distinctive combination of academic excellence and professional relevance. The thrust is on the thorough practical understanding of required knowledge along with all-round personality development. The students have a wide choice in specializing in the areas of their interest. The faculty at CBBJC includes experienced staff members who mould students to a high degree of competence & groom them as confident & empowered individuals.
    I take pride in inviting you to this institution which provides a platform to gain insight into the world of Science, Commerce and 
    Management. An investment in CBBJC institution will ensure a successful & meaningful career.
    Wish you all the very best.`

  
    return (
        <PrinciWrap className="container-fluid p-sm-5 shadow">

<Parallax className="principaralax" x={[-20, 20]} y={[-0, 0]}   tagOuter="div">

<div className="pcontent py-4 shadow">


<Heading title="Principal's Message" align="center" className="text-white pl-sm-5 ml-sm-5 phead" />
<Devider width="10%" className="text-danger " margin="0 49%"/>


            </div>

</Parallax>

           

            <div className="container py-4 my-4">
                <div className="row">
                    <div className="col-sm-8 pt-4">
                    <Text text={content1} className=" princicontent text-white"/>

                    </div>
                    <div className="col-sm-4">
                    <Images className="pt-3" src={priciImage}/>


                    </div>
                   
                </div>
            </div>
            



        </PrinciWrap>
    );
};

const PrinciWrap = styled.div`

position:relative;
background-color:#10242b;

.principaralax{

    transition:10s;
}
.pcontent{

   position:absolute;
   margin-top:-4.5%;
    width:80%;
    background-color:var(--BrandColor);
    clip-path: polygon(0% 1%, 89% 0, 100% 100%, 0% 100%);
    left:-30%;

.phead{

    margin-left:5% !important;
}
}

.princicontent{
    font-size:16px;
    line-height:1.8;
}
@media(max-width:1600px){

.pcontent{
    margin-top:-5.5%;
}


}



@media(max-width:960px){
overflow:hidden !important;

    .pcontent{

position:absolute;
 background-color:#0073AD;
 clip-path: polygon(0% 1%, 89% 0, 100% 100%, 0% 100%);
 left:-20%;
 top:0px;
 width:100%;

    }

    .phead{
        margin-left:10% ;

        font-size:1.2rem;
    }

    .princicontent{

        font-size:14px;



    }


}


`
export default Principals;