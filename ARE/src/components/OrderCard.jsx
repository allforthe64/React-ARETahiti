import React from 'react'

const OrderCard = ({id, fName, lName, boat, email, phone, region}) => {
  return (
    <div className='bg-white border-2 border-black rounded-2xl w-11/12 py-8'>
        <div className='flex justify-around w-10/12'>
            <p className='heading grey text-xl '>Order Id: {id}</p>
            <p className='heading grey text-lg'>First Name: {fName}</p>
            <p className='heading grey text-lg'>Last Name: {lName}</p>
        </div>
        <div className='pl-[1.5%] pt-8 flex justify-around w-7/12'>
            <p className='heading grey text-base text-left'>Boat Type: {boat}</p>
            <p className='heading grey text-base text-left'>Customer Email: {email}</p>

        </div>
        <div className='pl-[3.8%] pt-8 flex w-6/12'>
            <p className='heading grey text-base text-left'>Customer Phone: {phone}</p>
            <p className='heading grey text-base text-left pl-[10%]'>Customer Region: {region}</p>
        </div>
    </div>
  )
}

export default OrderCard