import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import OrderCard from './OrderCard'

const Orders = () => {

    const axiosPrivate = useAxiosPrivate()
    const [orders, setOrders] = useState([])

    useEffect(() => {

        let isMounted = true
        const controller = new AbortController()

        const getOrders = async () => {
            try {
                const response = await axiosPrivate.get('/order', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && setOrders(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getOrders()

        //unmount component and cancel any pending functions or requests
        return () => {
            isMounted = false
            controller.abort()
        }
    }, [])

    const orderCards = orders.map((order, i) => <OrderCard key={i} id={order._id} fName={order.customerFName} lName={order.customerLName} boat={order.boatType} email={order.customerEmail} phone={order.customerPhone} region={order.region}/>)
    
    console.log('orders', orders)

  return (
    <div>
        <div className='flex flex-col items-center h-[50vh] border-2 border-black space-y-4 overflow-auto py-4'>
            {orderCards}
        </div> 
    </div>
  )
}

export default Orders