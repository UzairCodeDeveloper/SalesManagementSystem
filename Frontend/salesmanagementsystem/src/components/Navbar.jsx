import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand" href="#world" onClick={()=>{navigate('/')}}>SalesManagementSystem</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#world" onClick={() => { navigate('/') }}>Home</a>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#world" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FORMS
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/customerform') }}>Customers Addition</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/productform') }}>Product Addition</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/salespersonform') }}>SalesPersons Addition</a>
                  </li>
                </ul>

              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#world" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Detail From DBMS
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/customerlist') }}>C DBMS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/productlist') }}>P DBMS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#world" onClick={() => { navigate('/salespersonlist') }}>SP DBMS</a>
                  </li>
                
                </ul>
                
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#world" onClick={() => { navigate('/ordertracking') }}>OrderTracking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#worls" onClick={() => { navigate('/update') }}>Update Record</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
