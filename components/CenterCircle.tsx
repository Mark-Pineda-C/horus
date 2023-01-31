import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

const CenterCircle = () => {
  return (
    <div className='absolute -z-10 w-screen h-screen flex items-center justify-center top-0'>
        <div className="center-circle global-gradient-to-b cursor-pointer">
            <FaAngleDoubleRight className='text-white text-5xl' />
        </div>
    </div>
  )
}

export default CenterCircle