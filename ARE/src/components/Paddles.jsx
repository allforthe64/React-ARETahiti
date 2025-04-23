import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { useEffect } from "react"

const Paddles = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="en">
            <div className="flex flex-col items-center py-20 max-lg:py-10">
                <h1 className="orange heading sm:max-md:mb-8 max-sm:mb-10 mb-20 max-sm:text-4xl sm:max-md:text-6xl text-8xl">Paddles</h1>
                <p className="text text-lg w-9/12 max-sm:w-11/12">Now that you have your new canoe, you're gonna need something to propel it with. Don't worry, AitoGear has you covered there too. Browse our paddle brands below:
                </p>
            </div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:-50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading max-sm:text-2xl sm:max-lg:text-4xl text-6xl grey w-8/12">The Liberator - <span className="orange">King of Torque</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <div className="w-5/12 max-lg:w-8/12 h-[50vh] max-lg:mb-6">
                        <img src="./liberator_2.JPG" alt="Matahina Canoe" className="w-full h-full object-contain"/>
                    </div>
                    <div className="w-4/12 max-lg:w-[90%] flex items-center">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl max-sm:text-base sm:max-md:text-lg max-lg:text-center text-left max-lg:mb-8 max-md:mb-4 mb-10" id="canoe-text-1">The Hypr Nalu Hawaii Liberator Outrigger Paddle provides higher torque and a longer, slower stroke rate than any other paddle on the market...</p>
                            <Link to={'/liberator'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12 max-sm:text-2xl sm:max-lg:text-4xl">The Disciple - <span className="orange">Classic design, redifined</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col-reverse max-lg:items-center max-lg:py-4">
                    <div className="w-4/12 flex items-center max-lg:w-[90%]">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl text-left max-lg:mb-8 max-md:mb-4 mb-10 lg:ml-14 max-sm:text-base sm:max-md:text-lg max-lg:text-center">The Hypr Nalu Hawaii Disciple - Those that do not want to change their style .. and have to go FLAT - Go REALLY FLAT!! Our goal was to make the absolute Best Flat SPRINT Blade in the World...
                            </p>
                            <Link to={'/disciple'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                    <div className="w-5/12 max-lg:w-8/12 h-[50vh] max-lg:mb-6">
                        <img src="./disciple_2.jpg" alt="Matahina Canoe" className="w-full h-full object-contain"/>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:-50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading max-sm:text-2xl sm:max-lg:text-4xl text-6xl grey w-8/12">The Disciplinarian - <span className="orange">A coach in a paddle</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <div className="w-5/12 max-lg:w-8/12 h-[50vh] max-lg:mb-6">
                        <img src="./disciplinarian_1.png" alt="Matahina Canoe" className="w-full h-full object-contain"/>
                    </div>
                    <div className="w-4/12 max-lg:w-[90%] flex items-center">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl max-sm:text-base sm:max-md:text-lg max-lg:text-center text-left max-lg:mb-8 max-md:mb-4 mb-10" id="canoe-text-1">The Hypr Nalu Hawaii Disciplinarian - Our 9.25 Disciplinarian Outrigger Paddle is perfect for novice paddlers; its unique Concave Blade design prevents water from flowing inaccurately...</p>
                            <Link to={'/liberator'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading text-6xl grey w-8/12 max-sm:text-2xl sm:max-lg:text-4xl">Dragon Boat <span className="orange">Paddles</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col-reverse max-lg:items-center max-lg:py-4">
                    <div className="w-4/12 flex items-center max-lg:w-[90%]">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl text-left max-lg:mb-8 max-md:mb-4 mb-10 lg:ml-14 max-sm:text-base sm:max-md:text-lg max-lg:text-center">Hypr Nalu Hawaii Dragon Boat blades -  The Dragon Boat Outrigger Paddles are a lightweight 370g but durable paddle made from advanced carbon fiber's and epoxy resins. APPROVED by the International...
                            </p>
                            <Link to={'/db-blades'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                    <div className="w-5/12 max-lg:w-8/12 h-[50vh] max-lg:mb-6">
                        <img src="./db-blade-1.png" alt="Matahina Canoe" className="w-full h-full object-contain"/>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center flex-col py-20 max-lg:py-10" initial={{ opacity: 0, x:-50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1, delay: .25}} viewport={{ amount: .5, once: true}}>
                <h2 className="heading max-sm:text-2xl sm:max-lg:text-4xl text-6xl grey w-8/12">Koa Wood Paddles - <span className="orange">Handmade excellence</span> </h2>
                <div className="flex py-10 justify-around max-lg:flex-col max-lg:items-center max-lg:py-4">
                    <div className="w-5/12 max-lg:w-8/12 h-[50vh] max-lg:mb-6">
                        <img src="./koa_blade_1.png" alt="Matahina Canoe" className="w-full h-full object-contain"/>
                    </div>
                    <div className="w-4/12 max-lg:w-[90%] flex items-center">
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <p className="text text-2xl max-sm:text-base sm:max-md:text-lg max-lg:text-center text-left max-lg:mb-8 max-md:mb-4 mb-10" id="canoe-text-1">Hypr Nalu Hawaii Koa Wood Paddles - All Wood Construction. Beautiful Handcrafted. 100% Approved for Hawaii Racing....</p>
                            <Link to={'/liberator'} className="orange orange-border rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">See More</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="py-20 flex flex-col items-center max-lg:py-10" initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: .5, delay:.25, type:'spring'}} viewport={{amount: .4}}>
                <h1 className="grey text-6xl heading mb-10 max-sm:text-2xl sm:max-lg:text-4xl max-md:mb-4">Shop Canoes</h1>
                <p className="text text-2xl w-8/12 mb-10 max-lg:mb-8 max-md:mb-4 max-sm:text-base sm:max-md:text-lg">
                    Click the button below to view our line of high quality custom outrigger canoes.
                </p>
                <Link to={'/order'} className="orange-background orange-bg-button orange-border text-white rounded-3xl headings max-md:text-lg max-md:px-10 text-3xl px-16 py-2 transition-color duration-200 ease-in-out">See More</Link>
            </motion.div> 
        </div> 

    )
}

export default Paddles