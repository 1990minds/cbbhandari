import React from 'react';
import styled from 'styled-components'
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import stdc1 from '../../../../images/layouts/Studentsupport/std-cell/stdcell1.jpg'
import stdc2 from '../../../../images/layouts/Studentsupport/std-cell/stdcell2.jpg'
import stdc3 from '../../../../images/layouts/Studentsupport/std-cell/stdcell3.jpg'
import stdc4 from '../../../../images/layouts/Studentsupport/std-cell/stdcell4.jpg'
import stdc5 from '../../../../images/layouts/Studentsupport/std-cell/stdcell5.jpg'
import stdc6 from '../../../../images/layouts/Studentsupport/std-cell/stdcell6.jpg'
import stdc7 from '../../../../images/layouts/Studentsupport/std-cell/stdcell7.jpg'
import stdc8 from '../../../../images/layouts/Studentsupport/std-cell/stdcell8.jpg'

import ant1 from '../../../../images/layouts/Studentsupport/std-cell/Anti ragging 1.jpg'
import ant2 from '../../../../images/layouts/Studentsupport/std-cell/Anti ragging 2.jpg'
import ant3 from '../../../../images/layouts/Studentsupport/std-cell/Anti ragging 3.jpg'


import cons1 from '../../../../images/layouts/Studentsupport/std-cell/Counselling - Group Discussion.jpg'
import cons2 from '../../../../images/layouts/Studentsupport/std-cell/Individual Counselling.jpeg'






import Supportcell from './supportcard'

const stdcelldata = [{

id:1,
title:"EDP",
content:`ED Cell of C.B.Bhandari Jain College aims at manifesting the talent of Entrepreneurial spirit of Young Students.
 Aim is to bridge the gap between the stages where in one seeds in an idea and the stage where one can actually
  implement and it can benefit the present needs of the society.
   The Cell conducts orientation programmes for students to own enterprises.`,
imge:`${stdc1}`,
display:"none"


},{

    id:2,
title:"Well women's cell",
content:"Well women’s cell promotes all round development of women of the Institution and  to enhance the self-esteem and self-confidence of women students, faculty and staff in the college. It helps to promote intellectual and cultural activities for overall personality development of student. it enable women to make informed choices in areas like education, employment and health especially reproductive health. To enhance their participation on an equal footing in all areas. The college has an active Well Women’s Cell where several activities which promote the well-being of Women-be it academic, legal, health or social issues will be organized. The cell was inaugurated by Dr. Asha Benakappa, a leading pediatrician of the city.",
imge:`${stdc2}`,
display:"none"


},{
    id:3,
title:"Anti-ragging cell & Sexual harassment",
content:`The college organized an awareness campaign on “Ragging and discrimination amongst students” as part of activities of the disciplinary and students grievance cell of the college. Ms. Lakshmi N Rao, a participating advocate of the High Court if Karnataka gave a brief talk on how ragging has ruined countless innocent lives and careers. “Ragging” according to the Supreme Court means “doing an act which causes or likely to cause annoyance/insult/fear/apprehension/threat/intimidation/outrage of modesty to a student. The students then gave a powerful mime sequence on how ragging can lower the self-esteem of a student driving him/her to depression and even suicide. This cell is aimed at protecting against physical, verbal abuse and any harassment within and outside the college premise and also to enhance the self defense mechanism and also awareness and knowledge of laws to protect against violence & harassment. The college will ensure that students have maximum information and exposure to face any sort of harassment both physically and legally. The methods to be adopted to create awareness would be given through: 1. Periodical guest lecture from law experts 2. Live presentation and enactment of different case studies 3. Conveying information by showing movies & other reality shows 4. Seminars & workshops by members and other experts`,
imge:`${stdc3}`,
imge2:`${ant1}`,
imge3:`${ant2}`,
imge4:`${ant3}`,
display:"block"



},{

    id:4,
title:"Counseling cell",
content:"The Counseling cell renders unwavering services in the area of guidance and counseling. Its services have been availed of by a number of students, parents and staff of the college. Our counselor MS Apoorva has experienced  In handling issues like interpersonal conflicts (family/friends), relationship management, anger management, emotional disturbances, peer pressure, and value – based conflicts, to name a few. We also provide students with career counseling, aided by assessment techniques, in order to help them to make decisions regarding their careers.",
imge:`${stdc4}`,
imge2:`${cons1}`,
imge3:`${cons2}`,
imge4:`${cons1}`,
display:"block"

},{
    id:5,
title:"Industry information center",
content:"The CB Bhandari Jain College Industrial Information Centre and Skill Development wing of FKCCI was established on Friday, 19th Dec 2014 to expose students to a direct interaction with the professional bodies. The Centre will make all relevant information about corporate sector available to the students, which would help them in their research activities.",
imge:`${stdc5}`,
display:"none"



},{

    id:6,
title:"Incubation center",
content:`The college inaugurated the Incubation Centre on 17th Dec 2014. This is a means of meeting a variety of economic & Socio-economic policy needs, which includes job creation, fostering a community’s entrepreneurial climate, business creation, encouraging women & minority entrepreneurship, identifying potential spin-in spin-out business opportunities or community revitalization. It was inaugurated by Sri S N Rangaprasad, & Sri H N Ramakrishniah, Treasurer KASSIA. Kalam Industry Incubation Centre at the 
college was inaugurated on 23rd October 
2017 by Justice Sathish Hegde to promote 
the vision 2020 of  President Abdul Kalam` ,
imge:`${stdc6}`,
display:"none"



},
{ 
    id:8,
title:" Student Grievance cell ",
content:"The function of the cell is to look into the complaints lodged by any student and judge its merit. The Grievance cell is also empowered to look into matters of harassment. Anyone with a genuine grievance may approach the department members in person, or in consultation with the officer-in-charge Students’ Grievance Cell. In case the person is unwilling to appear in self, grievances may be dropped in writing at the letterbox/ suggestion box of the Grievance Cell at Administrative Block. Grievances may also be sent through e-mail to the officer-in-charge of Students’ Grievance Cell.",
imge:`${stdc8}`,
display:"none"


}]


const getTabs= () =>{

  return  stdcelldata.map((item, index) =>({

title:item.title,
getContent:()=> <Supportcell src={item.imge} img2={item.imge2} img3={item.imge3} img4={item.imge4} display={item.display}  content={item.content} title={item.title}/>,
key: index,
tabClassName: 'tabstdcell',
panelClassName: 'panel pb-0 border-left-0',



    }))

}


const SupportCellinfo = () => {
    return (
        <StdWrap className="container-fluid  my-5">

            <div className="cont">
            
            <Tabs items={getTabs()} showInkBar={true}/>

            </div>

        </StdWrap>
    );
};

const StdWrap = styled.div`

height:100%;

@media(max-width:790px){

height:100%;

    
}

.tabstdcell{

font-size:16px;
text-transform:capitalize;
background-color:#f5f5f5;
border:none;
font-family:var(--HeadFont2)

}

.cont{


margin:auto;
}

.RRT__panel{

    border:1px solid #0073AD;
}
`
export default SupportCellinfo;