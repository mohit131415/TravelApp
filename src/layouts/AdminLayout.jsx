import React from 'react'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className='h-full w-full'>
      <Outlet />
    </div>
  )
}

export default AdminLayout
