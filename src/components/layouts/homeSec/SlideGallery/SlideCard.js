import React from 'react';
import Img from 'react-image';




import recent1 from '../../../../images/Recent Events/recentevent (1).jpg'
import recent2 from '../../../../images/Recent Events/recentevent (2).jpg'
import recent3 from '../../../../images/Recent Events/recentevent (3).jpg'
import recent4 from '../../../../images/Recent Events/recentevent (4).jpg'
import recent5 from '../../../../images/Recent Events/recentevent (5).jpg'
import recent6 from '../../../../images/Recent Events/recentevent (6).jpg'
import recent7 from '../../../../images/Recent Events/recentevent (7).jpg'
import recent8 from '../../../../images/Recent Events/recentevent (8).jpg'
import recent9 from '../../../../images/Recent Events/recentevent (9).jpg'
import recent10 from '../../../../images/Recent Events/recentevent (10).jpg'

const Images = [recent1, recent2, recent3, recent4, recent5, recent6, recent7, recent8, recent9, recent10]



const SlideCard = () => {
    return (
        <>
          {
Images.map(imge =>{

    return (
   
           < >
           <Img src={imge} width="100%" />
    
           </>
       );
   
   })

          }  
        </>
    );
};

export default SlideCard;