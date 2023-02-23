import React from 'react'

const Model = () => {
  return (
    <div className="flex flex-col">
        <div className="absolute inset-x-0 text-center top-[15%] ">
            <h1 className="text-[40px] font-bold text-[#171a20]">Model 3</h1>
            <p className="text-[17px] text-[#171a20]">Leasing starting at $349/mo</p>
        </div>

        <div className="flex flex-row text-sm font-bold justify-between">
            <button className="bg-[#171a20]/80 text-white rounded py-3 px-7">Custom Order</button>
            <button className="bg-white text-[#393c41]/70 rounded py-3 px-7">Demo Drive</button>
        </div>
    </div>
  )
}

export default Model
