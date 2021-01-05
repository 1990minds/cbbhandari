import React from 'react';
import styled from 'styled-components'
import brewimg from '../../images/brewlogo.png' 
const Botombar = (props) => {
    return (
        
        <BotomWrap className="container-fluid ">
        <p>Copyright © 2019 -  <a href="https://brewmybrand.com" target="_blank">Brewmybrand <img src={brewimg} width="50px" alt="blogo"/></a> </p>
        </BotomWrap>
    );
};

const BotomWrap = styled.div`

background-color:#06161F;

p{

    color:white;
    opacity:0.5;
    text-align:center;
    margin:0px;
    padding:15px;
}
`
export default Botombar;