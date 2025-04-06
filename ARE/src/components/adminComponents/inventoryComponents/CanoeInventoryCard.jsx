import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

//MUI dialog
import { Dialog } from '@mui/material'
import { deleteCanoe } from '../../../firebase/firestore'

const CanoeInventoryCard = ({inventoryItem}) => {

    //initialize state
    const [openDelete, setOpenDelete] = useState(false)

    const removeCanoe = async () => {
        await deleteCanoe(inventoryItem.id)
        setOpenDelete(false)
    }

  return (
    <div className='w-full border-b-2 border-[#212121] pb-2' key={inventoryItem.id}>

        <Dialog open={openDelete} onClose={() => setOpenDelete(false)} maxWidth='md'>
            <div className='w-[45vw] h-[35vh] bg-[#212121]'>
                <div className='w-full flex justify-end pr-6 pt-4'>
                    <button className='hover:scale-110 transition duration-200 ease-in-out text-white text-3xl' onClick={() => setOpenDelete(false)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </div>
                <h1 className='w-full text-xl heading text-white text-center font-medium mt-3 px-6'>Are you sure you want to delete <span className='text-[#FF3C00]'>{inventoryItem.brand.charAt(0).toUpperCase() + inventoryItem.brand.slice(1) + ' - ' + inventoryItem.model}?</span></h1>
                <p className='text text-white w-full text-center mt-3 text-lg font-medium'>Doing so is <span className='text-[#FF3C00]'>irreversible. Proceed?</span></p>

                <div className='w-full flex justify-center mt-4 gap-x-6'>
                    <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-lg flex items-center space-x-2' onClick={removeCanoe}>
                        <FontAwesomeIcon icon={faTrash}/> 
                        <span>Proceed</span>
                    </button>
                    <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-lg flex items-center space-x-2' onClick={() => setOpenDelete(false)}>
                        <FontAwesomeIcon icon={faXmark}/> 
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </Dialog>

        <div className='w-full flex gap-x-4 flex-wrap text font-semibold text-lg text-[#212121] gap-y-3'>
            <p>Model: <span className='text-[#FF3C00] font-bold'>{inventoryItem.model}</span></p>
            <p>Brand: <span className='text-[#FF3C00] font-bold'>{inventoryItem.brand.charAt(0).toUpperCase() + inventoryItem.brand.slice(1)}</span></p>
            <p>Hull construction: <span className='text-[#FF3C00] font-bold'>{inventoryItem.hullConstruction}</span></p>
            <p>Ama construction: <span className='text-[#FF3C00] font-bold'>{inventoryItem.amaConstruction}</span></p>
            <p>Iako construction: <span className='text-[#FF3C00] font-bold'>{inventoryItem.iakoConstruction}</span></p>
            <p>Rigging type: <span className='text-[#FF3C00] font-bold'>{inventoryItem.riggingType}</span></p>
            <p className='flex items-center gap-x-2'>Hull color: <div style={{backgroundColor: inventoryItem.hullColor}} className={`w-[15px] h-[15px] border border-black`}></div> <span className='text-[#FF3C00] font-bold'>{inventoryItem.hullColor}</span></p>
            <p className='flex items-center gap-x-2'>Ama color: <div style={{backgroundColor: inventoryItem.amaColor}} className={`w-[15px] h-[15px] border border-black`}></div> <span className='text-[#FF3C00] font-bold'>{inventoryItem.amaColor}</span></p>
            <p className='flex items-center gap-x-2'>Cockpit color: <div style={{backgroundColor: inventoryItem.cockpitColor}} className={`w-[15px] h-[15px] border border-black`}></div> <span className='text-[#FF3C00] font-bold'>{inventoryItem.cockpitColor}</span></p>
            <p>Paint type: <span className='text-[#FF3C00] font-bold'>{inventoryItem.paintType}</span></p>
            <p>Physical presence: <span className='text-[#FF3C00] font-bold'>{inventoryItem.physicalPresence}</span></p>
            <p>Location: <span className='text-[#FF3C00] font-bold'>{inventoryItem.location}</span></p>
            <p>Serial number: <span className='text-[#FF3C00] font-bold'>{inventoryItem.serialNumber}</span></p>
            <p>Canoe condition: <span className='text-[#FF3C00] font-bold'>{inventoryItem.condition}</span></p>
            <p>Price: <span className='text-[#FF3C00] font-bold'>${inventoryItem.price}</span></p>
            <p>Deposit: <span className='text-[#FF3C00] font-bold'>${inventoryItem.deposit}</span></p>
        </div>
        <div className='w-full flex justify-start mt-4 gap-x-6'>
            <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-lg flex items-center space-x-2'>
                <FontAwesomeIcon icon={faPencil}/> 
                <span>Edit item</span>
            </button>
            <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-lg flex items-center space-x-2' onClick={() => setOpenDelete(true)}>
                <FontAwesomeIcon icon={faTrash}/> 
                <span>Delete item</span>
            </button>
        </div>
    </div>
  )
}

export default CanoeInventoryCard