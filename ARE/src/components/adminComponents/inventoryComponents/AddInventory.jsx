import React, { useState } from 'react'

//component imports
import ChooseAddInventory from './AddInventoryComponents/ChooseAddInventory'
import AddNewCanoe from './AddInventoryComponents/AddNewCanoe'

const AddInventory = ({ setOpenAddInventory }) => {

    const [mode, setMode] = useState('choose')

  return (
    <div className='w-[80vw] h-[90vh] bg-[#212121]'>
        <div className='w-full flex justify-end pr-6 pt-4'>
            <button className='hover:scale-110 transition duration-200 ease-in-out' onClick={() => setOpenAddInventory(false)}>
                <p className='text-white text-3xl heading'>X</p>
            </button>
        </div>
        <h1 className='w-full text-center heading text-white text-3xl font-medium'>Add {mode === 'choose' ? <span className='text-[#FF3C00]'>Inventory:</span> : mode === 'canoe' ? <span className='text-[#FF3C00]'>a Canoe:</span> : mode === 'paddles' ? <span className='text-[#FF3C00]'>Paddles:</span> : mode === 'apparel' ? <span className='text-[#FF3C00]'>Apparel:</span> : <span className='text-[#FF3C00]'>Parts & Accessories:</span>}</h1>
        {mode === 'choose' ?
            <ChooseAddInventory setMode={setMode}/>
        : mode === 'canoe' ? 
            <AddNewCanoe />
        : mode === 'paddles' ?
            <></>
        : mode === 'apparel' ? 
            <></>
        :
            <></>
        }
    </div>
  )
}

export default AddInventory