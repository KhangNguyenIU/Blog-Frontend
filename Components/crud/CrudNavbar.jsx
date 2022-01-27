import React, { useEffect, useRef } from "react";
import brandingImage from "../../public/favico.png";
import Image from "next/image";
import Link from "next/link";
import { checkBlogConditionToBeSubmit } from "../../utils/checkConditionToSubmitBlog";
import { AuthIcon } from "../auth/AuthIcon";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthActionCreator } from "../../state";
import { isAuth, signout } from "../../api/auth.api";
import { CreateCategory } from "./CreateCategory";

const dummyImg =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
const CrudNavBar = ({ modalRef, title, background, content }) => {
  const disable = checkBlogConditionToBeSubmit(title, background, content);
  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(AuthActionCreator, dispatch);
  const createCateRef = useRef(null)
  useEffect(() => {
    (async () => {
      try {
        const data = await isAuth();
        addUser(data.data);
      } catch (error) {
        // throw error
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <div className="flex  justify-between py-5 px-20">
        <div className="cursor-pointer">
          <Link href={"/"}>
            <Image src={brandingImage} width={32} height={32} />
          </Link>
        </div>

        <div className="flex items-center">
          <div>
            <button
              className="ml-5 py-1 px-2 bg-lime-600 rounded-3xl text-white hover:bg-lime-800 font-sans cursor-pointer text-sm disabled:bg-gray-400 mr-1"
              disabled={!disable}
              onClick={() => modalRef.current()}
            >
              Publish
            </button>

            <button
              className="ml-5 py-1 px-3 bg-lime-600 rounded-3xl text-white hover:bg-lime-800 font-sans cursor-pointer text-sm disabled:bg-gray-400 mr-5"
              onClick={() => createCateRef.current()}
            >
              new Cate
            </button>
          </div>
          {/* <Image 
          className=" rounded-full object-cover"
          src={dummyImg} width={42} height={42} /> */}
          <AuthIcon />
          <CreateCategory modalRef={createCateRef}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CrudNavBar;
