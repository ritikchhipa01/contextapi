import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Paginantion() {
  const {page, totalPages, handlePagechange} = useContext(AppContext);
  return (
    <div className='flex shadow-lg py-4 w-full justify-center  bg-black z-10 bottom-0 fixed'>
      <div className='flex justify-between w-[670px]'>
      <div className='flex gap-5'>
      { page >1 &&
        <button className=" text-lg text-white border-[2px] border-gray-400 rounded-md py-[2px] px-4" onClick={() => handlePagechange(page-1)} >
          Previous
        </button>
      }
      { page < totalPages &&
        <button className=" text-lg text-white border-[2px] border-gray-400 rounded-md py-[2px] px-4" onClick={() => handlePagechange(page+1)}>
          Next
        </button>
      }
      </div>
      <p className=' text-white'>page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Paginantion
