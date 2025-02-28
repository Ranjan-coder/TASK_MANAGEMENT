import React from 'react'
import {Link} from 'react-router-dom'


const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center '>
        <div className='p-4 w-2/6 rounded bg-gray-800 '>
        <div className='text-2xl font-semibold'>Signup</div>
        <input type='username' name='username' placeholder='username' className='bg-gray-700 px-3 py-2 my-3 w-full rounded'/>
        <input type='email' name='xyz@gmail.com' placeholder='email' required className='bg-gray-700 px-3 py-2 my-3 w-full rounded'/>
        <input type='password' name='password' placeholder='password' className='bg-gray-700 px-3 py-2 my-3 w-full rounded'/>
          <div className='w-full flex items-center justify-between'>
            <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded'>Signup</button>
            <Link to="/login" className='text-gray-400 hover:text-gray-200' >Already Having An Account ? Login Here</Link>
          </div>
        </div>

    </div>
  )
}

export default Signup
