import React from 'react'
import {tasbeeh} from '../data/data'
import Middle from './Middle'
import toast, { Toaster } from 'react-hot-toast'
// import { handleClick } from './Middle'


const Tasbeehname = () => {

    const handleToast=()=>{
        toast('Selected',
  {
    icon: '👍',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);

    }
    
    return (
    <>
    <Toaster />
        <div className='text-[20px] pt-10 flex flex-row lg:flex-col '>
            
            {
                tasbeeh.map(({name,id})=>{
                    return(
                        <button className='w-full p-1 border-white border-2 bg-[#ff87bd] hover:bg-[#86003C] mt-7 text-1xl' onClick={handleToast}>
                            <a key={id}id={id}>{name}</a>
                            </button>
                    )
                })
            }

       
    </div>
       </>
    )
}

export default Tasbeehname