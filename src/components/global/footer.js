import React from 'react';
import Form from './footerform'
import styled from 'styled-components'
import { FaEnvelope, FaCaretDown } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";

import {Link} from 'gatsby'
import rec1 from '../../images/Recent Events/recentevent (1).jpg'
import rec2 from '../../images/layouts/Gallery/NSS/ns (5).jpg'
import rec3 from '../../images/layouts/Gallery/IC/independence day _4.jpg'


const EventData = [{

id:1,
eventcontent:"National Conference 2019",
eventimg:`${rec1}`

},{

    id:2,
eventcontent:"NSS Camp 2019 ",
eventimg:`${rec2}`
},{

    id:3,
eventcontent:"Independence day 2019",
eventimg:`${rec3}`
}]


const Footer = () => {
    return (
        <FooterWrap className=" container-fluid px-0 py-5">
            
            <div className="container">

<div className="row pt-5">
    <div className="col-sm-3">

<h4>Quik Links <FaCaretDown /></h4>
<hr/>
<ul>

    <li><Link to="/aboutus/faculty-profile/" className="text-secondary" activeStyle={{color:"white"}}>Faculty Profile</Link></li>
    <li><Link to="/aboutus/gallery/" className="text-secondary" activeStyle={{color:"grey"}}>Gallery</Link></li>
    <li><Link to="/studentsupport/placementpage/" className="text-secondary" activeStyle={{color:"grey"}}>Placements</Link></li>
    <li><Link to="/academics/degree" className="text-secondary" activeStyle={{color:"grey"}} >Degree</Link></li>

</ul>

    </div>

    <div className="col-sm-4">
    <h4>Address <MdAddLocation/></h4>
    <hr/>
   <p className="text-secondary">#84, K.R. Road, Shankarpuram,<br/>
    Bangalore - 560 004.<br/>

Phone: 080 - 2661 1924</p> 
   
    </div>
    <div className="col-sm-5">
<h4>Quick Contact <FaEnvelope/></h4>
<hr/>
<Form display="none"/>

    </div>
</div>

            </div>



        </FooterWrap>
    );
};


const FooterWrap = styled.div`

background-color:var(--AccentColor2);
.container ul {

    li{
        color: #8f9296ba;

        list-style:none;
    }
}
h4{

    color:#f5f5f5;
    opacity: 0.5;
    font-size:20px;

    svg{

        font-size:14px;
        opacity:0.4;
    }
}

h6{

    color: #8f9296ba;

}

.event img{

    width:100%;
    height:80px;

    display:block;


}

.form-control{

    background-color:rgba(0, 0, 0, 0.14);
    border:none;

    
}


`
export default Footer;