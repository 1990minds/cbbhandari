import React from 'react';
import Gallery from 'react-grid-gallery';
import {Heading, Text} from '../../utils/heading';
import styled from 'styled-components'
import Interweave from 'interweave';
import ach1 from '../../../images/layouts/achievements/ach1.jpg'
import ach2 from '../../../images/layouts/achievements/ach2.jpg'
import ach3 from '../../../images/layouts/achievements/ach3.jpg'
import ach4 from '../../../images/layouts/achievements/ach4.jpg'
import ach5 from '../../../images/layouts/achievements/ach5.jpg'



const Achievements = () => {

let achieve = `<b>Pinki Kumari</b> who bagged the KP Rao Gold Medal for the highest marks in Income Tax, B.Com., Examination 2014.<br/>
Rank holders for the year 2011 were Samatha Jain M (8th Rank) & Heena Jain (9th Rank)<br/>
<b>Sri Raksha</b> was awarded the  7th rank in B.Com. for the year 2013<br/>
<b>Varsha Bohara</b> has bagged the 7th rank in The year 2014.<br/>
<b>Annapurna S</b>  has secured 10th Rank in the 
year 2017 <br/>`
    let IMAGESAchieve =
    [{
            src: `${ach2}`,
            thumbnail:`${ach2}`,
            thumbnailWidth: 400,
            thumbnailHeight: 430,
    },
    {
            src: `${ach3}`,
            thumbnail:`${ach3}`,
            thumbnailWidth: 400,
            thumbnailHeight: 430,
    },
    {
            src: `${ach4}`,
            thumbnail:`${ach4}`,
            thumbnailWidth: 400,
            thumbnailHeight: 430,
    }
 
    ]
    return (
        <AWrap className="container py-5" >

                      <div className="row py-5 ">

                          <div className="col-sm-12">
            <Heading className="ahead" title="Bangalore University Rank Holders and Gold Medalist"/>
            <hr/>
            <Text text={<Interweave content={achieve} />}/>    

                          </div>
                          <div className="col-sm-6 p-sm-3">

                    <img className="rounded shadow" src={ach5} width="100%" alt="imagesss"/>

                          </div>
                          <div className="col-sm-6 p-sm-3">

                       <img className="rounded shadow" src={ach1} width="100%" alt="imagesss"/>



                          </div>
                      </div>

                      <Gallery images={IMAGESAchieve} rowHeight={430}/> 
<div>....</div>
 
        </AWrap>
    );
};

const AWrap = styled.div`

.ahead{

    font-family:var(--HeadFont2);
    font-size:25px;
}


`
export default Achievements;