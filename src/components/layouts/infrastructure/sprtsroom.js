import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import { Text, Heading} from '../../utils/heading'
import sp1 from '../../../images/layouts/sportsroom/sports1.jpg'
import sp2 from '../../../images/facility/fac (3).jpg'


import cl1 from '../../../images/facility/fac (4).jpg'
import cl2 from '../../../images/facility/fac (7).jpg'


import ad1 from '../../../images/facility/fac (2).jpg'
import ad2 from '../../../images/facility/fac (1).jpg'



const SportsRoom = () => {
let classtext = `Teaching takes place in modern and properly equipped classrooms. Classrooms are equipped with a computer that provides access to the internet, a video projector, an overhead projector, speakers, an electric projection screen, whiteboards and air conditioning units for cool and warm air.`
let sporttext = `CBBJC gives equal importance to physical education in order to develop a sound body for a sound mind. The students are trained by qualified physical coach. The activities includes selection of teams, practice session for selected teams, encouraging them to participate in indoor and outdoor games and conduct of annual sports meet.`
let roomstxt = `The administration and faculty offices are well equipped with modern equipment such as voice over IP telephony equipment, computers, printers, scanners, photocopy machines and fax machines.` 


let IMAGESColabration =
    [{
            src: `${sp1}`,
            thumbnail: `${sp1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${sp2}`,
            thumbnail: `${sp2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]


    let IMAGESColabrationcl =
    [{
            src: `${cl1}`,
            thumbnail: `${cl1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${cl2}`,
            thumbnail: `${cl2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]

    let IMAGESColabrationad =
    [{
            src: `${ad1}`,
            thumbnail: `${ad1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${ad2}`,
            thumbnail: `${ad2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]


    return (
        <SportsRoomWrap className="container py-5">
<Heading title="Sports Rooms"/>

<Text className="mb-5" text={sporttext}/>
<Gallery images={IMAGESColabration} rowHeight={350}/> 
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div>....</div>

<Heading className="mt-sm-4 mt-2" title="Class Rooms"/>
<Text className="mb-sm-5 mb-2" text={classtext}/>
<Gallery images={IMAGESColabrationcl} rowHeight={350}/> 
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div>....</div>

<Heading className="mt-4" title="Administration and Staff rooms"/>
<Text className="mb-sm-5 mb-2" text={roomstxt}/>
<Gallery images={IMAGESColabrationad} rowHeight={350}/> 
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div>....</div>

        </SportsRoomWrap>
    );
};

const SportsRoomWrap = styled.div`


`
export default SportsRoom;