import React, { useState, useEffect, useRef } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import SelectCanoeWidget from './SelectCanoeWidget';
import BuyerInfo from './BuyerInfo';
import MainStripeComponent from '../StripeCheckoutComponents/MainStripeComponent';


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

import { toast } from 'react-toastify';

const OrderForm = () => {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [validEmail, setValidEmail] = useState()
    const [validPhone, setValidPhone] = useState()
    const [address, setAddress] = useState('')
    const [aptSuite, setAptSuite] = useState('')
    const [province, setProvince] = useState('')
    const [zipCode, setZipCode] = useState('')

    const [model, setModel] = useState('')
    const [construction, setConstruction] = useState('')
    const [paintType, setPaintType] = useState('')
    const [amaConstruction, setAmaConstruction] = useState('')
    const [iakoConstruction, setIakoConstruction] = useState('')

    const [mode, setMode] = useState('')

    const navigate = useNavigate()

    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        const phone_result = PHONE_REGEX.test(phone)
        setValidEmail(result)
        setValidPhone(phone_result)
    })

    const form = useRef();

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
                message: message
            }
            await sendConfoEmail(paymentData)
        }
      }
    
      const sendConfoEmail = async (paymentData) => {
        
        if (model !== 'V6 - Matahina') {
            try {

                const canoeObj = {
                    model: model,
                    construction: construction,
                    paintType: paintType,
                    amaConstruction: construction,
                    iakoConstruction: 'Carbon'
                }

                //send the email
                const response = await fetch('https://aitogearserver.vercel.app/api/sendCanoeConfoEmail', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    paymentData: paymentData,
                    canoeObj: canoeObj,
                  })
                })
          
                const shipperResponse = await fetch('https://aitogearserver.vercel.app/api/sendShipperCanoeConfoEmail', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    paymentData: paymentData,
                    canoeObj: canoeObj,
                  })
                })
                
                setFName('')
                setLName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setValidEmail(false)
                setValidPhone(false)
                setAddress('')
                setAptSuite('')
                setProvince('')
                setZipCode('')
            
                setModel('')
                setConstruction('')
                setPaintType('')
                setAmaConstruction('')
                setIakoConstruction('')
                toast.success('Deposit payment successful ✔')
            } catch (err) {
            console.log('error: ', err)
            }
        } else {

            const canoeObj = {
                model: model,
                construction: construction,
                paintType: paintType,
                amaConstruction: amaConstruction,
                iakoConstruction: iakoConstruction
            }

            //send the email
            const response = await fetch('https://aitogearserver.vercel.app/api/sendMatahinaConfoEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  paymentData: paymentData,
                  canoeObj: canoeObj,
                })
            })
        
            /* const shipperResponse = await fetch('https://aitogearserver.vercel.app/api/sendShipperMatahinaConfoEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  paymentData: paymentData,
                  canoeObj: canoeObj,
                })
            }) */

            setFName('')
            setLName('')
            setEmail('')
            setPhone('')
            setMessage('')
            setValidEmail(false)
            setValidPhone(false)
            setAddress('')
            setAptSuite('')
            setProvince('')
            setZipCode('')
        
            setModel('')
            setConstruction('')
            setPaintType('')
            setAmaConstruction('')
            setIakoConstruction('')
        }
        
      }

  return (
    <div className='flex flex-col items-center py-20 max-lg:py-10'>
        <p className='heading grey text-6xl mb-14 sm:max-md:text-4xl max-sm:text-3xl max-md:mb-8'>Order A Boat</p>
        <SelectCanoeWidget model={model} setModel={setModel} construction={construction} setConstruction={setConstruction} paintType={paintType} setPaintType={setPaintType} amaConstruction={amaConstruction} setAmaConstruction={setAmaConstruction} iakoConstruction={iakoConstruction} setIakoConstruction={setIakoConstruction}/>
        <BuyerInfo fName={fName} setFName={setFName} lName={lName} setLName={setLName} email={email} setEmail={setEmail} validEmail={validEmail} phone={phone} setPhone={setPhone} validPhone={validPhone} address={address} setAddress={setAddress} aptSuite={aptSuite} setAptSuite={setAptSuite} province={province} setProvince={setProvince} zipCode={zipCode} setZipCode={setZipCode} message={message} setMessage={setMessage}/>
        {model !== '' &&
            <>
                {model !== 'V6 - Matahina' ?
                    <MainStripeComponent transactionAmount={200} submitOrder={submitOrder}/>
                :
                    <div className='w-full flex justify-center'>
                        <button className="p-2 rounded-lg bg-[#FF3C00] border-2 border-transparent text-lg max-[900px]:text-base max-sm:text-sm heading text-white border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] heading text-white transition ease-in-out duration-200" type="button" onClick={(e) => submitOrder()}>
                            Submit Order Request
                        </button>
                    </div>
                }
            </>
        }
    </div>
  )
}

export default OrderForm