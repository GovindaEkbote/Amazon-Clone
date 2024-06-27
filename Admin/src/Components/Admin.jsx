import React from 'react'
import './admin.css';
import Sidebar from './Sidebar/sidebar';
import { Route,Routes } from 'react-router-dom';
import AddProducts from './AddProducts/AddProducts';
import ListProducts from './ListProducts/listProducts';

const Admin = () => {
  return (
    <div className='admin'> 
        <Sidebar />
        <Routes>
           <Route path='/addproduct' element={<AddProducts />}/>
           <Route path='/listProducts' element={<ListProducts />}/>
        </Routes>

    </div>
  )
}

export default Admin