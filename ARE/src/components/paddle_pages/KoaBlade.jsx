import { Link } from "react-router-dom"

import { motion } from 'framer-motion'
import { useEffect, useState, useContext } from "react";
import ShoppingCartContext from "../../context/ShoppingCartProvider";

import { Dialog } from "@mui/material";

//import OrderBlade component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

const KoaBlade = () => {

    const [bladeSize, setBladeSize] = useState('9.5')
    const [bladeConstruction, setBladeConstruction] = useState('wood')
    const [bladeLength, setBladeLength] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [index, setIndex] = useState(0)

    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const addToCart = (e) => {
        e.preventDefault()

        const generateRandomString = (length) => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
              result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
          }

        const newCartItem = {
            itemName: 'Koa Blade',
            bladeSize: bladeSize,
            bladeConstruction: bladeConstruction,
            bladeLength: bladeLength,
            quantity: quantity,
            price: 457,
            itemId: generateRandomString(20)
        }
        setShoppingCart(prev => [...prev, newCartItem])
        setBladeConstruction('')
        setBladeLength('')
        setQuantity(1)
        toast.success('Disciple(s) added to cart 🛒!')
    }

    const imgUrls = [
        './koa_blade_1.png',
        './koa_blade_2.png',
        './koa_blade_3.png',
        './koa_blade_4.png',
        './koa_blade_5.png'
    ]

    const videoUrls = [
        'https://www.youtube.com/embed/RSWpmOJwnkA?list=TLGGkjcgyhkwrfIyMzA0MjAyNQ',
        './koa_video.mp4'
    ]

       
    return (
        <div id="en">
            <motion.div className="flex flex-col items-center pt-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .25}} viewport={{once: true}}>
                <h1 className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey px-10">Koa Wood Paddles - <span className="text-[#FF3C00]">Handmade Excellence</span></h1>
            </motion.div>
            <div className="w-full flex max-md:flex-col max-md:items-center px-10 max-sm:px-6 py-4 justify-between">

                <div className="w-5/12 max-md:w-11/12">
                    <div className="w-full h-[55vh]">
                        {(index === 0 || index <= 4) ?
                            <img src={imgUrls ? imgUrls[index] : ''} alt="walnut liberator" className="w-full h-full object-scale-down"/>
                        : index === 5 ?
                            <iframe src={'https://www.youtube.com/embed/RSWpmOJwnkA?list=TLGGkjcgyhkwrfIyMzA0MjAyNQ'} controls className="w-full h-full object-contain">
                            Your browser does not support the video tag.
                            </iframe>
                        :
                            <video src={videoUrls ? videoUrls[index - 5] : ''} controls className="w-full h-full object-contain">
                                Your browser does not support the video tag.
                            </video>
                        }
                    </div>
                    <div className="w-full h-[10vh] max-[539px]:h-[8vh] flex justify-center">
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(0)}>
                            <img src="./koa_blade_1.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(1)}>
                            <img src="./koa_blade_2.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(2)}>
                            <img src="./koa_blade_3.png" alt="walnut liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(3)}>
                            <img src="./koa_blade_4.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(4)}>
                            <img src="./koa_blade_5.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 relative hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(5)}>
                            <img src="./video_8_thumbnail.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                            <div className="w-full h-full absolute top-0 flex justify-center items-center">
                                <div className="w-[75%] h-[75%] bg-gray-300/75 rounded-full flex justify-center items-center text-2xl max-sm:text-lg">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                        </button>
                        <button className="h-full w-[12.5%] border-2 relative hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(6)}>
                            <img src="./video_9_thumbnail.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                            <div className="w-full h-full absolute top-0 flex justify-center items-center">
                                <div className="w-[75%] h-[75%] bg-gray-300/75 rounded-full flex justify-center items-center text-2xl max-sm:text-lg">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="w-6/12 max-md:w-11/12 max-md:pt-6">
                    <form className="w-full">
                        <div className="w-full flex flex-col items-start pl-4">
                            <label className="heading grey text-xl max-sm:text-base">Select blade size:</label>
                            <div className="w-full flex justify-start space-x-4 pt-2 text-sm max-sm:text-xs">
                                <button className={bladeSize === '9.5' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"}  type="button">
                                    9.5"
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pl-4 mt-4">
                            <label className="heading grey text-xl max-sm:text-base">Select blade construction:</label>
                            <div className="w-full flex justify-start space-x-4 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
                                <button className={bladeConstruction === 'wood' ? "w-3/12 md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-3/12 max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setBladeConstruction('wood')} type="button">
                                    Wood
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pl-4 mt-4 text-sm max-sm:text-xs">
                            <label className="heading grey text-xl max-sm:text-base">Select blade length:</label>
                            <div className="w-full flex justify-start gap-x-4 pt-2 flex-wrap gap-y-4">
                                <button className={bladeLength === '48' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('48')} type="button">
                                    48"
                                </button>
                                <button className={bladeLength === '49' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('49')} type="button">
                                    49"
                                </button>
                                <button className={bladeLength === '50' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('50')} type="button">
                                    50"
                                </button>
                                <button className={bladeLength === '51' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('51')} type="button">
                                    51"
                                </button>
                                <button className={bladeLength === '52' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('52')} type="button">
                                    52"
                                </button>
                            </div>
                        </div>
                        {bladeLength !== '' && bladeSize !== '' && bladeConstruction !== '' &&
                            <>
                                <div className="w-full flex flex-col items-start pl-4 mt-4 text-sm">
                                    <label className="heading grey text-xl max-sm:text-base">Enter quantity:</label>
                                    <div className="flex gap-x-4 pt-2">
                                        <button className="px-2 border-2 border-[#212121] rounded-md hover:scale-110 transition duration-200 ease-in-out" type="button" onClick={() => {
                                            if (quantity !== 1) {
                                                setQuantity(prev => prev - 1)
                                            }
                                        }}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input type="number" min={1} value={quantity} className="border-b-2 border-[#212121] heading w-3/12 pl-4" onChange={(e) => setQuantity(e.target.value)}/>
                                        <button type="button" onClick={() => setQuantity(prev => prev + 1)} className="px-2 border-2 border-[#212121] rounded-md hover:scale-110 transition duration-200 ease-in-out">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center pt-6">
                                    <button className="p-2 rounded-lg bg-[#FF3C00] border-2 border-transparent text-lg max-[900px]:text-base max-sm:text-sm heading text-white border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] heading text-white transition ease-in-out duration-200" type="button" onClick={(e) => addToCart(e)}>
                                        Add to shopping cart
                                    </button>
                                </div>
                            </>
                        }
                        <p className="heading text-[#212121] pt-6 w-full text-left text-2xl max-sm:text-xl">Price: <span className="text-[#FF3C00]">$457</span></p>
                    </form>
                    <div className="w-full pl-4 pt-8">
                        <p className="w-10/12 text text-lg max-[951px]:text-base max-[951px]:w-11/12 text-left mb-6 max-md:text-lg max-lg:w-9/12 max-sm:text-base">
                            Those that do not want to change their style .. and have to go FLAT - Go REALLY FLAT!! Our goal was to make the absolute Best Flat SPRINT Blade in the World to follow up from the Disciplinarian .. CATCH before you SPRINT .. They were all designed together but it has to follow the Progression of Skills & Discipline and Released in the RIGHT order from the Coaching P.O.V. - Everything we do is about Skills Development ... Not "just because" because that would be Too Easy !!  It Takes INTENTION & Mindfulness in your practice to use our Tools
                        </p>
                        <p className="heading grey text-2xl sm:max-md:text-4xl text-left mb-6">Specifications</p>
                        <ul className="text text-left list-disc pl-10 grey text-base max-sm:text-base">
                            <li className="mb-5">Shaft Shape: Double Bend</li>
                            <li className="mb-5">Total Paddle Weight: 15.5 oz</li>
                            <li className="mb-5">Surface Area: 124 in sq</li>
                            <li className="mb-5">BBlade Width: 9 1/2"</li>
                            <li className="mb-5">Blade Length: 18"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KoaBlade