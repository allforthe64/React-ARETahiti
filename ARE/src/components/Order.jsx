import { useState } from "react"
import OrderHeader from "./OrderHeader"
import OrderPanel from "./OrderPanel"

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
            <OrderHeader canoe={canoe} func={click}/>
            <div className={openPanel ? "block flex justify-center" : "hidden"}>
                <OrderPanel canoe={canoe} custom={custom} modelSelect={modelSelect} model={model} 
                    colorSelect={colorSelect} custColor={custColor} c1={c1} c2={c2} c3={c3} preC1={preC1} preC2={preC2} preC3={preC3} func={customClick}
                    preColorSelect={preColorSelect} preColor={preColor}/>
            </div>
        </div>
    )
}

export default Order 