import React from 'react'

const SubHeader = () => {
  return (
    <div className="w-full mt-[100px] md:mt-[70px] mx-auto max-w-2xl flex justify-left items-left bg-white bg-opacity-75 p-4 z-50 xl:h-auto fixed border-2 border-red-600 border-solid">
        <ul className="h-auto w-full mx-auto text-xl text-black md:h-auto md:py-auto md:items-left md:justify-left md:flex gap-x-[50px] border-2 border-red-600 border-solid">
          <li className='hover:text-purple-600 text-gray-800'>Menswear</li>
          <li className='hover:text-purple-600 text-gray-800'>Womenwear</li>
          <li className='hover:text-purple-600 text-gray-800'>Brands</li>
          <li className='text-purple-600'>New Year Sale</li>
        </ul>
    </div>
  )
}

export default SubHeader
