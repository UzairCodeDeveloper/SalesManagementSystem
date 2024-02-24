import React, { useRef } from 'react'
import Navbar from './Navbar'
import './CSS/ordertracking.css'
import { useReactToPrint } from 'react-to-print';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Salespersonlist() {

  const [data, setdata] = useState([]);
  const datafromdbms = async () => {
    const response = await axios.get("http://localhost:500/salespersonslist");
    setdata(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    datafromdbms();
  }, []);

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    setReportbtn: "reportbtn",
    content: () => componentRef.current,
    documentTitle: "Productslist",
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
      <div className='container-fluid orderContainer-fluid'>
        <div className='container orderContainer' ref={componentRef}>
          <div className='orderTitle'>
            <h3>SalesPerson List From Database</h3>
            <button className="btn btn-primary" onClick={handleprint}>Generate Report</button>


          </div>
          <div className='orderTable'>

            <div className='orderDetail'>
              <div className='orderBox'>
                <table>
                  <thead>
                    <tr>
                      <th>SalesPerson ID</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Phone No</th>
                      <th>Hring Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {

                      return (
                        <tr key={item.SalesPersonsID} >
                          <td>{item.SalesPersonsID}</td>
                          <td>{item.FirstName}</td>
                          <td>{item.LastName}</td>
                          <td>{item.PhoneNumber}</td>
                          <td>{item.HireDate}</td>
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
