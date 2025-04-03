import React from 'react'

const InventoryButtons = ({ inventoryViewing, setInventoryViewing, setOpenAddInventory }) => {
  return (
    <div className='w-full mt-2 flex justify-between items-center pr-6 py-2'>
        <div className='w-9/12 border-black flex justify-around'>
            <button className={inventoryViewing === 'canoes' ? 'heading text-2xl text-[#FF3C00] border-[#FF3C00] font-semibold border-b-2 px-2 hover:scale-110 transition duration-200 ease-in-out' : 'heading text-[#515151] text-2xl font-semibold border-b-2 border-[#515151] px-2 hover:scale-110 hover:text-[#FF3C00] hover:border-[#FF3C00] transition duration-200 ease-in-out'} onClick={() => setInventoryViewing('canoes')}>
                Canoes
            </button>
            <button className={inventoryViewing === 'paddles' ? 'heading text-2xl text-[#FF3C00] border-[#FF3C00] font-semibold border-b-2 px-2 hover:scale-110 transition duration-200 ease-in-out' : 'heading text-[#515151] text-2xl font-semibold border-b-2 border-[#515151] px-2 hover:scale-110 hover:text-[#FF3C00] hover:border-[#FF3C00] transition duration-200 ease-in-out'} onClick={() => setInventoryViewing('paddles')}>
                Paddles
            </button>
            <button className={inventoryViewing === 'apparel' ? 'heading text-2xl text-[#FF3C00] border-[#FF3C00] font-semibold border-b-2 px-2 hover:scale-110 transition duration-200 ease-in-out' : 'heading text-[#515151] text-2xl font-semibold border-b-2 border-[#515151] px-2 hover:scale-110 hover:text-[#FF3C00] hover:border-[#FF3C00] transition duration-200 ease-in-out'} onClick={() => setInventoryViewing('apparel')}>
                Apparel
            </button>
            <button className={inventoryViewing === 'parts' ? 'heading text-2xl text-[#FF3C00] border-[#FF3C00] font-semibold border-b-2 px-2 hover:scale-110 transition duration-200 ease-in-out' : 'heading text-[#515151] text-2xl font-semibold border-b-2 border-[#515151] px-2 hover:scale-110 hover:text-[#FF3C00] hover:border-[#FF3C00] transition duration-200 ease-in-out'} onClick={() => setInventoryViewing('parts')}>
                Parts & Accessories
            </button>
        </div>
        <button className='px-4 py-2 bg-[#FF3C00] rounded-lg heading text-white font-medium  hover:scale-110 transition duration-200 ease-in-out' onClick={() => setOpenAddInventory(true)}>
            Add inventory
        </button>
    </div>
  )
}

export default InventoryButtons