import ContactForm from "./ContactForm"
import { useEffect } from "react"


const OrderSimple = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <ContactForm />
    </div>
  )
}

export default OrderSimple