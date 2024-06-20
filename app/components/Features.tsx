import React from 'react'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import bluebottom from '../../public/assets/blue-button.svg'
import greenbottom from '../../public/assets/green-button.svg'
import pinkbottom from '../../public/assets/pink-button.svg'
import Image from 'next/image'


const Features = () => {
    return (
        <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
            <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
                <Image src={Feature1} alt="feat-1" className='hidden w-1/2 sm:block' />

                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className='font-medium text-[#0085FF] lg:text-[18px]'>Sales Monitoring</h3>
                    <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px]
                    lg:leading-[58px]'>
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature1} alt="feat-1" className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Track your sales effortlessly with our comprehensive dashboard.
                        Gain insights into your sales performance and make data-driven decisions.
                    </p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            Real-time sales tracking
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            Detailed sales reports
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            Customizable alerts
                        </li>
                    </ul>

                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
                        Learn More <span><Image src={bluebottom} alt='' /></span>
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-x-6 sm:flex-row'>
                <Image src={Feature2} alt="feat-2" className='hidden w-1/2 sm:block' />

                <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                    <h3 className='font-medium text-[#00A424] lg:text-[18px]'>Customer Support</h3>
                    <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px]
                    lg:leading-[58px]'>
                        Get in touch with your customers
                    </h1>
                    <Image src={Feature2} alt="feat-2" className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Enhance your customer support experience with our intuitive tools.
                        Ensure timely and effective communication with your customers.
                    </p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            24/7 support availability
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            Multichannel communication
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span>
                                <Image src={Check} alt='check' />
                            </span>
                            Integrated helpdesk
                        </li>
                    </ul>

                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424]  lg:text-[18px]'>
                        Learn More <span><Image src={greenbottom} alt='' /></span>
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
                <Image src={Feature3} alt="feat-3" className='hidden w-1/2 sm:block' />

                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className='font-medium text-[#EB2891] lg:text-[18px]'>Growth Monitoring</h3>
                    <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px]
                    lg:leading-[58px]'>
                        Monitor your site&apos;s new subsribers
                    </h1>
                    <Image src={Feature3} alt="feat-3" className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Keep track of your subscriber growth with our advanced analytics.
                        Understand your audience and optimize your strategy for better engagement.
                    </p>

                    <div className='flex w-full gap-x-[24px] h-[78px] lg:h-[96px]'>
                        <div className='w-1/2 flex flex-col gap-y-3 '>
                            <h3 className='text-[#172026] text-[20px] font-medium lg:text-4xl'>100+</h3>
                            <p className='text-[#36485C] text-base lg:text-[18px]'>New subscribers every month</p>
                        </div>
                        <div className='w-1/2 flex flex-col gap-y-3  '>
                            <h3 className='text-[#172026] text-xl font-medium lg:text-4xl'>800+</h3>
                            <p className='text-[#36485C] text-base lg:text-[18px]'>Total subscribers reached</p>
                        </div>
                    </div>


                    <p className='flex items-center gap-x-3 py-[24px] font-medium text-[#EB2891] lg:text-[18px]'>
                        Learn More <span><Image src={pinkbottom} alt='' /></span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Features