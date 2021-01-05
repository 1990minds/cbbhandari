import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import imge from '../../images/popup-01.png'
import Fade from 'react-reveal/Fade';
import { Link} from 'gatsby'





export default function ModalPopup() {
const [open, setOpen] = useState(false)


function handleOnload () {

  return  setOpen(false)
    
    }
    

    useEffect(()=>{

window.onload =  () =>{

  return  setOpen(true)
}

    }, [open])


    return (
        <>
        {

            open ?
            

            <ModalWrap onClick={()=>handleOnload()}>
            
            <Fade delay={1500} distance="50px" duration={800} top>
            <button className="btn btn-danger">X</button>
            <Link to="/academics/degree">
            <img src={imge} alt="mimage" width="100%"/>
            </Link>
           
               </Fade>
               </ModalWrap>  : null
        }
    
      
       
        </>
      
    )
}

const ModalWrap = styled.div`

position:fixed;
top:40%;
left:50%;
transform:translate(-50%, -50%);
width:50%;
height:400px;
z-index:222 !important;

button{
    float:right;
    cursor: pointer;
}

@media(max-width:960px){

position:fixed;
top:60% !important;
left:50%;
transform:translate(-50%, -50%);
width:75% !important;
height:400px;
z-index:222 !important;


}

@media(max-width:1760px){

position:fixed;
top:50% ;
left:50%;
transform:translate(-50%, -50%);
width:55%;
height:400px;
z-index:222 !important;


}

`