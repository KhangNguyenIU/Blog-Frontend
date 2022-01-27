import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
/**
 * @author
 * @function AuthorSuggest
 **/

const dummyImg =[
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
"https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80"
]

const dummyName =["Jucember", "Askan ", "Mohamed"]
export const AuthorSuggest = (props) => {
  return (
    <div className="flex flex-col mt-5">
      <h1 className="font-hinano-sans text-[16px] font-medium text-[#292929] mt-3">
        Who to follow
      </h1>
      <motion.div
      
      initial={{x:50}}
        animate={{x:0}}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex items-center mt-5">
          <div className="w-20 cursor-pointer">
            <Image
              src={dummyImg[index]}
              className=" rounded-full object-cover"
              width={36}
              height={36}
            />
          </div>
          <div className="w-60 cursor-pointer">
            <h2 className="font-semibold text-[14px]">{dummyName[index]} </h2>
            <p className="text-[11px] text-[#292929]">
              Software Developer | Freelancer Content Writer & Web Develope..
            </p>
          </div>
          <div className="w-20">
            <span className="py-2 px-3 border-[1px] border-gray-600 hover:border-black  ease-in duration-150 rounded-full cursor-pointer text-sm">
              Follow
            </span>
          </div>
        </div>
        ))
        }
      </motion.div>
    </div>
  );
};
