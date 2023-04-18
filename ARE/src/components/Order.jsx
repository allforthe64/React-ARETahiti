import { useState } from "react"

const Order = () => {

    const [color, setColor] = useState()

    const click = (index) => {
        setColor(index)
    }

    return (
        <div>
            <div className="py-20 flex flex-col items-center">
                <h1 className="heading text-8xl grey mb-10" >Order A Canoe</h1>
            </div>
            <div className="flex justify-around py-10">
                <img src="marara_4.JPG" className={color === 0 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(0)}/>
                <img src="mana_1.JPG" className={color === 1 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(1)}/>
                <img src="matahina_1.png" className={color === 2 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(2)}/>
            </div>
        </div>
    )
}

export default Order 