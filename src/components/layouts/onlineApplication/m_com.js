import React from 'react'
import {Heading, Text} from '../../utils/heading';
import styled from 'styled-components'
import {  Form, Button , Card, ListGroup} from 'react-bootstrap';

export default class Mcom extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: "",
          loading:true
        };
      }

      render() {
        const { 
          
          status,
          loading
        
        
        } = this.state;
        return (
                 <div>
            <AWrap className="container " >
            <div className=" py-4 ">

                <Form   onSubmit={this.submitForm}
        
                action="https://formspree.io/xqkdjzrg"
        
                method="POST">
        
                {status === "ERROR" && <div class="alert alert-danger" role="alert">
                Error !
                </div>}
                    <Heading className="ahead mt-3 mb-4" title="Personal Details"/> 


            <div className="row"> 
                    <div className="col-sm-6">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="name" placeholder="Name of the Applicant" required />
                    </Form.Group>
                    </div>
                
            </div>

            <div className="row"> 
               
                    <div className="col-sm-6">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Father’s / Guardian’s Name" placeholder="Father’s / Guardian’s Name" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-6">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Mother’s Name" placeholder="Mother’s Name" required />
                    </Form.Group>
                    </div>
            </div>

            <div className="row"> 
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="DOB" placeholder="Date of Birth (dd/mm/yyyy)" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">

                    <Form.Group controlId="exampleForm.ControlSelect1" style={{display:this.props.display}}>
                        <Form.Control as="select"  placeholder="Gender" name="Gender">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                        </Form.Control>
                    </Form.Group>
      

                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Blood Group" placeholder="Blood Group" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Aadhaar No" maxlength="12" pattern="[0-9]{12}" title="12 digits number" placeholder="Aadhaar No" required />
                    </Form.Group>
                    </div>
            </div>

            <div className="row"> 
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Nationality" placeholder="Nationality" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Religion" placeholder="Religion" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Caste" placeholder="Caste" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Category" placeholder="Category" required />
                    </Form.Group>
                    </div>
            </div>

 
            <div className="row"> 

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Annual Family Income" placeholder="Annual Family Income" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Rural / Urban" placeholder="Rural / Urban" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Admission Quota" placeholder="Admission Quota" required />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Medium" placeholder="Medium" required />
                    </Form.Group>
                    </div>
            </div>

   <Heading className="ahead mt-5 mb-4" title="Communication Details"/> 
           
            <div className="row">   

                    <div className="col-sm-6">
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Control as="textarea" name="Permanent Address" placeholder="Permanent Address" rows="3" required/>
                    </Form.Group>
                    </div>

                    <div className="col-sm-6">
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Control as="textarea" name="Communication Address" placeholder="Communication Address" rows="3" required/>
                    </Form.Group>
                    </div>
                                  
            </div>

            <div className="row">   
          
                <div className="col-sm-6">
                  <Form.Group controlId="formBasicEmail">
                 <Form.Control type="email"  name="E-­mail Address" placeholder="E­-mail Address" required  />
                 <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>
               </div>

               <div className="col-sm-6">
                         <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Student Type" placeholder="Student Type (Karnataka / Non Karnataka)" required  />
                        </Form.Group>                                       
                    </div>

            </div>
                    
            <div className="row">          

                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Mobile No." maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Mobile No." required  />
                        </Form.Group>
                    </div>

                    <div className="col-sm-4">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Contact No." maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Contact No." required  />
                        </Form.Group>
                    </div>

                    <div className="col-sm-4">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Parents Mobile No." maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Parents Mobile No." required  />
                        </Form.Group>
                    </div>

                 

            </div>

    <Heading className="ahead mt-5 mb-4" title="Qualifying Examination Details"/> 

            <div className="row">   

                    <div className="col-sm-6">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="Name of the Class" 
                        placeholder="Name of the Class / College / Address qualifying examination last studied" rows="3" required/>
                    </Form.Group>
                    </div>

                    <div className="col-sm-6">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="Name of the board" 
                        placeholder="Name of the board / University last studied" rows="3" required/>
                    </Form.Group>
                    </div>
                                            
             </div>

             <div className="row">   
                        <div className="col-sm-6">
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Reg. No." placeholder="Reg. No." required  />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Month & Year" placeholder="Month & Year" required  />
                            </Form.Group>
                        </div>                 
                                        
               
                       
                        <div className="col-sm-4">
                             <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" name="Max. Marks" placeholder="Max. Marks" required  />
                            </Form.Group>                          
                        </div>

                        <div className="col-sm-4">
                              <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" name="Marks Obtained" placeholder="Marks Obtained" required  />
                              </Form.Group> 
                        </div>

                        <div className="col-sm-4">
                                <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" name="Percentage" placeholder="Percentage" required  />
                                </Form.Group>    
                        </div>
                                        
                <p className="mb-3 col-sm-12 mt-3 ">Details of the marks obtained in all the optional subjects in qualifying Degree Examination</p>
                </div>

            <div class="row ">
              
              <div className="col-sm-12 mt-2" >
              <Form.Label>Sem I / Year</Form.Label>
              </div>

                  <div className="col-sm-4 ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 1 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 1 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 1 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 1 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Sem II / Year</Form.Label>
                 </div>


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 2 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 2 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 2 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 2 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 


                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Sem III / Year</Form.Label>
                 </div>


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 3 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 3 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 3 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 3 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Sem IV / Year</Form.Label>
                 </div>


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 4 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 4 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 4 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 4 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Sem V / Year</Form.Label>
                 </div>


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 5 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 5 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 5 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 5 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Sem VI / Year</Form.Label>
                 </div>


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 6 Subject 1" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 1 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 1 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}


                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 6 Subject 2" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 2 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 2 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  {/* <div className="col-sm-2 mt-2" >
                 </div> */}

                  <div className="col-sm-4">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" name="Sem 6 Subject 3" placeholder="Subject" />
                      </Form.Group>
                  </div>  
                  <div className="col-sm-3">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 3 Max. Marks" placeholder="Max. Marks" />
                      </Form.Group>
                  </div> 
                  <div className="col-sm-3    ">
                      <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" name="Sem 6 Subject 3 Marks obtained" placeholder="Marks obtained" />
                      </Form.Group>
                  </div> 

                  <div className="col-sm-12 mt-2" >
                  <Form.Label>Total Marks and Percentage</Form.Label>
                 </div>

                  <div className="col-sm-4  mt-2">
                             <Form.Label>Total Marks:</Form.Label>
                    </div>  
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Total Max. Marks" placeholder="Total Max. Marks"required />
                        </Form.Group>
                    </div> 
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Total Marks obtained" placeholder="Total Marks obtained" required />
                        </Form.Group>
                    </div> 


                    <div className="col-sm-4 mt-2" >
                              <Form.Label>Percentage:</Form.Label>
                    </div>  
                    <div className="col-sm-3">  </div> 
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Percentage " placeholder="Percentage" required />
                        </Form.Group>
                    </div> 
                  </div>




   <Heading className="ahead mt-5 mb-4" title="Documents Check List"/> 

                <div className="row px-3 ">   
                       
                       <div className="col-sm-12 pb-3">
                       <Form.Check custom type="checkbox"  id="1" name="SSLC Marks Card" label="SSLC Marks Card" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="2" name="P.U.C. Marks Card" label="Qualifying Examination Marks Card (P.U.C. / equivalent exam)" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="3" name="Transfer Certificate" label="Transfer Certificate" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="4" name="Degree Marks Card" label="Degree / Qualifying Examination Marks Card" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="5" name="Eligibility Certificate" label="Eligibility Certificate" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="6" name="Aadhaar Upload" label="Aadhaar Upload" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="7" name="Caste Certificate" label="Caste Certificate" />
                       </div>

                       <div className="col-sm-12 pb-3">
                     <Form.Check custom type="checkbox" id="8" name="Income Certificate" label="Income Certificate" />
                       </div>

                       <div className="col-sm-2 ">
                     <Form.Check custom type="checkbox" id="9" name="Others Certificate" label="Others -" />                  
                       </div>

                       <div className="col-sm-4 ">
                       <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" size="sm" name="Specified Certificate" placeholder="Specify"  />
                       </Form.Group>  
                       </div>

                           
               </div>


<Heading className="ahead mt-5 mb-4" title="Terms and Conditions"/> 

                <Card style={{ width: '100%' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>C.B.B.J.C. has the sole discretion to alter or change the venue of test center, dates of written test, group discussion, 
                    personal interview and pattern of the admission process without any prior notice or approval.</ListGroup.Item>

                <ListGroup.Item>Payment of fees should be made on or before the prescribed date notified by the authorities, failing which admission will be forfeited.</ListGroup.Item>

                <ListGroup.Item>Amount once paid towards admission/programme fees is neither refundable nor transferable under any circumstances.</ListGroup.Item>

                <ListGroup.Item>All candidates are required and expected to follow the code of conduct, rules and regulations in force from time to time.</ListGroup.Item>
               
                <ListGroup.Item> Any act of academic dishonesty, misconduct, indiscipline, violence or damage caused to people / property of C.B.B.J.C. will be 
                    construed as an offence against the College and student will be debarred from further studies at C.B.B.J.C.</ListGroup.Item>

                <ListGroup.Item>The candidate must fulfill all academic requirements notified by the authorities from time to time.</ListGroup.Item>

                <ListGroup.Item>It is the applicant’s responsibility to go through the details of the program, specializations offered, university details, 
                    minimum eligibility etc. before applying to C.B.B.J.C.</ListGroup.Item>

                <ListGroup.Item>C.B.B.J.C. is no way responsible if the eligibility of the candidate is not considered by the University for reasons whatsoever</ListGroup.Item>
     
                <ListGroup.Item>C.B.B.J.C. reserves the right to modity / add / delete to the contents of the program / value added programs /
                     specializations and their delivery modes.</ListGroup.Item>

                <ListGroup.Item>Misleading information or misrepresented facts will disqualify the applicant from admissions into C.B.B.J.C.</ListGroup.Item>

                <ListGroup.Item>C.B.B.J.C. reserves the right to amend the rules. </ListGroup.Item>
     
                <ListGroup.Item>In case of discontinuation of course in between under any circumstances the student will have to pay the full semester fees.</ListGroup.Item>
                
                <ListGroup.Item> Submission of originals is must on confirmation of admission. </ListGroup.Item>   

                <ListGroup.Item>Jurisdiction for all disputes (if any) relating to the C.B.B.J.C. is Bangalore, Karnataka, India.</ListGroup.Item>       
   
            </ListGroup>
            </Card>

            {/* <div className="mt-4"> 
    <Form.Group>
        <Form.Check  custom type="checkbox" required label="I have read the rules and regulations specified in the prospectus for my admission to this institution
                                                and will strictly adhere to the same. I promise to abide by the dicisions taken by the authorities." 
             feedback="You must agree before submitting."
        />
      </Form.Group>
      </div> */}
      
          {status === "SUCCESS" ? <div class="alert alert-success mt-5" role="alert">
          Thank you we will contact you shortly.
                 </div> :<div  className="mt-5 mb-5" style={{textAlign:'center'}}> <Button variant="primary" disabled={loading? false : true} type="submit">
              {loading === true ? "Submit": "Sending..."}
          </Button> </div> }
        </Form>



          </div>
           </AWrap>
            

        </div>
        
    );
}

submitForm(ev) {
    ev.preventDefault();

    this.setState({loading:false})
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({  status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

const AWrap = styled.div`

.ahead{
    color: white;
    font-size:23px;
    background-color:var(--AccentColor3);
    padding: 2px 20px;
    border-radius: 7px;
}

.text{
  color: #6C757D;
}

`