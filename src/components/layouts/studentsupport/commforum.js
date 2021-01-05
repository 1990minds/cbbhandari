import React from 'react';
import {Text } from '../../utils/heading';
import cfimg  from '../../../images/layouts/Gallery/CF/cf (2).jpg'
import {Commerce} from '../../global/tables/tabledata'
import Tablemanagement from '../../global/tables/table';

const Commforum = () => {
    return (
        <div className="container my-5 py-4">
            <div className="row">
                <div className="col-sm-12">

<Text  className="py-3" text="The main aim of the Forum is to carry out all Extra Curricular activities of B.Com students. It consists of a good team of young and dynamic students to carry out the Forum’s Goals."/>

                </div>
                <div className="col-sm-6">

                <img className=" pt-2" src={cfimg} width="100%" alt="ffdf" />

                </div>
                <div className="col-sm-6">
               <Tablemanagement data={Commerce} title="Activities of the Commerce Forum during 2019-20  "/>

                </div>

            </div>
        </div>
    );
};

export default Commforum;