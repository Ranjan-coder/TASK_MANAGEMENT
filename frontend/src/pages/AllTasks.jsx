import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import { IoAddCircle } from "react-icons/io5";
import InputData from '../components/Home/InputData';


const AllTasks = () => {
  const [inputdiv, setInputdiv] = useState("hidden")
  return (
    <>
    <div>

    <div className='w-fill flex justify-end px-4 py-2'>
      <button onClick={()=> setInputdiv("fixed")}> <IoAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/></button>

      </div>
      <Cards home={"true"} setInputdiv={setInputdiv}/>
    </div>
    <InputData inputdiv={inputdiv} setInputdiv={setInputdiv}/>
    </>
  )
}

export default AllTasks