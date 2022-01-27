import React from 'react'
import { motion } from 'framer-motion'
/**
* @author
* @function CategorySidePart
**/

const arr =['Manga', 'Slice of life', 'Romance','Psychology', 'School life']
export const CategorySidePart = (props) => {
  return(
    <div className='flex flex-col'>
        <h1 className='font-hinano-sans text-[16px] font-medium text-[#292929] mt-3'> Recommended Topic</h1>
        <motion.div 
        initial={{y:-50}}
        animate={{y:0}}
        className="flex flex-wrap mt-5 md:pr-6">
            {
                arr.map((item,index)=>(
                    <span className="py-2 px-3 rounded-full bg-[#f2f2f2] hover:bg-[#EAEAEA] ease-in duration-150 cursor-pointer text-[#292929] mr-2 mb-2 text-[14px] leading-6 font-normal" key={item}>{item}</span>
                ))
            }
        </motion.div>
    </div>
   )
  }
