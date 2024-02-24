import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function UpdateData() {
    const [select, setSelect] = useState("");

    const initialState = {
        CustomerID: "",
        FirstName: "",
        LastName: "",
        Address: "",
        City: "",
        PhoneNumber: "",
        ProductID:'',
        ProductName:'',
        UnitsInStock:'',
        UnitsOnOrder:'',
        UnitPrice:'',
        SalesPersonsID:'',
        HireDate:'',
        

      };
      const [state, setState] = useState(initialState);
      const handleInputChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      }

      const submitbutton=()=>{
        if (select === "SalesPersons") {
            fetchSalespersonData();
          } else if (select === "Customer") {
            fetchCustomerData();
          } else if (select === "Product") {
            fetchProductData();
          }
        
      }

      const updatebutton=()=>{
        if (select === "SalesPersons") {
            updateSalesPerosons();
          } else if (select === "Customer") {
            updateCustomer();
          } else if (select === "Product") {
            updateProduct();
          }
        
      }

      const fetchCustomerData = async () => {
    
        
          try{
            const response = await axios.get(`http://localhost:500/customerdata?CustomerID=${state.CustomerID}`);
      const customerData = response.data[0]; // Assuming the API returns an array with a single customer object
      setState({ ...state, ...customerData });
      if(customerData==undefined){
        toast.error('Record Not Found', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            
            });
            
      }
      
      else{
        toast.success('Record Found', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            
            });
      }
      }catch (error) {
            console.error('Error fetching order details:', error);
            alert('Data Not Found')
            // toast.error('Record Not Found', {
            //     position: "top-center",
            //     autoClose: 2000,
            //     theme: "dark",
            //     });
          }
    
    
      };
      const updateCustomer = async () => {
        try {
          const response = await axios.put(`http://localhost:500/updateCustomer`, state);
          console.log(response.data); // Assuming the backend sends a response after updating
        //   alert('Record updated successfully!');
          toast.success('Record Updated Successfully', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        } catch (error) {
          console.error('Error updating record:', error);
          toast.error('Error in Updating', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
          
          
        }
      };

      const fetchProductData = async () => {
        try {
          const response = await axios.get(`http://localhost:500/productsdata?ProductID=${state.ProductID}`);
          const productData = response.data[0]; // Assuming the API returns an array with a single product object
          setState({ ...state, ...productData });
          if(productData==undefined){
            toast.error('Record Not Found', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                
                });
                
          }
          
          else{
            toast.success('Record Found', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                
                });
          }
            console.log(productData)
        } catch (error) {
          console.error('Error fetching product data:', error);
          toast.error('Record Not Found', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        }
      };

      const updateProduct = async () => {
        try {
          const response = await axios.put(`http://localhost:500/updateProduct`, state);
          console.log(response.data); // Assuming the backend sends a response after updating
        //   alert('Product record updated successfully!');
          toast.success('Record Updated Successfully', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        } catch (error) {
          console.error('Error updating product record:', error);
          toast.error('Error in Updating', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        }
      };
      


      const fetchSalespersonData = async () => {
        
        try {
          const response = await axios.get(`http://localhost:500/salespersondata?SalesPersonsID=${state.SalesPersonsID}`);
          const salespersonData = response.data[0]; // Assuming the API returns an array with a single product object
          setState({ ...state, ...salespersonData });
          if(salespersonData==undefined){
            toast.error('Record Not Found', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                
                });
                
          }
          
          else{
            toast.success('Record Found', {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                
                });
          }
        } catch (error) {
          console.error('Error fetching SalesPErson data:', error);
          toast.error('Record Not Found', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        }
      };

      const updateSalesPerosons = async () => {
        try {
          const response = await axios.put(`http://localhost:500/updateSalesperson`, state);
          console.log(response.data); // Assuming the backend sends a response after updating
        //   alert('Product record updated successfully!');
          toast.success('Record Updated Successfully', {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        } catch (error) {
          console.error('Error updating product record:', error);
          toast.error(`Error in Updating ${error}`, {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
            });
        }
      };












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
                <div className='container orderContainer'>
                    <div className='orderTitle'>
                        <h2>Update Data To DBMS</h2>
                        <p>Select DataBase and It's ID</p>
                    
                        <div className='inputBox'>

                            <select className='btn btn-info' value={select} onChange={e => setSelect(e.target.value)}>
                                <option >Select DataBase</option>
                                <option >Customer</option>
                                <option >Product</option>
                                <option>SalesPersons</option>
                            </select>
                            
                            <input placeholder={select + " ID"}
                                type='number'
                                id={select+'ID'}
                                name={select+'ID'}
                                onChange={handleInputChange}
                            />

                            <button className=' btn btn-primary ' onClick={submitbutton} >Search</button>
                        </div>


                    </div>
                    <hr></hr>
                    <hr></hr>
                    

                 
                 {select==="Customer" ? 
                    
                    <div className="container-fluid updatecontent">
                        <div className='lablebox'>

                        <lable>CustomerID</lable>
                        <input 
                        placeholder='Customer ID'
                        id='CustomerID'
                        name='CustomerID'
                        value={state.CustomerID}
                        onChange={handleInputChange}></input>
                        </div>
                        
                        <div className='lablebox'>
                        <lable>FirstName</lable>
                        <input placeholder='FirstName'
                        id='FirstName'
                        name='FirstName'
                        value={state.FirstName}
                        onChange={handleInputChange}></input>
                        </div>


                        <div className='lablebox'>
                        <lable>LastName</lable>
                        <input placeholder='LastName'
                        id='LastName'
                        name='LastName'
                        value={state.LastName}
                        onChange={handleInputChange}></input>
                        </div>

                        <div className='lablebox'>
                        <lable>Address</lable>
                        <input placeholder='Address'
                name='Address'
                value={state.Address}
                onChange={handleInputChange}></input>
                        </div>
                        <div className='lablebox'>
                        <lable>City</lable>
                        <input  placeholder='City'
                name='City'
                value={state.City}
                onChange={handleInputChange}></input>
                        </div>
                        <div className='lablebox'>
                        <lable>Phone Number</lable>
                        <input
                        placeholder='Phone Number'
                name='PhoneNumber'
                value={state.PhoneNumber}
                onChange={handleInputChange}></input>
                        
                        </div>
                        <button className=' btn btn-primary 'onClick={updatebutton} >Update Record</button>
                    
                    </div>
                    : (select==="Product") ? 
                    <div className="container-fluid updatecontent">
                        <div className='lablebox'>
                        <lable>ProductID</lable>
                        <input
                        placeholder='Product ID'
                        id='ProductID'
                        name='ProductID'
                        value={state.ProductID}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>ProductName</lable>
                        <input
                        placeholder='Product Name'
                        id='ProductName'
                        name='ProductName'
                        value={state.ProductName}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>Units In Stock</lable>
                        <input
                        placeholder='Units In Stock'
                        id='UnitsInStock'
                        name='UnitsInStock'
                        value={state.UnitsInStock}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>Units On Order</lable>
                        <input
                        placeholder='Units on Order'
                        id='UnitsOnOrder'
                        name='UnitsOnOrder'
                        value={state.UnitsOnOrder}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>UnitPrice</lable>
                        <input
                        placeholder='Units Price'
                        id='UnitPrice'
                        name='UnitPrice'
                        value={state.UnitPrice}
                        onChange={handleInputChange}
                        ></input>
                        
                        </div>
                        <button className=' btn btn-primary ' onClick={updatebutton}>Update Record</button>
                    </div>


                    :(select==="SalesPersons")?
                    <div className="container-fluid updatecontent">
                    
                        <div className='lablebox'>
                        <lable>SalesPersonID</lable>
                        <input
                        placeholder='SalesPerson ID'
                        id='SalesPersonsID'
                        name='SalesPersonsID'
                        value={state.SalesPersonsID}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>FirstName</lable>
                        <input
                        placeholder='FirstName'
                        id='FirstName'
                        name='FirstName'
                        value={state.FirstName}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>LastName</lable>
                        <input
                        placeholder='LastName'
                        id='LastName'
                        name='LastName'
                        value={state.LastName}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>Phone Number</lable>
                        <input
                        placeholder='Phone Number'
                        id='PhoneNumber'
                        name='PhoneNumber'
                        value={state.PhoneNumber}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        <div className='lablebox'>
                        <lable>Hirig Date</lable>
                        <input
                        type='date'
                        placeholder='Hiring Date'
                        id='HireDate'
                        name='HireDate'
                        value={state.HireDate}
                        onChange={handleInputChange}
                        ></input>
                        </div>
                        
                        <button className=' btn btn-primary ' onClick={updatebutton}  >Update Record</button>
                        

                    </div>
                    
                    :''}
                
                    
                   
                    

                    
                </div>
            </div>
        </div>
    )
}
