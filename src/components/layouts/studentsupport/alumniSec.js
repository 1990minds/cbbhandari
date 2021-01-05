import React from 'react';
import {Text } from '../../utils/heading';
import Gallery from "react-photo-gallery";
import al1 from '../../../images/actvity 2019-20/alumi.jpg'

import alu1 from '../../../images/layouts/Studentsupport/Alumini/alu1.jpg'
import alu2 from '../../../images/layouts/Studentsupport/Alumini/alu2.jpg'
import alu3 from '../../../images/layouts/Studentsupport/Alumini/alu3.jpg'
import alu4 from '../../../images/layouts/Studentsupport/Alumini/alu4.jpg'
import alu5 from '../../../images/layouts/Studentsupport/Alumini/alu5.jpg'
import alu6 from '../../../images/layouts/Studentsupport/Alumini/alu6.jpg'
import alu7 from '../../../images/layouts/Studentsupport/Alumini/alu7.jpg'
import alu8 from '../../../images/layouts/Studentsupport/Alumini/alu8.jpg'
import alu9 from '../../../images/layouts/Studentsupport/Alumini/alu9.jpg'
import alu10 from '../../../images/layouts/Studentsupport/Alumini/alu10.jpg'

import Tablemanagement from '../../global/tables/table';
import {Alumnitable} from '../../global/tables/tabledata'


const Alumni = () => {


    const photos = [
        {
          src: `${alu1}`,
          width: 4,
          height: 3
        },
        {
          src: `${alu2}`,
          width: 4,
          height: 3
        },
        {
          src: `${alu3}`,
          width: 1,
          height: 1
        },
        {
          src: `${alu7}`,
          width: 3,
          height: 4
        },
        {
          src: `${alu5}`,
          width: 4,
          height: 3
        },
        {
          src:`${alu6}`,
          width: 4,
          height: 3
        },
        {
          src: `${alu4}`,
          width: 4,
          height: 3
        },
        {
          src: `${alu8}`,
          width: 4,
          height: 3
        },
        {
          src:`${alu9}`,
          width: 4,
          height: 3
        },
        {
          src:`${alu10}`,
          width: 4,
          height: 3
        }
      ];



let Placementdata = `In a bid to help former students to continue to belong to CBBJC the college has set up an Alumni Association. Out-going students can enroll and become part of the family tree of CBBJC.`;


    return (
        <div className="container my-5 py-4">   

            <div className="row">
                <div className="col-sm-12">
                <Text text={Placementdata}/>
                <ul>
                    <li>Placement Alumni Achievers</li>
                    <li>Alumni Speak</li>
                </ul>
                </div>
                <div className="col-sm-12">
                <Gallery photos={photos} />
                </div>
            </div>



            <div className="row">
                <div className="col-sm-6 mt-5">

                <Tablemanagement data={Alumnitable} title="Activities of the Alumni Association during 2019-20  "/>

                </div>
                <div className="col-sm-6">
              </div>

              
    
            </div>



        </div>
    );
};

export default Alumni;