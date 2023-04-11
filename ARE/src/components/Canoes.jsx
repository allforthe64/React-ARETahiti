const Canoes = () => {
    return (
        <div id="en">
            <div class="container">
                <h1 class="spacer big-heading center-text spacer-2">Canoes</h1>
                <p class="t5 grey spacer">Ready to take the next step on your outrigger journey?
                    Well, you're in the right place! Athletes from around the world have 
                    won races in ARE canoes. Now, it's your turn. Check out our three models
                    below.
                </p>
            </div>
            <div class="container-2 spacer-2" id="top-container">
                <h2 class="medium-heading">V6 Matahina - <span class="orange-1">King Of The Waves</span> </h2>
                <div class="container container-row spacer spacer-bottom">
                    <img src="../static/images/matahina_2.jpg" alt="Matahina Canoe" id="canoe-img-1" />
                    <div class="container">
                        <p class="t2" id="canoe-text-1">Sleek and sharp looking, ARE Tahiti's 
                            V6 Matahina is a superb competetive outrigger. Built for the surf,
                            the Matahina is the perfect boat to launch your racing tradition from.
                        </p>
                        <form method="get" action="{% url 'matahina' %}" class="content-form" id="canoe-form-1">
                            <button type="submit" class="disc-button spacer-small" id="canoe-button-1">See More</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container-2 spacer-2">
                <h2 class="medium-heading">V1 Marara - <span class="orange-1">Be At 1</span> </h2>
                <div class="container container-row spacer spacer-bottom" id="canoe-container-2">
                    <div class="container">
                        <p class="t2" id="canoe-text-2">At the forefront of premium 
                            outriggers, the Marara V1 is the ultimate solo outrigger
                            experience. Are you ready to be "at one"?
                        </p>
                        <form method="get" action="{% url 'marara' %}" class="content-form" id="canoe-form-2">
                            <button type="submit" class="disc-button spacer-small" id="canoe-button-2">See More</button>
                        </form>
                    </div>
                    <img src="../static/images/marara_1.jpg" alt="Marara Canoe" id="canoe-img-2" />
                </div>
            </div>
            <div class="container-2 spacer-2">
                <h2 class="medium-heading">OC1 Mana - <span class="orange-1">Raising The Standard</span> </h2>
                <div class="container container-row spacer spacer-bottom">
                    <img src="../static/images/mana_1.jpg" alt="Mana OC1" id="canoe-img-3" />
                    <div class="container">
                        <p class="t2" id="canoe-text-3">For years, ARE Tahiti has set the standard
                            for outrigger excellence. Now, we've raised the bar again with our
                            Mana OC1. Balancing craftsmanship and accessability with performance,
                            the Mana OC1 is ready to take on whatever awaits.
                        </p>
                        <form method="get" action="{% url 'mana' %}" class="content-form" id="canoe-form-3">
                            <button type="submit" class="disc-button spacer-small" id="canoe-button-3">See More</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container spacer-bottom-lg">
                <h1 class="spacer big-heading center-text spacer-2">Next Steps</h1>
                <p class="t5 grey spacer">Now that you've chosen the perfect canoe,
                    it's time to order it! Click the button below for more information
                    on our ordering process.
                </p>
                <form method="get" action="{% url 'order' %}" class="content-form">
                    <button type="submit" class="disc-button spacer-small" id="canoe-button-4">Find Out More</button>
                </form>
            </div>
        </div> 

    )
}

export default Canoes