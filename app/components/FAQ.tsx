"use client";
import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";
import plus from '../../public/assets/Plus.svg';
import Image from 'next/image';

const items = [
    {
        question: 'What is the purpose of this service?',
        answer: 'Our service provides a comprehensive monitoring solution for your website, helping you stay on top of performance, uptime, and other critical metrics.'
    },
    {
        question: 'How do I get started?',
        answer: 'Getting started is simple! Sign up for a free trial, and you can start monitoring your website within minutes.'
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, we offer a 14-day free trial with no credit card required. You can explore all the features and see how our service benefits your workflow.'
    },
    {
        question: 'Can I upgrade my plan later?',
        answer: 'Absolutely! You can upgrade your plan at any time from your account settings. We offer flexible plans to suit the needs of growing businesses.'
    },
    {
        question: 'What support options are available?',
        answer: 'We offer 24/7 customer support through various channels including email, live chat, and phone. Our dedicated support team is always ready to assist you with any issues or questions.'
    },
]
const FAQ = () => {
    return (
        <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row gap-x-6'>
            <div className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
                <h3 className='text-[#EB2891] text-[14px] lg:text-base font-medium'>
                    Frequently Asked Questions
                </h3>
                <h1 className='py-4 text-2xl font-medium text-[#172026] lg:text-[42px] 
                    lg:leading-[58px]'>
                    Let&apos;s clarify some of your questions
                </h1>
                <p className='text-[#26485C] pb-6'>
                    We understand that you might have questions about our service,
                    how it works, and how it can benefit you. Here are answers to
                    some of the most common questions we receive from our users.
                </p>
            </div>
            <div className='lg:w-2/3'>
                <Accordion.Root
                    type='single'
                    defaultValue="item-1"
                    collapsible
                    className='flex flex-col gap-y-4'
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item
                                value={`item-${index + 1}`}
                                className='bg-[#E3F1FF] p-[16px] rounded-[8px]'
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className='flex w-full items-center justify-between'>
                                        <p className='text-left font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                        <span><Image src={plus} alt='See more' className='h-5 w-5' /></span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}

                </Accordion.Root>
            </div>
        </div>
    )
}

export default FAQ