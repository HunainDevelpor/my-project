import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
function Navbar() {
  return (
<>
<div className='flex justify-between px-20 h-[12vh]   w-full items-center'>
        <div className=' items-center'>
            <img src={img2} alt="" />
        </div>
        <div className=''>
            <img src={img1} alt="" className='' />
        </div>
</div>

</>

)
}

export default Navbar