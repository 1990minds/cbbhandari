import React from 'react';
import {Text} from '../../utils/heading'
import sc1 from '../../../images/layouts/Studentsupport/scolarships/sc.jpg'
const ScolarshipSec = () => {


let sc = `Fee concession up to 30 % is provided to students belonging to SC/ST and CAT 1. However, they should submit relevant documents of caste and income to avail the concession`
let eco = `Economically weaker sections can apply for 
scholarships given by the college 
management. The students will get 
concessions in fees based on the 
documents provided and the discretion of 
the managing committee of the college.`
    return (
        <div className="container my-5">

            <div className="row">
                <div className="col-sm-6 ">


                <div class="card mb-3" >
  <div class="card-header">
 <b>Merit scholarship</b> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> &nbsp;80% - 85%   ---  10% of Tuition Fees  </li>
    <li class="list-group-item">&nbsp; `{'>'}` 85% - 90% ---  20% of Tuition Fees  </li>
    <li class="list-group-item">&nbsp; `{'>'}` 90%            ---  30% of Tuition Fees  </li>
    <li class="list-group-item">&nbsp;SC/ST/OBC Students can apply 
for scholarships under SSP/NSP</li>

  </ul>
</div>




{/* <h5>SC/ST, CAT 1-</h5>
<Text text={sc}/> */}

<h5>Economically weaker section</h5>
<Text text={eco}/>

                </div>
                <div className="col-sm-6">

<img className="rounded shadow" src={sc1} alt="sdsd" width="80%"/>

                </div>
            </div>
            
        </div>
    );
};

export default ScolarshipSec;