import React from 'react';
import Gallery from "react-photo-gallery";
// import cel1 from '../../../images/layouts/infrastructure/celbration/cel1.jpg'
// import cel2 from '../../../images/layouts/infrastructure/celbration/cel2.jpg'
import cel3 from '../../../images/layouts/infrastructure/celbration/cel3.jpg'
import cel4 from '../../../images/layouts/infrastructure/celbration/cel4.jpg'
import cel5 from '../../../images/layouts/infrastructure/celbration/cel5.jpg'
import cel6 from '../../../images/layouts/infrastructure/celbration/cel6.jpg'
import cel7 from '../../../images/layouts/infrastructure/celbration/cel7.jpg'
import cel8 from '../../../images/layouts/infrastructure/celbration/cel8.jpg'
import cel9 from '../../../images/layouts/infrastructure/celbration/cel9.jpg'
import cel10 from '../../../images/layouts/infrastructure/celbration/cel10.jpg'
import cel11 from '../../../images/layouts/infrastructure/celbration/cel11.jpg'
import cel13 from '../../../images/layouts/infrastructure/celbration/cel13.jpg'
import cel14 from '../../../images/layouts/infrastructure/celbration/cel14.jpg'
import cel15 from '../../../images/layouts/infrastructure/celbration/cel15.jpg'
// import cel16 from '../../../images/layouts/infrastructure/celbration/cel16.jpg'
import cel17 from '../../../images/layouts/infrastructure/celbration/cel17.jpg'
import cel18 from '../../../images/layouts/infrastructure/celbration/cel18.jpg'
import cel19 from '../../../images/layouts/infrastructure/celbration/cel19.jpg'







const CelabrationSec = () => {

    const photos = [
        {
          src: `${cel18}`,
          width: 4,
          height: 3
        },
        
        {
          src: `${cel19}`,
          width: 4,
          height: 3
        },
        {
          src: `${cel3}`,
          width: 1,
          height: 1
        },
        {
          src: `${cel4}`,
          width: 3,
          height: 4
        },
        {
          src: `${cel5}`,
          width: 1,
          height: 1
        },
        {
          src:`${cel17}`,
          width: 4,
          height: 3
        },
        {
          src: `${cel7}`,
          width: 4,
          height: 3
        },


        {
            src: `${cel8}`,
            width: 4,
            height: 3
          },
          {
            src: `${cel9}`,
            width: 4,
            height: 3
          },
          {
            src: `${cel10}`,
            width: 4,
            height: 3
          },
          {
            src:`${cel11}`,
            width: 1,
            height: 1
          },
      
          {
            src: `${cel13}`,
            width: 4,
            height: 3
          },
          {
            src: `${cel14}`,
            width: 4,
            height: 3
          },
          {
            src:`${cel15}`,
            width: 4,
            height: 3
          },
          {
            src: `${cel6}`,
            width: 4,
            height: 3
          }
      ];
    return (
        <div className="container my-5">

        <Gallery photos={photos} />;

        </div>
    );
};

export default CelabrationSec;