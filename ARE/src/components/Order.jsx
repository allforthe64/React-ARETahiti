import { useState } from "react"

const Order = () => {

    const [canoe, setCanoe] = useState()
    const [openPanel, setOpenPanel] = useState(false)
    const [custom, setCustom] = useState(true)
    const [custColor, setCustColor] = useState()
    const [preColor, setPreColor] = useState()
    const [model, setModel] = useState()
    const [c1, setC1] = useState()
    const [c2, setC2] = useState()
    const [c3, setC3] = useState()
    const [preC1, setPreC1] = useState()
    const [preC2, setPreC2] = useState()
    const [preC3, setPreC3] = useState()

    const colorsObj = {
        "White": "#FFFFFF",
        "Yellow": "#FFE400",
        "Blue": "#0045B6",
        "Red": "#FF0000",
        "Dark Blue": "#005F8E",
        "Green": "#00D80C",
        "Light Grey": "#DBDBDB"
    }

    const click = (index) => {
        setCanoe(index)
        setCustColor(null)
        setModel(null)
        setC1([])
        setC2([])
        setC3([])
        setPreC1([])
        setPreC2([])
        setPreC3([])


        if (openPanel === false) setOpenPanel(true)
    }

    const customClick = (category) => {
        if (category === 'cust') {
            setCustom(true)
        } else {
            setCustom(false)
        }
    }

    const colorSelect = (e) => {

        if (e.target.value === 'Select a color scheme') return

        setCustColor(e.target.value)
        const colors = e.target.value.split('/')
        
        setC1([colors[0], colorsObj[colors[0]]])
        setC2([colors[1], colorsObj[colors[1]]])
        setC3([colors[2], colorsObj[colors[2]]])
          
    }

    const preColorSelect = (e) => {

        if (e.target.value === 'Select a color scheme') return

        setPreColor(e.target.value)
        const colors = e.target.value.split('/')
        
        setPreC1([colors[0], colorsObj[colors[0]]])
        setPreC2([colors[1], colorsObj[colors[1]]])
        setPreC3([colors[2], colorsObj[colors[2]]])
          
    }

    const modelSelect = (e) => {

        if (e.target.value === 'Select a model') return

        setModel(e.target.value)

    }

    console.log(model)

    return (
        <div className="py-20">
            <div className="flex flex-col items-center">
                <h1 className="heading text-8xl grey mb-10" >Order A Canoe</h1>
            </div>
            <div className="py-10">
                <p className="heading grey text-left ml-[2.7%] text-4xl">Select a canoe:</p>
                <div className="flex justify-around py-10">
                    <img src="marara_4.JPG" className={canoe === 0 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(0)}/>
                    <img src="mana_1.JPG" className={canoe === 1 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(1)}/>
                    <img src="matahina_1.png" className={canoe === 2 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => click(2)}/>
                </div>
            </div>
            <div className={openPanel ? "block flex justify-center" : "hidden"}>
                <div className="border-2 w-9/12 bg-neutral-100 px-3 pt-8 h-[675px] rounded-xl">
                    <h1 className="grey heading text-4xl pb-10">{canoe === 0 ? 'Marara V1' : canoe === 1 ? 'Mana OC1' : 'Matahina V6'}</h1>
                    <div className="flex justify-around ">
                        <img src={canoe === 0 ? "./marara_6.JPG" : canoe === 1 ? "mana_10.JPG" : 'matahina_5.jpg'} className="w-6/12 h-[50%] mt-10"/>
                        <div className="w-5/12">
                            <div className="flex flex-col items-left mb-14">
                                <p className="orange heading text-2xl text-left mb-2">Select your region</p>
                                <select className="text-2xl bg-neutral-100 border w-10/12 grey">
                                    <option disabled={true} selected={true} hidden={true}>Select a country</option>
                                    <option>United States</option>
                                    <option>Hawaii</option>
                                    <option>Canada</option>
                                    <option>Tahiti</option>
                                    <option>Australia</option>
                                    <option>Pacific Islands</option>
                                </select>
                            </div>
                            <div className="flex justify-around mb-10">
                                <p className={custom ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => customClick('cust')}>Custom</p>
                                <p className={custom === false ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => customClick('preb')}>Prebuilt</p>
                            </div>
                            {custom === true ?
                                <>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a model</p>
                                        {canoe === 0 || canoe === 1 ? 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Pro Carbon</option>
                                                <option>Hybrid Carbon</option>
                                            </select>
                                        : 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Wood Iakos/Fiber Glass Ama</option>
                                                <option>Carbon Iakos/Carbon Ama</option>
                                            </select>
                                        }
                                    </div>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a color scheme</p>
                                        <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={colorSelect} value={custColor ? custColor : 0}>
                                            <option>Select a color scheme</option>
                                            <option>White/White/Yellow</option>
                                            <option>Blue/Blue/Red</option>
                                            <option>Dark Blue/Dark Blue/Dark Blue</option>
                                            <option>White/White/Green</option>
                                            <option>Light Grey/Light Grey/Blue</option>
                                            <option>White/White/Blue</option>
                                            <option>Yellow/Yellow/Yellow</option>
                                            <option>White/White/Red</option>
                                            <option>Light Grey/Light Grey/Light Grey</option>
                                        </select>
                                    </div>
                                </>
                            :
                                <>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a model</p>
                                        {canoe === 0 || canoe === 1 ? 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Pro Carbon</option>
                                                <option>Hybrid Carbon</option>
                                            </select>
                                        : 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Wood Iakos/Fiber Glass Ama</option>
                                                <option>Carbon Iakos/Carbon Ama</option>
                                            </select>
                                        }
                                    </div>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Canoes in stock</p>
                                        <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={preColorSelect} value={preColor ? preColor : 0}>
                                            <option>Select a color scheme</option>
                                            <option>Isn't/Anything/Here</option>
                                        </select>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    {custom === true ? 
                                (c1 && c2 && c3 && c1.length > 0 && c2.length > 0 && c3.length > 0 && custom === true) && 
                                    <div className="flex justify-around text text-xl grey">
                                        <p className="heading">Hull Color: {c1[0]}</p>
                                        <div className={(c1 && c1.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c1[1]}}></div>
                                        <p className="heading">Ama Color: {c2[0]}</p>
                                        <div className={(c2 && c2.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c2[1]}}></div>
                                        <p className="heading">Cockpit Color: {c3[0]}</p>
                                        <div className={(c3 && c3.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c3[1]}}></div>
                                    </div>      
                            :
                                (preC1 && preC2 && preC3 && preC1.length > 0 && preC2.length > 0 && preC3.length > 0 && custom === false) && 
                                    <div className="flex justify-around text text-xl grey">
                                        <p className="heading">Hull Color: {preC1[0]}</p>
                                        <div className={(preC1 && preC1.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC1[1]}}></div>
                                        <p className="heading">Ama Color: {preC2[0]}</p>
                                        <div className={(preC2 && preC2.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC2[1]}}></div>
                                        <p className="heading">Cockpit Color: {c3[0]}</p>
                                        <div className={(preC3 && preC3.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC3[1]}}></div>
                                    </div>    
                            }
                </div>
            </div>
        </div>
    )
}

export default Order 