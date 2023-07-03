import { Link } from "react-router-dom"
import { useEffect } from "react"


import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Mana = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        { title: 'Superior Stability', description: 'Stable and smooth, the Mana OC1 is designed to be the ultimate beginner canoe. Whether your just learning how to paddle, or getting ready to practice surfing, the Mana is a perfect paddling companion.', imgURL: './mana_5.JPG' },
        { title: 'Clip In Assembly', description: "Snap to assemble Iakos make it easy to assembly your boat and hit the surf. You'll be ready to go in no time at all, giving you more time to enjoy being on the water.", imgURL: './mana_7.jpg'},
        { title: 'Adjustable Seat', description: "Every Mana OC1 comes with a comfortable adjustable seat. The seat moves on a velcro strip, making the Mana usable for all sizes of paddlers.", imgURL: './mana_2.JPG'}
      ];
       
      const slider = (
        <Slider>
            {slides.map((slide, index) => 
                <div className="flex justify-center" key={index}>
                    <div className="flex justify-around w-9/12 border-2 p-4 bg-neutral-100 rounded-2xl">
                        <img src={slide.imgURL} className='w-[45%] rounded-lg'/>
                        <div className="w-[45%] flex items-center">
                            <div>
                                <p className="heading orange text-2xl mb-8">{slide.title}</p>
                                <p className="text text-lg">{slide.description}</p>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            )}
        </Slider>
      )

    return (
        <div id="en">
            <div className="flex flex-col items-center py-12">
                <div className="w-8/12 mb-8">
                    <h1 className="heading text-6xl grey mb-8">OC1 Mana - <span className="orange">Raising The Standard</span></h1>
                    <p className="heading text-2xl grey">USD $4,900 (pro-carbon) / USD $3,900 (hybrid)</p>
                </div>
                <img src="./mana_3.JPG" alt="Matahina Canoe" className="w-7/12 mb-12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </div>
            <div className="flex flex-col items-center mb-16">
                <p className="w-10/12 text text-2xl mb-10">For years, the OC1 has been the standard for outrigger paddling. Meant to 
                    be fun and easy to handle, these boats are perfect for newer paddlers or anyone looking to go out and just enjoy 
                    being on the water. That's where ARE Tahiti's Mana OC1 comes in. With its sharp looks and excellent handling, 
                    this boat is a paddlers dream. But don't let its playful nature fool you. The Mana's maneuverablilty and ability 
                    to tackle a variety of conditions make it anything but standard. Order yours now and experience paddling in a whole new way.
                </p>
                <Link to={'/order'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">Order Now</Link>
            </div>
            <div className="py-20 flex flex-col items-center">
                <p className="heading text-6xl grey mb-10">Highlights</p>
                <div className="w-10/12">
                    {slider}
                </div>
            </div>
            <div className="flex justify-between py-12">
                <div className="w-6/12 pl-20">
                    <p className="heading grey text-6xl text-left mb-10">Specifications</p>
                    <ul className="text text-left list-disc pl-10 grey text-2xl">
                        <li className="mb-5">Length: 20.76 ft.</li>
                        <li className="mb-5">Beam: 15.15 in.</li>
                        <li className="mb-5">Hull Weight: 19 lbs. (pro-carbon) / 25 lbs. (hybrid)</li>
                        <li className="mb-5">Ama Weight: 3 lbs. (pro-carbon) / 4 lbs. (hybrid)</li>
                        <li className="mb-5">Iakos Weight: 2 lbs. (pro-carbon) / 2 lbs. (hybrid)</li>
                        <li className="mb-5">Total Weight Rigged: 24-25 lbs. (pro-carbon) / 28-30 lbs. (hybrid)</li>
                    </ul>
                </div>
                <img className="w-5/12 pr-10" alt="Canoe" src="./mana_4.JPG" />
            </div>
            <div className="flex flex-col items-center py-12">
                <p className="heading text-6xl grey mb-10">See It In Action</p>
                <iframe className="w-7/12 h-[465px]" src="https://www.youtube.com/embed/iopLZR0QCFU"></iframe>
            </div>
            <div className="flex flex-col items-center py-12">
                <p className="heading text-6xl grey mb-10 w-10/12">Ready To <span className="orange">Crush Some Waves?</span></p>
                <p className="text text-2xl w-10/12 mb-10">
                    Time to get your hands on an ARE canoe. You'll be surfing waves and winning races in no time!
                    Click the button to order your canoe!
                </p>
                <Link to={'/order'} className="orange orange-border rounded-3xl headings text-3xl px-16 py-2 orange-button transition-color duration-200 ease-in-out">Order Now</Link>
            </div>
        </div>
    )
}

export default Mana