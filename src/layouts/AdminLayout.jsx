import React from 'react'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div>
      Adminlayout
      <Outlet />
    </div>
  )
}

export default AdminLayout
