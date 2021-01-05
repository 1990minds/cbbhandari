import React from 'react';
import {Card, ListGroup } from 'react-bootstrap';
import v1 from '../../../images/layouts/valuaddedCertificate/v1.jpg'
import v2 from '../../../images/layouts/valuaddedCertificate/v2.jpg'

const vlaueaddSec = () => {
    return (
        <div className="container my-5">

            <div className="row">
                <div className="col-sm-4 pt-3">

                <Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>1) Certificate Course in Tally ,ERP9</ListGroup.Item>
    <ListGroup.Item>2) Certificate Course in Advance Excel</ListGroup.Item>
    <ListGroup.Item>3) Certificate Course in GST</ListGroup.Item>
    <ListGroup.Item>4) Certificate Course in Employability and Soft skills. </ListGroup.Item>

  </ListGroup>
</Card>


                </div>
                <div className="col-sm-4">


<img src={v1} className="rounded shadow-sm w-100 mt-3" alt="fdf" />

                </div>
                <div className="col-sm-4">

                <img src={v2} className="rounded shadow-sm w-100 mt-3" alt="fdf" />

                </div>
            </div>
            
        </div>
    );
};

export default vlaueaddSec;