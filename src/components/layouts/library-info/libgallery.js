import ImageGallery from 'react-image-gallery';
import React from "react"
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';


//com forum-img

import libc1 from '../../../images/layouts/library/comerce-dep/libc1.jpg'
import libc2 from '../../../images/layouts/library/comerce-dep/libc2.jpg'

//mnf-f-img
import libm1 from '../../../images/layouts/library/mang-dep/libmng1.jpg'
import libm2 from '../../../images/layouts/library/mang-dep/libmng2.jpg'

//longuage

import libe1 from '../../../images/layouts/library/mang-dep/libeng1.jpg'
import libe2 from '../../../images/layouts/library/mang-dep/libeng2.jpg'
import libe3 from '../../../images/layouts/library/mang-dep/libh1.jpg'
import libe4 from '../../../images/layouts/library/mang-dep/libh2.jpg'

import libhi1 from '../../../images/layouts/library/mang-dep/libhi1.jpg'
import libhi2 from '../../../images/layouts/library/mang-dep/libhi2.jpg'

import libsan1 from '../../../images/layouts/library/mang-dep/libsan1.jpg'
import libsan2 from '../../../images/layouts/library/mang-dep/libsan2.jpg'

import libsa1 from '../../../images/layouts/library/mang-dep/libsa1.jpg'
import libsa2 from '../../../images/layouts/library/mang-dep/libsa2.jpg'






class Libgallery extends React.Component {
 
  render() {
 
    const images = [
      {
        original: `${libc1}`,
        thumbnail: `${libc1}`,
        originalClass:"imgclass",
        description:"Commerce Department "

      },
      {
        original:`${libc2}`,
        thumbnail: `${libc2}`,
        originalClass:"imgclass",
        description:"Commerce Department "


      },
      {
        original: `${libm1}`,
        thumbnail:`${libm1}`,
        originalClass:"imgclass",
        description:"Management Department "


      },
      {
        original: `${libm2}`,
        thumbnail: `${libm2}`,
        originalClass:"imgclass",
        description:"Management Department "


      },
      
      {
        original: `${libe1}`,
        thumbnail: `${libe1}`,
        originalClass:"imgclass",
        description:"English Department  "


      },
      {
        original: `${libe2}`,
        thumbnail: `${libe2}`,
        originalClass:"imgclass",
        description:"English Department  "


      },
      
      {
        original: `${libhi1}`,
        thumbnail: `${libhi1}`,
        originalClass:"imgclass",
        description:"Hindi Department "


      },
      {
        original: `${libhi2}`,
        thumbnail: `${libhi2}`,
        originalClass:"imgclass",
        description:"Hindi Department "


      },
      {
        original: `${libsan1}`,
        thumbnail: `${libsan1}`,
        originalClass:"imgclass",
        description:"Kannada Department "


      },
      {
        original: `${libsan2}`,
        thumbnail: `${libsan2}`,
        originalClass:"imgclass",
        description:"Kannada Department"


      }
      ,
      {
        original:`${libsa1}`,
        thumbnail: `${libsa1}`,
        originalClass:"imgclass",
        description:"Sanskrit Department "


      },
      {
        original: `${libsa2}`,
        thumbnail: `${libsa2}`,
        originalClass:"imgclass",
        description:"Sanskrit Department  "


      }
    ];
 
    return (
        <LibGalWrap className="my-5 ">
             <ImageGallery items={images} autoPlay={true} />
             </LibGalWrap>
     
    );
  }
 
}

const LibGalWrap = styled.div`


.imgclass{


   width:100%;
}

`

export default Libgallery;