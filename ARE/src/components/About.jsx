import { Link } from "react-router-dom"
import { useEffect } from "react"
import { motion } from 'framer-motion'

const About = () => {

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="en" className="py-[100px]">
            <motion.div initial={{y: 300, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.25}}>
                <h1 className="grey text-8xl heading mb-20">About Us</h1>
                <div className="container-2 spacer">
                    <div className="flex justify-around">
                        <div className="w-5/12 flex flex-col justify-center pb-20">
                            <h3 className="heading grey text-4xl w-9/12 text-left mb-4">A Time Honored Tradition</h3>
                            <p className="text text-2xl text-left">Inspired by Tahiti's history of 
                                paddling, ARE Tahiti aims to honor and pass on the tradition of outrigger
                                canoeing.
                            </p>
                        </div>
                        <img src="./matahina_9.jpg" alt="about-1" className="w-5/12" />
                    </div>
                </div>
            </motion.div> 
            <motion.div className="flex flex-col items-center py-[100px]" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5, delay: .5}} viewport={{amount: .4, once: true}}>
                <p className="text text-2xl w-9/12 mb-12">Built on Tahitian customs and fueled by the competetive spirit of our founders,
                    we aim to bring the ultimate balance of precision and performance to outrigger canoeing. We're
                    inspired every day by our two founding members: Yvon Faaite, an expert paddler, and Baptiste Gossein a 
                    proffessional windsurfer. 
                </p>
                <p className="text text-2xl w-9/12">Driven by the passion of our founders, we strive to bring to you the best
                    outrigger canoeing has to offer while staying true to our heritage. All of our boats
                    are designed, prototyped, and tested in Tahiti. Once our designs are ready, 
                    we manufacture our boats using high quality materials, ensuring 
                    every ounce of Tahitian tradition is transfered to you, the paddler. 
                </p>
            </motion.div>
            <div className="flex flex-col items-center py-20">
                <h2 className="grey text-7xl heading mb-20">Faster, More Fun, For Everybody</h2>
                <p className="text text-2xl w-10/12 mb-12">At ARE Tahiti, we’re steered by a mission — to make outrigger paddling faster and more fun, for more and more paddlers. 
                    That’s our steadfast commitment. We believe paddlers can enjoy the experience of outrigger canoeing even more in a canoe 
                    that amplifies this enjoyment. That's why at ARE, we build the best canoes for everyone, no matter your level of experience.</p>
                <img className="w-6/12 mb-12" src="./mana_9.JPG" alt="about-2" />
                <p className="text text-2xl w-10/12">Whether you're looking to take yourself or your team to the highest heights,
                    or just trying to relax and experience the joys of outrigger, we've got you covered. All of our
                    boats are designed with passion and purpose, ensuring you can find the right boat to match your goals.
                    So what are you waiting for? Let's get you on the water!
                </p>
            </div>

            <div className="py-20">
                <motion.h3 className="grey text-7xl heading mb-20" initial={{y: -300, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .25, delay: .75}} viewport={{once: true}}>The Canoes</motion.h3>
                <div className="flex justify-around" id="about-con-2">
                    <motion.div className="w-5/12 flex flex-col items-center justify-center" initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .25, delay: 1}} viewport={{once: true}}>
                        <p className="orange text-4xl heading w-6/12 mb-10">The Heart And Soul Of ARE</p>
                        <p className="text text-2xl w-10/12 mb-10">Click the button
                            below to view our line of high quality custom
                            outrigger canoes.</p>
                        <Link to={'/canoes'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See the canoes</Link>
                    </motion.div>
                    <motion.img className="w-[35%]" src="./marara_4.JPG" alt="about-img-4" initial={{x: 200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .25, delay: 1.5}} viewport={{once: true}}/>
                </div>
            </div>

            <motion.div className="flex flex-col items-center py-20" initial={{y: 300, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}}>
                <h3 className="grey text-7xl heading mb-20">Order A Canoe</h3>
                <img className="w-6/12 mb-12" src="./marara_5.jpg" />
                <p className="text text-2xl mb-12 w-6/12">Ready to take the next step with ARE TAHITI? Click the button below and get in contact
                    with your nearest ARE representative.</p>
                    <Link to={'/order'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">Order a canoe</Link>
                    
            </motion.div>
        </div>
    )
}

export default About