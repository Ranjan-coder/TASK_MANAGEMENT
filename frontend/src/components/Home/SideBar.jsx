import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md"
import { FaCheckDouble } from "react-icons/fa6"
import { TbNotebookOff } from "react-icons/tb";

const SideBar = () => {
    const data = [
        {title:"All Task",
        icon: <CgNotes />

        },
        {title:"Important Task",
            icon: <MdLabelImportant/>
        },
        {title:"completed Task",
            icon: <FaCheckDouble/>
        },
        {title:"Incomplete Task",
            icon: <TbNotebookOff />
        },
    ]
  return (
    <>
    <div>
        <h2 className='text-xl font-semibold'>The code Mastr</h2>
        <h4 className='mb-1 text-gray-400'>tcm@gmail.com</h4>
        <hr/>
        </div>
        <div >
            {data.map((items,index)=>(
                <div className='my-2 flex item-center'>{items.icon}&nbsp;{items.title}</div>
            ))}
        </div>
        <div className='bg-gray-600 w-full p-2 rounded'>
            <button>LOG OUT</button>
        </div>

    </>
  )
}

export default SideBar