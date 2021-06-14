import React from 'react'
import {Heading, Text} from '../../utils/heading';
import styled from 'styled-components'
import {  Form, Button , Card, ListGroup} from 'react-bootstrap';

export default class PU extends React.Component {

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
                        <div className="col-sm-8">
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Student name" placeholder="Name of the Student ( as per SSLC Marks Card )" required />
                        </Form.Group>
                        </div>
                    
                </div>

                <div className="row"> 
                
                <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="DOB" placeholder="Date of Birth (dd/mm/yyyy)" required />
                        </Form.Group>
                </div>

                <div className="col-sm-4">
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" name="place of birth" placeholder="Place of Birth - District / State" required />
                </Form.Group>
                </div>

                <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" name="Gender" placeholder="Gender" required />
                    </Form.Group>
                </div>


                        <div className="col-sm-4">
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Caste" placeholder="Caste" required />
                        </Form.Group>
                        </div>

                        <div className="col-sm-4">
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Religion" placeholder="Religion" required />
                        </Form.Group>
                        </div>
                
                        <div className="col-sm-4">
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Nationality" placeholder="Nationality" required />
                        </Form.Group>
                        </div>
                </div>

                <div className="mb-4 mt-1 "> 

                <p className="mb-3">Please select the relevant group :</p>

                <div key='1' className="row px-4 text">  
                        <div className="col-sm-3 pb-3">
                        <Form.Check custom type="radio"  value="Category - 2A"  id='Category - 2A' name="Category" label="Category - 2A" />
                        </div>
                        
                        <div className="col-sm-3 pb-3">
                        <Form.Check custom type="radio" value="Category - 3A" id='Category - 3A' name="Category" label="Category - 3A" />
                        </div>

                        <div className="col-sm-3 pb-3">
                        <Form.Check custom type="radio" value="GM - 4" id='GM -4' name="Category" label="GM - 4" />
                        </div>

                        <div className="col-sm-3 pb-3">
                        <Form.Check custom type="radio" value="SC" id='SC' name="Category" label="SC" />
                        </div>

                        <div className="col-sm-3 ">
                        <Form.Check custom type="radio" value="Category - 2B" id='Category - 2B' name="Category" label="Category - 2B" />
                        </div>

                        <div className="col-sm-3 ">
                        <Form.Check custom type="radio" value="Category - 3B" id='Category - 3B' name="Category" label="Category - 3B" />
                        </div>

                        <div className="col-sm-3 ">
                        <Form.Check custom type="radio" value="CAT - 1" id='CAT - 1' name="Category" label="CAT - 1" />
                        </div>

                        <div className="col-sm-3 ">
                        <Form.Check custom type="radio" value="ST" id='ST' name="Category" label="ST" />
                        </div>        
                            
                </div>
                </div>


                <div className="row"> 
                        
                        <div className="col-sm-6">
                                <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Name of the Father" placeholder="Name of the Father (as per SSLC Marks Card)" required />
                            </Form.Group>
                        </div>

                        <div className="col-sm-6">
                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Name of the Mother" placeholder="Name of the Mother (as per SSLC Marks Card)" required />
                        </Form.Group>
                        </div>
                    

                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Occupation of the Father" placeholder="Occupation of the Father" required />
                    </Form.Group>
                    </div>
                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Occupation of the Mother" placeholder="Occupation of the Mother" required />
                    </Form.Group>
                    </div>
                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="Total annual income" placeholder="Total Annual Income" required />
                    </Form.Group>
                    </div>
                </div>

  
                <Heading className="ahead mt-5 mb-4" title="Communication Details"/> 

                    <div className="row my-0">   

                            <div className="col-sm-8">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name="Local residential address" placeholder="Local residential address" rows="3" required/>
                            </Form.Group>
                            </div>

                            <div className="col-sm-4">
                                <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Phone No."  maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Phone No." required  />
                                </Form.Group>
                            </div>                 
                    </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name="Permanent address" placeholder="Permanent address" rows="3" required/>
                            </Form.Group>
                            </div>


                            <div className="col-sm-4">
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email"  name="E­mail Address" placeholder="E­mail Address" required  />
                                <Form.Text className="text-muted"> </Form.Text>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text"  name="Aadhar Number" maxlength="12" pattern="[0-9]{12}" title="12 digits number" placeholder="Aadhar Number" required  />
                                <Form.Text className="text-muted"> </Form.Text>
                                </Form.Group>
                            </div>

                            <div className="col-sm-4">
                                <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Student Mobile No." maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Student Mobile No." required  />
                                </Form.Group>
                            </div>
                            <div className="col-sm-4">
                                <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Parent Mobile No." maxlength="10" pattern="[0-9]{10}" title="10 digits number" placeholder="Parent Mobile No." required  />
                                </Form.Group>
                            </div>

                        
                    </div>
   

            <div className="row"> 
                    
                    <div className="col-sm-12">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="Office address" placeholder="Office address" rows="2" required/>
                        </Form.Group>
                    </div>
          </div> 
       

          <div key='2' className="row text">  
                    <div className="col-sm-2 mt-2">
                    <Form.Check custom type="radio" value="APL Card"  id='APL Card' name="Card" label="APL Card " />  
                    </div>
                    
                    <div className="col-sm-2 mt-2 ">
                    <Form.Check custom type="radio" value="BPL Card" id='BPL Card' name="Card" label="BPL Card " />  
                    </div>

                    <div className="col-sm-4 ">
                       <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Card Number" placeholder="Card Number" required />
                       </Form.Group>  
                       </div>
          </div> 

      <Heading className="ahead mt-5 mb-4" title="Qualifying Examination Details"/> 

                     <div className="row">   
                             <div className="col-sm-12">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name="Name and Address of previous School" 
                                placeholder="Name and Address of previous School" rows="2" required/>
                             </Form.Group>
                            </div>     

                            <p className="mb-3 col-sm-12 mt-2 ">Particulars of previous Examination passed and number of attempts made: </p>

                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Month" 
                                placeholder="Month "required />
                          </Form.Group>
                    </div>
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Year" placeholder="Year"required />
                        </Form.Group>
                    </div>     
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" name="Regd No." 
                                placeholder="Regd No. "required />
                          </Form.Group>
                    </div>
                    <div className="col-sm-3">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="Result with class " placeholder="Result with class "required />
                        </Form.Group>
                    </div>   

                    </div>



            <div class="row ">

            <p className="mb-3 col-sm-12 mt-4">Marks obtained in SSLC or equivalent Examination:</p>

                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="I Language" placeholder="I Language (H,K,S,E)"required />
                        </Form.Group>
                    </div>                   
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="I Language Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 
                    </div>

                    <div class="row text">
               <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="II Language" placeholder="II Language (H,K,S,E)"required />
                        </Form.Group>
                    </div>                     
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="II Language Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 
                    </div>

            <div class="row text">
                    <div className="col-sm-4">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="III Language" placeholder="III Language (H,K,S,E)"required />
                        </Form.Group>
                    </div>                   
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="III Language Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 

                    </div>

                <div class="row text">
                    <div className="col-sm-4 pl-4 mt-2" >
                    <Form.Label>Mathematics</Form.Label>
                    </div>  
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Mathematics Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 

                    </div>

            <div class="row text">
                    <div className="col-sm-4 pl-4 mt-2">
                    <Form.Label>Science</Form.Label>
                    </div>  
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Science Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 

                    </div>

                <div class="row text">
                    <div className="col-sm-4 pl-4 mt-2">
                    <Form.Label>Social Studies</Form.Label>
                    </div>  
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Social Studies Marks obtained" placeholder="Marks obtained"required />
                        </Form.Group>
                    </div> 
                    </div>

            <div class="row text">
                    <div className="col-sm-4 pl-4 mt-2">
                             <Form.Label>Total Marks</Form.Label>
                    </div>  
                    <div className="col-sm-3    ">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" name="Total Marks obtained" placeholder="Total Marks obtained"required />
                        </Form.Group>
                    </div> 

                    </div>



                    <Heading className="ahead mt-5 mb-4" title="Co-Curricular activities Details"/> 
                    <div className="row">   
                        <div className="col-sm-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" name="Co-Curricular activities" 
                                    placeholder="Co-Curricular activities" rows="3" required />
                                </Form.Group>
                                </div>                                                      
                        </div>


<Heading className="ahead mt-5 mb-4" title="Combinations offered on admission"/> 

           
                             <div key='combination1' className=" row pl-1">  
                                            <p className=" col-sm-2 ">Combinations : </p>

                                                <div className="col-sm-2 pb-2 text">
                                                <Form.Check custom type="radio" value="PCMB" id='PCMB' name="combination" label="PCMB" />
                                                </div>
                                                
                                                <div className="col-sm-2 pb-2 text">
                                                <Form.Check custom type="radio" value="PCMCS" id='PCMCS' name="combination" label="PCMCS" />
                                                </div>


                                                <div className="col-sm-2 pb-2 text">
                                                <Form.Check custom type="radio" value="ABECS" id='ABECS' name="combination" label="ABECS" />
                                                </div>
                                                
                                                <div className="col-sm-2 pb-2 text">
                                                <Form.Check custom type="radio"  value="ABES" id='ABES' name="combination" label="ABES" />
                                                </div>

                                                <div className="col-sm-2 pb-2 text">
                                                <Form.Check custom type="radio" value="ABSM"  id='ABSM' name="combination" label="ABSM" />
                                                </div>   

                                   </div>


                                        <div className="row pl-1 ">  

                                            <p className=" col-sm-2 pr-0 mr-0">Coaching Classes :</p>

                                                        <div className="col-sm-2 text ">
                                                        <Form.Check custom type="checkbox"  id="CET" name="CET" label="CET" />
                                                        </div>

                                                        <div className="col-sm-2 text">
                                                        <Form.Check custom type="checkbox" id="NEET" name="NEET" label="NEET" />
 
                                            </div>
                                                               
                                        </div>


                                <div key='language1' className="row pl-1 ">  
                                <p className=" col-sm-2 ">Languages :</p>

                                    <div className="col-sm-2 text ">
                                    <Form.Check custom type="radio"  value="Kannada"  id='Kannada' name="language" label="Kannada" />
                                    </div>
                                    
                                    <div className="col-sm-2 text ">
                                    <Form.Check custom type="radio" value="Hindi"  id='Hindi' name="language" label="Hindi" />
                                    </div>

                                    <div className="col-sm-2 text">
                                    <Form.Check custom type="radio" value="Sanskrit"  id='Sanskrit' name="language" label="Sanskrit" />
                                    </div>                
                      </div>        



<Heading className="ahead mt-5 mb-4" title="RULES AND REGULATIONS FOR ADMISSION"/> 

    <Card style={{ width: '100%' }}>
                <ListGroup variant="flush">

                    <ListGroup.Item>Languages offered in the College - English, Kannada, Hindi, Sanskrit.</ListGroup.Item>

                    <ListGroup.Item>Certified Photocopy of Statement of Marks is required to be enclosed with the 
                        application at the time of submission.</ListGroup.Item>

                    <ListGroup.Item>SC/ST, CAT-1 candidates to submit caste and income certificates.</ListGroup.Item>

                    <ListGroup.Item>Students from other states should enclose copies of Migration and Eligibility Certificates.</ListGroup.Item>

                    <ListGroup.Item>Admissions are made only after a personal interview with the Principal and Management.</ListGroup.Item>

                    <ListGroup.Item>Candidates shall produce the Original Marks Card, Transfer Certificate and six recent passport size 
                        photographs at the time of admission.</ListGroup.Item>

                    <ListGroup.Item>Payment of prescribed admission fee should be made on or before the date notified in the College,
                        failing which the admission is forfeited.</ListGroup.Item>

                    <ListGroup.Item>Amount once paid towards admission is non-refundable.</ListGroup.Item>

                    <ListGroup.Item>Admission is provisional subject to the ratification by the Bengaluru Central University.</ListGroup.Item>

                    <ListGroup.Item>A minimum attendance of 75% in each subject is compulsory. Please note that students who do
                            not have adequate attendance will be stopped from appearing for the examination</ListGroup.Item>

                    <ListGroup.Item>Parents / Guardians are requested to meet the teachers concerned to ascertain the attendance
                            and progress of their wards at least twice in the academic year.</ListGroup.Item>

                    <ListGroup.Item>Any act of misconduct, indiscipline, vandalism or violence or damage cause to the College property,
                                laboratory equipment, sports materials, library books, reference volumes, journals and periodicals,
                                defacing of furniture and of walls, etc., shall be seriously viewed for both penalty and punishment and
                                the decision of the Principal is final in this matter.</ListGroup.Item>

                    <ListGroup.Item>Participation in extra-curricular activities, N.C.C., N.S.S., etc., is voluntary and desirable.</ListGroup.Item>

                    <ListGroup.Item>Morning Prayer is compulsory discipline for all the students.</ListGroup.Item>


                    <ListGroup.Item>Students should strictly adhere to the dress code specified below:<br/>&nbsp;
                            1.Dress should not be tight – fitting and transparent.<br/>&nbsp;
                        2. Neatness and dignity in dressing should be strictly observed.<br/>&nbsp;
                        3. If any dress is found objectionable, action can be taken immediately by any member of the staff.
                        </ListGroup.Item>


                </ListGroup>
    </Card>


    {/* <div className="mt-4"> 
    <Form.Group>
        <Form.Check  custom type="checkbox" id='yes' custom required label="I have read the rules and regulations specified in the prospectus for my admission to this institution
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