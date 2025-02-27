import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md"
import { FaCheckDouble } from "react-icons/fa6"
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const data = [
        {title:"All Task",
        icon: <CgNotes />,
         link:"/",
         

        },
        {title:"Important Task",
            icon: <MdLabelImportant/>,
         link:"/importantTasks",
        },
        {title:"completed Task",
            icon: <FaCheckDouble/>,
         link:"/completedTasks",
        },
        {title:"Incomplete Task",
            icon: <TbNotebookOff />,
         link:"/incompleteTasks",
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
                <Link to={items.link} key={index} className='my-2 flex items-center hover:bg-gray-600 rounded transition-all'>{items.icon}&nbsp;{items.title}</Link>
            ))}
        </div>
        <div className='bg-gray-600 w-full p-2 rounded'>
            <button>LOG OUT</button>
        </div>

    </>
  )
}

export default SideBar
