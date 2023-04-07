import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div id="en">
            <div className="w-full">
                <img className="w-full" src="./home_img.png" />
            </div>
            {/*Discover ARE*/}
            <div class="spacer spacer-bottom">
                <h1 className="orange text-8xl py-24 heading">Discover ARE</h1>
                <div className="flex justify-around">
                    <div className="w-3/12 border border-black p-4 shadowed">
                        <img src="./mana_8.JPG" alt="outrigger-1" className="h-[85%] w-full" />
                        <button type="submit" className="text" to={'/canoes'}><Link>Get An Outrigger</Link></button>
                    </div>
                    <div className="w-3/12 border border-black p-4 shadowed">
                        <img src="./marara_6.JPG" alt="outrigger-2" className="h-[85%] w-full" />
                        <button type="submit" className="text"><Link to={"https://www.youtube.com/channel/UCX1yW5NSmLIGCmXhaD4A98Q"} target="_blank">See Them In Action</Link></button>
                    </div>
                    <div className="w-3/12 border border-black p-4 shadowed">
                        <img src="./matahina_8.jpg" alt="outrigger-3" class="discover-img" /> 
                        <button type="submit" className="text"><Link to={'/order'}>Ordering A Canoe</Link></button>
                    </div>
                </div>
            </div>


            {/*introduction*/}

            <div className="py-16">
                <h1 class="medium-heading spacer white spacer-bottom-small">ARE Tahiti - Born For The Water</h1>
                <div class="container container-row spacer-bottom" >
                    <img src="./marara_7.JPG" alt='Outrigger Paddler' id="intro-pic" />
                    <div class="container" id="intro-container">
                        <p class="t4 white spacer">A lot more goes into an ARE Tahiti va’a, or outrigger, than meets the eye. 
                            To improve your speed and performance on the water, we take painstaking time and effort to perfect every last detail. 
                            Our quest for perfection steers everything we do, including refining the design, engineering and construction of our canoes. 
                            Plus we never lose sight of our customers, building a canoe that’s super-fast and super-fun. </p>

                        <ul class="spacer-small white" id="list-2">
                            <li>
                                <p class="t4 white">
                                    Unrelenting R&D – factoring in all the variables of water, wind, weight, and balance
                                </p>
                            </li>
                            <li>
                                <p class="t4 white">
                                    Uncompromising craftsmanship – because every little detail influences speed and performance 
                                </p>
                            </li>
                            <li>
                                <p class="t4 white">
                                    Unparalleled performance – exhilarating speed, effortless glide, and pure enjoyment! 
                                </p>
                            </li>
                        </ul> 
                    </div>
                </div> 
                <h1 class="medium-heading spacer white">Get In Touch</h1>
                <p class="t2 white spacer">ARE TAHITI designs and builds va’a, or outrigger canoes, for Tahiti and the Pacific islands, Australia, 
                    Hawaii, the mainland United States and Canada. Once you've ordered a canoe, get in touch with the 
                    nearest ARE representative for more information
                    on the shipping and pickup process</p>
                <div class="container container-row spacer-small spacer-bottom" id="list-container">
                    <div class="container"  id="l1">
                        <ul class="list">
                            <a class="t3 white" href="/">United States</a>
                            <a class="t3 white" href="/">Canada</a>
                            <a class="t3 white" href="/">Hawaii</a> 
                        </ul>
                    </div>
                    <div class="container" id="l2">
                        <ul class="list" id="list-2">
                            <a class="t3 white" href="/">Tahiti</a>
                            <a class="t3 white" href="/">Australia</a>
                            <a class="t3 white" href="/">Pacific Islands</a> 
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home