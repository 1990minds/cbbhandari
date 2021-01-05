import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
// import {Heading, Text, Images, Devider} from '../../utils/heading';
import g1 from '../../../images/layouts/gym/gym1.jpg'
import g2 from '../../../images/layouts/gym/gym2.jpg'
// import g3 from '../../../images/layouts/gym/gym3.jpg'

const GymP = () => {


    let IMAGESGym =
    [{
            src: `${g1}`,
            thumbnail:`${g1}`,
            thumbnailWidth: 300,
            thumbnailHeight: 350,
    },
    {
            src: `${g2}`,
            thumbnail: `${g2}`,
            thumbnailWidth: 300,
            thumbnailHeight: 350,
     },
    // {
    //         src: `${g3}`,
    //         thumbnail:`${g3}`,
    //         thumbnailWidth: 440,
    //         thumbnailHeight: 350,
    // }
 
    ]


    return (
        <BuisnessWrap className="container py-5">


<Gallery images={IMAGESGym} rowHeight={700}/> 

<div>..</div>
        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default GymP;