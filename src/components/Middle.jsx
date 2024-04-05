import React, { useState } from 'react'
import { tasbeeh } from '../data/data'
import Tasbeehname from './Tasbeehname'


const Middle = ({name}) => {
  const [count, setcount] = useState(0)
  const addvalue=()=>{
    setcount(count+1)
  }

  const minusvalue=()=>{
    setcount(count-1)
    if(count==0){
      setcount(0)
    }
  }




  return (
    <div className='flex flex-col gap-4 p-11  items-center justify-center mx-auto w-[50%] '>
        <div>
          <h1 className='text-[2.9rem] text-[#ff87bd] oswald text-center'>
           Get Started with our amazing Tasbeeh counter!
          </h1>
        </div>
        <div>
          <p className='text-[3rem]'>{count}</p>
        </div>
        <div className='flex gap-9 items-center'>
          <button className='w-full px-2 rounded py-2 font-bold  bg-[#86003C] hover:bg-[#ff87bd] mt-7 text-1xl'onClick={addvalue}>ADD</button>
          
          <button className='w-full px-2 rounded py-2 font-bold  bg-[#86003C] hover:bg-[#ff87bd] mt-7 text-1xl'onClick={minusvalue}>SUBTRACT</button>
        </div>
      </div>
  )
}

export default Middle


