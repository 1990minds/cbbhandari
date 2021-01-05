import React from 'react';
import {Text } from '../../utils/heading';
import ment1 from '../../../images/layouts/Studentsupport/mentorship/mentor1.png'
// import m2 from '../../../images/layouts/Studentsupport/managementforum/mang2.jpg'

const Mforum = () => {


let Mentorshipdata = `

 To inculcate discipline among the students and counsel them, the mentor system is in place. A select group of students will be under one mentor (class teacher) who will help them excel in all their academic and co-curricular activities. The mentor takes the responsibility of building the confidence and self-esteem of the students and establishes a long-standing rapport to counsel them regularly on a one-on-one basis.
`;


    return (
        <div className="container my-5 py-4">
            <div className="row">
                <div className="col-sm-12">
                <img className="mt-4 pt-2" src={ment1} width="100%" alt="ffdf" />


                </div>
                <div className="col-sm-12">

                <Text className="p-3 mt-2"   text={Mentorshipdata}/>

                </div>

              
            

            </div>
        </div>
    );
};

export default Mforum;