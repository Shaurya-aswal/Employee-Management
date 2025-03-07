import React from 'react'
import Header from '../other/Header'
import TaskNo from '../other/TaskNo'
import AllTask from '../other/TaskLIST'

const Employee = () => {
  return (
    <div className='p-8 bg-[#1c1c1c] h-screen'>
      <Header  />
      <TaskNo />
      <AllTask />
    </div>
  )
}

export default Employee
