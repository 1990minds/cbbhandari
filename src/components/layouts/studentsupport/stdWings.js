import React from 'react';
import {Text, Heading } from '../../utils/heading';
import nss1 from '../../../images/layouts/Studentsupport/std-wings/nss1.jpg'
import nss2 from '../../../images/layouts/Studentsupport/std-wings/red-cross.jpg'
import nss3 from '../../../images/actvity 2019-20/nss-redcross.jpg'
import nss4 from '../../../images/actvity 2019-20/nss-redcross-2.jpg'
import nss5 from '../../../images/actvity 2019-20/yuth-seva.jpg'

import {youth, NSSunit} from '../../global/tables/tabledata'
import Tablemanagement from '../../global/tables/table'


const Mforum = () => {


let StdWdata = `

In addition to this, the college has been introducing several extra-curricular & co-curricular activities under NSS Unit & ‘Eco Club’. This year the college has also started a youth wing of the Indian Red Cross Society. The NSS activities & Red Cross Society youth wing activities were inaugurated in August this year.
`;


    return (
        <div className="container my-5 py-4">   

            <div className="row">
                <div className="col-sm-6">
                <img className="mt-4 pt-2" src={nss1} width="100%" alt="ffdf" />


                </div>
                <div className="col-sm-6">
                <img className="mt-4 pt-2" src={nss2} width="100%" alt="ffdf" />



                </div>

              
    
            </div>



            <div className="row">
                <div className="col-sm-6 mt-5">

          <Text className="p-3 "   text={StdWdata}/>
      
          <Tablemanagement data={youth} title="Youth Seva 2019-20 "/>


                </div>
                <div className="col-sm-6 mt-sm-5">
                <Tablemanagement data={NSSunit} title="Activities of the NSS Unit and Red Cross Society youth wing during 2019-20 "/>
                </div>

              
    
            </div>



        </div>
    );
};

export default Mforum;