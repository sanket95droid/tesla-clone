import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
        <div className="absolute inset-x-0 text-center top-[15%] ">
            <h1 className="text-4xl font-bold text-[#171a20]">Model 3</h1>
            <p className="text-[17px] text-[#171a20]">Leasing starting at $349/mo</p>
        </div>

        <div className="flex flex-row items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[11%] font-bold">
            <button className="bg-[#171a20]/90 text-white w:96 lg:w-72 m-3 rounded py-3 px-7">Custom Order</button>
            <button className="bg-white/70 text-[#393c41] w:96 lg:w-72 m-3 rounded py-3 px-7">Demo Drive</button>
        </div >

        <div className="flex justify-center text-3xl text-[#171a20] absolute inset-x-0 bottom-[3%] animate-bounce hover:cursor-pointer">
            <FiChevronDown/>
        </div>
    </div>
  )
}

export default Model
