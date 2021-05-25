import React from 'react';
import {Card, ListGroup } from 'react-bootstrap'
import {Heading, Text} from '../../utils/heading'
import collegeimg from '../../../images/layouts/home/bhandari-building.png'
import newblinkimg from '../../../images/layouts/home/new_blink_gif.gif'

const AdmisionSec = () => {
    return (
        <div className="container my-5">


<div className="row">
    <div className="col-sm-12">


    <div className="row mb-4">

<div className="col-sm-3">
    <img src={collegeimg} alt="college" width="100%" />
</div>

<div className="col-sm-9">

<div className="card">
<div className="card-header">
<b>Admissions for all Degree Courses are open for the year 2021 - 2022.</b><img src={newblinkimg} width="70px" alt="new"/>
</div>
<div className="card-body">
 <h5>Mr.Girish</h5>
<p className="card-text">Admissions Coordinator</p>

<h6>Phone: 9945881526 | 8026611924</h6>
<h6>Email: <a  href="mailto: cbbhandarijaincollege@gmail.com">cbbhandarijaincollege@gmail.com </a></h6>
<h6><b>contact:</b> (Timing - 10.00 AM to 5.00 PM for all the days)</h6>

</div>
</div>

</div>

</div>


    <Heading className="mt-3" fontsize="24px" title="RULES AND REGULATIONS FOR ADMISSION"/>
<hr className="mb-3" style={{border:"none", height:"2px", margin:"0", backgroundColor:"#0073AD", width:"10%"}}/>

   

    <Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Certified Photocopy of Statement of Marks is required to be enclosed with the application at the time of admission </ListGroup.Item>
    <ListGroup.Item>SC/ST, CAT-1 candidates to submit caste and income certificates.</ListGroup.Item>
    <ListGroup.Item>Students from other states should enclose copies of Migration and Eligibility Certificates.</ListGroup.Item>

    <ListGroup.Item>Admissions are made only after a personal interview with the Principal and Management.</ListGroup.Item>
    <ListGroup.Item>Candidates shall produce the Original Marks Card, Transfer Certificate and six recent passport size photographs at the time of admission.</ListGroup.Item>

    <ListGroup.Item>Payment of prescribed admission fee should be made on or before the date notified in the College, failing which the admission is forfeited.</ListGroup.Item>
    <ListGroup.Item>Amount once paid towards admission is non-refundable.</ListGroup.Item>

    <ListGroup.Item>Admission is provisional subject to the ratification by the Bangalore University.</ListGroup.Item>
    <ListGroup.Item>A minimum attendance of 75% in each subject is compulsory. Please note that students who do not have adequate attendance will be stopped from appearing for the examination.</ListGroup.Item>
 
 
    <ListGroup.Item>Parents / Guardians are requested to meet the teachers concerned to ascertain the attendance and progress of their wards at least twice in the academic year.</ListGroup.Item>
    <ListGroup.Item>Any act of misconduct, indiscipline, vandalism or violence or damage cause to the college property, laboratory equipment, sports materials, library books, reference volumes, journals and periodicals, defacing of furniture and of walls, etc., shall be seriously viewed for both penalty and punishment and the decision of the Principal is final in this matter.</ListGroup.Item>
    <ListGroup.Item>Participation in extra-curricular activities, N.C.C., N.S.S., etc., is voluntary and desirable.</ListGroup.Item>

    <ListGroup.Item>Morning Prayer is compulsory discipline for all students.</ListGroup.Item>
    <ListGroup.Item><b>Students should strictly adhere to the dress code specified below:</b><br/>
        1.Dress should not be tight – fitting and transparent.<br/>
       2. Neatness and dignity in dressing should be strictly observed.

    </ListGroup.Item>

  </ListGroup>
</Card>

<Text text="If any dress is found objectionable, action can be taken immediately by any member of the staff."/>

    </div>
   

</div>



        </div>
    );
};

export default AdmisionSec;