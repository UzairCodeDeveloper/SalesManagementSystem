import './App.css';
import Productsreport from './Reports/Productsreport';
import Admininfofetch from './components/Admininfofetch';
import Customersform from './components/Customersform';
import Customerslist from './components/Customerslist';
import Home from './components/Home';
import Ordertracking from './components/Ordertracking';
import ProductList from './components/ProductList';
import Products from './components/Products';
import Salesperson from './components/Salesperson';
import Salespersonlist from './components/Salespersonlist';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import UpdateData from './components/UpdateData';
// import { useState } from 'react';
// import axios from 'axios';


function App() {
  // const [data, setdata] = useState([]);

  // const datafromdbms = async () => {
  //   const response = await axios.get("http://localhost:500/data");
  //   setdata(response.data);
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   datafromdbms();
  // }, []);

  // const deleterecord = (id) => {
  //   axios.delete(`http://localhost:500/api/delete/${id}`)
  //   alert(id)
  // }
  // const initialState={
  //   name:"",
  //   email:"",
  // }
  // const [state,newstate]=useState(initialState);
  // const {name,email}=state;
  // const handleInputChange=(e)=>{
  //   console.log(e);
  //     const {name,value}=e.target;
  //     newstate({...state,[name]:value});
  // }

  // const submittoDBMS=()=>{
  //   axios.post("http://localhost:500/api/post",{
  //     name,
  //     email
  //   }).then(()=>{
  //     newstate({name:"",email:""})
  //     .catch((err)=>{console.log(err)});
  //   })
  // }
  return (
    <>
      {/* <h2>{data.map((item, index) => {
        return (
          <div key={index}>
            <h1>Record `${index + 1}`</h1>
            <span>{item.Name}</span>
            <span>-------</span>
            <span>{item.Email}</span>
            <button onClick={() => { deleterecord(item.id) }}>Delete</button>
          </div>
        )
      })}</h2>
      <h1>hello</h1> */}

      {/* <h2>HELLO WORLD</h2>
      <label>Name</label>
      <input placeholder='Enter your Name'
      type='text'
       id="name"
       name='name'
        value={name}
        
        onChange={handleInputChange}
         ></input>
         <label>Email</label>
      <input placeholder='Enter your Email'
      type='text'
       id="email"
       name='email'
        value={email}
        onChange={handleInputChange}
         ></input>
        <button onClick={submittoDBMS}>Save</button>
        <input onChange={handleInputChange}></input> */}
        {/* <Customersform/> */}
        {/* <Products/> */}
        {/* <Salesperson/> */}
        {/* <Ordertracking/> */}
        {/* <Admininfofetch/> */}
        {/* <ProductList/> */}
        {/* <Salespersonlist/> */}
        {/* <Customerslist/> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/customerform' element={<Customersform/>}> </Route>
            <Route path='/productform' element={<Products/>}> </Route>
            <Route path='/salespersonform' element={<Salesperson/>}> </Route>
            <Route path='/customerlist' element={<Customerslist/>}> </Route>
            <Route path='/productlist' element={<ProductList/>}> </Route>
            <Route path='/salespersonlist' element={<Salespersonlist/>}> </Route>
            <Route path='/ordertracking' element={<Ordertracking/>}> </Route>
            <Route path='/update' element={<UpdateData/>}> </Route>
            
            
          </Routes>
        </Router>
    </>
    
  );
}

export default App;
