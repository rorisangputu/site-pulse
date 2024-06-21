import Image from 'next/image'
import React from 'react'
import Check from '../../public/assets/check.svg'
import { FaCheck } from "react-icons/fa6";
//#4328EB
//#36485C
//#5F7896

const Pricing = () => {
    return (
        <div className='py-[48px] lg:py-[60px]'>
            <h1 className='text-center text-2xl font-medium text-[#172026] lg:text-[42px]'>Flexible plans for you.</h1>
            <p className='pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]'>No hidden fees!</p>

            <div className='flex flex-col gap-y-6 gap-x-[24px] lg:flex-row'>

                <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
                    <div>
                        <h3 className='text-[#4328EB] font-medium text-[18px] lg:text-xl'>
                            Free Trial
                        </h3>

                        <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
                            Perfect for testing the waters
                        </p>

                        <h2 className='pt-6 text-2xl font-medium lg:text-[32px]'>
                            0$<span className='text-[#5F7896]'>/mo</span>
                        </h2>

                        <ul className='flex flex-col gap-y-2 pt-6 text-[#5F7896] lg:text-[18px]'>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='check' />
                                </span>
                                Real-time sales tracking
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='check' />
                                </span>
                                Basic analytics
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='check' />
                                </span>
                                Customizable alerts
                            </li>
                        </ul>

                    </div>

                    <button className='text-[#4328EB] mt-4 py-[14px] rounded-[4px] bg-white font-medium'>
                        Start Trial
                    </button>

                </div>

                <div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col'>
                    <div>
                        <h3 className='text-white font-medium text-[18px] lg:text-xl'>
                            Business
                        </h3>

                        <p className='pt-[12px] text-[#F4F8FA] lg:text-[18px]'>
                            Perfet for small business
                        </p>

                        <h2 className='pt-6 text-2xl font-medium text-white lg:text-[32px]'>
                            500$<span className='text-[#F4F8FA] '>/mo</span>
                        </h2>

                        <ul className='flex flex-col gap-y-3 pt-6 py-8 text-[#F4F8FA] lg:text-[18px]'>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <FaCheck className="text-white" />
                                </span>
                                Real-time sales tracking
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <FaCheck className="text-white" />
                                </span>
                                In-depth analytics
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <FaCheck className="text-white" />
                                </span>
                                Customizable alerts
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <FaCheck className="text-white" />
                                </span>
                                Seamless integration
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <FaCheck className="text-white" />
                                </span>
                                Comprehensive dashboards
                            </li>
                        </ul>

                    </div>

                    <button className='text-[#4328EB] mt-4 py-[14px] rounded-[4px] bg-white font-medium'>
                        Get started
                    </button>

                </div>

                <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
                    <div>
                        <h3 className='text-[#4328EB] font-medium text-[18px] lg:text-xl'>
                            Enterprise
                        </h3>

                        <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
                            Perfect for big companies
                        </p>

                        <h2 className='pt-6 text-2xl font-medium lg:text-[32px]'>
                            Custom
                        </h2>

                        <p className='pt-6 text-[16px] text-[#36485C]'>
                            Tailored solutions to meet your specific needs.
                        </p>
                        <p className='pt-2 text-[16px] text-[#36485C]'>
                            Advanced features and dedicated support for large enterprises.
                        </p>

                    </div>

                    <button className='text-[#4328EB] mt-4 py-[14px] rounded-[4px] bg-white font-medium'>
                        Contact Us
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Pricing