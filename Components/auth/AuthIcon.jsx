import React,{useState, useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import AuthModal from "./AuthModal";
import SideNavBar from "../layout/SideNavBar";
/**
 * @author
 * @function AuthIcon
 **/

export const AuthIcon = (props) => {
  const userstate = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const handleOpenSideBar = () => {
    setOpen((state) => !state);
  };
  return (
    <div>
      {userstate?.username ? (
        <div className="flex items-center ">
          <div>
            <Image
              className=" rounded-full object-cover cursor-pointer "
              src={userstate.avatar}
              width={36}
              height={36}
              onClick={handleOpenSideBar}
            />
          </div>
        </div>
      ) : (
        <span className="py-1 px-4 rounded-full border-[1px] border-gray-600 flex justify-center items-center cursor-pointer hover:border-black text-[1rem]">
          <button onClick={() => modalRef.current()}>Login</button>
        </span>
      )}

      <AuthoModal modalRef={modalRef} />
      <SideNavBar openSideBar={open} setOpenSideBar={setOpen} />
    </div>
  );
};
