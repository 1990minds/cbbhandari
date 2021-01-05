import React from 'react';
import Gallery from "react-photo-gallery";
import {Text} from '../../utils/heading';
import v1 from '../../../images/layouts/industry visite/industry (1).jpg'
import v2 from '../../../images/layouts/industry visite/industry (2).jpg'
import v3 from '../../../images/layouts/industry visite/industry (3).jpg'
import v4 from '../../../images/layouts/industry visite/industry (4).jpg'
import v8 from '../../../images/layouts/industry visite/industry (8).jpg'
import v6 from '../../../images/layouts/industry visite/industry (6).jpg'
import v7 from '../../../images/layouts/industry visite/industry (7).jpg'
import v9 from '../../../images/layouts/industry visite/industry (9).jpg'



const industrialSec = () => {

    const photos = [
        {
          src: `${v9}`,
          width: 4,
          height: 3
        },
        {
          src: `${v2}`,
          width: 4,
          height: 3
        },
        {
          src: `${v3}`,
          width: 4,
          height: 3
        },
        {
          src: `${v4}`,
          width: 4,
          height: 3
        },
        {
          src: `${v7}`,
          width: 4,
          height: 3
        },
        {
          src: `${v6}`,
          width: 3,
          height: 2
        } ,
        {
          src: `${v8}`,
          width: 4,
          height: 3
        },
        {
          src: `${v1}`,
          width: 3,
          height: 2
        }
      ];

      
    return (
        <div className="container py-5">
          <Text className="py-3" text="Confluence is an inter-collegiate fest held annually for PUC & Degree students. A wide range of events attract thousands of students every year."/>

            <Gallery photos={photos} />;
        </div>
    );
};

export default industrialSec;