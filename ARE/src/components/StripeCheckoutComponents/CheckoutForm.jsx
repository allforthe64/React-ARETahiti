import React, {useEffect, useState} from 'react'

//stripe imports
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentElement } from '@stripe/react-stripe-js'

const CheckoutForm = (/* {submitRegistration} */) => {

    //initialize stripe instance/stripe elements
    const stripe = useStripe()
    const elements = useElements()

    //initialize state
    const [message, setMessage] = useState()
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessing(true)

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}`
            },
            redirect: 'if_required'
        })

        if (error) {
            setMessage(error.message)
        }

        /* submitRegistration() */
        setIsProcessing(false)
    }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        {/* Show any error or success messages */}
        {message && <div id="payment-message" className='mb-2'>
            <p className='w-full text-center text-red-500 dosis-heavy'>{message}</p>
        </div>}
        <PaymentElement />
        <div className='w-full flex justify-center'>
            <button disabled={isProcessing} id="submit" className='text-white bg-[#01354B] border-2 border-transparent text-lg mt-4 dosis-heavy px-4 rounded-full hover:scale-110 hover:bg-transparent hover:border-2 hover:border-[#01354B] hover:text-[#01354B] transition duration-200 ease-in-out ml-[3%]'>
                {isProcessing ? "Processing ... " : "Pay now"}
            </button>
        </div>
    </form>
  )
}

export default CheckoutForm