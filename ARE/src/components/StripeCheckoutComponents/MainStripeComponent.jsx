import React, { useEffect, useState } from 'react'

//stripe imports
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

//checkout component import
import CheckoutForm from './CheckoutForm'

//loading icons import
import LoadingIcons from 'react-loading-icons'

import { axiosPrivate } from '../../api/axios'

const MainStripeComponent = ({ transactionAmount, submitOrder }) => {

    //initialize state
    const [stripePromise, setStripePromise] = useState()
    const [clientSec, setClientSec] = useState()

    //create instance of stripe promise
    useEffect(() => {
        //create a promise that resolves to a stripe object
        setStripePromise(loadStripe('pk_test_51P8OOdHyHKmonoCTr1NxfFP1lCHGiMDbq8Lcw3PvTqkyEJcd3NrBM1TE5qQhZyGXYjkbnFxXPTLQlHbQYaoY6jKf00ygJ8Teq9'))
    }, [])


    useEffect(() => {
        const stripeRoute = async () => {
            const response = await fetch('https://aitogearserver.vercel.app/api/embedded-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: transactionAmount * 100
                })
            })
            console.log(response)
            
            const { clientSecret } = await response.json()
            setClientSec(clientSecret)
        }
        stripeRoute()
    }, [])

  return (
    <>
        {stripePromise && clientSec ?
            <div className='w-10/12 bg-white px-10 py-6 rounded-lg'>
                <div className='w-full flex justify-center'>
                    <Elements stripe={stripePromise} options={{ clientSecret: clientSec }}>
                        <CheckoutForm submitOrder={submitOrder}/>
                    </Elements>
                </div>
            </div>
        :
            <div className='w-full h-full flex justify-center items-center'>
                <LoadingIcons.TailSpin stroke='#FF3C00' className='w-[15px] h-[15px]'/>
                <p className='text-[#FF3C00] pl-3 text-sm heading'>Loading...</p>
            </div>
        }
    </>
  )
}

export default MainStripeComponent