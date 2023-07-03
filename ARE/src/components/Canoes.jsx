import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect } from "react"

const Canoes = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="en">
            <div className="flex flex-col items-center py-20">
                <h1 className="orange text-8xl heading mb-20">Canoes</h1>
                <p className="text text-xl w-9/12">Ready to take the next step on your outrigger journey?
                    Well, you're in the right place! Athletes from around the world have 
                    won races in ARE canoes. Now, it's your turn. Check out our three models
                    below.
                </p>
            </div>
            <motion.div className="flex items-center flex-col py-20" initial={{ opacity: 0, x:-200 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12">V6 Matahina - <span className="orange">King Of The Waves</span> </h2>
                <div className="flex py-10 justify-around">
                    <img src="./matahina_2.jpg" alt="Matahina Canoe" className="w-5/12" />
                    <div className="w-4/12 flex items-center">
                        <div>
                            <p className="text text-2xl text-left mb-10" id="canoe-text-1">Sleek and sharp looking, ARE Tahiti's 
                                V6 Matahina is a superb competetive outrigger. Built for the surf,
                                the Matahina is the perfect boat to launch your racing tradition from.
                            </p>
                            <Link to={'/matahina'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20" initial={{ opacity: 0, x:200 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12">V1 Marara - <span className="orange">Be At 1</span> </h2>
                <div className="flex py-10 justify-around">
                    <div className="w-4/12 flex items-center">
                        <div>
                            <p className="text text-2xl text-left mb-10 ml-14">At the forefront of premium 
                                outriggers, the Marara V1 is the ultimate solo outrigger
                                experience. Are you ready to be "at one"?
                            </p>
                            <Link to={'/marara'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                    <img src="./marara_1.JPG" alt="Marara Canoe" className="w-5/12" />
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20" initial={{ opacity: 0, x:-200 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12">V1 Mako - <span className="orange">More of the best</span> </h2>
                <div className="flex py-10 justify-around">
                    <img src="./mako_2.jpg" alt="Matahina Canoe" className="w-5/12" />
                    <div className="w-4/12 flex items-center">
                        <div>
                            <p className="text text-2xl text-left mb-10" id="canoe-text-1">Designed for paddlers 180 pounds plus,
                            the Mako V1 has the same features you love about the Marara, but in a larger, more ergonomic package.
                            </p>
                            <Link to={'/mako'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20" initial={{ opacity: 0, x:200 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .4, once: true}}>
                <h2 className="heading text-6xl grey w-8/12">OC1 Mana - <span className="orange">Raising The Standard</span> </h2>
                <div className="flex py-10 justify-around">
                    <img src="./mana_1.JPG" alt="Mana OC1" className="w-5/12" />
                    <div className="w-4/12 flex items-center">
                        <div>
                            <p className="text text-2xl text-left mb-10" id="canoe-text-3">For years, ARE Tahiti has set the standard
                                for outrigger excellence. Now, we've raised the bar again with our
                                Mana OC1. Balancing craftsmanship and accessability with performance,
                                the Mana OC1 is ready to take on whatever awaits.
                            </p>
                            <Link to={'/mana'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="py-20 flex flex-col items-center" initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: .5, delay:.25, type:'spring'}} viewport={{amount: .4}}>
                <h1 className="grey text-6xl heading mb-10">Next Steps</h1>
                <p className="text text-2xl w-8/12 mb-10">Now that you've chosen the perfect canoe,
                    it's time to order it! Click the button below for more information
                    on our ordering process.
                </p>
                <Link to={'/'} className="orange-background orange-bg-button orange-border text-white rounded-3xl headings text-3xl px-16 py-2 transition-color duration-200 ease-in-out">See More</Link>
            </motion.div>
        </div> 

    )
}

export default Canoes