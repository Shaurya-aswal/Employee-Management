import React, { useState } from 'react'

const Login = ({handle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Submit = (e) => {
    e.preventDefault();
    console.log("email is:",email);
    console.log("password is:",password);
    
    setEmail("");
    setPassword("");
}

  return (
   

    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-gray-400 p-20 rounded-xl '>
            <form onSubmit={(e)=> {
                Submit(e)
            }} className='rounded-xl flex flex-col items-center justify-center h-[400px] w-[300px] gap-5 ' >
                <h1 className='text-5xl pb-10 '>Login</h1>
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)

                }} required className='outline-none bg-transparent border-2 border-gray-300 text-xl rounded-full px-4 py-3 placeholder:text-gray-400 w-[100%]' type="email" placeholder="Type your email"></input>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} required className='outline-none bg-transparent border-2 border-gray-300 text-xl rounded-full px-4 py-3 placeholder:text-gray-400 w-[100%] ' type="password" placeholder="Type password"></input>
                <button className='outline-none bg-emerald-600 text-xl rounded-full  py-3 mt-2 w-[100%] '>Log in</button>
            </form>

        </div>
   
    </div>
 
  )
}

export default Login



