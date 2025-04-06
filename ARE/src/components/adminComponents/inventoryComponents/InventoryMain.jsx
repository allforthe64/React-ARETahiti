import React, { useEffect, useState } from 'react'

//component imports
import InventoryButtons from './InventoryButtons'

import { Dialog } from '@mui/material'

//component imports
import AddInventory from './AddInventory'

import { getAllCanoes } from '../../../firebase/firestore'

const InventoryMain = () => {

    //initialize state
    const [inventoryViewing, setInventoryViewing] = useState('canoes')
    const [openAddInventory, setOpenAddInventory] = useState(false)
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        if (inventoryViewing === 'canoes') {
            const getCanoeInventory = async () => {
                const unsubscribe = await getAllCanoes(setInventory)
                return () => unsubscribe()
            }
            getCanoeInventory()
        }
    }, [inventoryViewing])

    console.log(inventory)

  return (
    <section className='w-full h-full pt-4'>
        
        <Dialog open={openAddInventory} onClose={() => setOpenAddInventory(false)} maxWidth='xl'>
            <AddInventory setOpenAddInventory={setOpenAddInventory}/>
        </Dialog>

        <h1 className='heading text-[#212121] text-3xl font-semibold'>View/Edit <span className='text-[#FF3C00]'>Inventory:</span></h1>
        <InventoryButtons inventoryViewing={inventoryViewing} setInventoryViewing={setInventoryViewing} setOpenAddInventory={setOpenAddInventory}/>
        {inventoryViewing === 'canoes' ?
            <></>
        :
            <></>
        }
    </section>
  )
}

export default InventoryMain