import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "../../api/auth.api";
import { AuthActionCreator } from "../../state/index";
import { bindActionCreators } from "redux";
import branding from "../../public/favico.png";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { AuthIcon } from "../auth/AuthIcon";
import Link from 'next/link';
const dummyImg =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";

const NavBar = () => {
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(AuthActionCreator, dispatch);


  useEffect(() => {
    (async () => {
      try {
        const data = await isAuth();
        addUser(data.data);
      } catch (error) {
        // throw error
      }
      setFlag(true);
    })();
  }, []);



  return (
    <React.Fragment>
      <div className="flex py-3 justify-between px-5 md:px-[10rem] border-b-[1px] shadow-[0_0_5px_5px_rgba(0,0,0,0.05)]">
        <div>
          <Link href='/'>
          <Image
            className="cursor-pointer"
            src={branding}
            width={30}
            height={30}
          />
          </Link>
         
        </div>
        {flag && (
          <div className="flex items-center">
            <BsSearch className="mr-5 text-gray-600 cursor-pointer text-xl" />
            <AuthIcon/>
          </div>
        )}

     
      </div>
      
    </React.Fragment>
  );
};

export default NavBar;
