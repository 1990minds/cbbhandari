import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import {Text} from '../../utils/heading'
import s1 from '../../../images/layouts/seminarhall/semihall1.jpg'


const Buisnesslab = () => {

    let seminarhall = `The seminar hall in the college is equipped with the latest Audio and Visual equipment for the conduct of Presentations, Seminars and personality development workshops. It is fully air conditioned, and fully equipped with state-of-the-art audio-visual devices providing services such as video conferencing, a sound system and audio-visual material. Centralized Air Conditioning, Electrical & LAN connections for laptops. Wi-Fi connectivity.`

    let IMAGESColabration =
    [{
            src: `${s1}`,
            thumbnail: `${s1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]


    return (
        <BuisnessWrap className="container py-5">

<Text className="my-sm-5 my-2" text={seminarhall}/>
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
<br/>






        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default Buisnesslab;