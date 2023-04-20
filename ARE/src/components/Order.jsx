import { useState } from "react"

const Order = () => {

    const [color, setColor] = useState()
    const [openPanel, setOpenPanel] = useState(false)
    const [custom, setCustom] = useState()

    const click = (index) => {
        setColor(index)

        if (openPanel === false) setOpenPanel(true)
    }

    const customClick = (category) => {
        if (category === 'cust') {
            setCustom(true)
        } else {
            setCustom(false)
        }
    }

    const content = [
        <div className="border-2 w-9/12 bg-neutral-100 px-3 pt-8 h-[600px] rounded-xl">
            <h1 className="grey heading text-4xl pb-10">Marara V1</h1>
            <div className="flex justify-around">
                <img src="./marara_6.JPG" className="w-6/12"/>
                <div className="border w-5/12">
                    <div className="flex flex-col items-left mb-14">
                        <p className="orange heading text-2xl text-left mb-2">Select your region</p>
                        <select className="text-2xl bg-neutral-100 border w-6/12 grey">
                            <option>United States</option>
                            <option>Hawaii</option>
                            <option>Canada</option>
                            <option>Tahiti</option>
                            <option>Australia</option>
                            <option>Pacific Islands</option>
                        </select>
                    </div>
                    <div className="flex justify-around">
                        <p className={custom ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => customClick('cust')}>Custom</p>
                        <p className={custom === false ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => customClick('preb')}>Prebuilt</p>
                    </div>
                </div>
            </div>
        </div>,
        <div className="border-2 w-9/12 bg-neutral-100 px-3 pt-8 h-[600px] rounded-xl">
            <h1 className="grey heading text-4xl pb-10">Mana OC1</h1>
            <div className="flex justify-around">
                <img src="./mana_10.JPG" className="w-6/12"/>
                <div className="border w-5/12 flex flex-col items-left">
                    <p className="orange heading text-2xl text-left mb-2">Select your region</p>
                    <select className="text-2xl bg-neutral-100 border w-6/12 grey">
                        <option>United States</option>
                        <option>Hawaii</option>
                        <option>Canada</option>
                        <option>Tahiti</option>
                        <option>Australia</option>
                        <option>Pacific Islands</option>
                    </select>
                </div>
            </div>
        </div>,
        <div className="border-2 w-9/12 bg-neutral-100 px-3 pt-8 h-[600px] rounded-xl">
            <h1 className="grey heading text-4xl pb-10">Matahina OC6</h1>
            <div className="flex justify-around">
                <img src="./matahina_2.jpg" className="w-6/12"/>
                <div className="border w-5/12 flex flex-col items-left">
                    <p className="orange heading text-2xl text-left mb-2">Select your region</p>
                    <select className="text-2xl bg-neutral-100 border w-6/12 grey">
                        <option>United States</option>
                        <option>Hawaii</option>
                        <option>Canada</option>
                        <option>Tahiti</option>
                        <option>Australia</option>
                        <option>Pacific Islands</option>
                    </select>
                </div>
            </div>
        </div>
    ]

    return (
        <div className="py-20">
            <div className="flex flex-col items-center">
                <h1 className="heading text-8xl grey mb-10" >Order A Canoe</h1>
            </div>
            <div className="py-10">
                <p className="heading grey text-left ml-[2.7%] text-4xl">Select a canoe:</p>
                <div className="flex justify-around py-10">
                    <img src="marara_4.JPG" className={color === 0 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(0)}/>
                    <img src="mana_1.JPG" className={color === 1 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(1)}/>
                    <img src="matahina_1.png" className={color === 2 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(2)}/>
                </div>
            </div>
            <div className={openPanel ? "block flex justify-center" : "hidden"}>
                {content[color]}
            </div>
        </div>
    )
}

export default Order 