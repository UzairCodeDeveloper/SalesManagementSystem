import React from 'react'
import Navbar from './Navbar'
import './CSS/customer.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Customersform() {
  

  const initialState={
    CustomerID:"",
    FirstName:"",
    LastName:"",
    Address:"",
    City:"",
    PhoneNumber:"",
    
  }
  const [state,newstate]=useState(initialState);
  const {CustomerID,FirstName,LastName,Address,City,PhoneNumber}=state;
  const handleInputChange=(e)=>{
    console.log(e);
      const {name,value}=e.target;
      newstate({...state,[name]:value});
  }
  const submittoDBMS=()=>{
    axios.post("http://localhost:500/customerform",{
      CustomerID,
      FirstName,
      LastName,
      Address,
      City,
      PhoneNumber
    }).then(()=>{
      newstate({CustomerID:"",FirstName:"",LastName:"",Address:"",City:"",PhoneNumber:""})
      .catch((err)=>{console.log(err)});
      
    })
    toast.success('Record Added  Successfully', {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      });
    
  }
  return (
    <div>
   <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
      <Navbar/>
      <div className='container-fluid containner'>
      <div className='signup-container'>
        <div className='login-content'>
          <h2>Customer Detail</h2>
        </div>
        <div className='login-inputcontainer'>
          
        <label>Customer ID</label>

        <input type='text' 
        id='CustomerID'
        name='CustomerID'
        value={CustomerID}
        placeholder='Enter Customer ID' 
        onChange={handleInputChange}
        ></input>


        <label>First Name</label>
          <input type='text'
          id='FirstName'
        name='FirstName'
        value={FirstName}
        placeholder='Enter FirstName' 
        onChange={handleInputChange}
           ></input>

          <label>Last Name</label>
          <input type='name' 
          id='LastName'
        name='LastName'
        value={LastName}
        placeholder='Enter FirstName' 
        onChange={handleInputChange}></input>

          <label>Address</label>
          <textarea 
          id='Address'
        name='Address'
        value={Address}
        onChange={handleInputChange}
          placeholder='Enter Address'/>

          <label>City</label>
          <input type='text'
          id='City'
        name='City'
        value={City}
        onChange={handleInputChange}
           placeholder='Enter City'></input>

          <label>Phone Number</label>
          <input type='number'
          id='PhoneNumber'
        name='PhoneNumber'
        value={PhoneNumber}
        onChange={handleInputChange} 
        placeholder='Enter Phone Number'></input>

        </div>
        

          <a className='btn btn-success ' href='#world' onClick={submittoDBMS}>Submit</a>
        
         
        
      </div>
    </div>
    </div>
  )
}
