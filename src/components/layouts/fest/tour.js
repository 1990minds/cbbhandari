import React from 'react';
import Gallery from "react-photo-gallery";
import to1 from  '../../../images/layouts/tour/to1.jpg'
import to2 from  '../../../images/layouts/tour/to2.jpg'
import {Heading } from '../../utils/heading'

const ToursSec = () => {

    const photos = [


        {
            src: `${to1}`,
            width: 4,
            height: 3
          },
          {
            src: `${to2}`,
            width: 4,
            height: 3
          }
      ];
    return (
        <div className="container my-5">

<Heading className="my-3 text-lowercase" title="Annual tours &amp; excursions are arranged for students from both PUC/Degree to famous tourist destinations." fontsize="24px"/>
        <Gallery photos={photos} />;

        </div>
    );
};

export default ToursSec;