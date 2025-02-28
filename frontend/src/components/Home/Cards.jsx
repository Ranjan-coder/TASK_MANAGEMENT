import React from "react"
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";





const Cards = ({ home,setInputdiv }) => {
  // const [ImportantButton, setImportantButton] = useState("Incomplete")

  const Data = [
    {
      title: "The best coading chanel",
      desc: "i have to create my chanel",
      status: "In Complete",
    },
    {
      title: "Cpp concept",
      desc: "i have to create my chanel",
      status: "Complete",
    },
    {
      title: "Assignment",
      desc: "i have to create my chanel",
      status: "In Complete",
    },
    {
      title: "Projects",
      desc: "i have to create my chanel",
      status: "In Complete",
    },
  ];

  return (
    <div className="flex flex-col justify-between grid grid-cols-3 gap-4 p-4">
      {Data && Data.map((items, index) => (
        <div className="bg-gray-800 rounded p-4">
          <div>
            <h3 className="text-xl font-semibold" >{items.title}</h3>
            <p className="text-gray-300 my-2">{items.desc}</p>
          </div>
          <div className="mt-2 w-full flex items-center">
            <button className={` ${items.status === "In Complete" ? "bg-red-400" : "bg-green-400"}  p-2 rounded`}>{items.status}</button>
            <div className="text-white p-2 w-3/6 text-2xl flex justify-around">
              <button><CiHeart /></button>
              <button><FaEdit /></button>
              <button><MdDelete /></button>
            </div>
          </div>
        </div>))}
      {home === "true" && (
        <button onClick={()=> setInputdiv("fixed")} className="flex flex-col justify-center items-center bg-gray-800 rounded-5m p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <IoAddCircle className="text-5xl" />
          <h2 className="text-2xl mt-2">Add Task </h2>
        </button>
      )}

    </div>
  )
}

export default Cards
