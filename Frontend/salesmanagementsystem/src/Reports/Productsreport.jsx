// import React from 'react'
// import '../components/CSS/ordertracking.css'
// import axios from 'axios';
// import { useState,useEffect } from 'react';

// export default function Productsreport() {

//     const [data, setdata] = useState([]);
//   const [changeColor,setColor]=useState(0);
//   const datafromdbms = async () => {
//     const response = await axios.get("http://localhost:500/productlist");
//     setdata(response.data);
//     console.log(response.data);
//   }

//   useEffect(() => {
//     datafromdbms();
//   }, []);


//   return (
//     <div>
//       <div className='container-fluid orderContainer-fluid'>
//         <div className='container orderContainer'>
//           <div className='orderTitle'>
//             <h3>Products List From Database</h3>



//           </div>
//           <div className='orderTable'>

//             <div className='orderDetail'>
//               <div className='orderBox'>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Product ID</th>
//                       <th>Product Name</th>
//                       <th>Units In Stock</th>
//                       <th>Units On Order</th>
//                       <th>Unit Price</th>

//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.map((item,index)=>{
                      
//                       return(
                        
//                         <tr key={item.ProductID} className={changeColor}>
//                           <td>{item.ProductID}</td>
//                           <td>{item.ProductName}</td>
//                           <td>{item.UnitsInStock}</td>
//                           <td>{item.UnitsOnOrder}</td>
//                           <td>{item.UnitPrice}</td>
//                         </tr>
//                       )
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'


// export class ComponentToPrint extends React.PureComponent {
//     render() {
//       return (
//         <div>My cool content here!</div>
//       );
//     }
//   }
  
  
//   export const ComponentToPrint = React.forwardRef((props, ref) => {
//     return (
//       <div ref={ref}>My cool content here!</div>
//     );
//   });
