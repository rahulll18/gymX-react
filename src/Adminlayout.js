import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../src/Admin/Sidebar';

const Adminlayout = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default Adminlayout