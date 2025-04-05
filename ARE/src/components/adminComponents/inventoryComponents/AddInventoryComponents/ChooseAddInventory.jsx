import React, { useState } from 'react'

const ChooseAddInventory = ({ setMode }) => {

    //initialize state to toggle button cover divs
    const [isHovering, setIsHovering] = useState('')

  return (
    <section className='w-full h-[75vh] flex flex-col justify-center space-y-6'>
        <div className='w-full flex justify-center gap-x-6'>
            <button className='w-[22vw] h-[32vh] rounded-lg hover:scale-105 transition duration-200 ease-in-out relative' onMouseEnter={() => setIsHovering('canoe')} onMouseLeave={() => setIsHovering('')} onClick={() => setMode('canoe')}>
                <img src='./marara_9.JPG' className='w-full h-full object-cover rounded-lg'/>
                {isHovering === 'canoe' &&
                    <div className='w-full h-full bg-black/50 absolute top-0 flex flex-col justify-between py-6'>
                        <p className='heading text-white text-2xl w-full text-left pl-6'>Add a canoe</p>
                        <div className='w-full flex justify-center'>
                            <button className='px-4 py-2 bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out'>
                                Add
                            </button>
                        </div>
                    </div>
                }
            </button>
            <button className='w-[22vw] h-[32vh] rounded-lg hover:scale-105 transition duration-200 ease-in-out relative' onMouseEnter={() => setIsHovering('paddles')} onMouseLeave={() => setIsHovering('')} onClick={() => setMode('paddles')}>
                <img src='./paddle.png' className='w-full h-full object-cover rounded-lg'/>
                {isHovering === 'paddles' &&
                    <div className='w-full h-full bg-black/50 absolute top-0 flex flex-col justify-between py-6'>
                        <p className='heading text-white text-2xl w-full text-left pl-6'>Add paddles</p>
                        <div className='w-full flex justify-center'>
                            <button className='px-4 py-2 bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out'>
                                Add
                            </button>
                        </div>
                    </div>
                }
            </button>
        </div>

        <div className='w-full flex justify-center gap-x-6'>
            <button className='w-[22vw] h-[32vh] rounded-lg hover:scale-105 transition duration-200 ease-in-out relative' onMouseEnter={() => setIsHovering('apparel')} onMouseLeave={() => setIsHovering('')} onClick={() => setMode('apparel')}>
                <img src='./apparel.png' className='w-full h-full object-cover rounded-lg'/>
                {isHovering === 'apparel' &&
                    <div className='w-full h-full bg-black/50 absolute top-0 flex flex-col justify-between py-6'>
                        <p className='heading text-white text-2xl w-full text-left pl-6'>Add apparel</p>
                        <div className='w-full flex justify-center'>
                            <button className='px-4 py-2 bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out'>
                                Add
                            </button>
                        </div>
                    </div>
                }
            </button>
            <button className='w-[22vw] h-[32vh] rounded-lg hover:scale-105 transition duration-200 ease-in-out relative' onMouseEnter={() => setIsHovering('parts')} onMouseLeave={() => setIsHovering('')} onClick={() => setMode('parts')}>
                <img src='./spare_parts_placeholder.jpg' className='w-full h-full object-cover rounded-lg'/>
                {isHovering === 'parts' &&
                    <div className='w-full h-full bg-black/[60%] absolute top-0 flex flex-col justify-between py-6'>
                        <p className='heading text-white text-2xl w-full text-left pl-6'>Add parts & accessories</p>
                        <div className='w-full flex justify-center'>
                            <button className='px-4 py-2 bg-[#FF3C00] rounded-lg heading text-white font-medium hover:scale-110 transition duration-200 ease-in-out'>
                                Add
                            </button>
                        </div>
                    </div>
                }
            </button>
        </div>

    </section>
  )
}

export default ChooseAddInventory