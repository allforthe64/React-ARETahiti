import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

const About = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        window.scrollTo(0, 0)

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])


    return (
        <div id="en" className="py-[100px]">
            <motion.div initial={{y: 300, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.25}}>
                <h1 className="grey max-sm:text-3xl sm:max-md:text-4xl text-5xl heading mb-20 max-lg:mb-10">About Us</h1>
                <div className="container-2 spacer">
                    <div className="flex justify-around max-lg:flex-col-reverse items-center">
                        <div className="w-5/12 flex flex-col justify-center pb-20 max-lg:pb-10 max-lg:w-9/12">
                            <h3 className="heading grey text-4xl w-9/12 text-left mb-4 max-lg:text-center max-lg:w-full max-lg:mt-4">A Time Honored Tradition</h3>
                            <p className="text text-2xl text-left max-lg:text-center max-md:text-lg">
                                Rooted in the spirit of Tahiti’s paddling tradition, AitoGear is all about honoring the culture and pushing the sport forward.
                            </p>
                        </div>
                        <img src="./matahina_9.jpg" alt="about-1" className="w-5/12 max-lg:w-9/12" />
                    </div>
                </div>
            </motion.div> 
            <motion.div className="flex flex-col items-center py-[100px] max-lg:py-10" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5, delay: .5}} viewport={{amount: .25, once: true}}>
                <p className="text text-2xl w-11/12 mb-12 max-md:text-lg">
                    Built on a passion for paddling and driven by the competitive spirit of the Pacific, AitoGear is all about delivering the ultimate balance of precision and performance. We're inspired every day by the watermen who came before us — and we're here to keep that fire alive.
                </p>
                <p className="text text-2xl w-11/12 max-md:text-lg">Driven by the passion of our founders, AitoGear is all about bringing the best of Tahitian and Hawaiian outrigger canoeing gear to paddlers across Canada and the Pacific Northwest. We stay true to our heritage while delivering top-tier equipment to our customers. Every canoe and paddle we offer is designed, tested, and crafted with care, blending the spirit of Tahiti and Hawaii with the ruggedness of the Pacific Northwest. When you gear up with AitoGear, you're getting the best of both worlds, delivered right to your doorstep.
                </p>
            </motion.div>
            <div className="flex flex-col items-center py-20">
                <h2 className="grey max-sm:text-3xl sm:max-md:text-4xl text-5xl heading mb-20 max-lg:mb-10">Faster, More Fun, For Everybody</h2>
                <p className="text text-2xl w-10/12 mb-12 max-md:text-lg">At AitoGear, we're driven by one mission: to make outrigger paddling faster, more enjoyable, and accessible for paddlers across Canada and the Pacific Northwest. Our commitment is simple — we believe the right gear can enhance the paddling experience for everyone. Whether you're just starting out or you're a seasoned pro, we offer the best canoes and paddles to elevate your experience on the water. No matter your level of expertise, AitoGear is here to help you paddle with passion and performance.</p>
                <img className="w-6/12 mb-12 max-lg:w-9/12" src="./mana_9.JPG" alt="about-2" />
                <p className="text text-2xl w-10/12 max-md:text-lg">Whether you're aiming to push yourself or your team to new heights, or just looking to kick back and enjoy the water, we’ve got the gear you need. From canoes, to paddles, to apparel, every piece of equipment we offer is designed with both performance and passion, ensuring you have what it takes to achieve your paddling goals. So, what are you waiting for? Let’s get you geared up and on the water!
                </p>
            </div>

            <div className="py-20 max-lg:py-10">
                <motion.h3 className="grey max-sm:text-4xl sm:max-md:text-6xl text-8xl heading mb-20 sm:max-lg:mb-10 max-sm:mb-6" initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .25, delay: .75}} viewport={{once: true}}>The Canoes</motion.h3>
                <div className="flex justify-around max-lg:flex-col-reverse max-lg:items-center" id="about-con-2">
                    <motion.div className="w-5/12 max-lg:w-9/12 flex flex-col items-center justify-center" initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .25, delay: 1}} viewport={{once: true}}>
                        <p className="orange text-4xl heading w-6/12 mb-10 max-lg:mb-6 max-sm:text-2xl max-lg:w-full">The Heart And Soul Of AitoGear</p>
                        <p className="text text-2xl w-10/12 mb-10 max-md:text-lg max-lg:mb-6">Click the button
                            below to view our line of high quality custom
                            outrigger canoes.</p>
                        <Link to={'/canoes'} className="orange orange-border rounded-3xl max-md:text-lg max-md:px-10 headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See the canoes</Link>
                    </motion.div>
                    <motion.img className="w-[35%] max-lg:w-9/12 max-lg:mb-6" src="./marara_9.JPG" alt="about-img-4" initial={{x: 75, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .25, delay: 1.5}} viewport={{once: true}}/>
                </div>
            </div>
        </div>
    )
}

export default About