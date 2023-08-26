import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function RegistrationPage() {
  const[userdata,setUserdata]=useState({
    name:'',
    password:''
  })

  const handleRegistration=(e)=>{
     const{name,value}=e.target;
     setUserdata((prevData)=>({
      ...prevData,
      [name]:value,
     }))
  }

  const handleRegistrationSubmit=async(e)=>{
e.preventDefault();
try{
  const response =await axios.post('http://localhost:8000/register',userdata)
  console.log(response.data)
}catch(error){
  console.log(error)
}
setUserdata({
  username:'',
  password:''
})

  }

  return (
    <>
    <h1>Registration Form</h1>
    
    <form onSubmit={handleRegistrationSubmit}>
      name:
      <br />
      <input type="text" placeholder='username' name='username' value={userdata.username} onChange={handleRegistration} />
      <input type="password" placeholder='password' name='password' value={userdata.password} onChange={handleRegistration}/>
      <button type='submit'>Register</button>

      <p>already registered? <Link to="/login">Login Here</Link></p>



    </form>
    
    
    
    
    </>
  )
}

export default RegistrationPage