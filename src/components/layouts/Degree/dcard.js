import React from 'react';
import coursedata from './dgreecoursedata'



const dcard = () => {


    coursedata.map(data =>{

        return(<>
        <div className="Back">
                 <p> {data.sylabus}</p>
               </div>
               </>) 
       
       })



};

export default dcard;