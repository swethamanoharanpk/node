import React, { useState } from 'react'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { loginfunction } from '../Api';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const [message,setMessage] = useState('')

  function loginDetails(){
    loginfunction({email,password},dispatch).then((result)=>{
      setMessage(result)

    })

  }
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='3'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setPassword(e.target.value)}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Forgot password?</a>
          </div>
          <h3>{message}</h3>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={loginDetails}>Log in</MDBBtn>
          <h6>Don't have an Account? <Link to={'/signup'}> Sign Up</Link></h6>

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>

  )
}

export default Login