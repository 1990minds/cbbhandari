import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import {Text} from '../../utils/heading'
import c1 from '../../../images/layouts/conferencehall/semihall2.jpg'
import c2 from '../../../images/layouts/conferencehall/semihall3.jpg'
import c3 from '../../../images/layouts/conferencehall/semihall4.jpg'


const Buisnesslab = () => {

        let conferencehall = `The Conference hall in the college is equipped with the latest Audio and Visual equipment for the conduct of Presentations, Seminars and personality development workshops. It is fully air conditioned, and fully equipped with state-of-the-art audio-visual devices providing services such as video conferencing, a sound system and audio-visual material. Centralized Air Conditioning, Electrical & LAN connections for laptops. Wi-Fi connectivity.`

    let IMAGESColabration =
    [{
            src: `${c1}`,
            thumbnail: `${c1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${c2}`,
            thumbnail: `${c2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${c3}`,
            thumbnail:`${c3}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]


    return (
        <BuisnessWrap className="container py-5">

<Text className="my-sm-5 my-2" text={conferencehall}/>
<Gallery images={IMAGESColabration} rowHeight={350}/> 
<div>...</div>


        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default Buisnesslab;