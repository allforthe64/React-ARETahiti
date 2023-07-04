import { Link } from "react-router-dom"
import { useEffect } from "react"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Mako = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        { title: 'Superior Craftsmanship', description: "Designed and tested by some of the best canoe builders in the business, the Marara's build quality is unmatched. The new Mako hull is lighter than any design we've built previously, bringing the absolute best performance ARE Tahiti can provide to a body of water near you.", imgURL: './mako_1.jpg' },
        { title: 'Clip In Assembly', description: "Snap to assemble Iakos make it easy to assemble your boat and hit the surf. You'll be ready to go in no time at all, giving you more time to enjoy being on the water.", imgURL: './mako_2.jpg'},
        { title: 'Wider hull and a redesigned cockpit', description: "A new and improved hull and cockpit design give you a more comfortable ride while still maintaining the aspects that you love from the Marara", imgURL: './mako_5.jpg'}
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
                    <h1 className="heading text-6xl grey mb-8">V1 Mako - <span className="orange">More of the best</span></h1>
                    <p className="heading text-2xl grey">USD $4,750 (pro-carbon) / USD 3,750 (hybrid)</p>
                </div>
                <img src="./mako_3.jpg" alt="Matahina Canoe" className="w-7/12 mb-12"/>
                <hr className="orange-background w-5/12 h-[5px]" />
            </div>
            <div className="flex flex-col items-center mb-16">
                <p className="w-10/12 text text-2xl mb-10"> Meet the newest member of the ARE Tahiti family: 
                the ARE Tahiti Mako V1. The Mako has everything you love about the Marara V1: excellent craftsmanship,
                responsive steering, pristine glide, and top of the line craftsmanship, but in a more approachable package.
                With a slightly wider hull and a more comfortable cockpit, the Mako is perfect for paddlers who are over 180 pounds, or if you're looking to go on a longer paddling excursion. 
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
                        <li className="mb-5">Hull Weight: 18 lbs. (pro-carbon) / 22 lbs. (hybrid)</li>
                        <li className="mb-5">Ama Weight: 2 lbs. (pro-carbon) / 3 lbs. (hybrid)</li>
                        <li className="mb-5">Iakos Weight: 1 lbs. (pro-carbon) / 2 lbs. (hybrid)</li>
                        <li className="mb-5">Total Weight Rigged: 21 lbs. / 27 lbs. (hybrid)</li>
                    </ul>
                </div>
                <img className="w-5/12 pr-10" alt="Canoe" src="./mako_6.jpg" />
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

export default Mako