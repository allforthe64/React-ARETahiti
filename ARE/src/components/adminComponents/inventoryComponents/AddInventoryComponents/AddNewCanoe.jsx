import React, { useState } from 'react'

const AddNewCanoe = () => {

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [hullConstruction, setHullConstruction] = useState('')
    const [amaConstruction, setAmaConstruction] = useState('')
    const [iakoConstruction, setIakoConstruction] = useState('')
    const [riggingType, setRiggingType] = useState('')
    const [hullColor, setHullColor] = useState('')
    const [amaColor, setAmaColor] = useState('')
    const [cockpitColor, setCockpitColor] = useState('')
    const [paintType, setPaintType] = useState('')

    const models = {
        'are': ['Marara - V1', 'Mako - V1', 'Mana - OC-1', 'Matahina - V6'],
    }

    const construction = {
        'are': {
            'Marara - V1': ['Hybrid', 'Pro Carbon'],
            'Mako - V1': ['Hybrid', 'Pro Carbon'],
            'Mana - OC-1': ['Hybrid', 'Pro Carbon'],
        },
        'timi': {
            "Timi Va'a - V1": ['Hybrid', 'Pro Carbon']
        }
    }

  return (
    <section className='w-full h-[77vh]'>
        <form className='w-full h-full space-y-2'>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose a <span className='text-[#FF3C00]'>brand:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={brand} onChange={(e) => {
                        if (e.target.value !== '') {
                            if (e.target.value === 'timi') {
                                setBrand(e.target.value)
                                setModel("Timi Va'a - V1")
                                setHullConstruction('')
                                setAmaConstruction('')
                                setIakoConstruction('')
                                setRiggingType('')
                                setHullColor('')
                                setAmaColor('')
                                setCockpitColor('')
                                setPaintType('')
                            } else {
                                setBrand(e.target.value)
                                setModel('')
                                setHullConstruction('')
                                setAmaConstruction('')
                                setIakoConstruction('')
                                setRiggingType('')
                                setHullColor('')
                                setAmaColor('')
                                setPaintType('')
                                setCockpitColor('')
                            }
                        }
                    }}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        <option value='are' className='text-[#515151]'>ARE Tahiti</option>
                        <option value='timi' className='text-[#515151]'>Timi Va'a</option>
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose a <span className='text-[#FF3C00]'>model:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={model} disabled={brand === '' || brand === 'timi'} onChange={(e) => {
                        if (e.target.value !== '') {
                            if (e.target.value === 'Matahina - V6') {
                                setModel(e.target.value)
                                setHullConstruction('Polyester Blend')
                                setAmaConstruction('')
                                setIakoConstruction('')
                                setRiggingType('Traditional')
                                setHullColor('')
                                setAmaColor('')
                                setCockpitColor('')
                                setPaintType('Gloss')
                            } else {
                                setModel(e.target.value)
                                setHullConstruction('')
                                setAmaConstruction('')
                                setIakoConstruction('')
                                setRiggingType('')
                                setHullColor('')
                                setAmaColor('')
                                setCockpitColor('')
                                setPaintType('')
                            }
                        }
                    }}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {brand !== 'timi' && brand !== '' ?
                            <>
                                {models[brand].map(model => {
                                    return (<option key={model} value={model} className='text-[#515151]'>{model}</option>)
                                })}
                            </>
                        :   <option className='text-[#515151]' value={"Timi Va'a - V1"}>Timi Va'a - V1</option>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose <span className='text-[#FF3C00]'>hull material:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={hullConstruction} disabled={model === '' || model === 'Matahina - V6'} onChange={(e) => {
                        if (e.target.value !== '') {
                            setHullConstruction(e.target.value)
                            if (model !== 'Matahina - V6') {
                                setAmaConstruction(e.target.value)
                                setIakoConstruction('Carbon')

                                if (e.target.value === 'Hybrid') {
                                    setPaintType('Gloss')
                                } else {
                                    setPaintType('')
                                }
                            }
                        }
                    }}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {model !== '' && model !== 'Matahina - V6' ?
                            <>
                                {construction[brand][model].map(type => {
                                    return <option value={type} key={type} className='text-[#515151]'>{type}</option>
                                })}
                            </>
                        :
                            <option value={'Polyester Blend'} className='text-[#515151]'>Polyester Blend</option>
                        }
                    </select>
                </div>
            </div>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose <span className='text-[#FF3C00]'>ama material:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={amaConstruction} onChange={(e) => {
                        if (e.target.value !== '') {
                            setAmaConstruction(e.target.value)
                        }
                    }} disabled={model === '' || model !== 'Matahina - V6'}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {model !== 'Matahina - V6' ?
                            <>
                                <option value={'Hybrid'} className='text-[#515151]'>Hybrid</option>
                                <option value={'Pro Carbon'} className='text-[#515151]'>Pro Carbon</option>
                            </>
                        :
                            <>
                                <option value={'Polyester Blend'} className='text-[#515151]'>Polyester Blend</option>
                                <option value={'Full Carbon'} className='text-[#515151]'>Pro Carbon</option>
                            </>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose <span className='text-[#FF3C00]'>iako material:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={iakoConstruction} onChange={(e) => {
                        if (e.target.value !== '') {
                            setIakoConstruction(e.target.value)
                        }
                    }} disabled={model === '' || model !== 'Matahina - V6'}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {model !== 'Matahina - V6' ?
                            <>
                                <option value={'Carbon'} className='text-[#515151]'>Carbon</option>
                            </>
                        :
                            <>
                                {/* <option value={'Wood'} className='text-[#515151]'>Wood</option> */}
                                <option value={'Polyester Blend'} className='text-[#515151]'>Polyester Blend</option>
                                <option value={'Full Carbon'} className='text-[#515151]'>Pro Carbon</option>
                            </>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose <span className='text-[#FF3C00]'>rigging type:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={riggingType} onChange={(e) => {
                        if (e.target.value !== '') {
                            setRiggingType(e.target.value)
                        }
                    }} disabled={model === '' || model === 'Matahina - V6'}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {model !== 'Matahina - V6' ?
                            <>
                                <option value={'Pin'} className='text-[#515151]'>Push Pin</option>
                                <option value={'Collar'} className='text-[#515151]'>Collar system</option>
                                <option value={'Traditional'} className='text-[#515151]'>Traditional</option>
                            </>
                        :
                            <>
                                {/* <option value={'Wood'} className='text-[#515151]'>Wood</option> */}
                                <option value={'Traditional'} className='text-[#515151]'>Tradditional</option>
                            </>
                        }
                    </select>
                </div>
            </div>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Enter <span className='text-[#FF3C00]'>hull color:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl pl-2' type='text' value={hullColor} placeholder='color' onChange={(e) => {
                        if (model !== 'Mana - OC-1') {
                            if (model === 'Matahina - V6') {
                                setHullColor(e.target.value)
                                setCockpitColor('#ffffff')
                            } else {
                                setHullColor(e.target.value)
                                setCockpitColor('#000000')
                            }
                        }
                        setHullColor(e.target.value)
                    }}/>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Enter <span className='text-[#FF3C00]'>ama color:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl pl-2' value={amaColor} placeholder='color' onChange={(e) => setAmaColor(e.target.value)}/>
                </div>
                
                <div className={model !== 'Mana - OC-1' ? 'w-[28%] space-y-2 opacity-50' : 'w-[28%] space-y-2'}>
                    <label className='heading text-2xl text-white font-medium'>Enter <span className='text-[#FF3C00]'>cockpit color:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl pl-2' value={cockpitColor} placeholder='color' disabled={model !== 'Mana - OC-1'} onChange={(e) => setCockpitColor(e.target.value)}/>
                </div>
            </div>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-2xl text-white font-medium'>Choose <span className='text-[#FF3C00]'>paint type:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading text-xl' value={paintType} onChange={(e) => {
                        if (e.target.value !== '') {
                            setPaintType(e.target.value)
                        }
                    }} disabled={model === '' || model === 'Matahina - V6' || hullConstruction === 'Hybrid'}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        {hullConstruction !== 'Hybrid' ?
                            <>
                                <option value={'Gloss'} className='text-[#515151]'>Gloss finish</option>
                                <option value={'Matte'} className='text-[#515151]'>Matte finish</option>
                            </>
                        :
                            <>
                                {/* <option value={'Wood'} className='text-[#515151]'>Wood</option> */}
                                <option value={'Gloss'} className='text-[#515151]'>Gloss finish</option>
                            </>
                        }
                    </select>
                </div>
            </div>
        </form>
    </section>
  )
}

export default AddNewCanoe