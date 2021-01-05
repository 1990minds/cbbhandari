import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
// import {Heading, Text, Images, Devider} from '../../utils/heading'
import a1 from '../../../images/Recent Events/recentevent (13).jpg'
import a2 from '../../../images/Recent Events/auditorium.jpg'
import a3 from '../../../images/Recent Events/recentevent (14).jpg'
// import a4 from '../../../images/layouts/Auditorium/audi4.jpg'


const Aditorium = () => {


    let IMAGESColabration =
    [{
            src: `${a1}`,
            thumbnail: `${a1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${a2}`,
            thumbnail: `${a2}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    },
    {
            src: `${a3}`,
            thumbnail: `${a3}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
    // ,
    // {
    //         src: `${a4}`,
    //         thumbnail: `${a4}`,
    //         thumbnailWidth: 540,
    //         thumbnailHeight: 350,
    // }
 
    ]


    return (
        <AditoriumWrap className="container py-5">


<Gallery images={IMAGESColabration} rowHeight={350}/> 
<div>...</div>

        </AditoriumWrap>
    );
};

const AditoriumWrap = styled.div`


`
export default Aditorium;
