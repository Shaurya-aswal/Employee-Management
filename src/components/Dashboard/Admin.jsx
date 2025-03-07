import React from 'react'
import Header from '../other/Header'
import { Input } from 'postcss'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const Admin = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default Admin
