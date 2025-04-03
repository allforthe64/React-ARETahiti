import React, { useEffect, useState } from 'react'

//component imports
import ChooseComponent from './ChooseComponent'
import { getAllApparel, getAllCanoes, getAllPaddles, getAllPartsAndAccessories } from '../../firebase/firestore'

const Shop = () => {

    const [mode, setMode] = useState('choose')
    const [shopInventory, setShopInventory] = useState([])

    useEffect(() => {
        if (mode !== 'choose') {
            if (mode === 'canoes') {
                const getAllCanoesFunction = async () => {
                    const inventory = await getAllCanoes()
                    setShopInventory(inventory)
                }
                getAllCanoesFunction()
            } else if (mode === 'paddles') {
                const getAllPaddlesFunction = async () => {
                    const inventory = await getAllPaddles()
                    setShopInventory(inventory)
                }
                getAllPaddlesFunction()
            } else if (mode === 'apparel') {
                const getAllApparelFunction = async () => {
                    const inventory = await getAllApparel()
                    setShopInventory(inventory)
                }
                getAllApparelFunction()
            } else if (mode === 'parts') {
                const getAllPartsAndAccessoriesFunction = async () => {
                    const inventory = await getAllPartsAndAccessories()
                    setShopInventory(inventory)
                }
                getAllPartsAndAccessoriesFunction()
            }
        }
    }, [mode])

    console.log(shopInventory)

  return (
    <main className={'w-full bg-white py-10'}>
        {mode === 'choose' ?
            <>
                <h1 className='w-full text-center heading text-5xl font-'>Shop by <span className='text-[#FF3C00]'>category:</span></h1>
                <ChooseComponent setMode={setMode}/>
            </>
        :
            <>
                <h1 className='w-full text-center heading text-5xl font-'>Shop <span className='text-[#FF3C00]'>{mode === 'canoes' ? 'Canoes' : mode === 'paddles' ? 'Paddles' : mode === 'apparel' ? 'Apparel' : 'Parts and Accessories'}:</span></h1>
                <div className='w-full mt-6 space-x-6'>
                    <label htmlFor='shopping' className='text text-[#515151] font-semibold text-2xl'>Shopping: </label>
                    <select id='shopping' className='w-3/12 border-b-2 border-[#515151] text-[#515151] focus:outline-none heading text-xl' value={mode} onChange={(e) => setMode(e.target.value)}>
                        <option value={'canoes'}>Canoes</option>
                        <option value={'paddles'}>Paddles</option>
                        <option value={'apparel'}>Apparel</option>
                        <option value={'parts'}>Parts & Accessories</option>
                    </select>
                </div>
            </>
        }
    </main>
  )
}

export default Shop