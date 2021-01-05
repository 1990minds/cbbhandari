import React from 'react';
import styled from 'styled-components'
import Gallery from 'react-grid-gallery';
 import { Text} from '../../utils/heading'
import bus1 from '../../../images/layouts/infrastructure/buisnesslab1.jpg'
import bus2 from '../../../images/layouts/infrastructure/buisnesslab2.jpg'


const Buisnesslab = () => {


    let IMAGESBusinesLab =
    [{
            src: `${bus1}`,
            thumbnail:`${bus1}`,
            thumbnailHeight: 350,
    },
    {
            src: `${bus2}`,
            thumbnail: `${bus2}`,
            thumbnailHeight: 350,
    }
 
    ]


    return (
        <BuisnessWrap className="container py-5" height="600px" style={{overflow:'hidden'}}>
<Text text="The Commerce and Management departments of CBBJC College has business lab. The idea behind the business lab is to inculcate knowledge and need-based work skills so that the graduates of the college find themselves prepared for employment and self-employment avenues as and when required. In order to accomplish this task we have incorporated practical aspects of the subject so the students may involve in experiential learning which is vital in present business world."/>
<Gallery images={IMAGESBusinesLab} rowHeight={350}/> 




        </BuisnessWrap>
    );
};

const BuisnessWrap = styled.div`


`
export default Buisnesslab;