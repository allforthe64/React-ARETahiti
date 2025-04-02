import React, { useState } from 'react'

//component imports
import ChooseComponent from './ChooseComponent'

const Shop = () => {

    const [mode, setMode] = useState('choose')

  return (
    <main className={mode === 'choose' ? 'w-full bg-white py-10' : 'w-full bg-white py-10'}>
        <h1 className='w-full text-center heading text-5xl font-'>Shop by <span className='text-[#FF3C00]'>category:</span></h1>
        <ChooseComponent setMode={setMode}/>
    </main>
  )
}

export default Shop