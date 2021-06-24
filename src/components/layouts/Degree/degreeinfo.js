import React from 'react';
import {Heading, Images, Text } from '../../utils/heading'
import styled from 'styled-components';
import Line from '../../../images/line.svg';
// import Coursecard from './coursecard'
import Loadable from 'react-loadable';
import brochure from '../../../images/pdf/CA,CS&CMS Brochure.pdf'
import dergreeImg from '../../../images/CA-CMA-banner.jpg'

const LoadableComponent = Loadable({
    loader: () => import('./coursecard'),
    loading: 'Loading...',
  });

const Degreeinfo = () => {

    let degreeinfocontent = `Being affiliated to Bengaluru Central University (BCU)  the college follows the Choice Based Credit System (CBCS) in all the under-graduate and post-graduate Programs. The CBCS makes the product of the university at par with the global practices in terms of academic standards and evaluation strategies.
    youth  have always been good managers, adept at multi-tasking and quick decision making, but sadly, their skills have been confined and hidden like the proverbial light under the bushes. C.B. Bhandari Jain College aims at introducing the Best managers to India’s burgeoning corporate and management sectors. To this end, it offers B.Com and BBA courses  at the Degree level & M.Com at the Post Graduate Level with the vision of imparting the best skills in Commerce & Management.
    
    Students are oriented towards professional courses apart from the curriculum and offered adequate exposure to the corporate sector. A blend of the theoretical and practical approaches is the highlight of learning at CBBJC. Students are motivated to make presentations, conduct seminars, and undertake case studies to obtain hands-on experience of current developments.
    
    Industrial Visits to leading companies such as Cummins India Ltd., Toyota Kirloskar, Parle, Pepsi, Exide Batteries and Leela Palace are arranged every year. Decision making and managerial skills are imparted and students are oriented towards careers in corporate and management sectors.`
    return (<> 

            <div className="container mt-5 mb-4 px-4">
            <Images width="50%" src={dergreeImg}/>
            </div>

        <DegreeinfoWrap className="container mb-5">
    
             
             
            <Heading className="dinfo py-3 pr-3" title="Degree Courses	"/><span>  <img src={Line} alt="dev" width="50%"/></span>
            <Text className="dtext" text={degreeinfocontent}/>
            <LoadableComponent/>


            <Heading className="dinfo mt-5 ml-3" title="B.Com + CA/CS/CMA" align="left"/>

            <a className="btn btn-info text-white mx-5 mb-3" href={brochure} download> Download brochure </a>

        </DegreeinfoWrap></>
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
export default Degreeinfo;