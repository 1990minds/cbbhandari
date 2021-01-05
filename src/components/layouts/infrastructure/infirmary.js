import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
import {Heading} from '../../utils/heading'
import inf1 from '../../../images/layouts/infrastructure/infirmary.jpg'


const Infirmary = () => {


    let IMAGESColabration =
    [{
            src: `${inf1}`,
            thumbnail: `${inf1}`,
            thumbnailWidth: 540,
            thumbnailHeight: 350,
    }
 
    ]


    return (
        <BuisnessWrap className="container py-5">

<Heading fontsize="20px" className="py-2" title='The infirmary is equipped with a first – aid kit, cots and basic materials to attend to the sick and injured. In-house /on-call doctor nurses the sick or injured and advise further treatment.'/>
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
<br/>

<div>...</div>
        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default Infirmary;