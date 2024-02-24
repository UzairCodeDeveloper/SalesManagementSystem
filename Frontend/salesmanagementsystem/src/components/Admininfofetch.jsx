import React from 'react'
import Navbar from './Navbar'
import './CSS/ordertracking.css'
export default function Admininfofetch() {
  return (
    <div>
        <Navbar/>
        <div className='container-fluid orderContainer-fluid'>
            <div className='container orderContainer'>
                <div className='orderTitle'>
                    <h3>Sales DataBase Results</h3>
                    <p>Display of Overall Sales In DataBase</p>
                    
                    
                </div>
                <div className='orderTable'>
                    
                    <div className='orderDetail'>
                        <div className='orderBox'>
                            <table>
                                <thead>
                                <tr>
                                <th>Customer ID</th>
                                    <th>Order ID</th>
                                    <th>Customer Name</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Order Date</th>
                                    <th>Detail</th>
                                    </tr>
                                </thead>
                                <tr className='tr1'>
    <td>Alfreds Futterkiste</td>
    <td>1</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>30</td>
    <td>19-03-2022</td>
    <td><button className='btn btn-primary'>Show</button></td>
  </tr>
  <tr>
    <td className='tr2'>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>1</td>
    <td>Mexico</td>
    <td>20</td>
    <td>19-03-2022</td>
    <th><button className='btn btn-primary'>Show</button></th>
  </tr>
  <tr className='tr1'>
    <td>Alfreds Futterkiste</td>
    <td>1</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>30</td>
    <td>19-03-2022</td>
    <th><button className='btn btn-primary'>Show</button></th>
  </tr>
  <tr>
    <td className='tr2'>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>1</td>
    <td>Mexico</td>
    <td>20</td>
    <td>19-03-2022</td>
    <th><button className='btn btn-primary'>Show</button></th>
  </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
