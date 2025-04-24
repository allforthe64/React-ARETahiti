import React, { useEffect, useState } from 'react'

//stripe imports
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

//checkout component import
import CheckoutForm from './CheckoutForm'

//loading icons import
import LoadingIcons from 'react-loading-icons'

import { axiosPrivate } from '../../api/axios'

const MainStripeComponent = ({ transactionAmount }) => {

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
                body: JSON.stringify({
                    transaction: {
                        amount: transactionAmount * 100
                    }
                })
            })
           /* const response = await axiosPrivate.post('https://aitogearserver.vercel.app/api/embedded-checkout', {
                amount: transactionAmount * 100
            }); */
            
            const { clientSecret } = await response.json()
            setClientSec(clientSecret)
        }
        stripeRoute()
    }, [])

  return (
    <>
        {stripePromise && clientSec ?
            <div className='w-10/12 bg-white px-10 py-6 rounded-lg'>
                <Elements stripe={stripePromise} options={{ clientSecret: clientSec }}>
                    <CheckoutForm />
                </Elements>
            </div>
        :
            <div className='w-full h-full flex justify-center items-center'>
                <LoadingIcons.TailSpin stroke='#09CAC7' className='w-[15px] h-[15px]'/>
                <p className='text-[#09CAC7] pl-3 text-sm dosis-heavy'>Loading...</p>
            </div>
        }
    </>
  )
}

export default MainStripeComponent