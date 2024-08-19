import React from 'react'
import img1 from '../assets/img3.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
function Page1() {
    const navigate=useNavigate()
  return (
   <>
  
   <div className='h-[88vh] w-full bg-[#ECECEC] '>
    <div className=' bg-[#FFFFFF] mx-auto w-[90%] h-[66vh]  '>
                <div className='grid grid-cols-2 text-center items-center '>
                        <h3 className='bg-[#52387E] text-xl font-semibold p-3 text-white'>COVERAGE</h3>
                        <h3 className='bg-[#F38E73] text-xl font-semibold p-3 text-white'>ELIGIBILITY</h3>
                </div>
                <div className='grid grid-cols-2  w-full h-full'>
                        <div className='flex flex-col gap-7 justify-center items-start px-20 ml-28'>
                            <h1 className='text-3xl    '>Great news! it looks like you're covered!</h1>
                            <p className='text-lg '>Based on the information you entered, your health insurance likely offers the 360TotalCare program as a covered health benefit. If you're eligible, you can join this groundbreaking online program at no cost to you.
                            </p>
                        </div>
                        <div className='w-full h-full items-center flex justify-center py-10'>
                            <img src={img1} alt="" />
                        </div>
                </div>
                
    </div>
                <div  className='w-full justify-end px-10 flex bg-[#ECECEC] h-[22vh] mx-auto'>
                           <Link to="/pag2">
                           <button className='bg-[#F38E73]  my-auto mr-10 p-2 text-white cursor-pointer'>Start my 3-day free trail</button>
                           </Link>
                </div>

   </div>
   </>
  )
}

export default Page1