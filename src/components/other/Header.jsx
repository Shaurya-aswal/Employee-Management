import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex items-end justify-between'>
       <h1 className='text-2xl font-mediummediu'>Hello ,<br/><span className=' font-semibold text-4xl'> shaurya 👋🏻</span></h1>
       <button className='bg-red-600 font-medium text-white text-xl rounded px-3 '>Log out</button>
      </div>
    </div>
  )
}

export default Header
