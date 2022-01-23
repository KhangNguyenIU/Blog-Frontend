import React from "react";
import brandingImage from "../../public/favico.png";
import Image from "next/image";
import Link from "next/link";
import {checkBlogConditionToBeSubmit} from "../../utils/checkConditionToSubmitBlog";

const dummyImg ='https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
const CrudNavBar = ({modalRef, title,background, content }) => {
  const disable = checkBlogConditionToBeSubmit(title,background,content)
  return (
    <React.Fragment>
      <div className="flex  justify-between py-5 px-20">
        <div className="cursor-pointer">
          <Link href={'/'}>
            <Image src={brandingImage} width={32} height={32} />
          </Link>
          <h1 className="redcolor">TEST</h1>
        </div>
       
        <div className="flex items-center">
        <div >
          <button 
          className="ml-5 py-1 px-2 bg-lime-600 rounded-3xl text-white hover:bg-lime-800 font-sans cursor-pointer text-sm disabled:bg-gray-400 mr-5"
          disabled={!disable}
          onClick={()=>modalRef.current()}>Publish</button>
        </div>
          <Image 
          className=" rounded-full object-cover"
          src={dummyImg} width={42} height={42} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CrudNavBar;
