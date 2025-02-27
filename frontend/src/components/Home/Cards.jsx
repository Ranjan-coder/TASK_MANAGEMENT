import React from "react"

const Cards = () =>{

  const Data = [
    {
      title: "The best coading chanel",
      desc: "i have to create my chanel"
    },
    {
      title: "Cpp concept",
      desc: "i have to create my chanel"
    },
    {
      title: "Assignment",
      desc: "i have to create my chanel"
    },
    {
      title: "Projects",
      desc: "i have to create my chanel"
    },
  ];

  return (
    <div className="flex flex-col justify-between grid grid-cols-3 gap-4 p-4">
      {Data && Data.map((items,index)=>
      <div className="bg-gray-800 rounded p-4">
        <div>
        <h3 className="text-xl font-semibold" >{items.title}</h3>
        <p className="text-gray-300 my-2">{items.desc}</p>
          </div>
        <div className="mt-2">
        <button className="bg-red-400 p-2 rounded">In Complete</button>
          </div>
      </div>)}
    
    </div>
    )
}

export default Cards
