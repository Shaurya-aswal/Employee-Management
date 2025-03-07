import React from 'react'

const TaskNo = () => {
  return (
    <div className=' mt-10 flex justify-between gap-5 '>
      <div className='h-40 m-0 py-6 px-9 rounded-2xl w-[45%] bg-red-400'>
        <h2 className='text-4xl font-semibold'>1</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>

      <div className=' py-6 px-9 rounded-2xl w-[45%] bg-blue-400'>
        <h2 className='text-4xl font-semibold'>2</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>

      <div className='py-6 px-9 rounded-2xl w-[45%] bg-green-400'>
        <h2 className='text-4xl font-semibold'>2</h2>
        <h3 className='text-2xl font-medium'> Accepted Task</h3>
      </div>

      <div className='  py-6 px-9 rounded-2xl w-[45%] bg-orange-400'>
        <h2 className='text-4xl font-semibold'>3</h2>
        <h3 className='text-2xl font-medium'> Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskNo
