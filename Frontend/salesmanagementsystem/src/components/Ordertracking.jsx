import React from 'react'
import Navbar from './Navbar'
import './CSS/ordertracking.css'
import axios from 'axios'
import { useState } from 'react';
export default function Ordertracking() {

  const initialState = {
    ordersID: "",
    CustomerID: ""
  }
  const [state, newstate] = useState(initialState);
  const [data, setdata] = useState([]);
  const { ordersID, CustomerID } = state;
  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    newstate({ ...state, [name]: value });
  }
  // const submittoDBMS=()=>{
  //   axios.post("http://localhost:500/orderfetch",{
  //     ordersID,
  //   }).then(()=>{
  //     newstate({ordersID:""})
  //     .catch((err)=>{console.log(err)});

  //   })

  // }

  const submittoDBMS = async () => {
    if (!CustomerID && !ordersID) {
      alert("Enter order or customer ID Please first")

    }
    else if (!CustomerID) {
      try {
        const response = await axios.get(`http://localhost:500/orderfetchbyorderID?ordersID=${ordersID}`);
        setdata(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    }
    else
      try {
        const response = await axios.get(`http://localhost:500/orderfetchbyCustomerID?CustomerID=${CustomerID}`);
        setdata(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }


  };










  return (
    <div>
      <Navbar />
      <div className='container-fluid orderContainer-fluid'>
        <div className='container orderContainer'>
          <div className='orderTitle'>
            <h2>Order Tracking</h2>
            <p>Track Your Order by Customer ID or Order ID</p>

            <div className='inputBox'>
              <input placeholder='Order ID'
                id='ordersID'
                name='ordersID'
                value={ordersID}
                onChange={handleInputChange}
              />
              <input placeholder='Customer ID'
                id='CustomerID'
                name='CustomerID'
                value={CustomerID}
                onChange={handleInputChange}
              />
              <button className=' btn btn-primary ' onClick={submittoDBMS}>Search</button>
            </div>


          </div>
          <div className='orderTable'>
            <div className='orderTableDetail'>
              <h4>Search By Customer ID: </h4>
              <span id='orderTableSpan'>34634</span>

            </div>
            <hr></hr>
            <div className='orderDetail'>
              <div className='orderBox'>
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>ProductName</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {

                      return (

                        <tr key={item.ordersID}>
                          <td>{item.ordersID}</td>
                          <td>{item.Firstname}</td>
                          <td>{item.Lastname}</td>
                          <td>{item.ProductName}</td>
                          <td>{item.UnitPrice}</td>

                        </tr>
                      )
                    })}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
