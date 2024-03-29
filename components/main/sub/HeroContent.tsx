 "use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center px-20 mt-40 w-full z-[20]'
    >
    <div className='h-full w-full flex flex-col gap-5 pl-20 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
        >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
        <h1 className='Welcome-text text-[13px]' >FullStack Developer Portfolio</h1>
        </motion.div>
        
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >  <span>
           Providing <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
           project experience
           </span>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
         I am a Full Stack Developer with experience in website, Mobile and Software Development. Check out my projects and skills.
        </motion.div>

        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
            Learn More
        </motion.a>

    </div>

    <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex pl-40 justify-center items-center"
        >
            <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            />

        </motion.div>

    </motion.div>
  )
}

export default HeroContent