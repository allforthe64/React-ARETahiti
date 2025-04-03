import React, { useEffect, useState } from 'react'

//regex to make sure that a real email and password have been entered
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const AdminAuthComponent = ({ handleLogin }) => {

    //state to hold email and passowrd
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState(false)

    useEffect(() => {
        if (email !== '') setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
    }

  return (
    <section className='w-full h-[100vh] relative'>
        <img src='./matahina_1.png' alt='matahina_bg_img' className='w-full h-full object-cover'/>
        <div className='w-full h-full absolute top-0 bg-black/50 flex justify-center items-center'>
            <div className='w-[50vw] h-[65vh] bg-[#202020] rounded-md pt-6 flex flex-col items-center'>
                <h1 className='heading text-3xl text-white'>Welcome to the <span className='text-[#FF3C00]'>admin portal:</span></h1>
                <p className='text text-white text-xl mt-2 font-semibold'>Sign in to <span className='text-[#FF3C00]'>get started:</span></p>
                <form className='w-full pt-6 space-y-6 flex flex-col items-center' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col items-center space-y-4'>
                        <label htmlFor='email' className='heading text-white text-2xl w-6/12 text-left'>Enter email:</label>
                        <input className='focus:outline-white focus:bg-black/25 focus:rounded-md bg-transparent border-b-2 border-white text-white placeholder-white text-xl pl-2 py-px w-6/12' type='text' placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} autoComplete={false}/>
                    </div>
                    {email !== '' && !validEmail &&
                        <p className='text text-white w-6/12 text-left'>*Please enter a valid email!</p>
                    }
                    <div className='w-full flex flex-col items-center space-y-4'>
                        <label htmlFor='password' className='heading text-white text-2xl w-6/12 text-left'>Enter password:</label>
                        <input className='focus:outline-white focus:bg-black/25 focus:rounded-md bg-transparent border-b-2 border-white text-white placeholder-white text-xl pl-2 py-px w-6/12' type='password' placeholder='Password' id='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='px-6 py-4 bg-[#FF3C00] rounded-lg heading text-white font-medium hover:bg-transparent hover:border-2 hover:border-[#FF3C00] hover:scale-110 transition duration-200 ease-in-out' type='submit'>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AdminAuthComponent