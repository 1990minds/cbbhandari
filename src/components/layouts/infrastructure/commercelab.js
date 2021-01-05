import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import {Heading} from '../../utils/heading';

import com1 from '../../../images/layouts/infrastructure/comlab1.jpg'
import com2 from '../../../images/layouts/infrastructure/comlab2.jpg'
import com3 from '../../../images/layouts/infrastructure/comlab3.jpg'
import com4 from '../../../images/layouts/infrastructure/comlab4.jpg'



const Commercelab = () => {


    let IMAGESCommercelab =
    [{
            src:`${com1}`,
            thumbnail: `${com1}`,
            thumbnailWidth: 340,
            thumbnailHeight: 250,
    },
    {
            src: `${com2}`,
            thumbnail: `${com2}`,
            thumbnailWidth: 340,
            thumbnailHeight: 250,
    },
    {
            src: `${com3}`,
            thumbnail: `${com3}`,
            thumbnailWidth: 340,
            thumbnailHeight: 250,
    },
    {
            src:`${com4}`,
            thumbnail: `${com4}`,
            thumbnailWidth: 340,
            thumbnailHeight: 250,
    }
 
    ]


    return (
        <CommercelabWrap className="container py-5 h-100" height="600px">

<Heading fontsize="20px" className="py-3 text-center ch" title="A dedicated commerce lab for the students has been initiated at the college. It provides a practical exposure of the processes & procedure followed by the organization in conducting commercial practices."/>
<Gallery images={IMAGESCommercelab} rowHeight={250}/> 

<div>.</div>
<div>.</div>



        </CommercelabWrap>
    );
};

const CommercelabWrap = styled.div`


`
export default Commercelab;