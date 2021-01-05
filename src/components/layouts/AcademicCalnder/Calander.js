import React from 'react';
import Calanderimg from '../../../images/brewlogo.jpg'

const Calander = () => {
    return (
         <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <img src={Calanderimg} style={{display:"block", margin:"auto"}} width="100%" alt="calander"/>
          </div>
        </div>
      </div>
    );
};

export default Calander;