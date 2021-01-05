import React, { Component } from 'react';
import {  Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import {Link} from 'gatsby';
import './navbar.css'
import navimg from '../../../images/c.jpg'
import navimg3 from '../../../images/cb.jpg'


import { FaUniversity } from "react-icons/fa";
import Navslide from './navslide'
import Logo from '../../../images/logo.png'

class MainNavbar extends Component {
    render() {
        return (
           <Navbar className="p-0 shadow-sm" bg="white" expand="lg" sticky="top">
            <div className="container">
            <Navbar.Brand ><Link to="/"><img src={Logo} alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className=" lik"  activeClassName="activegatsby" to="/"><FaHome className="" style={{fontSize:"14px", marginTop:"-2px"}} />&nbsp;Home</Link>


               <NavDropdown className="academic " activeClassName="activegatsby" title="Academics" id="basic-nav-dropdown ">

                  <div  className="container-fluid">
                 <h4><FaUniversity/><span>Courses </span>Offered</h4>

                    <div className="row">
                      <div className="col-sm-4 mt-sm-3">
                    <Link className="dropdown-item" activeClassName="activegatsby" to="/academics/puc">PUC</Link>
                      <NavDropdown.Divider />

                    <Link className="dropdown-item" activeClassName="activegatsby" to="/academics/degree">Degree</Link>
                  <NavDropdown.Divider />

                <Link className="dropdown-item" activeClassName="activegatsby" to="/academics/postgraduate">Post graduate</Link>
                  <NavDropdown.Divider />

                 <Link className="dropdown-item" activeClassName="activegatsby" to="/academics/admissions">Admissions</Link>
                  <NavDropdown.Divider />


                      </div>
                      <div className="col-sm-5 mt-sm-3">
                   

              <Link className="dropdown-item"  activeClassName="activegatsby" to="/academics/certificate-courses">Certificates and Courses</Link>
                  <NavDropdown.Divider />

                 <Link  className="dropdown-item" activeClassName="activegatsby" to="/academics/achievements">Achievements</Link>
                  <NavDropdown.Divider />

               <Link className="dropdown-item" activeClassName="activegatsby" to="/academics/collaborations">Collaborations</Link>
                  <NavDropdown.Divider />


                        
                      </div>
                      <div className="col-sm-3 imgcontainer mt-sm-6">
<div className="imgcontent  ">
          <img  className = "img-thumbnail" src={navimg3} width="100%" alt="navimg" />
           
        
           
                </div>        
                      </div>
                    </div>
                  </div>




                 
                </NavDropdown>

{/* About Navbar */}

                <NavDropdown className="about"  title="About" id="basic-nav-dropdown">


     <Link className="dropdown-item" activeClassName="activegatsby" to="/aboutus/management">Management Profile</Link>
        <NavDropdown.Divider />

<Link className="dropdown-item" activeClassName="activegatsby" to="/aboutus/faculty-profile">Faculty Profile</Link>
        <NavDropdown.Divider />
        

       <Link  className="dropdown-item" activeClassName="activegatsby" to="/aboutus/library-info">Library information</Link>
       <NavDropdown.Divider />


       <Link className="dropdown-item" activeClassName="activegatsby" to="/aboutus/gallery/"> Gallery</Link>


      </NavDropdown>
      
{/* Student support Navbar */}

      <NavDropdown className="support" title="Student Suppport" id="basic-nav-dropdown">

<div className="container">
<h4><FaUniversity/><span>Student</span> Support</h4>

  <div className="row" style={{height:"300px", overflow:"hidden"}}>
    
    <div className="col-sm-2 mt-sm-5">

    <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/support-cell">Support Cell</Link>
        
        <NavDropdown.Divider />

       <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/students-w-clulbs">Students wings & Club</Link>
        <NavDropdown.Divider />

        
       <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/scholarships">Scholarship</Link>
       <NavDropdown.Divider />

       <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/managementform/">Management Forum</Link>

    </div>
    <div className="col-sm-2 mt-sm-5">
  
      

        
     <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/placementpage/">Placements</Link>
        <NavDropdown.Divider />
        <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/alumniassociation">Alumni Associations</Link>
        <NavDropdown.Divider />

       <Link className="dropdown-item"  activeClassName="activegatsby" to="/studentsupport/lectureNotes">Lecture Notes</Link>
       <NavDropdown.Divider />

       <Link className="dropdown-item"  activeClassName="activegatsby" to="/studentsupport/commerceform/">Commerce Forum</Link>
    </div>
    <div className="col-sm-2 mt-sm-5">

  
        <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/mentorship">Mentorship</Link>
              <NavDropdown.Divider />

    </div>
    <div className="col-sm-6">

      <img src={navimg} alt="dfdf"  width="100%" />
</div>

  </div>
</div>




      </NavDropdown>













{/* campuslife */}

                <NavDropdown className="campuslife" title="Campuslife" id="basic-nav-dropdown">
               
                <div className="container-fluid">
                 <h4><FaUniversity/><span>Campus Facility</span> /Amenities</h4>


                    <div className="row">
                  

                      <div className="col-sm-2  mt-sm-5">
                     <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/labs/businesslab">Business lab</Link>
                      <NavDropdown.Divider />

                     <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/labs/commercelab">Commerce lab</Link>
                  <NavDropdown.Divider />

                <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/labs/ict-centers">ICT centers</Link>
                  <NavDropdown.Divider />

                
                  <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/fest/intercollegefest/">Intercollege fest</Link>


                      </div>
                      <div className="col-sm-2 mt-sm-5">
                     

             <Link className="dropdown-item"  activeClassName="activegatsby" to="/campuslife/hall/seminaerhall/">Seminar Hall</Link>
                  <NavDropdown.Divider />

                 <Link className="dropdown-item"  activeClassName="activegatsby" to="/campuslife/fest/celebrations/">Celebrations</Link>
                  <NavDropdown.Divider />

                  <Link className="dropdown-item"  activeClassName="activegatsby" to="/campuslife/fest/industrial-visit/">Industrial Visit</Link>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/amusement/auditorium">Auditorium</Link>

                {/* <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/amusement/womenslounge">Women's Lounge </Link> */}

                        
                      </div>


                      <div className="col-sm-2 mt-sm-5">
                     

                        
       
                        <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/amusement/gym">Gym</Link>
                         <NavDropdown.Divider />
       
                     <Link className="dropdown-item"  activeClassName="activegatsby" to="/campuslife/amusement/sportsroom"> Rooms Facility</Link>
                         <NavDropdown.Divider />

                        <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/amusement/infirmary/">Infirmary</Link>
       <NavDropdown.Divider />
                        <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/hall/conferencehall/">Conference Hall</Link>

                               
                             </div>

                             <div className="col-sm-2 mt-sm-5">
                     
                  
                 <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/amusement/cafeteria/">Cafeteria</Link>
              <NavDropdown.Divider />
       
                     
                 <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/fest/tours-excursion/">Tours and Excursion</Link>
                  <NavDropdown.Divider /> 
                
                 <Link className="dropdown-item" activeClassName="activegatsby" to="/studentsupport/std-club/">Student Unions</Link>
                 <NavDropdown.Divider />              

                
                 <Link className="dropdown-item" activeClassName="activegatsby" to="/campuslife/policy/">Policies & Procedures </Link>
                             </div>



                  


                     <div className="col-sm-4 mt-sm-1 " style={{overflow:"hidden", width:"500px"}}>

                       <Navslide/>

                       {/* <img src="https://image.freepik.com/free-photo/female-student-holding-walking-outdoor-park_53419-8375.jpg" alt="gjghj" width="100%"/> */}
                       </div>
             
                     
                    </div>
                  </div>
               
               
               
               
               
               
               
               
               
                </NavDropdown>


               <Link className=" lik"  activeClassName="activegatsby" to="/cbbjiqac">NAAC</Link>


              </Nav>
           
            </Navbar.Collapse>
            </div>
          </Navbar>
        );
    }
}


export default MainNavbar;