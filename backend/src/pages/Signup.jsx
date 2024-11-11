import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { signupfunction } from '../Api';


function Signup() {
    const [username,setUsername] = useState("")
    const [place,setPlace]= useState('')
    const [job,setJob]=useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState("")


    
    function submited(){
      console.log("firstcheck",username,email,place,job,mobile,password);
      
      signupfunction({username,email,place,job,mobile,password}).then((result)=>{
        setMessage(result)

      })
      
        

    }

  return (
    <div>
    
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='username' id='form1' type='text' className='w-100' onChange={(e)=>setUsername(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='email' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='place' id='form2' type='text' onChange={(e)=>setPlace(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='job' id='form3' type='text' onChange={(e)=>setJob(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='mobile' id='form4' type='number' onChange={(e)=>setMobile(e.target.value)}/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='password' id='form4' type='password' onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              

              <MDBBtn className='mb-4' size='lg' onClick={submited}>sign up</MDBBtn>
              <h6>Already have an Account? <Link to={'/'}> Log In</Link></h6>
              <h3>{message}</h3>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
            <h5>{message}</h5>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  )
}


export default Signup