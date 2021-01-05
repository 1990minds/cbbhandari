import React from 'react';
import {Text } from '../../utils/heading';
import Gallery from "react-photo-gallery";
import pl1 from '../../../images/actvity 2019-20/placement.jpg'

import plc2 from '../../../images/layouts/Studentsupport/Placements/pl2.jpg'

import plc5 from '../../../images/layouts/Studentsupport/Placements/pl5.jpg'


import plc1 from '../../../images/layouts/placement/placement (1).jpg'
import plc3 from '../../../images/layouts/placement/placement (2).jpg'
import plc4 from '../../../images/layouts/placement/placement (3).jpg'
import plc6 from '../../../images/layouts/placement/placement (4).jpg'
import plc7 from '../../../images/layouts/placement/placement (5).jpg'

import Tablemanagement from '../../global/tables/table';
import {Placement} from '../../global/tables/tabledata'
const Mforum = () => {


    const photos = [
        {
          src: `${plc1}`,
          width: 1,
          height: 1
        },
        {
          src:  `${plc2}`,
          width: 1,
          height: 1
        },
        {
          src: `${plc3}`,
          width: 4,
          height: 3
        },
        {
          src: `${plc4}`,
          width: 1,
          height: 1
        },
        {
          src:  `${plc5}`,
          width: 3,
          height: 4
        },
        {
          src:  `${plc6}`,
          width: 4,
          height: 3
        },
        {
          src:  `${plc7}`,
          width: 4,
          height: 3
        }
      ];



let Placementdata = `

The college has an active placement cell and has been assisting all eligible students to get placed in good companies such as Northern Trust Bank, Oracle Corp, ING Vysya, Greet Technologies, HP/Mphasis, and Indigo Airlines. Also, we  assist students in placements by
`;


    return (
        <div className="container my-5 py-4">   

            <div className="row">
                <div className="col-sm-12">
                <Text text={Placementdata}/>
                <ul>
                    <li>Placement training</li>
                    <li>Job fairs & campus recruitments</li>
                </ul>

                </div>
                <div className="col-sm-12">
                <Gallery photos={photos} />


                </div>

              
    
            </div>



            <div className="row">
                <div className="col-sm-12  mt-5">

                {/* <img className="mt-4 pt-2 w-50 mx-auto d-block" src={pl1} width="100%" alt="ffdf" /> */}
                <Tablemanagement data={Placement} title="Activities of the Placement Cell during 2019-20 "/>

                </div>
            

              
    
            </div>



        </div>
    );
};

export default Mforum;