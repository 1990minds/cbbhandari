import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import { Heading, Text } from '../../utils/heading'
// import iq1 from '../.././../images/layouts/iqac/i1.jpg'
// import iqc1 from '../.././../images/layouts/iqac/composition/icom1.jpg'
// import iqc2 from '../.././../images/layouts/iqac/composition/icom2.jpg'
// import iqc3 from '../.././../images/layouts/iqac/composition/icom3.jpg'


const IqaccompSec = () => {
    return (
        <div className="container-fluid my-5">

            <div className="row">
                <div className="col-sm-12">
                    <Heading className="mt-3" fontsize="20px" title="IQAC MEMBERS FOR 2019-20" />
                    <hr className="mb-3" style={{ border: "none", height: "2px", margin: "0", backgroundColor: "#0073AD", width: "10%" }} />

                    <Card style={{ width: '100%' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>	Dr. Asha Ganesh – Principal – Chairperson</ListGroup.Item>
                            <ListGroup.Item> Sri. Nagaraj M  –In charge President – Management Representative</ListGroup.Item>
                            <ListGroup.Item>Sri. Champalal Bhandari – Secretary – Management Representative</ListGroup.Item>

                            <ListGroup.Item>	Ms. Veena R – HOD – Commerce Department</ListGroup.Item>
                            <ListGroup.Item>	Ms. Usha Rao – HOD – Management Department</ListGroup.Item>

                            <ListGroup.Item>	Ms. Chitra P Narayan – IQAC Co-ordinator</ListGroup.Item>
        <ListGroup.Item>	Ms. Swapna S-Assistant Professor</ListGroup.Item>
        <ListGroup.Item>	Ms. Shubha- Assistant Professor</ListGroup.Item>
                            <ListGroup.Item>	Ms. Poornima S – Office Superintendent</ListGroup.Item>
                            <ListGroup.Item>	Dr. Srikanta – External Academic Expert</ListGroup.Item>
                            <ListGroup.Item>Mr. Nagaraj – External Industry Expert</ListGroup.Item>

                            <ListGroup.Item>	Mr. Bharath – External Industry Expert</ListGroup.Item>
                           
                               <ListGroup.Item> Mr. Pukhraj Purohit– Parent Representative</ListGroup.Item>

                              <ListGroup.Item>  Mr. Raghuram M– Parent Representative</ListGroup.Item>
                              <ListGroup.Item> Ms. Tejal – Alumni Representative</ListGroup.Item>
                              <ListGroup.Item>Ms . Hajira – Alumni Representative</ListGroup.Item>
                              <ListGroup.Item>Ms. Pooja Jain – Alumni Representative</ListGroup.Item>



                           
                            <ListGroup.Item>	Ms. Shathakshi Vallabh – Alumni Representative</ListGroup.Item>

                            <ListGroup.Item>	Ms. Shrikruthi – Alumni Representative</ListGroup.Item>
                           
                            <ListGroup.Item>	Ms. Kavitha- III B.Com – Student Representative</ListGroup.Item>
                            <ListGroup.Item>. Ms. Deepika - III B.Com – Student Representative</ListGroup.Item>
                            <ListGroup.Item>Ms. Harini - III B.Com – Student Representative</ListGroup.Item>

                            <ListGroup.Item> Ms. Kushboo Singh - III BBA – Student Representative</ListGroup.Item>
                            <ListGroup.Item>Ms. Divya Jain - III BBA – Student Representative</ListGroup.Item>



                        </ListGroup>
                    </Card>




                </div>

            </div>



        </div>
    );
};

export default IqaccompSec;