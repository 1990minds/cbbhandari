import React from 'react';
import {Heading,  Text} from '../../utils/heading'
import styled from 'styled-components';
import Line from '../../../images/line.svg';
// import Pcard from './Pcoursecard'
import Interweave from 'interweave';

import Loadable from 'react-loadable';



const LoadablePCardComponent = Loadable({
    loader: () => import('./Pcoursecard'),
    loading: 'Loading...',
  });

const Pinfo = () => {

    let Pinfocontent = `This Program is affiliated to Bengaluru Central University. Preparation for a career in Finance and Accounting requires a broad–based, Balanced liberal education. M.com program prepares students for post- graduate study in Finance, Accounting, Marketing, Banking and other related fields. At CBBJC the academic Programs combine the best in academic theory with practical, real-life projects so that the students not only get an outstanding learning experience, but can apply their knowledge to solving business / financial problems of the future.<br/>
    <br/>
    <b>Requirements for the Admission:</b><br/>
 
    
    
    Students seeking admission to the M.Com program should have passed Bachelor Degree Examination of any recognized education body having secured 50% (for Sc/St/Cat 1 : 45%) of marks in aggregate in Commerce or Management.`
    return (
        <DegreeinfoWrap className="container my-5">

            <Heading className="dinfo py-3 pr-3" title="Post Graduate	"/><span>  <img src={Line} alt="dev" width="50%"/></span>
            <Text className="dtext" text={<Interweave content={Pinfocontent} />}/>
            <LoadablePCardComponent/>
        </DegreeinfoWrap>
    );
};

const DegreeinfoWrap = styled.div`

.dinfo{

    display:inline-block;
    font-family:var(--HeadFont2);
}

img{

    opacity:0.5;
}

.dtext{

    
}

`
export default Pinfo;