import React from 'react'

const BuyerInfo = ({ fName, setFName, lName, setLName, email, setEmail, validEmail, phone, setPhone, validPhone, address, setAddress, aptSuite, setAptSuite, province, setProvince, zipCode, setZipCode, message, setMessage }) => {
  return (
    <section className='w-full py-10 space-y-10 max-[376px]:space-y-6'>
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
        <div className='w-full flex pl-[4.5%] max-[376px]:pl-0 text-xl max-sm:text-base max-[430px]:text-sm max-[376px]:flex-col max-[376px]:space-y-6 max-[376px]:items-center'>
            <div className='w-5/12 max-md:w-7/12 max-[376px]:w-10/12 space-y-2 flex flex-col items-start'>
                <label className='heading text-[#212121]'>Enter a message (optional):</label>
                <textarea className='w-full h-[30vh] border-2 border-[#212121] rounded-md text-[#212121] bg-transparent focus:outline-none heading pl-2 pt-2' type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter message'/>
            </div>
        </div>
    </section>
  )
}

export default BuyerInfo