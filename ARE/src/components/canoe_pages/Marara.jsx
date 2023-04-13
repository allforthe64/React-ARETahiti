import { Link } from "react-router-dom"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Marara = () => {

    const slides = [
        { title: 'Superior Craftsmanship', description: "Designed and tested by some of the best canoe builders in the business, the Marara's build quality is unmatched. Whether you choose the all carbon or the hybrid build, each of our canoes is rigorously tested to ensure a premium canoe build, everytime.", imgURL: './marara_2.JPG' },
        { title: 'Clip In Assembly', description: "Snap to assemble Iakos make it easy to assembly your boat and hit the surf. You'll be ready to go in no time at all, giving you more time to enjoy being on the water.", imgURL: './marara_3.JPG'},
        { title: 'Comfortable Ergonomics', description: "Nobody like an uncomfortable boat. That's why we've built the Marara to be as comfortable as possible, even when you're paddling for long periods of time.", imgURL: './marara_4.JPG'}
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
                    <h1 className="heading text-6xl grey mb-8">V1 Marara - <span className="orange">Be At One</span></h1>
                    <p className="heading text-2xl grey">USD $4,750 (pro-carbon) / USD 3,750 (hybrid)</p>
                </div>
                <img src="./marara_2.JPG" alt="Matahina Canoe" className="w-7/12 mb-12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </div>
            <div className="flex flex-col items-center mb-16">
                <p className="w-10/12 text text-2xl mb-10">A new generation of outrigger canoe has been born: introducing the 
                    ARE Tahiti Marara V1. The Marara is at the forefront of single man outrigger canoes, effortlessly combining 
                    top of the line engineering and superb craftsmanship. With its smooth glide and responsive steering, the 
                    Marara delivers top notch water feel giving the feeling of being "at one" with the water. So what are you 
                    waiting for? Order your Marara today and take paddling to the next level!
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
                        <li className="mb-5">Length: 24.18 ft.</li>
                        <li className="mb-5">Beam: 13.39 in.</li>
                        <li className="mb-5">Hull Weight: 18 lbs. (pro-carbon) / 20 lbs. (hybrid)</li>
                        <li className="mb-5">Ama Weight: 4 lbs. (pro-carbon) / 5 lbs. (hybrid)</li>
                        <li className="mb-5">Iakos Weight: 2 lbs. (pro-carbon) / 3 lbs. (hybrid)</li>
                        <li className="mb-5">Total Weight Rigged: 24-26 lbs. / 28-30 lbs. (hybrid)</li>
                    </ul>
                </div>
                <img className="w-5/12 pr-10" alt="Canoe" src="./marara_3.JPG" />
            </div>
            <div className="flex flex-col items-center py-12">
                <p className="heading text-6xl grey mb-10">See It In Action</p>
                <iframe className="w-7/12 h-[465px]" src="https://www.youtube.com/embed/l451UCFvCWQ"></iframe>
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

export default Marara