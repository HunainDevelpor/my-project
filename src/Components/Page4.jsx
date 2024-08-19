import React from 'react'
import img1 from '../assets/img7.png'
import img2 from '../assets/img4.png'
import img3 from '../assets/img8.png'
import img4 from '../assets/img6.png'
function Page4() {
    return (
        <>
            <div className='h-[88vh] w-full bg-[#ECECEC]'>
                <div className='h-[70vh] flex flex-col sm:flex-row items-center justify-center px-20 w-full'>
                    <div className='w-1/2 flex  justify-center'>
                        <div className='grid grid-cols-2  gap-10'>
                            <div className='font-semibold'>
                                <label htmlFor="fname" >First Name</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <img src={img2} alt="" />
                                    <input type="text" name='fname' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>
                            <div className='font-semibold'>
                                <label htmlFor="Lname" >Last Name</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <img src={img2} alt="" />
                                    <input type="text" name='Lname' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>
                            <div className='font-semibold'>
                                <label htmlFor="email" >Email</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <img src={img4} alt="" className='w-6 h-5' />
                                    <input type="text" name='email' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>
                            <div className='font-semibold'>
                                <label htmlFor="phno" >Mobile Number</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <img src={img3} alt="" className='h-6' />
                                    <input type="text" name='phno' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>
                            <div className='font-semibold'>
                                <label htmlFor="fname" >Identification Number</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <input type="text" name='fname' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>
                            <div className='font-semibold'>
                                <label htmlFor="policy" >Policy Number</label>
                                <div className='flex bg-white p-2 mt-2 '>
                                    <input type="text" name='fname' className='outline-none w-full px-3 font-normal text-zinc-700' />
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='w-1/2 flex flex-col gap-5 justify-center items-center'>
                        <img src={img1} alt="" />
                        <div  className=' justify-end w-[55vh] flex'>
                            <button  className='text-white  cursor-pointer p-2 px-8 bg-[#F38E73]  '>Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page4