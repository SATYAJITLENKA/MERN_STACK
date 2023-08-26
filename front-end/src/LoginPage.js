import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

    const[loginData,setLoginData]=useState({username:"",password:""})
     

    //submit function
     const handleLoginSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response =await axios.post('http://localhost:8000/login',loginData);
            console.log(response);
            const {success,message}=response.data;
            if(success){
                console.log('login Successfull')
            }else{
                console.log(message)
            }
        }catch(error){
             console.error('login error',error)
        }
        setLoginData({
            username:'',
            password:''
        })

     }
   
    const handleLoginChange=(e)=>{
        const {name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        
    }



  return (
    <>
    <h2>Login Page</h2>
    <form onSubmit={handleLoginSubmit} >
        <input type="text" name='username' placeholder='username' required onChange={handleLoginChange} value={loginData.username} />
        <input type="password" name='password' placeholder='password' required onChange={handleLoginChange} value={loginData.password} />
        <button type='submit'>Login</button>
    </form>
    
    <p>Not Registered yet? <Link to='/registration'>Register here</Link> </p>
    
    </>
  )
}

export default LoginPage