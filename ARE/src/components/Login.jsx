import React from 'react'

export const Login = () => {
  return (
    <div className='py-20 flex justify-center'>
        <div className='bg-neutral-200 border-2 border-black rounded-2xl w-[60%] py-10'>
            <h1 className='text-6xl font-bold my-10'>Rep Login</h1>
            <form className='flex flex-col items-center'> 
                <input type={'text'} placeholder='username' className='border-b bg-transparent border-black text-xl w-[50%] mb-10 pl-2 py-px focus:outline-none focus:bg-white'/>
                <input type={'password'} placeholder='password' className='border-b bg-transparent border-black text-xl w-[50%] pl-2 py-px focus:outline-none focus:bg-white mb-12'/>
                <button type='submit' className='text text-2xl orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200'>Login</button>
            </form>
        </div>  
    </div>
  )
}
