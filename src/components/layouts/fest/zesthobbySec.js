import React from 'react';
import Gallery from "react-photo-gallery";
import {Text} from '../../utils/heading'
const Zesthobbyec = () => {

    const photos = [
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-1-300x225.jpg",
          width: 4,
          height: 3
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-2-300x225.jpg",
          width: 1,
          height: 1
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-6-300x244.jpg",
          width: 4,
          height: 3
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-8-300x225.jpg",
          width: 1,
          height: 1
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-3-300x225.jpg",
          width: 3,
          height: 4
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-7-300x227.jpg",
          width: 4,
          height: 3
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-4-300x225.jpg",
          width: 4,
          height: 3
        },
        {
          src: "https://cbbhandarijaincollege.com/wp-content/uploads/2019/03/Zest-5-300x231.jpg",
          width: 4,
          height: 3
        }
      ];

      
    return (
        <div className="container py-5">
          <Text className="py-3" text="As an ongoing exercise in Entrepreneurship, Zest, The Hobby Club of our college organized a Paper Quill Jewellery Course, Chocolate making classes. It was organized for the students by the students and response was excellent."/>

            <Gallery photos={photos} />;
        </div>
    );
};

export default Zesthobbyec;