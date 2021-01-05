import React from 'react';
import Gallery from "react-photo-gallery";
import {Text} from '../../utils/heading'
import icf1 from '../../../images/layouts/Gallery/IC/ic (1).jpg'
import icf2 from '../../../images/layouts/Gallery/IC/ic (2).jpg'
import icf3 from '../../../images/layouts/Gallery/IC/ic (3).jpg'
import icf4 from '../../../images/layouts/Gallery/IC/ic (4).jpg'
import icf5 from '../../../images/layouts/Gallery/IC/ic (5).jpg'
import icf6 from '../../../images/layouts/Gallery/IC/independance day _2.jpg'
import icf7 from '../../../images/layouts/Gallery/IC/independence day _4.jpg'






const InterfestSec = () => {

    const photos = [
        {
          src: `${icf5}`,
          width: 4,
          height: 3
        },
        {
          src: `${icf1}`,
          width: 4,
          height: 3
        },
        {
          src:`${icf2}`,
          width: 4,
          height: 3
        },
        {
          src: `${icf3}`,
          width: 1,
          height: 1
        },
        {
          src: `${icf4}`,
          width: 4,
          height: 3
        },
        {
          src: `${icf6}`,
          width: 4,
          height: 3
        },
        
        {
          src: `${icf7}`,
          width: 4,
          height: 3
        }
      ];

      
    return (
        <div className="container py-5">
          <Text className="py-3" text="Confluence is an inter-collegiate fest held annually for PUC & Degree students. A wide range of events attract thousands of students every year."/>

            <Gallery photos={photos} />;
        </div>
    );
};

export default InterfestSec;