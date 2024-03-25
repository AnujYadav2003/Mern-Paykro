import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signin = () => {

  const navigate = useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  return (
    <div className='flex items-center justify-center my-20'>
      <div className=' max-w-xl h-120 rounded overflow-hidden shadow-lg border border-blue-500'>
        <div className='text-3xl text-center py-2 font-bold'>Sign In </div>
        <div className='text-center mx-10 text-gray-600'> Enter your credentials to access your </div>
        <div className='text-center mx-5 text-gray-600'> account</div>
        <div className='mx-3'>

          <h1 className='font-medium py-3 '>Email</h1>
          <input placeholder='johndoe@gmail.com' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1' 
          onChange={(e)=>{
           setUsername(e.target.value)
          }}/>
          <h1 className='font-medium py-3' onChange={(e)=>{
          setPassword(e.target.value)
        }}>
          Password</h1>
          <input placeholder='00000000' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1' />
        </div>

        <div className='py-3'>
          <div className='bg-black text-white mx-5 text-center py-2 rounded-md hover:bg-gray-800 '>
            <button  onClick={async () => {
          const postData={
            username,
            password
          }
          const response=await axios.post("http://localhost:3000/api/v1/user/signin",postData);
          window.localStorage.setItem("Authorization","Bearer "+response.data.token)
          navigate("/dashboard");
        }}>Sign In</button>
          </div>
        </div>
        <h1 className='text-center py-2'>Don't have an account? <a href="/signup" className='text-black'>Sign up</a></h1>
      </div >
    </div>
  );
};

export default Signin;