import React,{useRef}from 'react'
import Navbar from './Navbar'
import './CSS/ordertracking.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ToastContainer, toast } from 'react-toastify';
export default function ProductList() {

  const [reportbtn,setReportbtn]=useState('btn btn-primary');
  const [data, setdata] = useState([]);
  const [changeColor, setColor] = useState(0);
  const datafromdbms = async () => {
    const response = await axios.get("http://localhost:500/productlist");
    setdata(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    datafromdbms();
  }, []);

  const componentRef=useRef();
  const handleprint=useReactToPrint({
    setReportbtn:"reportbtn",
    content:()=>componentRef.current,
    documentTitle:"Productslist",
    onAfterPrint:()=>toast.success('Record Printed Successfully', {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      })
   
  })
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
      <Navbar />
      <div className='container-fluid orderContainer-fluid' >
        <div className='container orderContainer' ref={componentRef}>
          <div className='orderTitle'>
            <h3>Products List From Database</h3>
            <button className="btn btn-primary" onClick={handleprint}>Generate Report</button>


          </div>
          <div className='orderTable'>

            <div className='orderDetail'>
              <div className='orderBox'>
                <table>
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Units In Stock</th>
                      <th>Units On Order</th>
                      <th>Unit Price</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {

                      return (

                        <tr key={item.ProductID} className={changeColor}>
                          <td>{item.ProductID}</td>
                          <td>{item.ProductName}</td>
                          <td>{item.UnitsInStock}</td>
                          <td>{item.UnitsOnOrder}</td>
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
