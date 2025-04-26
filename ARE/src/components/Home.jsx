import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        window.scrollTo(0, 0)

        const handleWindowResize = () => {
            setWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    }, [])

    const discoverVariant = {
        hidden: {
            opacity: 0,
            x: -200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: .75,
                delay: 1,
            }
        }
    }


    console.log(width)

    return (
        <div id="en">
            <div className="w-full">
                <img className="w-full" src="./home_img.png" />
            </div>
            {/*Discover ARE*/}
            <div className="py-32 max-lg:py-14">
                <motion.h1 className="orange text-8xl max-sm:text-2xl sm:max-lg:text-4xl heading mb-20 max-lg:mb-10" variants={discoverVariant} initial='hidden' whileInView='show' viewport={{amount: .2, once: true}}>Explore AitoGear:</motion.h1>
                <motion.div className="flex justify-around max-lg:flex-col max-lg:items-center max-lg:space-y-10" initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1.25, duration: 1}} viewport={{once: true}}>
                    <motion.div className="w-[28%] h-[55vh] rounded-md bg-neutral-100 shadowed max-lg:w-7/12 max-sm:w-10/12 px-4 pt-4 pb-8" >
                        <div className="h-[85%] w-full">
                            <img src="./mana_8.JPG" alt="outrigger-3" className="h-full w-full object-contain" /> 
                        </div>
                        <Link to={"/order"}>
                            <button type="submit" className="text-lg py-px mt-4 px-6 rounded-md border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] bg-[#FF3C00] heading text-white transition ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-md:text-sm max-sm:w-full">Order a Va'a</button>
                        </Link>
                    </motion.div>
                    <motion.div className="w-[28%] h-[55vh] rounded-md bg-neutral-100 shadowed max-lg:w-7/12 max-sm:w-10/12 px-4 pt-4 pb-8" >
                        <div className="h-[85%] w-full">
                            <img src="./marara_6.JPG" alt="outrigger-3" className="h-full w-full object-cover max-xl:object-contain" /> 
                        </div>
                        <Link to={"https://www.youtube.com/channel/UCX1yW5NSmLIGCmXhaD4A98Q"} >
                            <button type="submit" className="text-lg py-px mt-4 px-6 rounded-md border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] bg-[#FF3C00] heading text-white transition ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-md:text-sm max-sm:w-full">See them in action</button>
                        </Link>
                    </motion.div> 
                    <motion.div className="w-[28%]  h-[55vh] rounded-md bg-neutral-100 px-4 pt-4 pb-8 shadowed max-lg:w-7/12 max-sm:w-10/12" >
                        <div className="h-[85%] w-full">
                            <img src="./all_paddles.jpg" alt="outrigger-3" className="h-full w-full object-cover max-xl:object-contain" /> 
                        </div>
                        <Link to={'/paddles'}>
                            <button type="submit" className="text-lg py-px mt-4 px-6 rounded-md border-2 border-transparent hover:scale-110 hover:bg-transparent hover:border-[#FF3C00] hover:text-[#FF3C00] bg-[#FF3C00] heading text-white transition ease-in-out duration-200 max-lg:w-7/12 max-sm:text-xs max-md:text-sm max-sm:w-full">Shop Paddles</button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/*introduction*/}

            <div className="py-32 bg-grad-grey max-lg:py-16">
                <h1 className="text-5xl max-sm:text-2xl sm:max-lg:text-4xl heading text-white mb-16 px-4">AitoGear - Your dealer for premium paddle products</h1>    
                <div className="flex lg:justify-between px-20 max-lg:px-0 max-lg:items-center max-lg:flex-col">
                    <img className="lg:w-[55%] lg:h-[90%] max-lg:w-[90%] max-lg:mb-8" src="./marara_7.JPG" alt='Outrigger Paddler' id="intro-pic" />
                    <div className="w-5/12 max-lg:w-[90%]">
                        <p className="text-white text text-lg text-left mb-12 max-md:text-base">At AitoGear, we're all about getting you on the water with the best gear out there. Based in Vancouver and serving all of Canada and the Pacific Northwest, we’ve got you covered with ARE Tahiti outrigger canoes, Hypr Nalu Hawaii paddles, and even paddle excursion packages for when you’re ready to get out and explore. Whether you're chasing podiums or just cruising with your crew, AitoGear’s here to help you paddle stronger and have more fun.</p>

                        <ul className="text-left list-disc text-white ml-5 text-lg" id="list-2">
                            <li> 
                                <p className="text-white text mb-8 max-md:text-base">
                                Hand-picked gear – we only carry products we truly believe in and trust on the water
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8 max-md:text-base">
                                Built for paddlers – whether you're racing, cruising, or chasing your next adventure
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8 max-md:text-base">
                                Rooted in community – supporting paddlers across Canada and the Pacific Northwest
                                </p>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div> 
                    
            <div className="py-20 flex items-center flex-col">
            
                <h1 className="text-5xl max-sm:text-2xl sm:max-lg:text-4xl heading mb-16">Get In Touch</h1>
                <p className="text-xl text w-9/12 mb-10 max-md:text-base">AitoGear is stoked to bring ARE Tahiti outrigger canoes to paddlers all across Canada and the Pacific Northwest. Whether you're chasing race wins or just looking to level up your time on the water, we've got you covered.
                Ready to order a canoe? Hit us up — we'll walk you through the whole process, from ordering to shipping to pickup.
                Got general questions or just wanna talk gear? Don’t be shy — reach out anytime. We're here to help you get dialed in and out on the water.</p>
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Home