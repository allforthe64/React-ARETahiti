import React, { useState } from 'react'

const AddNewPaddle = () => {

    //initialize state
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [shaftLength, setShaftLength] = useState(0)
    const [shaftConstruction, setShaftConstruction] = useState('')
    const [bladeDiameter, setBladeDiameter] = useState(0)
    const [bladeShape, setBladeShape] = useState('')
    const [bladeMaterial, setBladeMaterial] = useState('')
    const [bladeDegree, setBladeDegree] = useState(0)
    const [shaftDegree, setShaftDegree] = useState(0)
    const [img, setImg] = useState()
    const [queuedPaddles, setQueuedPaddles] = useState([])

    const handleAddPaddle = async () => {

    }

  return (
    <section className='w-full h-auto pb-10 bg-[#212121]'>
        <form className='w-full h-full space-y-6' onSubmit={handleAddPaddle}>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Choose a <span className='text-[#FF3C00]'>brand:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={brand} onChange={(e) => {
                        if (e.target.value !== '') {
                            if (e.target.value === 'hypr') {
                                setShaftConstruction('')
                                setBrand(e.target.value)
                            } else if (e.target.value === 'palafamala') {
                                setBladeShape('circle')
                                setBrand(e.target.value)
                            } else {
                                setBladeShape('')
                                setBrand(e.target.value)
                            }
                        }
                    }}>
                        <option value='' className='text-[#515151]'>Choose one...</option>
                        <option value='hypr' className='text-[#515151]'>Hypr Nalu Hawaii</option>
                        <option value='palafamala' className='text-[#515151]'>Palafamala</option>
                        <option value='viper' className='text-[#515151]'>Viper</option>
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Choose a <span className='text-[#FF3C00]'>model:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading' disabled={brand === ''} value={model} onChange={(e) => {
                        if (e.target.value !== '') {
                            if (e.target.value === 'liberator') {
                                setBladeShape('square')
                            }
                            setModel(e.target.value)
                        }
                    }}>
                        {brand === 'palafamala' ?
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='standard' className='text-[#515151]'>Palafamala standard paddle</option>
                                <option value='steers' className='text-[#515151]'>Palafamala steers paddle</option>
                                <option value='custom' className='text-[#515151]'>Palafamala custom paddle</option>
                            </>
                        : brand === 'viper' ?
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='standard' className='text-[#515151]'>Viper standard paddle</option>
                                <option value='steers' className='text-[#515151]'>Viper steers paddle</option>
                            </>
                        :
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='liberator' className='text-[#515151]'>Liberator</option>
                                <option value='disciplinarian' className='text-[#515151]'>Disciplinarian</option>
                                <option value='disciple' className='text-[#515151]'>Disciple</option>
                            </>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Enter shaft <span className='text-[#FF3C00]'>length:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading' value={shaftLength} onChange={(e) => setShaftLength(e.target.value)} type='number'/>
                </div>
            </div>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>shaft construction:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={shaftConstruction} onChange={(e) => {
                        if (e.target.value !== '') {
                            setShaftConstruction(e.target.value)
                        }
                    }}>
                        {brand !== 'hypr' ?
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='bamboo' className='text-[#515151]'>Bamboo</option>
                                <option value='bamboo/carbon' className='text-[#515151]'>Bamboo + carbon hybrid</option>
                                <option value='carbon' className='text-[#515151]'>Carbon</option>
                                <option value='wood' className='text-[#515151]'>Wood</option>
                                <option value='wood/carbon' className='text-[#515151]'>Wood + carbon hybrid</option>
                            </>
                        :
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='carbon' className='text-[#515151]'>Carbon</option>
                                <option value={'meallic'} className='text-[#515151]'>Metallica Carbon</option>
                            </>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Enter blade <span className='text-[#FF3C00]'>diameter:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading' value={bladeDiameter} onChange={(e) => setBladeDiameter(e.target.value)} type='number'/>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>blade shape:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={bladeShape} onChange={(e) => {
                        if (e.target.value !== '') {
                            setBladeShape(e.target.value)
                        }
                    }}>
                        {model === 'liberator' ?
                            <option value='square' className='text-[#515151]'>Square</option>
                        :
                        brand === 'viper' ?
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='square' className='text-[#515151]'>Square</option>
                                <option value='circle' className='text-[#515151]'>Circle</option>
                            </>
                        :
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='circle' className='text-[#515151]'>Circle</option>
                            </>
                        }
                    </select>
                </div>
            </div>
            <div className='w-full flex justify-around pt-2'>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>blade material:</span></label>
                    <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={bladeMaterial} onChange={(e) => {
                        if (e.target.value !== '') {
                            setBladeMaterial(e.target.value)
                        }
                    }}>
                        {brand === 'viper' || brand === 'palafamala' ?
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='carbon' className='text-[#515151]'>Carbon</option>
                            </>
                        : 
                            <>
                                <option value='' className='text-[#515151]'>Choose one...</option>
                                <option value='carbon' className='text-[#515151]'>Carbon</option>
                                <option value='walnut' className='text-[#515151]'>Walnut</option>
                                <option value='metallic' className='text-[#515151]'>Metallic</option>
                            </>
                        }
                    </select>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Enter blade <span className='text-[#FF3C00]'>degree angle:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading' value={bladeDegree} onChange={(e) => setBladeDegree(e.target.value)} type='number'/>
                </div>
                <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Enter shaft <span className='text-[#FF3C00]'>degree angle:</span></label>
                    <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading' value={shaftDegree} onChange={(e) => setShaftDegree(e.target.value)} type='number'/>
                </div>
            </div>
            <div className='pl-9 pt-8 flex gap-x-10'>
                <p className='heading text-lg text-white font-medium'>Add <span className='text-[#FF3C00]'>paddle photo:</span></p>
                <label htmlFor='paddleImg' className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer' onClick={() => false}>
                    Add image
                </label>
                <input id='paddleImg' type='file' accept='image/png, image/jpeg, image/jpg' hidden onChange={(e) => {
                    e.preventDefault()
                    setImg(e.target.files[0])
                }}/>
            </div>
            <div className='w-full px-9 pt-8 flex'>
                {img &&
                    <div className='w-2/12'>
                        <p className='heading text-[#FF3C00] text-lg'>Thumbnail:</p>
                        <div className='w-[10vw] flex justify-end'>
                            <button className='text-xl hover:scale-110 transition duration-200 ease-in-out text-white' onClick={(e) => {
                                e.preventDefault()
                                setImg(null)
                            }}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className='w-[10vw] h-[20vh]'>
                            <img src={URL.createObjectURL(img)} className='w-full h-full object-cover'/>
                        </div>
                    </div>
                }
            </div>
            <div className='w-full flex justify-center pt-6 gap-x-6'>
                <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-xl' type='button'>Add to inventory</button>
                <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-xl' type='button'>Save and create new</button>
                <button className={queuedPaddles > 0 ? 'px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-xl' : 'px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium text-xl opacity-50'} disabled={queuedPaddles === 0} type='button'>Upload queued paddles ({queuedPaddles.length})</button>
            </div>
        </form>
    </section>
  )
}

export default AddNewPaddle