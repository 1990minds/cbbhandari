import React from 'react';
import {Text, Heading } from '../../utils/heading';
import {Mangement} from '../../global/tables/tabledata'
import Tablemanagement from '../../global/tables/table';
import m2 from '../../../images/layouts/Studentsupport/managementforum/mang2.jpg'
const Mforum = () => {


let Mforumdata = `

Management Forum Strives to make the students to go beyond the classroom learning and to think ingeniously to confidently face the ever changing demands of the commercial world and to prove themselves as the best Business leaders.
We give a platform to inculcate management techniques to exhibit managerial skills in the challenging world and to compete with the changing Environment in the corporate World.
Management Forum is exclusively created platform for the BBA students from the Dept. of Management. This platform created the opportunity to every BBA student to exhibit their talent. The diverse programs are organized by inviting various resource persons to nurture the skills and knowledge for the student’s outlook.

`;


    return (
        <div className="container my-5 py-4">
            <div className="row">
                <div className="col-sm-12">

                <Text className="p-3 mt-2"   text={Mforumdata}/>

                </div>
              

                <div className="col-sm-6  mt-3">
                <img className="mt-4 pt-2" src={m2} width="100%" alt="ffdf" />


                </div>
                <div className="col-sm-6 mt-5">

                <Tablemanagement data={Mangement} title="Activities of the Management Forum during 2019-20  "/>

                </div>
            
            </div>
        </div>
    );
};

export default Mforum;