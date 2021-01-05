import React from 'react';
import styled from 'styled-components'
// import Gallery from 'react-grid-gallery';
// import {Heading, Text, Images, Devider} from '../../utils/heading'
import feedpdf from '../../../images/pdf/FEEDBACK ON COLLEGE.pdf'

const Feedback = () => {


  


    return (
        <FWrap className="container py-5">


<iframe title="feedback" src={feedpdf} width="100%" height="700px" style={{margin:"auto", padding:"10px 100px", boxSizing:"border-box"}}>
<p>Your browser does not support iframes.</p>
</iframe>

        </FWrap>
    );
};

const FWrap = styled.div`


`
export default Feedback;