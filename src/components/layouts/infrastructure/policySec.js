import React from 'react';
import { Heading, Text} from '../../utils/heading';
import styled from 'styled-components'
import bs1 from '../../../images/layouts/infrastructure/comlab1.jpg'
import bs2 from '../../../images/layouts/infrastructure/comlab2.jpg'
import bs3 from '../../../images/layouts/infrastructure/comlab3.jpg'
import bs4 from '../../../images/layouts/infrastructure/comlab4.jpg'

import clb from '../../../images/layouts/policy/computer lab/lab pictures.jpg'

import sp1 from '../../../images/layouts/policy/sports/SPORTS1.jpg'
import sp2 from '../../../images/layouts/policy/sports/SPORTS2.jpg'

import cls2 from '../../../images/layouts/policy/classrooms/Picture5.jpg'
import cls3 from '../../../images/layouts/policy/classrooms/Picture3.jpg'
import cls4 from '../../../images/layouts/policy/classrooms/Picture4.jpg'
import cls5 from '../../../images/layouts/policy/classrooms/Picture6.jpg'

import lib1 from '../../../images/layouts/policy/lib/lib (1).jpg'
import lib2 from '../../../images/layouts/policy/lib/lib (6).jpg'
import lib3 from '../../../images/layouts/policy/lib/lib (3).jpg'
import lib4 from '../../../images/layouts/policy/lib/lib (4).jpg'
import lib5 from '../../../images/layouts/policy/lib/lib (5).jpg'
import lib6 from '../../../images/layouts/policy/lib/lib (2).jpg'

import { FaFilePdf } from "react-icons/fa";
import Procedure_policy from '../../../images/pdf/iqac/Procedures and policies for maintaining and utilizing physical, academic and support facilities.pdf'






const policySec = () => {

    let policydata = [{

        title:"Computer Lab:",
        text:`A well-equipped computer lab, with LCD projector, UPS Back-up is available which is used for facilitating students to lean practical approach to subjects like E-Business Accounting, Computer Application in Business and so on. The students are encouraged to give power point presentations on various topics in Computer Lab.`,
        images:[`${clb}`],

      

    },
    {

        title:"Business Lab: ",
        text:`The college has Business lab used for imparting practical to Students wherein Business documents (Virtual / Actual) were displayed to reduce the gap between Campus and Corporate world. The Students under the supervision of faculties go through annual reports of different companies, forms like Income tax returns, PAN, Agreement of Hire purchase/ Instalment purchase, Bye-Laws of co-operative society , charts related to different aspects of Business and vouchers used in daily life etc.,. are shown to students for practical knowledge.
        `,
        images:[`${bs1}`,`${bs2}`,`${bs3}`,`${bs4}`],

     

    },
    {

        title:"Sports: ",
        text:`Sports complex(Sree Kanteerava Stadium which is multi-purpose stadium) is extended to the college facilitating Students activities related to outdoor games like throw ball ,volleyball, shuttlecock, tennikoit. Indoor games are played in the College campus in Sports room like Carrom, Table tennis, chess etc.,  `,
        images:[`${sp1}`,`${sp2}`],
      

    },
    {

        title:"Library: ",
        text:`Library is equipped with 8500 books along with Journals, News Papers and Previous Question Paper along with General competitive books, facilitating students’ overall development.
        `,
        images:[`${lib1}`,`${lib2}`,`${lib3}`,`${lib4}`,`${lib5}`,`${lib6}`],
        
    },
    {

        title:"Class Room: ",
        text:`8 Class rooms are marked for teaching languages and other subjects. Each Class room is equipped with green board, whiteboard, LCD projector, computer system , accommodating 60+ Students with enough ventilation.   `,
        images:[`${cls5}`,`${cls2}`,`${cls3}`,`${cls4}`],
        
    }]
    return (
        <PolicyWrap className="container my-5">
<Heading />
<div className="container">
<div className="row">
    <div className="col-sm-3">
    <div class="card" style={{width: "100%"}}>
<FaFilePdf id="pdf"/>
<div class="card-body">
<p class="card-title text-center">Procedures and policies for maintaining and utilizing physical, academic and support facilities</p>
<a href={Procedure_policy} target="new_tab" id="pdfanchr" class="btn btn-primary " >Download</a>
</div>
</div>
</div>
</div>
</div>

{
  policydata.map((item, index)=>{
  return(<>
  
  <div className="policy my-5" key={index}>

<h3>{item.title}</h3>
<Text className="mb-3" text={item.text}/>

<div className="row">
{
    item.images.map((imge, index)=>{

return <div key={index} className="col-sm-6"><img  src={imge} alt="1" width="100%" height="100%" />  </div>

    })
}
  
  
</div>

</div>
  
  
  </>)
    

  })  
}

            
        </PolicyWrap>
    );
};

const PolicyWrap = styled.div`

#pdf{

font-size:100px;
color:#DC3545;
text-align:center;
display:block;
margin:auto;
padding:10px;

}


#pdfanchr{

    display:block;
margin:auto;


}

`
export default policySec;