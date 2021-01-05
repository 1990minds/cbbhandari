import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import {Heading } from '../../utils/heading'
import cafe1 from '../../../images/facility/fac (5).jpg'
import cafe2 from '../../../images/facility/fac (6).jpg'


const Cafeteria = () => {


    let ImagesCafiteria =
    [{
            src: `${cafe2}`,
            thumbnail: `${cafe2}`,
            thumbnailHeight: 350,
    },
    {
        src: `${cafe1}`,
        thumbnail: `${cafe1}`,
        thumbnailHeight: 350,
}
    ]


    return (
        <BuisnessWrap className="container py-5" height="600px" style={{overflow:'hidden'}}>

<Heading fontsize="18px" className="my-4" title="cafeteria is available and open during College hours. Equipped with all the necessary kitchen facilities, it serves lunch, snacks and soft drinks to students and staff."/>
<Gallery images={ImagesCafiteria} rowHeight={350}/> 




        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default Cafeteria;