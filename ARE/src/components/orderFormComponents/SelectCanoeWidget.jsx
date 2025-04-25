import React from 'react'

const SelectCanoeWidget = ({ model, setModel, construction, setConstruction, paintType, setPaintType, amaConstruction, setAmaConstruction, iakoConstruction, setIakoConstruction}) => {
  return (
    <section className='w-full space-y-10'>
      <div className="w-full flex flex-col items-start mt-4 px-16 space-y-2">
          <label className="heading grey text-xl max-sm:text-base">Select canoe model:</label>
          <div className="w-full flex justify-start gap-x-10 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
              <button className={model === 'V1 - Marara' ? "w-[20%] md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                setModel('V1 - Marara')
                setConstruction('') 
                setPaintType('') 
                setAmaConstruction('')
                setIakoConstruction('')
              }} type="button">
                  V1 - Marara
              </button>
              <button className={model === 'V1 - Mako' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                setModel('V1 - Mako')
                setConstruction('') 
                setPaintType('') 
                setAmaConstruction('')
                setIakoConstruction('')
              }} type="button">
                  V1 - Mako
              </button>
              <button className={model === "V1 - Timi Va'a" ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                setModel("V1 - Timi Va'a")
                setConstruction('') 
                setPaintType('') 
                setAmaConstruction('')
                setIakoConstruction('')
              }} type="button">
                  V1 - Timi Va'a
              </button>
              <button className={model === "V6 - Matahina" ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                setModel("V6 - Matahina")
                setConstruction('Fiberglass Blend')
                setPaintType('Gloss')
                setAmaConstruction('')
                setIakoConstruction('')
              }} type="button">
                V6 - Matahina
              </button>
          </div>
      </div>
      <div className="w-full flex flex-col items-start mt-4 px-16 space-y-2">
          <label className="heading grey text-xl max-sm:text-base">Select construction material:</label>
          <div className="w-full flex justify-start gap-x-10 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
            {model !== 'V6 - Matahina' ?
              <>
                <button className={construction === 'Pro Carbon' ? "w-[20%] md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setConstruction('Pro Carbon')} type="button">
                    Pro Carbon
                </button>
                <button className={construction === 'Hybrid' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                  setConstruction('Hybrid')
                  setPaintType('Gloss')
                }} type="button">
                    Carbon Hybrid
                </button>
              </>
            :
              <>
                <button className={construction === 'Fiberglass Blend' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} type="button">
                    Fiberglass Blend
                </button>
              </>
            }
          </div>
      </div>
      <div className="w-full flex flex-col items-start mt-4 px-16 space-y-2">
          <label className="heading grey text-xl max-sm:text-base">Select paint type:</label>
          <div className="w-full flex justify-start gap-x-10 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
            {model !== 'V6 - Matahina' ?
              <>
                <button className={paintType === 'Gloss' ? "w-[20%] md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setPaintType('Gloss')} type="button">
                    Gloss
                </button>
                <button className={paintType === 'Brushed Carbon' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => {
                  setPaintType('Brushed Carbon')
                }} type="button" disabled={construction === 'Hybrid' ? true : false}>
                    Brushed Carbon
                </button>
              </>
            :
              <>
                <button className={paintType === 'Gloss' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} type="button">
                    Gloss
                </button>
              </>
            }
          </div>
      </div>
      {model === 'V6 - Matahina' &&
        <>
          <div className="w-full flex flex-col items-start mt-4 px-16 space-y-2">
            <label className="heading grey text-xl max-sm:text-base">Select ama construction:</label>
            <div className="w-full flex justify-start gap-x-10 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
                <button className={amaConstruction === 'Fiberglass Blend' ? "w-[20%] md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setAmaConstruction('Fiberglass Blend')} type="button">
                    Fiberglass Blend
                </button>
                <button className={amaConstruction === 'Pro Carbon' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setAmaConstruction('Pro Carbon')} type="button">
                    Pro Carbon
                </button>
              </div>
          </div>
          <div className="w-full flex flex-col items-start mt-4 px-16 space-y-2">
            <label className="heading grey text-xl max-sm:text-base">Select Iako construction:</label>
            <div className="w-full flex justify-start gap-x-10 pt-2 md:max-[955px]:justify-between max-sm:justify-between max-[533px]:flex-col max-[533px]:space-x-0 max-[533px]:gap-y-4">
                <button className={iakoConstruction === 'Fiberglass Blend' ? "w-[20%] md:max-[955px]:w-[35%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 md:max-[955px]:w-[35%] border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setIakoConstruction('Fiberglass Blend')} type="button">
                    Fiberglass Blend
                </button>
                <button className={iakoConstruction === 'Pro Carbon' ? "w-[20%] max-[533px]:w-6/12 border-2 heading text-white border-black rounded-md bg-black text-sm max-sm:text-xs" : "w-[20%] max-[533px]:w-6/12 border-2 heading grey border-[#515151] hover:scale-105 transition duration-200 ease-in-out rounded-md text-sm max-sm:text-xs"} onClick={() => setIakoConstruction('Pro Carbon')} type="button">
                    Pro Carbon
                </button>
              </div>
          </div>
        </>
      }
    </section>
  )
}

export default SelectCanoeWidget