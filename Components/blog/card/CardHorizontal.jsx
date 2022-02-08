import React from "react";
import Image from "next/image";
import { convertToLocaleDate } from "../../../utils/datehandle";
import { useRouter } from "next/router";
import {motion} from 'framer-motion'
import { smartCutString } from "../../../utils/smartCutString";
import {BsBookmark} from 'react-icons/bs'
/**
 * @author
 * @function CardHorizontal
 **/
const dummyImg =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";

export const CardHorizontal = ({blog}) => {
  const router = useRouter()
  return (
    <motion.div 
    initial={{opacity:0,x:-50}}
    animate={{opacity:1,x:0}}
    className="flex items-center  pb-5 mb-5 cursor-pointer" 
    onClick={()=>router.push(`/blog/${blog.slug}`)}>
      <div className="flex flex-col basis-2/3 justify-start">
        <div className="flex items-center">
          <div >
          <Image
              src={blog.user.avatar}
              className=" rounded-full object-cover"
              width={28}
              height={28}
            />
          </div>
          <span className="ml-3 font-medium text-[15px] ">{blog.user.username}</span>
        </div>
        <h1 className="font-lora-serif text-[18px] md:text-2xl font-medium italic leading-5 mb-2">{blog.title}</h1>
        <p className="text-[12px] text-[#292929] mb-1 font-hina-serif hidden md:block">
          {smartCutString(blog.exceprt,100)}
        </p>
        <div className="flex justify-between text-gray-600  text-[11px] md:text-[13px]">
          <div>
            <span className="">{convertToLocaleDate(blog.created_at)}</span>
            <span className="ml-3"> 4 min read </span>
          </div>
          <div>
            <BsBookmark/>
          </div>
        </div>
      </div>

      <div className="flex basis-1/3 px-3 items-center w-[100%] h-[100%] ml-5">
        <Image
          src={blog.cover}
          className="ml-5 object-cover"
          height={142}
          width={182}
        />
      </div>
    </motion.div>
  );
};
