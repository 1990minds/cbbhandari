import React from 'react';
import Interweave from 'interweave';
import {Text, Heading} from '../../utils/heading'
import lib2 from '../../../images/layouts/library/lib2.jpg'
import lib3 from '../../../images/layouts/library/lib3.jpg'
import lib4 from '../../../images/layouts/library/lib4.jpg'
import lib5 from '../../../images/layouts/library/lib5.jpg'
const Libfacility = () => {

    let tcontent = `Students may borrow books during working hours at the library circulation counter. A student can borrow two books. One book for a period of one week from week card and one more book for overnight from reference card. The same borrowed book will be renewed if no reservations on the item indicated. CD’s and journals, magazines will be issued on demand by the user for a period of maximum 3 days.
    Books and journals placed on reserve by the library staff are not issued out, but only for reference. The library materials like dictionaries, encyclopedias, reference books, project reports may not be issued without special permission.
    Fine will be charged on late return of books, one rupee per day will be charged for late submission for the students.`


let LibraryData = [{

    id:1,
    content:`Collection
    Books : 6400<br/>
    Periodicals: 20<br/>
    Newspapers: 10<br/>
    Magazines: 10<br/>
    CD’s: 50<br/>
    Maps: 10`,
    imge:"",
    display:"none",
    box:"border-box"


},
{

    id:2,
    content:"",
    imge:`${lib2}`,
    display:"block"


},
{

    id:3,
    content:`<b>Facilities: </b>
    The library allows access to printed resources like books, magazines, journals, encyclopedias and the internet, Wi-Fi facility.
    Reading room, discussion room and self study cubicles exclusively for faculty and students.`,
    imge:"",
    box:"border-box",

    display:"none"

},
{

    id:4,
    content:"",
    imge:`${lib3}`,
    display:"block"

},
{

    id:5,
    content:`<b>Reprographic facility</b>
    Display of newspaper clippings on current topics and career, book bank facility for economically backward students and SC/ST students, a notice board for information display and notification, competitive exam material, subscription of newspapers, magazines and journals.`,
    imge:"",
    display:"none",
    box:"border-box"

},
{

    id:6,
    content:"",
    imge:`${lib3}`,
    display:"block"
}
]


let tdata = [{

    id:1,
    cont:`Library Advisory Committee
    Chairperson – Principal, Prof. Asha Ganesh
    Secretary – Librarian, S.Anuradha
    Members – Ms. Prabha T V & Ms.Lavanya K
    
    Student Represntavies of B.Com and BBA`,
    dplay:"none"


},{

    id:2,
    imge:`${lib4}`,
    dplay:"block"


},{
    id:3,
    cont:`The library is considered as the heart of any educational institute. It pumps knowledge and keeps the rain ticking with its constant supply of information. Those who make optimum use of the library invariably succeed in life. This year we are proud to announce the winning of this award that has availed of the library resources to the fullest in their 3 years at CBBJC.
    The winners are:
    Miss. Manasi konkaria – III B.com and Miss. Nikita – III BBM`,
    dplay:"none"

}]


    return (
        <div className="container" >
            <img className="p-sm-5 " width="100%" src={lib5} alt="dfgdfg"/>
<div className="row">
    {

LibraryData.map(item=>{

return <div key={item.id} className="col-sm-4 p-3 bg-light " style={{boxSizing:item.box}}>
<div className="contentlfc  text-center" >
<Text className="text-center mt-3" text={<Interweave content={item.content} />}/>
<img src={item.imge} alt="sdasd" style={{display:item.display}} className="w-100 h-100"/>
</div>

</div>

})  
    }
    
</div>

<Heading className="text-center pt-5" title="Circulation system"/>
<hr/>
<Text className="text-center" text={tcontent}/>

<div className="row">
    {
        tdata.map(item =>{

            return(<>
            
             <div className="col-sm-4 mt-5 border border-light bg-light">


                 <Text text={item.cont} className="text-center"/>
                 <img src={item.imge} alt="" style={{display:item.dplay}} className="w-100 h-100 border-0"/>
             </div>
            
            
            </>)    

        })
    }
</div>

        </div>
    );
};

export default Libfacility;