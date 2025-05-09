import React, { useState } from 'react'

//component imports
import ChooseAddInventory from './AddInventoryComponents/ChooseAddInventory'
import AddNewCanoe from './AddInventoryComponents/AddNewCanoe'
import AddNewPaddle from './AddInventoryComponents/AddNewPaddle'

//fontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const AddInventory = ({ setOpenAddInventory }) => {

    const [mode, setMode] = useState('choose')

  return (
    <div className='w-[80vw] h-[90vh] bg-[#212121]'>
        <div className='w-full flex justify-end pr-6 pt-4'>
            <button className='hover:scale-110 transition duration-200 ease-in-out text-white text-3xl' onClick={() => setOpenAddInventory(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        </div>
        {mode !== 'success' ?
            <h1 className='w-full text-center heading text-white text-3xl font-medium'>Add {mode === 'choose' ? <span className='text-[#FF3C00]'>Inventory:</span> : mode === 'canoe' ? <span className='text-[#FF3C00]'>a Canoe:</span> : mode === 'paddles' ? <span className='text-[#FF3C00]'>Paddles:</span> : mode === 'apparel' ? <span className='text-[#FF3C00]'>Apparel:</span> : <span className='text-[#FF3C00]'>Parts & Accessories:</span>}</h1>
        :
            <h1 className='w-full text-center heading text-white text-3xl font-medium'>Item <span className='text-[#FF3C00]'>added successfully!</span></h1>   
        }
        {mode === 'choose' ?
            <ChooseAddInventory setMode={setMode}/>
        : mode === 'canoe' ? 
            <AddNewCanoe setMode={setMode}/>
        : mode === 'paddles' ?
            <AddNewPaddle />
        : mode === 'apparel' ? 
            <></>
        : mode === 'parts' ?
            <></>
        : 
            <section className='w-full h-[75vh] pb-10 bg-[#212121] flex justify-center items-center flex-col space-y-4'>
                <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out text-2xl' onClick={() => setMode('choose')}>Add another item</button>
                <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out text-2xl' onClick={() => setOpenAddInventory(false)}>Exit</button>
            </section>
        }
    </div>
  )
}

export default AddInventory