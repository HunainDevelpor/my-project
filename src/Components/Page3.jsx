import React from 'react'
import img1 from '../assets/img5.png'
import { Link } from 'react-router-dom'

function Page3() {

  return (
    <>
    <div className='h-[88vh] w-full bg-[#ECECEC] '>
            <div className='flex items-start justify-center py-14 mx-auto w-full gap-5'>
                    <div className='flex flex-col ml-20 gap-10 p-12 my-auto   h-[50vh]'>
                            <h3 className='text-5xl '>Uh Oh! We need to do a manual verification</h3>
                           <div className='w-[55%] px-2 '>
                           <p className='text-md '>We will complete the verification process and once we have confirmed your coverage details we will send you a follow-up email with the next steps.</p>
                            <div className='flex justify-between mt-10 w-full'>
                                <Link to='/pag2'>
                                <button className='text-white cursor-pointer w-[10vw] py-2 bg-[#52387E]'>Back</button>
                                </Link>
                               <Link to='/page4'>
                               <button className='text-white  cursor-pointer w-[14vw] py-2 bg-[#F38E73]'>Next to 360 Care</button>
                               </Link>
                            </div>
                           </div>
                    </div>
                    <div className='flex justify-center w-1/2 '>
                            <img src={img1} alt="" />
                    </div>
            </div>
    </div>
    </>
  )
}

export default Page3