import React, { useState, useRef, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const CustomOrder = () => {

    const axiosPrivate = useAxiosPrivate()

    const fNameRef = useRef()

    const [fName, setFName] = useState()
    const [lName, setLName] = useState()

    const handleChange = (e, targetField) => {
        targetField === 'fName' ? setFName(e.target.value) : targetField === 'lName' ? setLName(e.target.value) : false
    }

    /* const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            //Axios response is JSON
            const response = await axiosPrivate.post('/resources', JSON.stringify({
                
            }))
        }
    } */

    console.log(lName)

    useEffect(() => {
        fNameRef.current.focus()
    }, [])

  return (
    <div className='py-20 flex flex-col items-center'>
        <h1 className='heading text-8xl grey mb-10'>Place a custom order</h1>
        <form /* onSubmit={handleSubmit} */ className='bg-neutral-200 border-2 border-black rounded-2xl w-[80%] py-10 flex flex-col items-center px-[2%]'>
            <div className='flex justify-between w-full'>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter First Name:</label>
                    <input ref={fNameRef} onChange={(e) => handleChange(e, 'fName')} id='fName' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name'/>
                </div>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter Last Name:</label>
                    <input onChange={(e) => handleChange(e, 'lName')} className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='Last Name'/>
                </div>
            </div>
            <button className='orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out'>Order Now</button>
        </form>
    </div>
  )
}

export default CustomOrder