import React, { useContext, useState, useEffect } from 'react'
import ShoppingCartContext from '../context/ShoppingCartProvider';

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLessThan, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
/* import PayPalButton from './PayPalButton'; */

import axios, { axiosPrivate } from '../api/axios';

import MainStripeComponent from './StripeCheckoutComponents/MainStripeComponent';
import { toast } from 'react-toastify';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/

const ShoppingCart = () => {
  
  //initialize state
  const [mode, setMode] = useState('review')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [aptSuite, setAptSuite] = useState('')
  const [province, setProvince] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(false)

  //Consume shopping cart context
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [mode])

  //test if the resetEmail is valid
  useEffect(() => {
    if (email !== '') setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    //test if the resetEmail is valid
    useEffect(() => {
        if (phone !== '') setValidPhone(PHONE_REGEX.test(phone))
    }, [phone])

  const submitOrder = async () => {
    if (fName === '') {
        toast.error('Please enter your first name')
        return false
    } else if (lName === '') {
        toast.error('Please enter your last name')
        return false
    } else if (email === '' || !EMAIL_REGEX.test(email)) {
        toast.error('Please enter a valid email address')
        return false
        return false
    } else if (phone === '' || !PHONE_REGEX.test(phone)) {
        toast.error('Please enter a valid phone number')
        return false
    } else if (address === '') {
        toast.error('Please enter your shipping address')
        return false
    } else if (province === '') {
        toast.error('Please enter your province')
        return faLessThan
    } else if (zipCode === '') {
        toast.error('Please enter a zip code')
        return false
    } else {
        const paymentData = {
            fName: fName,
            lName: lName,
            email: email,
            phone: phone,
            addressLine1: address,
            aptSuite: aptSuite,
            province: province,
            zipCode: zipCode,
            id: [...Array(20)].map(() => (Math.random().toString(36)[Math.random() < 0.5 ? 'toUpperCase' : 'toLowerCase']())).join('')
        }
        await sendConfoEmail(paymentData)
    }
  }

  const sendConfoEmail = async (paymentData) => {

    try {
      //send the email
      const response = await axiosPrivate.post('https://aitogearserver.vercel.app/api/sendOrderConfoEmail', {
        paymentData: paymentData,
        shoppingCart: shoppingCart,
      });

      /* const shipperResponse = await axiosPrivate.post('https://aitogearserver.vercel.app/api/sendShipperConfoEmail', {
        paymentData: paymentData,
        shoppingCart: shoppingCart,
      }); */
      
      setShoppingCart([])
      setMode('success')
    } catch (err) {
      console.log('error: ', err)
    }
    
  }

  return (
    <div className='w-full py-10'>
      <h1 className='w-full heading text-4xl max-md:text-3xl max-sm:text-2xl font-semibold grey'>Shopping <span className='text-[#FF3C00]'>Cart</span></h1>
      {shoppingCart.length > 0 ?
        <>
          {mode === 'review' ?
            <>
              <div className='w-full space-y-10 pt-10 px-10 max-sm:px-5 min-h-[60vh] max-h-auto'>
                {
                  shoppingCart.map((item) => {
                    if (item.itemName !== 'Dragon Boat Blade') {
                        return (
                          <div className='w-full border-b-2 border-[#212121] px-2 pb-2 space-y-4'>
                            <div className='flex items-end gap-x-6 max-[980px]:flex-wrap max-[980px]:space-y-4'>
                              <div className='w-[75px] h-[75px]'>
                                <img src={item.itemName === 'Liberator' ? "./liberator_2.JPG" : item.itemName === 'Disciplinarian' ? "./disciplinarian_1.png" : item.itemName === 'Disciple' ? "./disciple_1.png" : item.itemName === 'Koa Blade' ? 'koa_blade_1.png' : "db-blade-1.png"} className='w-full h-full object-cover'/>
                              </div>
                              <p className='heading text-[#FF3C00] text-2xl'>{item.itemName}</p>
                              <p className='heading grey text-xl max-sm:text-base'>Blade size: <span className='text-[#FF3C00]'>{item.bladeSize}"</span></p>
                              <p className='heading grey text-xl max-sm:text-base'>Blade construction: <span className='text-[#FF3C00]'>{item.bladeConstruction.charAt(0).toUpperCase() + item.bladeConstruction.slice(1)}</span></p>
                              <p className='heading grey text-xl max-sm:text-base'>Length: <span className='text-[#FF3C00]'>{item.bladeLength}"</span></p>
                            </div>
                            <div className='w-full flex items-end space-x-6 pl-28 max-[980px]:pl-0 max-[813px]:flex-wrap max-[813px]:space-x-4 max- max-md:justify-start max-md:space-x-0 max-md:gap-x-6 max-md:gap-y-6'>
                              <div className='flex space-x-4 items-end max-[1073px]:w-5/12 max-md:w-7/12 max-[536px]:w-full'>
                                <p className='heading grey text-xl max-sm:text-base'>Quantity: </p>
                                <div className="flex gap-x-4 pt-2">
                                    <button className="px-2 border-2 border-[#212121] rounded-md" type="button" onClick={() => {
                                        if (item.quantity !== 1) {
                                          setShoppingCart(prev => prev.map(cartItem => {
                                            if (cartItem.itemId === item.itemId) {
                                              return {
                                                ...cartItem,
                                                quantity: cartItem.quantity - 1
                                              }
                                            } else return cartItem
                                          }))
                                      }
                                    }}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input type="number" min={1} value={item.quantity} className="border-b-2 border-[#212121] heading w-3/12 pl-4" onChange={(e) => setQuantity(e.target.value)}/>
                                    <button type="button" onClick={() => setShoppingCart(prev => prev.map(cartItem => {
                                      if (cartItem.itemId === item.itemId) {
                                        return {
                                          ...cartItem,
                                          quantity: cartItem.quantity + 1
                                        }
                                      } else return cartItem
                                    }))} className="px-2 border-2 border-[#212121] rounded-md">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                              </div>
                              <p className='heading grey text-xl max-sm:text-base'>Price: <span className='text-[#FF3C00]'>${item.price * item.quantity}.00</span></p>
                              <button className="p-2 rounded-lg bg-red-600 border-2 border-transparent text-sm max-[900px]:text-base max-sm:text-sm heading text-white border-2 border-transparent hover:scale-110 heading text-white transition ease-in-out duration-200 flex items-center space-x-4 ml-4" onClick={() => setShoppingCart(prev => prev.filter(cartItem => cartItem.itemId !== item.itemId))}>
                                  <p>Remove item(s)</p>
                                  <FontAwesomeIcon icon={faTrash}/>
                              </button>
                            </div>
                          </div>
                        )
                    } else {
                      return (
                        <div className='w-full border-b-2 border-[#212121] px-2 pb-2 space-y-4'>
                          <div className='flex items-end gap-x-6 max-[980px]:flex-wrap max-[980px]:space-y-4'>
                            <div className='w-[75px] h-[75px]'>
                              <img src={item.itemName === 'Liberator' ? "./liberator_2.JPG" : item.itemName === 'Disciplinarian' ? "./disciplinarian_1.png" : item.itemName === 'Disciple' ? "./disciple_1.png" : "db-blade-1.png"} className='w-full h-full object-cover'/>
                            </div>
                            <p className='heading text-[#FF3C00] text-2xl'>{item.itemName}</p>
                            <p className='heading grey text-xl max-sm:text-base'>Blade size: <span className='text-[#FF3C00]'>{item.bladeSize}"</span></p>
                            <p className='heading grey text-xl max-sm:text-base'>Blade construction: <span className='text-[#FF3C00]'>{item.bladeConstruction.charAt(0).toUpperCase() + item.bladeConstruction.slice(1)}</span></p>
                            <p className='heading grey text-xl max-sm:text-base'>Length: <span className='text-[#FF3C00]'>{item.bladeLength}{item.bladeLength !== 'Adjustable' ? '"' : ''}</span></p>
                          </div>
                          <div className='w-full flex items-end space-x-6 pl-28 max-[980px]:pl-0 max-[813px]:flex-wrap max-[813px]:space-x-4 max- max-md:justify-start max-md:space-x-0 max-md:gap-x-6 max-md:gap-y-6'>
                            <div className='flex space-x-4 items-end max-[1073px]:w-5/12 max-md:w-7/12 max-[536px]:w-full'>
                              <p className='heading grey text-xl max-sm:text-base'>Quantity: </p>
                              <div className="flex gap-x-4 pt-2">
                                  <button className="px-2 border-2 border-[#212121] rounded-md" type="button" onClick={() => {
                                      if (item.quantity !== 1) {
                                        setShoppingCart(prev => prev.map(cartItem => {
                                          if (cartItem.itemId === item.itemId) {
                                            return {
                                              ...cartItem,
                                              quantity: cartItem.quantity - 1
                                            }
                                          } else return cartItem
                                        }))
                                    }
                                  }}>
                                      <FontAwesomeIcon icon={faMinus} />
                                  </button>
                                  <input type="number" min={1} value={item.quantity} className="border-b-2 border-[#212121] heading w-3/12 pl-4" onChange={(e) => setQuantity(e.target.value)}/>
                                  <button type="button" onClick={() => setShoppingCart(prev => prev.map(cartItem => {
                                    if (cartItem.itemId === item.itemId) {
                                      return {
                                        ...cartItem,
                                        quantity: cartItem.quantity + 1
                                      }
                                    } else return cartItem
                                  }))} className="px-2 border-2 border-[#212121] rounded-md">
                                      <FontAwesomeIcon icon={faPlus} />
                                  </button>
                              </div>
                            </div>
                            <p className='heading grey text-xl max-sm:text-base'>Price: <span className='text-[#FF3C00]'>${item.price * item.quantity}.00</span></p>
                            <button className="p-2 rounded-lg bg-red-600 border-2 border-transparent text-sm max-[900px]:text-base max-sm:text-sm heading text-white border-2 border-transparent hover:scale-110 heading text-white transition ease-in-out duration-200 flex items-center space-x-4 ml-4" onClick={() => setShoppingCart(prev => prev.filter(cartItem => cartItem.itemId !== item.itemId))}>
                                <p>Remove item(s)</p>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
              <p className='heading grey text-3xl max-sm:text-2xl font-semibold w-full text-left px-10 max-sm:px-5 pt-6'>Total: <span className='text-[#FF3C00]'>${shoppingCart.reduce((sum, obj) => sum + obj.quantity * obj.price, 0)}.00</span></p>
              <div className='w-full flex justify-center pt-6'>
                <button className="p-2 rounded-lg border-2 border-transparent text-lg max-sm:text-base heading text-white hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] bg-[#FF3C00] transition duration-200 ease-in-out" type="button" onClick={() => setMode('payment')}>
                    Proceed to payment
                </button>
              </div> 
            </>
          : mode === 'payment' ?
            <>
              <div className='w-full px-10 max-md:px-3 pt-6 space-y-6'>

                  <div className='w-full'>
                    <button className='heading text-[#FF3C00] flex items-center text-2xl max-md:text-xl max-sm:text-lg space-x-4' onClick={() => setMode('review')}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <p>Back</p>
                    </button>
                  </div>

                  <div className='w-full flex justify-around text-xl max-sm:text-base max-[430px]:text-sm max-[376px]:flex-col max-[376px]:space-y-6 max-[376px]:items-center'>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>First name:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={fName} onChange={(e) => setFName(e.target.value)} placeholder='First Name'/>
                    </div>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Last name:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={lName} onChange={(e) => setLName(e.target.value)} placeholder='Last Name'/>
                    </div>
                  </div>

                  <div className='w-full flex justify-around text-xl max-sm:text-base max-[430px]:text-sm max-[376px]:flex-col max-[376px]:space-y-6 max-[376px]:items-center'>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Email:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                        {email !== '' && !validEmail &&
                            <p className='w-full text text-red-600'>Please enter a valid email</p>
                        } 
                    </div>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Phone:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone'/>
                        {phone !== '' && !validPhone &&
                            <p className='w-full text text-red-600'>Please enter a valid phone number</p>
                        } 
                    </div>
                  </div>

                  <div className='w-full flex justify-around text-xl max-sm:text-base max-[430px]:text-sm max-[376px]:flex-col max-[376px]:space-y-6 max-[376px]:items-center'>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Address:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
                    </div>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Apt. Suite, etc.:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={aptSuite} onChange={(e) => setAptSuite(e.target.value)} placeholder='Apt. Suite, etc.'/>
                    </div>
                  </div>

                  <div className='w-full flex justify-around text-xl max-sm:text-base max-[430px]:text-sm max-[376px]:flex-col max-[376px]:space-y-6 max-[376px]:items-center'>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Province:</label>
                        <select className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={province} onChange={(e) => setProvince(e.target.value)}>
                          <option>Choose one...</option>
                          <option>Alberta</option>
                          <option>British Columbia</option>
                          <option>Manitoba</option>
                          <option>New Brunswick</option>
                          <option>Newfoundland & Labrador</option>
                          <option>Northwest Territories</option>
                          <option>Nova Scotia</option>
                          <option>Nunavut</option>
                          <option>Ontario</option>
                          <option>Prince Edward Island</option>
                          <option>Quebec</option>
                          <option>Saskatchewan</option>
                          <option>Yukon</option>
                        </select>
                    </div>
                    <div className='w-5/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                        <label className='heading text-[#212121]'>Zip code:</label>
                        <input className='w-full border-b-2 border-[#212121] text-[#212121] bg-transparent focus:outline-none heading pl-2' type='text' value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder='Zip code'/>
                    </div>
                  </div>
                  
                  <MainStripeComponent transactionAmount={shoppingCart.reduce((sum, obj) => sum + obj.quantity * obj.price, 0)} submitOrder={submitOrder}/>

                  <p className='heading grey text-3xl max-sm:text-2xl font-semibold w-full text-left px-10 max-sm:px-5 pt-6'>Total: <span className='text-[#FF3C00]'>${shoppingCart.reduce((sum, obj) => sum + obj.quantity * obj.price, 0)}.00</span></p>
                </div>
            </>
          :
            <div className='w-full h-[60vh] flex flex-col justify-center items-center'>
              <h1 className='heading text-2xl grey'>Order placed!</h1>
              <p className='heading text-lg grey max-sm:text-base px-5 pt-6'>If necessary, we will reach out to you for shipping payment!</p>
              <Link to={'/'}>
                <button className="p-2 rounded-lg bg-[#FF3C00] border-2 border-transparent text-lg heading text-white border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] transition duration-200 ease-in-out mt-6">
                  Back to homepage
                </button>
              </Link> 
            </div>
          } 
        </>
      :
        <div className='w-full h-[60vh] flex flex-col justify-center items-center'>
          <h1 className='heading text-2xl grey'>Shopping cart is empty!</h1>
          <Link to={'/'}>
            <button className="p-2 rounded-lg bg-[#FF3C00] border-2 border-transparent text-lg heading text-white border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] transition duration-200 ease-in-out mt-6">
              Back to homepage
            </button>
          </Link> 
        </div>
      }
    </div>
  )
}

export default ShoppingCart