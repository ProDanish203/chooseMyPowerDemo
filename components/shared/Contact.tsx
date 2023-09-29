import Image from 'next/image'
import React from 'react'
import ContactImg from "@/public/banner3.jpg";


export const Contact = () => {
  return (
    <div className='md:px-10 px-3 max-w-[1200px] w-full mx-auto flex items-center gap-10'>

        <div className='flex-1'>
            <form 
            className='bg-secondary py-2.5 pt-5 md:px-7 px-2 rounded-lg shadow-sm'
            >
                <h4 className='text-accent text-lg font-semibold'>Get in touch</h4>
                <div className='mb-5 mt-2 flex flex-col gap-5 justify-center'>

                <div className='flex gap-2 items-center justify-between'>
                <input type="text" placeholder='First Name*' required 
                className='bg-white outline-none py-2.5 px-2 w-full rounded-md'
                />

                <input type="text" placeholder='Last Name*' required 
                className='bg-white outline-none py-2.5 px-2 w-full rounded-md'
                />
                </div>

                <input type="email" placeholder='Email Address*' required 
                className='bg-white outline-none py-2.5 px-2 w-full rounded-md'
                />

                <textarea
                placeholder='Your Message' 
                className='bg-white outline-none py-2.5 px-2 w-full rounded-md resize-none'
                rows={5}
                ></textarea>

                <button type='submit'
                className='bg-accent hover:bg-primary text-white text-lg py-2.5 rounded-md flex items-center justify-center gap-2'
                >
                    <i className='fas fa-paper-plane '></i>
                    Send
                </button>

                </div>

            </form>
        </div>

        <div className='flex-1 relative max-md:hidden'>
            <Image src={ContactImg} alt="about us" width={1000} height={1000} className="object-contain rounded-md"/>
        </div>

    </div>
  )
}
