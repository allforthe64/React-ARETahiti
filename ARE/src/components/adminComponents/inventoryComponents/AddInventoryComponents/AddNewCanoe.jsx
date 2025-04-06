import React, { useState } from 'react'

//fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

//import addCanoe function and canoeImage upload functions
import { addCanoe } from '../../../../firebase/firestore'
import { uploadCanoeImage } from '../../../../firebase/storage'

//react loading icons import
import LoadingIcons from 'react-loading-icons'

const AddNewCanoe = ({ setMode }) => {

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
    const [serialNumber, setSerialNumber] = useState('')
    const [price, setPrice] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [location, setLocation] = useState('')
    const [physicalPresence, setPhysicalPresence] = useState('')
    const [thumbnail, setThumbnail] = useState()
    const [gallery, setGallery] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    //add a canoe to inventory
    const handleAddCanoe = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        //upload the thumbnail image
        let thumbnailResult = await uploadCanoeImage(thumbnail)
        const thumbnailFinal = `gs://${thumbnailResult.metadata.bucket}/${thumbnailResult.metadata.fullPath}`

        //upload the gallery images
        const galleryImages = await Promise.all(gallery.map(async photo => {
            const result = await uploadCanoeImage(photo)
            return `gs://${result.metadata.bucket}/${result.metadata.fullPath}`
        }))

        //create a new canoe data object
        const newCanoeObj = {
            brand: brand,
            model: model,
            hullConstruction: hullConstruction,
            amaConstruction: amaConstruction,
            iakoConstruction: iakoConstruction,
            riggingType: riggingType,
            hullColor: hullColor,
            amaColor: amaColor,
            cockpitColor: cockpitColor,
            paintType: paintType,
            serialNumber: serialNumber,
            price: price,
            deposit: deposit,
            location: location,
            physicalPresence: physicalPresence,
            thumbnail: thumbnailFinal,
            gallery: galleryImages
        }

        //update the canoe inventory
        await addCanoe(newCanoeObj)

        setIsLoading(false)

        //setMode to success
        setMode('success')
    } 

  return (
    <section className='w-full h-auto pb-10 bg-[#212121]'>
        {isLoading ?
            <div className='w-full h-[75vh] flex justify-center items-center'>
                <LoadingIcons.TailSpin stroke='#FF3C00' className='w-[50px] h-[50px]'/>
                <p className='text-4xl heading text-[#FF3C00] font-semibold'>Loading...</p>
            </div>
        :
            <form className='w-full h-full space-y-6' onSubmit={handleAddCanoe}>
                <div className='w-full flex justify-around pt-2'>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Choose a <span className='text-[#FF3C00]'>brand:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={brand} onChange={(e) => {
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
                                    setSerialNumber('')
                                    setPrice(0)
                                    setDeposit(0)
                                    setLocation('')
                                    setPhysicalPresence('')
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
                                    setSerialNumber('')
                                    setPrice(0)
                                    setDeposit(0)
                                    setLocation('')
                                    setPhysicalPresence('')
                                }
                            }
                        }}>
                            <option value='' className='text-[#515151]'>Choose one...</option>
                            <option value='are' className='text-[#515151]'>ARE Tahiti</option>
                            <option value='timi' className='text-[#515151]'>Timi Va'a</option>
                        </select>
                    </div>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Choose a <span className='text-[#FF3C00]'>model:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={model} disabled={brand === '' || brand === 'timi'} onChange={(e) => {
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
                                    setSerialNumber('')
                                    setPrice(0)
                                    setDeposit(0)
                                    setLocation('')
                                    setPhysicalPresence('')
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
                                    setSerialNumber('')
                                    setPrice(0)
                                    setDeposit(0)
                                    setLocation('')
                                    setPhysicalPresence('')
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
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>hull material:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={hullConstruction} disabled={model === '' || model === 'Matahina - V6'} onChange={(e) => {
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
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>ama material:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={amaConstruction} onChange={(e) => {
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
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>iako material:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={iakoConstruction} onChange={(e) => {
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
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>rigging type:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={riggingType} onChange={(e) => {
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
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>hull color:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' type='text' value={hullColor} placeholder='color' onChange={(e) => {
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
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>ama color:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' value={amaColor} placeholder='color' onChange={(e) => setAmaColor(e.target.value)}/>
                    </div>
                    
                    <div className={model !== 'Mana - OC-1' ? 'w-[28%] space-y-2 opacity-50' : 'w-[28%] space-y-2'}>
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>cockpit color:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' value={cockpitColor} placeholder='color' disabled={model !== 'Mana - OC-1'} onChange={(e) => setCockpitColor(e.target.value)}/>
                    </div>
                </div>
                <div className='w-full flex justify-around pt-2'>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>paint type:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={paintType} onChange={(e) => {
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
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>serial no.:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' value={serialNumber} placeholder='Serial no.' onChange={(e) => setSerialNumber(e.target.value)}/>
                    </div>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>unit price:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' value={price} placeholder='$ Unit Price CAD' onChange={(e) => setPrice(e.target.value)} type='number'/>
                    </div>
                </div>
                <div className='w-full flex justify-around pt-2'>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Enter <span className='text-[#FF3C00]'>deposit amnt:</span></label>
                        <input className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading  pl-2' value={deposit} placeholder='$ Deposit CAD' onChange={(e) => setDeposit(e.target.value)} type='number'/>
                    </div>
                    <div className='w-[28%] space-y-2'>
                    <label className='heading text-lg text-white font-medium'>Physical <span className='text-[#FF3C00]'>presence?</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={physicalPresence} onChange={(e) => {
                            if (e.target.value !== '') {
                                setPhysicalPresence(e.target.value)
                            }
                        }}>
                            <option value='' className='text-[#515151]'>Choose one...</option>
                            <option value={'physical'}>Physical Boat</option>
                            <option value={'preorder'}>Preorder</option>
                        </select>
                    </div>
                    <div className='w-[28%] space-y-2'>
                        <label className='heading text-lg text-white font-medium'>Choose <span className='text-[#FF3C00]'>location:</span></label>
                        <select className='w-full border-b-2 border-white text-white bg-transparent focus:outline-none heading ' value={location} disabled={physicalPresence === 'preorder'} onChange={(e) => {
                            if (e.target.value !== '') {
                                setLocation(e.target.value)
                            }
                        }}>
                            <option value='' className='text-[#515151]'>Choose one...</option>
                            <option value={'Vancouver'} className='text-[#515151]'>Vancouver</option>
                            <option value={'Vancouver Island'} className='text-[#515151]'>Vancouver Island</option>
                            <option value={'Calgary'} className='text-[#515151]'>Calgary</option>
                            <option value={'Edmonton'} className='text-[#515151]'>Edmonton</option>
                            <option value={'Toronto'} className='text-[#515151]'>Toronto</option>
                            <option value={'Montreal'} className='text-[#515151]'>Montreal</option>
                            <option value={'Quebec'} className='text-[#515151]'>Quebec</option>
                        </select>
                    </div>
                </div>
                <div className='pl-9 pt-8 flex gap-x-10'>
                    <p className='heading text-lg text-white font-medium'>Add <span className='text-[#FF3C00]'>images:</span></p>
                    <label htmlFor='thumbnail' className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer' onClick={() => false}>
                        Add thumbnail
                    </label>
                    <input id='thumbnail' type='file' accept='image/png, image/jpeg, image/jpg' hidden onChange={(e) => {
                        e.preventDefault()
                        setThumbnail(e.target.files[0])
                    }}/>
                    <label htmlFor='gallery' className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer' onClick={() => false}>
                        Add to gallery
                    </label>
                    <input id='gallery' type='file' accept='image/png, image/jpeg, image/jpg' multiple='multiple' hidden onChange={(e) => {
                        e.preventDefault()
                        setGallery(prev => [...prev, ...e.target.files])
                    }} />
                </div>
                <div className='w-full px-9 pt-8 flex'>
                    {thumbnail &&
                        <div className='w-2/12'>
                            <p className='heading text-[#FF3C00] text-lg'>Thumbnail:</p>
                            <div className='w-[10vw] flex justify-end'>
                                <button className='text-xl hover:scale-110 transition duration-200 ease-in-out text-white' onClick={(e) => {
                                    e.preventDefault()
                                    setThumbnail(null)
                                }}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className='w-[10vw] h-[20vh]'>
                                <img src={URL.createObjectURL(thumbnail)} className='w-full h-full object-cover'/>
                            </div>
                        </div>
                    }
                    {gallery.length > 0 &&
                        <div className='w-10/12'>
                            <p className='heading text-[#FF3C00] text-lg'>Gallery:</p>
                            <div className='w-full flex gap-x-6 overflow-x-scroll'>
                                {gallery.map((photo, i) => {
                                    return (
                                        <div className='min-w-[10vw] max-w-[10vw]' key={i}>
                                            <div className='w-[full] flex justify-end'>
                                                <button className='text-xl hover:scale-110 transition duration-200 ease-in-out text-white' onClick={(e) => {
                                                    e.preventDefault()
                                                    setGallery(prev => prev.filter(exstPhoto => exstPhoto !== photo))
                                                }}>
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                            </div>
                                            <div className='w-full h-[20vh]'>
                                                <img src={URL.createObjectURL(photo)} className='w-full h-full object-cover'/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full flex justify-center pt-6'>
                    <button className='px-2 py-px bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out hover:cursor-pointer text-xl'>
                        Add canoe to inventory
                    </button>
                </div>
            </form>
        }
        
    </section>
  )
}

export default AddNewCanoe