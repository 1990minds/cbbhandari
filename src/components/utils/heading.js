import React from 'react';
import styled from 'styled-components'

const Heading = (props) => {
    return (
        <HeadingWrap className={`${props.className}`} fontsize={props.fontsize}  align={props.align}>

{props.title}
        </HeadingWrap>
    );
};

const Text = (props) => {
    return (
        <TextWrap  className={`${props.className}`} align={props.align}>

{props.text}
        </TextWrap>
    );
};

const Images = (props) => {
    return (
        <ImageWrap  className={`${props.className}`}>

<img className="rounded shadow" src={props.src} alt="iiii" />
        </ImageWrap>
    );
};



const Devider = (props) => {
    return (
        <DWrap margin={props.margin}  className={`${props.className}`}>

<hr width={props.width} />
        </DWrap>
    );
};




const DWrap = styled.div`

hr{

    border:none;
    background-color:white;
    height:3px;
    border-radius:20px;
  margin:${props=>props.margin};
    opacity:0.7;
}

`



const HeadingWrap = styled.h2`

text-align: ${props => props.align || 'cenrter'};
font-size: ${props => props.fontsize };


font-family:var(--HeadFont);
text-transform:capitalize;
color:var(--AccentColor3);
font-weight:100;
line-height:1.5;
letter-spacing:0.5px;


`

const ImageWrap = styled.div`

img {

    display:block;
margin:0px auto;
width:100%;
}


`

const TextWrap = styled.p`
text-align: ${props => props.align || 'justify'};
font-family:var(--TextFont);
font-size:15px;
line-height:25px;
opacity: 0.7;


`
export {Heading, Images, Text, Devider } ;