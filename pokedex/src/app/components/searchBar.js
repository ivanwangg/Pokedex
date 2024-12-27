import { useState } from "react"


export default function SearchBar ({ onClick }) {
    const [inputId, setInputId] = useState(1)

    return (
        <div className="flex flex-row justify-center items-center w-full mt-4 mb-4">
            <input className="w-[9rem] h-[1.5rem] text-green-400 placeholder-green-400 border-2 border-green-400 
            focus:outline-none focus:border-green-500 focus:ring-green-500 pl-1 rounded-l-md" placeholder="Input ID" onChange={(e) => {
              setInputId(e.target.value)
            }}></input>
            <button className="w-[4rem] h-[1.5rem] bg-green-400 hover:bg-green-500 rounded-r-md text-white" onClick={(e) => {
              if (inputId > 0) {
                onClick(parseInt(inputId))
              }
            }}>
              Enter
            </button>
        </div>  
    )
}