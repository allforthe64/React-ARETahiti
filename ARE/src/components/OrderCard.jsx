import React, { useState } from 'react'

const OrderCard = ({id, fName, lName, boat, email, phone, region, deleteOrder}) => {
    const orderId = id
    const [edit, setEdit] = useState(false)
    const [editFName, setEditFName] = useState(fName)
    const [editLName, setEditLName] = useState(lName)
    const [editEmail, setEditEmail] = useState(email)
    let content

    const handleChange = (e, target) => {
        target === 'fName' ? setEditFName(e.target.value) : target === 'lName' ? setEditLName(e.target.value) : target === 'email' ? setEditEmail(e.target.value) : false
    }

    if (!edit) {
        content = (
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
                <div className='pl-[3%] pt-8 flex w-6/12'>
                    <p className='heading grey text-base text-left'>Customer Phone: {phone}</p>
                    <p className='heading grey text-base text-left pl-[10%]'>Customer Region: {region}</p>
                </div>
                <div className='pl-[3%] pt-4 flex w-6/12 heading'>
                    <button className='text text-sm orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200' onClick={() => setEdit(true)}>Edit Order</button>
                    <button className='ml-[4%] text text-sm border-[3px] border-red-600 hover:bg-red-600 hover:text-white text-red-600 mt-4 px-6 rounded-lg transition-color ease-in-out duration-200' onClick={() => deleteOrder(orderId)}>Delete Order</button>
                </div>
            </div>
  
        )
    } else {
        content = (
            <div className='bg-white border-2 border-black rounded-2xl w-11/12 py-8'>
                <div className='flex justify-around w-10/12'>
                    {/* <p className='heading grey text-xl '>Order Id: {id}</p> */}
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>First Name</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' value={editFName} onChange={(e) => handleChange(e, 'fName')}/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>Last Name</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' value={editLName} onChange={(e) => handleChange(e, 'lName')}/>
                    </div>
                </div>
                <div className='pl-[1.5%] pt-8 flex justify-around w-7/12'>
                    <p className='heading grey text-base text-left'>Boat Type: {boat}</p>
                    <div className='flex flex-col items-start'>
                        <label className='heading grey mb-2'>Email</label>
                        <input className='heading grey text-lg border-b bg-transparent border-black text-xl pl-2 py-px focus:outline-none focus:bg-white' placeholder='First Name' value={editEmail} onChange={(e) => handleChange(e, 'email')}/>
                    </div>
                </div>
                <div className='pl-[3%] pt-8 flex w-6/12'>
                    <p className='heading grey text-base text-left'>Customer Phone: {phone}</p>
                    <p className='heading grey text-base text-left pl-[10%]'>Customer Region: {region}</p>
                </div>
                <div className='pl-[3%] pt-4 flex w-6/12 heading'>
                    <button className='text text-sm orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200' onClick={() => setEdit(false)}>Save Changes</button>
                    <button className='ml-[4%] text text-sm border-[3px] border-red-600 hover:bg-red-600 hover:text-white text-red-600 mt-4 px-6 rounded-lg transition-color ease-in-out duration-200' onClick={() => deleteOrder(orderId)}>Delete Order</button>
                </div>
            </div>
        )
    }

    console.log(editFName)

  return (
    [content]
  )
}

export default OrderCard