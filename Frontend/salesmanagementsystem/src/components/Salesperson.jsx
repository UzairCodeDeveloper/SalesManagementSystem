import React from 'react'
import Navbar from './Navbar'
import './CSS/customer.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
export default function Salesperson() {

  const initialState={
    SalesPersonsID:"",
    FirstName:"",
    LastName:"",
    PhoneNumber:"",
    HireDate:"",
    
  }
  const [state,newstate]=useState(initialState);
  const {SalesPersonsID,FirstName,LastName,PhoneNumber,HireDate}=state;
  const handleInputChange=(e)=>{
    console.log(e);
      const {name,value}=e.target;
      newstate({...state,[name]:value});
  }
  const submittoDBMS=()=>{
    axios.post("http://localhost:500/salespersonform",{
      SalesPersonsID,
      FirstName,
      LastName,
      PhoneNumber,
      HireDate,
    }).then(()=>{
      newstate({SalesPersonsID:"",FirstName:"",LastName:"",PhoneNumber:"",HireDate:""})
      .catch((err)=>{console.log(err)});
    })
    toast.success('Record Added Successfully', {
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
          <h2>SalesPerson Detail</h2>
        </div>
        <div className='login-inputcontainer'>
          
        <label>Salesperson ID</label>
        <input
        type='text' 
        id='SalesPersonsID'
        name='SalesPersonsID'
        value={SalesPersonsID}
        onChange={handleInputChange} 
        placeholder='Enter ID'></input>

        <label>First Name</label>
          <input type='text'
          id='FirstName'
        name='FirstName'
        value={FirstName}
        onChange={handleInputChange}
           placeholder='Enter FirstName'></input>

          <label>Last Name</label>
          <input type='text' 
          id='LastName'
        name='LastName'
        value={LastName} 
        onChange={handleInputChange}
          placeholder='Enter LastName'></input>

          <label>Phone Number</label>
          <input type='number'
          id='PhoneNumber'
        name='PhoneNumber'
        value={PhoneNumber}
        onChange={handleInputChange}
           placeholder='Enter Phone Number'></input>
          <label>Hiring Date</label>
          <input type='date' 
          id='HireDate'
        name='HireDate'
        value={HireDate}
        onChange={handleInputChange}
        placeholder='Enter Phone Number'></input>
        </div>
        

          <a className='btn btn-success ' href='#world' onClick={submittoDBMS}>Submit</a>
      
        
        
      </div>
    </div>
    </div>
    
  )
}
