import { Link } from "react-router-dom"

import { motion } from 'framer-motion'
import { useEffect, useState, useContext } from "react";
import ShoppingCartContext from "../../context/ShoppingCartProvider";

import { Dialog } from "@mui/material";

//import OrderBlade component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

const DBBlades = () => {

    const [bladeConstruction, setBladeConstruction] = useState('')
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
            itemName: 'Dragon Boat Blade',
            bladeConstruction: bladeConstruction,
            bladeLength: bladeLength,
            quantity: quantity,
            price: 487,
            itemId: generateRandomString(20)
        }
        setShoppingCart(prev => [...prev, newCartItem])
        setBladeConstruction('')
        setBladeLength('')
        setQuantity(1)
        toast.success('DB blade(s) added to cart 🛒!')
    }

    const imgUrls = [
        './db_blade_3.jpg',
        './db-blade_2.jpg',
        './db-blade-1.png',
        './disciple_1.png',
        './all_paddles.jpg'
    ]

    const videoUrls = [
        './db_blade_ocean.mp4',
        './db_blade_bed.mp4'
    ]

       
    return (
        <div id="en">
            <motion.div className="flex flex-col items-center pt-12" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .25}} viewport={{once: true}}>
                <h1 className="heading text-6xl max-sm:text-2xl sm:max-md:text-4xl grey px-10">Dragon Boat <span className="text-[#FF3C00]">Paddles</span></h1>
            </motion.div>
            <div className="w-full flex max-md:flex-col max-md:items-center px-10 max-sm:px-6 py-4 justify-between">

                <div className="w-5/12 max-md:w-11/12">
                    <div className="w-full h-[55vh]">
                        {(index === 0 || index <= 4) ?
                            <img src={imgUrls ? imgUrls[index] : ''} alt="walnut liberator" className="w-full h-full object-scale-down"/>
                        :
                            <video src={videoUrls ? videoUrls[index - 5] : ''} controls className="w-full h-full object-contain">
                                Your browser does not support the video tag.
                            </video>
                        }
                    </div>
                    <div className="w-full h-[10vh] max-[539px]:h-[8vh] flex justify-center">
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(0)}>
                            <img src="./db_blade_3.jpg" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(1)}>
                            <img src="./db-blade_2.jpg" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(2)}>
                            <img src="./db-blade-1.png" alt="walnut liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(4)}>
                            <img src="./all_paddles.jpg" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                        </button>
                        <button className="h-full w-[12.5%] border-2 relative hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(5)}>
                            <img src="./video_7_thumbnail.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
                            <div className="w-full h-full absolute top-0 flex justify-center items-center">
                                <div className="w-[75%] h-[75%] bg-gray-300/75 rounded-full flex justify-center items-center text-2xl max-sm:text-lg">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                        </button>
                        <button className="h-full w-[12.5%] border-2 relative hover:scale-110 hover:border-[#FF3C00] transition duration-200 ease-in-out" onClick={() => setIndex(6)}>
                            <img src="./video_6_thumbnail.png" alt="gen 2 liberator" className="w-full h-full object-cover"/>
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
                        <div className="w-full flex flex-col items-start pl-4 mt-4">
                            <label className="heading grey text-xl max-sm:text-base">Select blade construction:</label>
                            <div className="w-full flex justify-start space-x-4 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
                                <button className={bladeConstruction === 'carbon' ? "w-3/12 md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-3/12 max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setBladeConstruction('carbon')} type="button">
                                    Carbon Twill
                                </button>
                                <button className={bladeConstruction === 'metallic' ? "w-3/12 max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-3/12 max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setBladeConstruction('metallic')} type="button">
                                    Metallic
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pl-4 mt-4 text-sm max-sm:text-xs">
                            <label className="heading grey text-xl max-sm:text-base">Select blade length:</label>
                            <div className="w-full flex justify-start gap-x-4 pt-2 flex-wrap gap-y-4">
                                <button className={bladeLength === 'Adjustable' ? "w-3/12 max-[391px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 max-[391px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('Adjustable')} type="button">
                                    Adjustable
                                </button>
                                <button className={bladeLength === '47' ? "w-3/12 border-2 heading text-white border-black rounded-md bg-black" : "w-3/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md"} onClick={() => setBladeLength('47')} type="button">
                                    47"
                                </button>
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
                        {bladeLength !== ''  && bladeConstruction !== '' &&
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
                        <p className="heading text-[#212121] pt-6 w-full text-left text-2xl max-sm:text-xl">Price: <span className="text-[#FF3C00]">$487</span></p>
                    </form>
                    <div className="w-full pl-4 pt-8">
                        <p className="w-10/12 text text-lg max-[951px]:text-base max-[951px]:w-11/12 text-left mb-6 max-md:text-lg max-lg:w-9/12 max-sm:text-base">
                            The Dragon Boat Outrigger Paddles are a lightweight 370g but durable paddle made from advanced carbon fiber's and epoxy resins. APPROVED by the International Dragon Boat Federation (IDBF), this paddle meets the highest standard for Dragon Boat paddles, and is the preferred choice of professional racers. Perfect for all levels of enthusiast paddlers, this paddle is adjustable to meet your exact requirements.
                        </p>
                        <p className="heading grey text-2xl sm:max-md:text-4xl text-left mb-6">Specifications</p>
                        <ul className="text text-left list-disc pl-10 grey text-base max-sm:text-base">
                            <li className="mb-5">Blade Area: 400 cm2</li>
                            <li className="mb-5">Blade Length: 480 mm</li>
                            <li className="mb-5">Blade Width: 178 mm</li>
                            <li className="mb-5">Paddle Weight: 370 g</li>
                            <li className="mb-5">International Dragon Boat Federation licensed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DBBlades