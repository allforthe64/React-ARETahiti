import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import ContactForm from "./ContactForm"

const Home = () => {

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
                delay: .25,
            }
        }
    }

    const containerVariant = {
        hidden: {
            opacity: 1,
            transition: {
                duration: 0
            }
        },
        show: {
            opacity: 1,
            transition: {
                when: 'beforChildren',
                staggerChildren: 0.75
            }
        }
    }

    const cardVariant = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    return (
        <div id="en">
            <div className="w-full">
                <img className="w-full" src="./home_img.png" />
            </div>
            {/*Discover ARE*/}
            <div className="py-32">
                <motion.h1 className="orange text-8xl heading mb-20" variants={discoverVariant} initial='hidden' whileInView='show' viewport={{amount: 0.4, once: true}}>Discover ARE</motion.h1>
                <motion.div className="flex justify-around" variants={containerVariant} initial='hidden' whileInView='show' viewport={{amount: 0.4, once: true}}>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 p-4 shadowed" variants={cardVariant}>
                        <img src="./mana_8.JPG" alt="outrigger-1" className="h-[85%] w-full" />
                        <button type="submit" className="text orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200" to={'/canoes'}><Link>Get An Outrigger</Link></button>
                    </motion.div>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 p-4 shadowed" variants={cardVariant}>
                        <img src="./marara_6.JPG" alt="outrigger-2" className="h-[85%] w-full" />
                        <button type="submit" className="text orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200"><Link to={"https://www.youtube.com/channel/UCX1yW5NSmLIGCmXhaD4A98Q"} target="_blank">See Them In Action</Link></button>
                    </motion.div>
                    <motion.div className="w-3/12 rounded-md bg-neutral-100 p-4 shadowed" variants={cardVariant}>
                        <img src="./matahina_8.jpg" alt="outrigger-3" className="h-[85%] w-full" /> 
                        <button type="submit" className="text orange orange-border mt-4 px-6 rounded-md orange-button transition-color ease-in-out duration-200"><Link to={'/order'}>Ordering A Canoe</Link></button>
                    </motion.div>
                </motion.div>
            </div>

            {/*introduction*/}

            <div className="py-32 bg-grad-grey">
                <h1 className="text-7xl heading text-white mb-16">ARE Tahiti - Born For The Water</h1>    
                <div className="flex justify-around px-20">
                    <img className="w-[30%]" src="./marara_7.JPG" alt='Outrigger Paddler' id="intro-pic" />
                    <div className="w-5/12 pt-8">
                        <p className="text-white text text-lg text-left mb-12">A lot more goes into an ARE Tahiti va’a, or outrigger, than meets the eye. 
                            To improve your speed and performance on the water, we take painstaking time and effort to perfect every last detail. 
                            Our quest for perfection steers everything we do, including refining the design, engineering and construction of our canoes. 
                            Plus we never lose sight of our customers, building a canoe that’s super-fast and super-fun. </p>

                        <ul className="text-left list-disc text-white ml-5 text-lg" id="list-2">
                            <li> 
                                <p className="text-white text mb-8">
                                    Unrelenting R&D – factoring in all the variables of water, wind, weight, and balance
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8">
                                    Uncompromising craftsmanship – because every little detail influences speed and performance 
                                </p>
                            </li>
                            <li>
                                <p className="text-white text mb-8">
                                    Unparalleled performance – exhilarating speed, effortless glide, and pure enjoyment! 
                                </p>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div> 
                    
            <div className="py-20 flex items-center flex-col">
            
                <h1 className="text-7xl heading mb-16">Get In Touch</h1>
                <p className="text-xl text w-9/12 mb-10">ARE TAHITI designs and builds va’a, or outrigger canoes, for Tahiti and the Pacific islands, Australia, 
                    Hawaii, the mainland United States and Canada. Once you've ordered a canoe, get in touch with the 
                    nearest ARE representative for more information
                    on the shipping and pickup process</p>
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Home