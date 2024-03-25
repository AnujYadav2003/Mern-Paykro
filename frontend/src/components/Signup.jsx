import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center my-1'>
      <div className=' max-w-3xl h-120 rounded overflow-hidden shadow-lg border border-blue-500'>
        <div className='text-3xl text-center py-2 font-bold'>Sign Up </div>
        <div className='text-center mx-10 text-gray-600'> Enter your information to create an </div>
        <div className='text-center mx-5 text-gray-600'> account</div>
        <div className='mx-3'>

          {/* first name */}
          <h1 className='font-medium py-2'>First Name</h1>
          <input onChange={(e) => {
            setfirstname(e.target.value)
          }}

            placeholder='John' type='text' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1' />

          {/* last name */}
          <h1 className='font-medium py-2'>Last Name</h1>
          <input onChange={(e) => {
            setlastname(e.target.value)
          }}

            placeholder='Doe' type='text' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1' />

          {/* email */}
          <h1 className='font-medium py-2'>Email</h1>
          <input onChange={(e) => {
            setusername(e.target.value)
          }}

            placeholder='johndoe@gmail.com' type='email' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1 ' />

          {/* password */}
          <h1 className='font-medium py-2'>Password</h1>
          <input onChange={(e) => {
            setpassword(e.target.value)
          }}

            placeholder='00000000' type='password' className=' w-64 border rounded-md focus:outline-none focus:border-black py-2 px-1' />
        </div>

        <div className='py-3'>
          <div className='bg-black text-white mx-5 text-center py-2 rounded-md hover:bg-gray-800'>
            <button
              onClick={async () => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                  firstname,
                  lastname,
                  username,
                  password
                });
                localStorage.setItem("token", response.data.token)
                window.localStorage.setItem("Authorization", "Bearer " + response.data.token)
                navigate("/dashboard");

              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <h1 className='text-center py-2'>Already have an account? <a href="/signin" className="text-black">Login</a></h1>
      </div >
    </div >

  );
};

export default Signup;