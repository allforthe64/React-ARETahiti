const Matahina = () => {
    return (
        <div id="en">
            <div className="container">
                <h1 className="spacer medium-heading center-text spacer-2">V6 Matahina - <span className="orange-1">King Of The Waves</span></h1>
                <p className="spacer-small xsmall-heading">USD $19,000 (Wood Iakos/Fiber Glass Ama) / USD $21,000 (Carbon Iakos/Carbon Ama)</p>
                <img src="./matahina_1.png" alt="Matahina Canoe" className="canoe-page-imgs"/>
                {/* <hr className="hr-orange spacer"> */}
            </div>
            <div className="container-2 spacer-small">
                <p className="t2">Meet the master of rough ocean waters: the ARE Tahiti Matahina V6.
                    Built for the surf, this fast sleek canoe is guaranteed to leave the competition
                    in your wake. With it's unrivaled racing record, the Matahina is used by winning teams 
                    in both Australia and Tahiti, including Shell Va'a. If you're looking for a boat 
                    to build your teams legacy with, then look no further than the Matahina V6.
                </p>
            </div>
            <form method="get" action="{% url 'order' %}" className="content-form">
                <button type="submit" id="order-button" className="disc-button spacer-small">Order Now</button>
            </form>
            <div className="container-2 spacer-2">
                <h2 className="medium-heading" id="feature-heading">Highlights</h2>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container container-row">
                            <img src="./matahina_4.jpg" className="canoe-caro-imgs" id="mata-img-1" />
                            <div className="container-5">
                                <div className="container">
                                    <h3 className="heading-xsmall orange-1">Built For Racing</h3>
                                    <p className="t6 spacer-small">Used by competetive outrigger teams
                                        everywhere, the Matahina OC6 is the ultimate racing weapon.
                                        Designed to be fast in all conditions, the Matahina is ready
                                        to lead your team to victory.
                                    </p>
                                </div>          
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container container-row">
                            <img src="./matahina_6.jpg" className="canoe-caro-imgs" />
                            <div className="container-5">
                                <div className="container">
                                    <h3 className="heading-xsmall orange-1">Adjustable Rigging</h3>
                                    <p className="t6 spacer-small">The Matahina's rigging is adjustable,
                                        allowing for infinite customization to meet your needs. Whether
                                        you're rigging for flatwater or rough ocean, the Matahina's 
                                        adjustable rigging allows you to set yourself up for success.
                                    </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container container-row">
                            <img src="./matahina_7.jpg" className="canoe-caro-imgs" />
                            <div className="container-5">
                                <div className="container">
                                    <h3 className="heading-xsmall orange-1">Secret Formula</h3>
                                    <p className="t6 spacer-small">The Matahina features the handling
                                        of a carbon ultralight OC6 with a polyester-fiberglass build.
                                        This means you can skip the hastle of finding a carbon repair
                                        specialist if you encounter any accidents on your quest for 
                                        victory.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span><i className="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span><i className="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="canoe-container-full spacer-2">
                <div className="canoe-container-indv" id="con-1">
                    <h3 className="medium-heading" id="canoe-heading-1">Features</h3>
                    <ul className="spacer-small canoe-list">
                        <li className="t1 element">Length: 42.8 ft.</li>
                        <li className="t1 element">Beam: 22.08 in.</li>
                        <li className="t1 element">Hull Weight: Approx. 220 lbs.</li>
                        <li className="t1 element">Ama Weight: 18 lbs. (Carbon) / 28 lbs. (Fiber Glass)(</li>
                        <li className="t1 element">Iakos Weight: 16 lbs. (Carbon) / 18 lbs. (Wooden)</li>
                        <li className="t1 element">Total Weight Rigged: 250 lbs. (Carbon) / 270 lbs. (Wooden)</li>
                    </ul>
                </div>
                <div className="canoe-container-indv" >
                    <h3 className="medium-heading" id="canoe-heading-2">Features</h3>
                    <img className="canoe-img" alt="Canoe" src="./matahina_3.jpg" />
                    <div className="container-2 container-row" id="button-container">
                        <button className="color-buttons" id="yellow"></button>
                        <button className="color-buttons" id="blue"></button>
                        <button className="color-buttons" id="green"></button>
                        <button className="color-buttons" id="purple"></button>
                        <button className="color-buttons" id="grey"></button>
                    </div>
                </div>
            </div>
            <div className="container spacer-2">
                <h2 className="medium-heading">See It In Action</h2>
                <iframe className="canoe-frame spacer-small" src="https://www.youtube.com/embed/9Myqm1k2UNs"></iframe>
            </div>
            <div className="container-2 spacer-2 spacer-bottom">
                <h2 className="medium-heading">Ready To <span className="orange-1">Crush Some Waves?</span></h2>
                <p className="t2 spacer-small">
                    Time to get your hands on an ARE canoe. You'll be surfing waves and winning races in no time!
                    Click the button to order your canoe!
                </p>
                <form method="get" action="{% url 'order' %}" className="content-form">
                    <button type="submit" className="disc-button spacer-small" id="canoe-button-4">Order Now</button>
                </form>
            </div>
        </div>
    )
}

export default Matahina