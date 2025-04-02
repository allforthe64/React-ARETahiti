import React, { useState } from 'react'

import { motion } from 'framer-motion'

const ChooseComponent = ({ setMode }) => {

    const [display, setDisplay] = useState('')

  return (
    <section className='w-full'>
        <div className='flex justify-around mt-10'>
            <button className='w-[30%] h-[55vh] border-2 border-[#515151] rounded-xl hover:scale-105 transition duration-200 ease-in-out relative' onMouseEnter={() => setDisplay('canoes')} onMouseLeave={() => setDisplay('')} onClick={() => setMode('canoes')}>
                <img src='./marara_9.JPG' alt='canoe_img' className='w-full h-full object-cover rounded-xl'/>
                {display === 'canoes' &&
                    <div className='w-full h-full absolute top-0 bg-black/[65%] rounded-xl pt-6 px-10'>
                        <motion.p initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 100}} className='text-white text-3xl heading w-full text-left'>
                            Shop canoes
                        </motion.p>
                    </div>
                }
            </button>
            <button className='w-[30%] h-[55vh] border-2 border-[#515151] rounded-xl hover:scale-105 transition duration-200 ease-in-out' onMouseEnter={() => setDisplay('paddles')} onMouseLeave={() => setDisplay('')} onClick={() => setMode('paddles')}>
                <img src='./paddle.png' alt='paddle_img' className='w-full h-full object-cover rounded-xl'/>
                {display === 'paddles' &&
                    <div className='w-full h-full absolute top-0 bg-black/[65%] rounded-xl pt-6 px-10'>
                        <motion.p initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 100}} className='text-white text-3xl heading w-full text-left'>
                            Shop paddles
                        </motion.p>
                    </div>
                }
            </button>
            <button className='w-[30%] h-[55vh] border-2 border-[#515151] rounded-xl hover:scale-105 transition duration-200 ease-in-out' onMouseEnter={() => setDisplay('apparel')} onMouseLeave={() => setDisplay('')} onClick={() => setMode('apparel')}>
                <img src='./apparel.png' alt='apparel_img' className='w-full h-full object-fill rounded-xl'/>
                {display === 'apparel' &&
                    <div className='w-full h-full absolute top-0 bg-black/[65%] rounded-xl pt-6 px-10'>
                        <motion.p initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 100}} className='text-white text-3xl heading w-full text-left'>
                            Shop apparel
                        </motion.p>
                    </div>
                }
            </button>
        </div>
        <div className='w-full flex justify-start pt-10 pl-6'>
            <button className='w-[30%] h-[55vh] border-2 border-[#515151] rounded-xl hover:scale-105 transition duration-200 ease-in-out' onMouseEnter={() => setDisplay('parts')} onMouseLeave={() => setDisplay('')} onClick={() => setMode('apparel')}>
                    <img src='./spare_parts_placeholder.jpg' alt='apparel_img' className='w-full h-full object-fill rounded-xl'/>
                    {display === 'parts' &&
                        <div className='w-full h-full absolute top-0 bg-black/[65%] rounded-xl pt-6 px-10'>
                            <motion.p initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 100}} className='text-white text-3xl heading w-full text-left'>
                                Parts and Accessories
                            </motion.p>
                        </div>
                    }
            </button>
        </div>
    </section>
  )
}

export default ChooseComponent