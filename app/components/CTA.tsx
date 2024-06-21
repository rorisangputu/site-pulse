import Image from 'next/image'
import React from 'react'
import Arrow from '../../public/assets/arrow.png'




const CTA = () => {
    return (
        <div className='w-full rounded-[16px] py-[56px] px-[32px] text-center lg:my-[60px]
            lg:px-[324px] lg:py-[89px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500'
        >
            <h1 className='text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px]'>
                Monitor your website like a pro.
            </h1>
            <p className='text-white pt-6 lg:pt-[48px] lg:text-[18px]'>
                Join over 800+ happy site owners boosting productivity and efficiency!
            </p>

            <div className='mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center
                gap-x-[40px]'>
                <button className='py-[16px] w-fit px-[32px] font-medium bg-white rounded-[4px] text-pink-700'>
                    Try for free
                </button>
                <button className='flex w-full justify-center items-center gap-x-3 
                    mt-[32px] font-medium text-white lg:w-fit lg:mt-0 '>
                    Contact Sales <span><Image src={Arrow} alt='Learn more' /></span>
                </button>
            </div>
        </div>
    )
}

export default CTA