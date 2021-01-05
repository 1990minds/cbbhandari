import React from 'react';
import {Heading} from '../../utils/heading'
const table = (props) => {

    
    return (


        <div>

           <Heading className="" fontsize="18px" title={props.title}/>
            <table className="table table-striped">
  <thead>
    <tr>
   
      <th scope="col">Date</th>
      <th scope="col">Activities</th>
 
    </tr>
  </thead>
  <tbody>
      {
      
     props.data.map((item, index)=>{

return  <tr key = {index}>
      <td>{item.date}</td>
      <td>{item.activity}</td>
   
    </tr>


      })
    
    
    
    }
   
  
  </tbody>
</table>
        </div>
    );
};

export default table;