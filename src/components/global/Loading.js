import React from 'react';
import Loadinglogo from '../../images/logo.png'
import styled from 'styled-components'
const Loading = () => {
    return (
        <LoadWrap className=" container-fluid bg-light " >

<div className="load mx-auto d-block ">
            <img className="mx-auto d-block" src={Loadinglogo} alt="l" width="100px"/>
            <h3 className="text-center my-2">Loading........</h3>
         </div>   
        </LoadWrap>
    );
};


const LoadWrap = styled.div`

position:absolute;
    z-index:1000 !important;
    height:100vh;
    width:100%;
.load{

    z-index:100;
    height:100vh;
    width:100%;
    padding:10%;
}


`
export default Loading;