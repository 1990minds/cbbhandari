import React from 'react';
import { Heading } from '../../utils/heading';

const Nacctable = () => {
    return (
        <div className="mt-sm-3">

            <Heading fontsize="20px" title="C.B.BHANDARI JAIN COLLEGE"/>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sl NO</th>
      <th scope="col">Committee</th>
      <th scope="col">Incharge Staff</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Criteria-I  </th>
      <td>Curricular Aspects (CA)</td>
      <td>Ms. Chitra. P. Narayan</td>
    </tr>
    <tr>
      <th scope="row">Criteria-II </th>
      <td>Teaching, Learning & Evaluation (TLE)</td>
      <td>Ms. Lavanya.K </td>
    </tr>
    <tr>
      <th scope="row">Criteria-III   </th>
      <td>Research, Consultancy & Extension (RCE)</td>
      <td>Ms. Veena.R</td>
    </tr>
    <tr>
      <th scope="row">Criteria-IV </th>
      <td>Infrastructure & Learning Resources (ILR)</td>
      <td>Ms. Usha C S, Ms. Anuradha, Mr. Girish H</td>
    </tr>
  
    <tr>
      <th scope="row">Criteria-V      </th>
      <td>Student Support & Progression (SSP)</td>
      <td>Ms. Prabha T V</td>
    </tr>


    <tr>
      <th scope="row">Criteria-VI     </th>
      <td>Governance & Leadership (GL)</td>
      <td>Ms. Usha Rao </td>
    </tr>


    <tr>
      <th scope="row">Criteria-VII      </th>
      <td>Innovative Practices (IP)</td>
      <td>Ms. Swapna S</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default Nacctable;