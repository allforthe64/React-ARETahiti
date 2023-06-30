import React, { useState, useEffect, useRef } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import emailjs from '@emailjs/browser';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const OrderSimple = () => {

    const axiosPrivate = useAxiosPrivate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [region, setRegion] = useState('')
    const [boat, setBoat] = useState('Marara V1 Pro Carbon')
    const [validEmail, setValidEmail] = useState()
    const [validPhone, setValidPhone] = useState()

    const boatImgs = {
        'Marara V1 Pro Carbon': 'marara_1.JPG',
        'Marara V1 Hybrid Carbon': 'marara_5.jpg',
        'Mako V1 Pro Carbon': 'mako_1.jpg',
        'Mako V1 Hybrid Carbon': 'mako_2.jpg',
        'Mana OC1 Pro Carbon': 'mana_1.JPG',
        'Mana OC1 Hybrid Carbon': 'mana_11.jpg',
        'Matahina V6 Carbon Iakos/Carbon Ama': 'matahina_11.jpg',
        'Matahina V6 Wood Iakos/Fiberglass Ama': 'matahina_1.png'
    }

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        setValidEmail(result)
    })

    useEffect(() => {
        const result = PHONE_REGEX.test(phone)
        setValidPhone(result)
    })

    const handleChange = (e, targetField) => {
        targetField === 'fName' ? setFName(e.target.value) : targetField === 'lName' ? setLName(e.target.value) :
        targetField === 'email' ? setEmail(e.target.value) : targetField === 'phone' ? setPhone(e.target.value) : false
    }

    const handleSelect = (e) => {
        e.target.value === 'Select One...' ? false : setRegion(e.target.value)
    }

    const handleSelectBoat = (e) => {
        e.target.value === 'Select One...' ? false : setBoat(e.target.value)
    }

    const form = useRef();


    const sendEmail = async (e) => {
        e.preventDefault()

        console.log(import.meta.env.VITE_REACT_EMAILJS_PUBLIC_KEY)

        emailjs.sendForm(import.meta.env.VITE_REACT_EMAILJS_SERVICE_KEY, import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_REACT_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        
        form.current.reset()

        setBoat('')
        setFName('')
        setLName('')
        setEmail('')
        setPhone('')
        setRegion('')
        setValidEmail(null)
        setValidPhone(null)
        
        e.target.reset()
    }

    console.log(boat)

  return (
    <div className='py-20'>
        <h1 className='heading grey text-6xl'>Ready To Get Your Own ARE Tahiti Canoe?</h1>
        <div className='flex justify-around py-20'>
            <div className='w-5/12 text-left'>
                <p className='heading grey text-4xl mb-6 pt-6'>The Order Process</p>
                <p className='text text-left text-lg'>To get your ARE canoe, fill out the contact form below to get in touch with your region's rep. Your rep will contact you with your region's currently available inventory, as well as the steps required to purchase a custom boat. Payment for your canoe will be coordinated and handled by your rep. Your rep will also explain the shipment process and any steps you need to take to get your canoe to your location.</p>
            </div>
            <div className='w-4/12'>
                <img alt='canoe' src='marara_4.JPG' />
             </div>
        </div>
        <div className='flex flex-col items-center py-20'>
            <p className='heading grey text-6xl mb-14'>Contact A Rep</p>
            <form onSubmit={sendEmail} className='bg-neutral-200 border-2 border-black rounded-2xl w-[80%] py-10 flex flex-col items-center px-[2%]' ref={form}>
            <div className='w-[90%] flex flex-col items-start mb-4'>
                <label htmlFor='region' className='text-2xl mb-3 heading grey'>Select a region:</label>
                <select id='region' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white grey order-select' onChange={(e) => handleSelect(e)} value={region} required name='to_email'>
                    <option>Select One...</option>
                    <option value={'arislan77@gmail.com'}>United States</option>
                    <option value={'arislan77@gmail.com'}>Hawaii</option>
                    <option value={'arislan77@gmail.com'}>Canada</option>
                    <option value={'arislan77@gmail.com'}>Tahiti</option>
                    <option value={'arislan77@gmail.com'}>Pacific Islands</option>
                    <option value={'arislan77@gmail.com'}>Australia</option>
                </select>
            </div>
            <div className='flex justify-around w-full mb-4'>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter First Name:</label>
                    <input onChange={(e) => handleChange(e, 'fName')} id='fName' className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' required name='from_name'/>
                </div>
                <div className='w-[40%] flex flex-col items-start'>
                    <label htmlFor='fName' className='text-2xl mb-3 heading grey'>Enter Last Name:</label>
                    <input onChange={(e) => handleChange(e, 'lName')} className='border-b bg-transparent border-black text-xl w-full mb-10 pl-2 py-px focus:outline-none focus:bg-white' placeholder='Last Name' required name='from_name'/>
                </div>
            </div>
            <div className='w-[90%] mb-4'>
                <div className='w-full flex flex-col items-start'>
                    <label htmlFor='email' className='text-2xl mb-3 heading grey'>Enter Email:</label>
                    <input id='email' className='border-b bg-transparent border-black text-xl mb-2 pl-2 py-px focus:outline-none focus:bg-white w-full' placeholder='Email' onChange={(e) => handleChange(e, 'email')} required name='from_email'/>
                    <p className={!validEmail && email.length > 0 ? 'block text-red-600 text-left text-2xl' : 'hidden'}>*Please Enter Valid Email*</p>
                </div>
            </div>
            <div className='w-[90%] mb-10 flex flex-col items-start'>
                <label className='grey heading text-2xl mb-3'>Message:</label>
                <textarea className='w-full p-2 border rounded-xl bg-transparent border-black text-xl w-full mb-10 pl-2 py-2 focus:outline-none focus:bg-white' rows={10} name='message'/>
            </div>
            <button className={validEmail && fName.length > 0 && lName.length > 0 && region.length > 0 ? 'orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out' : 'orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 opacity-50'} disabled={validEmail ? false : true}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default OrderSimple