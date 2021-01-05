import React from 'react';
import Gallery from 'react-grid-gallery';

const Homegallery = () => {

    const IMAGES =
[{
        src: "https://cbbhandarijaincollege.com/wp-content/uploads/2015/08/20170923_113449.jpg",
        thumbnail: "https://cbbhandarijaincollege.com/wp-content/uploads/2015/08/20170923_113449.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
},
{
        src: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9257.jpg",
        thumbnail: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9257.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},
 
{
        src: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9401.jpg",
        thumbnail: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9401.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9388.jpg",
    thumbnail: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9388.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    src: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9210.jpg",
    thumbnail: "https://cbbhandarijaincollege.com/wp-content/uploads/2017/07/SBD_9210.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
}
]
 
    return (
        <div className="container-fluid" style={{overflow:"hidden"}} height="212">
           <Gallery images={IMAGES}/> 
        </div>
    );
};

export default Homegallery;