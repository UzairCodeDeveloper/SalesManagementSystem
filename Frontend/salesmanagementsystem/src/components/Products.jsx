import React from 'react'
import Navbar from './Navbar'
import './CSS/customer.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
export default function Products() {

  const initialState={
    ProductID:"",
    ProductName:"",
    UnitsInStock:"",
    UnitsOnOrder:"",
    UnitPrice:"",
    
  }
  const [state,newstate]=useState(initialState);
  const {ProductID,ProductName,UnitsInStock,UnitsOnOrder,UnitPrice}=state;
  const handleInputChange=(e)=>{
    console.log(e);
      const {name,value}=e.target;
      newstate({...state,[name]:value});
  }
  const submittoDBMS=()=>{
    axios.post("http://localhost:500/productform",{
      ProductID,
      ProductName,
      UnitsInStock,
      UnitsOnOrder,
      UnitPrice,
    }).then(()=>{
      newstate({ProductID:"",PrductName:"",UnitsInStock:"",UnitsOnOrder:"",UnitPrice:""})
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
          <h2>Product Detail</h2>
        </div>
        <div className='login-inputcontainer'>
          
        <label>Product ID</label>
        <input type='text' 
        id='ProductID'
        name='ProductID'
        value={ProductID}
        onChange={handleInputChange} 
        placeholder='Enter Product ID'></input>


        <label>Products Name</label>
          <input type='text' 
          id='ProductName'
        name='ProductName'
        value={ProductName}
        onChange={handleInputChange} 
          placeholder='Enter Product Name'></input>

          <label>Units In Stock</label>
          <input type='number' 
          id='UnitsInStock'
        name='UnitsInStock'
        value={UnitsInStock}
        onChange={handleInputChange} 
          placeholder='No of Units'></input>

          <label>Units On Order</label>
          <input type='number'
          id='UnitsOnOrder'
        name='UnitsOnOrder'
        value={UnitsOnOrder}
        onChange={handleInputChange} 
           placeholder='No of Units'></input>

          <label>Unit Price</label>
          <input type='text'
          id='UnitPrice'
        name='UnitPrice'
        value={UnitPrice}
        onChange={handleInputChange} 
           placeholder='Enter Price'></input>
          

        </div>
        

          <a className='btn btn-success ' href='#world' onClick={submittoDBMS}>Submit</a>
      
        
        
      </div>
    </div>
    </div>
    
  )
}
