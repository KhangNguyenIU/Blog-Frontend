import React, { useRef, useState } from "react";
import Image from "next/image";
import useClickOutside from "../../hooks/useClickOutside";
import { useSelector } from "react-redux";
import Link from "next/link";
import { signout } from "../../api/auth.api";
import { useRouter } from "next/router";
const dummyImg =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";

const SideNavBar = ({ openSideBar, setOpenSideBar }) => {
  const router = useRouter();
  const userstate = useSelector((state) => state.user);
  const sideNavRef = useRef(null);

  useClickOutside(sideNavRef, () => {
    if (openSideBar) setOpenSideBar(false);
  });


  const logout = () => {
    signout()
      .then((response) => {
        console.log("helo");
        router.reload(window.location.pathname);
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <div className={`${openSideBar ? "visible" : "invisible"} `}>
        <div
          ref={sideNavRef}
          className="fixed top-0 right-0 h-full w-[15rem] md:w-[20rem] blue-glassmorphism z-50 flex flex-col justify-center items-center "
        >
          <div>
            <div className="mt-[-100px] text-center ">
              <Image
                className=" rounded-full object-cover cursor-pointer opacity-90 hover:opacity-100"
                src={userstate?.avatar ?? dummyImg}
                width={90}
                height={90}
              />
              <p className="font-lora-serif text-xl text-gray-800">
                @{userstate.username}
              </p>
            </div>

            <div className="flex flex-col mt-5">
              <ul>
                <Link href="/new-story" key="Afre" className="list-item">
                  <a className="list-item">Write a story</a>
                </Link>
                <Link href="/" key="Lijs" className="list-item">
                  <a className="list-item">Stories</a>
                </Link>
                <Link href="/" key="KmHt" className="list-item">
                  <a className="list-item">Design your profile</a>
                </Link>
             
                <Link href="#" key="CbHt" className="list-item">
                  <a className="list-item">Settings</a>
                </Link>
                <li key="KtHt" className="list-item" onClick={logout}>
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideNavBar;
