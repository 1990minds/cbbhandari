import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import sunion1 from '../../../../images/actvity 2019-20/act-cultural_cummity_2019-20.jpg';
import sunion2 from '../../../../images/actvity 2019-20/rotract.jpg';

import {Heading, Text} from '../../../utils/heading'
import Gallery from "react-photo-gallery";
import rt1 from '../../../../images/layouts/Studentsupport/std-union/Rotractclub/rtimg1.jpg'
import rt2 from '../../../../images/layouts/Studentsupport/std-union/Rotractclub/rtimg2.jpg'
import rt3 from '../../../../images/Investiture ceremony_1.jpg'
import rt4 from '../../../../images/layouts/Studentsupport/std-union/Rotractclub/rtimg4.jpg'
import rt5 from '../../../../images/layouts/Studentsupport/std-union/Rotractclub/rtimg5.jpg'


import y1 from '../../../../images/actvity 2019-20/yuth-seva.jpg'
import y2 from '../../../../images/layouts/Studentsupport/std-union/youthseva/y2.jpg'
import yi1 from '../../../../images/layouts/Studentsupport/std-union/youthseva/yimg1.jpg'
import yi2 from '../../../../images/layouts/Studentsupport/std-union/youthseva/yimg2.jpg'


import ictu1 from '../../../../images/layouts/Gallery/IC/ic (1).jpg'
import ictu2 from '../../../../images/layouts/Gallery/IC/ic (2).jpg'
import ictu3 from '../../../../images/layouts/Gallery/IC/ic (3).jpg'
import ictu4 from '../../../../images/layouts/Gallery/IC/ic (4).jpg'

import rtn1 from '../../../../images/layouts/Gallery/RT/rt (1).jpg'
import rtn2 from '../../../../images/layouts/Gallery/RT/rt (2).jpg'
import rtn3 from '../../../../images/layouts/Gallery/RT/rt (3).jpg'
import rtn4 from '../../../../images/layouts/Gallery/RT/rt (4).jpg'


import Tablemanagement from '../../../global/tables/table'
import {culcomitte, rotractclub, youth} from '../../../global/tables/tabledata'





const UnionSec1 = () => {



console.log(culcomitte);


    let stdculunimages = [

        {
            original:` ${ictu1}`,
            thumbnail: ` ${ictu1}`,
            originalClass:"imgclass",
            description:" ",
           
            height:"400px",
    
          },
        {
          original:` ${ictu2}`,
          thumbnail: ` ${ictu2}`,
          originalClass:"imgclass",
          description:" ",
          height:"400px",

        },
        {
          original: ` ${ictu3}`,
          thumbnail: ` ${ictu3}`,
          originalClass:"imgclass",
          description:"",
          height:"400px",

  
  
        },
        {
          original:` ${ictu4}`,
          thumbnail: ` ${ictu4}`,
          originalClass:"imgclass",
          description:"",
          height:"400px",

  
  
        }]



        let rotaractclubimages = [

            {
                original: `${rtn1}`,
                thumbnail: `${rtn1}`,
                originalClass:"imgclass",
                description:"Rotaract Club ",
                height:"400px",

        
              },
            {
              original: `${rtn2}`,
              thumbnail: `${rtn2}`,
              originalClass:"imgclass",
              description:"Rotaract Club ",
              height:"400px",
      
            },
            {
              original: `${rtn3}`,
              thumbnail: `${rtn3}`,
              originalClass:"imgclass",
              description:"Rotaract Club ",
              height:"400px",
      
      
            },
            {
              original: `${rtn4}`,
              thumbnail: `${rtn4}`,
              originalClass:"imgclass",
              description:"Rotaract Club",
              height:"400px",
      
      
            }]



              let photos = [
                {
                  src: `${rt5}`,
                  width: 4,
                  height: 3
                },
                {
                  src: `${rt3}`,
                  width: 4,
                  height: 2
                },
                {
                  src: `${rt2}`,
                  width: 4,
                  height: 3
                },
                {
                  src: `${rt4}`,
                  width: 1,
                  height: 1
                },
                {
                  src:`${rt1}`,
                  width: 4,
                  height: 3
                }]


    return (
        <div className="container my-5">


            <Heading title="Students Cultural Unions"/>
            <hr/>
<Text text="The College believes in all round development of personality of the students as goal of education. It aims to provide rich cultural experiences and innovative technical taste so that student appreciates the multi cutural diversity of the society."/>
            <div className="row">
                <div className="col-sm-6 mt-sm-2 pt-sm-3">
                <ImageGallery items={stdculunimages}  autoPlay={true} />


                </div>
                <div className="col-sm-6 py-3">

                <Tablemanagement data={culcomitte} title="Activities of the Cultural Committee during 2019-20 "/>


                </div>
            </div>

            <div className="row py-3 mt-4">

            <Heading title="Rotaract Club"/>
            <hr/>
            <Text text="The Rotaract Club organizes meetings to imbibe Social value in students, The Club also imparts leadership training programs and organizes extension activities throughout the year."/>

                <div className="col-sm-6 mt-sm-2">
                <Tablemanagement data={rotractclub} title="Activities of the Rotaract Club during 2019-20 "/>


                </div>
                <div className="col-sm-6 mt-sm-2">

                <ImageGallery height="400px" items={rotaractclubimages} autoPlay={true} />


                </div>
                <div className="col-sm-12">


                    <Text className="py-4" text="CBB zeal rotaract club was installed on 15/02/18 and two interact clubs of schools were approved.The chief guest for the event was  Asha Prasana Kumar District Governor of Rotary district 3190."/>

                <Gallery photos={photos} />;


                </div>
            </div>

            <div className="row py-3 mt-4">

                <div className="col-sm-12">

                            <Heading title="Youth for Seva"/>
                            <Text text='Youth for Seva (Volunteer Organization to serve the society)'/>

                            <hr/>


                            <p><b>Youth For Seva started under HSP as a project and eventually in 2011 got independent.</b></p>
                            <Text text='There is a growing desire among the youth in India to volunteer their time and talent for community development. But most of them are not currently involved in volunteering work because of three major reasons:'/>

                            <ul>
                                <li>Not knowing where to start.</li>
                                <li>The fear that it may be too much of a responsibility.</li>
                                <li>Concern that it cannot be done within the limited time available to them.</li>
                            </ul>

                            <Text text='“Youth for Seva” (YFS) was formed in April 2007 to fill this gap so that youth with an intention to volunteer and with different time commitments can easily find meaningful opportunities to serve the community.

The mission of YFS is to inspire youth to volunteer, connect them to the grass roots projects, and provide ongoing support and training to the volunteers and the NGOs.'/>

</div>

<div className="col-sm-6 mt-sm-4">

<img src={yi1} alt="sdsd" width="70%" />


</div>
<div className="col-sm-6 mt-sm-4">

<Tablemanagement data={youth} title="Activities of the youth for seva during 2019-20 "/>

</div>


<div className="col-sm-6">

<img src={yi2} alt="sdsd" width="70%" />


</div>
<div className="col-sm-6">



</div>


</div>
            
        </div>
    );
};

export default UnionSec1;
