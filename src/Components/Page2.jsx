import React from 'react'
import img from '../assets/Group.png'
import { Link } from 'react-router-dom'

function Page2() {
  return (
   <>
   <div className='h-[88vh] w-full bg-[#ECECEC]'>
   <div className=' bg-[#FFFFFF] mx-auto   w-[35vw] '>
            <div className='flex flex-col gap-4 justify-center items-center p-5'>
                        <img src={img} alt="" />
                       <div className='w-[15vw] text-center '>
                        <h1 className='text-xl '>Your are now enrolled in the 360TotalCare program</h1>
                       <h3 className='text-sm  mt-2'>A welcome email will be sent to you within the next few hours to get started.</h3>
                      <Link to="/page3">
                      <button className='bg-[#F38E73] text-white p-2 rounded-sm mt-5'>Continue</button>
                      </Link>
                       </div>

            </div>
   </div>
   </div>
   
   </>
  )
}

export default Page2