import React, { useState } from 'react'

import { motion } from 'framer-motion'

//component imports
import InventoryMain from './inventoryComponents/InventoryMain'

const AdminDashboard = () => {

    //initialize state
    const [viewing, setViewing] = useState('inventory')

  return (
    <section className='w-full h-[100vh] flex'>
        <section className='w-[20%] h-full border-r-2 border-black pl-3 pt-4 space-y-3'>
            <motion.p initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 100}} className='w-full text-[#202020] heading text-xl font-semibold text-left'>Admin <span className='text-[#FF3C00]'>Dashboard:</span></motion.p>
            <motion.div className='w-full flex justify-start' initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 100}} transition={{delay: .5}}>
                <button className='text-[#202020] heading text-base font-semibold text-left ml-2 p-2 hover:border-b-2 hover:border-[#515151] hover:scale-105 transition duration-200 ease-in-out' onClick={() => setViewing('inventory')}>View/Edit <span className='text-[#FF3C00]'>Inventory</span></button>
            </motion.div>
            <motion.div className='w-full flex justify-start' initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 100}} transition={{delay: 1}}>
                <button className='text-[#202020] heading text-base font-semibold text-left ml-2 p-2 hover:border-b-2 hover:border-[#515151] hover:scale-105 transition duration-200 ease-in-out' onClick={() => setViewing('transactions')}>View <span className='text-[#FF3C00]'>Transactions</span></button>
            </motion.div>
        </section>
        <section className='w-[80%]'>
            {viewing === 'inventory' ?
                <InventoryMain />
            :
                <></>
            }
        </section>
    </section>
  )
}

export default AdminDashboard