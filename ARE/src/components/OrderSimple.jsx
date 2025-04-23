import OrderForm from "./OrderForm";
import { useEffect } from "react"
import { motion } from "framer-motion";


const OrderSimple = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='py-20'>
        <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} viewport={{once: true}} transition={{duration: .75}} className='flex flex-col items-center'>
            <h1 className='heading grey max-md:text-3xl max-md:w-11/12 md:max-lg:text-5xl text-6xl'>Ready To Get Your Own ARE Tahiti Canoe?</h1>
            <div className='flex justify-around py-20 max-lg:flex-col-reverse max-lg:items-center max-lg:py-10'>
                <div className='w-5/12 text-left max-lg:w-10/12 max-lg:text-center'>
                    <p className='heading grey text-4xl mb-6 pt-6 max-md:text-2xl'>The Order Process</p>
                    <p className='text text-left text-lg max-lg:text-center'>To get your ARE canoe, fill out the order form below and pay the security deposit. Once you have completed these steps, the ARE order rep will contact you with further information on choosing paint color, delivery, and paying off the rest of the canoe.</p>
                </div>
                <div className='w-4/12 max-lg:w-8/12'>
                    <img alt='canoe' src='./matahina_11.jpg' />
                </div>
            </div>
        </motion.div>
        <OrderForm />
    </div>
  )
}

export default OrderSimple